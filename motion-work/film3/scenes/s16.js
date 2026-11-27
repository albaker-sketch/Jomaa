import { bg, say, chip, wt, FAM } from './_lib.js';
// «تأمّلها يا عبد الله» · «النعم التي تحيط بك» = دوائر تتسع حولك · ثلاث أسئلة للنفس
MOTION.scene({ id: 's16',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s44 = ctx.lineSpan('l44').s;
    say(ctx, t, 'l42', { y: 400, size: 70, maxWidth: 880, accent: [0, 3, 4], out: ctx.lineSpan('l43').s - 0.3 });
    say(ctx, t, 'l43', { y: 400, size: 60, maxWidth: 900, accent: [7, 9], out: s44 - 0.3 });
    const kr = at(t, wt(ctx, 'l43', 9) - 0.3, wt(ctx, 'l43', 9) + 1.4, 'cubicOut'), ko = at(t, s44 - 0.4, s44);
    if (kr > 0 && ko < 1) { for (let i = 0; i < 4; i++) { X.save(); X.globalAlpha = (1 - ko) * (0.9 - i * 0.18); X.strokeStyle = i % 2 ? P.hi : P.acc; X.lineWidth = 5;
        X.beginPath(); X.arc(540, 900, (90 + i * 95) * kr, 0, 6.283); X.stroke(); X.restore(); }
      X.save(); X.globalAlpha = 1 - ko; X.fillStyle = P.ink; X.beginPath(); X.arc(540, 900, 26, 0, 6.283); X.fill(); X.restore(); }
    chip(ctx, t, 'أشكرت هذه النعم؟', 540, 640, wt(ctx, 'l44', 0), { w: 760, h: 150, size: 70 });
    chip(ctx, t, 'أأدّيت حق شكرها؟', 540, 860, wt(ctx, 'l45', 0), { w: 760, h: 150, size: 70 });
    chip(ctx, t, 'ستكون إجابتك مرضية؟', 540, 1080, wt(ctx, 'l46', 5), { w: 760, h: 150, size: 70, stroke: P.acc, color: P.acc });
    say(ctx, t, 'l46', { from: 0, to: 4, y: 1300, size: 58, color: P.mut });
  } });
