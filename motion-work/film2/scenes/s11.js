import { bg, say, frame, orn } from './_lib.js';
import { AYAH } from './ayah.js';
// «موسى عليه السلام، كليم الله» ← «وهو يقول للعبد الصالح» ← الآية بسكينة (الكهف 66)
const W = AYAH.split(' '), SHOWN = W.slice(3).join(' ');   // من «هَلْ» لآخر الآية، كما تلاها
MOTION.scene({ id: 's11',
  draw(t, lt, ctx) {
    const { X, P, at, FX } = ctx; bg(ctx, t);
    const s24 = ctx.lineSpan('l24').s, out = at(t, s24 - 0.45, s24 - 0.05);
    const times = ctx.wordsOf('l24').map(w => w.s);
    if (t > s24 - 0.75) FX.ayahCalm(ctx, t, { text: SHOWN, surah: 'الكهف', ayah: 66, s: s24 - 0.6, wordsAt: 0.5, times, y: 940, maxWidth: 680 });
    if (out < 1) { X.save(); X.globalAlpha = 1 - out;
      orn(ctx, 540, 520, at(lt, 0.1, 1.1), { scale: 1.2 });
      say(ctx, t, 'l22', { from: 0, to: 0, y: 650, size: 58, color: P.mut });
      say(ctx, t, 'l22', { from: 1, to: 3, y: 830, size: 110, weight: 900, maxWidth: 980 });
      say(ctx, t, 'l22', { from: 4, to: 5, y: 980, size: 80, weight: 900, accent: [4, 5] });
      say(ctx, t, 'l23', { y: 1250, size: 66, color: P.mut, accent: [2, 3] });
      X.restore(); }
  } });
