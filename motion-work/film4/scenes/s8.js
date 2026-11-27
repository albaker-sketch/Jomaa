import { bg, say, chip, frame, wt } from './_lib.js';
// «قال الله · قال النبي ﷺ» كثير يقولونها ← «من منهم يفهمها بهدي الصحابة؟» = تمر من خلال إطار
MOTION.scene({ id: 's8',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s19 = ctx.lineSpan('l19').s, s20 = ctx.lineSpan('l20').s;
    say(ctx, t, 'l18', { from: 0, to: 2, y: 420, size: 62, color: P.mut, out: s19 - 0.3 });
    chip(ctx, t, 'قال الله', 760, 620, wt(ctx, 'l18', 3), { w: 360, h: 140, size: 70 });
    chip(ctx, t, 'قال النبي ﷺ', 320, 620, wt(ctx, 'l18', 5), { w: 400, h: 140, size: 70 });
    say(ctx, t, 'l19', { from: 0, to: 3, y: 420, size: 74, weight: 900, accent: [3] });
    const ka = at(t, s20 - 0.6, s20 + 0.2);
    ctx.drawPath(X, [[760, 700], [600, 900]], ka, { width: 6, color: P.hi }); ctx.drawPath(X, [[320, 700], [480, 900]], ka, { width: 6, color: P.hi });
    frame(ctx, 170, 930, 740, 300, at(t, s20 - 0.3, s20 + 0.7, 'cubicInOut'));
    say(ctx, t, 'l20', { from: 0, to: 1, y: 1110, size: 100, weight: 900, accent: [0, 1] });
    say(ctx, t, 'l20', { from: 2, to: 4, y: 1320, size: 54, color: P.mut });
  } });
