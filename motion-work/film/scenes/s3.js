import { bg, say, card, FAM } from './_lib.js';
// «محرّك المسلم»: 5 كبسولات حول دائرة، وعند «هدي النبي ﷺ» تتصل كلها بالمركز وتجري فيها نقاط
MOTION.scene({ id: 's3',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l4', { from: 0, to: 3, y: 380, size: 78, weight: 900, accent: [2] });
    const cx = 540, cy = 930, R = 320, s5 = ctx.wordTime('l5', 2).s, link = at(t, s5 - 0.2, s5 + 0.9, 'cubicInOut');
    const names = ['فكراً', 'اعتقاداً', 'قولاً', 'فعلاً', 'تركاً'];
    const pos = names.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + R * Math.cos(a), cy + R * Math.sin(a) * 0.92]; });
    // الخطوط والنقاط
    pos.forEach(([x, y], i) => {
      const k = at(link, i * 0.1, 0.6 + i * 0.1);
      if (k > 0) {
        ctx.drawPath(X, [[x, y], [cx, cy]], k, { width: 3, color: P.hi });
        for (let j = 0; j < 3; j++) { const f = ((t * 0.6 + j / 3 + i * 0.13) % 1); if (k < 1) break;
          X.save(); X.fillStyle = P.acc; X.globalAlpha = Math.sin(f * Math.PI); X.beginPath(); X.arc(x + (cx - x) * f, y + (cy - y) * f, 7, 0, 6.283); X.fill(); X.restore(); }
      }
    });
    // الكبسولات
    pos.forEach(([x, y], i) => {
      const w = ctx.wordTime('l4', 4 + i), k = at(t, w.s - 0.12, w.s + 0.3, 'expoOut'); if (k <= 0) return;
      const on = link > 0.3 + i * 0.1;
      card(ctx, x - 125, y - 58, 250, 116, { r: 58, fill: on ? P.acc : '#F6F3EC', stroke: on ? P.acc : P.ink, lw: 3, scale: 0.94 + 0.06 * k, alpha: k, shadow: true });
      ctx.text(X, names[i], x, y + 20, { family: FAM, weight: 900, size: 58, color: on ? P.bg : P.ink, alpha: k });
    });
    // المركز
    const kc = at(t, s5 - 0.15, s5 + 0.45, 'expoOut');
    if (kc > 0) {
      X.save(); X.translate(cx, cy); X.scale(0.95 + 0.05 * kc, 0.95 + 0.05 * kc); X.globalAlpha = kc;
      X.fillStyle = P.ink; X.beginPath(); X.arc(0, 0, 150, 0, 6.283); X.fill();
      X.strokeStyle = P.hi; X.lineWidth = 3; X.beginPath(); X.arc(0, 0, 166, 0, 6.283); X.stroke(); X.restore();
      ctx.text(X, 'هدي', cx, cy + 10, { family: FAM, weight: 900, size: 104, color: P.bg, alpha: kc });
      ctx.text(X, 'النبي ﷺ', cx, cy + 82, { family: FAM, weight: 700, size: 46, color: P.hi, alpha: kc });
    } else {
      X.save(); X.globalAlpha = at(lt, 0.3, 0.9) * 0.8; X.strokeStyle = P.hi; X.lineWidth = 3; X.setLineDash([10, 14]); X.beginPath(); X.arc(cx, cy, 150, 0, 6.283); X.stroke(); X.restore();
      ctx.text(X, '؟', cx, cy + 40, { family: FAM, weight: 900, size: 130, color: P.hi, alpha: at(lt, 0.5, 1) });
    }
    say(ctx, t, 'l5', { y: 1430, size: 64, maxWidth: 900, accent: [2, 3, 4] });
  } });
