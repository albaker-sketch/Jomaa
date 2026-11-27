import { bg, say, chip, wt } from './_lib.js';
// «فمن أراد النجاة» ← كرتين: سنة النبي ﷺ + هدي الصحابة
MOTION.scene({ id: 's7',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l16', { from: 0, to: 2, y: 520, size: 100, weight: 900, accent: [2] });
    chip(ctx, t, 'سنة النبي ﷺ', 540, 820, wt(ctx, 'l16', 4), { w: 700, h: 170, size: 84, fill: P.acc, stroke: P.acc, color: P.bg });
    const k = at(t, wt(ctx, 'l17', 0) - 0.3, wt(ctx, 'l17', 0) + 0.2);
    ctx.text(X, '+', 540, 1000, { family: 'Tajawal', weight: 900, size: 90, color: P.hi, alpha: k });
    chip(ctx, t, 'هدي الصحابة', 540, 1140, wt(ctx, 'l17', 0), { w: 700, h: 170, size: 84, fill: P.ink, stroke: P.ink, color: P.bg });
    say(ctx, t, 'l17', { from: 2, to: 4, y: 1330, size: 54, color: P.mut });
  } });
