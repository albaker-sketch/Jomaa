import { bg, say, chip, wt, FAM } from './_lib.js';
// الطريق لبيت أبي الهيثم: خط منقّط يمشي لبيت حوله نخل · «كثير النخل والشاء · لم يكن له خدم»
function palm(X, x, y, s, c, k) { if (k <= 0) return; X.save(); X.globalAlpha = k; X.translate(x, y); X.scale(s * k, s * k);
  X.strokeStyle = c; X.lineWidth = 9; X.lineCap = 'round'; X.beginPath(); X.moveTo(0, 0); X.quadraticCurveTo(8, -90, 0, -180); X.stroke();
  X.fillStyle = c; for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + (i - 2.5) * 0.55; X.save(); X.translate(0, -180); X.rotate(a); X.beginPath(); X.ellipse(55, 0, 60, 13, 0.2, 0, 6.283); X.fill(); X.restore(); }
  X.restore(); }
MOTION.scene({ id: 's5',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l12', { from: 0, to: 2, y: 400, size: 60, color: P.mut });
    say(ctx, t, 'l12', { from: 3, to: 7, y: 520, size: 80, weight: 900, maxWidth: 900, accent: [3, 4] });
    say(ctx, t, 'l12', { from: 8, to: 10, y: 720, size: 50, color: P.mut });
    const kp = at(t, wt(ctx, 'l12', 0), wt(ctx, 'l12', 3) + 0.6, 'cubicInOut');
    X.save(); X.setLineDash([3, 22]); ctx.drawPath(X, [[930, 1240], [700, 1170], [520, 1180], [380, 1120]], kp, { width: 12, color: P.hi }); X.restore();
    const kh = at(t, wt(ctx, 'l12', 3) - 0.2, wt(ctx, 'l12', 3) + 0.5, 'expoOut');
    if (kh > 0) { X.save(); X.globalAlpha = kh; X.translate(300, 1120); X.fillStyle = '#F6F3EC'; X.strokeStyle = P.ink; X.lineWidth = 6;
      X.beginPath(); X.rect(-110, -120, 220, 140); X.fill(); X.stroke(); X.fillStyle = P.acc; X.beginPath(); X.moveTo(-30, 20); X.lineTo(-30, -50); X.arc(0, -50, 30, Math.PI, 0); X.lineTo(30, 20); X.closePath(); X.fill(); X.restore(); }
    palm(X, 150, 1150, 0.9, P.ink, at(t, wt(ctx, 'l13', 3) - 0.2, wt(ctx, 'l13', 3) + 0.4, 'expoOut'));
    palm(X, 460, 1160, 0.75, P.clay, at(t, wt(ctx, 'l13', 3), wt(ctx, 'l13', 3) + 0.6, 'expoOut'));
    chip(ctx, t, 'كثير النخل والشاء', 690, 860, wt(ctx, 'l13', 2), { w: 560, h: 120, size: 56, stroke: P.hi });
    chip(ctx, t, 'ولم يكن له خدم', 540, 1400, wt(ctx, 'l13', 5), { w: 560, h: 120, size: 56, stroke: P.acc, color: P.acc });
  } });
