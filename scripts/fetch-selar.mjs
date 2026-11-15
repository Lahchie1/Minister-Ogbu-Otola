const res = await fetch('https://selar.com/2179039tz9');
const html = await res.text();

// Look for open graph and meta tags
const metaMatches = html.matchAll(/<meta\s+[^>]*>/gi);
for (const m of metaMatches) {
  if (m[0].includes('og:') || m[0].includes('description') || m[0].includes('title')) {
    console.log(m[0]);
  }
}

// Find __NUXT_DATA__
const nuxtMatch = html.match(/<script id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i);
if (nuxtMatch) {
  try {
    const data = JSON.parse(nuxtMatch[1]);
    console.log('\n--- NUXT DATA ELEMENTS ---');
    // find strings with more than 50 chars (descriptions, etc.)
    const longStrings = data.filter(x => typeof x === 'string' && x.length > 30);
    console.log(longStrings);
  } catch (e) {
    console.log('JSON parse error', e);
  }
}

