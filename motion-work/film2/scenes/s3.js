import { bg, say, card } from './_lib.js';
// «فإذا سأله أحد… قال بقلب مطمئن» ← فقاعة كلام: «هكذا أفعل منذ زمن طويل»
MOTION.scene({ id: 's3',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l5', { y: 470, size: 72, maxWidth: 860, accent: [6, 7] });
    const s6 = ctx.lineSpan('l6').s, k = at(t, s6 - 0.35, s6 + 0.2, 'expoOut');
    if (k > 0) {
      card(ctx, 120, 760, 840, 420, { fill: P.ink, r: 48, alpha: k, scale: 0.95 + 0.05 * k, shadow: true });
      X.save(); X.globalAlpha = k; X.fillStyle = P.ink; X.beginPath(); X.moveTo(760, 1170); X.lineTo(840, 1170); X.lineTo(860, 1270); X.closePath(); X.fill(); X.restore();
      X.save(); X.globalAlpha = k; X.fillStyle = P.hi; ctx.text(X, '«', 880, 860, { family: 'Tajawal', weight: 900, size: 120, color: P.hi }); X.restore();
      say(ctx, t, 'l6', { y: 960, size: 108, weight: 900, maxWidth: 700, lh: 1.35, valign: 'center', color: P.bg, accent: [2, 3, 4], accentColor: P.hi });
    }
  } });
