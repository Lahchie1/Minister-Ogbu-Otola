import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:3000');
  
  // Also let's check image dimensions
  const dims = await page.evaluate(async () => {
    const loadImg = (src) => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.src = src;
    });
    return {
      bg: await loadImg('/images/hero-bg.png'),
      minister: await loadImg('/images/min-ogbu-otola.png')
    };
  });
  console.log('Image dimensions:', dims);
  
  await page.setContent(`
    <body style="margin:0; background:#111; display:flex; flex-direction:column; gap:20px; padding:20px; color:#fff; font-family:sans-serif;">
      <h2>User images preview</h2>
      <div style="display:flex; gap:20px;">
        <div>
          <h3>hero-bg.png (${dims.bg.width}x${dims.bg.height})</h3>
          <img src="http://localhost:3000/images/hero-bg.png" style="max-width:600px; max-height:400px; border:1px solid #555;" />
        </div>
        <div>
          <h3>min-ogbu-otola.png (${dims.minister.width}x${dims.minister.height})</h3>
          <img src="http://localhost:3000/images/min-ogbu-otola.png" style="max-width:600px; max-height:400px; border:1px solid #555;" />
        </div>
      </div>
    </body>
  `);
  await page.screenshot({ path: 'public/snapshots/inspect-user-images.png' });
  console.log('Saved to public/snapshots/inspect-user-images.png');
  await browser.close();
})();

