import { bg, say, wt, FAM } from './_lib.js';
// «ثلاث وسبعين فرقة» = 73 دائرة تطلع، وعند «إلا واحدة» كلها تبهت إلا وحدة عنابية
MOTION.scene({ id: 's5',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s10 = ctx.lineSpan('l10').s, s11 = ctx.lineSpan('l11').s;
    say(ctx, t, 'l9', { y: 400, size: 58, maxWidth: 900, color: P.mut, out: s10 - 0.3 });
    say(ctx, t, 'l10', { y: 400, size: 74, weight: 900, maxWidth: 900, accent: [3, 4, 5] });
    const w = wt(ctx, 'l10', 3), kc = at(t, w - 0.1, w + 1.2, 'expoOut');
    if (kc > 0) ctx.text(X, String(Math.round(73 * kc)), 540, 680, { family: FAM, weight: 900, size: 200, color: P.acc, alpha: Math.min(1, kc * 3), dir: 'ltr' });
    const one = wt(ctx, 'l11', 3), kOne = at(t, one - 0.1, one + 0.6, 'cubicOut'), keep = 36;
    for (let i = 0; i < 73; i++) { const r = Math.floor(i / 9), c = i % 9, x = 540 + (c - 4) * 92, y = 800 + r * 72;
      const k = at(t, w + i * 0.012, w + 0.25 + i * 0.012, 'expoOut'); if (k <= 0) continue;
      const lit = i === keep;
      X.save(); X.globalAlpha = k * (lit ? 1 : 1 - 0.8 * kOne); X.fillStyle = lit && kOne > 0 ? P.acc : P.ink;
      X.beginPath(); X.arc(x, y, (lit ? 22 + 12 * kOne : 22), 0, 6.283); X.fill(); X.restore(); }
    say(ctx, t, 'l11', { y: 1480, size: 80, weight: 900, accent: [3, 4] });
  } });
