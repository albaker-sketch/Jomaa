import { bg, say, card, FAM } from './_lib.js';
// «ما أهون» كرت واحد خفيف (بالأمس) · «ما أشقّها» كروت تتكدّس: عمراً طويلاً، علّمته أولادك، دافعت عنه
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    const s17 = ctx.lineSpan('l17').s;
    say(ctx, t, 'l16', { y: 430, size: 66, maxWidth: 880, accent: [1, 7], out: s17 - 0.3 });
    say(ctx, t, 'l17', { y: 430, size: 62, maxWidth: 900, accent: [1, 11, 12] });
    ctx.drawPath(X, [[540, 640], [540, 1440]], at(lt, 0.4, 1.2), { width: 3, color: P.hi });
    // يمين: بالأمس
    const w0 = ctx.wordTime('l16', 7).s, kA = at(t, w0 - 0.15, w0 + 0.35, 'expoOut');
    ctx.text(X, 'ما أهون', 790, 720, { family: FAM, weight: 900, size: 70, color: P.hi, alpha: at(t, ctx.wordTime('l16', 1).s, ctx.wordTime('l16', 1).s + 0.4) });
    card(ctx, 620, 1250 + (1 - kA) * 40, 340, 110, { fill: '#F6F3EC', stroke: P.hi, lw: 3, r: 24, alpha: kA, shadow: true });
    ctx.text(X, 'بالأمس', 790, 1325 + (1 - kA) * 40, { family: FAM, weight: 900, size: 58, color: P.ink, alpha: kA });
    // يسار: عمر طويل
    ctx.text(X, 'ما أشقّها', 290, 720, { family: FAM, weight: 900, size: 70, color: P.acc, alpha: at(t, ctx.wordTime('l17', 1).s, ctx.wordTime('l17', 1).s + 0.4) });
    const items = [['عمراً طويلاً', ctx.wordTime('l17', 11).s], ['علّمته أولادك', ctx.wordTime('l18', 1).s], ['ودافعت عنه', ctx.wordTime('l18', 3).s]];
    items.forEach(([txt, s], i) => { const k = at(t, s - 0.15, s + 0.4, 'expoOut'); if (k <= 0) return; const y = 1250 - i * 150 - (1 - k) * 60;
      card(ctx, 120, y, 340, 130, { fill: i === 0 ? P.ink : i === 1 ? P.clay : P.acc, r: 24, alpha: k, shadow: true });
      ctx.text(X, txt, 290, y + 85, { family: FAM, weight: 900, size: 54, color: P.bg, alpha: k }); });
  } });
