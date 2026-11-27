import { bg, say, frame, wt, FAM } from './_lib.js';
// المشهد الأقوى: «لتسألنّ عن هذا النعيم يوم القيامة» — غامق ساكن · ثم «الجوع ← النعيم»
MOTION.scene({ id: 's12',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t, { color: P.ink, pat: 0.05 });
    const s31 = ctx.lineSpan('l31').s, s32 = ctx.lineSpan('l32').s;
    say(ctx, t, 'l30', { y: 400, size: 56, maxWidth: 880, color: P.hi, out: s31 - 0.3 });
    frame(ctx, 110, 480, 860, 640, at(t, s31 - 0.4, s31 + 0.9, 'cubicInOut'), { color: P.hi, color2: P.hi });
    say(ctx, t, 'l31', { from: 0, to: 2, y: 580, size: 54, color: P.hi });
    say(ctx, t, 'l31', { from: 3, to: 8, y: 870, size: 100, weight: 900, maxWidth: 740, lh: 1.35, valign: 'center', color: P.bg, accent: [3, 6], accentColor: P.hi });
    // الجوع ← النعيم
    const kA = at(t, wt(ctx, 'l32', 3) - 0.1, wt(ctx, 'l32', 3) + 0.4, 'expoOut'), kB = at(t, wt(ctx, 'l32', 10) - 0.1, wt(ctx, 'l32', 10) + 0.4, 'expoOut');
    ctx.text(X, 'الجوع', 790, 1330 + (1 - kA) * 30, { family: FAM, weight: 900, size: 100, color: P.bg, alpha: kA });
    if (kA > 0) ctx.drawPath(X, [[640, 1300], [450, 1300]], at(t, wt(ctx, 'l32', 4), wt(ctx, 'l32', 10)), { width: 6, color: P.hi, tip: { r: 9, color: P.hi } });
    ctx.text(X, 'النعيم', 290, 1330 + (1 - kB) * 30, { family: FAM, weight: 900, size: 100, color: P.hi, alpha: kB });
    say(ctx, t, 'l32', { y: 1460, size: 46, maxWidth: 800, color: P.bg });
  } });
