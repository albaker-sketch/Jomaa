import { bg, say, frame, wt } from './_lib.js';
// «وأنا والذي نفسي بيده لأخرجني الذي أخرجكما» · «قوموا»
MOTION.scene({ id: 's4',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l9', { y: 420, size: 58, color: P.mut });
    frame(ctx, 110, 500, 860, 560, at(t, wt(ctx, 'l10', 0) - 0.4, wt(ctx, 'l10', 0) + 0.8, 'cubicInOut'));
    say(ctx, t, 'l10', { y: 780, size: 90, weight: 900, maxWidth: 740, lh: 1.4, valign: 'center', accent: [4, 5, 6], hot: true });
    say(ctx, t, 'l11', { from: 0, to: 0, y: 1300, size: 150, weight: 900, accent: [0] });
    say(ctx, t, 'l11', { from: 1, to: 3, y: 1440, size: 62, color: P.mut });
  } });
