import { bg, orn, FAM } from './_lib.js';
// كفر: «هكذا أفعل / منذ زمن طويل» + ساعة رملية وعلامة سؤال
MOTION.scene({ id: 'c1', start: 0, end: 1,
  draw(t, lt, ctx) {
    const { X, P } = ctx; bg(ctx, 3, { pat: 0.12 });
    orn(ctx, 540, 450, 1, { scale: 1.5 });
    ctx.text(X, 'هكذا أفعل', 540, 700, { family: FAM, weight: 900, size: 200, color: P.ink });
    ctx.text(X, 'منذ زمن طويل', 540, 910, { family: FAM, weight: 900, size: 140, color: P.acc });
    // ساعة رملية + ؟
    X.save(); X.translate(640, 1200); X.strokeStyle = P.ink; X.lineWidth = 12; X.lineJoin = 'round';
    X.beginPath(); X.moveTo(-90, -150); X.lineTo(90, -150); X.lineTo(12, 0); X.lineTo(90, 150); X.lineTo(-90, 150); X.lineTo(-12, 0); X.closePath(); X.stroke();
    X.fillStyle = P.ink; X.fillRect(-115, -170, 230, 20); X.fillRect(-115, 150, 230, 20);
    X.fillStyle = P.hi; X.beginPath(); X.moveTo(-55, -95); X.lineTo(55, -95); X.lineTo(0, -12); X.closePath(); X.fill();
    X.beginPath(); X.moveTo(-75, 138); X.lineTo(75, 138); X.lineTo(40, 70); X.lineTo(-40, 70); X.closePath(); X.fill(); X.restore();
    ctx.text(X, '؟', 410, 1290, { family: FAM, weight: 900, size: 300, color: P.acc });
    orn(ctx, 540, 1470, 1, { scale: 1.2 });
  } });
