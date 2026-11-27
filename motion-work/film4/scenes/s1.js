import { bg, say, orn, wt, FAM } from './_lib.js';
// «من أعظم نعم الله علينا نعمة الإسلام»: نجمة ثمانية ترتسم، و«نعمة الإسلام» بالنص
MOTION.scene({ id: 's1',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l1', { from: 0, to: 2, y: 420, size: 60, color: P.mut });
    say(ctx, t, 'l1', { from: 3, to: 8, y: 560, size: 76, weight: 900, accent: [5, 6] });
    const s = wt(ctx, 'l1', 9), k = at(t, s - 0.8, s + 0.6, 'cubicInOut');
    for (const [r0, c] of [[0, P.hi], [Math.PI / 4, P.acc]]) { const pts = []; for (let i = 0; i <= 4; i++) { const a = r0 + i * Math.PI / 2 + lt * 0.04; pts.push([540 + 300 * Math.cos(a), 980 + 300 * Math.sin(a)]); } ctx.drawPath(X, pts, k, { width: 5, color: c, smooth: false }); }
    say(ctx, t, 'l1', { from: 9, to: 9, y: 950, size: 90, weight: 900, color: P.ink });
    say(ctx, t, 'l1', { from: 10, to: 10, y: 1080, size: 130, weight: 900, accent: [10] });
    orn(ctx, 540, 1400, at(t, wt(ctx, 'l1', 10), wt(ctx, 'l1', 10) + 1.0), { scale: 1.2 });
  } });
