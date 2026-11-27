import { bg, say, orn, frame, FAM } from './_lib.js';
// «القلوب بين إصبعين من أصابع الرحمن يقلّبها حيث شاء» — نص فقط بإطار هادئ، ثم الختام
MOTION.scene({ id: 's14',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const e = ctx.lineSpan('l34').e, outro = at(t, e + 1.0, e + 1.7, 'expoInOut');
    X.save(); X.globalAlpha = 1 - outro;
    frame(ctx, 110, 480, 860, 640, at(lt, 0.2, 1.3, 'cubicInOut'));
    say(ctx, t, 'l33', { from: 0, to: 0, y: 590, size: 58, color: P.mut });
    say(ctx, t, 'l33', { from: 1, to: 7, y: 830, size: 84, weight: 900, maxWidth: 760, lh: 1.4, valign: 'center', accent: [2] });
    say(ctx, t, 'l34', { y: 1290, size: 100, weight: 900, accent: [0, 1, 2] });
    orn(ctx, 540, 1420, at(t, ctx.lineSpan('l34').s, ctx.lineSpan('l34').s + 1.0), { scale: 1.2 });
    X.restore();
    if (outro > 0) { const lg = ctx.img('logo');
      if (lg) { const w = 520, h = w * lg.height / lg.width; X.save(); X.globalAlpha = outro; X.translate(540, 740); X.drawImage(lg, -w / 2, -h / 2, w, h); X.restore(); }
      const s = e + 1.5;
      ctx.text(X, 'تابعني لتتعلم المزيد', 540, 1180 + (1 - at(t, s, s + 0.4, 'expoOut')) * 40, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: at(t, s, s + 0.4) });
      ctx.text(X, '@aj_albaker', 540, 1290, { family: FAM, weight: 700, size: 60, color: P.acc, alpha: at(t, s + 0.2, s + 0.6), dir: 'ltr' });
      ctx.text(X, 'شاركني تعليقك', 540, 1400, { family: FAM, weight: 700, size: 54, color: P.mut, alpha: at(t, s + 0.4, s + 0.8) }); }
  } });
