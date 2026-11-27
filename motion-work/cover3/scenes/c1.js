import { bg, orn, frame, FAM } from './_lib.js';
// ثلاث أفكار كفر: t<1 كحلي مهيب · t<2 عنابي هويته · t<3 «الجوع ← النعيم»
MOTION.scene({ id: 'c1', start: 0, end: 3,
  draw(t, lt, ctx) {
    const { X, P } = ctx, v = Math.floor(t);
    if (v === 0) {
      bg(ctx, 3, { color: P.ink, pat: 0.07 });
      frame(ctx, 120, 430, 840, 1060, 1, { color: P.hi, color2: P.hi });
      ctx.text(X, 'والذي نفسي بيده', 540, 600, { family: FAM, weight: 700, size: 64, color: P.hi });
      ctx.text(X, 'لتُسألُنّ', 540, 860, { family: FAM, weight: 900, size: 230, color: P.bg });
      ctx.text(X, 'عن هذا النعيم', 540, 1080, { family: FAM, weight: 900, size: 140, color: P.hi });
      ctx.text(X, 'يوم القيامة', 540, 1300, { family: FAM, weight: 900, size: 120, color: P.bg });
    } else if (v === 1) {
      bg(ctx, 3, { color: v === 1 ? P.ink : P.acc, pat: 0.07 });
      X.save(); X.globalAlpha = 0.3; X.strokeStyle = P.hi; X.lineWidth = 8; X.translate(540, 960);
      for (const r0 of [0, Math.PI / 4]) { X.beginPath(); for (let i = 0; i < 4; i++) { const a = r0 + i * Math.PI / 2; X[i ? 'lineTo' : 'moveTo'](480 * Math.cos(a), 480 * Math.sin(a)); } X.closePath(); X.stroke(); } X.restore();
      ctx.text(X, 'النعيم', 540, 1000, { family: FAM, weight: 900, size: 210, color: P.bg });
      ctx.text(X, 'لتُسألُنّ عن هذا', 540, 770, { family: FAM, weight: 900, size: 96, color: P.hi });
      ctx.text(X, 'يوم القيامة', 540, 1190, { family: FAM, weight: 900, size: 96, color: P.hi });
      X.save(); X.fillStyle = P.hi; X.fillRect(420, 1255, 240, 6); X.restore();
    } else {
      bg(ctx, 3, { pat: 0.12 });
      ctx.text(X, 'خرجوا من', 540, 560, { family: FAM, weight: 700, size: 70, color: P.mut });
      ctx.text(X, 'الجوع', 540, 780, { family: FAM, weight: 900, size: 220, color: P.ink });
      X.save(); X.strokeStyle = P.hi; X.lineWidth = 12; X.lineCap = 'round'; X.beginPath(); X.moveTo(540, 850); X.lineTo(540, 1010); X.stroke();
      X.fillStyle = P.hi; X.beginPath(); X.moveTo(500, 1000); X.lineTo(580, 1000); X.lineTo(540, 1060); X.closePath(); X.fill(); X.restore();
      ctx.text(X, 'النعيم', 540, 1260, { family: FAM, weight: 900, size: 220, color: P.acc });
      ctx.text(X, 'وأيّ نعيم؟', 540, 1440, { family: FAM, weight: 900, size: 110, color: P.ink });
    }
  } });
