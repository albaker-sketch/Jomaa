import { bg, say, orn, wt } from './_lib.js';
// «فهل تأملت يوماً هذه النعمة» · «ولدت على الإسلام» كبيرة · «لا يدرك عظيم ذلك»
MOTION.scene({ id: 's13',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l31', { y: 460, size: 72, maxWidth: 880, accent: [1, 7] });
    orn(ctx, 540, 640, at(t, wt(ctx, 'l32', 0), wt(ctx, 'l32', 0) + 1.0));
    say(ctx, t, 'l32', { from: 0, to: 1, y: 820, size: 110, weight: 900 });
    say(ctx, t, 'l32', { from: 2, to: 3, y: 980, size: 130, weight: 900, accent: [2, 3] });
    say(ctx, t, 'l32', { from: 4, to: 9, y: 1250, size: 70, maxWidth: 880, accent: [8] });
  } });
