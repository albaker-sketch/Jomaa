import { bg, say, chip, frame, wt } from './_lib.js';
// «مجاهد رحمه الله، من خيار التابعين» بإطار · ثم أربع كبسولات باهتة: البدع، الأهواء، الفرق، الأحزاب
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    frame(ctx, 170, 420, 740, 380, at(lt, 0.2, 1.1, 'cubicInOut'));
    say(ctx, t, 'l21', { from: 1, to: 1, y: 600, size: 130, weight: 900, accent: [1] });
    say(ctx, t, 'l21', { from: 2, to: 3, y: 690, size: 52, color: P.mut });
    say(ctx, t, 'l21', { from: 4, to: 6, y: 760, size: 56, weight: 900 });
    say(ctx, t, 'l22', { from: 0, to: 6, y: 920, size: 60, maxWidth: 880, color: P.mut });
    const it = [['أهل البدع', 8, 760, 1120], ['والأهواء', 9, 320, 1120], ['والفرق', 10, 760, 1300], ['والأحزاب', 11, 320, 1300]];
    it.forEach(([n, i, x, y]) => chip(ctx, t, n, x, y, wt(ctx, 'l22', i), { w: 360, h: 130, size: 60, stroke: P.mut, color: P.ink }));
  } });
