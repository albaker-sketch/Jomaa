import { bg, say, FAM } from './_lib.js';
// «يستقيم حال المسلمين»: خط متعرّج يستقيم مع الكلمة
MOTION.scene({ id: 's5',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l8', { from: 0, to: 5, y: 600, size: 88, weight: 900, maxWidth: 880, accent: [3] });
    const s3 = ctx.wordTime('l8', 3).s, kd = at(lt, 0.15, 1.2, 'cubicOut'), ks = at(t, s3 - 0.05, s3 + 1.1, 'expoInOut');
    const pts = []; for (let i = 0; i <= 60; i++) { const x = 960 - i * 14; const amp = 130 * (1 - ks);
      const y = 1000 + amp * (ctx.noise1(i * 0.18 + 3, 7) * 1.6 + Math.sin(i * 0.5) * 0.4); pts.push([x, y]); }
    const col = ks > 0.6 ? P.acc : P.ink;
    ctx.drawPath(X, pts, kd, { width: 10, color: col });
    if (ks > 0.9) for (const x of [960, 120]) { X.save(); X.translate(x, 1000); X.rotate(Math.PI / 4); X.fillStyle = P.acc; X.globalAlpha = at(ks, 0.9, 1); X.fillRect(-14, -14, 28, 28); X.restore(); }
    say(ctx, t, 'l8', { from: 6, to: 8, y: 1250, size: 66, color: P.mut });
    say(ctx, t, 'l8', { from: 9, to: 10, y: 1380, size: 100, weight: 900, accent: [10] });
  } });
