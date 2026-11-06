import { bg, say, FAM } from './_lib.js';
// المثال: «منّا من يقصّر ثيابه ومنّا من يطيلها» = عمودين بطولين · «يعفي لحيته / يقصّرها» = نفس المقابلة
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l17', { y: 390, size: 70, maxWidth: 880, accent: [1, 2] });
    const w = (l, i) => ctx.wordTime(l, i);
    const kDiv = at(t, ctx.lineSpan('l18').s - 0.2, ctx.lineSpan('l18').s + 0.6);
    ctx.drawPath(X, [[540, 640], [540, 1430]], kDiv, { width: 3, color: P.hi });
    // الصف الأول: الثياب
    const kA = at(t, w('l18', 2).s - 0.1, w('l18', 2).s + 0.6, 'expoOut'), kB = at(t, w('l18', 6).s - 0.1, w('l18', 6).s + 0.8, 'expoOut');
    say(ctx, t, 'l18', { from: 0, to: 3, x: 790, y: 690, size: 54, maxWidth: 420 });
    say(ctx, t, 'l18', { from: 4, to: 6, x: 290, y: 690, size: 54, maxWidth: 420 });
    X.save(); X.fillStyle = P.ink; X.globalAlpha = kA; X.beginPath(); X.roundRect(740, 760, 100, 230 * kA, 18); X.fill();
    X.fillStyle = P.acc; X.globalAlpha = kB; X.beginPath(); X.roundRect(240, 760, 100, 330 * kB, 18); X.fill(); X.restore();
    X.save(); X.globalAlpha = Math.max(kA, kB) * 0.8; X.strokeStyle = P.mut; X.lineWidth = 3; X.setLineDash([12, 12]); X.beginPath(); X.moveTo(160, 1100); X.lineTo(920, 1100); X.stroke(); X.restore();
    // الصف الثاني: اللحية
    say(ctx, t, 'l19', { from: 0, to: 3, x: 790, y: 1260, size: 60, weight: 900, maxWidth: 420, accent: [2] });
    say(ctx, t, 'l19', { from: 4, to: 6, x: 290, y: 1260, size: 60, weight: 900, maxWidth: 420, accent: [6] });
    const kq = at(t, w('l19', 6).e, w('l19', 6).e + 0.5, 'expoOut');
    ctx.text(X, '؟', 540, 1420, { family: FAM, weight: 900, size: 110, color: P.acc, alpha: kq });
  } });
