import { bg, say, frame, orn } from './_lib.js';
// «حذيفة بن اليمان رضي الله عنه» بإطار · «رجلاً يصلي فطفّف»
MOTION.scene({ id: 's5',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l10', { from: 0, to: 1, y: 470, size: 62, color: P.mut });
    frame(ctx, 130, 560, 820, 420, at(t, ctx.wordTime('l10', 2).s - 0.4, ctx.wordTime('l10', 2).s + 0.8, 'cubicInOut'));
    say(ctx, t, 'l10', { from: 2, to: 4, y: 790, size: 100, weight: 900, maxWidth: 800, accent: [2, 3, 4] });
    say(ctx, t, 'l10', { from: 5, to: 7, y: 900, size: 54, color: P.mut });
    say(ctx, t, 'l10', { from: 8, to: 10, y: 1200, size: 96, weight: 900, accent: [10] });
    orn(ctx, 540, 1330, at(t, ctx.wordTime('l10', 10).s, ctx.wordTime('l10', 10).s + 1.0));
  } });
