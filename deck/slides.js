// The talk's flow: one entry per slide, in show order. The deck places everything itself; README.md lists every field.
// Draft content from BRIEF.md's draft structure: the words are placeholders until the story's flavor is set.
const DECK = {
  slides: [
    // ---- Opening
    {
      kind: 'title',
      section: 'Opening',
      title: 'Shop Shuffle',
      text: 'Play Means Business',
      byline: 'Itay Keren · itay@untame.com',
      logo: 'img/untame-logo-cream.png',
      notes: 'Up while people sit down. The name is a working title.',
      secs: 10,
    },

    // Out of the flow for now (not a pitch for clients); kept for questions
    // {
    //   section: 'Why games',
    //   title: 'Christmas Lights',
    //   text: 'A game on my front porch',
    //   media: [{ todo: 'Christmas Lights shmup on the 64×8 LED strip, played by passers-by' }],
    //   notes: 'Open on the clip, not on a statement. The one claim is still to write.',
    //   secs: 45,
    // },

    // ---- Who I am: the person, then two quick threads
    {
      section: 'Who I am',
      title: 'Itay Keren',
      text: 'Award-winning designer & engineer',
      sideBullets: [
        'Owner & Creative Lead of **Untame**, independent studio from Valatie, NY',
        'Dozens of launched titles through companies, clients, and solo indie studio Untame',
      ],
      sideWidth: 'wide',
      media: ['img/itay-portrait.jpg'],
      notes: 'Who I am, in one breath; the next slides are the proof.',
      secs: 15,
    },
    {
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
      reveal: 'parallel',
      text: 'Selected Launch Titles',
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
      title: 'Public Speaking',
      // text: 'Focus on education, user experience (UX), art, and tech',
      topBullets: [
        '4× GDC speaker (twice Best-in-Show)',
        'TGDF Taipei 2016, NYU Practice 2016, Unite 2013 & 2014',
        '**Focus on education, user experience (UX), art, and tech**'
      ],
      media: [
        { src: 'img/gdc17-ux-summit.jpg', caption: 'GDC 2017' },
      ],
      notes: 'Scaffold: pictures to come. The craft thread, shared back with other developers.',
      secs: 20,
    },

    {
      section: 'Games with a job',
      title: 'Learning',
      text: 'Games can change behavior, explicitly or implicitly',
      color: 'green',
      media: [
        { src: 'clips/intelligym.mp4', caption: 'IntelliGym Hockey' },
      ],
      sideBullets: [
        'With a simple space-battle metaphor, real-life hockey players implicitly develop new relevant cognitive skills by suspending their predispositions',
      ],
      notes: 'Learning and behavior. DOJO',
      secs: 40,
    },
    {
      title: 'Train',
      text: 'Games can enforce practice and prepare for high challenge skills',
      sideBullets: [
        'Virtual Reality GI Experience',
        'Train physicians by modeling high-risk Gastrointenstinal conditions',
        '2 weeks of Solo work for a healthcare conference booth',
        'Acquired for $2M by a major pharma company'],
      // sideWidth: 'narrow',
      media: [{ src: 'clips/gastro-vr.mp4', caption: 'Gastro VR · LEVEL EX' }],
      notes: 'train the doctor. Level Ex used it to reach customers at expos. The $2M is for the investors in the room.',
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
      title: 'Social Change',
      text: 'Games can make a difference',
      sideBullets: [
        'A nonprofit helping Black youth turn ideas into startups',
        'Games that teach young founders business thinking',
      ],
      // sideWidth: 'wide',
      color: 'blue',
      media: [ 'img/formation.jpg' ],
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

    // ---- What's next: current work, then the asks to the room
    {
      section: "What's next",
      title: 'Work in progress',
      reveal: 'parallel',
      topBullets: ['**Cue Quest** mini-golf + billiard love child',
        '**Venice** (Working Title) Mafia courier in a procedurally generated canal town'],
      media: [
        { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },
        { src: 'clips/venice.mp4', caption: 'Venice' },
      ],
      notes: 'What I am building now. One beat each, the clip does the talking.',
      secs: 45,
    },
    {
      title: 'Community asks',
      text: 'Ways to work together',
      notes: 'Scaffold: the asks to the room are still to write.',
      secs: 30,
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
