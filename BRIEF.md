# Shop Shuffle talk: brief

A 10-minute talk by Itay Keren (Untame) that ends on Shop Shuffle, played live by the room. Decided on 2026-11-05 in a Claude Code session in the game repo; this folder is where the deck gets built.

## Format (decided)

- **10 minutes total.** The game takes about 4: lobby join, countdown, the 2-minute round, the podium. That leaves about **6 minutes of talk**.
- **The deck is a claude.ai artifact**, a standalone HTML page in the game's pixel style. It is not part of the game app, and not Google Slides (Slides only as a PDF export if an event asks for one).
- **Mostly clips**: short, muted, looping MP4s of Itay's games behind one spoken line each. Roughly 8 to 12 slides. **At most one playable toy**, maybe none: the game is the playable moment.
- **The handoff**: the last deck slide says "grab your phone", then switch to the game's tab. The game's **lobby is the last slide**: the Untame pitch is said over it while shops walk in, then Enter starts the round.
- **The ending**: the game's own end card (a podium plus contact info on the screen and on each phone). The presenter just says thank you. The game, end card included, is built in the game repo.

## Folders

- `raw/`: original footage and GIFs, any size. Never published.
- `style/`: the game's look and sound for the deck (frames, shop designs, `shop-sfx.js`, `pixel-title.js`, `tokens.css`). The browsable version is https://claude.ai/artifact/GJc5gYWMxUKvatgNzZ3ucd, and `style/README.md` describes each file.
- `sketches/`: one folder per slide sketch, each published as its own artifact. `clip-slide/` (https://claude.ai/artifact/YUZB3fZS5Nxmy4mVnBCQT9) is the chosen clip slide: the clip drops onto the street with the game's squash, in a card like the lobby's QR frame, under a gold title banner and a tagline-style line of text.
- `deck/` (https://claude.ai/artifact/HtF2qM24fqq1zh31T1Ws7M): the deck page and its trimmed, compressed clips. This is also the **offline backup**: it must play from disk with no network. The flow (each slide's title, text, bullets, media and notes) lives in `deck/slides.js` and the deck lays out each slide itself; `deck/README.md` lists the fields.
- `clips.sh`: rebuilds every trimmed clip from `raw/`, one line per clip. It is the record of each cut.
- **Git**: https://github.com/itayke/shop-shuffle-talk. Video stays out of it: `.gitignore` drops `raw/` and every video file anywhere, so trimmed clips come back by running `clips.sh` and are published with each artifact. Keep `deck/` complete on disk for show day anyway.
- **Artifacts were first published from `~/Documents/shop-shuffle-talk`.** To update one from this folder, pass its URL (the links above); publishing without it makes a new artifact.

## Building the deck

- **Look**: match the game, following `style/`. Three faces: Jersey 15 for titles (drawn hard-edged with `pixel-title.js`), Press Start 2P for small labels, and Work Sans for body text. Accent `#e6a200` (dark mode `#f2b731`), ink `#17202b`, background `#e7ebf0` (dark `#0f141b`). The full palette is in the game repo, `packages/render/src/colors.ts` and `packages/screen/src/styles.css`.
- **Clips**: ffmpeg 8 is installed. Add each cut to `clips.sh` rather than running it by hand. Trim to the moment asked for, scale to 720p or 1080p, and use H.264 MP4 (`autoplay muted loop playsinline`). Convert GIFs to MP4 unless they are tiny pixel art. Keep each file well under the artifact's 15 MB per-file limit.
- **Sound in clips**: browsers block audio until a key or click; the first clicker press counts.
- **Navigation**: arrows and Page Up/Down for the clicker, plus a notes view for the presenter. Ignore B and `.` (clickers send them to black the screen).
- **Habit**: sketch any playable or unusual slide on its own first, get Itay's pick, then build it into the deck.

## Show day

- The game is a separate browser tab: the screen app on the big display, phones join by room code. Switching tabs is the one transition; rehearse it.
- **Clicker clash**: in the game, B toggles the shop list and Space pauses. Put the clicker down once the game starts, or use Space on purpose.
- **Fallbacks**: F in the game hands the phones' shops to bots (no network). The deck's offline copy is `deck/`. Know what to say if only a few people join.

## Material

Career source: `/Users/itaykeren/Code/GitHub/resume/src/data.js`. The threads that connect best to Shop Shuffle:

- **VR Gastro** (Level Ex): a game a business used to reach its customers at expos, sold to a pharma company for $2M. The strongest proof for games in customer-facing business.
- **Christmas Lights shmup**: a game on Itay's front porch, played by passers-by on a 64×8 LED strip. A street-level shop window, Shop Shuffle in miniature.
- **People together in real time**: ICQ (founding engineer, 100M+ users), Oberon (30+ multiplayer casual games), Human Is. Shop Shuffle's phones-to-screen relay is the latest of these.
- **Craft credibility**: Mushroom 11 (Apple Design Award 2017), Rope Rescue (Top-10 App Store), 4x GDC speaker. One slide, a clip, not a rebuild.
- **Optional**: IntelliGym (games changing real-world behavior), Last Chinatown (a game tied to a real place).

## Draft structure

About 6 minutes of talk. The list was cut to fit; side projects that don't serve the argument are answers for questions afterwards, not slides.

1. **Why games** (~0:45): one claim, opened on a clip rather than a statement (the Christmas Lights porch game is a candidate).
2. **Who I am** (~1:30): two quick threads, not sections.
   - Games (craft): Rope Rescue, Mushroom 11, Cue Quest.
   - Tech (people together in real time, built fast): ICQ → Oberon → Human Is → AI, ending on 15× throughput with Claude Code. AI is the latest chapter of the tech thread, not a beat of its own.
3. **Games that did a job** (~2:30), in themed pairs:
   - Health: VR Gastro (trains the doctor) → Spiropod (for the patient; patented, and known to this audience).
   - Learning and behavior: IntelliGym, DOJO/OfficeSpace (to confirm).
   - Place and community: Chinatown (Museum of Santa Cruz AR exhibit), Formation Ventures.
4. **Grab your phone** (~0:15): "one person, four days" (Shop Shuffle took 4 days, about 10k lines and about 400 prompts; say only the days, and keep the rest for questions). Then switch to the lobby; the Untame pitch is said over it.

**Audience**: local entrepreneurs, some of them investors or close to funding. Shop Shuffle puts their own businesses on the street, so it is the most direct proof. Formation Ventures is highly relevant to this room. For the investors: the $2M VR Gastro sale and 15× throughput.

Cut, or kept for questions afterwards: Project Venice, Espressopost, the LLM history in detail.

## Clips in `raw/`

Trims wait for the talk's structure. YouTube downloads are the best stream available; no originals exist unless noted.

- `CueQuestGameplayVertical2.mov`: portrait 1080×1920, HEVC. The deck's pick is 0:24.15–0:34.35: three tables, ending before the "Incredible Challenges" caption. The clip-slide sketch keeps its earlier placeholder cut.
- `Mushroom11_available_now_720.mp4`: the "Available Now!" trailer, from YouTube `KVe76XebJcw` (720p is the max there). The pick is 0:40.4–0:50.55: four gameplay shots (gear, sunset lake, boulder, pillar). Text in this trailer appears only on full-screen cards, never over gameplay.
- `GastroVR_levelex_tech_demo_1080.mp4`: the Level Ex Tech Demo, from YouTube `fk3hOtUwgyA`. The VR part starts at 0:30; the deck's pick is 0:36.87–0:45.1 (into the polyp, the split screen, the controller close-up; it ends before the headset face). Its captions are burned in, so the cut keeps the full width and crops just above them. The clip-slide sketch keeps its earlier 0:39 cut.
- `Venice_screen_recording_2026-11-06.mov`: a screen recording of Venice (working title), 2:25 at 2552×1428 and 60 fps, with a 2px black strip on the left and the mouse cursor showing. The pick is 1:10–1:20: a pan over the canal town, then a mission dialog with a character from about 1:17.
- `spiropod-cool.jpg`: the Spiropod title image in its blue-teal variant, set aside because it blends into the deck's sky. The deck uses the warm cream variant, `deck/img/spiropod.jpg`.
- `RopeRescue_youtube_480.mp4`: "Rope Rescue Preview" (2012), from YouTube `nYGSO293Yck`. 52 s, 640×480 at 25 fps (the max there). Animated captions are burned in throughout, and the end card shows a Google Play badge. The pick is 0:11.5–0:17.5: forest into cave, whose two captions read as one line ("only one bird / can grab a rope").

## Open

- **The story's flavor, above all the segue** ("why a game works for any customer-facing business"). Itay sets the direction. A first draft built on the punch card ("every local business already runs a game, just a bad one") and "people choose it, remember it, share it" was **not** the flavor wanted.
- Which clips exist. Gather them into `raw/` first; what footage there is will shape the outline.
- The beat-by-beat outline with timings, and which (if any) slide is playable.
- What someone should do the next day (the audience is decided; see Draft structure).
- Fonts for the offline copy: the deck loads its three faces from Google Fonts, so with no network the titles fall back to Arial Black. `deck/` needs local copies.

## Game repo

`/Users/itaykeren/Code/GitHub/walking-shops`. See its README for running it and its keys, and `docs/GAME_DESIGN.md` for the rules.
