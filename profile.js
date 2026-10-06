// Profile (Figma 1007:33866). Built from what the person has done in the app where that exists
// (roles, achievements, competencies); assessment-driven sections show the design's sample results.
const PF = "assets/profile/";

state.profileOpen = null; // which "area of interest" is expanded (domain name), null = first

// Sample results — these assessments aren't built yet.
const VALUES = [
  ["Embrace equality", "For self-improvement", "value-1.svg"],
  ["Prioritize personal growth", "For Empathetic-growth", "value-2.svg"],
  ["Embrace diversity", "For Inclusive-community", "value-3.svg"],
  ["Pursue knowledge", "For Resilient-growth", "value-4.svg"],
  ["Continuously learn and improve", "For Expert-leadership", null], // drawn from nested squares in the design
  ["Encourage open communication", "For Harmonious-coexistence", "value-5.svg"],
  ["Promote self-expression", "For Balanced-liberty", "value-6.svg"],
];

const pfHead = (kicker, title, help = false, extra = "") => `
  <div class="pf-head"><div><p class="pf-kicker">${kicker}</p><h2>${title}</h2>${extra}</div>${help ? `<span class="pf-help">?</span>` : ""}</div>`;

// 5-bar signal meter used on skill tags
const levelBars = (level, cls = "") => `<span class="bars ${cls}" role="img" aria-label="${level ? `Level ${level} of 5` : "Not rated"}">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= level ? "is-on" : ""}"></i>`).join("")}</span>`;

// A skill's level: the person's own rating if they gave one, otherwise how often it shows up in achievements.
const skillLevel = (name) => techSkill(name)?.level || Math.min(5, skillUses(name));

const pfEmpty = (text, href, label) => `<p class="pf-empty">${text} <a href="${href}">${label}</a></p>`;

// ---------- Sections ----------
function pfIdentity() {
  const about = document.getElementById("about-form");
  // College, course, year of graduation
  const sub = [about.college.value, about.field.value.trim(), about.year.value].filter(Boolean).join(", ");
  return `
    <header class="pf-id">
      <div class="pf-id__top"><img src="${esc(state.avatar)}" alt="" /><div><h1>${esc(displayName())}</h1>${sub ? `<p>${esc(sub)}</p>` : ""}</div></div>
      ${state.roles.size ? `<div class="pf-id__roles">${[...state.roles].map((r) => `<span>${esc(roleName(r))}</span>`).join("")}</div>` : ""}
    </header>`;
}

// Areas of interest = the domains behind the roles picked at signup.
function pfAreas() {
  const mine = myDomains(); // competencies.js
  const domains = mine.length ? mine : ASSET_DOMAINS.slice(0, 3);
  const open = state.profileOpen ?? domains[0];
  const item = (title, desc, tags = "") => `<div class="pf-item"><h4>${esc(title)}</h4><p>${esc(desc)}</p>${tags}</div>`;
  const block = (icon, bg, title, items) => `
    <div class="pf-sub"><div class="pf-sub__head"><span class="pf-atom" style="background:${bg}"><img src="${PF}${icon}" alt="" /></span><h3>${title}</h3><span class="pf-help pf-help--soft">?</span></div>
      <div>${items}</div></div>`;
  return `
    <section class="pf-section">
      ${pfHead("Areas of Interest", "Where I want to work", true)}
      <div class="pf-areas">${domains.map((dom, i) => {
        const done = state.achievements.filter((a) => assetById(a.assetId).domain === dom);
        const built = new Set(done.map((a) => assetById(a.assetId).deliverable));
        const keen = deliverablesFor(dom).filter((d) => !built.has(d.name)).slice(0, 2);
        const isOpen = open === dom;
        return `
          <div class="pf-area">
            <button type="button" class="pf-area__head" data-pf-area="${esc(dom)}" aria-expanded="${isOpen}">
              <img class="pf-area__thumb" src="${PF}area-${(i % 3) + 1}.png" alt="" /><b>${esc(dom)}</b>
              <span class="pf-count">${done.length + keen.length}</span>
              ${done.length ? `<span class="pf-atom" style="background:#fdf7e9"><img src="${PF}atom-yellow.svg" alt="" /></span>` : ""}
              <img class="pf-area__chev" src="${PF}expand-${isOpen ? "less" : "more"}.svg" alt="" />
            </button>
            ${isOpen ? `
              ${done.length ? block("atom-yellow.svg", "#fdf7e9", "I have experience in", done.map((a) => {
                const asset = assetById(a.assetId);
                const skills = [...a.technical, ...a.tools];
                return item(asset.deliverable, achievementSummary(a, asset)[0], skills.length ? `<div class="pf-tags">${skills.map((s) => `<span class="pf-tag">${esc(s)}${levelBars(skillLevel(s), "bars--sm")}</span>`).join("")}</div>` : "");
              }).join("")) : ""}
              ${keen.length ? block("atom-pink.svg", "#fdf2ff", "I’m keen on exploring", keen.map((d) => item(d.name, d.desc)).join("")) : ""}` : ""}
          </div>`;
      }).join("")}</div>
    </section>`;
}

function pfShowcase() {
  const domains = [...new Set(state.achievements.map((a) => assetById(a.assetId).domain))];
  return `
    <section class="pf-section">
      ${pfHead("Work Showcase", "My Achievements", false, domains.length ? `<p class="pf-dots">${domains.map(esc).join("<i>•</i>")}</p>` : "")}
      ${state.achievements.length
        ? `<div class="pf-cards">${state.achievements.map(achievementCard).join("")}</div>`
        : `<div class="pf-showcase-empty">
            <div class="pf-showcase-empty__art" aria-hidden="true"><span><img src="${PF}showcase-cards.png" alt="" /></span><span><img src="${PF}showcase-phone.png" alt="" /></span></div>
            <div class="pf-showcase-empty__text">
              <div><p>Showcase your work experience in the form of beautiful achievement cards.</p><p>&nbsp;</p>
                <p>We help you break down your work into molecular constructs so you can clearly communicate your experience to potential recruiters.</p></div>
              <button type="button" class="btn btn--primary im-add" data-im="new-achievement"><img src="${IM}add-circle-light.svg" alt="" />Add Now</button>
            </div>
          </div>`}
    </section>`;
}

function pfSkills() {
  // Technical: everything rated in Competencies plus whatever the achievements used.
  const tech = [...new Set([...state.techSkills.map((s) => s.name), ...state.achievements.flatMap((a) => [...a.technical, ...a.tools])])]
    .sort((a, b) => skillLevel(b) - skillLevel(a));
  // Transferable: highest comfort first, then most used; top six.
  const all = TRANSFERABLE.flatMap(([, skills], ci) => skills.map((s) => ({ name: s, icon: ci + 1, score: (state.tSkills[s] || 0) * 10 + skillUses(s) })));
  const top = all.filter((s) => s.score).sort((a, b) => b.score - a.score).slice(0, 6);
  return `
    <div class="pf-pair">
      <section class="pf-section">
        ${pfHead("Measure of Neo-generalism", "My Key Technical Skills", true)}
        ${tech.length ? `<div class="pf-body"><div class="pf-chips">${tech.map((s) => `<span class="pf-chip pf-chip--tech">${esc(s)}${levelBars(skillLevel(s))}</span>`).join("")}</div>
          <a class="pf-link" href="#competencies" data-pf-tab="technical">View Details</a></div>`
        : pfEmpty("No technical skills added yet.", "#competencies", "Add your skills")}
      </section>
      <section class="pf-section">
        ${pfHead("Measure of Human Centricity", "Most used Transferable Skills", true)}
        ${top.length ? `<div class="pf-body"><div class="pf-chips">${top.map((s) => `<span class="pf-chip"><img src="${PF}tskill-${s.icon}.png" alt="" />${esc(s.name)}</span>`).join("")}</div>
          <a class="pf-link" href="#competencies" data-pf-tab="transferable">View T-Skill Usage</a></div>`
        : pfEmpty("No transferable skills rated yet.", "#competencies", "Rate your skills")}
      </section>
    </div>`;
}

// Real results from the Occupational Synergy assessment (riasec.js); a prompt to take it until then.
function pfSynergy() {
  const result = state.riasec?.result;
  if (!result) {
    return `
      <section class="pf-section">
        ${pfHead("interest profile", "My Occupational Synergy")}
        ${pfEmpty("Take the Occupational Synergy assessment to see your interest profile here.", "#riasec", "Start the assessment")}
      </section>`;
  }
  const combo = RIASEC_COMBOS[result.code];
  return `
    <section class="pf-section">
      ${pfHead("interest profile", "My Occupational Synergy")}
      <div class="pf-syn">
        <div class="pf-syn__bars">${RIASEC_ORDER.map((t) => `
          <div class="pf-bar"><p><span>${RIASEC_TYPES[t].name} : <b>${result.scores[t]}%</b></span><button type="button" class="pf-help pf-help--lg" data-pf-type="${t}" aria-label="About the ${RIASEC_TYPES[t].name} type">?</button></p><div><span style="width:${result.scores[t]}%"></span></div></div>`).join("")}</div>
        <div class="pf-note"><h3><img src="${PF}insights.svg" alt="" />What does this mean?</h3><p><b>${esc(combo.title)} (${result.code}).</b> ${esc(combo.overview)}</p>
          <a class="pf-link pf-note__link" href="#riasec/result">View full results</a></div>
      </div>
    </section>`;
}

// Answers from the Work Environment Preferences assessment (wep.js); a prompt to take it until then.
function pfPrefs() {
  const result = state.wep?.result;
  const head = pfHead("worker profile", "Work Environment Preferences");
  if (!result) {
    return `<section class="pf-section">${head}${pfEmpty("Take the Work Environment Preferences assessment to fill this in.", "#wep", "Start the assessment")}</section>`;
  }
  return `
    <section class="pf-section">
      ${head}
      <div class="pf-prefs">${WEP_GROUPS.map((group) => `
        <div><h3>${group}</h3><div class="pf-prefs__row">${WEP_QUESTIONS.filter((q) => q[1] === group).map(([key, , label, icon]) => `
          <div class="pf-pref" title="${esc(wepDesc(key, result.answers[key]))}"><p><img src="${icon}" alt="" />${label}</p><b>${esc(result.answers[key])}</b></div>`).join("")}</div></div>`).join("")}
      </div>
    </section>`;
}

const pfValues = () => `
  <section class="pf-section">
    ${pfHead("What drives me", "Values I strive to Uphold")}
    <div class="pf-values">${VALUES.map(([title, sub, icon]) => `
      <div class="pf-value">${icon ? `<img src="${PF}${icon}" alt="" />` : `<span class="pf-squares" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`}
        <div><h3>${title}</h3><p>${sub}</p></div></div>`).join("")}</div>
  </section>`;

// ---------- Page ----------
const profilePage = document.getElementById("profile-page");

function renderProfile() {
  closeAllOverlays();
  profilePage.innerHTML = `<div class="pf">${pfIdentity()}${pfAreas()}${pfShowcase()}${pfSkills()}${pfSynergy()}${pfPrefs()}${pfValues()}</div>`;
}

profilePage.addEventListener("click", (e) => {
  const area = e.target.closest("[data-pf-area]");
  if (area) {
    const y = window.scrollY;
    state.profileOpen = area.getAttribute("aria-expanded") === "true" ? "" : area.dataset.pfArea;
    renderProfile();
    return window.scrollTo(0, y);
  }
  const type = e.target.closest("[data-pf-type]");
  if (type) return openTypeDrawer(type.dataset.pfType); // riasec.js
  const tab = e.target.closest("[data-pf-tab]");
  if (tab) state.compTab = tab.dataset.pfTab; // land on the matching Competencies tab
});
