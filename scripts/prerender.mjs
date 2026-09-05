// Prerenders every static route into its own dist/<route>/index.html.
//
// Why: this is a client-only React app (no SSR). GitHub Pages has no
// server-side rewrite support, so any URL other than "/" returns a real
// HTTP 404 (the deploy pipeline's index.html -> 404.html copy makes real
// browsers still render correctly once the JS boots, but crawlers and
// link-preview bots that read the raw HTTP status/body never get that far).
//
// This script boots the actual built app in headless Chromium for each
// route — the same engine a visitor's browser uses — scrolls it to trigger
// every framer-motion `whileInView` animation (otherwise those sections
// would be captured mid-fade at opacity:0), and saves the settled DOM as a
// static file. No app code changes, no SSR-safety requirements: nothing
// here cares whether a component touches window/document/localStorage,
// because it's a real browser, not a Node string-render.
//
// Root "/" overwrites dist/index.html directly (same content, just now
// with real markup inside #root instead of an empty div). Every other
// route gets dist/<route>/index.html. The existing 404.html fallback step
// in deploy.yml still runs after this, as a safety net for any path not
// in ROUTES below.

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4321;

// Every static path in src/App.jsx's <Routes>, excluding the "*" catch-all.
const ROUTES = [
  '/',
  '/kitchens',
  '/countertops',
  '/cabinet-doors',
  '/kitchen-sinks',
  '/kitchen-faucets',
  '/bathroom-sinks',
  '/vanities',
  '/bathtubs',
  '/bathroom-faucets',
  '/process',
  '/about',
  '/contact',
  '/configurator',
  '/trade',
  '/trade/process',
  '/trade/capabilities',
  '/trade/quality',
  '/trade/projects',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// Minimal static file server over dist/, with SPA fallback to index.html —
// mirrors how the real host serves the app (and how `vite preview` would).
function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    try {
      const st = await stat(filePath);
      if (st.isDirectory()) filePath = path.join(filePath, 'index.html');
    } catch {
      filePath = path.join(DIST, 'index.html'); // SPA fallback
    }

    try {
      const body = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// Scrolls the page to the bottom in viewport-sized steps (not one big jump)
// so every whileInView section actually passes through the viewport and
// gets observed, then waits for the last animation's transition to settle.
async function triggerScrollAnimations(page) {
  const viewportHeight = 900;
  await page.evaluate(async (step) => {
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, total);
  }, viewportHeight);
  await page.waitForTimeout(1200); // longest transition (~0.9s) + stagger delay
}

// The scroll in triggerScrollAnimations can cross a scroll-depth popup trigger (e.g. the
// Founding Client promo), opening a modal that locks body scroll via
// document.body.style.overflow = 'hidden'. If that got captured into the static file, every
// real visitor would load a permanently unscrollable page — hydration starts each modal's
// isOpen state back at false, so the effect that would normally restore the lock never runs.
// Dismiss any open dialog and force-clear the lock before snapshotting, so a promo popup can
// never freeze the site even if a future one forgets to clean up after itself.
async function settleOpenModals(page) {
  await page.evaluate(() => {
    document.querySelectorAll('[role="dialog"] [aria-label="Close" i]').forEach((btn) => btn.click());
  });
  await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 2000 }).catch(() => {});
  await page.evaluate(() => {
    document.body.style.overflow = '';
  });
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const url = `http://localhost:${PORT}${route}`;

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.getElementById('root')?.children.length > 0);
  await triggerScrollAnimations(page);
  await settleOpenModals(page);

  const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);
  await page.close();

  const outPath = route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, html);
  return outPath;
}

async function main() {
  // Fail loudly if dist/ wasn't built yet, rather than silently prerendering nothing.
  await stat(path.join(DIST, 'index.html'));

  const server = await startServer();
  const browser = await chromium.launch();

  try {
    for (const route of ROUTES) {
      const outPath = await prerenderRoute(browser, route);
      console.log(`✓ ${route.padEnd(20)} -> ${path.relative(path.resolve(__dirname, '..'), outPath)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
