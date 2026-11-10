# The deck

`index.html` is the deck; `slides.js` is its flow: every slide's words, media and notes, in show order. Edit `slides.js` and reload. The deck lays out each slide by itself, so there are no positions to set.

`slides.js` is a JavaScript object rather than YAML or JSON because the deck must play from disk (`file://`), where browsers won't let a page read a separate data file. It reads like JSON, but it allows comments and trailing commas, and its keys and strings need no quotes beyond the usual ones.

The deck needs no network: its fonts (Jersey 15, Press Start 2P, Work Sans) are in `fonts/` with their OFL licenses, and every image and clip is local.

## A slide

```js
{
  section: 'Games that did a job', // groups the flow list; carries on to the next slides until another section
  title: 'VR Gastro',              // the gold banner (one line)
  text: 'Sold for $2M',            // the line under it, in the tagline's style; wraps
  topBullets: ['One', 'Two'],      // a list under the text, above the media
  bullets: ['Three'],              // a list in a column left of the media; use either list, both or neither
                                   // in either list, **double asterisks** make words bold
  bulletWidth: 'wide',             // how wide the bullet column may grow: narrow, normal (default), wide, or a share like 0.45
  reveal: 'parallel',              // bullets and media come in per click: serial, parallel or false (see Reveal)
  media: ['clips/gastro-vr.mp4'],  // any number of clips or images, side by side
  color: 'green',                  // title color: gold (default), green or blue, like the game's round banners
  footer: 'Itay Keren',             // a line on the road, at the left; logo: 'img/x.png' puts an image at its right
  layout: 'stack',                 // only to override the automatic choice: stack, side or flank
  notes: 'What to say.',           // shown under the stage, never on it
  secs: 40,                        // planned time, summed per section and for the talk
}
```

Every field is optional. A misspelled field shows as a warning in the notes panel.

## Reveal

By default a slide comes in all at once: the media drops, the words wash in, the bullets follow. `reveal` makes it step in, one click per step, with the first step shown on arrival; the title and text are there from the start.

- **`serial`** (or `true`): one item per click: each media item, then the top bullets, then `bullets`.
- **`parallel`**: one of each per click: the first media item, top bullet and bullet together, then the second of each, and so on. Keep the lists in matching order.
- **`false`**: all at once, the default.

A media item drops onto the street when its step comes, with its caption, and its stamps land after it. Going back shows the previous slide with every step in. Set `reveal` beside `slides` in `slides.js` to make it the default for the deck; a slide's own `reveal` overrides it.

## Media

Each item is a path, or an object for more:

```js
media: [
  'clips/gastro-vr.mp4',                                  // video (mp4, webm, mov, m4v) or image (png, jpg, gif, ...)
  { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },   // caption: a label on the road under the card
  { src: 'img/street-lobby.png', pixel: true },           // pixel: keep pixel art hard-edged when scaled
  { todo: 'Spiropod in use', aspect: '9:16' },             // a placeholder card until the clip exists
  { src: 'clips/mushroom-11.mp4', stamps: ['img/award-apple-design-2017.png'] },  // stamps: images slammed onto the card
]
```

`stamps` are images (award laurels, say) that slam onto the top-right corner of a card's media once every card has landed, one after another, each ringing up like a paying customer in the game. Several stand in a row, shrinking to fit a narrow card. On a `reveal` slide they land with their card's step.

`aspect` (`'16:9'`, `'9:16'` or a number) sets a card's shape. A file's own shape is used when it has none; a `todo` defaults to 16:9. A file that doesn't load shows as a MISSING FILE card. Videos play muted and looping. Cut them with `../clips.sh` into `clips/`.

## Layouts

Bullets go where the slide puts them. The title and text sit at the same height on every slide with media, `topBullets` center in the sky between them and the media, `bullets` stand in a column left of the media, centered on it, and the media stands on the sidewalk. The column is only as wide as its longest line, up to `bulletWidth` (a share of the stage's width between its margins); past that, lines wrap. A wider limit keeps lines whole and shrinks the media to make room. If they leave the media too small, the notes panel says so. A slide with no media centers all its bullets under the text.

A slide without bullets picks one of these by itself, the one that gives the media the most room; `layout` names one instead (it applies only to slides without bullets):

- **Stack**: words in the sky, media standing on the sidewalk below. The default.
- **Side**: the title and text in a column left of the media. Chosen when that makes the media clearly larger (a portrait clip).
- **Flank**: a side layout that puts the title left of the media and the text right of it, if the title fits.
- **No media**: the words are centered in the sky with a larger title (the "Grab your phone" slide).
- **Title**: `kind: 'title'` makes the talk's cover: the title and text larger still, centered in the sky. Nothing drops; the words fade in. It shows no media.

```js
{ kind: 'title', title: 'Play Means Business', text: 'Games that do a job', footer: 'Itay Keren · itay@untame.com', logo: 'img/untame-logo.png' }
```

Text that doesn't fit drops to the next smaller type size.

## Keys

Right or Page Down: next step or slide. Left or Page Up: previous slide. Home and End: first and last slide. R: replay the drop. F: full screen. B and `.` (clickers' black-screen keys) do nothing. Clicking the stage also steps forward, and the flow list jumps to any slide. The URL keeps the slide number (`index.html#4`).

Sounds are the game's own: a shutter click going forward, a shop sitting going back, the fall whistle and landing for media, a coin for each stamp. The Sound box under the stage mutes them.
