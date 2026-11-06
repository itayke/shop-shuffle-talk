# Shop Shuffle style

The game's look and sound, for the deck. The browsable version (screenshots, palettes, type, every sound playable): https://claude.ai/artifact/GJc5gYWMxUKvatgNzZ3ucd. `index.html` is that page, and opens offline next to these files.

- `img/street-*.png`: six real frames from a round (lobby, walk-ins banner, walk-ins, parachutes, a catch, podium), 1920×1032 with the presenter bar cropped off. Scale with `image-rendering: pixelated`.
- `img/shops-designs.png`: the ten shop designs in three tints.
- `shop-sfx.js`: the game's own synth and sounds, bundled from the repo. `ShopSfx.play(id, opts?, pan?)`, `ShopSfx.ids`, `ShopSfx.length(id)`. Audio starts on the first key or click.
- `pixel-title.js`: titles drawn like the lobby's (Jersey 15, hard-edged, round outline). `PixelTitle.when(canvas, text, { px, color, outline })`.
- `tokens.css`: the screen's colors and fonts, light and dark.

Fonts: Jersey 15 (titles), Press Start 2P (small pixel labels, sizes in multiples of 8 px), Work Sans (body), all from Google Fonts.

Rebuild `shop-sfx.js` if the game's sounds change: it bundles `packages/screen/src/sound/{sounds,synth}.ts` with esbuild.
