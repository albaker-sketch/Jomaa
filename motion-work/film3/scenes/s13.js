import { bg, say, orn, wt } from './_lib.js';
// «لا إله إلا الله» بهدوء · «وأي نعيم؟ أنهم أكلوا بعدما خرجوا بسبب الجوع»
MOTION.scene({ id: 's13',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    orn(ctx, 540, 520, at(lt, 0.1, 1.1), { scale: 1.2 });
    say(ctx, t, 'l33', { y: 720, size: 120, weight: 900, accent: [3] });
    orn(ctx, 540, 820, at(lt, 0.4, 1.4), { scale: 1.0 });
    say(ctx, t, 'l34', { from: 0, to: 1, y: 1080, size: 110, weight: 900, accent: [1] });
    say(ctx, t, 'l34', { from: 2, to: 9, y: 1260, size: 62, maxWidth: 880, accent: [9] });
  } });
