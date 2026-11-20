import { bg, orn, FAM } from './_lib.js';
MOTION.scene({ id: 'c1', start: 0, end: 1,
  draw(t, lt, ctx) {
    const { X, P } = ctx; bg(ctx, 3, { pat: 0.12 });
    // نجمة ثمانية خفيفة ورا العنوان
    X.save(); X.translate(540, 900); X.globalAlpha = 0.28; X.strokeStyle = P.hi; X.lineWidth = 6;
    for (const r0 of [0, Math.PI / 4]) { X.beginPath(); for (let i = 0; i < 4; i++) { const a = r0 + i * Math.PI / 2; X[i ? 'lineTo' : 'moveTo'](520 * Math.cos(a), 520 * Math.sin(a)); } X.closePath(); X.stroke(); }
    X.restore();
    orn(ctx, 540, 470, 1, { scale: 1.5 });
    ctx.text(X, 'الأسئلة', 540, 730, { family: FAM, weight: 900, size: 215, color: P.ink });
    ctx.text(X, 'الأربعة', 540, 960, { family: FAM, weight: 900, size: 240, color: P.acc });
    for (let i = 0; i < 4; i++) {
      const x = 825 - i * 190, y = 1135;
      X.save(); X.fillStyle = i % 2 ? P.ink : P.acc; X.beginPath(); X.arc(x, y, 78, 0, 6.283); X.fill(); X.restore();
      ctx.text(X, String(i + 1), x, y + 40, { family: FAM, weight: 900, size: 120, color: P.bg, dir: 'ltr' });
    }
    ctx.text(X, 'قبل أي شيء', 540, 1400, { family: FAM, weight: 900, size: 130, color: P.ink });
    orn(ctx, 540, 1480, 1, { scale: 1.2 });
  } });
