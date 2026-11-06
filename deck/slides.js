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
      title: 'ICQ + AOL',
      text: 'World\'s first Instant Messenger',
      sideBullets: [
        'Founding member, ICQ# 30,000',
        'Lead server engineer, 100M+ users',
        'Acquired and integrated into AOL',
      ],
      sideWidth: 'wide',
      media: ['img/icq.png'],
      notes: 'The tech thread: people together, in real time.',
      secs: 30,
    },
    {
      title: 'Oberon Media',
      text: 'Casual Games Service and Studio',
      sideBullets: [
        'Multiplayer white-label service',
        'Ran a games studio of a dozen devs & artists',
        '30+ multiplayer casual games',
      ],
      sideWidth: 'wide',
      media: [{ src: 'img/oberon-pool.png', caption: '8-Ball Pool' }],
      secs: 20,
    },
    {
      title: 'Original Games',
      topBullets: ['**Rope Rescue** (2011) Top 10 on the App Store', '**Mushroom 11** (2017) Multi award-winning, 4.8★, $1M+ revenue'],
      media: [
        { src: 'clips/rope-rescue.mp4', caption: 'Rope Rescue' },
        {
          src: 'clips/mushroom-11.mp4', caption: 'Mushroom 11',
          stamps: ['img/award-apple-design-2017.png', 'img/award-google-play-2017.png'],
        },
      ],
      notes: 'The craft thread. One beat each, the clip does the talking.',
      secs: 45,
    },
    {
      title: 'Work in progress',
      topBullets: ['**Cue Quest** mini-golf + billiard love child',
        '**Venice** (Working Title) Mafia courier in a procedurally generated canal town'],
      media: [
        { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },
        { src: 'clips/venice.mp4', caption: 'Venice' },
      ],
      notes: 'The craft thread. One beat each, the clip does the talking.',
      secs: 45,
    },

    // ---- Games that did a job, in themed pairs
    {
      section: 'Games that did a job',
      title: 'Gastro VR',
      text: 'Virtual Reality GI Experience',
      sideBullets: [
        'Made for a healthcare conference booth',
        '2 weeks of solo work',
        'Acquired for $2M by a major pharma company'],
      media: ['clips/gastro-vr.mp4'],
      notes: 'Health, part one: it trains the doctor. Level Ex used it to reach customers at expos. The $2M is for the investors in the room.',
      secs: 40,
    },
    {
      title: 'Spiropod',
      text: 'Mental Wellness & Entertainment',
      sideBullets: ['A handheld game console operated by breath',
        'Aimed at reducing anxiety and other breath related issues',
        'Guidance, Motivation, Distraction',
        'Patent pending, working on scaling and securing capital'],
      media: ['img/spiropod.jpg'],
      notes: 'Health, part two. Patented, and known to this audience.',
      secs: 60,
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
