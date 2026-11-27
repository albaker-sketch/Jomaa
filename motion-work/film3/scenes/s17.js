import { bg, say, card, orn, wt, FAM } from './_lib.js';
// الحديث: «لن تزول قدم عبد يوم القيامة حتى يُسأل عن…» + 4 كروت مرقّمة: عمره · علمه · ماله · جسمه ← الختام
MOTION.scene({ id: 's17',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const e = ctx.lineSpan('l51').e, outro = at(t, e + 0.8, e + 1.5, 'expoInOut');
    X.save(); X.globalAlpha = 1 - outro;
    say(ctx, t, 'l47', { y: 370, size: 52, color: P.mut, out: ctx.lineSpan('l48').s - 0.3 });
    say(ctx, t, 'l48', { from: 0, to: 8, y: 400, size: 66, weight: 900, maxWidth: 900, lh: 1.4, accent: [1, 2, 3] });
    const it = [['عمره', 'فيما أفناه', wt(ctx, 'l48', 9)], ['علمه', 'فيما فعل', wt(ctx, 'l49', 1)], ['ماله', 'من أين اكتسبه وفيما أنفقه', wt(ctx, 'l50', 1)], ['جسمه', 'فيما أبلاه', wt(ctx, 'l51', 1)]];
    it.forEach(([a, b, s], i) => { const k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return; const y = 640 + i * 210;
      card(ctx, 120, y - 85 + (1 - k) * 30, 840, 175, { fill: '#F6F3EC', stroke: P.acc, lw: 4, r: 30, alpha: k, shadow: true });
      X.save(); X.globalAlpha = k; X.fillStyle = P.acc; X.beginPath(); X.arc(880, y + 3, 46, 0, 6.283); X.fill(); X.restore();
      ctx.text(X, String(i + 1), 880, y + 28, { family: FAM, weight: 900, size: 64, color: P.bg, alpha: k, dir: 'ltr' });
      ctx.text(X, a, 790, y + 25, { family: FAM, weight: 900, size: 76, color: P.ink, alpha: k, align: 'right' });
      ctx.text(X, b, 560, y + 18, { family: FAM, weight: 700, size: 44, color: P.mut, alpha: at(t, s + 0.3, s + 0.7), align: 'right', maxWidth: 400 }); });
    X.restore();
    if (outro > 0) { const lg = ctx.img('logo');
      if (lg) { const w = 520, h = w * lg.height / lg.width; X.save(); X.globalAlpha = outro; X.translate(540, 740); X.drawImage(lg, -w / 2, -h / 2, w, h); X.restore(); }
      const s = e + 1.3;
      ctx.text(X, 'تابعني لتتعلم المزيد', 540, 1180 + (1 - at(t, s, s + 0.4, 'expoOut')) * 40, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: at(t, s, s + 0.4) });
      ctx.text(X, '@aj_albaker', 540, 1290, { family: FAM, weight: 700, size: 60, color: P.acc, alpha: at(t, s + 0.2, s + 0.6), dir: 'ltr' });
      ctx.text(X, 'شاركني تعليقك', 540, 1400, { family: FAM, weight: 700, size: 54, color: P.mut, alpha: at(t, s + 0.4, s + 0.8) }); }
  } });
