import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Desktop 1440x950
  await page.setViewportSize({ width: 1440, height: 950 });
  console.log('Navigating to http://localhost:3000 (Desktop)...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'public/snapshots/reversed-hero-desktop.png', fullPage: false });
  console.log('Saved public/snapshots/reversed-hero-desktop.png');

  const metrics = await page.evaluate(() => {
    const ogbu = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OGBU');
    const otola = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OTOLA');
    const h1 = document.querySelector('h1');
    const ministerImg = document.querySelector('img[alt="Minister Ogbu Otola"]');
    const header = document.querySelector('header');
    const navLinks = Array.from(document.querySelectorAll('header nav a')).map(a => a.textContent?.trim());
    const headerBg = window.getComputedStyle(header).backgroundColor;
    const navBarDiv = header.querySelector('div:nth-child(2)');
    const navBarBg = window.getComputedStyle(navBarDiv).backgroundColor;

    const rOgbu = ogbu?.getBoundingClientRect();
    const rOtola = otola?.getBoundingClientRect();
    const rH1 = h1?.getBoundingClientRect();
    const rMinister = ministerImg?.getBoundingClientRect();
    const rHeader = header?.getBoundingClientRect();

    return {
      ogbu: rOgbu ? { left: rOgbu.left, right: rOgbu.right, top: rOgbu.top, bottom: rOgbu.bottom } : null,
      otola: rOtola ? { left: rOtola.left, right: rOtola.right, top: rOtola.top, bottom: rOtola.bottom } : null,
      h1: rH1 ? { top: rH1.top, bottom: rH1.bottom, left: rH1.left } : null,
      gapOgbuToH1: (rH1 && rOgbu) ? (rH1.top - rOgbu.bottom) : null,
      ministerImg: rMinister ? { top: rMinister.top, bottom: rMinister.bottom, left: rMinister.left, right: rMinister.right } : null,
      headerBottom: rHeader?.bottom,
      gapHeaderToMinister: (rMinister && rHeader) ? (rMinister.top - rHeader.bottom) : null,
      navLinks,
      hasHomeInNav: navLinks.includes('Home'),
      headerBg,
      navBarBg,
      windowWidth: window.innerWidth
    };
  });

  console.log('Detailed metrics:', metrics);

  // Mobile 390x844
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/snapshots/reversed-hero-mobile.png', fullPage: false });
  console.log('Saved public/snapshots/reversed-hero-mobile.png');

  const mobileMetrics = await page.evaluate(() => {
    const ogbu = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OGBU');
    const otola = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OTOLA');
    const h1 = document.querySelector('h1');
    const rOgbu = ogbu?.getBoundingClientRect();
    const rOtola = otola?.getBoundingClientRect();
    const rH1 = h1?.getBoundingClientRect();
    return {
      ogbu: rOgbu ? { left: rOgbu.left, right: rOgbu.right, top: rOgbu.top, bottom: rOgbu.bottom } : null,
      otola: rOtola ? { left: rOtola.left, right: rOtola.right, top: rOtola.top, bottom: rOtola.bottom } : null,
      gapOgbuToH1: (rH1 && rOgbu) ? (rH1.top - rOgbu.bottom) : null,
    };
  });
  console.log('Mobile metrics:', mobileMetrics);

  await browser.close();
})();
