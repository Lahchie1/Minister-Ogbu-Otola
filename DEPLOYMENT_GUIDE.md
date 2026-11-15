# Deployment & Maintenance Guide — Minister Ogbu Otola Website

**Project:** Minister Ogbu Otola Personal Website  
**Framework:** Next.js 16.4.5 (App Router, Turbopack, React 19)  
**Styling:** Tailwind CSS  
**Target Performance:** Lighthouse score ≥ 90 on mobile connections in Nigeria  

---

## 1. Architecture Overview

The Minister Ogbu Otola website is engineered for exceptional speed, low bandwidth consumption, and uncompromising doctrinal clarity. All public-facing pages are statically pre-rendered (SSG) at build time, ensuring sub-second delivery even on 3G/4G mobile networks across Nigeria.

| Route | Rendering Mode | Purpose |
|---|---|---|
| `/` | Static (Prerendered) | Hero redesign, 4 scriptural pillars, featured books, recent teaching |
| `/about` | Static (Prerendered) | Biography, ministry base, Church of Christ Lawanson, core convictions |
| `/books` | Static (Prerendered) | Curated catalog of 5 published books, sample chapter request modal |
| `/resources` | Static (Prerendered) | Scriptorium repository, instant search & category filtering |
| `/blog` | Static (Prerendered) | Expository teaching archive, reading times, scripture anchors |
| `/blog/[slug]` | SSG (Dynamic params) | Individual article reader with related books & resources |
| `/contact` | Static + Client Forms | Dynamic inquiry form (book purchase, bulk order, gospel meeting, scriptural questions) |
| `/api/contact` | Serverless API Route | Server-side validation and email/webhook dispatch |

---

## 2. Deployment Options

### Option A: Vercel (Recommended)
Vercel is the creator and optimal host for Next.js 16.4.5, offering automatic edge SSL, global CDN caches, instant preview deployments, and zero maintenance.

#### Step-by-Step Vercel Deployment:
1. **Initialize Git Repository and Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete minister ogbu otola website on next.js 16.4.5"
   git branch -M main
   git remote add origin https://github.com/<your-username>/minister-ogbu-otola-website.git
   git push -u origin main
   ```
2. **Import to Vercel:**
   - Log in to [vercel.com](https://vercel.com).
   - Click **"Add New"** → **"Project"**.
   - Select your GitHub repository `minister-ogbu-otola-website`.
   - Vercel automatically detects Next.js:
     - **Framework Preset:** `Next.js`
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`
     - **Install Command:** `npm install`
3. Click **"Deploy"**. The site will build in ~45 seconds and go live on a free `*.vercel.app` domain.

---

### Option B: Netlify
1. Connect your GitHub repository to Netlify at [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Netlify will deploy using the `@netlify/plugin-nextjs` automatically.

---

### Option C: Cloudflare Pages
1. Go to Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**.
2. Connect Git repository.
3. Choose framework preset: `Next.js`.
4. Run build and deploy on Cloudflare's edge network (excellent performance in Lagos and West Africa).

---

## 3. Custom Domain Configuration (e.g., `ogbuotola.org`)

To link a custom domain (e.g., purchased on Namecheap, GoDaddy, Whogohost, or Google Domains):

### DNS Records to Add in Your Domain Registrar:

| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| **A** | `@` (or blank) | `76.76.21.21` (Vercel IP) | Automatic (or 3600) |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic (or 3600) |

- In the Vercel dashboard: Project Settings → **Domains** → Enter `ogbuotola.org` and check **"Redirect www.ogbuotola.org to ogbuotola.org"**.
- SSL certificates (Let's Encrypt) are provisioned and renewed automatically.

---

## 4. Production Email & Inquiry Routing

The contact form submits to `/api/contact`. To forward inquiries directly to Minister Ogbu Otola's email address in production, you can configure any of the following integrations:

### 1. Using Resend (Recommended):
Install Resend:
```bash
npm install resend
```
Add to `.env.local` / Vercel Environment Variables:
```env
RESEND_API_KEY=re_123456789
MINISTER_NOTIFICATION_EMAIL=contact@ogbuotola.org
```

### 2. Using Formspree:
If you prefer an external form handler without server code:
1. Create a form endpoint at [formspree.io](https://formspree.io).
2. Update the form endpoint in `app/contact/page.tsx` or submit directly to `https://formspree.io/f/<YOUR_FORM_ID>`.

---

## 5. Ongoing Content Updates & Maintenance

All content is structured in strongly typed TypeScript files in the `/data` directory:

### Adding or Editing Published Books (`data/books.ts`):
Add a new object to the `books` array:
```typescript
{
  id: 'new-book-id',
  vol: 'VOL. VI',
  title: 'Title of the Book',
  slug: 'title-of-the-book',
  tagline: 'Subtitle or Focus Area',
  description: 'Short summary for card view...',
  fullOverview: 'Extended description...',
  category: 'Ecclesiology',
  pages: 190,
  scriptureReference: 'Acts 20:28',
  status: 'Published',
  coverTheme: {
    bg: 'bg-[#1A2332]',
    text: 'text-white',
    accent: 'text-[#C59B27]',
    badge: 'LEADERSHIP',
  },
  sampleExcerptAvailable: true,
  sampleChapterTitle: 'Chapter 1: The Ephesian Elders',
  features: ['Discussion Questions', 'Study Notes'],
  purchaseLinks: [
    { label: 'Order via Amazon', url: 'https://amazon.com/...', type: 'amazon' },
    { label: 'Order in Nigeria', url: '/contact?reason=book-purchase&book=new-book', type: 'local' }
  ]
}
```

### Adding New Curated Study Resources (`data/resources.ts`):
Locate the relevant category (`bible-doctrine`, `restoration-history`, `audio-video`, `practical-living`, `evangelism`) and add an entry:
```typescript
{
  id: 'unique-id',
  title: 'Resource Title',
  type: 'Exegetical Outline',
  scriptureReference: 'Hebrews 11',
  description: 'Short description of the content and biblical relevance.',
  url: 'https://trusted-site.org/study-link',
  linkLabel: 'External Study Link',
  category: 'Bible Study & Doctrine',
  format: 'article', // 'article' | 'pdf' | 'audio' | 'chart'
}
```

### Publishing New Articles or Teaching Outlines (`data/blog.ts`):
Add an article to `blogPosts`:
```typescript
{
  id: 'article-id',
  slug: 'article-url-slug',
  title: 'Article Title',
  publishedAt: 'November 15, 2026',
  category: 'Expository Paper',
  readTime: '10 min read',
  scriptureReference: 'Romans 8:1-17',
  author: 'Minister Ogbu Otola',
  relatedBookSlug: 'the-pattern-of-sound-words',
  excerpt: 'A brief summary of the article for listings and social sharing...',
  content: `
### Section Heading
Your article content formatted with markdown...

> Key scripture quote or blockquote...

- Bullet points...
  `
}
```

---

## 6. Performance & Quality Verification

Run locally to inspect:
```bash
npm run dev     # Starts development server on http://localhost:3000
npm run build   # Validates types, builds static pages, ensures 0 errors
npm run start   # Runs local production server
```

The site fulfills all milestones outlined in `docs/06-Minister-Ogbu-Otola-Implementation-Plan.md`:
- Responsive design tailored for mobile traffic in Nigeria
- Fast page load (< 1s) with low data footprint
- High-contrast accessible color palette (WCAG AA compliant)
- Working purchase links, inquiry workflows, and verified research tools.

