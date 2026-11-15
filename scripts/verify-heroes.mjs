import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public', 'test-screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pages = [
  { name: 'about', url: 'http://localhost:3002/about' },
  { name: 'books', url: 'http://localhost:3002/books' },
  { name: 'resources', url: 'http://localhost:3002/resources' },
  { name: 'teaching', url: 'http://localhost:3002/teaching' },
  { name: 'contact', url: 'http://localhost:3002/contact' },
];

async function main() {
  const browser = await chromium.launch();

  // 1. Desktop Test (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  for (const p of pages) {
    console.log(`Checking desktop: ${p.name}`);
    await desktopPage.goto(p.url, { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(500);

    // Capture top view including transparent navbar + hero
    await desktopPage.screenshot({
      path: path.join(outDir, `desktop-top-${p.name}.png`),
      clip: { x: 0, y: 0, width: 1440, height: 500 },
    });

    // Scroll down 60px to verify navbar gets dark background
    await desktopPage.evaluate(() => window.scrollTo(0, 60));
    await desktopPage.waitForTimeout(300);
    await desktopPage.screenshot({
      path: path.join(outDir, `desktop-scrolled-${p.name}.png`),
      clip: { x: 0, y: 0, width: 1440, height: 200 },
    });
  }
  await desktopContext.close();

  // 2. Mobile Test (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  for (const p of pages) {
    console.log(`Checking mobile: ${p.name}`);
    await mobilePage.goto(p.url, { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(500);

    // Capture top view including transparent navbar + hero
    await mobilePage.screenshot({
      path: path.join(outDir, `mobile-top-${p.name}.png`),
      clip: { x: 0, y: 0, width: 390, height: 460 },
    });

    // Scroll down 60px to verify navbar gets dark background
    await mobilePage.evaluate(() => window.scrollTo(0, 60));
    await mobilePage.waitForTimeout(300);
    await mobilePage.screenshot({
      path: path.join(outDir, `mobile-scrolled-${p.name}.png`),
      clip: { x: 0, y: 0, width: 390, height: 160 },
    });
  }
  await mobileContext.close();

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
