const res = await fetch('https://selar.com/2179039tz9');
const html = await res.text();

// Let's print out all JSON objects in script tags or search for description
const nuxtMatch = html.match(/<script id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i);
if (nuxtMatch) {
  const data = JSON.parse(nuxtMatch[1]);
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (typeof item === 'string' && (item.includes('Bible') || item.includes('Alcohol') || item.includes('Timothy') || item.includes('price') || item.includes('NGN') || item.includes('Joshua'))) {
      console.log(`[${i}]: ${item}`);
    }
    if (typeof item === 'object' && item !== null) {
      const str = JSON.stringify(item);
      if (str.includes('Alcohol') || str.includes('price') || str.includes('Joshua')) {
        console.log(`[obj ${i}]: ${str}`);
      }
    }
  }
}

