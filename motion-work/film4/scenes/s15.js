import { bg, FAM } from './_lib.js';
// الختام: الشعار + «تابعني لتتعلم المزيد»
MOTION.scene({ id: 's15',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const k = at(lt, 0.0, 0.7, 'expoOut'), lg = ctx.img('logo');
    if (lg) { const w = 520, h = w * lg.height / lg.width; X.save(); X.globalAlpha = k; X.translate(540, 740); const sc = 0.94 + 0.06 * k; X.scale(sc, sc); X.drawImage(lg, -w / 2, -h / 2, w, h); X.restore(); }
    const s = 0.5;
    ctx.text(X, 'تابعني لتتعلم المزيد', 540, 1180 + (1 - at(lt, s, s + 0.4, 'expoOut')) * 40, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: at(lt, s, s + 0.4) });
    ctx.text(X, '@aj_albaker', 540, 1290, { family: FAM, weight: 700, size: 60, color: P.acc, alpha: at(lt, s + 0.2, s + 0.6), dir: 'ltr' });
    ctx.text(X, 'شاركني تعليقك', 540, 1400, { family: FAM, weight: 700, size: 54, color: P.mut, alpha: at(lt, s + 0.4, s + 0.8) });
  } });
