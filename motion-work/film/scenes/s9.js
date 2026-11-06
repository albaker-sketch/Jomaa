import { bg, say } from './_lib.js';
// المثال بتصميم صاحب الحساب: رجل ثوبه فوق القدم / رجل ثوبه طويل ← ثم راس بلحية / راس بلا لحية
function pic(ctx, name, cx, bottom, h, k) {
  const im = ctx.img(name); if (!im || k <= 0) return null;
  const w = h * im.width / im.height, { X } = ctx;
  X.save(); X.globalAlpha *= k; const s = 0.97 + 0.03 * k; X.translate(cx, bottom + (1 - k) * 40); X.scale(s, s);
  X.drawImage(im, -w / 2, -h, w, h); X.restore(); return { w, h };
}
MOTION.scene({ id: 's9',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t);
    say(ctx, t, 'l17', { y: 380, size: 70, maxWidth: 880, accent: [1, 2] });
    const w = (l, i) => ctx.wordTime(l, i), s19 = ctx.lineSpan('l19').s;
    ctx.drawPath(X, [[540, 600], [540, 1440]], at(t, ctx.lineSpan('l18').s - 0.2, ctx.lineSpan('l18').s + 0.6), { width: 3, color: P.hi });
    // ① الثياب
    const out1 = at(t, s19 - 0.35, s19 + 0.05);
    if (out1 < 1) {
      X.save(); X.globalAlpha = 1 - out1;
      say(ctx, t, 'l18', { from: 0, to: 3, x: 790, y: 640, size: 52, maxWidth: 440 });
      say(ctx, t, 'l18', { from: 4, to: 6, x: 290, y: 640, size: 52, maxWidth: 440 });
      const kA = at(t, w('l18', 2).s - 0.15, w('l18', 2).s + 0.45, 'expoOut'), kB = at(t, w('l18', 6).s - 0.15, w('l18', 6).s + 0.45, 'expoOut');
      const H = 740, floor = 1440;
      pic(ctx, 'manShort', 790, floor, H * 1018 / 986, kA);
      pic(ctx, 'manLong', 290, floor, H, kB);
      // خط عنابي على طرف الثوب
      const mA = at(t, w('l18', 3).s, w('l18', 3).s + 0.5), mB = at(t, w('l18', 6).s + 0.3, w('l18', 6).s + 0.8);
      X.save(); X.strokeStyle = P.acc; X.lineWidth = 4; X.setLineDash([12, 9]);
      if (mA > 0) { X.globalAlpha = mA * kA * (1 - out1); const y = floor - H * 1018 / 986 * (1 - 949 / 1018); X.beginPath(); X.moveTo(640, y); X.lineTo(940, y); X.stroke(); }
      if (mB > 0) { X.globalAlpha = mB * kB * (1 - out1); const y = floor - H * (1 - 950 / 986); X.beginPath(); X.moveTo(140, y); X.lineTo(440, y); X.stroke(); }
      X.restore(); X.restore();
    }
    // ② اللحية
    if (t > s19 - 0.3) {
      const kC = at(t, w('l19', 2).s - 0.2, w('l19', 2).s + 0.4, 'expoOut'), kD = at(t, w('l19', 6).s - 0.2, w('l19', 6).s + 0.4, 'expoOut');
      say(ctx, t, 'l19', { from: 0, to: 3, x: 790, y: 640, size: 58, weight: 900, maxWidth: 440, accent: [2] });
      say(ctx, t, 'l19', { from: 4, to: 6, x: 290, y: 640, size: 58, weight: 900, maxWidth: 440, accent: [6] });
      pic(ctx, 'bustBeard', 770, 1230, 400, kC);
      pic(ctx, 'bustPlain', 300, 1230, 400, kD);
    }
  } });
