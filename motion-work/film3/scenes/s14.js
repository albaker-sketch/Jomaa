import { bg, say, card, wt, FAM } from './_lib.js';
// «فكيف بمن…» ثلاث درجات تتصاعد: مطاعم ومقاهي ← توصيل لمكانه ← لقمة ثم القمامة
function bin(ctx, x, y, k) { const { X, P } = ctx; if (k <= 0) return; X.save(); X.globalAlpha = k; X.translate(x, y);
  X.strokeStyle = P.ink; X.lineWidth = 7; X.lineJoin = 'round'; X.beginPath(); X.moveTo(-70, -60); X.lineTo(-55, 90); X.lineTo(55, 90); X.lineTo(70, -60); X.stroke();
  X.beginPath(); X.moveTo(-90, -70); X.lineTo(90, -70); X.stroke(); X.beginPath(); X.moveTo(-25, -70); X.lineTo(-20, -92); X.lineTo(20, -92); X.lineTo(25, -70); X.stroke();
  for (const dx of [-25, 0, 25]) { X.beginPath(); X.moveTo(dx, -35); X.lineTo(dx * 0.85, 65); X.stroke(); } X.restore(); }
MOTION.scene({ id: 's14',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l35', { y: 400, size: 72, maxWidth: 880, accent: [3, 4, 5] });
    const rows = [['l36', 'للتلذذ بالمطاعم والمقاهي', 620], ['l37', 'يصله الطعام إلى مكانه', 860], ['l38', 'لقمة أو لقمتين', 1100]];
    rows.forEach(([id, txt, y], i) => { const s = ctx.lineSpan(id).s, k = at(t, s - 0.2, s + 0.4, 'expoOut'); if (k <= 0) return;
      const on = t < (rows[i + 1] ? ctx.lineSpan(rows[i + 1][0]).s - 0.1 : ctx.lineSpan('l39').e + 1);
      card(ctx, 140, y - 85 + (1 - k) * 30, 800, 170, { fill: on ? '#F6F3EC' : 'rgba(246,243,236,0.6)', stroke: on ? P.acc : P.hi, lw: on ? 5 : 3, r: 30, alpha: k, shadow: on });
      ctx.text(X, String(i + 1), 880, y + 25, { family: FAM, weight: 900, size: 70, color: P.acc, alpha: k, dir: 'ltr' });
      ctx.text(X, txt, 480, y + 22 + (1 - k) * 30, { family: FAM, weight: 900, size: 62, color: P.ink, alpha: k * (on ? 1 : 0.6) }); });
    const s39 = wt(ctx, 'l39', 1), kb = at(t, s39 - 0.2, s39 + 0.4, 'expoOut');
    bin(ctx, 760, 1380, kb);
    say(ctx, t, 'l39', { x: 400, y: 1400, size: 68, weight: 900, maxWidth: 520, accent: [5] });
  } });
