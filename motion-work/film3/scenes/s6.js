import { bg, say, card, chip, wt, FAM } from './_lib.js';
// «ليس في بيته» · ترحيب «مرحباً وأهلاً» · «أين فلان؟» · «ذهب يستعذب لنا من الماء» = قطرة ماء
MOTION.scene({ id: 's6',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s15 = ctx.lineSpan('l15').s, s16 = ctx.lineSpan('l16').s, s17 = ctx.lineSpan('l17').s;
    say(ctx, t, 'l14', { y: 450, size: 72, maxWidth: 880, accent: [5, 6, 7], out: s15 - 0.3 });
    say(ctx, t, 'l15', { from: 0, to: 5, y: 450, size: 62, maxWidth: 880, color: P.mut, out: s16 - 0.3 });
    chip(ctx, t, 'مرحباً وأهلاً', 540, 760, wt(ctx, 'l15', 7), { w: 640, h: 170, size: 96, color: P.acc, stroke: P.acc, out: s16 - 0.3 });
    say(ctx, t, 'l16', { from: 0, to: 4, y: 450, size: 58, color: P.mut, out: s17 - 0.3 });
    chip(ctx, t, 'أين فلان؟', 540, 760, wt(ctx, 'l16', 9), { w: 560, h: 170, size: 100, fill: P.ink, stroke: P.ink, color: P.bg, out: s17 - 0.3 });
    say(ctx, t, 'l16', { from: 7, to: 8, y: 940, size: 54, color: P.mut, out: s17 - 0.3 });
    say(ctx, t, 'l17', { y: 450, size: 76, weight: 900, maxWidth: 880, accent: [2, 5] });
    const kw = at(t, wt(ctx, 'l17', 5) - 0.2, wt(ctx, 'l17', 5) + 0.6, 'expoOut');
    if (kw > 0) { X.save(); X.globalAlpha = kw; X.translate(540, 900 + (1 - kw) * 60); X.fillStyle = '#5B8DB8'; X.beginPath(); X.moveTo(0, -200); X.bezierCurveTo(60, -100, 150, 0, 150, 70); X.arc(0, 70, 150, 0, Math.PI); X.bezierCurveTo(-150, 0, -60, -100, 0, -200); X.fill();
      X.fillStyle = 'rgba(255,255,255,0.45)'; X.beginPath(); X.ellipse(-55, 60, 22, 50, -0.3, 0, 6.283); X.fill(); X.restore(); }
  } });
