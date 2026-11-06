// The talk's flow: one entry per slide, in show order. The deck places everything itself; README.md lists every field.
// Draft content from BRIEF.md's draft structure: the words are placeholders until the story's flavor is set.
const DECK = {
  slides: [
    // ---- Why games
    {
      section: 'Why games',
      title: 'Christmas Lights',
      text: 'A game on my front porch',
      media: [{ todo: 'Christmas Lights shmup on the 64×8 LED strip, played by passers-by' }],
      notes: 'Open on the clip, not on a statement. The one claim is still to write.',
      secs: 45,
    },

    // ---- Who I am: two quick threads
    {
      section: 'Who I am',
      title: 'Games',
      bullets: ['Rope Rescue: Top 10 on the App Store', 'Mushroom 11: Apple Design Award', 'Cue Quest: in development'],
      media: [
        { src: 'clips/rope-rescue.mp4', caption: 'Rope Rescue' },
        { src: 'clips/mushroom-11.mp4', caption: 'Mushroom 11' },
        { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },
      ],
      notes: 'The craft thread. One beat each, the clip does the talking.',
      secs: 45,
    },
    {
      title: 'People, together',
      text: 'In real time, built fast',
      bullets: ['ICQ: founding engineer, 100M+ users', 'Oberon: 30+ multiplayer games', 'Human Is', 'Claude Code: 15× throughput'],
      reveal: true,
      notes: 'The tech thread, one bullet per click. AI is its latest chapter, not a beat of its own.',
      secs: 45,
    },

    // ---- Games that did a job, in themed pairs
    {
      section: 'Games that did a job',
      title: 'VR Gastro',
      text: 'Sold for $2M',
      media: ['clips/gastro-vr.mp4'],
      notes: 'Health, part one: it trains the doctor. Level Ex used it to reach customers at expos. The $2M is for the investors in the room.',
      secs: 40,
    },
    {
      title: 'Spiropod',
      text: 'For the patient',
      media: [{ todo: 'Spiropod' }],
      notes: 'Health, part two. Patented, and known to this audience.',
      secs: 30,
    },
    {
      title: 'Learning',
      text: 'Games that change behavior',
      color: 'green',
      media: [
        { todo: 'IntelliGym', caption: 'IntelliGym' },
        { todo: 'DOJO / OfficeSpace (to confirm)', caption: 'DOJO' },
      ],
      notes: 'Learning and behavior. DOJO / OfficeSpace is still to confirm.',
      secs: 40,
    },
    {
      title: 'Place',
      text: 'Games tied to a real place',
      color: 'blue',
      media: [
        { todo: 'Chinatown AR exhibit, Museum of Santa Cruz', caption: 'Chinatown' },
        { todo: 'Formation Ventures', caption: 'Formation Ventures' },
      ],
      notes: 'Place and community. Formation Ventures is highly relevant to this room.',
      secs: 40,
    },

    // ---- The handoff
    {
      section: 'Grab your phone',
      title: 'Grab your phone',
      text: 'One person, four days',
      notes: 'Say only the four days; the lines and prompts are for questions. Then switch to the game tab: the lobby is the last slide, and the Untame pitch is said over it.',
      secs: 15,
    },
  ],
};
