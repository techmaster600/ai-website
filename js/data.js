/* ==========================================================================
   DEMO DATA — AISetu
   --------------------------------------------------------------------------
   Every price, rating, "best for" tag, and feature below is PLACEHOLDER
   content for layout/demo purposes only. It has NOT been verified against
   the real tool's current pricing or specs. Before this site goes live,
   replace every record here with data you've checked directly against each
   tool's official pricing page, and remove the isDemo flag once verified.
   ========================================================================== */

const TOOLS = [
  {
    slug: "chatgpt", name: "ChatGPT", initials: "GPT",
    category: "Writing", tags: ["students","freelancers","small-business","writing"],
    desc: "General-purpose AI chat assistant for writing, research, brainstorming and coding help.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Plus from ₹1,900/mo (demo)",
    bestFor: "Students & all-round writing help", rating: 4.6, editorRating: 4.7,
    website: "https://chat.openai.com", isDemo: true
  },
  {
    slug: "claude", name: "Claude", initials: "CL",
    category: "Writing", tags: ["freelancers","developers","writing","coding"],
    desc: "AI assistant strong at long-document reasoning, writing and coding assistance.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Pro from ₹1,600/mo (demo)",
    bestFor: "Long documents & coding", rating: 4.7, editorRating: 4.8,
    website: "https://claude.ai", isDemo: true
  },
  {
    slug: "canva", name: "Canva", initials: "CV",
    category: "Design", tags: ["small-business","freelancers","students","design"],
    desc: "Drag-and-drop design tool with AI image generation, background removal and templates.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Pro from ₹499/mo (demo)",
    bestFor: "Social posts & quick designs", rating: 4.5, editorRating: 4.6,
    website: "https://canva.com", isDemo: true
  },
  {
    slug: "notion-ai", name: "Notion AI", initials: "NA",
    category: "Productivity", tags: ["students","freelancers","small-business","productivity"],
    desc: "Notes, docs and project workspace with built-in AI writing and summarisation.",
    pricing: "paid", free: false, startingPrice: 830, priceLabel: "From ₹830/mo per seat (demo)",
    bestFor: "Notes, docs & team wikis", rating: 4.4, editorRating: 4.4,
    website: "https://notion.so", isDemo: true
  },
  {
    slug: "capcut", name: "CapCut", initials: "CC",
    category: "Video", tags: ["creators","freelancers","video"],
    desc: "Mobile-first video editor with AI captions, background removal and templates.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Pro from ₹699/mo (demo)",
    bestFor: "Short-form video editing", rating: 4.5, editorRating: 4.3,
    website: "https://capcut.com", isDemo: true
  },
  {
    slug: "grammarly", name: "Grammarly", initials: "GR",
    category: "Writing", tags: ["students","job-seekers","writing"],
    desc: "Grammar, tone and clarity checking for essays, emails and job applications.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Premium from ₹1,000/mo (demo)",
    bestFor: "English writing accuracy", rating: 4.5, editorRating: 4.5,
    website: "https://grammarly.com", isDemo: true
  },
  {
    slug: "perplexity", name: "Perplexity", initials: "PX",
    category: "Education", tags: ["students","job-seekers","developers"],
    desc: "AI search engine that answers questions with cited sources for research.",
    pricing: "freemium", free: true, startingPrice: 0, priceLabel: "Free · Pro from ₹1,600/mo (demo)",
    bestFor: "Research with citations", rating: 4.6, editorRating: 4.5,
    website: "https://perplexity.ai", isDemo: true
  },
  {
    slug: "zoho-invoice", name: "Zoho Invoice", initials: "ZI",
    category: "Marketing", tags: ["small-business","freelancers","marketing"],
    desc: "GST-ready invoicing and billing built for Indian freelancers and small businesses.",
    pricing: "free", free: true, startingPrice: 0, priceLabel: "Free (demo)",
    bestFor: "GST invoicing in India", rating: 4.4, editorRating: 4.3,
    website: "https://zoho.com/invoice", isDemo: true
  },
  {
    slug: "github-copilot", name: "GitHub Copilot", initials: "GH",
    category: "Coding", tags: ["developers","students","coding"],
    desc: "AI pair-programmer that autocompletes code and explains it inside your editor.",
    pricing: "paid", free: false, startingPrice: 830, priceLabel: "From ₹830/mo (demo)",
    bestFor: "In-editor coding help", rating: 4.6, editorRating: 4.6,
    website: "https://github.com/features/copilot", isDemo: true
  }
];

const GUIDES = [
  {
    slug: "best-ai-tools-students-india", category: "Students",
    title: "25 Best AI Tools for Students in India (2026 Guide)",
    excerpt: "A checked, India-specific shortlist for notes, research, writing and exam prep — with free options first.",
    minutes: 9, date: "2026-08-12"
  },
  {
    slug: "free-ai-tools-college-students", category: "Students",
    title: "Best Free AI Tools for College Students",
    excerpt: "No paid plan needed — these tools cover research, writing help and presentations for ₹0.",
    minutes: 7, date: "2026-08-02"
  },
  {
    slug: "ai-tools-freelancers-india", category: "Freelancing",
    title: "Best AI Tools for Freelancers in India",
    excerpt: "From proposal writing to client invoicing — tools that save time on the business side of freelancing.",
    minutes: 8, date: "2026-07-28"
  },
  {
    slug: "ai-tools-small-business-india", category: "Small Business",
    title: "Best AI Tools for Small Businesses in India",
    excerpt: "Marketing, customer support and accounting tools sized for a small Indian business budget.",
    minutes: 10, date: "2026-07-15"
  },
  {
    slug: "ai-tools-under-500-rupees", category: "AI Tools",
    title: "Best AI Tools Under ₹500/Month",
    excerpt: "Real capability without a big subscription bill — every pick here checked against its official pricing page.",
    minutes: 6, date: "2026-07-01"
  },
  {
    slug: "chatgpt-vs-claude", category: "Comparisons",
    title: "ChatGPT vs Claude: Which Should You Use?",
    excerpt: "Where each assistant is genuinely stronger, and which one fits a student vs a freelancer's workflow.",
    minutes: 8, date: "2026-06-20"
  }
];
