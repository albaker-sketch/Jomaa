import { bg, say, card, mark, wt, FAM } from './_lib.js';
// «ذكرت ما منّ الله به عليّ»: ثلاث نعم بعلامات صح ← «فسرّني ذلك حتى أبكاني»
MOTION.scene({ id: 's12',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s30 = ctx.lineSpan('l30').s;
    say(ctx, t, 'l27', { from: 0, to: 6, y: 400, size: 66, weight: 900, maxWidth: 880, accent: [3] });
    const it = [['السنة ومعرفتها', wt(ctx, 'l27', 8)], ['التخلص من شبه القوم', wt(ctx, 'l28', 0)], ['موافقة العقل الصريح', wt(ctx, 'l29', 0)], ['والفطرة السليمة', wt(ctx, 'l29', 3)]];
    it.forEach(([n, s], i) => { const k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return; const y = 600 + i * 170;
      card(ctx, 130, y - 70 + (1 - k) * 30, 820, 140, { fill: '#F6F3EC', stroke: P.hi, lw: 3, r: 30, alpha: k, shadow: true });
      ctx.text(X, n, 490, y + 20 + (1 - k) * 30, { family: FAM, weight: 900, size: 58, color: P.ink, alpha: k, maxWidth: 600 });
      mark(ctx, 880, y, 38, at(t, s + 0.2, s + 0.7), true); });
    say(ctx, t, 'l30', { y: 1400, size: 88, weight: 900, accent: [0, 3] });
  } });
