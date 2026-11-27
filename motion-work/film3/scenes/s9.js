import { bg, say, chip, wt } from './_lib.js';
// العذق: عنقود يتدلى، وتطلع حباته بثلاث ألوان: بسر · تمر · رطب · «كلوا من هذه»
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l23', { from: 0, to: 6, y: 400, size: 66, maxWidth: 880, accent: [4] });
    const ks = at(t, wt(ctx, 'l23', 4) - 0.2, wt(ctx, 'l23', 4) + 0.8, 'cubicOut');
    ctx.drawPath(X, [[540, 520], [545, 640], [540, 720]], ks, { width: 10, color: '#B58A3C' });
    const cols = { b: '#C9B037', t: '#6B3B1F', r: '#A8642A' }, r = ctx.rng('dates');
    const S = [['b', wt(ctx, 'l23', 8)], ['t', wt(ctx, 'l23', 9)], ['r', wt(ctx, 'l23', 10)]];
    for (let i = 0; i < 54; i++) { const row = Math.floor(i / 6), col = i % 6, kind = S[i % 3];
      const x = 540 + (col - 2.5) * (52 - row * 3) + (r() - 0.5) * 14, y = 740 + row * 50 + (r() - 0.5) * 10;
      const k = at(t, kind[1] - 0.1 + row * 0.03, kind[1] + 0.3 + row * 0.03, 'expoOut'); if (k <= 0) continue;
      X.save(); X.globalAlpha = k; X.fillStyle = cols[kind[0]]; X.beginPath(); X.ellipse(x, y, 17 * k, 26 * k, (r() - 0.5) * 0.6, 0, 6.283); X.fill(); X.restore(); }
    chip(ctx, t, 'بسر', 820, 1290, wt(ctx, 'l23', 8), { w: 220, h: 110, size: 58, stroke: cols.b });
    chip(ctx, t, 'تمر', 540, 1290, wt(ctx, 'l23', 9), { w: 220, h: 110, size: 58, stroke: cols.t });
    chip(ctx, t, 'رطب', 260, 1290, wt(ctx, 'l23', 10), { w: 220, h: 110, size: 58, stroke: cols.r });
    say(ctx, t, 'l24', { from: 1, to: 3, y: 1450, size: 76, weight: 900, accent: [1] });
  } });
