# Chronos agent instructions

## Design system

- Use React + Vite with TypeScript and TSX files only.
- Keep routing minimal and use Wouter.
- Keep data fetching minimal and use SWR.
- Use DaisyUI as the default UI system for buttons, cards, panels, and form elements.
- Prefer DaisyUI neutral, slate, stone, and soft muted palettes.
- Do not use purple, indigo, or other loud accent colors unless a product requirement explicitly calls for them.
- Avoid introducing custom color schemes that fight the design system.
- Keep the visual language consistent across the app: forms, buttons, cards, panels, and page layouts all use the same tone.
- Maintain a calm, minimal, vibe-free product aesthetic.

## Project organization

- Put page-level routes under src/routes.
- Put reusable queries/hooks under src/hooks.
- Keep the app structure lean and small.
- Prefer simple, readable files over layered abstraction unless the feature clearly requires it.

## Current app direction

- The landing page can remain intentionally minimal.
- Keep the UI polished and cohesive.
- Favor small, focused changes that improve the product foundation rather than speculative features.
