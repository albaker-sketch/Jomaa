import { bg, say, wt } from './_lib.js';
// ليل: هلال ونجوم · باب يتفتح ويطلع منه ضوء عند «خرج من بيته» · «في ساعة لا يخرج فيها»
MOTION.scene({ id: 's1',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx; bg(ctx, t, { color: P.ink, pat: 0.05 });
    const r = ctx.rng('stars');
    for (let i = 0; i < 46; i++) { const x = r() * 1080, y = 170 + r() * 700, s = 1.5 + r() * 3.5, tw = 0.5 + 0.5 * Math.sin(t * 2 + i);
      X.save(); X.globalAlpha = at(lt, 0.1 + i * 0.02, 0.6 + i * 0.02) * (0.4 + 0.6 * tw); X.fillStyle = P.hi; X.beginPath(); X.arc(x, y, s, 0, 6.283); X.fill(); X.restore(); }
    const km = at(lt, 0.2, 1.4, 'cubicOut'); X.save(); X.globalAlpha = km; X.fillStyle = P.hi; X.beginPath(); X.arc(820, 330, 70, 0, 6.283); X.fill();
    X.fillStyle = P.ink; X.beginPath(); X.arc(850, 310, 62, 0, 6.283); X.fill(); X.restore();
    say(ctx, t, 'l1', { y: 520, size: 72, maxWidth: 860, color: P.bg, accent: [5, 7], accentColor: P.hi });
    // باب مقوّس
    const kd = at(t, wt(ctx, 'l2', 0) - 0.2, wt(ctx, 'l2', 0) + 0.6, 'expoOut'), ko = at(t, wt(ctx, 'l2', 6), wt(ctx, 'l2', 6) + 1.0, 'cubicOut');
    if (kd > 0) { X.save(); X.globalAlpha = kd; X.translate(540, 1000);
      const g = X.createLinearGradient(0, -180, 0, 260); g.addColorStop(0, 'rgba(242,214,150,' + (0.85 * ko) + ')'); g.addColorStop(1, 'rgba(242,214,150,0)');
      X.fillStyle = g; X.beginPath(); X.moveTo(-110, 250); X.lineTo(-110, -60); X.arc(0, -60, 110, Math.PI, 0); X.lineTo(110, 250); X.closePath(); X.fill();
      X.strokeStyle = P.hi; X.lineWidth = 8; X.stroke();
      X.fillStyle = '#16263A'; X.beginPath(); X.moveTo(-110, 250); X.lineTo(-110 + 180 * ko, 230); X.lineTo(-110 + 180 * ko, -40); X.lineTo(-110, -60); X.closePath(); X.fill();
      X.restore(); }
    say(ctx, t, 'l2', { y: 1360, size: 80, weight: 900, color: P.bg, accent: [1, 2], accentColor: P.hi, out: wt(ctx, 'l3', 0) - 0.3 });
    say(ctx, t, 'l3', { y: 1340, size: 64, maxWidth: 880, color: P.bg, accent: [3, 5], accentColor: P.hi });
  } });
