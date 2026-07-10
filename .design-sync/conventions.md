## Kopperstone UI — conventions

Kopperstone is a luxury kitchen & bath fabricator (countertops, cabinetry,
faucets, sinks, vanities, tile, hardware). Its components are plain
Tailwind-styled React (shadcn/ui "new-york" style) — no context provider is
required to render them (verified across all 48: no `[PROVIDER_*]` errors in
any preview). The one exception: **Toast** notifications need a single
`<Toaster />` mounted once near your app root (it renders its own internal
`ToastProvider`) — trigger toasts elsewhere with the `useToast` hook / `toast()`
helper exported alongside `Toast`.

### Styling idiom: Tailwind utility classes + CVA variant props

There are no bare custom CSS classes to memorize — components style themselves
with ordinary Tailwind utilities, and the *only* per-component API surface you
compose with is each component's own `variant`/`size` prop (via
class-variance-authority), e.g. `<Button variant="outline" size="lg">`. When
laying out your OWN wrapper markup around these components (containers, grids,
spacing), use these real vocabularies — don't invent classes that don't exist:

- **Semantic color tokens** (light/dark aware, defined as HSL CSS vars):
  `bg-background` / `text-foreground`, `bg-card` / `text-card-foreground`,
  `bg-primary` / `text-primary-foreground`, `bg-secondary` / `text-secondary-foreground`,
  `bg-muted` / `text-muted-foreground`, `bg-accent` / `text-accent-foreground`,
  `bg-destructive` / `text-destructive-foreground`, `border-input`, `border-border`, `ring-ring`.
- **Literal brand colors** (fixed, not theme-switched): `bg-navy` `#0E1A2B`,
  `bg-gold` `#C9A77C` (the primary accent — buttons, active states, CTAs),
  `bg-cream` `#F5EFE6`, `bg-charcoal` `#2A2E33`, `bg-warm-grey` `#8C8680` (and
  the `text-*`/`border-*` variants of each).
  s
- **Fonts**: `font-serif` → "Cormorant Garamond" (use for headings/titles —
  it's what gives Kopperstone's editorial, high-end feel), `font-sans` →
  "Inter" (body text, UI labels). Both load from a Google Fonts CDN import —
  don't re-declare `@font-face`.
- **Corners are sharp by design**: `rounded-md`/`rounded-lg`/`rounded-sm` all
  resolve to `0` (see `--radius: 0rem`). Don't add manual square overrides —
  it's already the default. Radix-driven circular controls (radio dots,
  avatars) are the deliberate exception.
- **Spacing/layout**: standard Tailwind scale (`p-6`, `gap-4`, `space-y-1.5`,
  etc.) — nothing custom.

### Where the truth lives

Read `styles.css` (it `@import`s the full compiled stylesheet, including every
class and CSS variable above) before styling anything by hand. Each
component's own `<Name>.prompt.md` documents its exact props and shows real
usage examples ported from this sync — read it before composing that
component, especially for compound ones (Dialog, Card, Select, Form, Sheet,
Accordion, Tabs, etc. all export multiple named parts, e.g. `DialogHeader`,
`DialogTitle`, `DialogFooter` — compose them together, they're not standalone).

### Example — real, verified composition

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'kopperstone-ui';

<Card style={{ maxWidth: 360 }}>
  <CardHeader>
    <CardTitle>Calacatta Gold Quartz</CardTitle>
    <CardDescription>Kitchen countertops, fabricated in-house</CardDescription>
  </CardHeader>
  <CardContent>
    <p style={{ margin: 0, fontSize: 14, color: 'hsl(var(--muted-foreground))' }}>
      A warm, veined surface built for daily use — heat resistant, non-porous,
      and backed by our lifetime fabrication warranty.
    </p>
  </CardContent>
  <CardFooter>
    <Button>Request a Sample</Button>
  </CardFooter>
</Card>
```
