/* ==========================================================================
   AISetu — shared front-end logic (no build step, plain JS)
   ========================================================================== */

function toolCardHTML(t){
  const priceBadge = t.free
    ? `<span class="badge free">Free plan</span>`
    : `<span class="badge paid">Paid</span>`;
  const demoBadge = t.isDemo ? `<span class="badge demo">Demo data</span>` : "";
  const stars = "★".repeat(Math.round(t.rating)) + "☆".repeat(5-Math.round(t.rating));
  return `
  <article class="tool-card" data-category="${t.category}" data-pricing="${t.pricing}" data-price="${t.startingPrice}" data-tags="${t.tags.join(',')}" data-rating="${t.rating}" data-name="${t.name.toLowerCase()}">
    <div class="tool-card-top">
      <div class="tool-logo">${t.initials}</div>
      <div>
        <div class="tool-name">${t.name}</div>
        <div class="tool-cat">${t.category}</div>
      </div>
    </div>
    <p class="tool-desc">${t.desc}</p>
    <div class="tool-meta">
      ${priceBadge}
      <span class="rating"><span class="star">${stars}</span> ${t.rating.toFixed(1)}</span>
      ${demoBadge}
    </div>
    <div class="tool-card-foot">
      <span class="tool-price">${t.priceLabel}</span>
      <a class="btn btn-primary btn-sm" href="/tools/${t.slug}.html">View tool</a>
    </div>
  </article>`;
}

function guideCardHTML(g){
  const d = new Date(g.date);
  const dateStr = d.toLocaleDateString('en-IN', { month:'short', day:'numeric', year:'numeric' });
  return `
  <a class="guide-card" href="/blog/${g.slug}.html">
    <div class="guide-thumb">${g.category}</div>
    <div class="guide-body">
      <div class="guide-cat">${g.category}</div>
      <div class="guide-title">${g.title}</div>
      <p class="guide-excerpt">${g.excerpt}</p>
      <div class="guide-meta"><span>${dateStr}</span><span>${g.minutes} min read</span></div>
    </div>
  </a>`;
}

function renderInto(id, items, renderFn, emptyMsg){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = items.length
    ? items.map(renderFn).join("")
    : `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">${emptyMsg || "No results found."}</p>`;
}

/* ---------------- Homepage: featured tools + collections + guides ---------------- */
function initHomepage(){
  if(document.getElementById("featured-tools")){
    renderInto("featured-tools", TOOLS.slice(0,6), toolCardHTML);
  }
  if(document.getElementById("collection-tools")){
    setupCollections();
  }
  if(document.getElementById("latest-guides")){
    renderInto("latest-guides", GUIDES.slice(0,3), guideCardHTML);
  }
  const heroForm = document.getElementById("hero-search-form");
  if(heroForm){
    heroForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const q = document.getElementById("hero-search-input").value.trim();
      window.location.href = "/tools.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }
}

function setupCollections(){
  const collections = {
    students: TOOLS.filter(t=>t.tags.includes("students")),
    freelancers: TOOLS.filter(t=>t.tags.includes("freelancers")),
    "small-business": TOOLS.filter(t=>t.tags.includes("small-business")),
    free: TOOLS.filter(t=>t.free),
    "under-1000": TOOLS.filter(t=>t.startingPrice <= 1000)
  };
  const chips = document.querySelectorAll(".chip[data-collection]");
  function show(key){
    chips.forEach(c=>c.classList.toggle("is-active", c.dataset.collection===key));
    renderInto("collection-tools", (collections[key]||[]).slice(0,6), toolCardHTML,
      "No tools in this collection yet — check back soon.");
  }
  chips.forEach(c=>c.addEventListener("click", ()=>show(c.dataset.collection)));
  show(chips[0]?.dataset.collection || "students");
}

/* ---------------- Directory page: search + filter + sort ---------------- */
function initDirectory(){
  const grid = document.getElementById("directory-grid");
  if(!grid) return;

  const params = new URLSearchParams(window.location.search);
  const searchInput = document.getElementById("directory-search");
  if(params.get("q")) searchInput.value = params.get("q");

  const catSelect = document.getElementById("filter-category");
  const priceSelect = document.getElementById("filter-price");
  const useCaseSelect = document.getElementById("filter-usecase");
  const sortSelect = document.getElementById("sort-select");
  const countEl = document.getElementById("result-count");

  function apply(){
    let items = TOOLS.slice();
    const q = searchInput.value.trim().toLowerCase();
    if(q) items = items.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
    if(catSelect.value) items = items.filter(t => t.category === catSelect.value);
    if(priceSelect.value === "free") items = items.filter(t => t.free);
    if(priceSelect.value === "paid") items = items.filter(t => !t.free);
    if(priceSelect.value === "under500") items = items.filter(t => t.startingPrice > 0 && t.startingPrice <= 500);
    if(useCaseSelect.value) items = items.filter(t => t.tags.includes(useCaseSelect.value));

    switch(sortSelect.value){
      case "rating": items.sort((a,b)=>b.rating-a.rating); break;
      case "cheapest": items.sort((a,b)=>a.startingPrice-b.startingPrice); break;
      case "editor": items.sort((a,b)=>b.editorRating-a.editorRating); break;
      default: break; // "popular" = default demo order
    }

    countEl.textContent = `${items.length} tool${items.length===1?"":"s"} found`;
    renderInto("directory-grid", items, toolCardHTML, "No tools match those filters yet.");
  }

  [searchInput, catSelect, priceSelect, useCaseSelect, sortSelect].forEach(el=>{
    el.addEventListener("input", apply);
    el.addEventListener("change", apply);
  });
  apply();
}

/* ---------------- AI Tool Finder quiz ---------------- */
function initFinder(){
  const root = document.getElementById("finder");
  if(!root) return;

  const answers = { who:null, goal:null, budget:null, freeOnly:null };
  let step = 1;
  const totalSteps = 4;

  const stepsEl = root.querySelectorAll(".finder-step");
  const progressBar = document.getElementById("finder-progress-bar");

  function updateUI(){
    stepsEl.forEach(s => s.classList.toggle("is-active", Number(s.dataset.step)===step));
    progressBar.style.width = `${(step/(totalSteps+1))*100}%`;
  }

  root.querySelectorAll(".opt-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const group = btn.closest(".finder-step").dataset.group;
      answers[group] = btn.dataset.value;
      btn.closest(".finder-step").querySelectorAll(".opt-btn").forEach(b=>b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      setTimeout(()=>{
        if(step <= totalSteps){ step++; updateUI(); }
        if(step > totalSteps) showResults();
      }, 200);
    });
  });

  root.querySelectorAll("[data-back]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ if(step>1){ step--; updateUI(); } });
  });

  function showResults(){
    step = totalSteps+1;
    updateUI();
    let items = TOOLS.slice();
    if(answers.who) items = items.filter(t=>t.tags.includes(answers.who));
    if(answers.freeOnly === "yes") items = items.filter(t=>t.free);
    if(answers.budget){
      const cap = Number(answers.budget);
      items = items.filter(t=>t.startingPrice <= cap);
    }
    items.sort((a,b)=>b.rating-a.rating);
    items = items.slice(0,5);
    if(items.length===0) items = TOOLS.filter(t=>t.free).slice(0,3);
    renderInto("finder-results", items, toolCardHTML, "No matches — try a wider budget or different goal.");
  }

  updateUI();
}

/* ---------------- Mobile nav ---------------- */
function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(!toggle || !nav) return;
  toggle.addEventListener("click", ()=>{
    const open = nav.style.display === "flex";
    nav.style.display = open ? "none" : "flex";
    nav.style.cssText += "position:absolute;top:68px;left:0;right:0;background:#fff;flex-direction:column;padding:16px 24px;border-bottom:1px solid var(--border);";
  });
}

/* ---------------- Newsletter (demo — no backend) ---------------- */
function initNewsletter(){
  document.querySelectorAll(".newsletter-form").forEach(form=>{
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Subscribed ✓";
      setTimeout(()=>{ btn.textContent = original; form.reset(); }, 2200);
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  initNav();
  initHomepage();
  initDirectory();
  initFinder();
  initNewsletter();
});
