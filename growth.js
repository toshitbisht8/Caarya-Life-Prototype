// Growth Track (Figma section 843:17179). Front-end only. Real sample work orders live in
// work-orders.js; every other id falls back to the placeholder copy below (via woContent).

const G = "assets/growth/";
const WO_COST = 100;
const RECOMMENDED_COUNT = 20;
const EXPLORE_COUNT = 5;

Object.assign(state, { coins: 2500, coinsMax: 5000 });
state.growth = {
  activeRole: null, // role id ("Domain::Role"), the tab selected on Growth Track home
  tracks: {}, // role id -> work order ids added to that role's growth track
  desk: new Set(), // work order ids added to the desk
  recIndex: 0, // position in the recommended stack
  roleFilter: true, // "Role Name ×" chip on the recommended screen
  exploreTab: "studio",
  woTab: "overview",
  from: "explore", // screen the details page was opened from (for the back link)
};

// ---------- Placeholder content (as in Figma) ----------
const WORK_ORDER = {
  service: "Business Service for ‘Inititative Name’",
  title: "Work order title to go here in a line or two",
  desc: "2-3 line work order description in plain language truncated after around 3 lines ......  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  tags: ["Industry Name", "Startup Stage/level/type", "Business Service Category", "18-20 hrs (recommended time)"],
  vcs: ["VC Name 1", "VC Name 2", "VC Name 3"],
  moreVcs: 6,
  resume: "“Reported and wrote an original campus feature for Tapri Talk — two field visits, three source interviews, fact-checked and published with original photography.”",
  progression: [["Contribute to at least 2 work orders (1/2 Completed)", "+1"], ["Submit at least 3 VC artefacts at L1 (1/3)", "+2"]],
};
const DETAILS = {
  service: "Business Service title for ‘Initiative Name’",
  title: "Work order title to go here in a line or two max",
  tags: ["Industry", "Startup Stage/Level/type", "Business Service Category", "18-20 hrs (recommended time)"],
  overview: [
    ["The asset you end with (deliverable)", "A published campus feature — written, photographed and documented as a case study you own."],
    ["The pieces you collect", "9 constructs you can apply, each leaving its own artefact."],
    ["The kind of work it is", "Hands-on reporting — sitting somewhere long enough to see it, talking to strangers, and writing."],
  ],
  brief: "A paragraph about what actually needs to be done in detail, as stated by the client or the person posting the work order, parsed and laid down in detail......  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  capabilities: [
    "Capability 1 in descriptive manner ........ lorem ipsum dolor sit amet, consectetur",
    "Capability 2 in descriptive manner ........ lorem ipsum dolor sit amet, consectetur",
    "Capability 2 in descriptive manner ........ lorem ipsum dolor sit amet, consectetur",
  ],
  technical: ["Technical Skill Name", "Technical Skill Name", "Technical Skill Name"],
  transferable: ["Transferable Skill Name", "Transferable Skill Name", "Transferable Skill Name", "Transferable Skill Name"],
  artefacts: 7,
  why: "A paragraph about how this work contributes to the company......  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  about: "A paragraph about the company goes here: what it does, what the project is about and what the build is about......  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  vcCount: 7,
};
const LOREM = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const UNLOCK_PAID = [["Contribute to at least 2 work orders", "0/2 done"], ["Submit at least 3 VC Artefacts", "0/3 done"], ["Submit at least 3 VC Artefacts", "0/3 done"]];
// Paid Gigs / Jobs copy mirrors the designed Unpaid Gigs state; their unlock levels are placeholders.
const LOCKED_TABS = {
  unpaid: ["Unpaid Gigs", "Gain your first real work experience, working with real companies (some explanation about what this is)", "Unpaid Gigs unlock once you reach C3 in this role"],
  paid: ["Paid Gigs", "Get paid for real work with real companies (some explanation about what this is)", "Paid Gigs unlock once you reach C4 in this role"],
  jobs: ["Jobs", "Land a role with a company you've already worked with (some explanation about what this is)", "Jobs unlock once you reach C5 in this role"],
};
// Career journey stages. New users start every role at C1; Shift+C (mentor-sim.js) cycles C1-C5 for testing.
const CAREER_STAGES = [["Exploration", "Exploring"], ["Alignment", "Aligning"], ["Activation", "Activating"], ["Enhancement", "Enhancing"], ["Advancement", "Advancing"]];
state.careerStage = 1;
const stageRange = () => (state.careerStage < 5 ? `C${state.careerStage}-C${state.careerStage + 1}` : "C5");
const roleStatus = () => ({ stage: `Currently ${CAREER_STAGES[state.careerStage - 1][1]}`, level: `C${state.careerStage}`, toNext: 2 });

// ---------- Helpers ----------
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const roleName = (id) => id.split("::")[1];
const myRoles = () => [...state.roles];
function activeRole() {
  const roles = myRoles();
  if (!roles.includes(state.growth.activeRole)) state.growth.activeRole = roles[0] || null;
  return state.growth.activeRole;
}
const trackFor = (role) => (state.growth.tracks[role] ||= []);
const isTracked = (id) => trackFor(activeRole()).includes(id);

const backLink = (label, route) =>
  `<a class="gt-back" href="#${route}"><img src="${G}arrow-back.svg" alt="" /><span>${label}</span></a>`;

const starIcon = (size, file = "resume-star.svg") =>
  `<span class="gt-star" style="width:${size}px;height:${size}px"><span style="inset:4.05% 1.76%"><img src="${G}${file}" alt="" /></span></span>`;

function roleIdentity(id, iconSize = 40) {
  const s = roleStatus(id);
  return `
    <span class="role-id">
      <span class="role-id__icon" style="width:${iconSize}px;height:${iconSize}px"><img src="${G}role-icon.png" alt="" /></span>
      <span class="role-id__text">
        <span class="role-id__name">${esc(roleName(id))}</span>
        <span class="role-id__status">${s.stage} <span class="level">${s.level}</span></span>
      </span>
    </span>`;
}

const unlockProgress = () => `
  <div class="unlock">
    <p class="unlock__label">To Unlock Paid Work</p>
    <div class="unlock__items">
      ${unlockItems("growth").map(([t, d]) => `
        <div class="unlock__item">
          <img src="${G}progress-pending.png" alt="" />
          <span><b>${t}</b><span>${d}</span></span>
        </div>`).join("")}
    </div>
  </div>`;

function filterChips({ role = false } = {}) {
  const chip = (label, extra = "") =>
    `<button type="button" class="gt-filter" ${extra}>${label}<img src="${G}dropdown.svg" alt="" /></button>`;
  const g = state.growth;
  const roleChip = role
    ? `<span class="gt-filter-wrap">
         ${chip(`${g.roleFilter ? '<span class="gt-filter__count">1</span>' : ""}<span>Role</span>`, 'data-action="role-menu" aria-haspopup="menu"')}
         <span class="gt-menu" role="menu" hidden>
           ${myRoles().map((r) => `<button type="button" role="menuitem" data-action="pick-role-filter" data-role="${esc(r)}">${esc(roleName(r))}</button>`).join("")}
         </span>
       </span>`
    : "";
  const applied = role && g.roleFilter
    ? `<span class="gt-chip">${esc(roleName(activeRole()))}<button type="button" data-action="remove-role-filter" aria-label="Remove role filter"><img src="${G}chip-close.svg" alt="" /></button></span>`
    : "";
  return `<div class="gt-filters">${roleChip}${["Industry", "Initiative", "Startup Stage", "Business Service"].map((l) => chip(`<span>${l}</span>`)).join("")}${applied}</div>`;
}

// ---------- Work order card (recommended / explore / on growth track) ----------
function woCard(id, variant) {
  const w = woContent(id); // work-orders.js
  const vcNames = Object.values(w.vcs).map((v) => v.name);
  const resume = `
    <div class="wo-block wo-block--resume">
      <p class="wo-block__head">${starIcon(16)}What you can add to your resume</p>
      <p class="wo-block__text">${w.resume}</p>
    </div>`;
  const progression = `
    <div class="wo-block wo-block--progress">
      <p class="wo-block__head"><img src="${G}career-progression.png" alt="" />Career Progression</p>
      ${w.progression.map(([t, pts]) => `<p class="wo-goal"><img src="${G}checkbox.svg" alt="" /><span>${esc(t)} <b>${esc(pts)}</b></span></p>`).join("")}
    </div>`;
  const vcs = `
    <p class="wo__vcs"><b>Value Constructs:</b>
      <span>${vcNames.slice(0, 3).map(esc).join('<span class="dot">•</span>')}${vcNames.length > 3 ? `<u>+${vcNames.length - 3} more</u>` : ""}</span>
    </p>`;
  const details = `<button type="button" class="gt-action gt-action--orange" data-action="wo-details" data-id="${id}">Details <img src="${G}chevron-orange.svg" alt="" /></button>`;

  let body = "", footer = "";
  if (variant === "track") {
    const onDesk = state.growth.desk.has(id);
    body = `
      ${onDesk ? `<div class="wo__highlights">${resume}${progression}</div>` : ""}
      <div class="wo__metrics">
        <p><span>Artefacts Submitted:</span><b>0/0 <i class="help" title="Artefacts you've submitted out of those you can collect">?</i></b></p>
        <p><span>Deliverable Submitted:</span><b>No</b></p>
        <p><span>Deliverable Rating:</span><b>N/A</b></p>
        <p><span>Session Logs</span><b>00</b></p>
      </div>`;
    footer = `
      <div class="wo__footer wo__footer--end">
        <button type="button" class="gt-action" data-action="wo-details" data-id="${id}">Details</button>
        ${onDesk
          ? `<span class="gt-action gt-action--done"><img src="${G}add-circle.svg" alt="" />On Desk</span>`
          : `<button type="button" class="gt-action gt-action--orange" data-action="add-to-desk" data-id="${id}"><img src="${G}add-circle.svg" alt="" />Add to Desk</button>`}
      </div>`;
  } else {
    body = `${vcs}${resume}${progression}`;
    footer = variant === "rec"
      ? `<div class="wo__footer"><button type="button" class="wo__skip" data-action="rec-skip" aria-label="Show the next work order"><img src="${G}close-light.svg" alt="" /></button>${details}</div>`
      : `<div class="wo__footer wo__footer--end">${details}</div>`;
  }
  return `
    <article class="wo wo--${variant}${variant === "track" && state.growth.justAdded === id ? " wo--new" : ""}" data-wo="${id}">
      <div class="wo__head">
        <p class="wo__service">${esc(w.service)}</p>
        <h3 class="wo__title">${esc(w.title)}</h3>
        <p class="wo__desc">${esc(w.desc)}</p>
      </div>
      <div class="wo__tags">${w.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      ${body}
      ${footer}
    </article>`;
}

// ---------- Pages ----------
function pageHome() {
  const role = activeRole();
  const ids = trackFor(role);
  const tabs = myRoles().map((r) => `
    <button type="button" class="role-tab${r === role ? " is-active" : ""}" data-action="role-tab" data-role="${esc(r)}" aria-pressed="${r === role}">
      ${roleIdentity(r)}
    </button>`).join("");
  const exploreLink = `<a class="gt-link" href="#explore"><img src="${G}work-dark.svg" alt="" />Explore Work</a>`;
  const list = ids.length
    ? `<div class="gt-search"><img src="${G}search.svg" alt="" /><input type="search" placeholder="Search for work orders" aria-label="Search for work orders" data-role-search /></div>
       ${filterChips()}
       <div class="gt-list">${ids.map((id) => woCard(id, "track")).join("")}<p class="gt-list__none" hidden>No work orders match your search.</p></div>`
    : `<div class="gt-empty">
         <img src="${G}empty-work.png" alt="" />
         <p>You have not picked any work for this role yet</p>
         <a class="gt-empty__btn" href="#explore"><img src="${G}work-light.svg" alt="" />Explore Work</a>
       </div>`;
  return `
    <div class="page-header">
      <h1 class="page-header__title">Growth track</h1>
      <p class="page-header__sub">Choose how you want your career to grow here</p>
    </div>
    <section class="gt-panel gt-panel--home">
      <div class="role-tabs">
        <div class="role-tabs__list">${tabs}</div>
        <button type="button" class="gt-link" data-action="manage-roles"><img src="${G}settings.svg" alt="" />Manage Roles</button>
      </div>
      ${unlockProgress()}
      <div class="gt-section">
        <div class="gt-section__head"><h2>My Work Orders</h2>${exploreLink}</div>
        ${list}
      </div>
    </section>`;
}

// The role's real work orders come first, then placeholders fill the stack / grid to the designed size.
function workOrderIds(count) {
  const real = catalogFor(activeRole()); // work-orders.js
  return [...real, ...Array.from({ length: Math.max(0, count - real.length) }, (_, n) => n + 1)];
}

function pageRecommended() {
  const ids = workOrderIds(RECOMMENDED_COUNT);
  const i = state.growth.recIndex % ids.length;
  return `
    <div class="gt-head">${backLink("Back to Growth Track", "growth")}<h1 class="gt-title">Exploring Work</h1></div>
    <section class="gt-panel gt-panel--rec">
      <div class="talent">
        <div class="talent__main">
          <p class="talent__head">
            <span class="talent__icon">${starIcon(14, "talent-star.svg")}</span>
            <span class="talent__name">Talent Manager</span>
            <span class="boost"><img src="${G}boost.svg" alt="" />2 Boosts Available</span>
          </p>
          <div class="bubble">
            <span class="bubble__beak"><img src="${G}tooltip-beak.svg" alt="" /></span>
            <p class="bubble__text">Here are my recommendations based on your goals</p>
          </div>
        </div>
        <button type="button" class="gt-link" data-action="explore-all">Explore all Work</button>
      </div>
      ${filterChips({ role: true })}
      <div class="rec">
        <p class="rec__count">${i + 1}/${ids.length}</p>
        ${woCard(ids[i], "rec")}
      </div>
    </section>`;
}

function tabs(items, active, action) {
  return `<div class="gt-tabs" role="tablist">${items.map(([key, label, locked]) => `
    <button type="button" role="tab" class="gt-tab${key === active ? " is-active" : ""}${locked ? " is-locked" : ""}" data-action="${action}" data-tab="${key}" aria-selected="${key === active}">
      ${locked ? `<img src="${G}${key === active ? "lock-orange" : "lock-grey"}.svg" alt="" />` : ""}${label}
    </button>`).join("")}</div>`;
}

function pageExploreAll() {
  const role = activeRole();
  const tab = state.growth.exploreTab;
  const content = tab === "studio"
    ? `${filterChips()}<div class="gt-grid">${workOrderIds(EXPLORE_COUNT).map((id) => woCard(id, "explore")).join("")}</div>`
    : (([, text, unlock]) => `
        <div class="locked">
          <span class="locked__icon"><span style="inset:9.31% 0"><img src="${G}briefcase.svg" alt="" /></span></span>
          <p class="locked__text">${text}</p>
          <p class="locked__pill"><img src="${G}lock-small.svg" alt="" />${unlock}</p>
        </div>`)(LOCKED_TABS[tab]);
  return `
    <div class="gt-head">${backLink("Back to Growth Track", "growth")}<h1 class="gt-title">Exploring Work</h1></div>
    <section class="gt-panel">
      <div class="gt-user">
        <div class="gt-user__role">
          ${roleIdentity(role, 64)}
          <button type="button" class="switch-role" data-action="switch-role">Switch Role <img src="${G}switch.svg" alt="" /></button>
        </div>
        ${unlockProgress()}
      </div>
      ${tabs([["studio", "Experience Studio"], ["unpaid", "Unpaid Gigs", true], ["paid", "Paid Gigs", true], ["jobs", "Jobs", true]], tab, "explore-tab")}
      <p class="gt-intro">A paragraph about learning work... lorem ipsum dolor sit</p>
      ${content}
    </section>`;
}

// Brand manager's blocks. Early stages (C1-C2) lead with the pieces you collect, later ones with the resume line.
function brandBlocks(d) {
  const pieces = `<div class="voice__block"><p class="kicker">The pieces you collect along the way</p>
          <p class="pills">${d.artefacts.map((a) => `<span class="pill">${esc(a)}</span>`).join("")}</p>
        </div>`;
  const asset = `<div class="voice__block"><p class="kicker">The asset you’ll have at the end</p><p class="voice__asset">${esc(d.assetLine)}</p></div>`;
  const resume = `<div class="resume-box"><p class="kicker">What you can add to your resume</p><p>${esc(d.resume)}</p></div>`;
  return d.real && state.careerStage >= 3 ? resume + asset + pieces : pieces + asset + resume;
}

function pageDetails(id) {
  const d = woContent(id); // work-orders.js
  const g = state.growth;
  const added = isTracked(id);
  const broke = state.coins < WO_COST;
  const addBtn = added
    ? `<span class="add-track is-done">Added to growth track</span>`
    : `<button type="button" class="add-track" data-action="add-to-track" data-id="${id}" ${broke ? "disabled" : ""}>
         Add to growth track <span class="add-track__cost"><img src="${G}coins-light.svg" alt="" />${WO_COST}</span>
       </button>`;
  const back = g.from === "growth" ? backLink("Back to Growth Track", "growth") : backLink("Back to Explore Work", g.from);
  let body = "";
  if (g.woTab === "overview") {
    body = `
      <p class="wo-brief">${esc(d.brief)}</p>
      <div class="wo-produces"><p class="kicker">What this produces:</p><b>${esc(d.produces[0])}</b><p>${esc(d.produces[1])}</p></div>
      <section class="voice voice--growth">
        <div class="voice__head">
          <p class="voice__from"><span class="voice__avatar"><img src="${G}growth-manager.png" alt="" /></span>From your personal growth manager:</p>
          <h3 class="voice__title">Here’s how you can grow</h3>
        </div>
        <div class="voice__block"><p class="kicker">Capabilities You'll Build</p>
          ${d.capabilities.map(([what, name]) => `<p class="capability"><span>${esc(what)}</span><span class="tag">${esc(name)}</span></p>`).join("")}
        </div>
        <div class="voice__block"><p class="kicker">Skills you’ll sharpen</p>
          <p class="pills">${d.technical.map((s) => `<span class="pill pill--tech">${esc(s)}</span>`).join("")}${d.transferable.map((s) => `<span class="pill pill--transfer">${esc(s)}</span>`).join("")}</p>
        </div>
        <div class="voice__block"><p class="kicker">Career Progression (${stageRange()})</p>
          ${d.progression.map(([t, pts]) => `<p class="milestone"><b>${esc(pts)}</b><span>${esc(t)}</span></p>`).join("")}
        </div>
        ${d.grow ? `<div class="voice__block"><p class="kicker">Where it takes you next</p><p class="voice__asset">${esc(d.grow)}</p></div>` : ""}
      </section>
      <section class="voice voice--brand">
        <div class="voice__head">
          <p class="voice__from"><span class="voice__avatar voice__avatar--brand">${starIcon(18, "brand-star.svg")}</span>From your brand manager:</p>
          <h3 class="voice__title">Here’s what you’ll be able to show potential recruiters</h3>
        </div>
        ${brandBlocks(d)}
      </section>`;
  } else if (g.woTab === "vcs") {
    body = `
      <div class="vc-intro">
        <p>You’ll get to apply the following concepts while working on this</p>
        <p class="vc-intro__note">The more concepts you apply, the more proof you collect and the better the quality of your deliverables</p>
      </div>
      <div class="vc-list">${Object.entries(d.vcs).map(([k, v]) => `
        <div class="vc">
          <div class="vc__text"><b>${esc(v.name)}</b><p>${esc(v.desc)}</p><i>Leaves ‘${esc(v.leaves)}’</i></div>
          <button type="button" class="vc__judged" data-action="judged" data-vc="${k}">See how this is judged</button>
        </div>`).join("")}</div>`;
  } else {
    body = `
      <div class="bg-block"><p class="kicker">Why this work is needed</p><p>${esc(d.why)}</p></div>
      <div class="bg-block"><p class="kicker">About ‘${esc(d.venture)}’</p><p>${esc(d.about)}</p></div>`;
  }
  return `
    <div class="gt-head">${back}</div>
    <section class="gt-panel gt-panel--details">
      <div class="wo-header">
        <div class="wo-header__text">
          <p class="wo-header__service">${esc(d.service)}</p>
          <h1 class="wo-header__title">${esc(d.title)}</h1>
          <p class="wo-header__tags">${d.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</p>
        </div>
        <div class="wo-header__cta">${addBtn}${!added && broke ? `<p class="add-track__note">Not enough coins</p>` : ""}</div>
      </div>
      <div class="wo-overview">${d.overview.map(([h, t]) => `<div><b>${esc(h)}</b><p>${esc(t)}</p></div>`).join("")}</div>
      ${tabs([["overview", "Overview"], ["vcs", "Value Constructs"], ["background", "Background"]], g.woTab, "wo-tab")}
      ${body}
    </section>`;
}

// ---------- Render ----------
const page = document.getElementById("growth-page");

function renderGrowth(route, param) {
  closeAllOverlays();
  if (route === "growth") {
    page.innerHTML = pageHome();
    state.growth.justAdded = null;
  }
  else if (route === "explore") page.innerHTML = pageRecommended();
  else if (route === "explore-all") page.innerHTML = pageExploreAll();
  else if (route === "work-order") {
    const id = Number(param) || 1;
    if (state.growth.lastWo !== id) state.growth.woTab = "overview";
    state.growth.lastWo = id;
    page.innerHTML = pageDetails(id);
  }
}
const rerender = () => render();

page.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) {
    page.querySelectorAll(".gt-menu").forEach((m) => (m.hidden = true));
    return;
  }
  const g = state.growth;
  const id = Number(el.dataset.id);
  switch (el.dataset.action) {
    case "role-tab": g.activeRole = el.dataset.role; rerender(); break;
    case "manage-roles": openManageRoles(); break;
    case "rec-skip": g.recIndex++; rerender(); break;
    case "wo-details": g.from = currentBase(); go(`work-order/${id}`); break;
    case "explore-all": g.roleFilter ? go("explore-all") : openFocusModal(); break;
    case "remove-role-filter": g.roleFilter = false; rerender(); break;
    case "role-menu": el.nextElementSibling.hidden = !el.nextElementSibling.hidden; break;
    case "pick-role-filter": g.activeRole = el.dataset.role; g.roleFilter = true; g.recIndex = 0; rerender(); break;
    case "switch-role": openFocusModal(); break;
    case "explore-tab": g.exploreTab = el.dataset.tab; rerender(); break;
    case "wo-tab": g.woTab = el.dataset.tab; rerender(); break;
    case "add-to-track": {
      if (state.coins < WO_COST || isTracked(id)) return;
      state.coins -= WO_COST;
      const role = activeRole();
      trackFor(role).push(id);
      g.justAdded = id; // highlights the new card on Growth Track home
      go("growth");
      showToast("Work Order Added To Growth Track", {
        label: "Add to Desk", icon: "assets/session/add-white.svg", onClick: () => addToDesk(id, role),
      });
      break;
    }
    case "add-to-desk": addToDesk(id); break;
    case "judged": openJudgedDrawer(g.lastWo, Number(el.dataset.vc)); break;
  }
});

// Home search: filters the listed work orders by title / description.
page.addEventListener("input", (e) => {
  if (!e.target.matches("[data-role-search]")) return;
  const q = e.target.value.trim().toLowerCase();
  let shown = 0;
  page.querySelectorAll(".gt-list .wo").forEach((card) => {
    const hit = !q || card.textContent.toLowerCase().includes(q);
    card.hidden = !hit;
    shown += hit;
  });
  page.querySelector(".gt-list__none").hidden = shown > 0;
});

const currentBase = () => location.hash.slice(1).split("/")[0];

// ---------- Overlays (stackable: e.g. a modal opened from inside a drawer) ----------
const overlays = [];

// kind: "modal" (centred), "drawer" (right edge), "panel" (left edge), "loader" (not dismissible)
function openOverlay(html, kind, onClose) {
  const el = document.createElement("div");
  el.className = `overlay overlay--${kind}`;
  el.innerHTML = html;
  document.body.append(el);
  overlays.push({ el, kind, onClose });
  document.documentElement.classList.add("no-scroll");
  if (kind !== "loader") {
    el.addEventListener("click", (e) => {
      if (e.target === el || e.target.closest("[data-close]")) closeOverlay();
    });
  }
  (el.querySelector("[autofocus]") || el.querySelector("button, a, input"))?.focus();
  return el;
}

function closeOverlay() {
  const top = overlays.pop();
  if (!top) return;
  if (top.onClose) top.onClose();
  top.el.remove();
  if (!overlays.length) document.documentElement.classList.remove("no-scroll");
}
const closeAllOverlays = () => { while (overlays.length) closeOverlay(); };

document.addEventListener("keydown", (e) => {
  const top = overlays[overlays.length - 1];
  if (e.key === "Escape" && top && top.kind !== "loader") closeOverlay();
});

// ---------- Toast (Figma 1022:4293) ----------
let toastTimer;
function showToast(text, action) {
  document.querySelector(".toast")?.remove();
  clearTimeout(toastTimer);
  const t = document.createElement("div");
  t.className = "toast";
  t.setAttribute("role", "status");
  t.innerHTML = `<p class="toast__text"></p>${action ? `<span class="toast__divider"></span><button type="button" class="toast__action">${action.icon ? `<img src="${action.icon}" alt="" />` : ""}<span></span></button>` : ""}`;
  t.querySelector(".toast__text").textContent = text;
  if (action) {
    t.querySelector(".toast__action span").textContent = action.label;
    t.querySelector(".toast__action").addEventListener("click", () => { hideToast(); action.onClick(); });
  }
  document.body.append(t);
  toastTimer = setTimeout(hideToast, 6000);
}
function hideToast() {
  const t = document.querySelector(".toast");
  if (!t) return;
  t.classList.add("is-leaving");
  setTimeout(() => t.remove(), 250);
}

// ---------- "Adding to desk" loader, then the desk ----------
const DESK_LOADER_MS = 1600;
function addToDesk(id, role = activeRole()) {
  const g = state.growth;
  openOverlay(`
    <div class="desk-loader" role="status">
      <img class="desk-loader__logo" src="assets/logo-animation.jpg" alt="" />
      <p>Adding to desk</p>
    </div>`, "loader");
  setTimeout(() => {
    // The desk holds the one work order in focus; adding another replaces it.
    g.desk.clear();
    g.desk.add(id);
    g.deskRole = role;
    deskProgress(id); // desk.js — keeps any progress from an earlier stint on the desk
    closeAllOverlays();
    go("desk");
  }, DESK_LOADER_MS);
}

// "What do you want to focus on?" (843:16070)
function openFocusModal() {
  const cards = myRoles().map((r) => `
    <button type="button" class="focus-role" data-focus-role="${esc(r)}">
      ${roleIdentity(r)}
      <span class="focus-role__next"><b>${String(roleStatus(r).toNext).padStart(2, "0")}</b> more work orders to reach C2</span>
    </button>`).join("");
  const ov = openOverlay(`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="focus-title">
      <button type="button" class="modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      <h2 class="modal__title" id="focus-title">What do you want to focus on?</h2>
      <div class="focus-grid">
        ${cards}
        <button type="button" class="focus-manage" data-manage>
          <span class="focus-manage__icon"><img src="${G}edit.svg" alt="" /></span>
          <span>Manage Roles</span>
        </button>
      </div>
    </div>`, "modal");
  ov.querySelectorAll("[data-focus-role]").forEach((b) => b.addEventListener("click", () => {
    Object.assign(state.growth, { activeRole: b.dataset.focusRole, roleFilter: true, recIndex: 0 });
    closeOverlay();
    currentBase() === "explore-all" ? rerender() : go("explore-all");
  }));
  ov.querySelector("[data-manage]").addEventListener("click", openManageRoles);
}

// Manage Roles: reuses the signup role picker (same chips, same 3-role cap).
function openManageRoles() {
  closeOverlay();
  const rolesEl = document.getElementById("roles");
  const home = rolesEl.parentElement;
  const snapshot = new Set(state.roles);
  let saved = false;
  const ov = openOverlay(`
    <div class="modal modal--roles" role="dialog" aria-modal="true" aria-labelledby="roles-title">
      <button type="button" class="modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      <div class="heading">
        <p class="heading__title" id="roles-title">What kind of roles are you interested in exploring?</p>
        <p class="heading__sub">Choose all that excite you (select up to 3)</p>
      </div>
      <div class="modal__body" data-roles-slot></div>
      <p class="error" data-step-error></p>
      <div class="modal__footer">
        <button type="button" class="btn btn--secondary" data-close>Cancel</button>
        <button type="button" class="btn btn--primary" data-save>Save roles</button>
      </div>
    </div>`, "modal", () => {
      // Put the picker back where signup expects it; undo edits unless saved.
      if (!saved) {
        state.roles = snapshot;
        syncRoleChips();
      }
      home.append(rolesEl);
      if (saved) rerender();
    });
  ov.querySelector("[data-roles-slot]").append(rolesEl);
  ov.querySelector("[data-save]").addEventListener("click", () => {
    if (state.roles.size === 0) {
      ov.querySelector("[data-step-error]").textContent = "Pick at least one role.";
      return;
    }
    saved = true;
    closeOverlay();
  });
}

// Assessment bands for a construct, as "Level n" criteria (shared with the session's artefact drawer).
const critLevels = (vc) => vc.rubric.map(([label, desc], i) => `
  <div class="crit"><p class="crit__n">Level ${i + 1}</p><b>${esc(label)}</b><p>${esc(desc)}</p></div>`).join("");

// "How This Is Judged" drawer (1014:45708)
function openJudgedDrawer(woId, vcId) {
  const vc = vcInfo(woId, vcId); // work-orders.js
  const levels = critLevels(vc);
  const ov = openOverlay(`
    <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="judged-title">
      <header class="drawer__head">
        <button type="button" data-close aria-label="Close"><img src="${G}drawer-close.svg" alt="" /></button>
        <h2 id="judged-title">How This Is Judged</h2>
      </header>
      <div class="drawer__body">
        <div class="drawer__vc">
          <h3>${esc(vc.name)}${vc.bar ? `<span class="vc-card__badge">Mandatory L${vc.floorLevel}</span>` : ""}</h3>
          <p>${esc(vc.desc)}</p>
          <i>Leaves ‘${esc(vc.leaves)}’</i>
        </div>
        <div class="judged">
          <button type="button" class="judged__toggle" aria-expanded="true">How This Is Judged <img src="${G}expand-less-24.svg" alt="" /></button>
          <div class="judged__levels">${levels}</div>
        </div>
      </div>
    </aside>`, "drawer");
  const toggle = ov.querySelector(".judged__toggle");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    ov.querySelector(".judged__levels").hidden = !open;
  });
}
