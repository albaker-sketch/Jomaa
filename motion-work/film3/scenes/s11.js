import { bg, say, chip, mark, wt } from './_lib.js';
// «فأكلوا منها ومن ذلك العذق وشربوا من الماء» · «فلما شبعوا ورووا» = علامتين صح
MOTION.scene({ id: 's11',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l28', { y: 450, size: 74, maxWidth: 880, accent: [0, 5] });
    chip(ctx, t, 'الشاة', 800, 820, wt(ctx, 'l28', 1), { w: 240, h: 130, size: 60 });
    chip(ctx, t, 'العذق', 540, 820, wt(ctx, 'l28', 4), { w: 240, h: 130, size: 60 });
    chip(ctx, t, 'الماء', 280, 820, wt(ctx, 'l28', 7), { w: 240, h: 130, size: 60, stroke: '#5B8DB8' });
    say(ctx, t, 'l29', { y: 1180, size: 100, weight: 900, accent: [2, 3] });
    mark(ctx, 720, 1330, 50, at(t, wt(ctx, 'l29', 2), wt(ctx, 'l29', 2) + 0.5), true);
    mark(ctx, 360, 1330, 50, at(t, wt(ctx, 'l29', 3), wt(ctx, 'l29', 3) + 0.5), true);
  } });
