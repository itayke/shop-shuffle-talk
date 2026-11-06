// Shop Shuffle's title type, as the game's lobby draws it: Jersey 15 made hard-edged (every pixel solid or clear),
// with a smooth round outline. Ported from the game's PixelText. Load Jersey 15 from Google Fonts first.
//   PixelTitle.draw(canvas, 'Shop Shuffle', { px: 5 })
var PixelTitle = (() => {
  // Jersey 15 has this many font pixels per em, so a size of px × GRID lands every font pixel on px screen pixels
  const GRID = 27;
  // Outline width in font pixels, and how opaque smooth text must be to become ink
  const OUTLINE = 1.6;
  const INK_ALPHA = 128;
  const DEFAULTS = { px: 4, color: '#e6a200', outline: '#17202b', font: "'Jersey 15', 'Arial Black', Impact, sans-serif", upper: true };

  function rgb(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
  }

  /** Draw one line of title text into the canvas, sized to fit it. Pass outline: null for no outline. */
  function draw(canvas, text, opts = {}) {
    const o = { ...DEFAULTS, ...opts };
    const ratio = window.devicePixelRatio || 1;
    const size = Math.round(o.px * GRID * ratio);
    const pad = o.outline ? Math.round(o.px * OUTLINE * ratio) : 0;
    const shown = o.upper ? text.toUpperCase() : text;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const font = `400 ${size}px ${o.font}`;
    ctx.font = font;
    const m = ctx.measureText(shown);
    const top = Math.ceil(m.actualBoundingBoxAscent);
    const w = Math.max(1, Math.ceil(m.width) + 2 * pad);
    const h = Math.max(1, top + Math.ceil(m.actualBoundingBoxDescent) + 2 * pad);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w / ratio}px`;
    canvas.style.height = `${h / ratio}px`;
    ctx.font = font;
    ctx.fillText(shown, pad, pad + top);
    let img = ctx.getImageData(0, 0, w, h);
    const ink = new Uint8Array(w * h);
    for (let i = 0; i < ink.length; i++) ink[i] = img.data[i * 4 + 3] >= INK_ALPHA ? 1 : 0;
    ctx.clearRect(0, 0, w, h);
    const fill = rgb(ctx, o.color);
    ctx.clearRect(0, 0, w, h);
    if (pad) {
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2 * pad;
      ctx.strokeStyle = o.outline;
      ctx.strokeText(shown, pad, pad + top);
    }
    img = ctx.getImageData(0, 0, w, h);
    for (let i = 0; i < ink.length; i++) {
      if (!ink[i]) continue;
      img.data.set([fill[0], fill[1], fill[2], 255], i * 4);
    }
    ctx.putImageData(img, 0, 0);
  }

  /** Draw once the font is ready, and again if it arrives late. */
  function when(canvas, text, opts) {
    draw(canvas, text, opts);
    document.fonts.load(`400 27px 'Jersey 15'`).then(() => draw(canvas, text, opts));
  }

  return { draw, when, GRID };
})();
