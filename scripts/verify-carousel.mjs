// Verify StackedScrollSection — snapshots at multiple scroll positions
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshotDir = join(__dirname, '..', 'public', 'snapshots');
mkdirSync(snapshotDir, { recursive: true });

const BASE = 'http://localhost:3000';

async function run() {
  const browser = await chromium.launch({ headless: true });

  // ─── Desktop 3D Carousel ───
  console.log('\n=== Desktop Carousel Verification ===');
  const dPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await dPage.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });
  await dPage.waitForTimeout(1500);

  // Find the section
  const section = await dPage.$('section.relative.z-30');
  if (!section) {
    console.error('❌ StackedScrollSection not found!');
    await browser.close();
    process.exit(1);
  }
  console.log('✅ StackedScrollSection found on page');

  // Screenshot initial desktop state
  await dPage.screenshot({ path: join(snapshotDir, 'carousel-desktop-step0.png'), fullPage: false });
  console.log('📸 Desktop step 0 (initial)');

  // Scroll through the carousel steps
  for (let step = 1; step <= 3; step++) {
    await dPage.evaluate((s) => {
      // Find the scroll track container (h-[400vh])
      const tracks = document.querySelectorAll('.hidden.md\\:block');
      if (tracks.length > 0) {
        const track = tracks[0];
        const rect = track.getBoundingClientRect();
        const trackHeight = rect.height;
        const scrollTarget = window.scrollY + rect.top + (trackHeight * s) / 4;
        window.scrollTo({ top: scrollTarget, behavior: 'instant' });
      }
    }, step);
    await dPage.waitForTimeout(800);
    await dPage.screenshot({
      path: join(snapshotDir, `carousel-desktop-step${step}.png`),
      fullPage: false,
    });
    console.log(`📸 Desktop step ${step}`);
  }

  // Check for console errors
  const errors = [];
  dPage.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await dPage.close();

  // ─── Mobile Stacking Cards ───
  console.log('\n=== Mobile Stack Verification ===');
  const mPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mPage.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });
  await mPage.waitForTimeout(1500);

  // Screenshot initial mobile state
  await mPage.screenshot({ path: join(snapshotDir, 'carousel-mobile-step0.png'), fullPage: false });
  console.log('📸 Mobile step 0 (initial)');

  // Scroll through mobile stack
  for (let step = 1; step <= 3; step++) {
    await mPage.evaluate((s) => {
      const track = document.querySelector('.block.md\\:hidden');
      if (track) {
        const rect = track.getBoundingClientRect();
        const trackHeight = rect.height;
        const scrollTarget = window.scrollY + rect.top + (trackHeight * s) / 4;
        window.scrollTo({ top: scrollTarget, behavior: 'instant' });
      }
    }, step);
    await mPage.waitForTimeout(800);
    await mPage.screenshot({
      path: join(snapshotDir, `carousel-mobile-step${step}.png`),
      fullPage: false,
    });
    console.log(`📸 Mobile step ${step}`);
  }

  await mPage.close();

  console.log(`\n${errors.length === 0 ? '✅' : '❌'} Console errors: ${errors.length}`);
  if (errors.length > 0) errors.forEach((e) => console.log('  ⚠️', e));

  console.log('\n✅ All carousel snapshots saved to public/snapshots/');

  await browser.close();
}

run().catch((err) => {
  console.error('Script failed:', err);
  process.exit(1);
});

