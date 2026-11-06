import { bg, say, orn, FAM } from './_lib.js';
// «مجانبة البدعة · الأسئلة الأربع»: رقم 4 كبير وتحته 4 معيّنات
MOTION.scene({ id: 's6',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l9', { from: 0, to: 1, y: 420, size: 70, color: P.mut });
    say(ctx, t, 'l9', { from: 2, to: 5, y: 600, size: 84, weight: 900, accent: [4, 5] });
    const s5 = ctx.wordTime('l9', 5).s, k = at(t, s5 - 0.15, s5 + 0.6, 'expoOut');
    if (k > 0) {
      X.save(); X.translate(540, 1000); const sc = 0.92 + 0.08 * k; X.scale(sc, sc);
      ctx.text(X, '4', 0, 160, { family: FAM, weight: 900, size: 520, color: P.acc, alpha: k, dir: 'ltr' }); X.restore();
      for (let i = 0; i < 4; i++) { const kd = at(t, s5 + 0.3 + i * 0.09, s5 + 0.7 + i * 0.09, 'backOut');
        X.save(); X.translate(390 + i * 100, 1270); X.scale(kd, kd); X.rotate(Math.PI / 4); X.fillStyle = i % 2 ? P.ink : P.hi; X.fillRect(-16, -16, 32, 32); X.restore(); }
    }
    say(ctx, t, 'l10', { y: 1420, size: 60, maxWidth: 880, accent: [1] });
  } });
