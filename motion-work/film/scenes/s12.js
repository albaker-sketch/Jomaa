import { bg, say, frame, FAM } from './_lib.js';
// «إزرة المؤمن إلى أنصاف ساقيه»: الحديث بإطار + مسطرة رأسية فيها علامة النص تولّع عند «أنصاف»
MOTION.scene({ id: 's12',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l25', { from: 0, to: 0, y: 420, size: 60, color: P.mut });
    frame(ctx, 110, 500, 860, 470, at(lt, 0.1, 1.0, 'cubicInOut'));
    say(ctx, t, 'l25', { from: 1, to: 5, y: 735, size: 100, weight: 900, maxWidth: 740, lh: 1.4, valign: 'center', accent: [4], hot: true });
    const s4 = ctx.wordTime('l25', 4).s, kr = at(lt, 0.6, 1.4, 'cubicOut'), kh = at(t, s4 - 0.1, s4 + 0.5, 'expoOut');
    const top = 1080, bot = 1460, x = 540;
    ctx.drawPath(X, [[x, top], [x, bot]], kr, { width: 6, color: P.ink });
    for (const yy of [top, bot]) { X.save(); X.globalAlpha = kr; X.fillStyle = P.ink; X.fillRect(x - 50, yy - 3, 100, 6); X.restore(); }
    for (let i = 1; i < 8; i++) { const yy = top + (bot - top) * i / 8; X.save(); X.globalAlpha = kr * 0.6; X.fillStyle = P.mut; X.fillRect(x - 22, yy - 1.5, 44, 3); X.restore(); }
    if (kh > 0) {
      const ym = (top + bot) / 2; X.save(); X.globalAlpha = kh; X.fillStyle = P.acc; X.beginPath(); X.roundRect(x - 110 * kh, ym - 7, 220 * kh, 14, 7); X.fill();
      X.translate(x + 150, ym); X.rotate(Math.PI / 4); X.fillRect(-14, -14, 28, 28); X.restore();
      ctx.text(X, 'النصف', x - 230, ym + 22, { family: FAM, weight: 900, size: 62, color: P.acc, alpha: kh });
    }
  } });
