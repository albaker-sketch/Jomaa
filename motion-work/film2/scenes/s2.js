import { bg, say, FAM } from './_lib.js';
// «سنين طويلة» = شريط سنين يمتد · «لا يمكن أن يكون خطأً» = «خطأ» تنشطب
MOTION.scene({ id: 's2',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l3', { y: 450, size: 84, weight: 900, accent: [3, 4] });
    const s0 = ctx.wordTime('l3', 0).s, n = 26;
    ctx.drawPath(X, [[960, 720], [120, 720]], at(t, s0, s0 + 2.8, 'cubicOut'), { width: 4, color: P.ink });
    for (let i = 0; i < n; i++) { const k = at(t, s0 + 0.1 + i * 0.1, s0 + 0.35 + i * 0.1, 'expoOut'); if (k <= 0) continue;
      const x = 950 - i * 32.4, h = (i % 5 === 0 ? 46 : 26) * k; X.save(); X.fillStyle = i % 5 === 0 ? P.acc : P.ink; X.fillRect(x - 2.5, 720 - h, 5, h); X.restore(); }
    say(ctx, t, 'l4', { y: 1000, size: 68, maxWidth: 860, to: 9 });
    const w = ctx.wordTime('l4', 10).s, k = at(t, w - 0.1, w + 0.4, 'expoOut'), ks = at(t, w + 0.35, w + 0.8, 'cubicOut');
    ctx.text(X, 'خطأً', 540, 1330 + (1 - k) * 40, { family: FAM, weight: 900, size: 170, color: P.acc, alpha: k });
    if (ks > 0) { X.save(); X.strokeStyle = P.ink; X.lineWidth = 12; X.lineCap = 'round'; X.beginPath(); X.moveTo(700, 1270); X.lineTo(700 - 320 * ks, 1270 + 10 * ks); X.stroke(); X.restore(); }
  } });
