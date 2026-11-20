import { bg, say, FAM } from './_lib.js';
// «ما صليت منذ أربعين سنة»: 40 مربع تمتلي، وعند الإعادة تفضى
MOTION.scene({ id: 's7',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l13', { from: 0, to: 3, y: 420, size: 54, color: P.mut });
    say(ctx, t, 'l13', { from: 4, to: 5, y: 660, size: 190, weight: 900, accent: [4, 5] });
    say(ctx, t, 'l13', { from: 6, to: 8, y: 830, size: 92, weight: 900, accent: [7] });
    const w = ctx.wordTime('l13', 7).s, e = ctx.wordTime('l14', 3).s;
    for (let i = 0; i < 40; i++) {
      const r = Math.floor(i / 10), c = i % 10, x = 905 - c * 85, y = 980 + r * 85;
      const kin = at(t, w + i * 0.025, w + 0.25 + i * 0.025, 'expoOut'), kout = at(t, e - 0.2 + i * 0.03, e + 0.1 + i * 0.03);
      if (kin <= 0) continue;
      X.save(); X.globalAlpha = kin; X.strokeStyle = P.ink; X.lineWidth = 4; X.beginPath(); X.roundRect(x - 32, y - 32, 64, 64, 12); X.stroke();
      X.globalAlpha = kin * (1 - kout); X.fillStyle = P.ink; X.fill(); X.restore();
    }
    const kr = at(t, ctx.lineSpan('l14').s - 0.1, ctx.lineSpan('l14').s + 0.4);
    if (kr > 0) { X.save(); X.globalAlpha = kr; X.fillStyle = P.acc; X.fillRect(140, 1340, 800 * kr, 8); X.restore(); }
    say(ctx, t, 'l14', { y: 1450, size: 64, weight: 900, color: P.acc });
  } });
