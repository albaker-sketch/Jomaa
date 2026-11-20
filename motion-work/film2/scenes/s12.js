import { bg, say } from './_lib.js';
import { AYAH } from './ayah.js';
// تأمّل الآية كلمة كلمة: الآية ساكنة فوق · المقطع بالخط العثماني بالنص · شرحه تحت بصوته
const W = AYAH.split(' '), SHOWN = W.slice(3).join(' ');
const FR = [ ['l25', 'l26', W.slice(3, 5).join(' ')], ['l27', 'l28', W.slice(8, 10).join(' ')], ['l29', 'l30', W[10]] ];
MOTION.scene({ id: 's12',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    ctx.text(X, SHOWN, 540, 400, { family: 'Amiri Quran', weight: 400, size: 54, color: P.mut, alpha: at(lt, 0.2, 0.9), maxWidth: 900 });
    ctx.text(X, '﴿ الكهف : 66 ﴾', 540, 480, { family: 'Tajawal', weight: 700, size: 40, color: P.hi, alpha: at(lt, 0.4, 1.0), dir: 'rtl' });
    FR.forEach(([fid, eid, frag], i) => {
      const s = ctx.lineSpan(fid).s, nxt = FR[i + 1] ? ctx.lineSpan(FR[i + 1][0]).s : 1e9;
      const k = at(t, s - 0.3, s + 0.5, 'cubicOut'), ko = at(t, nxt - 0.6, nxt - 0.15);
      if (k <= 0 || ko >= 1) return;
      X.save(); X.globalAlpha = k * (1 - ko);
      for (let j = 0; j < 3; j++) { X.save(); X.translate(470 + j * 70, 590); X.rotate(Math.PI / 4); X.fillStyle = j === 2 - i ? P.acc : P.hi; X.fillRect(-9, -9, 18, 18); X.restore(); }
      ctx.text(X, frag, 540, 860, { family: 'Amiri Quran', weight: 400, size: 150, color: P.acc });
      X.restore();
      say(ctx, t, eid, { y: 1150, size: 72, maxWidth: 860, weight: 900, out: nxt - 0.5 });
    });
  } });
