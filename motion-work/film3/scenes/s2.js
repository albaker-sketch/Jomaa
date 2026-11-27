import { bg, say, card, wt, FAM } from './_lib.js';
// «فإذا هو بأبي بكر الصديق وعمر»: كرتين أسماء
MOTION.scene({ id: 's2',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l4', { from: 0, to: 1, y: 520, size: 64, color: P.mut });
    const nm = [['أبو بكر الصديق', wt(ctx, 'l4', 2), 700, P.acc], ['عمر', wt(ctx, 'l4', 5), 1000, P.ink]];
    nm.forEach(([n, s, y, c]) => { const k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return;
      card(ctx, 150, y - 110 + (1 - k) * 30, 780, 200, { fill: '#F6F3EC', stroke: c, lw: 5, r: 34, alpha: k, shadow: true });
      ctx.text(X, n, 540, y + 25 + (1 - k) * 30, { family: FAM, weight: 900, size: 100, color: c, alpha: k }); });
    say(ctx, t, 'l4', { from: 6, to: 8, y: 1280, size: 58, color: P.mut });
  } });
