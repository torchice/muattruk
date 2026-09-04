# Design — MuatTruk

Locked design system for the MuatTruk lead-gen site. Every page redesign reads this
file first. Do not regenerate per page — amend this file when the system grows.

The site has **one job**: get a fleet buyer to open WhatsApp with a tire size
pre-filled. Everything below serves that, and nothing fights it.

## Genre

Practical-commercial. Warm, direct, trustworthy — a real Surabaya truck-parts shop,
not an editorial magazine and not a SaaS landing. De-editorialized: mono kickers and
forced `01 02 03` numbering are used sparingly, only where they aid comprehension.

## Audience

B2B truck / fleet buyers: fleet owners, workshop owners, drivers. Often older,
mobile-first, low patience for tech. Design for **big tap targets, plain labels,
one obvious next step per screen.**

## Macrostructure family

- Marketing / home: **price-forward split hero → catalog → trust → how-to → FAQ**.
  Price is shown up front (the winning move), CTA hierarchy carries the rest.
- Product pages (ban/oli/size): **buy-box hero → context → FAQ → related**. One
  primary WA in the buy box, one after FAQ. Never more.
- Tool pages (cek-ukuran): **picker-first**. WA is the shortcut, not the headline.

## Theme

Kept from the original `globals.css` `@theme` (the palette was never the problem).

- `--color-muat-primary`      #f15a22   (signal orange — the one accent)
- `--color-muat-primary-dark` #c6420f   (hover / pressed)
- `--color-muat-primary-soft` #fbe6da   (tint)
- `--color-muat-ink`          #141210   (text, dark blocks)
- `--color-muat-muted`        #5a544c
- `--color-muat-faint`        #8f887d
- `--color-muat-line`         #e4ded2
- `--color-muat-surface`      #fbfaf5
- `--color-muat-bg`           #f3f1ea
- `--color-muat-ok`           #2e7a54

New tokens (added this redesign):

- `--color-wa`     #25d366   **ICON ONLY** — the WhatsApp glyph. Never a button body.
- `--color-focus`  #141210   focus-visible ring (2px + 2px offset, ≥3:1 on paper)

Accent budget: orange ≤ ~5% of any viewport. Green appears only as the ~20px WA glyph.

## Typography

- Body / display: `system-ui` stack (kept). Display weight 800, tight tracking.
- Mono: `ui-monospace` stack — for eyebrows, prices (`tnum`), meta. Sparingly.
- Minimum body size on mobile: 16px. No mono for running copy.

## Spacing

4-point scale via Tailwind utilities. Section rhythm: `py-14`–`py-20` hero, `py-16`
sections. Cards `p-5`–`p-7`.

## Motion

- Easing: `--ease-fluid` cubic-bezier(0.22, 1, 0.36, 1).
- Reveal: `.rise` fade+slide once, hero only. No scroll-triggered cascades.
- `prefers-reduced-motion`: all animation off (already wired).

## CTA voice — the WhatsApp hierarchy (the core rule)

The old site had ~16 identical green WA buttons per page, in 3 colors and 6 labels,
with no hierarchy. That is the #1 slop source and it *lowered* trust. Fixed by a
strict 3-tier system. **WhatsApp green is never a button body — only the glyph.**

| Tier | Component | Look | Min tap | Use | Budget |
|------|-----------|------|---------|-----|--------|
| **Primary** | `WaButton variant="primary"` | orange solid, white text, green WA glyph | 48px | hero, closing CTA, header anchor, assistant panel | **max 1 loud per decision-point** |
| **Secondary** | `WaButton variant="secondary"` | ink outline, ink text, green glyph | 44px | footer, alternate action | 1 per section |
| **Quiet** | `WaButton variant="quiet"` | orange text link, green glyph + `→` | 44px hit | product/size cards (size pre-filled) | unlimited but recessive |

- **One verb.** Primary/secondary label = **"Chat harga di WA"**. Quiet card label =
  **"Tanya harga →"**. No other phrasings.
- **Per-page loud budget: ≤ 3 primaries** across a full scroll. Quiet links carry the
  contextual, high-intent (pre-filled) asks — they are the ≤2-tap money taps.
- **Exactly one persistent float** — the assistant launcher. WA handoff lives inside
  its panel. Never two stacked floats.
- Navigation links that go to a *page* (not WhatsApp) must not be labeled "Tanya" —
  that fakes a chat doorway. Use "Lihat harga →".

## Accessibility (non-negotiable for "all people")

- Every interactive element: visible `:focus-visible` ring (`--color-focus`, 2px, 2px
  offset), shown instantly, never animated.
- Tap targets ≥ 44px. Primary CTAs ≥ 48px.
- Contrast ≥ 4.5:1 body, ≥ 3:1 large text and UI.
- WA glyph has `aria-hidden`; the button carries a real text label.

## What pages MUST share

Wordmark, orange accent + its ≤5% placement, the system-ui type, the WA hierarchy +
one verb, the single float, the focus ring.

## What pages MAY differ on

Macrostructure within the family, section order, which quiet asks appear.

## Exports

See `tokens.css` at project root for the portable token block. Live source of truth
is the `@theme` block in `src/app/globals.css`.
