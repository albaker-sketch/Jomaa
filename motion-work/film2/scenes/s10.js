import { bg, say, FAM } from './_lib.js';
// «العلم والتعلّم» = كتاب ينفتح · «قلبٌ يتسع» = قلب يكبر · «خطأ… يصلحه» = خط مايل يستقيم
MOTION.scene({ id: 's10',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s20 = ctx.lineSpan('l20').s, s21 = ctx.lineSpan('l21').s;
    say(ctx, t, 'l19', { y: 450, size: 72, maxWidth: 880, accent: [5, 6], out: s20 - 0.3 });
    say(ctx, t, 'l20', { y: 450, size: 72, maxWidth: 880, accent: [5], out: s21 - 0.3 });
    // كتاب
    const kb = at(t, ctx.wordTime('l19', 5).s - 0.2, ctx.wordTime('l19', 5).s + 0.8, 'cubicOut') * (1 - at(t, s21 - 0.5, s21));
    if (kb > 0) { X.save(); X.globalAlpha = Math.min(1, kb * 2); X.translate(540, 900); X.strokeStyle = P.ink; X.lineWidth = 7; X.lineJoin = 'round';
      for (const d of [1, -1]) { const open = 0.25 + 0.75 * kb; X.beginPath(); X.moveTo(0, -150); X.quadraticCurveTo(d * 150 * open, -190, d * 300 * open, -160); X.lineTo(d * 300 * open, 170); X.quadraticCurveTo(d * 150 * open, 140, 0, 180); X.closePath(); X.fillStyle = '#F7F4ED'; X.fill(); X.stroke();
        X.strokeStyle = P.hi; X.lineWidth = 4; for (let i = 0; i < 5; i++) { X.beginPath(); X.moveTo(d * 50 * open, -90 + i * 50); X.lineTo(d * 250 * open, -110 + i * 50); X.stroke(); } X.strokeStyle = P.ink; X.lineWidth = 7; }
      X.restore(); }
    // قلب
    const kh = at(t, s21 - 0.2, s21 + 0.5, 'expoOut'), grow = at(t, ctx.wordTime('l21', 1).s, ctx.wordTime('l21', 1).s + 1.2, 'cubicOut');
    if (kh > 0) { const sc = (0.95 + 0.35 * grow) * (0.95 + 0.05 * kh); X.save(); X.globalAlpha = kh; X.translate(540, 820); X.scale(sc, sc);
      X.beginPath(); X.moveTo(0, 150); X.bezierCurveTo(-260, -20, -170, -230, 0, -110); X.bezierCurveTo(170, -230, 260, -20, 0, 150); X.closePath();
      X.fillStyle = 'rgba(106,37,55,0.08)'; X.fill(); X.strokeStyle = P.acc; X.lineWidth = 9; X.stroke(); X.restore();
      say(ctx, t, 'l21', { from: 0, to: 1, y: 835, size: 58, weight: 900, color: P.acc });
      say(ctx, t, 'l21', { from: 2, to: 14, y: 1180, size: 60, maxWidth: 880, accent: [9, 14] });
      const wf = ctx.wordTime('l21', 14).s, ks = at(t, wf - 0.1, wf + 0.9, 'expoInOut'), kd = at(t, ctx.wordTime('l21', 9).s - 0.1, ctx.wordTime('l21', 9).s + 0.6);
      const pts = []; for (let i = 0; i <= 40; i++) pts.push([900 - i * 19, 1420 + (1 - ks) * 70 * Math.sin(i * 0.55)]);
      ctx.drawPath(X, pts, kd, { width: 8, color: ks > 0.6 ? P.acc : P.ink }); }
  } });
