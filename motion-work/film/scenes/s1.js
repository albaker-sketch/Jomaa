import { bg, orn, say, FAM } from './_lib.js';
// الهوك: «عبادَ الله» بالقلم، ثم الجملة، و«الحياة القصيرة» = خط ينكمش لنقطة
MOTION.scene({ id: 's1',
  draw(t, lt, ctx) {
    const { X, P, at, FX } = ctx; bg(ctx, t);
    orn(ctx, 540, 430, at(t, 0.0, 1.1), { scale: 1.1 });
    FX.qalamWrite(ctx, t, { text: 'عبادَ الله', s: 0.08, x: 540, y: 760, size: 230, per: 0.07, accent: [0, 1], nib: false });
    say(ctx, t, 'l1', { from: 2, to: 8, y: 1010, size: 76, maxWidth: 860 });
    // الحياة ← القصيرة ← الحقيرة
    const s9 = ctx.wordTime('l1', 9).s, s10 = ctx.wordTime('l1', 10).s, s11 = ctx.wordTime('l1', 11).s;
    const grow = at(t, s9 - 0.1, s9 + 0.5, 'expoOut'), shrink = at(t, s10 - 0.05, s10 + 0.55, 'expoInOut');
    const w = 780 * grow * (1 - shrink) + 24 * shrink * grow;
    if (grow > 0) {
      X.save(); X.fillStyle = shrink > 0.5 ? P.acc : P.ink; X.beginPath(); X.roundRect(540 - w / 2, 1330, w, 24, 12); X.fill(); X.restore();
      ctx.text(X, 'الحياة', 540, 1270, { family: FAM, weight: 900, size: 120, color: P.ink, alpha: grow * (1 - shrink) });
      ctx.text(X, 'القصيرة', 540, 1270, { family: FAM, weight: 900, size: 120, color: P.acc, alpha: shrink * (1 - at(t, s11 - 0.1, s11 + 0.2)) });
      const k11 = at(t, s11 - 0.1, s11 + 0.4, 'expoOut');
      ctx.text(X, 'الحقيرة', 540, 1270 + (1 - k11) * 40, { family: FAM, weight: 900, size: 120, color: P.acc, alpha: k11 });
    }
  } });
