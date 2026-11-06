import { bg, say, card, frame, FAM } from './_lib.js';
// «فنسأل: ما هدي النبي ﷺ في ذلك؟» = كرت السؤال 1 يرجع · ثم الحديث داخل إطار
MOTION.scene({ id: 's10',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const k = at(lt, 0.1, 0.6, 'expoOut');
    card(ctx, 110, 330 + (1 - k) * 50, 860, 200, { fill: '#F7F4ED', stroke: P.acc, lw: 4, r: 32, alpha: k, shadow: true });
    X.save(); X.globalAlpha = k; X.fillStyle = P.acc; X.beginPath(); X.arc(880, 430 + (1 - k) * 50, 46, 0, 6.283); X.fill(); X.restore();
    ctx.text(X, '1', 880, 454 + (1 - k) * 50, { family: FAM, weight: 900, size: 66, color: P.bg, alpha: k, dir: 'ltr' });
    say(ctx, t, 'l20', { x: 800, align: 'right', y: 420, size: 52, maxWidth: 640 });
    const s21 = ctx.lineSpan('l21').s;
    say(ctx, t, 'l21', { from: 0, to: 0, y: 740, size: 60, color: P.mut });
    frame(ctx, 110, 820, 860, 520, at(t, s21 - 0.1, s21 + 1.0, 'cubicInOut'));
    say(ctx, t, 'l21', { from: 1, to: 4, y: 1080, size: 104, weight: 900, maxWidth: 720, lh: 1.4, valign: 'center', accent: [1, 2, 3, 4], hot: true });
  } });
