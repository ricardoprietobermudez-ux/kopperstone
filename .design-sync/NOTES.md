# design-sync notes — kopperstone

## Repo shape
- `kopperstone` is a Vite/React app (`base44-app`), not a publishable component
  library — no `dist/`, no `main`/`module` entry. The design system is
  `src/components/ui/` (shadcn/ui, "new-york" style, Tailwind + CSS-variable
  tokens). Everything else in `src/components/` (home/, kitchens/, configurator/,
  layout/) is page-specific content, out of scope for this sync.
- No Storybook, no `.stories.*` files anywhere — package shape, synth-entry mode
  (no dist to bundle from). `cfg.srcDir: "src/components/ui"` scopes both the
  synth entry and component discovery to just that folder.
- Package manager: npm (`package-lock.json`). Node v26 in use, no `.nvmrc` pin.

## Brand tokens (for conventions.md / previews)
- Colors: navy `#0E1A2B`, gold `#C9A77C` (primary/accent), cream `#F5EFE6`
  (background), charcoal `#2A2E33`, warm-grey `#8C8680`. All also exposed as
  HSL CSS vars (`--primary`, `--background`, etc.) per shadcn convention.
- Fonts: serif "Cormorant Garamond" for headings, sans "Inter" for body — both
  loaded via a Google Fonts `@import url(...)` in `src/index.css` (remote,
  `[FONT_REMOTE]`, non-blocking — no font files to ship).
- `--radius: 0rem` — ALL of `rounded-lg`/`rounded-md`/`rounded-sm` resolve to
  sharp corners. This is deliberate brand styling (architectural/luxury look),
  not a bug. Radio buttons are still circular (Radix hardcodes
  `rounded-full`) — that's correct, not a violation of the sharp-corner rule.

## Known collisions / fixes already applied (see config.json + overrides/)
- `toaster.jsx` and `sonner.jsx` both export a component named `Toaster` — ESM
  `export *` silently drops the ambiguous binding. Only `toaster.jsx`'s
  `<Toaster/>` is actually mounted (`src/App.jsx`); `sonner.jsx` is dead code.
  Fixed via a forked `source-kit.mjs` (`.design-sync/overrides/source-kit.mjs`,
  declared in `cfg.libOverrides`) that drops `sonner.jsx` from the src scan.
  **If sonner.jsx is ever wired up for real, this exclusion needs revisiting.**
- `GoldOverline` (Kopperstone's own brand atom, a default export) is never
  forwarded by `export *`. Fixed via `.design-sync/shims/named-exports.mjs`
  (wired through `cfg.extraEntries`), which re-exports it by name.
- Compiled CSS: there's no built stylesheet anywhere (raw `@tailwind` directives
  in `src/index.css`), so `cfg.cssEntry` points at a generated file
  (`.design-sync/.cache/compiled-tailwind.css`) produced by `cfg.buildCmd`
  (`npx tailwindcss -i src/index.css -o .design-sync/.cache/compiled-tailwind.css
  --config tailwind.config.js`) — **always re-run this before rebuilding**, or
  the cssEntry file will be stale/missing.
- 247 raw PascalCase exports were discovered in `src/components/ui/` (shadcn
  compound components export many sub-parts per file, e.g. `DialogHeader`,
  `DialogTitle`). Only 48 "primary" components are exposed as their own cards
  via `componentSrcMap: {<subpart>: null}` for the other ~199 — the sub-parts
  remain fully usable in the bundle, just without their own card/doc.

## Known render warns (triaged, expected on re-sync)
- `[TOKENS_MISSING]`: 6 Radix runtime CSS vars (`--radix-accordion-content-height`,
  `--radix-toast-swipe-*`, `--radix-navigation-menu-viewport-*`,
  `--tw-shadow-color`) — all set inline by JS at runtime, not missing tokens.
- `[FONT_REMOTE]`: Inter + Cormorant Garamond load via Google Fonts CDN
  `@import` — expected, no action.
- `[EXPORT_COLLISION]` warning naming `GoldOverline` (and originally `Toaster`)
  in the shim vs. main package — expected/harmless; see the collision fixes
  above. The static export-name scan doesn't know these are exactly the cases
  the shim/exclusion mechanism was built for.

## Authoring scope (this sync)
23 components authored with rich previews (see `.design-sync/previews/`); the
remaining 25 ship as floor cards (fully functional, just an unauthored
placeholder card — upgradable on any future sync):

**Authored:** Button, Card, Dialog (solo/orchestrator), Alert, Badge, Checkbox,
Input, Textarea, Toggle, Form, GoldOverline (batch A), Avatar, Menubar,
DropdownMenu, Popover, Tooltip, Sheet (batch B), Accordion, Tabs, Select, Table,
Progress, RadioGroup (batch C).

## Overlay card overrides (config.json `overrides`)
Dialog, Popover, Tooltip, DropdownMenu, Sheet, Menubar, Select all need
`cardMode: "single"` + a fixed `viewport` so their open/overlay state renders
inside the card instead of escaping or collapsing to zero height. Button needed
`cardMode: "column"` because one Sizes-story button ("Schedule a Consultation")
was too wide for a multi-column grid cell.

## Debugging tip surfaced by batch C
If a capture sheet renders a component **totally blank** with no visible error
text, don't assume a CSS/layout issue first — check
`.design-sync/.cache/review/<Name>.json` → `pageErrs`. React 18's
`createRoot().render()` unmounts the whole tree on an uncaught render error with
no error boundary in the capture harness, so a real runtime error (e.g. a Radix
invariant like "SelectLabel must be used within SelectGroup") shows up as a
blank screenshot, not visible error text. `pageErrs` has the real message.

## Non-blocking cosmetic quirk (batch B)
In the Sheet preview's capture, the `SheetTrigger` button doesn't visually dim
under the dark overlay backdrop within the single-card viewport (a stacking
context / `position: fixed` side effect of the narrow capture viewport, not a
bug in the story). Sheet content itself renders complete and fully styled.
Likely affects Dialog's overlay similarly if ever scrutinized closely — not
worth chasing, doesn't affect what the design agent actually builds with.

## Re-sync risks
- If `sonner.jsx` is ever wired up for real toast usage (currently dead code),
  the `source-kit.mjs` fork's hardcoded exclusion will silently keep dropping
  it — revisit `.design-sync/overrides/source-kit.mjs` if that happens.
- `cfg.cssEntry` is a generated file, not committed — every rebuild depends on
  `cfg.buildCmd` having been re-run first (fresh clone or re-sync must run it).
- The 199 componentSrcMap exclusions are name-based (sparse, hand-derived from
  the 247 discovered exports at sync time). If a NEW shadcn component is added
  to `src/components/ui/` later, it will appear as a new top-level card by
  default — check whether it's a compound-sub-part needing exclusion (add
  `null` to componentSrcMap) or a legitimate new primary component.
- Only 23 of 48 components have authored previews; the other 25 are still on
  the floor card. Authoring them is a good next incremental sync.
