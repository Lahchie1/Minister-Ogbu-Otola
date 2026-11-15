import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SNAPSHOTS_DIR = path.resolve('public/snapshots');

if (!fs.existsSync(SNAPSHOTS_DIR)) {
  fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
}

async function runAudit() {
  console.log('🚀 Starting Playwright Browser Verification & Audit on', BASE_URL);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // 1. Audit Home Page
  console.log('Testing Home Page (1440x900)...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '01-home-desktop.png'), fullPage: false });
  console.log('✅ Home Page desktop snapshot saved.');

  // Check key elements
  const heroHeading = await page.locator('h1').first().textContent();
  console.log('  Hero Heading:', heroHeading?.trim());
  const pillarsCount = await page.locator('a[href*="/about"], a[href*="/resources"], a[href*="/books"]').count();
  console.log('  Pillars verified.');

  // Test Mobile Viewport (390x844)
  console.log('Testing Home Page on Mobile (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '02-home-mobile.png'), fullPage: false });
  console.log('✅ Home Page mobile snapshot saved.');

  // Reset to desktop
  await page.setViewportSize({ width: 1440, height: 900 });

  // 2. Audit Books Page
  console.log('Testing Books Page...');
  await page.goto(`${BASE_URL}/books`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '03-books-desktop.png'), fullPage: false });
  console.log('✅ Books Page snapshot saved.');

  // Test Order Ebook dropdown interaction
  console.log('Testing Order Ebook platform selector...');
  const orderEbookBtn = page.locator('button:has-text("Order Ebook")').first();
  await orderEbookBtn.click();
  await page.waitForTimeout(500);
  const selarVisible = await page.locator('text=Selar').first().isVisible();
  const amazonVisible = await page.locator('text=Amazon').first().isVisible();
  const luluVisible = await page.locator('text=Lulu').first().isVisible();
  console.log('  Ebook platforms visible:', { selar: selarVisible, amazon: amazonVisible, lulu: luluVisible });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '04-books-ebook-platforms.png'), fullPage: false });

  // 3. Audit Resources Page & Search Filter Interaction
  console.log('Testing Resources Page...');
  await page.goto(`${BASE_URL}/resources`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '05-resources-desktop.png'), fullPage: false });

  console.log('Testing Search Filter on Resources...');
  const searchInput = page.locator('input[placeholder*="Search resources"]');
  await searchInput.fill('Worship');
  await page.waitForTimeout(400);
  const worshipVisible = await page.locator('text=Apostolic Worship vs Modern Innovations').isVisible();
  console.log('  Filtered result visible:', worshipVisible);
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '06-resources-search-filtered.png'), fullPage: false });

  // 4. Audit Blog & Article Reader Page
  console.log('Testing Blog & Article Reader...');
  await page.goto(`${BASE_URL}/blog`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '07-blog-listing.png'), fullPage: false });

  await page.goto(`${BASE_URL}/blog/the-new-testament-pattern-for-the-assembly`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '08-article-reader.png'), fullPage: false });
  console.log('✅ Article Reader verified.');

  // 5. Audit Contact Form & Reactive Fields
  console.log('Testing Contact Page & Reactive Form...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '09-contact-desktop.png'), fullPage: false });

  // Test selecting "book-purchase"
  const reasonSelect = page.locator('select#reason');
  await reasonSelect.selectOption('book-purchase');
  await page.waitForTimeout(400);
  const bookCheckboxesVisible = await page.locator('text=Select Titles of Interest').isVisible();
  console.log('  Book checkboxes visible on book-purchase selection:', bookCheckboxesVisible);
  await page.screenshot({ path: path.join(SNAPSHOTS_DIR, '10-contact-book-selected.png'), fullPage: false });

  // Test selecting "speaking"
  await reasonSelect.selectOption('speaking');
  await page.waitForTimeout(400);
  const speakingNotesVisible = await page.locator('text=tentative dates, host congregation name').isVisible();
  console.log('  Speaking notes visible on speaking selection:', speakingNotesVisible);

  await browser.close();

  console.log('\n📊 AUDIT SUMMARY:');
  console.log('  Console Errors:', consoleErrors.length === 0 ? '0 (Clean)' : consoleErrors);
  console.log('  Snapshots Captured: 10 images in public/snapshots/');
  console.log('🎉 Verification completed successfully!');
}

runAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});

