import { bg, say, card, orn, FAM } from './_lib.js';
// «هذا موسى يسأل أن يتعلّم» ← «فماذا بلغ أحدنا…» ← «لا أدري / لا أعلم» ← «نقصاً في قدره» ← الختام
MOTION.scene({ id: 's13',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s32 = ctx.lineSpan('l32').s, e34 = ctx.lineSpan('l34').e, outro = at(t, e34 + 0.8, e34 + 1.5, 'expoInOut');
    X.save(); X.globalAlpha = 1 - outro;
    say(ctx, t, 'l31', { y: 760, size: 92, weight: 900, maxWidth: 820, lh: 1.4, valign: 'center', accent: [1, 6], out: s32 - 0.3 });
    say(ctx, t, 'l32', { y: 430, size: 64, maxWidth: 900, accent: [6, 11] });
    say(ctx, t, 'l33', { y: 640, size: 64, maxWidth: 900, accent: [3] });
    say(ctx, t, 'l34', { from: 0, to: 3, y: 830, size: 58, color: P.mut });
    [[4, 'لا أدري', 790], [7, 'لا أعلم', 290]].forEach(([i, txt, x]) => { const s = ctx.wordTime('l34', i).s, k = at(t, s - 0.1, s + 0.35, 'expoOut');
      card(ctx, x - 200, 920, 400, 170, { fill: '#F6F3EC', stroke: P.ink, lw: 4, r: 85, alpha: k, scale: 0.95 + 0.05 * k, shadow: true });
      ctx.text(X, txt, x, 1030, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: k }); });
    say(ctx, t, 'l34', { from: 9, to: 11, y: 1300, size: 120, weight: 900, accent: [9, 10, 11] });
    orn(ctx, 540, 1420, at(t, ctx.wordTime('l34', 11).s, ctx.wordTime('l34', 11).s + 1.0), { scale: 1.1 });
    X.restore();
    if (outro > 0) {
      const lg = ctx.img('logo');
      if (lg) { const w = 520, h = w * lg.height / lg.width; X.save(); X.globalAlpha = outro; X.translate(540, 740); const sc = 0.94 + 0.06 * outro; X.scale(sc, sc); X.drawImage(lg, -w / 2, -h / 2, w, h); X.restore(); }
      const s = e34 + 1.3;
      ctx.text(X, 'تابعني لتتعلم المزيد', 540, 1180 + (1 - at(t, s, s + 0.4, 'expoOut')) * 40, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: at(t, s, s + 0.4) });
      ctx.text(X, '@aj_albaker', 540, 1290, { family: FAM, weight: 700, size: 60, color: P.acc, alpha: at(t, s + 0.2, s + 0.6), dir: 'ltr' });
      ctx.text(X, 'شاركني تعليقك', 540, 1400, { family: FAM, weight: 700, size: 54, color: P.mut, alpha: at(t, s + 0.4, s + 0.8) });
    }
  } });
