import { bg, say } from './_lib.js';
import { SHOWN } from './ayah.js';
// «يقول الله سبحانه وتعالى» ← الآية بسكينة (المائدة 3)
MOTION.scene({ id: 's2',
  draw(t, lt, ctx) {
    const { X, P, at, FX } = ctx; bg(ctx, t);
    const s3 = ctx.lineSpan('l3').s, out = at(t, s3 - 0.45, s3 - 0.05);
    const times = ctx.wordsOf('l3').map(w => w.s);
    if (t > s3 - 0.75) FX.ayahCalm(ctx, t, { text: SHOWN, surah: 'المائدة', ayah: 3, s: s3 - 0.6, wordsAt: 0.5, times, y: 960, maxWidth: 680 });
    if (out < 1) { X.save(); X.globalAlpha = 1 - out; say(ctx, t, 'l2', { y: 900, size: 96, weight: 900, accent: [1] }); X.restore(); }
  } });
