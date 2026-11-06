import { bg, say, man, bust, FAM } from './_lib.js';
// المثال: رجلين بثوب قطري (قصير فوق القدم / طويل يجر) ← ثم راسين (لحية طويلة / عارض) — بلا ملامح
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l17', { y: 380, size: 70, maxWidth: 880, accent: [1, 2] });
    const w = (l, i) => ctx.wordTime(l, i), s19 = ctx.lineSpan('l19').s;
    const kDiv = at(t, ctx.lineSpan('l18').s - 0.2, ctx.lineSpan('l18').s + 0.6);
    ctx.drawPath(X, [[540, 600], [540, 1430]], kDiv, { width: 3, color: P.hi });
    // ① الثياب
    const out1 = at(t, s19 - 0.35, s19 + 0.05);
    if (out1 < 1) {
      X.save(); X.globalAlpha = 1 - out1;
      say(ctx, t, 'l18', { from: 0, to: 3, x: 800, y: 640, size: 52, maxWidth: 440 });
      say(ctx, t, 'l18', { from: 4, to: 6, x: 280, y: 640, size: 52, maxWidth: 440 });
      const kA = at(t, w('l18', 2).s - 0.15, w('l18', 2).s + 0.45, 'expoOut'), kB = at(t, w('l18', 6).s - 0.15, w('l18', 6).s + 0.45, 'expoOut');
      X.save(); X.globalAlpha *= Math.max(kA, kB) * 0.7; X.strokeStyle = P.mut; X.lineWidth = 3; X.beginPath(); X.moveTo(130, 1400); X.lineTo(950, 1400); X.stroke(); X.restore();
      man(ctx, 800, 1400, 640, { k: kA, mark: at(t, w('l18', 3).s, w('l18', 3).s + 0.5) });
      man(ctx, 280, 1400, 640, { k: kB, long: true, mark: at(t, w('l18', 6).s + 0.3, w('l18', 6).s + 0.8) });
      X.restore();
    }
    // ② اللحية
    if (t > s19 - 0.3) {
      const kC = at(t, w('l19', 2).s - 0.2, w('l19', 2).s + 0.4, 'expoOut'), kD = at(t, w('l19', 6).s - 0.2, w('l19', 6).s + 0.4, 'expoOut');
      say(ctx, t, 'l19', { from: 0, to: 3, x: 800, y: 640, size: 58, weight: 900, maxWidth: 440, accent: [2] });
      say(ctx, t, 'l19', { from: 4, to: 6, x: 280, y: 640, size: 58, weight: 900, maxWidth: 440, accent: [6] });
      bust(ctx, 790, 830, 165, { k: kC, beard: 'long' });
      bust(ctx, 290, 830, 165, { k: kD, beard: 'short' });
    }
  } });
