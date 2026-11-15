import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://selar.com/2179039tz9', { waitUntil: 'networkidle' });

const data = await page.evaluate(() => {
  const title = document.querySelector('h1')?.innerText || document.title;
  const price = document.querySelector('.price, [data-price], .product-price')?.innerText || '';
  // Let's get all headings and text blocks
  const allText = document.body.innerText;
  const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
  return { title, price, allText, images };
});

console.log('TITLE:', data.title);
console.log('PRICE:', data.price);
console.log('IMAGES:', data.images.filter(img => img.includes('product') || img.includes('the-bible-and-alcohol')));
console.log('--- ALL TEXT ---');
console.log(data.allText);

await browser.close();

