import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshotDir = join(__dirname, '..', 'public', 'snapshots');

async function testMobileTiltShuffle() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Get layout metrics
  const info = await page.evaluate(() => {
    const hero = document.querySelectorAll('section')[0];
    const pillars = document.querySelectorAll('section')[1];
    return {
      heroBottom: hero ? hero.getBoundingClientRect().bottom + window.scrollY : 900,
      pillarsHeight: pillars ? pillars.getBoundingClientRect().height : 0,
    };
  });
  console.log('Metrics:', info);

  const startY = info.heroBottom - 80;

  // 1. Initial pinned state (Step 0: Card 1 in front, Cards 2,3,4 behind)
  await page.evaluate((y) => window.scrollTo(0, y + 10), startY);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(snapshotDir, 'mobile-tilt-0-initial.png') });
  console.log('📸 Step 0: Card 1 in front, others behind');

  // 2. Mid-transition 0 -> 1 (Card 1 tilts left, Card 2 tilts right and comes forward)
  await page.evaluate((y) => window.scrollTo(0, y + 400), startY);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(snapshotDir, 'mobile-tilt-1-mid-transition.png') });
  console.log('📸 Transition 0->1: Card 1 tilts left, Card 2 tilts right');

  // 3. Step 1 settled (Card 2 fully in front)
  await page.evaluate((y) => window.scrollTo(0, y + 750), startY);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(snapshotDir, 'mobile-tilt-2-card2-active.png') });
  console.log('📸 Step 1 settled: Card 2 in front');

  // 4. Mid-transition 1 -> 2 (Card 2 tilts left, Card 3 tilts right)
  await page.evaluate((y) => window.scrollTo(0, y + 1150), startY);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(snapshotDir, 'mobile-tilt-3-mid-transition2.png') });
  console.log('📸 Transition 1->2: Card 2 tilts left, Card 3 tilts right');

  // 5. Step 2 settled (Card 3 fully in front)
  await page.evaluate((y) => window.scrollTo(0, y + 1500), startY);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(snapshotDir, 'mobile-tilt-4-card3-active.png') });
  console.log('📸 Step 2 settled: Card 3 in front');

  await browser.close();
  console.log('✅ All snapshots saved successfully');
}

testMobileTiltShuffle().catch(console.error);

