import { bg, say, card, FAM } from './_lib.js';
// الأسئلة الأربع: 4 كروت مرقّمة تنبني وحدة وحدة، والحالي بإطار عنابي
MOTION.scene({ id: 's7',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const ids = ['l11', 'l12', 'l13', 'l14'], Y = [330, 610, 890, 1170];
    ids.forEach((id, i) => {
      const sp = ctx.lineSpan(id), k = at(t, sp.s - 0.25, sp.s + 0.3, 'expoOut'); if (k <= 0) return;
      const next = ids[i + 1] ? ctx.lineSpan(ids[i + 1]).s : 1e9, active = t < next - 0.1;
      const y = Y[i] + (1 - k) * 60, on = active ? 1 : 0;
      card(ctx, 110, y, 860, 240, { fill: active ? '#F7F4ED' : 'rgba(247,244,237,0.6)', stroke: active ? P.acc : P.hi, lw: active ? 4 : 2, r: 32, alpha: k, shadow: active });
      X.save(); X.globalAlpha = k; X.fillStyle = active ? P.acc : P.ink; X.beginPath(); X.arc(880, y + 120, 50, 0, 6.283); X.fill(); X.restore();
      ctx.text(X, String(i + 1), 880, y + 146, { family: FAM, weight: 900, size: 72, color: P.bg, alpha: k, dir: 'ltr' });
      say(ctx, t, id, { x: 800, align: 'right', y: y + 108, size: 54, maxWidth: 640, lh: 1.45, dim: () => active ? 1 : 0.55 });
    });
  } });
