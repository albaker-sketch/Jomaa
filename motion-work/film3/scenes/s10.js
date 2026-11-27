import { bg, say, chip, wt, FAM } from './_lib.js';
// «وأخذ السكين ليذبح لهم شاة» · «إياك والحلوب» · «فذبح ← وطبخها ← وأعدّها» 3 خطوات
MOTION.scene({ id: 's10',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s26 = ctx.lineSpan('l26').s, s27 = ctx.lineSpan('l27').s;
    say(ctx, t, 'l25', { y: 430, size: 70, maxWidth: 880, out: s26 - 0.3 });
    say(ctx, t, 'l26', { from: 0, to: 4, y: 430, size: 58, color: P.mut, out: s27 - 0.3 });
    const w = wt(ctx, 'l26', 8), k = at(t, w - 0.15, w + 0.5, 'expoOut'), ko = at(t, s27 - 0.3, s27);
    ctx.text(X, 'إياك والحلوب', 540, 820 + (1 - k) * 40, { family: FAM, weight: 900, size: 130, color: P.acc, alpha: k * (1 - ko) });
    const st = [['فذبح', wt(ctx, 'l27', 0), 800], ['وطبخها', wt(ctx, 'l27', 2), 540], ['وأعدّها', wt(ctx, 'l27', 3), 280]];
    st.forEach(([n, s, x], i) => { chip(ctx, t, n, x, 1000, s, { w: 230, h: 130, size: 62, stroke: i === 2 ? P.acc : P.ink, color: i === 2 ? P.acc : P.ink });
      if (i < 2) ctx.drawPath(X, [[x - 125, 1000], [x - 135 - 0, 1000]], at(t, st[i + 1][1] - 0.2, st[i + 1][1]), { width: 5, color: P.hi }); });
    say(ctx, t, 'l27', { from: 4, to: 4, y: 1200, size: 60, color: P.mut });
  } });
