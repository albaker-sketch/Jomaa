import { bg, say, mark, orn, FAM } from './_lib.js';
// «فإن فعلوا فعلنا · وإن لم يفعلوا تركنا»: صفّين متقابلين بسهم، ثم «طيبةً نفوسنا»
MOTION.scene({ id: 's8',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const row = (y, a, b, sa, sb, ok) => {
      const ka = at(t, sa - 0.1, sa + 0.4, 'expoOut'), kb = at(t, sb - 0.1, sb + 0.4, 'expoOut');
      ctx.text(X, a, 760, y + (1 - ka) * 40, { family: FAM, weight: 900, size: 92, color: P.ink, alpha: ka });
      if (ka > 0) ctx.drawPath(X, [[600, y - 30], [470, y - 30]], at(t, sa + 0.2, sb), { width: 6, color: P.hi, tip: { r: 8, color: P.hi } });
      if (kb > 0) { X.save(); X.globalAlpha = kb; X.fillStyle = P.hi; X.beginPath(); X.moveTo(450, y - 30); X.lineTo(478, y - 48); X.lineTo(478, y - 12); X.fill(); X.restore(); }
      ctx.text(X, b, 290, y + (1 - kb) * 40, { family: FAM, weight: 900, size: 92, color: ok ? P.acc : P.ink, alpha: kb });
      mark(ctx, 290, y - 170, 44, at(t, sb, sb + 0.5), ok);
    };
    const w = (l, i) => ctx.wordTime(l, i).s;
    row(720, 'فعلوا', 'فعلنا', w('l15', 1), w('l15', 2), true);
    row(1080, 'لم يفعلوا', 'تركنا', w('l16', 1), w('l16', 3), false);
    say(ctx, t, 'l15', { from: 0, to: 0, y: 470, size: 60, color: P.mut });
    const s4 = w('l16', 4);
    say(ctx, t, 'l16', { from: 4, to: 6, y: 1400, size: 96, weight: 900, accent: [4, 5] });
    orn(ctx, 540, 1480, at(t, s4 + 0.3, s4 + 1.4), { scale: 0.9 });
  } });
