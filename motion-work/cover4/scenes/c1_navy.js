import { bg, FAM } from './_lib.js';
// كفر بنفس ستايل كفر «النعيم» الكحلي: «من أعظم نعم الله علينا / الإسلام / نعمة»
MOTION.scene({ id: 'c1', start: 0, end: 1,
  draw(t, lt, ctx) {
    const { X, P } = ctx; bg(ctx, 3, { color: P.ink, pat: 0.07 });
    X.save(); X.globalAlpha = 0.3; X.strokeStyle = P.hi; X.lineWidth = 8; X.translate(540, 960);
    for (const r0 of [0, Math.PI / 4]) { X.beginPath(); for (let i = 0; i < 4; i++) { const a = r0 + i * Math.PI / 2; X[i ? 'lineTo' : 'moveTo'](480 * Math.cos(a), 480 * Math.sin(a)); } X.closePath(); X.stroke(); } X.restore();
    ctx.text(X, 'من أعظم نعم الله علينا', 540, 740, { family: FAM, weight: 900, size: 66, color: P.hi });
    ctx.text(X, 'نعمة', 540, 880, { family: FAM, weight: 900, size: 100, color: P.hi });
    ctx.text(X, 'الإسلام', 540, 1110, { family: FAM, weight: 900, size: 210, color: P.bg });
    X.save(); X.fillStyle = P.hi; X.fillRect(420, 1200, 240, 6); X.restore();
  } });
