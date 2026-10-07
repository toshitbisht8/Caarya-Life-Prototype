// Workspace shell: menu bar (Figma section 1010:38167) + Assessments page (Figma 993:27736).

// Which menu item / breadcrumb each workspace route belongs to.
const PAGE_FOR = {
  assessments: { page: "assessments", menu: "assessments", crumb: ["Your Unique Identity", "Assessments"] },
  growth: { page: "growth", menu: "growth", crumb: ["Your Career", "Growth Track"] },
  explore: { page: "growth", menu: "growth", crumb: ["Your Career", "Growth Track"] },
  "explore-all": { page: "growth", menu: "growth", crumb: ["Your Career", "Growth Track"] },
  "work-order": { page: "growth", menu: "growth", crumb: ["Your Career", "Growth Track"] },
  desk: { page: "desk", menu: "desk", crumb: ["Your Work", "Desk"] },
  proof: { page: "impact", menu: "proof", crumb: ["Your Impact Journal", "Proof"] },
  "proof-asset": { page: "impact", menu: "proof", crumb: ["Your Impact Journal", "Proof"] },
  achievements: { page: "impact", menu: "achievements", crumb: ["Your Impact Journal", "Achievements"] },
  competencies: { page: "competencies", menu: "competencies", crumb: ["Your Impact Journal", "Competencies"] },
  profile: { page: "profile", menu: "profile", crumb: ["Your Unique Identity", "Profile"] },
  journal: { page: "soon", menu: "journal", crumb: ["Your Impact Journal", "Journal"] },
  "domain-affinity": { page: "soon", menu: "domain-affinity", crumb: ["Your Career", "Domain Affinity"] },
  "industry-affinity": { page: "soon", menu: "industry-affinity", crumb: ["Your Career", "Industry Affinity"] },
  "session-logs": { page: "soon", menu: "session-logs", crumb: ["Your Work", "Session Logs"] },
  "daily-gains": { page: "soon", menu: "daily-gains", crumb: ["Your Knowledge Space", "Daily Gains"] },
  exchange: { page: "soon", menu: "exchange", crumb: ["Your Knowledge Space", "Exchange"] },
  rolodex: { page: "soon", menu: "rolodex", crumb: ["Your Network", "Rolodex"] },
  "network-profile": { page: "soon", menu: "network-profile", crumb: ["Your Network", "Profile"] },
};

// Coming-soon pages (Figma 1102:37515). Each uses its menu section's colour and a faded, tinted copy of its
// menu icon (Journal keeps its own illustration). [page title, page subtitle, headline, lines, colour, icon]
const SOON = {
  "domain-affinity": ["Domain Affinity", "How your work and interests map across domains", "Your Neo-Generalist Spotlight",
    ["See which domains your work keeps pulling you toward, and where your strengths overlap."], "#f57d34", "domain-affinity.svg"],
  "industry-affinity": ["Industry Affinity", "The industries your work has touched", "How You Have Interacted With Industries",
    ["See every industry you've worked across, and the ones you keep coming back to."], "#f57d34", "industry-affinity.svg"],
  "session-logs": ["Session Logs", "Every focus session you've logged", "Capture Work While Doing It",
    ["Every session in one place: what you worked on, for how long, and what you noticed along the way."], "#eea638", "session-logs.svg"],
  journal: ["Journal", "Capture and document your unique process of working", "Document Your Work Process",
    ["Capture, document and share your unique process of working."], "#6775f5", null],
  "daily-gains": ["Daily Gains", "Short reads picked for the work you do", "Curated Insights To Fuel Your Day",
    ["Fresh content, tailored to what matters most.", "Stay ahead with knowledge that compounds daily."], "#c44eb9", "daily-gains.svg"],
  exchange: ["Peer Knowledge Exchange", "Ask, answer and learn alongside other students", "Tap Into The Collective Wisdom Of Peers",
    ["Ask, guide, or share: there's always something to learn.", "Knowledge flows when communities connect."], "#c44eb9", "exchange.svg"],
  rolodex: ["Rolodex", "The people you've met and worked with", "Keep Track Of Your Network",
    ["Everyone you've worked with, been mentored by or met through Caarya, in one place.", "Relationships that grow with your career."], "#0497ae", "rolodex.svg"],
  "network-profile": ["Profile", "How you show up to your network", "Your Social Avatar",
    ["The version of you that people in your network see.", "Your work and your story, one link away."], "#0497ae", "network-profile.svg"],
};

function renderSoon(route) {
  const [title, sub, head, lines, color, icon] = SOON[route];
  const art = icon
    ? `<span class="soon__icon" style="-webkit-mask-image:url(assets/menu/${icon});mask-image:url(assets/menu/${icon})"></span>`
    : `<img src="assets/impact/journal-empty.svg" alt="" />`;
  document.getElementById("soon-page").innerHTML = `
    <div class="page-header"><h1 class="page-header__title">${title}</h1><p class="page-header__sub">${sub}</p></div>
    <div class="im-content im-soon soon" style="--soon:${color}">
      <div class="im-soon__mark"><h2>${title}</h2>${art}</div>
      <div class="im-soon__text"><h3>${head}</h3>${lines.map((l) => `<p>${l}</p>`).join("")}</div>
      <span class="im-soon__pill">Coming Soon</span>
    </div>`;
}

function renderWorkspace(route, param) {
  const info = PAGE_FOR[route];
  document.querySelectorAll("[data-page]").forEach((p) => (p.hidden = p.dataset.page !== info.page));
  document.querySelector("[data-crumb-section]").textContent = info.crumb[0];
  document.querySelector("[data-crumb-page]").textContent = info.crumb[1];
  document.querySelectorAll(".menu-item").forEach((item) => {
    const on = item.dataset.route === info.menu;
    item.classList.toggle("is-focus", on);
    on ? item.setAttribute("aria-current", "page") : item.removeAttribute("aria-current");
    if (item.dataset.iconFocus) {
      const srcs = (on ? item.dataset.iconFocus : item.dataset.iconIdle).split("|");
      item.querySelectorAll("img").forEach((img, i) => (img.src = srcs[i]));
    }
  });
  renderCoins();
  if (info.page === "growth") renderGrowth(route, param); // growth.js
  if (info.page === "desk") renderDesk(); // desk.js
  if (info.page === "impact") renderImpact(route, param); // impact.js
  if (info.page === "competencies") renderCompetencies(); // competencies.js
  if (info.page === "profile") renderProfile(); // profile.js
  if (info.page === "assessments") syncAssessmentCards(); // riasec.js
  if (info.page === "soon") renderSoon(route);
}

// Coin balance bar (Figma 1013:45188)
function renderCoins() {
  const pct = Math.max(0, Math.min(1, state.coins / state.coinsMax));
  document.querySelector(".coins__fill").style.width = pct * 100 + "%";
  document.querySelector("[data-coins]").textContent = `${state.coins} / ${state.coinsMax}`;
  const meter = document.querySelector(".coins");
  meter.setAttribute("aria-valuenow", state.coins);
  meter.setAttribute("aria-valuemax", state.coinsMax);
}

(function () {
  const M = "assets/menu/";

  // Icon = one or more SVG layers; insets copied from Figma so multi-part icons sit as designed.
  const whole = (file) => [{ file, inset: "0" }];
  function iconEl(className, layers) {
    const box = document.createElement("span");
    box.className = className;
    box.setAttribute("aria-hidden", "true");
    layers.forEach(({ file, inset }) => {
      const layer = document.createElement("span");
      layer.style.inset = inset;
      layer.innerHTML = `<img src="${M}${file}" alt="" />`;
      box.append(layer);
    });
    return box;
  }

  const MENU = [
    { title: "Your Career", color: "#f57d34", icon: "section-career.png", items: [
      ["Growth Track", whole("growth-track.svg"), "growth", "growth-track-focus.svg"],
      ["Domain Affinity", whole("domain-affinity.svg"), "domain-affinity"],
      ["Industry Affinity", whole("industry-affinity.svg"), "industry-affinity"],
    ] },
    { title: "Your Work", color: "#eea638", icon: "section-work.png", items: [
      ["Desk", [
        { file: "desk-g1.svg", inset: "40.9% 64.27% 12.2% 0" },
        { file: "desk-g2.svg", inset: "12.2% 0 49.4% 24.35%" },
        { file: "desk-g3.svg", inset: "56.54% 0 12.2% 24.35%" },
        { file: "desk-g4.svg", inset: "18.92% 62.54% 50.64% 7.02%" },
      ], "desk", ["desk-g1-focus.svg", "desk-g2-focus.svg", "desk-g3-focus.svg", "desk-g4-focus.svg"]],
      ["Session Logs", [{ file: "session-logs.svg", inset: "5.21%" }], "session-logs"],
    ] },
    { title: "Your Impact Journal", color: "#6775f5", icon: "section-impact.svg", items: [
      ["Achievements", [{ file: "achievements.svg", inset: "0 6.05%" }], "achievements"],
      ["Competencies", whole("competencies-idle.svg"), "competencies", "competencies-focus.svg"],
      ["Proof", whole("proof.svg"), "proof"],
      ["Journal", [{ file: "journal.svg", inset: "6.11% 5.97% 6.41% 12.76%" }], "journal", "journal-focus.svg"],
    ] },
    { title: "Your Unique Identity", color: "#4ca6e5", icon: "section-identity.png", items: [
      ["Profile", whole("profile.svg"), "profile"],
      ["Assessments", [{ file: "assessments-idle.svg", inset: "5.21% 13.54% 5.22% 13.54%" }], "assessments", "assessments-focus.svg"],
    ] },
    { title: "Your Knowledge Space", color: "#c44eb9", icon: "section-knowledge.png", items: [
      ["Daily Gains", whole("daily-gains.svg"), "daily-gains"],
      ["Exchange", whole("exchange.svg"), "exchange"],
    ] },
    { title: "Your Network", color: "#0497ae", icon: "section-network.svg", items: [
      ["Rolodex", whole("rolodex.svg"), "rolodex"],
      ["Profile", whole("network-profile.svg"), "network-profile"],
    ] },
  ];

  const menuEl = document.getElementById("menu-sections");
  MENU.forEach((section) => {
    const sec = document.createElement("div");
    sec.className = "menu-section";
    sec.innerHTML = `
      <p class="menu-section__title" style="color:${section.color}">
        <img src="${M}${section.icon}" alt="" /><span></span>
      </p>
      <div class="menu-section__items"></div>`;
    sec.querySelector(".menu-section__title span").textContent = section.title;
    section.items.forEach(([label, layers, route, focusIcon]) => {
      // Every item navigates; sections not built yet open a coming-soon page.
      const item = document.createElement(route ? "a" : "button");
      item.className = "menu-item";
      if (route) {
        item.href = "#" + route;
        item.dataset.route = route;
        // Figma ships dark icon layers for the focused state and grey ones otherwise.
        item.dataset.iconIdle = layers.map((l) => M + l.file).join("|");
        // Items without a dark asset reuse the grey one and are darkened in CSS.
        item.dataset.iconFocus = [].concat(focusIcon || layers.map((l) => l.file)).map((f) => M + f).join("|");
        if (!focusIcon) item.classList.add("menu-item--tint");
      } else {
        item.type = "button";
      }
      const text = document.createElement("span");
      text.textContent = label;
      item.append(iconEl("menu-item__icon", layers), text);
      sec.querySelector(".menu-section__items").append(item);
    });
    menuEl.append(sec);
  });

  // Inbox glyph: 4 layers, mirrored horizontally in Figma.
  const inbox = iconEl("inbox__layers", [
    { file: "inbox-g1.svg", inset: "14.52% 36.13% 66.59% 44.89%" },
    { file: "inbox-g2.svg", inset: "42.24% 54.24% 33.76% 28.59%" },
    { file: "inbox-g3.svg", inset: "30.84% 8.32% 55.11% 75.74%" },
    { file: "inbox-g4.svg", inset: "0" },
  ]);
  document.getElementById("inbox-glyph").append(inbox);

  // ---------- Assessments ----------
  const A = "assets/assessments/";
  const ASSESSMENTS = [
    ["Interest & Cognitive Style", [
      ["Occupational Synergy", "To help understand your interest profile and the type of work you like", "occupational-synergy.png", "to bottom, #fcdaeb, #f9e3fc"],
      ["OCEAN", "To help you recognize your strengths and weaknesses and personality.", "ocean.png", "to top, #fdf7e9, #fdeecd"],
    ]],
    ["Motivational Architecture", [
      ["Terminal & Instrumental Values", "To guide your decision-making, helping you align your actions with your core beliefs and aspirations", "terminal-instrumental-values.png", "to top, #c3cef4, #d8d7f9"],
      ["Work Values", "Align personal beliefs with professional aspirations to make meaningful work choices.", "work-values.png", "to top, #fec5a4, #ffe99a", "contain"],
      ["Career Anchors", "To identify your core values and aligning career choices with personal aspirations", "career-anchors.png", "to top, #c6f8f9, #a0d3f8"],
    ]],
    ["Work Style", [
      ["Work Environment Preferences", "To understand your work personality and culture preferences", "work-environment-preferences.png", "to top, #c2f2bd, #d8f3d7"],
      ["Workplace Agility", "To understand your adaptability to changes and challenges in dynamic work environments.", "workplace-agility.png", "to top, #fdf7e9, #fcdccc"],
    ]],
  ];

  const listEl = document.getElementById("assessments");
  ASSESSMENTS.forEach(([groupTitle, cards]) => {
    const group = document.createElement("section");
    group.className = "assessment-group";
    group.innerHTML = `<h2 class="assessment-group__title"></h2><div class="assessment-grid"></div>`;
    group.querySelector("h2").textContent = groupTitle;
    cards.forEach(([title, desc, img, gradient, fit = "cover"]) => {
      const card = document.createElement("article");
      card.className = "assessment";
      card.innerHTML = `
        <div class="assessment__body">
          <div class="assessment__thumb" style="background:linear-gradient(${gradient})">
            <img src="${A}${img}" alt="" style="object-fit:${fit}" />
          </div>
          <div class="assessment__text"><h3></h3><p></p></div>
        </div>
        <div class="assessment__footer">
          <span class="assessment__time">3-4 min</span>
          <button class="assessment__start" type="button" data-assess="${title}">Start Now <img src="assets/icons/play-circle.svg" alt="" /></button>
        </div>`;
      card.querySelector("h3").textContent = title;
      card.querySelector("p").textContent = desc;
      group.querySelector(".assessment-grid").append(card);
    });
    listEl.append(group);
  });
})();
