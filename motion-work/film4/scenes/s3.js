import { bg, say, chip, wt, FAM } from './_lib.js';
// «اتباع السنة» = طريق مستقيم ينتهي بـ«السنة» · «سالماً من البدع والأهواء» = طريقين جانبيين يبهتون
MOTION.scene({ id: 's3',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l4', { y: 420, size: 70, maxWidth: 880, accent: [5, 6, 7] });
    const kp = at(t, wt(ctx, 'l4', 6) - 0.3, wt(ctx, 'l4', 7) + 0.5, 'cubicInOut');
    ctx.drawPath(X, [[540, 1440], [540, 800]], kp, { width: 12, color: P.acc, tip: { r: 12, color: P.acc } });
    chip(ctx, t, 'السنة', 540, 700, wt(ctx, 'l4', 7), { w: 300, h: 130, size: 72, fill: P.acc, stroke: P.acc, color: P.bg });
    const kb = at(t, wt(ctx, 'l5', 2) - 0.2, wt(ctx, 'l5', 2) + 0.6, 'cubicOut'), kh = at(t, wt(ctx, 'l5', 3) - 0.2, wt(ctx, 'l5', 3) + 0.6, 'cubicOut');
    X.save(); X.setLineDash([14, 14]); ctx.drawPath(X, [[540, 1300], [400, 1180], [250, 1120]], kb, { width: 6, color: P.mut }); ctx.drawPath(X, [[540, 1250], [690, 1130], [840, 1080]], kh, { width: 6, color: P.mut }); X.restore();
    chip(ctx, t, 'البدع', 220, 1040, wt(ctx, 'l5', 2), { w: 230, h: 110, size: 54, stroke: P.mut, color: P.mut });
    chip(ctx, t, 'الأهواء', 850, 1000, wt(ctx, 'l5', 3), { w: 230, h: 110, size: 54, stroke: P.mut, color: P.mut });
    say(ctx, t, 'l5', { y: 1460, size: 64, weight: 900, accent: [0] });
  } });
