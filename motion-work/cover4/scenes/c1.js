import { bg, orn, FAM } from './_lib.js';
// ثلاث نسخ: 0 عنابي · 1 بيج بألوان منوعة · 2 نصفين عنابي/كحلي
function star(X, P, r, a, col) { X.save(); X.globalAlpha = a; X.strokeStyle = col; X.lineWidth = 8; X.translate(540, 960);
  for (const r0 of [0, Math.PI / 4]) { X.beginPath(); for (let i = 0; i < 4; i++) { const q = r0 + i * Math.PI / 2; X[i ? 'lineTo' : 'moveTo'](r * Math.cos(q), r * Math.sin(q)); } X.closePath(); X.stroke(); } X.restore(); }
MOTION.scene({ id: 'c1', start: 0, end: 3,
  draw(t, lt, ctx) {
    const { X, P } = ctx, v = Math.floor(t);
    if (v === 0) {
      bg(ctx, 3, { color: P.acc, pat: 0.08 }); star(X, P, 480, 0.3, P.hi);
      ctx.text(X, 'من أعظم نعم الله علينا', 540, 740, { family: FAM, weight: 900, size: 66, color: P.hi });
      ctx.text(X, 'نعمة', 540, 880, { family: FAM, weight: 900, size: 100, color: P.hi });
      ctx.text(X, 'الإسلام', 540, 1110, { family: FAM, weight: 900, size: 210, color: P.bg });
      X.save(); X.fillStyle = P.hi; X.fillRect(420, 1200, 240, 6); X.restore();
    } else if (v === 1) {
      bg(ctx, 3, { pat: 0.12 });
      X.save(); X.translate(540, 960); X.rotate(Math.PI / 8); X.fillStyle = 'rgba(106,37,55,0.08)'; X.beginPath(); for (let i = 0; i < 16; i++) { const r = i % 2 ? 330 : 470, q = i * Math.PI / 8; X[i ? 'lineTo' : 'moveTo'](r * Math.cos(q), r * Math.sin(q)); } X.closePath(); X.fill(); X.restore();
      star(X, P, 470, 0.5, P.hi);
      orn(ctx, 540, 620, 1, { scale: 1.3 });
      ctx.text(X, 'من أعظم نعم الله علينا', 540, 770, { family: FAM, weight: 900, size: 66, color: P.ink });
      ctx.text(X, 'نعمة', 540, 900, { family: FAM, weight: 900, size: 100, color: P.hi });
      ctx.text(X, 'الإسلام', 540, 1130, { family: FAM, weight: 900, size: 210, color: P.acc });
      orn(ctx, 540, 1270, 1, { scale: 1.1 });
    } else {
      bg(ctx, 3, { color: P.ink, pat: 0.07 });
      X.save(); X.fillStyle = P.acc; X.beginPath(); X.moveTo(0, 0); X.lineTo(1080, 0); X.lineTo(1080, 820); X.lineTo(0, 1060); X.closePath(); X.fill(); X.restore();
      X.save(); X.strokeStyle = P.hi; X.lineWidth = 6; X.beginPath(); X.moveTo(0, 1060); X.lineTo(1080, 820); X.stroke(); X.restore();
      star(X, P, 470, 0.28, P.hi);
      ctx.text(X, 'من أعظم نعم الله علينا', 540, 700, { family: FAM, weight: 900, size: 66, color: P.hi });
      ctx.text(X, 'نعمة', 540, 840, { family: FAM, weight: 900, size: 100, color: P.bg });
      ctx.text(X, 'الإسلام', 540, 1130, { family: FAM, weight: 900, size: 210, color: P.bg });
      X.save(); X.fillStyle = P.hi; X.fillRect(420, 1220, 240, 6); X.restore();
    }
  } });
