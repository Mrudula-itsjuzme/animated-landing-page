# FurryTail Animated Hero

A mascot-led landing-page hero for a warm, playful pet-care brand.

The concept opens with a short three-second intro sequence, then settles into an expressive editorial composition with layered typography, hand-drawn details, and a dog mascot whose tail continues to wag after the entrance animation.

## What the prototype explores

- a three-second branded intro animation
- mascot entrance and settle motion
- continuously animated tail movement
- layered character artwork using separate body and tail assets
- playful editorial typography
- warm pet-care storytelling
- reduced-motion support
- session-based intro playback so the opening does not repeat constantly
- responsive hero composition

## Experience flow

1. The page opens on a dark branded intro state.
2. The mascot enters with movement, dust details, and a grounded shadow.
3. The hero copy and visual composition settle into place.
4. The tail continues to animate as a subtle idle behaviour.
5. Returning visitors in the same session skip the full intro.

## Tech stack

- React 19
- Vite
- Lucide React
- CSS keyframe animation
- `sessionStorage` for intro state
- `prefers-reduced-motion` accessibility handling

## Run locally

```bash
git clone https://github.com/Mrudula-itsjuzme/ui_trial.git
cd ui_trial
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Design direction

The interface avoids a conventional card-heavy product layout. Instead, the hero is treated as a single illustrated scene where the mascot, copy, doodles, and calls to action work together.

The motion is intentionally front-loaded: the arrival gets attention, while the settled state stays calm enough for the page to remain usable.

## Accessibility notes

- the intro is skipped for users who prefer reduced motion
- decorative mascot layers are hidden from assistive technology
- interactive calls to action remain standard links
- the full intro only plays once per browser session

## Current scope

This repository focuses on the hero experience and animation system. Product pages, checkout, backend services, and the remaining site sections are outside the current prototype.

## Author

Built by [Pedamallu Sai Mrudula](https://github.com/Mrudula-itsjuzme) as an animated brand and interaction-design experiment.