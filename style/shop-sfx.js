var ShopSfx = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // ../../../../../private/tmp/claude-502/-Users-itaykeren-Code-GitHub-walking-shops/6403fcd0-7fd6-44eb-a2a4-56977f88912f/scratchpad/style/sfx-entry.ts
  var sfx_entry_exports = {};
  __export(sfx_entry_exports, {
    ids: () => ids,
    length: () => length,
    play: () => play,
    unlock: () => unlock
  });

  // packages/render/src/look.ts
  var TAU = Math.PI * 2;
  var SHOP_LOOK = {
    // The body is this share of a column wide; the roof ledge fills the rest of the floor, so stacked shops touch
    bodyWidth: 0.84,
    roofShare: 0.1,
    minRoof: 2,
    // Rows of the body: sign (plus a padding row above and below the name), awning, then the shopfront
    signShare: 0.32,
    minSign: 5,
    signPad: 1,
    signInset: 0.05,
    signLines: 2,
    // Lines of a name are this share of a capital apart; a name never sets smaller than this capital height
    signLineGap: 0.35,
    signMinCap: 2.5,
    awningShare: 0.18,
    minAwning: 3,
    // Striped awnings: stripe width as a share of the body
    stripeShare: 1 / 9,
    minStripe: 2,
    // Shopfront: side margins, door width, the door's glass and knob height (shares of the door)
    frontMargin: 0.07,
    doorShare: 0.2,
    minDoor: 3,
    doorGlassShare: 0.25,
    knobAt: 0.55,
    // The barber pole turns, the café cup steams, a glint goes round the records, the marquee bulbs chase
    poleShare: 0.07,
    poleRate: 6,
    steamRate: 3,
    recordRate: 4,
    bulbRate: 6,
    // Hues snap to steps along the golden angle, so neighbors in the list never look alike
    hueSpread: 137.508,
    hueOffset: 20,
    hueSnap: 15,
    // Exponential follow toward the grid position: sideways, and down a floor
    followRate: 16,
    dropRate: 11,
    // Climbing up a floor takes this share of a step (MOVEMENT.cellTime), easing in and out: the shop moves into the
    // next column halfway through a step, so half a step finishes the climb as the step ends
    climbShare: 0.5,
    // Standing up or sitting down takes this long
    standTime: 0.125,
    // A shop taking a customer is ringed in coin yellow this many art pixels thick, washing out like a coin over flashTime
    flashTime: 0.5,
    flashRing: 2,
    pushMeterHeight: 0.07,
    minPushMeter: 2,
    pushMeterGap: 0.14,
    // Sprites drawn for a shop's look and state; the cache starts over past this many
    spriteCache: 512
  };
  var LEG_LOOK = {
    // Leg width as a share of a column; hips and knees as a share of the body width
    legShare: 1 / 16,
    hipSpread: 0.24,
    kneeOut: 0.06,
    // How far a foot reaches forward (of the body width) and lifts on a passing frame (of a floor)
    reach: 0.12,
    footRaise: 0.1,
    // Under this many art pixels of lift, legs aren't drawn
    minLift: 2,
    // A side-view stride: frames per stride, strides per column walked
    stridesPerCell: 2,
    framesPerStride: 4,
    // Closer than this to its grid position (in columns), a walking shop stands still
    moveSettle: 0.02,
    // Climbing: over the first share of the climb the front foot lifts (of a floor) and reaches forward (of the body
    // width), then plants on the step and straightens as the body rises over it
    climbLiftShare: 0.4,
    climbFootRaise: 0.5,
    climbReach: 0.5
  };
  var MOTION_LOOK = {
    // A tower under a push leans toward its fall and shakes harder as the push nears pushTime; the pusher leans with it
    strainLean: 0.07,
    strainWobble: 0.05,
    strainRate: 32,
    stunShake: 0.03,
    stunRate: 45,
    // Immune after a topple: a slow dizzy sway with stars circling the roof
    dizzyAngle: 0.07,
    dizzyRate: 7,
    dizzyStars: 3,
    dizzyOrbitX: 0.45,
    dizzyOrbitY: 0.1,
    dizzyHeight: 0.16,
    // Toppled shops fly to the far column on an arc, tumbling, then squash as they land
    arcTime: 0.5,
    arcHeight: 1.1,
    arcSpin: Math.PI,
    squashTime: 0.25,
    squash: 0.2,
    // A shop that joins falls from this many floors above the sky, landing with the same squash; shops that join together
    // (the bots, as a round begins) drop one after another, dropStagger apart
    dropAbove: 1,
    dropTime: 0.6,
    dropStagger: 0.05,
    // The podium's blocks drop the same way, a column at a time
    blockStagger: 0.25
  };

  // packages/screen/src/sound/sounds.ts
  var A4 = 440;
  var A4_MIDI = 69;
  var OCTAVE = 12;
  var NOTE_STEPS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function note(name) {
    const midi = NOTE_STEPS[name[0]] + OCTAVE * (Number(name.slice(1)) + 1);
    return A4 * semi(midi - A4_MIDI);
  }
  function semi(k) {
    return 2 ** (k / OCTAVE);
  }
  function arp(ch, notes, step, v, at = 0, last = step) {
    return notes.map((nm, i) => {
      const end = i === notes.length - 1;
      return { ch, f: typeof nm === "number" ? nm : note(nm), at: at + i * step, d: end ? last : step, v, decay: end };
    });
  }
  var FOOT = [
    { k: 0, noise: 0.7 },
    { k: -5, noise: 0.45 }
  ];
  var FLOOR_STEP = 4;
  var FIFTH = 7;
  var STRAIN_STEP = 2;
  var ROW_DROP = 0.04;
  var ROUGH = semi(0.4);
  var SOUNDS = {
    step: ({ level = 0, foot = 0 }) => {
      const f = FOOT[foot & 1];
      return [
        { ch: "pulse12", f: note("G3") * semi(level * FLOOR_STEP + f.k), d: 0.04, v: 0.14, decay: true },
        { ch: "noise", f: f.noise, d: 0.018, v: 0.08, decay: true }
      ];
    },
    // Subtle, and softer than a landing: the shop settles as its legs fold
    sit: () => [
      { ch: "triangle", f: note("A2"), f2: note("D2"), d: 0.06, v: 0.25, decay: true },
      { ch: "noise", f: 0.07, d: 0.04, v: 0.12, decay: true }
    ],
    strain: ({ step = 0 }) => [
      { ch: "pulse25", f: note("F2") * semi(step * STRAIN_STEP), d: 0.1, v: 0.2, decay: true },
      { ch: "noise", short: true, f: 0.3, d: 0.05, v: 0.08, decay: true }
    ],
    // The fall lasts the flight; the crash is the landing's own sound
    topple: () => [
      { ch: "pulse12", f: note("C6"), f2: note("C3"), d: MOTION_LOOK.arcTime, v: 0.2 },
      { ch: "pulse25", f: note("G6"), f2: note("G3"), d: MOTION_LOOK.arcTime, v: 0.07 }
    ],
    land: () => [
      { ch: "noise", f: 0.06, d: 0.2, v: 0.5, decay: true },
      { ch: "triangle", f: note("A2"), f2: note("A1"), d: 0.14, v: 0.45, decay: true }
    ],
    bump: () => [{ ch: "noise", short: true, f: 0.45, d: 0.05, v: 0.28, decay: true }, ...arp("pulse50", ["G4", "C4"], 0.04, 0.22, 0, 0.09)],
    // The lost customer's two falling notes, rougher: the attacker is turned away
    pushback: () => [
      ...arp("pulse12", ["A3", "E3"], 0.13, 0.2, 0, 0.22),
      ...arp("pulse50", [note("A3") * ROUGH, note("E3") * ROUGH], 0.13, 0.12, 0, 0.22),
      { ch: "noise", short: true, f: 0.22, d: 0.1, v: 0.1, decay: true },
      { ch: "noise", short: true, f: 0.16, at: 0.13, d: 0.18, v: 0.1, decay: true }
    ],
    coin: () => [
      { ch: "pulse25", f: note("E5"), d: 0.04, v: 0.18 },
      { ch: "pulse25", f: note("E5") * semi(FIFTH), at: 0.04, d: 0.2, v: 0.18, decay: true }
    ],
    paraCoin: () => arp("pulse25", ["G5", "B5", "D6", "G6"], 0.035, 0.18, 0, 0.25),
    lost: () => arp("triangle", ["E4", "C4"], 0.13, 0.3, 0, 0.22),
    // The whistle lasts the fall; the thud is the landing's own sound
    drop: () => [{ ch: "pulse12", f: note("C7"), f2: note("C5"), d: MOTION_LOOK.dropTime, v: 0.1 }],
    shutRow: ({ row = 0 }) => [
      { ch: "noise", short: true, f: 0.55 - row * ROW_DROP, d: 0.03, v: 0.2, decay: true },
      { ch: "noise", short: true, f: 0.5 - row * ROW_DROP, at: 0.04, d: 0.02, v: 0.12, decay: true }
    ],
    shutDown: () => [
      { ch: "noise", f: 0.09, d: 0.12, v: 0.4, decay: true },
      { ch: "triangle", f: note("E2"), d: 0.1, v: 0.35, decay: true }
    ],
    shutUp: () => [
      ...[0, 1, 2, 3, 4].map((i) => ({ ch: "noise", short: true, f: 0.3 + i * 0.06, at: i * 0.025, d: 0.015, v: 0.2, decay: true })),
      { ch: "pulse25", f: note("G5"), at: 0.14, d: 0.07, v: 0.14, decay: true }
    ],
    // Kept low: a cue to look, not an alarm
    bar: ({ last = false }) => last ? [{ ch: "pulse50", f: note("A5"), d: 0.35, v: 0.09, decay: true }] : [{ ch: "pulse50", f: note("A4"), d: 0.1, v: 0.08 }],
    ready: () => arp("pulse50", ["G4", "D5"], 0.16, 0.18, 0, 0.2),
    walkIns: () => [
      ...arp("pulse25", ["C5", "E5", "G5", "C6"], 0.07, 0.18, 0, 0.4),
      ...arp("pulse12", ["G4", "C5", "E5", "G5"], 0.07, 0.07, 0, 0.4),
      { ch: "triangle", f: note("C3"), d: 0.6, v: 0.3, decay: true }
    ],
    // A whistle falls from the sky, then the fanfare a key higher than WALK-INS!
    parachutes: () => [
      { ch: "pulse12", f: note("C7"), f2: note("G5"), d: 0.35, v: 0.1 },
      ...arp("pulse25", ["G5", "B5", "D6", "G6"], 0.07, 0.18, 0.38, 0.45),
      { ch: "triangle", f: note("G2"), at: 0.38, d: 0.6, v: 0.3, decay: true }
    ],
    tick: () => [{ ch: "triangle", f: note("A5"), d: 0.03, v: 0.22 }],
    // A run up two octaves to a held high C, over a quiet harmony an octave down and a bass
    winner: () => {
      const run = ["C5", "E5", "G5", "C6", "E6", "G6", "C7"];
      return [
        ...arp("pulse25", run, 0.06, 0.18, 0, 0.5),
        ...arp("pulse12", run.map((nm) => note(nm) / 2), 0.06, 0.06, 0, 0.5),
        { ch: "triangle", f: note("C3"), d: 0.36, v: 0.3, decay: true },
        { ch: "triangle", f: note("C3"), at: 0.36, d: 0.5, v: 0.3, decay: true }
      ];
    }
  };
  function soundTones(id, o = {}) {
    return SOUNDS[id](o);
  }

  // packages/screen/src/sound/synth.ts
  var FRAME = 1 / 60;
  var HARMONICS = 64;
  var LFSR_BITS = 15;
  var LONG_TAP = 1;
  var SHORT_TAP = 6;
  var NOISE_LEVEL = 0.5;
  var ATTACK = 2e-3;
  var RELEASE = 4e-3;
  var TAIL = 0.02;
  var VOLUME = 0.6;
  var DUTY = { pulse12: 0.125, pulse25: 0.25, pulse50: 0.5 };
  var Synth = class {
    constructor() {
      __publicField(this, "v", null);
      __publicField(this, "paused", false);
      __publicField(this, "muted", false);
    }
    get state() {
      if (this.muted) return "muted";
      return this.v && (this.paused || this.v.ctx.state === "running") ? "on" : "locked";
    }
    /** Start audio: at load (the browser may allow it then) and again from every key or click until it runs. */
    unlock() {
      this.v ?? (this.v = voices());
      if (!this.paused && this.v.ctx.state === "suspended") void this.v.ctx.resume();
    }
    /** Freeze sounds mid-note with the game, and carry on with it. */
    pause(on) {
      this.paused = on;
      if (!this.v) return;
      void (on ? this.v.ctx.suspend() : this.v.ctx.resume());
    }
    toggleMute() {
      this.muted = !this.muted;
      if (this.v) this.v.out.gain.value = this.muted ? 0 : VOLUME;
    }
    /** Play a sound now, panned from -1 (left) to 1 (right). */
    play(tones, pan) {
      const v = this.v;
      if (!v || this.muted || v.ctx.state !== "running") return;
      const t0 = v.ctx.currentTime;
      const panner = v.ctx.createStereoPanner();
      panner.pan.value = pan;
      panner.connect(v.out);
      for (const o of tones) {
        const t = t0 + (o.at ?? 0);
        const gain = v.ctx.createGain();
        let src;
        if (o.ch === "noise") {
          const b = v.ctx.createBufferSource();
          b.buffer = o.short ? v.noise.short : v.noise.long;
          b.loop = true;
          stepped(b.playbackRate, o.f, o.f2 ?? o.f, t, o.d);
          src = b;
        } else {
          const osc = v.ctx.createOscillator();
          if (o.ch === "triangle") osc.type = "triangle";
          else osc.setPeriodicWave(v.waves[o.ch]);
          stepped(osc.frequency, o.f, o.f2 ?? o.f, t, o.d);
          src = osc;
        }
        envelope(gain.gain, o.v, t, o.d, o.decay ?? false);
        src.connect(gain);
        gain.connect(panner);
        src.start(t);
        src.stop(t + o.d + TAIL);
      }
    }
  };
  function voices() {
    const ctx = new AudioContext();
    const comp = ctx.createDynamicsCompressor();
    const out = ctx.createGain();
    out.gain.value = VOLUME;
    out.connect(comp);
    comp.connect(ctx.destination);
    const waves = { pulse12: pulseWave(ctx, DUTY.pulse12), pulse25: pulseWave(ctx, DUTY.pulse25), pulse50: pulseWave(ctx, DUTY.pulse50) };
    return { ctx, out, waves, noise: { long: lfsr(ctx, LONG_TAP), short: lfsr(ctx, SHORT_TAP) } };
  }
  function pulseWave(ctx, duty) {
    const re = new Float32Array(HARMONICS);
    const im = new Float32Array(HARMONICS);
    for (let k = 1; k < HARMONICS; k++) {
      re[k] = Math.sin(2 * Math.PI * k * duty) / (k * Math.PI);
      im[k] = (1 - Math.cos(2 * Math.PI * k * duty)) / (k * Math.PI);
    }
    return ctx.createPeriodicWave(re, im);
  }
  function lfsr(ctx, tap) {
    const buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let r = 1;
    for (let i = 0; i < d.length; i++) {
      const fb = r & 1 ^ r >> tap & 1;
      r = r >> 1 | fb << LFSR_BITS - 1;
      d[i] = r & 1 ? -NOISE_LEVEL : NOISE_LEVEL;
    }
    return buf;
  }
  function stepped(param, a, b, t, d) {
    param.setValueAtTime(a, t);
    if (a === b) return;
    const n = Math.max(1, Math.round(d / FRAME));
    for (let i = 1; i < n; i++) param.setValueAtTime(a * Math.pow(b / a, i / n), t + i * FRAME);
  }
  function envelope(g, v, t, d, decay) {
    g.setValueAtTime(0, t);
    g.linearRampToValueAtTime(v, t + ATTACK);
    if (decay) {
      const n = Math.max(1, Math.round(d / FRAME));
      for (let i = 1; i < n; i++) g.setValueAtTime(v * (1 - i / n), t + i * FRAME);
    } else g.setValueAtTime(v, Math.max(t + ATTACK, t + d - RELEASE));
    g.linearRampToValueAtTime(0, t + d);
  }

  // ../../../../../private/tmp/claude-502/-Users-itaykeren-Code-GitHub-walking-shops/6403fcd0-7fd6-44eb-a2a4-56977f88912f/scratchpad/style/sfx-entry.ts
  var synth = new Synth();
  function play(id, opts = {}, pan = 0) {
    synth.unlock();
    synth.play(soundTones(id, opts), pan);
  }
  var unlock = () => synth.unlock();
  var ids = ["step", "sit", "strain", "topple", "land", "bump", "pushback", "coin", "paraCoin", "lost", "drop", "shutRow", "shutDown", "shutUp", "bar", "ready", "walkIns", "parachutes", "tick", "winner"];
  var length = (id, opts = {}) => Math.max(...soundTones(id, opts).map((t) => (t.at ?? 0) + t.d));
  return __toCommonJS(sfx_entry_exports);
})();
