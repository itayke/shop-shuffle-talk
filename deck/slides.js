// The talk's flow: one entry per slide, in show order. The deck places everything itself; README.md lists every field.
const DECK = {
  slides: [
    {
      kind: 'title',
      section: 'Opening',
      title: 'Shop Shuffle',
      text: 'Play Means Business',
      footer: 'Itay Keren · itay@untame.com',
      logo: 'img/untame-logo-cream.png',
      secs: 10,
    },

    {
      section: 'Who I am',
      title: 'Itay Keren',
      text: 'Award-winning designer & engineer',
      bullets: [
        'Owner and Creative Lead of **Untame**, an independent studio in Valatie, NY',
        'Dozens of titles shipped with companies, clients and Untame',
      ],
      bulletWidth: 'wide',
      media: ['img/portfolio-grid.jpg'],
      footer: 'Itay Keren · itay@untame.com',
      logo: 'img/untame-logo-cream.png',
      notes: 'Who I am, in one breath; the next slides are the proof.',
      secs: 15,
    },
    {
      title: 'ICQ + AOL',
      text: 'World\'s first instant messenger',
      bullets: [
        'Founding member, ICQ #30,000',
        'Lead server engineer, 100M+ users',
        'Acquired and integrated into AOL',
      ],
      bulletWidth: 'wide',
      media: ['img/icq.png'],
      notes: 'The tech thread: people together, in real time.',
      secs: 30,
    },
    {
      title: 'Oberon Media',
      text: 'Casual games service & studio',
      bullets: [
        'Multiplayer white-label service',
        'Ran a games studio of a dozen devs and artists',
        '30+ multiplayer casual games',
      ],
      bulletWidth: 'wide',
      media: [{ src: 'img/oberon-pool.png', caption: '8-Ball Pool' }],
      secs: 20,
    },
    {
      title: 'Selected Original Titles',
      reveal: 'parallel',
      topBullets: ['**Rope Rescue.** Top 10 on the App Store',
        '**Mushroom 11.** Multi award-winning, 4.8★, $1M+ revenue'],
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
      topBullets: [
        '4× GDC speaker (twice Best in Show)',
        'TGDF Taipei 2016, NYU Practice 2016, Unite 2013 and 2014',
        '**Focus on education, user experience (UX), art, and tech**',
      ],
      media: [
        { src: 'img/gdc17-ux-summit.jpg', caption: 'GDC 2017' },
      ],
      notes: 'The craft thread, shared back with other developers.',
      secs: 20,
    },

    {
      section: 'Games with a job',
      title: 'Games with a job',
      text: 'Play that does real work',
      secs: 10,
    },

    {
      title: 'Teach',
      text: 'Games can change behavior without players noticing',
      color: 'green',
      media: [
        { src: 'clips/intelligym.mp4', caption: 'IntelliGym Hockey' },
      ],
      bullets: [
        'A space-battle game used by USA Hockey\'s national team',
        'Builds game sense without their on-ice habits getting in the way',
        'Co-designed with a leading cognitive scientist to improve hockey-sense',
      ],
      secs: 40,
    },
    {
      title: 'Promote',
      text: 'Games make the product the hero',
      bullets: [
        '**Terra.** For Intel\'s touchscreen laptop launch',
        'Touch to sculpt an island, then mow it from the keyboard',
        'Both sides of a 2-in-1 laptop, demoed hands-on',
      ],
      media: [{ src: 'clips/terra.mp4', caption: 'Terra · Intel (Hide & Seek)' }],
      notes: 'Branding, planted here and paid off at the end: Intel had a product to show off. You have a business.',
      secs: 30,
    },
    {
      title: 'Train',
      text: 'Games make high-stakes practice safe',
      bullets: [
        'Virtual Reality GI Experience',
        'Train physicians by modeling high-risk gastrointestinal conditions',
        'Drew crowds to Level Ex\'s booth at medical conferences',
        'Acquired for $2M by a major pharma company'],
      media: [{ src: 'clips/gastro-vr.mp4', caption: 'Gastro VR · Level Ex' }],
      notes: 'Train the doctor, and draw the crowd: Level Ex used it to reach customers at expos. Two weeks of solo work. The $2M is for the investors in the room.',
      secs: 40,
    },
    {
      title: 'Empower',
      text: 'Games can level the playing field',
      bullets: [
        'A nonprofit helping Black youth turn ideas into startups',
        'Built games to foster business thinking for young founders',
        'Measurably improved creative problem-solving (DAT, the Divergent Association Task)',
      ],
      bulletWidth: 'wide',
      color: 'blue',
      media: ['img/formation.jpg'],
      notes: 'Formation Ventures is highly relevant to this room. DAT is the Divergent Association Task, a standard creativity test.',
      secs: 40,
    },
    {
      title: 'Engage',
      text: 'Games make serious tools playful',
      bullets: [
        '**DOJO.** Office space planning as a puzzle',
        'Drag departments onto floors, or let Auto Stack solve it',
        'Live scores show how well each plan works',
        'Acquired by OfficeSpace for its planner and solver',
      ],
      media: [{ src: 'img/dojo-stack.png', caption: 'DOJO' }],
      notes: 'Say it: the playful part is what they paid for.',
      secs: 40,
    },
    {
      title: 'Connect',
      text: 'Games bring people together in real places',
      bullets: [
        '**The Forge.** A large outdoor team game, in development',
        'Factions claim real territory by tapping hidden tags with their phones',
        'Built for hundreds of players across 100+ acres',
      ],
      media: [{ src: 'img/forge-console.png', caption: 'The Forge' }],
      notes: 'A game can move people through a real place: a park, a street, your shop. For questions: iOS and Android apps and a GM console, with GPS, NFC and BLE.',
      secs: 40,
    },

    {
      section: "What's next",
      title: "What's next",
      text: 'Many more client and original\nprojects in the works',
      secs: 10,
    },

    {
      title: 'spiropod',
      text: 'Mental wellness & entertainment',
      bullets: ['Games designed to be played with your breath',
        'Aimed at reducing anxiety by playfully modeling box-breathing',
        '**Guidance, Motivation, Distraction**',
        'Patent pending, working on scaling and securing capital'],
      media: ['img/spiropod.jpg'],
      notes: 'What I am building now: a game for health, my own venture. Known to this audience.',
      secs: 40,
    },
    {
      title: 'Upcoming Titles',
      reveal: 'parallel',
      topBullets: ['**Cue Quest.** Mini-golf + billiards love child',
        '**Venice.** Mafia courier in a procedurally generated canal town (working title)'],
      media: [
        { src: 'clips/cue-quest.mp4', caption: 'Cue Quest' },
        { src: 'clips/venice.mp4', caption: 'Venice' },
      ],
      notes: 'What I am building now. One beat each, the clip does the talking.',
      secs: 60,
    },
    {
      title: "Let's talk",
      text: 'How can we work together?',
      bullets: [
        '**Clients.** Got a job a game could do? Let\'s build it',
        '**Backers.** Funding for spiropod and original titles',
        '**Troy & the Capital Region.** Make this place a hub for community and outdoor games',
      ],
      media: [{ src: 'clips/porch-lights.mp4', caption: "Playable X-MAS light show" }],
      notes: 'Troy last: it leads into the game. I already light up my porch for the street. Imagine that on every block.',
      // footer: 'Itay Keren · itay@untame.com',
      // logo: 'img/untame-logo-cream.png',
      secs: 30,
    },

    // ---- The handoff
    {
      section: 'Handoff',
      title: 'Grab your phones',
      text: "Let's see how well it works on you",
      footer: 'Itay Keren · itay@untame.com',
      logo: 'img/untame-logo-cream.png',
      notes: 'Every game so far had a job. Intel had a product to show off; you have a business. Grab your phone. Then switch to the game tab: the lobby is the last slide, and the Untame pitch is said over it while shops walk in. After the round: one person, four days.',
      secs: 15,
    },

    {
      title: 'Thank you',
      text: "Let's connect!",
      footer: 'Itay Keren · itay@untame.com',
      logo: 'img/untame-logo-cream.png',
      secs: 10,
    },
  ],
};
