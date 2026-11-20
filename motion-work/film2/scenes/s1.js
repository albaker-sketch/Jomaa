import { bg, orn, say } from './_lib.js';
// «عباد الله» بالقلم · «يفعل شيئاً على وجهٍ خاطئ» = طريق يميل عن الخط الصحيح
MOTION.scene({ id: 's1',
  draw(t, lt, ctx) {
    const { X, P, at, FX } = ctx; bg(ctx, t);
    orn(ctx, 540, 420, at(t, 0, 1.1), { scale: 1.1 });
    FX.qalamWrite(ctx, t, { text: 'عبادَ الله', s: 0.08, x: 540, y: 690, size: 210, per: 0.06, accent: [0, 1], nib: false });
    say(ctx, t, 'l2', { y: 930, size: 74, maxWidth: 860, accent: [8] });
    const k0 = at(t, 1.6, 2.4), kp = at(t, ctx.wordTime('l2', 4).s, ctx.wordTime('l2', 8).s + 0.4, 'cubicInOut'), bad = at(t, ctx.wordTime('l2', 8).s - 0.1, ctx.wordTime('l2', 8).s + 0.3);
    X.save(); X.setLineDash([16, 14]); ctx.drawPath(X, [[540, 1440], [540, 1140]], k0, { width: 5, color: P.hi }); X.restore();
    if (k0 >= 1) { X.save(); X.fillStyle = P.hi; X.beginPath(); X.arc(540, 1130, 14, 0, 6.283); X.fill(); X.restore(); }
    ctx.drawPath(X, [[540, 1440], [548, 1360], [585, 1280], [660, 1210], [770, 1170]], kp, { width: 9, color: bad > 0.5 ? P.acc : P.ink, tip: { r: 11, color: bad > 0.5 ? P.acc : P.ink } });
    X.save(); X.fillStyle = P.ink; X.globalAlpha = k0; X.beginPath(); X.arc(540, 1440, 12, 0, 6.283); X.fill(); X.restore();
  } });
