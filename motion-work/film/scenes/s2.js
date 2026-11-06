import { bg, say, FAM } from './_lib.js';
// «في ظلال سيرة النبي ﷺ»: نجمة ثمانية كبيرة ترتسم وتظلل الكلام · «وحياة الصحابة» تحتها
MOTION.scene({ id: 's2',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const cx = 540, cy = 860, R = 330, k = at(lt, 0.1, 1.4, 'cubicInOut'), rot = lt * 0.06;
    X.save(); X.translate(cx, cy); X.rotate(rot);
    X.globalAlpha = 0.9 * k; X.fillStyle = 'rgba(168,154,120,0.16)';
    for (const r0 of [0, Math.PI / 4]) { X.beginPath(); for (let i = 0; i < 4; i++) { const a = r0 + i * Math.PI / 2; X[i ? 'lineTo' : 'moveTo'](R * Math.cos(a), R * Math.sin(a)); } X.closePath(); X.fill(); }
    X.restore();
    for (const [r0, col, wd] of [[0, P.hi, 5], [Math.PI / 4, P.acc, 4]]) {
      const pts = []; for (let i = 0; i <= 4; i++) { const a = r0 + rot + i * Math.PI / 2; pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]); }
      ctx.drawPath(X, pts, at(lt, r0 ? 0.3 : 0.1, r0 ? 1.5 : 1.3, 'cubicInOut'), { width: wd, color: col, smooth: false });
    }
    X.save(); X.globalAlpha = at(lt, 1, 1.6); X.strokeStyle = P.hi; X.lineWidth = 2; X.beginPath(); X.arc(cx, cy, R * 0.74, 0, 6.283); X.stroke(); X.restore();
    say(ctx, t, 'l2', { from: 0, to: 1, y: 460, size: 66, color: P.mut });
    say(ctx, t, 'l2', { from: 2, to: 4, y: 840, size: 112, weight: 900, maxWidth: 440, lh: 1.25, valign: 'center', accent: [2, 3, 4] });
    say(ctx, t, 'l3', { from: 0, to: 1, y: 1330, size: 100, weight: 900 });
    say(ctx, t, 'l3', { from: 2, to: 4, y: 1440, size: 56, color: P.mut });
  } });
