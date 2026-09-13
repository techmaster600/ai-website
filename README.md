# AISetu — AI Tools Directory for India

A static website (plain HTML/CSS/JS, no build step, no server, no paid database)
that discovers, compares and explains AI tools for Indian students, freelancers
and small businesses. Because it's fully static, it can be hosted **for free,
forever**, on any of the hosts below.

⚠️ **This is a demo/starter build.** Every tool price, rating, "best for" tag
and feature listed in `js/data.js` is clearly-marked placeholder content for
layout purposes — it has **not** been verified against real pricing pages.
Before you publish this publicly, replace that data with information you've
checked directly on each tool's official site, and update the affiliate
links, domain, and legal pages (`about.html`, `affiliate-disclosure.html`,
`contact.html`).

## What's inside

```
index.html                     Homepage
tools.html                     Searchable/filterable AI tools directory
finder.html                    "AI Tool Finder" quiz (rules-based matching)
students.html                  Student landing page
freelancers.html                Freelancer landing page
small-business.html            Small-business landing page
blog.html                      Guides/articles listing
tools/chatgpt.html             Example individual tool review page (template)
compare/chatgpt-vs-claude.html Example comparison page (template)
about.html, contact.html, affiliate-disclosure.html
css/style.css                  All styling (design tokens at the top)
js/data.js                     All tool + guide data — EDIT THIS to add real tools
js/main.js                     Search, filters, sorting, quiz logic (vanilla JS)
robots.txt, sitemap.xml        Basic technical SEO
```

To add a new tool: add an object to the `TOOLS` array in `js/data.js`, then
copy `tools/chatgpt.html` to `tools/<your-slug>.html` and edit the text.
To add a new guide/article: add an object to `GUIDES` in `js/data.js` and
create a matching page under a `blog/` folder (not included yet — the blog
listing currently links to `/blog/<slug>.html`, so create those files as you
write real articles).

## Hosting it for free

Any of these give you a real, working HTTPS URL at no cost. Pick one:

### Option 1 — GitHub Pages (simplest, fully free forever)
1. Create a free GitHub account and a new **public** repository.
2. Upload everything in this folder to the repository (drag-and-drop on
   github.com works, or `git push` if you're comfortable with git).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes — GitHub gives you a live URL like
   `https://yourusername.github.io/your-repo-name/`.
6. Optional: add a custom domain for free under **Settings → Pages →
   Custom domain** (you still have to buy the domain itself separately;
   GitHub Pages hosting stays free).

### Option 2 — Netlify (free tier, drag-and-drop)
1. Create a free account at netlify.com.
2. Go to **Add new site → Deploy manually**.
3. Drag this whole folder into the upload box.
4. Netlify gives you a live `https://your-site-name.netlify.app` URL
   instantly. You can rename the subdomain for free, or connect a custom
   domain.

### Option 3 — Cloudflare Pages (free tier, fast global CDN)
1. Create a free Cloudflare account.
2. Go to **Workers & Pages → Create → Pages → Upload assets**.
3. Upload this folder.
4. You get a live `https://your-site.pages.dev` URL for free.

### Option 4 — Vercel (free tier)
1. Create a free Vercel account.
2. **Add New → Project**, upload this folder (or connect a GitHub repo).
3. Deploy — you get a live `https://your-site.vercel.app` URL.

All four options: no credit card required for the free tier, HTTPS included
automatically, and enough bandwidth for a growing content site. If this site
later needs a real backend (a working newsletter signup, a database-backed
directory, user accounts), you'd add a small serverless function or a free
tier of a service like Supabase/Formspree — the current build has no backend
and needs none to go live.

## Before you make money from this

- **Affiliate marketing**: swap the `href="https://chat.openai.com"`-style
  links in each tool page for your real affiliate links, and keep the
  disclosure banner/page in place — India's ASCI/consumer-protection
  guidance and most affiliate programs require clear disclosure.
- **Ads**: once you have real traffic, apply to a display ad network and
  drop their script into the `<head>` of each page.
- **Sponsored listings / premium guides**: these are editorial/business
  decisions, not code — label sponsored content clearly when you add it.
- Replace every `aisetu.example.com` URL (canonical tags, sitemap, JSON-LD)
  with your real domain once you have one.
