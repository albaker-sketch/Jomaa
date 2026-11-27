import { bg, say, wt, FAM } from './_lib.js';
// «فأي سؤال سيُسألون؟ وبماذا سيجيبون؟» = علامات سؤال · ثم تتكرر «لتسألنّ عن هذا النعيم»
MOTION.scene({ id: 's15',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s41 = ctx.lineSpan('l41').s;
    say(ctx, t, 'l40', { y: 480, size: 76, weight: 900, maxWidth: 860, lh: 1.5, accent: [1, 7] });
    [[300, 0.0, 150], [540, 0.25, 220], [780, 0.5, 150]].forEach(([x, d, sz]) => { const k = at(t, wt(ctx, 'l40', 2) + d, wt(ctx, 'l40', 2) + d + 0.4, 'expoOut');
      ctx.text(X, '؟', x, 950 + (1 - k) * 40, { family: FAM, weight: 900, size: sz, color: x === 540 ? P.acc : P.hi, alpha: k }); });
    say(ctx, t, 'l41', { y: 1240, size: 96, weight: 900, maxWidth: 860, lh: 1.35, valign: 'center', accent: [0, 3] });
  } });
