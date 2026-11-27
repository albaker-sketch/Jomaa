import { bg, say, frame, wt } from './_lib.js';
// «ابن القيم رحمه الله» · «وجدٌ أبكاه» = دمعة
MOTION.scene({ id: 's11',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    frame(ctx, 170, 420, 740, 320, at(lt, 0.2, 1.1, 'cubicInOut'));
    say(ctx, t, 'l25', { from: 1, to: 2, y: 600, size: 120, weight: 900, accent: [1, 2] });
    say(ctx, t, 'l25', { from: 3, to: 4, y: 690, size: 52, color: P.mut });
    say(ctx, t, 'l26', { from: 0, to: 4, y: 870, size: 64, maxWidth: 880 });
    say(ctx, t, 'l26', { from: 5, to: 11, y: 1000, size: 72, weight: 900, maxWidth: 880, accent: [8, 9] });
    const k = at(t, wt(ctx, 'l26', 9) - 0.1, wt(ctx, 'l26', 9) + 0.9, 'cubicOut');
    if (k > 0) { X.save(); X.globalAlpha = Math.min(1, k * 2); X.translate(540, 1280 + 40 * k); X.fillStyle = '#5B8DB8';
      X.beginPath(); X.moveTo(0, -90); X.bezierCurveTo(30, -45, 65, 0, 65, 30); X.arc(0, 30, 65, 0, Math.PI); X.bezierCurveTo(-65, 0, -30, -45, 0, -90); X.fill(); X.restore(); }
  } });
