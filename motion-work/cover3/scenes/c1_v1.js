import { bg, orn, FAM } from './_lib.js';
// كفر: «لتُسألنّ / عن هذا النعيم» + عذق تمر وقطرة ماء (من القصة)
MOTION.scene({ id: 'c1', start: 0, end: 1,
  draw(t, lt, ctx) {
    const { X, P } = ctx; bg(ctx, 3, { pat: 0.12 });
    orn(ctx, 540, 450, 1, { scale: 1.5 });
    ctx.text(X, 'لتُسألُنّ', 540, 720, { family: FAM, weight: 900, size: 220, color: P.acc });
    ctx.text(X, 'عن هذا النعيم', 540, 930, { family: FAM, weight: 900, size: 150, color: P.ink });
    // عذق تمر
    const cols = ['#C9B037', '#6B3B1F', '#A8642A'], r = ctx.rng('c');
    X.save(); X.strokeStyle = '#B58A3C'; X.lineWidth = 10; X.lineCap = 'round'; X.beginPath(); X.moveTo(640, 1040); X.quadraticCurveTo(648, 1090, 640, 1130); X.stroke(); X.restore();
    for (let row = 0; row < 7; row++) { const nc = 5 - Math.floor(row / 2); for (let c = 0; c < nc; c++) {
      const x = 640 + (c - (nc - 1) / 2) * 46 + (r() - 0.5) * 8, y = 1150 + row * 44;
      X.save(); X.fillStyle = cols[(row + c) % 3]; X.beginPath(); X.ellipse(x, y, 16, 24, (r() - 0.5) * 0.5, 0, 6.283); X.fill(); X.restore(); } }
    // قطرة ماء
    X.save(); X.translate(400, 1260); X.fillStyle = '#5B8DB8'; X.beginPath(); X.moveTo(0, -150); X.bezierCurveTo(45, -75, 110, 0, 110, 50); X.arc(0, 50, 110, 0, Math.PI); X.bezierCurveTo(-110, 0, -45, -75, 0, -150); X.fill();
    X.fillStyle = 'rgba(255,255,255,0.45)'; X.beginPath(); X.ellipse(-40, 45, 16, 36, -0.3, 0, 6.283); X.fill(); X.restore();
    orn(ctx, 540, 1490, 1, { scale: 1.2 });
  } });
