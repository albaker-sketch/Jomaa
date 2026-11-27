import { bg, say, frame, wt } from './_lib.js';
// جاء الأنصاري ← «الحمد لله، ما أحد اليوم أكرم مني أضيافاً» بإطار · «وحقّ له»
MOTION.scene({ id: 's7',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s20 = ctx.lineSpan('l20').s;
    say(ctx, t, 'l18', { y: 420, size: 62, maxWidth: 880, color: P.mut, accent: [5], out: ctx.lineSpan('l19').s - 0.3 });
    say(ctx, t, 'l19', { y: 420, size: 62, maxWidth: 880, color: P.mut, out: s20 - 0.3 });
    frame(ctx, 110, 520, 860, 600, at(t, s20 - 0.4, s20 + 0.8, 'cubicInOut'));
    say(ctx, t, 'l20', { from: 0, to: 2, y: 680, size: 70, weight: 900, color: P.mut });
    say(ctx, t, 'l20', { from: 3, to: 8, y: 880, size: 96, weight: 900, maxWidth: 740, lh: 1.35, valign: 'center', accent: [6, 7, 8], hot: true });
    say(ctx, t, 'l21', { y: 1340, size: 76, weight: 900, accent: [0] });
  } });
