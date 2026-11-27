import { bg, say, frame, wt } from './_lib.js';
// «ليس كل من انتسب إلى الإسلام كان على حق» — تتكرر، والمرة الثانية بإطار
MOTION.scene({ id: 's4',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s7 = ctx.lineSpan('l7').s, s8 = ctx.lineSpan('l8').s;
    say(ctx, t, 'l6', { y: 760, size: 96, weight: 900, maxWidth: 820, lh: 1.4, valign: 'center', accent: [6, 7, 8], out: s7 - 0.3 });
    say(ctx, t, 'l7', { y: 460, size: 72, color: P.mut, accent: [2] });
    frame(ctx, 110, 560, 860, 620, at(t, s8 - 0.4, s8 + 0.8, 'cubicInOut'));
    say(ctx, t, 'l8', { y: 860, size: 96, weight: 900, maxWidth: 740, lh: 1.4, valign: 'center', accent: [0, 6, 7, 8], hot: true });
  } });
