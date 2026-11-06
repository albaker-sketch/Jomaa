// أدوات مشتركة لكل المشاهد — هوية aj_albaker: بيج · كحلي · عنابي · ذهبي رملي
export const FAM = 'Tajawal", "IBM Plex Sans Arabic';   // ﷺ يطلع من IBM Plex لأن Tajawal ما فيه الرمز
const clean = w => w.replace(/[،؟:,.!«»]/g, '');

/* كلمات السطر للعرض: «صلى الله عليه وسلم» تصير ﷺ بكلمة وحدة بتوقيت «صلى» */
export function tokens(ctx, id) {
  const ws = ctx.wordsOf(id), out = [];
  for (let i = 0; i < ws.length; i++) {
    if (clean(ws[i].w) === 'صلى' && ws[i + 3] && clean(ws[i + 3].w) === 'وسلم') {
      out.push({ w: 'ﷺ' + ws[i + 3].w.replace(/^.*وسلم/, ''), s: ws[i].s, e: ws[i + 3].e }); i += 3;
    } else out.push({ w: ws[i].w, s: ws[i].s, e: ws[i].e });
  }
  return out;
}

const LC = new Map();
function lay(ctx, key, str, o) {
  if (!LC.has(key)) LC.set(key, ctx.text.layout(ctx.X, str, { family: FAM, weight: o.weight || 700, size: o.size, maxWidth: o.maxWidth || 900, lineHeight: o.lh || 1.5 }));
  return LC.get(key);
}

/* say: كلمات السطر تطلع وحدة وحدة مع الصوت. o: {x,y,size,weight,maxWidth,lh,color,accent:[i],accentColor,from,to,out,align,dim:(i)=>alpha} */
export function say(ctx, t, id, o = {}) {
  const { X, P, at } = ctx;
  let tk = tokens(ctx, id); const a = o.from || 0, b = o.to ?? tk.length - 1; tk = tk.slice(a, b + 1);
  const size = o.size || 80, L = lay(ctx, id + ':' + a + ':' + b + ':' + size + ':' + (o.maxWidth || 900) + (o.weight || 700), tk.map(w => w.w).join(' '), o);
  const kOut = o.out != null ? at(t, o.out, o.out + 0.35, 'cubicIn') : 0;
  if (kOut >= 1) return null;
  const y = o.y - (o.valign === 'center' ? (L.lines.length - 1) * L.lh / 2 : 0);
  return ctx.text.drawLayout(X, L, o.x ?? 540, y, { align: o.align || 'center', perWord: (i) => {
    const w = tk[i], k = at(t, w.s - 0.1, w.s + 0.3, 'expoOut');
    if (k <= 0) return { alpha: 0 };
    const acc = (o.accent || []).includes(i + a);
    const hot = o.hot ? at(t, w.s - 0.05, w.s + 0.12) * (1 - at(t, w.e, w.e + 0.4)) : 0;
    return { clipUp: 1, dy: (1 - k) * size * 0.6 - kOut * 30, alpha: (1 - kOut) * (o.dim ? o.dim(i + a) : 1),
      color: acc ? (o.accentColor || P.acc) : (hot > 0.5 ? P.acc : (o.color || P.ink)) };
  } });
}

/* head: عبارة ثابتة تطلع كلمة كلمة من وقت s. o: {size,weight,color,stagger,out,maxWidth,accent:[i]} */
export function head(ctx, t, str, x, y, s, o = {}) {
  const { X, P, at } = ctx, size = o.size || 90;
  const L = lay(ctx, 'h:' + str + size + (o.weight || 900) + (o.maxWidth || 900), str, Object.assign({ weight: 900 }, o, { size }));
  const kOut = o.out != null ? at(t, o.out, o.out + 0.35, 'cubicIn') : 0;
  if (kOut >= 1 || t < s - 0.1) return null;
  const n = L.words.length;
  return ctx.text.drawLayout(X, L, x, y, { align: o.align || 'center', perWord: (i) => {
    const k = at(t, s + i * (o.stagger ?? 0.09), s + i * (o.stagger ?? 0.09) + 0.45, 'expoOut');
    if (k <= 0) return { alpha: 0 };
    return { clipUp: 1, dy: (1 - k) * size * 0.6 - kOut * 30, alpha: (1 - kOut) * (o.alpha ?? 1), color: (o.accent || []).includes(i) ? P.acc : (o.color || P.ink) };
  } });
}

/* خلفية: بيج + شبكة نجوم ثمانية خفيفة جداً تمشي ببطء */
let PAT = null;
function pattern(ctx) {
  if (PAT) return PAT;
  const c = document.createElement('canvas'); c.width = 1400; c.height = 2300; const g = c.getContext('2d');
  g.strokeStyle = ctx.P.hi; g.lineWidth = 2; const cell = 200;
  for (let yy = -cell; yy < c.height + cell; yy += cell) for (let xx = -cell; xx < c.width + cell; xx += cell) {
    g.save(); g.translate(xx, yy);
    for (const r0 of [0, Math.PI / 4]) { g.beginPath(); for (let i = 0; i <= 4; i++) { const an = r0 + i * Math.PI / 2; g[i ? 'lineTo' : 'moveTo'](62 * Math.cos(an), 62 * Math.sin(an)); } g.stroke(); }
    g.beginPath(); g.arc(0, 0, 18, 0, 6.283); g.stroke();
    g.beginPath(); g.moveTo(62, 0); g.lineTo(cell - 62, 0); g.moveTo(0, 62); g.lineTo(0, cell - 62); g.stroke();
    g.restore();
  }
  return (PAT = c);
}
export function bg(ctx, t, o = {}) {
  const { X, P, W, H } = ctx;
  X.fillStyle = o.color || P.bg; X.fillRect(0, 0, W, H);
  X.save(); X.globalAlpha = o.pat ?? 0.10; X.translate(540, 960); X.rotate(t * 0.004); X.drawImage(pattern(ctx), -700 - (t * 4) % 200, -1150 - (t * 3) % 200); X.restore();
  const g = X.createRadialGradient(540, 900, 200, 540, 900, 1250); g.addColorStop(0, 'rgba(255,255,255,0.25)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
}

/* حلية مثل حلية بوستاته: معيّن عنابي بالنص وقوسين رمليين وخط كحلي رفيع، ترتسم من النص لبرّا. k 0..1 */
export function orn(ctx, cx, cy, k, o = {}) {
  const { X, P, at } = ctx; if (k <= 0) return; const s = o.scale || 1, w = 150 * s;
  const kc = at(k, 0, 0.35, 'backOut'), kl = at(k, 0.15, 1, 'cubicOut');
  X.save(); X.globalAlpha *= o.alpha ?? 1;
  for (const d of [1, -1]) {
    ctx.drawPath(X, [[cx + d * 26 * s, cy], [cx + d * 70 * s, cy - 22 * s], [cx + d * 110 * s, cy - 6 * s], [cx + d * w, cy + 12 * s]], kl, { width: 4 * s, color: P.hi });
    ctx.drawPath(X, [[cx + d * 30 * s, cy + 14 * s], [cx + d * 80 * s, cy + 22 * s], [cx + d * (w + 30 * s), cy + 4 * s]], kl, { width: 3 * s, color: P.ink });
    X.globalAlpha *= 1;
    X.fillStyle = P.hi; const dx = cx + d * (w + 40 * s) * kl; if (kl > 0.95) { X.beginPath(); X.arc(dx, cy + 4 * s, 5 * s, 0, 6.283); X.fill(); }
  }
  X.translate(cx, cy); X.scale(kc, kc); X.rotate(Math.PI / 4); X.fillStyle = P.acc; X.fillRect(-13 * s, -13 * s, 26 * s, 26 * s);
  X.fillStyle = P.bg; X.fillRect(-5 * s, -5 * s, 10 * s, 10 * s);
  X.restore();
}

/* كرت بزوايا ناعمة. o: {fill,stroke,lw,r,alpha,scale,shadow} */
export function card(ctx, x, y, w, h, o = {}) {
  const { X } = ctx; const sc = o.scale ?? 1; if ((o.alpha ?? 1) <= 0) return;
  X.save(); X.globalAlpha *= o.alpha ?? 1; X.translate(x + w / 2, y + h / 2); X.scale(sc, sc); X.translate(-(x + w / 2), -(y + h / 2));
  X.beginPath(); X.roundRect(x, y, w, h, o.r ?? 28);
  if (o.shadow) { X.shadowColor = 'rgba(36,57,80,0.16)'; X.shadowBlur = 40; X.shadowOffsetY = 14; }
  if (o.fill) { X.fillStyle = o.fill; X.fill(); }
  X.shadowColor = 'transparent';
  if (o.stroke) { X.lineWidth = o.lw || 3; X.strokeStyle = o.stroke; X.stroke(); }
  X.restore();
}

/* إطار الحديث: خطين رمليين بزوايا معيّنات، يرتسم. */
export function frame(ctx, x, y, w, h, k, o = {}) {
  const { X, P } = ctx; if (k <= 0) return;
  const r = 30, pts = [[x + w / 2, y], [x + w - r, y], [x + w, y + r], [x + w, y + h - r], [x + w - r, y + h], [x + r, y + h], [x, y + h - r], [x, y + r], [x + r, y], [x + w / 2, y]];
  ctx.drawPath(X, pts, k, { width: 4, color: o.color || P.hi, smooth: false });
  const i = 16; const pts2 = [[x + w / 2, y + i], [x + w - r - i / 2, y + i], [x + w - i, y + r + i / 2], [x + w - i, y + h - r - i / 2], [x + w - r - i / 2, y + h - i], [x + r + i / 2, y + h - i], [x + i, y + h - r - i / 2], [x + i, y + r + i / 2], [x + r + i / 2, y + i], [x + w / 2, y + i]];
  ctx.drawPath(X, pts2, k, { width: 1.5, color: o.color2 || P.ink, smooth: false });
  const kd = ctx.at(k, 0.8, 1, 'backOut');
  for (const [px, py] of [[x + w / 2, y], [x + w / 2, y + h]]) { X.save(); X.translate(px, py); X.scale(kd, kd); X.rotate(Math.PI / 4); X.fillStyle = P.acc; X.fillRect(-11, -11, 22, 22); X.restore(); }
}

/* علامة صح / خطأ داخل دائرة */
export function mark(ctx, cx, cy, r, k, ok, o = {}) {
  const { X, P, at } = ctx; if (k <= 0) return;
  const col = o.color || (ok ? P.acc : P.ink), kc = at(k, 0, 0.5, 'backOut');
  X.save(); X.translate(cx, cy); X.scale(kc, kc); X.fillStyle = col; X.beginPath(); X.arc(0, 0, r, 0, 6.283); X.fill(); X.restore();
  const kk = at(k, 0.35, 1, 'cubicOut');
  if (ok) ctx.drawPath(X, [[cx - r * .42, cy + r * .02], [cx - r * .1, cy + r * .32], [cx + r * .45, cy - r * .3]], kk, { width: r * .16, color: P.bg, smooth: false });
  else { ctx.drawPath(X, [[cx - r * .32, cy - r * .32], [cx + r * .32, cy + r * .32]], kk, { width: r * .15, color: P.bg }); ctx.drawPath(X, [[cx + r * .32, cy - r * .32], [cx - r * .32, cy + r * .32]], at(k, 0.6, 1), { width: r * .15, color: P.bg }); }
}

/* نص بسيط يطلع من تحت عند s */
export function rise(ctx, t, str, x, y, s, o = {}) {
  const k = ctx.at(t, s - 0.05, s + 0.4, 'expoOut'); if (k <= 0) return 0;
  const kOut = o.out != null ? ctx.at(t, o.out, o.out + 0.3, 'cubicIn') : 0; if (kOut >= 1) return 0;
  ctx.text(ctx.X, str, x, y + (1 - k) * 40 - kOut * 25, { family: FAM, weight: o.weight || 700, size: o.size || 60, color: o.color || ctx.P.ink, alpha: k * (1 - kOut) * (o.alpha ?? 1), align: o.align || 'center' });
  return k;
}

/* ── رسومات بلا ملامح (طلب صاحب الحساب) ── */
const SKIN = '#D6B08A', WHITE = '#FFFFFF', AGAL = '#1F1D1C', HAIR = '#2B2522';
function ghutraBack(X, cx, top, u, ink) {      // الغترة النازلة ورا الكتوف
  X.beginPath(); X.moveTo(cx - 0.46 * u, top + 0.15 * u);
  X.bezierCurveTo(cx - 0.75 * u, top + 0.9 * u, cx - 0.95 * u, top + 1.9 * u, cx - 0.9 * u, top + 2.55 * u);
  X.lineTo(cx + 0.9 * u, top + 2.55 * u);
  X.bezierCurveTo(cx + 0.95 * u, top + 1.9 * u, cx + 0.75 * u, top + 0.9 * u, cx + 0.46 * u, top + 0.15 * u); X.closePath();
  X.fillStyle = '#F4F2EC'; X.fill(); X.strokeStyle = ink; X.lineWidth = 3; X.stroke();
}
function headTop(X, cx, top, u, ink, beard) {   // الوجه بلا ملامح + الغترة + العقال
  const hy = top + 0.62 * u;
  X.beginPath(); X.ellipse(cx, hy, 0.34 * u, 0.46 * u, 0, 0, 6.283); X.fillStyle = SKIN; X.fill();
  if (beard === 'long') {
    X.beginPath(); X.moveTo(cx - 0.33 * u, hy + 0.02 * u);
    X.bezierCurveTo(cx - 0.36 * u, hy + 0.6 * u, cx - 0.22 * u, hy + 1.25 * u, cx, hy + 1.45 * u);
    X.bezierCurveTo(cx + 0.22 * u, hy + 1.25 * u, cx + 0.36 * u, hy + 0.6 * u, cx + 0.33 * u, hy + 0.02 * u);
    X.bezierCurveTo(cx + 0.25 * u, hy + 0.3 * u, cx - 0.25 * u, hy + 0.3 * u, cx - 0.33 * u, hy + 0.02 * u);
    X.fillStyle = HAIR; X.fill();
  } else if (beard === 'short') {   // عارض: خط رفيع على الفك
    X.save(); X.beginPath(); X.ellipse(cx, hy, 0.34 * u, 0.46 * u, 0, 0.15, Math.PI - 0.15); X.strokeStyle = HAIR; X.lineWidth = 0.07 * u; X.lineCap = 'round'; X.stroke(); X.restore();
  }
  // الغترة فوق الراس وحول الوجه
  X.beginPath(); X.moveTo(cx - 0.42 * u, hy + 0.35 * u);
  X.bezierCurveTo(cx - 0.5 * u, hy - 0.2 * u, cx - 0.45 * u, top - 0.08 * u, cx, top - 0.1 * u);
  X.bezierCurveTo(cx + 0.45 * u, top - 0.08 * u, cx + 0.5 * u, hy - 0.2 * u, cx + 0.42 * u, hy + 0.35 * u);
  X.lineTo(cx + 0.33 * u, hy + 0.1 * u); X.bezierCurveTo(cx + 0.33 * u, hy - 0.42 * u, cx - 0.33 * u, hy - 0.42 * u, cx - 0.33 * u, hy + 0.1 * u); X.closePath();
  X.fillStyle = WHITE; X.fill(); X.strokeStyle = ink; X.lineWidth = 3; X.stroke();
  // العقال: حلقتين
  X.strokeStyle = AGAL; X.lineWidth = 0.07 * u;
  for (const dy of [0.12, 0.24]) { X.beginPath(); X.ellipse(cx, top + dy * u, 0.43 * u, 0.1 * u, 0, Math.PI * 1.02, Math.PI * 1.98); X.stroke(); }
  X.beginPath(); X.ellipse(cx, top + 0.18 * u, 0.44 * u, 0.13 * u, 0, -0.1, Math.PI + 0.1); X.stroke();
}
/* رجل بثوب قطري، بلا ملامح. floor = خط الأرض، H = الطول. o: {long, k, mark(0..1)} */
export function man(ctx, cx, floor, H, o = {}) {
  const { X, P } = ctx; const k = o.k ?? 1; if (k <= 0) return; const u = H / 8, top = floor - H, ink = P.ink;
  X.save(); X.globalAlpha *= k; X.translate(0, (1 - k) * 40);
  X.fillStyle = 'rgba(36,57,80,0.12)'; X.beginPath(); X.ellipse(cx, floor + 6, 1.15 * u, 0.13 * u, 0, 0, 6.283); X.fill();
  ghutraBack(X, cx, top, u, ink);
  const hem = o.long ? floor + 0.04 * u : floor - 0.42 * u, sh = top + 1.25 * u;
  // الرجول والنعال (تبين تحت الثوب القصير)
  if (!o.long) { X.fillStyle = SKIN; for (const d of [-1, 1]) X.fillRect(cx + d * 0.32 * u - 0.1 * u, hem - 4, 0.2 * u, floor - hem - 0.05 * u);
    X.fillStyle = '#5A4632'; for (const d of [-1, 1]) { X.beginPath(); X.ellipse(cx + d * 0.34 * u, floor - 0.06 * u, 0.24 * u, 0.08 * u, 0, 0, 6.283); X.fill(); } }
  // الثوب
  X.beginPath(); X.moveTo(cx - 0.3 * u, sh - 0.08 * u);
  X.quadraticCurveTo(cx - 0.95 * u, sh, cx - 1.0 * u, sh + 0.5 * u);
  X.lineTo(cx - 0.98 * u, top + 4.3 * u); X.lineTo(cx - 0.72 * u, top + 4.3 * u);
  X.lineTo(cx - (o.long ? 1.0 : 0.82) * u, hem);
  if (o.long) X.quadraticCurveTo(cx, hem + 0.12 * u, cx + 1.0 * u, hem); else X.lineTo(cx + 0.82 * u, hem);
  X.lineTo(cx + 0.72 * u, top + 4.3 * u); X.lineTo(cx + 0.98 * u, top + 4.3 * u);
  X.lineTo(cx + 1.0 * u, sh + 0.5 * u); X.quadraticCurveTo(cx + 0.95 * u, sh, cx + 0.3 * u, sh - 0.08 * u); X.closePath();
  X.fillStyle = WHITE; X.fill(); X.strokeStyle = ink; X.lineWidth = 3.5; X.lineJoin = 'round'; X.stroke();
  // خطوط الكم والياقة والجيب
  X.lineWidth = 2; X.beginPath(); X.moveTo(cx - 0.72 * u, top + 4.3 * u); X.lineTo(cx - 0.72 * u, sh + 0.75 * u); X.moveTo(cx + 0.72 * u, top + 4.3 * u); X.lineTo(cx + 0.72 * u, sh + 0.75 * u); X.stroke();
  X.fillStyle = SKIN; for (const d of [-1, 1]) { X.beginPath(); X.ellipse(cx + d * 0.85 * u, top + 4.45 * u, 0.11 * u, 0.15 * u, 0, 0, 6.283); X.fill(); }
  X.beginPath(); X.roundRect(cx - 0.22 * u, sh - 0.12 * u, 0.44 * u, 0.16 * u, 4); X.fillStyle = WHITE; X.fill(); X.strokeStyle = ink; X.stroke();
  X.beginPath(); X.moveTo(cx, sh + 0.04 * u); X.lineTo(cx, top + 2.7 * u); X.stroke();
  X.fillStyle = ink; for (let i = 0; i < 3; i++) { X.beginPath(); X.arc(cx + 0.06 * u, sh + 0.35 * u + i * 0.4 * u, 3.5, 0, 6.283); X.fill(); }
  X.beginPath(); X.moveTo(cx + 0.35 * u, sh + 0.7 * u); X.lineTo(cx + 0.65 * u, sh + 0.7 * u); X.stroke();
  headTop(X, cx, top, u, ink, o.beard);
  X.restore();
  // علامة على طرف الثوب
  const km = o.mark ?? 0;
  if (km > 0) { X.save(); X.globalAlpha = km * k; X.strokeStyle = P.acc; X.lineWidth = 4; X.setLineDash([12, 9]);
    const y = o.long ? floor : hem; X.beginPath(); X.moveTo(cx - 1.35 * u, y); X.lineTo(cx + 1.35 * u, y); X.stroke(); X.restore(); }
}
/* راس وكتوف بلا ملامح. beard: 'long' | 'short' */
export function bust(ctx, cx, top, s, o = {}) {
  const { X, P } = ctx; const k = o.k ?? 1; if (k <= 0) return; const u = s, ink = P.ink;
  X.save(); X.globalAlpha *= k; X.translate(0, (1 - k) * 40);
  ghutraBack(X, cx, top, u, ink);
  const sh = top + 1.25 * u;
  X.beginPath(); X.moveTo(cx - 0.3 * u, sh - 0.08 * u); X.quadraticCurveTo(cx - 1.0 * u, sh, cx - 1.08 * u, sh + 0.7 * u); X.lineTo(cx - 1.08 * u, top + 2.55 * u);
  X.lineTo(cx + 1.08 * u, top + 2.55 * u); X.lineTo(cx + 1.08 * u, sh + 0.7 * u); X.quadraticCurveTo(cx + 1.0 * u, sh, cx + 0.3 * u, sh - 0.08 * u); X.closePath();
  X.fillStyle = WHITE; X.fill(); X.strokeStyle = ink; X.lineWidth = 3.5; X.stroke();
  X.lineWidth = 2; X.beginPath(); X.roundRect(cx - 0.22 * u, sh - 0.12 * u, 0.44 * u, 0.16 * u, 4); X.stroke(); X.beginPath(); X.moveTo(cx, sh + 0.04 * u); X.lineTo(cx, top + 2.55 * u); X.stroke();
  headTop(X, cx, top, u, ink, o.beard);
  X.restore();
}
