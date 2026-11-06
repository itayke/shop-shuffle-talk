# The deck

`index.html` is the deck; `slides.js` is its flow: every slide's words, media and notes, in show order. Edit `slides.js` and reload. The deck lays out each slide by itself, so there are no positions to set.

`slides.js` is a JavaScript object rather than YAML or JSON because the deck must play from disk (`file://`), where browsers won't let a page read a separate data file. It reads like JSON, but it allows comments and trailing commas, and its keys and strings need no quotes beyond the usual ones.

## A slide

```js
{
  section: 'Games that did a job', // groups the flow list; carries on to the next slides until another section
  title: 'VR Gastro',              // the gold banner (one line)
  text: 'Sold for $2M',            // the line under it, in the tagline's style; wraps
  topBullets: ['One', 'Two'],      // a list under the text, above the media
  sideBullets: ['Three'],          // a list in a column left of the media; use either list, both or neither
                                   // in either list, **double asterisks** make words bold
  reveal: true,                    // bullets appear one per click, the top ones first
  media: ['clips/gastro-vr.mp4'],  // any number of clips or images, side by side
  color: 'green',                  // title color: gold (default), green or blue, like the game's round banners
  layout: 'stack',                 // only to override the automatic choice: stack, side or flank
  notes: 'What to say.',           // shown under the stage, never on it
  secs: 40,                        // planned time, summed per section and for the talk
}
```

Every field is optional. A misspelled field shows as a warning in the notes panel.

## Media

Each item is a path, or an object for more:

```js
media: [
  'clips/gastro-vr.mp4',                                  // video (mp4, webm, mov, m4v) or image (png, jpg, gif, ...)
  { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },   // caption: a label on the road under the card
  { src: 'img/street-lobby.png', pixel: true },           // pixel: keep pixel art hard-edged when scaled
  { todo: 'Spiropod in use', aspect: '9:16' },             // a placeholder card until the clip exists
]
```

`aspect` (`'16:9'`, `'9:16'` or a number) sets a card's shape. A file's own shape is used when it has none; a `todo` defaults to 16:9. A file that doesn't load shows as a MISSING FILE card. Videos play muted and looping. Cut them with `../clips.sh` into `clips/`.

## Layouts

Bullets go where the slide puts them. The title and text sit at the same height on every slide with media, `topBullets` center in the sky between them and the media, `sideBullets` stand in a column left of the media, and the media stands on the sidewalk. If the side bullets leave the media too small, the notes panel says so. A slide with no media centers all its bullets under the text.

A slide without bullets picks one of these by itself, the one that gives the media the most room; `layout` names one instead (it applies only to slides without bullets):

- **Stack**: words in the sky, media standing on the sidewalk below. The default.
- **Side**: the title and text in a column left of the media. Chosen when that makes the media clearly larger (a portrait clip).
- **Flank**: a side layout that puts the title left of the media and the text right of it, if the title fits.
- **No media**: the words are centered in the sky with a larger title (the "Grab your phone" slide).

Text that doesn't fit drops to the next smaller type size.

## Keys

Right or Page Down: next bullet or slide. Left or Page Up: previous slide. Home and End: first and last slide. R: replay the drop. F: full screen. B and `.` (clickers' black-screen keys) do nothing. Clicking the stage also steps forward, and the flow list jumps to any slide. The URL keeps the slide number (`index.html#4`).
