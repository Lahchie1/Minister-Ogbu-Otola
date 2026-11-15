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

  const metrics = await page.evaluate(() => {
    const heroSection = document.querySelector('section');
    const ogbu = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OGBU');
    const otola = Array.from(document.querySelectorAll('span')).find(el => el.textContent?.trim() === 'OTOLA');
    const h1 = document.querySelector('h1');
    const p = document.querySelector('section p');
    const cta = document.querySelector('section a[href="/books"]');
    const ministerImg = document.querySelector('img[alt="Minister Ogbu Otola"]');
    const header = document.querySelector('header');
    const container = document.querySelector('section > div.relative.max-w-7xl');

    const rHero = heroSection?.getBoundingClientRect();
    const rOgbu = ogbu?.getBoundingClientRect();
    const rOtola = otola?.getBoundingClientRect();
    const rH1 = h1?.getBoundingClientRect();
    const rP = p?.getBoundingClientRect();
    const rCta = cta?.getBoundingClientRect();
    const rMinister = ministerImg?.getBoundingClientRect();
    const rHeader = header?.getBoundingClientRect();
    const rContainer = container?.getBoundingClientRect();

    const ministerCenterX = rMinister ? (rMinister.left + rMinister.right) / 2 : 0;
    const screenCenterX = window.innerWidth / 2;

    // Testimonies check
    const testimonyCards = Array.from(document.querySelectorAll('div[class*="backdrop-blur-md"][class*="border-[#D4AF37]"]'));
    const testimoniesInfo = testimonyCards.map(c => {
      const transform = window.getComputedStyle(c).transform;
      const rect = c.getBoundingClientRect();
      return {
        top: rect.top,
        transform
      };
    });

    const firstTestimonyTop = testimoniesInfo.length > 0 ? testimoniesInfo[0].top : 0;

    return {
      windowWidth: window.innerWidth,
      headerBottom: rHeader?.bottom,
      firstTestimonyTop,
      clearanceNavToTestimony: firstTestimonyTop - (rHeader?.bottom || 0),
      ogbu: rOgbu ? { left: rOgbu.left, right: rOgbu.right, top: rOgbu.top, bottom: rOgbu.bottom } : null,
      otola: rOtola ? { left: rOtola.left, right: rOtola.right, top: rOtola.top, bottom: rOtola.bottom } : null,
      verticalSeparation: (rOtola && rOgbu) ? (rOtola.top - rOgbu.bottom) : null,
      ogbuWithinMargin: rOgbu && rContainer ? rOgbu.left >= rContainer.left : null,
      otolaWithinMargin: rOtola && rContainer ? rOtola.right <= rContainer.right + 2 : null,
      ministerImg: rMinister ? {
        top: rMinister.top,
        bottom: rMinister.bottom,
        heroBottom: rHero?.bottom,
        gapToBase: Math.abs((rHero?.bottom || 0) - rMinister.bottom)
      } : null,
      ministerCentered: {
        ministerCenterX,
        screenCenterX,
        diff: Math.abs(ministerCenterX - screenCenterX)
      },
      typography: {
        h1FontSize: h1 ? window.getComputedStyle(h1).fontSize : null,
        pFontSize: p ? window.getComputedStyle(p).fontSize : null,
        ctaPadding: cta ? window.getComputedStyle(cta).padding : null,
      },
      testimoniesCount: testimonyCards.length,
      testimoniesInfo
    };
  });

  console.log('Inspection metrics:');
  console.log(JSON.stringify(metrics, null, 2));

  await page.screenshot({ path: 'public/snapshots/pastor-tola-style-desktop.png', fullPage: false });
  console.log('Saved public/snapshots/pastor-tola-style-desktop.png');

  // Mobile 390x844
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/snapshots/pastor-tola-style-mobile.png', fullPage: false });
  console.log('Saved public/snapshots/pastor-tola-style-mobile.png');

  await browser.close();
})();
