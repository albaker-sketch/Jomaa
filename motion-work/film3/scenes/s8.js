import { bg, say, card, wt, FAM } from './_lib.js';
// «فأي ضيف أكرم من رسول الله ﷺ وأبي بكر وعمر»: ثلاث كروت
MOTION.scene({ id: 's8',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l22', { from: 0, to: 3, y: 470, size: 90, weight: 900, accent: [1, 2] });
    const it = [['رسول الله ﷺ', wt(ctx, 'l22', 4), 720, P.acc], ['أبو بكر', wt(ctx, 'l22', 10), 960, P.ink], ['عمر', wt(ctx, 'l22', 12), 1200, P.ink]];
    it.forEach(([n, s, y, c], i) => { const k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return;
      card(ctx, 170, y - 95 + (1 - k) * 30, 740, 180, { fill: i ? '#F6F3EC' : P.acc, stroke: c, lw: 4, r: 90, alpha: k, shadow: true });
      ctx.text(X, n, 540, y + 30 + (1 - k) * 30, { family: FAM, weight: 900, size: 88, color: i ? c : P.bg, alpha: k }); });
  } });
