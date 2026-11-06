import { bg, say, card, frame, FAM } from './_lib.js';
// حديث الإزار في إطار · تعريف «الكعبين» بكرت قاموس · وعند الإعادة الكلمات تنبض وحدة وحدة
MOTION.scene({ id: 's11',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l22', { from: 0, to: 2, y: 400, size: 62, color: P.mut });
    const s3 = ctx.wordTime('l22', 3).s;
    frame(ctx, 110, 470, 860, 520, at(t, s3 - 0.4, s3 + 0.7, 'cubicInOut'));
    const s24 = ctx.lineSpan('l24').s, rep = t > s24 - 0.1;
    // الحديث مرة وحدة: من l22، وعند l24 كل كلمة تتلوّن مع الإعادة
    const ws24 = ctx.wordsOf('l24');
    say(ctx, t, 'l22', { from: 3, to: 9, y: 730, size: 92, weight: 900, maxWidth: 760, lh: 1.45, valign: 'center',
      accent: rep ? [] : [5, 8, 9], color: P.ink });
    if (rep) {   // الإعادة: نفس الكلمات بالعنابي فوقها وحدة وحدة
      const L = ctx.text.layout(X, 'ما أسفل الكعبين من الإزار ففي النار', { family: 'Tajawal', weight: 900, size: 92, maxWidth: 760, lineHeight: 1.45 });
      ctx.text.drawLayout(X, L, 540, 730 - (L.lines.length - 1) * L.lh / 2, { perWord: (i) => { const w = ws24[i], k = at(t, w.s - 0.05, w.s + 0.25); return k <= 0 ? { alpha: 0 } : { alpha: k, color: P.acc }; } });
    }
    // كرت القاموس
    const s23 = ctx.lineSpan('l23').s, kc = at(t, s23 - 0.2, s23 + 0.4, 'expoOut');
    card(ctx, 150, 1110, 780, 330, { fill: P.ink, r: 30, alpha: kc, scale: 0.96 + 0.04 * kc, shadow: true });
    if (kc > 0) {
      X.save(); X.globalAlpha = kc; X.fillStyle = P.hi; X.fillRect(150 + 780 - 60, 1160, 8, 230); X.restore();
      ctx.text(X, 'الكعبان', 830, 1220, { family: FAM, weight: 900, size: 76, color: P.hi, align: 'right', alpha: kc });
      say(ctx, t, 'l23', { from: 1, to: 5, x: 830, align: 'right', y: 1330, size: 60, maxWidth: 640, color: P.bg });
    }
  } });
