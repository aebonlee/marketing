/**
 * OG Image Generator for DreamIT Marketing
 * 1200 x 630 px (Open Graph standard)
 */
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// ── Background gradient (Blue) ──
const bgGrad = ctx.createLinearGradient(0, 0, W, H);
bgGrad.addColorStop(0, '#0046C8');
bgGrad.addColorStop(0.5, '#002E8A');
bgGrad.addColorStop(1, '#1E3A5F');
ctx.fillStyle = bgGrad;
ctx.fillRect(0, 0, W, H);

// ── Decorative circles ──
ctx.globalAlpha = 0.06;
ctx.fillStyle = '#FFFFFF';
ctx.beginPath();
ctx.arc(950, 120, 300, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(200, 550, 200, 0, Math.PI * 2);
ctx.fill();
ctx.globalAlpha = 1;

// ── Top bar accent ──
const accentGrad = ctx.createLinearGradient(0, 0, W, 0);
accentGrad.addColorStop(0, '#4A8FE7');
accentGrad.addColorStop(1, '#0046C8');
ctx.fillStyle = accentGrad;
ctx.fillRect(0, 0, W, 6);

// ── Brand text "Marketing" ──
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 72px "Segoe UI", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Marketing', W / 2, 230);

// ── Subtitle ──
ctx.font = '32px "Segoe UI", Arial, sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
// Korean subtitle line 1
ctx.fillText('마케팅 기초부터 디지털마케팅 실무까지', W / 2, 300);

// ── Divider line ──
ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(W / 2 - 200, 340);
ctx.lineTo(W / 2 + 200, 340);
ctx.stroke();

// ── Feature pills ──
const pills = ['15주 학습', 'SEO & SEM', 'SNS 마케팅', '콘텐츠 전략', '데이터 분석'];
const pillW = 160, pillH = 42, pillGap = 20;
const totalPillW = pills.length * pillW + (pills.length - 1) * pillGap;
let pillX = (W - totalPillW) / 2;
const pillY = 375;

pills.forEach(text => {
  // pill bg
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  roundRect(ctx, pillX, pillY, pillW, pillH, 21);
  ctx.fill();

  // pill border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 1;
  roundRect(ctx, pillX, pillY, pillW, pillH, 21);
  ctx.stroke();

  // pill text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '18px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, pillX + pillW / 2, pillY + 28);

  pillX += pillW + pillGap;
});

// ── Bottom info ──
ctx.font = '22px "Segoe UI", Arial, sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
ctx.textAlign = 'center';
ctx.fillText('marketing.dreamitbiz.com', W / 2, 530);

// ── DreamIT Biz logo ──
ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
ctx.textAlign = 'right';
ctx.fillText('DreamIT Biz', W - 40, H - 25);

// ── Save ──
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outPath, buffer);
console.log(`OG image saved: ${outPath} (${buffer.length} bytes)`);

// Helper: rounded rectangle
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
