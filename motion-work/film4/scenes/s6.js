import { bg, say, card, frame, wt } from './_lib.js';
// سؤال الصحابة «من هي يا رسول الله؟» ← الجواب بإطار
MOTION.scene({ id: 's6',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s13 = ctx.lineSpan('l13').s, s15 = ctx.lineSpan('l15').s;
    say(ctx, t, 'l12', { y: 400, size: 56, maxWidth: 900, color: P.mut, out: ctx.lineSpan('l14').s - 0.3 });
    const k = at(t, s13 - 0.3, s13 + 0.2, 'expoOut');
    card(ctx, 120, 560, 840, 190, { fill: P.ink, r: 44, alpha: k, scale: 0.96 + 0.04 * k, shadow: true });
    X.save(); X.globalAlpha = k; X.fillStyle = P.ink; X.beginPath(); X.moveTo(760, 740); X.lineTo(830, 740); X.lineTo(850, 810); X.closePath(); X.fill(); X.restore();
    say(ctx, t, 'l13', { y: 682, size: 72, weight: 900, color: P.bg, accent: [0, 1], accentColor: P.hi });
    say(ctx, t, 'l14', { y: 900, size: 54, color: P.mut });
    frame(ctx, 110, 950, 860, 500, at(t, s15 - 0.4, s15 + 0.8, 'cubicInOut'));
    say(ctx, t, 'l15', { y: 1200, size: 90, weight: 900, maxWidth: 740, lh: 1.4, valign: 'center', accent: [4, 9], hot: true });
  } });
