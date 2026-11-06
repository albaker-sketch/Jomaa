import { bg, say, mark, orn, FAM } from './_lib.js';
// الخلاصة: «هل فعله النبي ﷺ؟ نعم ✓ · هل فعله الصحابة؟ نعم ✓» ← «فلماذا لا نفعل؟» ← الختام
MOTION.scene({ id: 's13',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s28 = ctx.lineSpan('l28').s, e28 = ctx.lineSpan('l28').e, up = at(t, s28 - 0.3, s28 + 0.4, 'expoInOut');
    const outro = at(t, e28 + 1.0, e28 + 1.7, 'expoInOut');
    X.save(); X.globalAlpha = 1 - outro;
    const rows = [['l26', 2, 6, 380], ['l27', 0, 3, 640]];
    for (const [id, a, yes, y0] of rows) {
      const y = y0 - 0 * up, dim = 1 - 0.55 * up;
      say(ctx, t, id, { from: a, to: yes - 1, x: 920, align: 'right', y, size: 62, weight: 900, dim: () => dim });
      const ws = ctx.wordTime(id, id === 'l26' ? 9 : 3);
      mark(ctx, 120, y - 22, 50, at(t, ws.s - 0.1, ws.s + 0.4), true);
      ctx.text(X, 'نعم', 235, y, { family: FAM, weight: 900, size: 64, color: P.acc, alpha: at(t, ws.s - 0.05, ws.s + 0.25) * dim });
    }
    ctx.drawPath(X, [[900, 800], [180, 800]], at(t, s28 - 0.4, s28 + 0.3), { width: 3, color: P.hi });
    say(ctx, t, 'l28', { y: 1120, size: 128, weight: 900, maxWidth: 980, lh: 1.25, valign: 'center', accent: [0, 1, 2] });
    orn(ctx, 540, 1400, at(t, e28, e28 + 1.0), { scale: 1.1 });
    X.restore();
    // الختام
    if (outro > 0) {
      const lg = ctx.img('logo'), k = outro;
      if (lg) { const w = 520, h = w * lg.height / lg.width; X.save(); X.globalAlpha = k; X.translate(540, 740); const sc = 0.94 + 0.06 * k; X.scale(sc, sc); X.drawImage(lg, -w / 2, -h / 2, w, h); X.restore(); }
      const s = e28 + 1.5;
      ctx.text(X, 'تابعني لتتعلم المزيد', 540, 1180 + (1 - at(t, s, s + 0.4, 'expoOut')) * 40, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: at(t, s, s + 0.4) });
      ctx.text(X, '@aj_albaker', 540, 1290, { family: FAM, weight: 700, size: 60, color: P.acc, alpha: at(t, s + 0.2, s + 0.6), dir: 'ltr' });
      ctx.text(X, 'شاركني تعليقك', 540, 1400, { family: FAM, weight: 700, size: 54, color: P.mut, alpha: at(t, s + 0.4, s + 0.8) });
    }
  } });
