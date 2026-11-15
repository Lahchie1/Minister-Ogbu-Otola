# 2. Technical Requirements Document (TRD)

**Product:** Minister Ogbu Otola Personal Website  
**Derived strictly from the accepted PRD**

---

**Platforms:**  
Web only (responsive). No native iOS or Android apps in version one.

**Frontend and hosting:**  
- Framework: Next.js (React) or plain static site with modern HTML/CSS/JS if complexity stays low.  
- Styling: Tailwind CSS for speed and consistency.  
- Hosting: Vercel, Netlify, or Cloudflare Pages (free/low-cost tier sufficient).  
- Domain: Custom domain preferred.

**Backend and database:**  
- Minimal backend. Prefer static generation + form handling via serverless functions or a simple form service (Formspree, Basin, or Netlify Forms).  
- If a lightweight CMS is needed later: Sanity, Contentful free tier, or Markdown files in the repo.  
- No complex database required for v1. Books and resource links can be managed via simple JSON/Markdown.

**Authentication and roles:**  
- No user accounts or public authentication in version one.  
- Optional simple password-protected admin area later if content updates become frequent (out of scope for v1).

**External services and APIs:**  
- Form handling service for contact/book inquiries.  
- Analytics: Plausible or Google Analytics (privacy-respecting option preferred).  
- No payment gateways.

**Architecture:**  
Simple content site. Pages load statically or via ISR. Contact form submits to external service or serverless function. No real-time features.

**Security and privacy:**  
- HTTPS only.  
- No collection of sensitive personal data beyond basic contact form fields (name, email, message).  
- Form data retained only as long as needed to respond.  
- No tracking cookies beyond essential analytics if used.

**Performance and reliability targets:**  
- Lighthouse performance score ≥ 90 on mobile.  
- Page load under 2 seconds on average Nigerian mobile connection.  
- 99% uptime (standard for the chosen host).

**Environments and delivery:**  
- Local development → Preview deployments → Production.  
- Git-based workflow (GitHub + automatic deploys).

**Key technical decisions and tradeoffs:**  
- Static-first approach chosen over a full CMS to keep cost near zero and maintenance low. Tradeoff: Content updates require a developer or simple Markdown edits until a CMS is added.  
- No e-commerce or user accounts in v1. Keeps scope tight and aligns with “display + external links only.”
