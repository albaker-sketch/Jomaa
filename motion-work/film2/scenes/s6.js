import { bg, say, card, FAM } from './_lib.js';
// حوار: حذيفة يسأل ← الرجل يرد · عدّاد 0←40 عند «أربعين»
MOTION.scene({ id: 's6',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s11 = ctx.wordTime('l11', 6).s, s12 = ctx.wordTime('l12', 2).s;
    say(ctx, t, 'l11', { from: 0, to: 5, y: 380, size: 52, color: P.mut });
    const kA = at(t, s11 - 0.3, s11 + 0.2, 'expoOut');
    card(ctx, 250, 470, 720, 250, { fill: P.ink, r: 44, alpha: kA, scale: 0.96 + 0.04 * kA, shadow: true });
    X.save(); X.globalAlpha = kA; X.fillStyle = P.ink; X.beginPath(); X.moveTo(860, 710); X.lineTo(930, 710); X.lineTo(950, 790); X.closePath(); X.fill(); X.restore();
    say(ctx, t, 'l11', { from: 6, to: 10, x: 610, y: 610, size: 76, weight: 900, maxWidth: 640, valign: 'center', color: P.bg, accent: [7], accentColor: P.hi });
    say(ctx, t, 'l12', { from: 0, to: 1, y: 880, size: 52, color: P.mut });
    const kB = at(t, s12 - 0.3, s12 + 0.2, 'expoOut');
    card(ctx, 110, 960, 600, 190, { fill: '#F6F3EC', stroke: P.acc, lw: 4, r: 44, alpha: kB, scale: 0.96 + 0.04 * kB, shadow: true });
    X.save(); X.globalAlpha = kB; X.fillStyle = P.acc; X.beginPath(); X.moveTo(150, 1148); X.lineTo(220, 1148); X.lineTo(130, 1220); X.closePath(); X.fill(); X.restore();
    say(ctx, t, 'l12', { from: 2, to: 4, x: 410, y: 1080, size: 80, weight: 900, accent: [3] });
    const w = ctx.wordTime('l12', 3).s, kc = at(t, w - 0.1, w + 1.0, 'expoOut');
    if (kc > 0) { ctx.text(X, String(Math.round(40 * kc)), 540, 1470, { family: FAM, weight: 900, size: 260, color: P.acc, alpha: Math.min(1, kc * 3), dir: 'ltr' }); }
  } });
