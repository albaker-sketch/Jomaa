import { bg, say, card, wt, FAM } from './_lib.js';
// «ما أدري أي نعمتين عليّ أعظم»: كرتين متقابلين بميزان مستوي
MOTION.scene({ id: 's10',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l23', { y: 460, size: 76, weight: 900, maxWidth: 880, accent: [4, 6] });
    const kb = at(t, wt(ctx, 'l24', 0) - 0.4, wt(ctx, 'l24', 0) + 0.3);
    if (kb > 0) { X.save(); X.globalAlpha = kb; X.strokeStyle = P.hi; X.lineWidth = 8; X.lineCap = 'round'; X.beginPath(); X.moveTo(540, 1260); X.lineTo(540, 760); X.moveTo(200, 760); X.lineTo(880, 760); X.stroke();
      X.fillStyle = P.acc; X.beginPath(); X.moveTo(540, 730); X.lineTo(565, 760); X.lineTo(540, 790); X.lineTo(515, 760); X.closePath(); X.fill(); X.restore(); }
    [[1, 'هداني للإسلام', 760, P.acc], [4, 'عافاني من هذه الأهواء', 320, P.ink]].forEach(([i, txt, x, c]) => { const s = wt(ctx, 'l24', i), k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return;
      ctx.drawPath(X, [[x, 760], [x, 880]], k, { width: 4, color: P.hi });
      card(ctx, x - 200, 880 + (1 - k) * 30, 400, 260, { fill: '#F6F3EC', stroke: c, lw: 5, r: 30, alpha: k, shadow: true });
      ctx.text.drawLayout(X, ctx.text.layout(X, txt, { family: 'Tajawal', weight: 900, size: 64, maxWidth: 340, lineHeight: 1.35 }), x, 990 + (1 - k) * 30, { color: c, perWord: () => ({ alpha: k }) }); });
  } });
