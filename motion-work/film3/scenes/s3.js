import { bg, say, card, wt, FAM } from './_lib.js';
// سؤال متعجب ← «الجوع يا رسول الله»
MOTION.scene({ id: 's3',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l5', { y: 400, size: 58, color: P.mut, accent: [2] });
    const k = at(t, wt(ctx, 'l6', 0) - 0.3, wt(ctx, 'l6', 0) + 0.2, 'expoOut');
    card(ctx, 120, 480, 840, 320, { fill: P.ink, r: 44, alpha: k, scale: 0.96 + 0.04 * k, shadow: true });
    X.save(); X.globalAlpha = k; X.fillStyle = P.ink; X.beginPath(); X.moveTo(800, 790); X.lineTo(880, 790); X.lineTo(900, 880); X.closePath(); X.fill(); X.restore();
    say(ctx, t, 'l6', { y: 640, size: 82, weight: 900, maxWidth: 740, valign: 'center', color: P.bg, accent: [1], accentColor: P.hi });
    say(ctx, t, 'l7', { y: 990, size: 54, color: P.mut });
    const s8 = wt(ctx, 'l8', 0), k8 = at(t, s8 - 0.1, s8 + 0.5, 'expoOut');
    ctx.text(X, 'الجوع', 540, 1260 + (1 - k8) * 50, { family: FAM, weight: 900, size: 230, color: P.acc, alpha: k8 });
    say(ctx, t, 'l8', { from: 1, to: 3, y: 1400, size: 70, weight: 900 });
  } });
