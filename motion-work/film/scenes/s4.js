import { bg, say, card, mark, rise, FAM } from './_lib.js';
// القاعدة: ثبت ← فعلناه ✓ · لم يثبت ← تركناه ✗ · ثم «نجهله ← بحثنا» بشريط بحث
MOTION.scene({ id: 's4',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s7 = ctx.lineSpan('l7').s, up = at(t, s7 - 0.2, s7 + 0.6, 'expoInOut');
    X.save(); X.translate(0, -170 * up);
    const cols = [ { x: 560, ok: true, top: 'ما ثبت عنهم', act: 'فعلناه', w0: 0, wa: 3 }, { x: 120, ok: false, top: 'وما لم يثبت', act: 'تركناه', w0: 4, wa: 8 } ];
    for (const c of cols) {
      const s0 = ctx.wordTime('l6', c.w0).s, sa = ctx.wordTime('l6', c.wa).s, k = at(t, s0 - 0.1, s0 + 0.45, 'expoOut');
      card(ctx, c.x, 470, 400, 640, { fill: '#F6F3EC', stroke: c.ok ? P.acc : P.ink, lw: 3, r: 34, alpha: k, scale: 0.95 + 0.05 * k, shadow: true });
      if (k <= 0) continue;
      ctx.text(X, c.top, c.x + 200, 590, { family: FAM, weight: 700, size: 56, color: P.mut, alpha: k });
      mark(ctx, c.x + 200, 790, 92, at(t, sa - 0.5, sa + 0.1), c.ok);
      rise(ctx, t, c.act, c.x + 200, 1010, sa - 0.05, { size: 92, weight: 900, color: c.ok ? P.acc : P.ink });
    }
    X.restore();
    // نجهله ← بحثنا
    if (up > 0) {
      say(ctx, t, 'l7', { y: 1080, size: 66, maxWidth: 900, accent: [1, 2] });
      const sb = ctx.wordTime('l7', 2).s, kb = at(t, sb - 0.2, sb + 0.4, 'expoOut');
      card(ctx, 130, 1230, 820, 130, { r: 65, fill: '#F6F3EC', stroke: P.ink, lw: 3, alpha: kb, scale: 0.96 + 0.04 * kb, shadow: true });
      if (kb > 0) {
        X.save(); X.globalAlpha = kb; X.strokeStyle = P.acc; X.lineWidth = 9; X.lineCap = 'round';
        X.beginPath(); X.arc(870, 1287, 24, 0, 6.283); X.stroke(); X.beginPath(); X.moveTo(853, 1304); X.lineTo(832, 1325); X.stroke(); X.restore();
        const q = 'هدي النبي ﷺ وأصحابه', kt = at(t, sb + 0.2, sb + 1.6);
        X.save(); X.beginPath(); X.rect(790 - 640 * kt, 1240, 640 * kt, 110); X.clip();
        ctx.text(X, q, 790, 1313, { family: FAM, weight: 700, size: 50, color: P.ink, align: 'right' }); X.restore();
        if (kt < 1) { X.save(); X.fillStyle = P.acc; X.fillRect(790 - 640 * kt - 6, 1262, 4, 64); X.restore(); }
      }
    }
  } });
