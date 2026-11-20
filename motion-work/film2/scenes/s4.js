import { bg, say, card, FAM } from './_lib.js';
// «طول عهده» = ساعة رملية · «وبقي السؤال قائماً» = ؟ · «صواب أم خطأ» = مؤشر يتأرجح بين كرتين
function hourglass(ctx, t, cx, cy, k) {
  const { X, P } = ctx; if (k <= 0) return; X.save(); X.globalAlpha = k; X.translate(cx, cy);
  X.strokeStyle = P.ink; X.lineWidth = 8; X.lineJoin = 'round';
  X.beginPath(); X.moveTo(-120, -200); X.lineTo(120, -200); X.lineTo(14, 0); X.lineTo(120, 200); X.lineTo(-120, 200); X.lineTo(-14, 0); X.closePath(); X.stroke();
  X.fillStyle = P.ink; X.fillRect(-150, -222, 300, 22); X.fillRect(-150, 200, 300, 22);
  const f = (t * 0.12) % 1; X.fillStyle = P.hi;
  const top = 1 - f; X.beginPath(); X.moveTo(-100 * top, -180 + 160 * (1 - top)); X.lineTo(100 * top, -180 + 160 * (1 - top)); X.lineTo(0, -10); X.closePath(); X.fill();
  X.beginPath(); X.moveTo(-100, 182); X.lineTo(100, 182); X.lineTo(100 * (1 - f * 0.8), 182 - 140 * f); X.lineTo(-100 * (1 - f * 0.8), 182 - 140 * f); X.closePath(); X.fill();
  X.fillRect(-3, -10, 6, 190 - 140 * f); X.restore();
}
MOTION.scene({ id: 's4',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s8 = ctx.lineSpan('l8').s, s9 = ctx.lineSpan('l9').s;
    say(ctx, t, 'l7', { y: 430, size: 66, maxWidth: 880, accent: [7, 8], out: s8 - 0.3 });
    hourglass(ctx, t, 540, 930, at(lt, 0.3, 1.0) * (1 - at(t, s9 - 0.4, s9)));
    say(ctx, t, 'l8', { y: 470, size: 84, weight: 900, accent: [1], out: s9 - 0.3 });
    const kq = at(t, s8 + 0.6, s8 + 1.2, 'expoOut');
    if (kq > 0) { const y = t < s9 ? 1350 : 830 - 0 * 1; ctx.text(X, '؟', 540, (t < s9 ? 1380 : 820) + (1 - kq) * 40, { family: FAM, weight: 900, size: t < s9 ? 200 : 300, color: P.acc, alpha: kq }); }
    say(ctx, t, 'l9', { y: 430, size: 70, maxWidth: 880, accent: [1, 8] });
    const kA = at(t, ctx.wordTime('l9', 1).s - 0.1, ctx.wordTime('l9', 1).s + 0.4, 'expoOut'), kB = at(t, ctx.wordTime('l9', 8).s - 0.1, ctx.wordTime('l9', 8).s + 0.4, 'expoOut');
    card(ctx, 580, 1060, 340, 170, { fill: '#F6F3EC', stroke: P.acc, lw: 4, r: 30, alpha: kA, shadow: true });
    ctx.text(X, 'صواب', 750, 1170, { family: FAM, weight: 900, size: 84, color: P.acc, alpha: kA });
    card(ctx, 160, 1060, 340, 170, { fill: '#F6F3EC', stroke: P.ink, lw: 4, r: 30, alpha: kB, shadow: true });
    ctx.text(X, 'خطأ', 330, 1170, { family: FAM, weight: 900, size: 84, color: P.ink, alpha: kB });
    if (kB > 0) { const a = Math.sin((t - s9) * 2.4) * 0.55; X.save(); X.globalAlpha = kB; X.translate(540, 1400); X.rotate(a); X.strokeStyle = P.hi; X.lineWidth = 8; X.lineCap = 'round'; X.beginPath(); X.moveTo(0, 0); X.lineTo(0, -120); X.stroke(); X.fillStyle = P.acc; X.beginPath(); X.arc(0, 0, 16, 0, 6.283); X.fill(); X.restore(); }
  } });
