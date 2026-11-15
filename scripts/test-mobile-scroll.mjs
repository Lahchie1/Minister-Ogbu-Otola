import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshotDir = join(__dirname, '..', 'public', 'snapshots');

async function inspectMobile() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Get bounding rect of hero and pillars section
  const info = await page.evaluate(() => {
    const hero = document.querySelector('section');
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const pillars = document.querySelectorAll('section')[1];
    const pillarsRect = pillars ? pillars.getBoundingClientRect() : null;
    return {
      heroBottom: heroRect ? heroRect.bottom + window.scrollY : null,
      pillarsTop: pillarsRect ? pillarsRect.top + window.scrollY : null,
      pillarsHeight: pillarsRect ? pillarsRect.height : null,
    };
  });
  console.log('Layout info:', info);

  // Scroll to when Pillars section enters view (e.g. heroBottom)
  const heroBottom = info.heroBottom;
  
  // Step A: exactly at hero bottom (start of pillars section)
  await page.evaluate((y) => window.scrollTo(0, y), heroBottom);
  await page.waitForTimeout(600);
  await page.screenshot({ path: join(snapshotDir, 'mobile-scroll-A-start.png') });

  // Step B: scrolled 300px into pillars section
  await page.evaluate((y) => window.scrollTo(0, y + 300), heroBottom);
  await page.waitForTimeout(600);
  await page.screenshot({ path: join(snapshotDir, 'mobile-scroll-B-300.png') });

  // Step C: scrolled 800px into pillars section
  await page.evaluate((y) => window.scrollTo(0, y + 800), heroBottom);
  await page.waitForTimeout(600);
  await page.screenshot({ path: join(snapshotDir, 'mobile-scroll-C-800.png') });

  // Step D: scrolled 1400px into pillars section
  await page.evaluate((y) => window.scrollTo(0, y + 1400), heroBottom);
  await page.waitForTimeout(600);
  await page.screenshot({ path: join(snapshotDir, 'mobile-scroll-D-1400.png') });

  console.log('Saved snapshots A, B, C, D');
  await browser.close();
}

inspectMobile().catch(console.error);

