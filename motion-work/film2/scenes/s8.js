import { bg, say, frame } from './_lib.js';
// «لمتّ على غير فطرة محمد ﷺ» — مشهد غامق ساكن
MOTION.scene({ id: 's8',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t, { color: P.ink, pat: 0.06 });
    frame(ctx, 110, 470, 860, 860, at(lt, 0.2, 1.4, 'cubicInOut'), { color: P.hi, color2: P.hi });
    say(ctx, t, 'l15', { from: 0, to: 5, y: 680, size: 72, maxWidth: 760, color: P.bg, valign: 'center' });
    say(ctx, t, 'l15', { from: 6, to: 11, y: 1050, size: 96, weight: 900, maxWidth: 760, lh: 1.35, valign: 'center', color: P.bg, accent: [8, 9, 10, 11], accentColor: P.hi });
  } });
