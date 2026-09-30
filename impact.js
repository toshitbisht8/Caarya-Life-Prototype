// Your Impact Journal: Proof of Work (Figma 925:36209), Achievements (944:39793), Journal empty state (1032:17298).
// Domains, functional deliverables, indices and capabilities come from data.js (generated from the files in data/).
const IM = "assets/impact/";

state.assets = [];
state.achievements = [];
state.wizard = null; // achievement being created or edited
state.impactFilters = { proof: { q: "", type: "", domain: "" }, achievements: { q: "", type: "", domain: "" } };

const ASSET_TYPES = {
  personal: { label: "Personal", icon: "type-personal.svg", cover: "cover-2.png" },
  work: { label: "Work", icon: "type-work.svg", cover: "cover-1.png" },
  academic: { label: "Academic", icon: "type-academic.svg", cover: "cover-3.png" },
};

// Tab order from the design; the content of each comes from the mapping sheet.
const ASSET_DOMAINS = ["Product", "Marketing & Communications", "Design", "Technology & Engineering", "AI & Data Science", "Business, Sales & Growth"].filter((d) => DOMAIN_DATA[d]);
const deliverablesFor = (domain) => DOMAIN_DATA[domain].deliverables;
const capabilitiesFor = (domain) => DOMAIN_DATA[domain].capabilities;
const indicesFor = (domain) => DOMAIN_DATA[domain].indices;

// Each category keeps its own colour wherever it shows up (1033:21232): [left border, gradient start].
const TRANSFERABLE = [
  ["Learning & Insight", ["Effective Listening", "Intentional Learning", "Giving Feedback"], "#f4c4f7", "#fef7ff"],
  ["Analysis & Problem-Solving", ["Research & Analysis", "Problem Solving", "Critical Thinking", "Commercial Awareness"], "#d8d7f9", "#f7f9ff"],
  ["Expression & Communication", ["Written Communication", "Verbal Communication"], "#a5f2f2", "#f5ffff"],
  ["Self-Management & Empathy", ["Personal Motivation", "Personal Development", "Time Management", "Personal Organization"], "#c2f2bd", "#f5fcf5"],
  ["Leadership & Action", ["Numeracy Skills", "IT / Design Skills", "Leadership Skills", "Team-Work", "Business Strategy", "Multi-Tasking"], "#ffe99a", "#fdf9f0"],
  ["Creativity & Innovation", ["Creativity", "Innovation"], "#fec5a4", "#fff8f5"],
];
const MAX_TRANSFERABLE = 5;
const TOOLS = ["APIs", "Logstash", "Node.js", "PowerPoint", "Smartsheet", "Figma", "Splunk", "Photoshop", "CI/CD", "Kafka", "NewRelic", "AWS", "Docker", "Google Analytics", "Microsoft Office", "GitHub", "Kubernetes", "GitLab", "Lambda"];
// Work environment traits (1033:17947)
const ENVIRONMENT = [
  ["Team & Contribution", ["Solo contributor", "Small team (2–5)", "Mid-size team (6–15)", "Large team (15+)", "Cross-functional team", "Direct founder access", "Global team", "Cross-cultural collaboration", "Remote collaboration", "Flat hierarchy"]],
  ["Ownership & Autonomy", ["High autonomy", "End-to-end ownership", "Early ownership", "Independent execution", "Decision-making authority", "Self-directed work", "Wore multiple hats"]],
  ["Innovation & Approach", ["Greenfield project", "First-of-its-kind", "Experimental approach", "Emerging technology", "Cutting-edge domain", "High creative freedom", "Iterative environment", "Innovation-first culture"]],
  ["Support & Mentorship", ["Strong mentorship", "Experienced team", "Expert access", "Structured processes in place", "Peer learning culture", "Clear brief / strong direction", "Coaching support", "Well-documented systems"]],
  ["Scale & Visibility", ["High-visibility project", "Large user base", "Revenue-impacting work", "Public-facing product", "Growth-stage product", "Enterprise scale", "Internal tooling", "Early traction stage"]],
  ["Resources", ["Resource-rich environment", "Data-rich environment", "Well-funded project", "Lean / resource-light", "Limited tooling", "Bootstrap constraints", "Strong existing infrastructure"]],
  ["Constraints", ["Tight deadline", "Shifting priorities", "Scope creep", "Budget constraints", "Limited team size", "Tool / tech constraints", "Unclear brief", "Ambiguous requirements", "Rapidly changing context"]],
  ["Risk & Stakes", ["High-stakes client work", "Compliance-heavy domain", "Regulated industry", "Competitive market", "Publicly visible stakes", "Sensitive subject matter"]],
];

const assetById = (id) => state.assets.find((a) => a.id === Number(id));
const achievementById = (id) => state.achievements.find((a) => a.id === Number(id));
const assetCover = (a) => a.cover || IM + ASSET_TYPES[a.type].cover;
const typeTag = (type, cls = "") => `<span class="type-tag ${cls}"><img src="${IM}${ASSET_TYPES[type].icon}" alt="" />${ASSET_TYPES[type].label}</span>`;
const darkBtn = (label, action, icon = "add-circle-light.svg") =>
  `<button type="button" class="btn btn--primary im-add" data-im="${action}"><img src="${IM}${icon}" alt="" />${label}</button>`;

// ---------- Shared page chrome ----------
const impactPage = document.getElementById("impact-page");

const impactHeader = (title, sub) => `
  <div class="page-header"><h1 class="page-header__title">${title}</h1><p class="page-header__sub">${sub}</p></div>`;

function dropdown(name, label, options, value) {
  const current = options.find(([v]) => v === value);
  return `
    <span class="dd">
      <button type="button" class="filter${value ? " is-set" : ""}" data-dd aria-haspopup="true">${esc(value ? current[1] : label)}<img src="${IM}sort-down.svg" alt="" /></button>
      <span class="dd__menu" hidden>
        <button type="button" data-filter="${name}" data-value="">All</button>
        ${options.map(([v, l]) => `<button type="button" data-filter="${name}" data-value="${esc(v)}"${v === value ? ' class="is-on"' : ""}>${esc(l)}</button>`).join("")}
      </span>
    </span>`;
}

// Options menu behind a ⋮ button. items: [label, data-im action] or raw html.
const optionsMenu = (btnClass, icon, items, id, menuClass = "") => `
  <span class="dd">
    <button type="button" class="${btnClass}" data-dd aria-label="More options"><img src="${IM}${icon}" alt="" /></button>
    <span class="dd__menu dd__menu--right ${menuClass}" hidden>${items.map((it) => (typeof it === "string" ? it : `<button type="button" data-im="${it[1]}" data-id="${id}"${it[1].startsWith("delete") ? ' class="is-danger"' : ""}>${it[0]}</button>`)).join("")}</span>
  </span>`;

function toolbar(key, placeholder, addBtn, inert) {
  const f = state.impactFilters[key] || { q: "", type: "", domain: "" };
  return `
    <div class="im-tools">
      <div class="im-tools__row">
        <label class="im-search"><img src="${IM}search.svg" alt="" /><input type="search" placeholder="${placeholder}" value="${esc(f.q)}" data-im-search="${key}"${inert ? " disabled" : ""} /></label>
        ${addBtn}
      </div>
      <div class="im-tools__filters">
        ${dropdown("type", "Type", Object.entries(ASSET_TYPES).map(([v, t]) => [v, t.label]), f.type)}
        ${dropdown("domain", "Domain", ASSET_DOMAINS.map((d) => [d, d]), f.domain)}
      </div>
    </div>`;
}

const emptyState = (text, btn) => `
  <div class="im-content im-content--empty">
    <div class="im-empty"><img src="${IM}empty-folder.png" alt="" /><p>${text}</p>${btn}</div>
  </div>`;

function matches(asset, f) {
  const q = f.q.trim().toLowerCase();
  return (!q || `${asset.title} ${asset.deliverable} ${asset.domain}`.toLowerCase().includes(q))
    && (!f.type || asset.type === f.type) && (!f.domain || asset.domain === f.domain);
}

// ---------- Proof of Work ----------
const ASSET_MENU = [["Edit asset", "edit-asset"], ["Create achievement card", "create-card"], ["Delete asset", "delete-asset"]];

// Asset card (925:35516)
const assetCard = (a) => `
  <article class="asset-card${state.justAddedAsset === a.id ? " wo--new" : ""}">
    <a class="asset-card__cover" href="#proof-asset/${a.id}" tabindex="-1" aria-hidden="true"><img src="${esc(assetCover(a))}" alt="" /></a>
    <div class="asset-card__body">
      <div class="asset-card__row"><a href="#proof-asset/${a.id}">${esc(a.title)}</a>${optionsMenu("dots", "more-vert-16.svg", ASSET_MENU, a.id)}</div>
      ${typeTag(a.type)}
    </div>
  </article>`;

function proofContent() {
  if (!state.assets.length) return emptyState("You have not added any proof of work yet", darkBtn("Add New", "add-asset"));
  const list = state.assets.filter((a) => matches(a, state.impactFilters.proof));
  return `<div class="im-content im-grid">${list.map(assetCard).join("") || `<p class="im-none">No assets match your search.</p>`}</div>`;
}

const pageProof = () => `
  ${impactHeader("Proof Of Work", "Add all the assets you have built to share with potential recruiters")}
  ${toolbar("proof", "Search for assets", darkBtn("Add New", "add-asset"))}
  <div data-im-content="proof">${proofContent()}</div>`;

// Many hosts refuse to load in an iframe on their normal URL but offer an embeddable one — use it when we know it.
function embedUrl(link) {
  try {
    const u = new URL(link);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "figma.com") return `https://www.figma.com/embed?embed_host=caarya-life&url=${encodeURIComponent(link)}`;
    if (host === "youtube.com" && u.searchParams.get("v")) return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    if (host === "youtu.be") return `https://www.youtube.com/embed${u.pathname}`;
    if (host === "vimeo.com") return `https://player.vimeo.com/video${u.pathname}`;
    if (host === "loom.com") return link.replace("/share/", "/embed/");
    if (host === "drive.google.com" || host === "docs.google.com") return link.replace(/\/(view|edit)(\?[^#]*)?(#.*)?$/, "/preview");
  } catch { /* not a parseable URL — load it as typed */ }
  return link;
}

function pageAsset(a) {
  return `
    ${impactHeader("Proof Of Work", "Add all the assets you have built to share with potential recruiters")}
    <div class="im-back"><a href="#proof"><img src="${IM}arrow-back.svg" alt="" /><span>Back</span></a></div>
    <div class="asset-head">
      <img class="asset-head__thumb" src="${esc(assetCover(a))}" alt="" />
      <div class="asset-head__text"><h2>${esc(a.title)}</h2>${typeTag(a.type, "type-tag--lg")}</div>
      <button type="button" class="btn btn--primary im-add im-add--sm" data-im="create-card" data-id="${a.id}">Create Achievement Card<img src="${IM}auto-awesome.svg" alt="" /></button>
      ${optionsMenu("kebab", "more-vert.svg", [`<a href="${esc(a.link)}" target="_blank" rel="noopener">Open link in new tab</a>`, ASSET_MENU[0], ASSET_MENU[2]], a.id)}
    </div>
    <div class="asset-frame">
      <iframe src="${esc(embedUrl(a.link))}" title="${esc(a.title)}" loading="lazy" referrerpolicy="no-referrer" allow="fullscreen; clipboard-write"></iframe>
      <p class="asset-frame__note">Some sites don’t allow being shown inside other pages. If this stays blank, <a href="${esc(a.link)}" target="_blank" rel="noopener">open the link in a new tab</a>.</p>
    </div>`;
}

// Add / edit asset modal: step 1 picks the deliverable (925:35755), step 2 fills the details (925:35834).
function openAssetModal(existing) {
  const d = existing
    ? { step: 2, domain: existing.domain, deliverable: existing.deliverable, title: existing.title, type: existing.type, company: existing.company, cover: existing.cover, link: existing.link, error: "" }
    : { step: 1, domain: ASSET_DOMAINS[0], deliverable: null, title: "", type: "personal", company: "", cover: "", link: "", error: "" };
  const heading = existing ? "Editing Asset" : "Adding New Asset";
  const ov = openOverlay(`<div class="asset-modal" role="dialog" aria-modal="true" aria-label="${heading}"></div>`, "modal");
  const box = ov.querySelector(".asset-modal");

  const head = () => `
    <header class="im-modal__head"><h2>${heading}</h2><span>${d.step}/2</span>
      <button type="button" data-close aria-label="Close"><img src="${IM}close.svg" alt="" /></button></header>`;
  const foot = () => `
    <footer class="im-modal__foot">
      <button type="button" class="btn btn--secondary im-back-btn" data-am="back">Back</button>
      <button type="button" class="btn btn--primary im-next" data-am="next">${existing && d.step === 2 ? "Save Changes" : "Next"}<img src="${IM}next-link.svg" alt="" /></button>
    </footer>`;

  function draw() {
    if (d.step === 1) {
      box.innerHTML = `${head()}
        <div class="asset-modal__body asset-modal__body--pick">
          <div class="im-q"><h3>What kind of asset did you build?</h3><p>Select the option that most closely maps to what you did</p></div>
          <div class="im-tabs" role="tablist">${ASSET_DOMAINS.map((dom) => `<button type="button" role="tab" aria-selected="${dom === d.domain}" class="${dom === d.domain ? "is-on" : ""}" data-am-domain="${esc(dom)}">${esc(dom)}</button>`).join("")}</div>
          <div class="deliverables">${deliverablesFor(d.domain).map(({ name, desc }) => `
            <button type="button" class="deliverable${d.deliverable === name ? " is-on" : ""}" data-am-deliverable="${esc(name)}" title="${esc(desc)}"><b>${esc(name)}</b><span>${esc(desc)}</span></button>`).join("")}</div>
          <p class="error">${d.error}</p>
        </div>${foot()}`;
      return;
    }
    const desc = deliverablesFor(d.domain).find((x) => x.name === d.deliverable).desc;
    box.innerHTML = `${head()}
      <div class="asset-modal__body">
        <button type="button" class="picked" data-am="back" aria-label="Change deliverable"><span><b>${esc(d.deliverable)}</b><i>${esc(desc)}</i></span><img src="${IM}edit.svg" alt="" /></button>
        <label class="field"><span class="field__label">Title</span><input class="input" data-am-field="title" placeholder="Eg. SASS product journey map" value="${esc(d.title)}" /></label>
        <div class="field"><span class="field__label">Type<i>What kind of project was this a part of?</i></span>
          <div class="type-chips">${Object.entries(ASSET_TYPES).map(([k, t]) => `
            <button type="button" class="type-chip${d.type === k ? " is-on" : ""}" data-am-type="${k}" aria-pressed="${d.type === k}"><img src="${IM}${t.icon}" alt="" />${t.label}</button>`).join("")}</div>
        </div>
        ${d.type === "work" ? `<label class="field"><span class="field__label">Company:</span><input class="input" data-am-field="company" placeholder="Start typing..." value="${esc(d.company)}" /></label>` : ""}
        <div class="field"><span class="field__label">Cover Image</span>
          <div class="cover-pick">
            <span class="cover-pick__box">${d.cover ? `<img class="cover-pick__img" src="${d.cover}" alt="" />` : `<img src="${IM}add-photo.svg" alt="" />`}</span>
            <label class="cover-pick__btn"><img src="${IM}upload.svg" alt="" />${d.cover ? "Replace Image" : "Upload an Image"}<input type="file" accept="image/*" data-am-cover hidden /></label>
          </div>
        </div>
        <label class="field"><span class="field__label">Link</span>
          <span class="input input--prefixed"><img src="${IM}link.svg" alt="" /><input data-am-field="link" type="url" placeholder="Add a link to your work here (google drive, behance, dribbble, or any portfolio page link works)" value="${esc(d.link)}" /></span>
        </label>
        <p class="error">${d.error}</p>
      </div>${foot()}`;
  }

  function next() {
    if (d.step === 1) {
      if (!d.deliverable) { d.error = "Pick the deliverable that best matches what you built."; return draw(); }
      d.step = 2; d.error = "";
      return draw();
    }
    let link = d.link.trim();
    if (link && !/^https?:\/\//i.test(link)) link = "https://" + link;
    d.error = !d.title.trim() ? "Add a title for this asset." : !/^https?:\/\/[^\s.]+\.[^\s]+/i.test(link) ? "Add a valid link to your work, e.g. behance.net/…" : "";
    if (d.error) return draw();
    const fields = { title: d.title.trim(), domain: d.domain, deliverable: d.deliverable, type: d.type, company: d.type === "work" ? d.company.trim() : "", cover: d.cover, link };
    closeOverlay();
    if (existing) {
      // Technical skills and indices are tied to the domain, so cards drop them if the asset moves domain.
      if (existing.domain !== fields.domain) state.achievements.filter((a) => a.assetId === existing.id).forEach((a) => { a.technical = []; a.indices = {}; });
      Object.assign(existing, fields);
      render();
      return showToast("Asset updated");
    }
    const asset = { id: Date.now(), ...fields };
    state.assets.unshift(asset);
    state.justAddedAsset = asset.id;
    go("proof");
    showToast("Asset added to your proof of work", { label: "Create Achievement Card", onClick: () => startWizard(asset.id) });
  }

  ov.addEventListener("input", (e) => {
    const f = e.target.dataset.amField;
    if (f) d[f] = e.target.value;
  });
  ov.addEventListener("change", (e) => {
    if (!e.target.matches("[data-am-cover]") || !e.target.files[0]) return;
    const reader = new FileReader();
    reader.onload = () => { d.cover = reader.result; draw(); };
    reader.readAsDataURL(e.target.files[0]);
  });
  ov.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.matches("input:not([type=file])")) { e.preventDefault(); next(); }
  });
  ov.addEventListener("click", (e) => {
    const t = e.target;
    const dom = t.closest("[data-am-domain]");
    if (dom) { d.domain = dom.dataset.amDomain; d.deliverable = null; return draw(); }
    const del = t.closest("[data-am-deliverable]");
    if (del) { d.deliverable = del.dataset.amDeliverable; d.error = ""; return draw(); }
    const type = t.closest("[data-am-type]");
    if (type) { d.type = type.dataset.amType; return draw(); }
    const act = t.closest("[data-am]")?.dataset.am;
    if (act === "next") next();
    if (act === "back") { d.error = ""; d.step === 1 ? closeOverlay() : (d.step = 1, draw()); }
  });
  draw();
}

// Warning before an asset (and its achievements) is deleted (1033:21489)
function confirmDeleteAsset(id) {
  const ov = openOverlay(`
    <div class="warn-modal" role="alertdialog" aria-modal="true" aria-labelledby="warn-title">
      <div class="warn-modal__body">
        <h2 id="warn-title">Warning !</h2>
        <p>Deleting an asset will also delete all of its achievements.</p>
        <p>Are you sure you want to continue?</p>
      </div>
      <div class="warn-modal__actions">
        <button type="button" data-close>Cancel</button>
        <button type="button" class="is-danger" data-warn-yes>Yes, Delete</button>
      </div>
    </div>`, "modal");
  ov.querySelector("[data-warn-yes]").addEventListener("click", () => {
    state.assets = state.assets.filter((a) => a.id !== id);
    state.achievements = state.achievements.filter((a) => a.assetId !== id);
    closeAllOverlays();
    location.hash === "#proof" ? render() : go("proof");
    showToast("Asset deleted");
  });
}

// ---------- Achievements ----------
const ACH_MENU = [["Edit achievement", "edit-card"], ["Share achievement", "share-card"], ["Delete achievement", "delete-card"]];
const joinList = (arr) => (arr.length < 2 ? arr.join("") : `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`);

// The card's summary is written from what was picked in the wizard.
function achievementSummary(a, asset) {
  const where = asset.type === "work" ? `as part of my work${asset.company ? ` at ${asset.company}` : ""}` : asset.type === "academic" ? "as an academic project" : "as a personal project";
  const first = `I built “${asset.title}” (${asset.deliverable}, ${asset.domain}) ${where}.`;
  const bits = [];
  if (a.technical.length) bits.push(`applied ${joinList(a.technical.slice(0, 3))}`);
  if (a.tools.length) bits.push(`worked with ${joinList(a.tools.slice(0, 3))}`);
  if (a.transferable.length) bits.push(`leaned on ${joinList(a.transferable.slice(0, 3)).toLowerCase()}`);
  const second = bits.length ? `Along the way I ${joinList(bits)}.` : "";
  const moved = Object.entries(a.indices).map(([name, how]) => (how.trim() ? `${name} (${how.trim()})` : name));
  const third = moved.length ? `It moved ${joinList(moved)}.` : "";
  return [first, [second, third].filter(Boolean).join(" ")].filter(Boolean);
}

const tagList = (items, cls = "") => items.map((t) => `<span class="ach-tag ${cls}">${cls ? `<i><img src="${IM}bolt-white.svg" alt="" /></i>` : ""}${esc(t)}</span>`).join("");

// Transferable skills grouped under their category, each category in its own colour (1033:21232).
function transferableBlock(picked) {
  const groups = TRANSFERABLE.map(([cat, skills, line, bg]) => [cat, skills.filter((s) => picked.includes(s)), line, bg]).filter(([, s]) => s.length);
  if (!groups.length) return `<p class="ach-full__none">None added</p>`;
  return `
    <div class="ach-cats">
      <span class="ach-cats__deco" aria-hidden="true"><img src="${IM}transferable-deco.png" alt="" /></span>
      ${groups.map(([cat, skills, line, bg]) => `
        <div class="ach-cat" style="--cat-line:${line};--cat-bg:${bg}"><p>${esc(cat)}</p><div class="ach-tags">${tagList(skills)}</div></div>`).join("")}
    </div>`;
}

// Full card. The shared/overlay version (1032:16483) sits on the grid background with an options menu;
// the review-step preview (1032:16955) is a plain outlined card with "Make Changes" instead.
function achievementFull(a, { preview = false, corner = "" } = {}) {
  const asset = assetById(a.assetId);
  const section = (title, body) => `<div class="ach-full__col"><h4>${title}</h4>${body}</div>`;
  const none = `<p class="ach-full__none">None added</p>`;
  return `
    <article class="ach-full${preview ? " ach-full--preview" : ""}">
      <header class="ach-full__top"><span class="ach-logo"><i><img src="${IM}caarya-mark.svg" alt="" /></i>caarya</span>
        ${preview ? `<button type="button" class="ach-full__edit" data-wz="make-changes">Make Changes<img src="${IM}edit-purple.svg" alt="" /></button>` : corner}
      </header>
      <div class="ach-full__hero">
        <img class="ach-full__thumb" src="${esc(assetCover(asset))}" alt="" />
        <p class="ach-full__kicker">${esc(asset.deliverable)}</p>
        <div class="ach-full__summary">${achievementSummary(a, asset).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <a class="ach-full__link" href="${esc(asset.link)}" target="_blank" rel="noopener">See My Work <img src="${IM}north-east.svg" alt="" /></a>
      </div>
      <div class="ach-full__rows">
        <div class="ach-full__row">
          ${section("Technical Skills Applied", a.technical.length ? `<div class="ach-tags">${tagList(a.technical)}</div>` : none)}
          ${section("Tools Used", a.tools.length ? `<div class="ach-tags">${tagList(a.tools)}</div>` : none)}
        </div>
        <div class="ach-full__row">
          ${section("Transferable Skills Activated", transferableBlock(a.transferable))}
          ${section("Work Environment Traits", a.env.length ? `<div class="ach-tags ach-tags--wide">${tagList(a.env, "ach-tag--trait")}</div>` : none)}
        </div>
      </div>
    </article>`;
}

function achievementCard(a) {
  const asset = assetById(a.assetId);
  return `
    <article class="ach-card${state.justAddedAch === a.id ? " wo--new" : ""}">
      <header class="ach-card__top" style="background-image:url('${esc(assetCover(asset))}')"><span class="ach-logo ach-logo--light"><i><img src="${IM}caarya-mark.svg" alt="" /></i>caarya</span></header>
      <div class="ach-card__body">
        <img src="${esc(assetCover(asset))}" alt="" />
        <h3>${esc(asset.deliverable)}</h3>
        <p>${esc(asset.domain)}</p>
      </div>
      <footer class="ach-card__foot">
        <button type="button" class="ach-card__expand" data-im="open-card" data-id="${a.id}" aria-label="Open achievement card"><img src="${IM}expand.svg" alt="" /></button>
        ${optionsMenu("kebab kebab--sm", "more-vert-16.svg", ACH_MENU, a.id, "dd__menu--up")}
      </footer>
    </article>`;
}

function achievementsContent() {
  if (!state.achievements.length) return emptyState("You have not added any achievements yet", darkBtn("New Achievement", "new-achievement"));
  const list = state.achievements.filter((a) => matches(assetById(a.assetId), state.impactFilters.achievements));
  return `<div class="im-content im-grid">${list.map(achievementCard).join("") || `<p class="im-none">No achievements match your search.</p>`}</div>`;
}

const pageAchievements = () => `
  ${impactHeader("Achievements", "Sharable snippets of the assets you have added")}
  ${toolbar("achievements", "Search for achievements", darkBtn("New Achievement", "new-achievement"))}
  <div data-im-content="achievements">${achievementsContent()}</div>`;

function openCardOverlay(id) {
  const a = achievementById(id);
  openOverlay(`<div class="ach-overlay" role="dialog" aria-modal="true" aria-label="Achievement card">${achievementFull(a, { corner: optionsMenu("kebab kebab--sm", "more-vert-16.svg", ACH_MENU, a.id) })}</div>`, "modal");
}

// No backend, so "share" copies a link to the page the card lives on.
function shareAchievement(id) {
  const url = `${location.origin}${location.pathname}#achievements/${id}`;
  const done = () => showToast("Share link copied to clipboard");
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done);
  else done();
}

// Asset picker (944:38905). onPick gets the chosen asset id.
function openAssetPicker(onPick, selected = null) {
  let picked = selected;
  const closed = new Set();
  const domains = ASSET_DOMAINS.filter((d) => state.assets.some((a) => a.domain === d));
  const ov = openOverlay(`<div class="picker" role="dialog" aria-modal="true" aria-label="Adding New Achievement"></div>`, "modal");
  const box = ov.querySelector(".picker");
  function draw() {
    box.innerHTML = `
      <header class="im-modal__head"><h2>Adding New Achievement</h2><button type="button" data-close aria-label="Close"><img src="${IM}close.svg" alt="" /></button></header>
      <div class="picker__body">
        ${domains.length ? `<h3>Select the asset you want to make the achievement for</h3>
        ${domains.map((dom) => `
          <section class="picker__group">
            <button type="button" class="picker__domain" data-pk-domain="${esc(dom)}" aria-expanded="${!closed.has(dom)}"><span>${esc(dom)}</span><img src="${IM}expand-less.svg" alt="" /></button>
            ${closed.has(dom) ? "" : `<div class="picker__grid">${state.assets.filter((a) => a.domain === dom).map((a) => `
              <button type="button" class="pick-asset${picked === a.id ? " is-on" : ""}" data-pk-asset="${a.id}" aria-pressed="${picked === a.id}">
                <img class="pick-asset__thumb" src="${esc(assetCover(a))}" alt="" />
                <span class="pick-asset__text"><b>${esc(a.title)}</b>${typeTag(a.type, "type-tag--lg")}</span>
                <img src="${IM}${picked === a.id ? "radio-checked" : "radio"}.svg" alt="" />
              </button>`).join("")}</div>`}
          </section>`).join("")}`
        : `<div class="picker__empty"><img src="${IM}empty-folder.png" alt="" /><h3>Add a proof of work first</h3><p>Achievement cards are built on top of the assets in your proof of work.</p></div>`}
      </div>
      ${domains.length
        ? `<button type="button" class="picker__next" data-pk="next"${picked ? "" : " disabled"}>Next<img src="${IM}next-light.svg" alt="" /></button>`
        : `<button type="button" class="picker__next" data-pk="proof">Add Proof Of Work<img src="${IM}next-light.svg" alt="" /></button>`}`;
  }
  ov.addEventListener("click", (e) => {
    const dom = e.target.closest("[data-pk-domain]");
    if (dom) { closed.has(dom.dataset.pkDomain) ? closed.delete(dom.dataset.pkDomain) : closed.add(dom.dataset.pkDomain); return draw(); }
    const asset = e.target.closest("[data-pk-asset]");
    if (asset) { picked = Number(asset.dataset.pkAsset); return draw(); }
    const act = e.target.closest("[data-pk]")?.dataset.pk;
    if (act === "next" && picked) { closeOverlay(); onPick(picked); }
    if (act === "proof") { closeOverlay(); go("proof"); openAssetModal(); }
  });
  draw();
}

// ---------- New / edit achievement wizard (944:38069 → 1032:16729) ----------
const wizardScreen = document.getElementById("wizard-screen");
const WIZARD_STEPS = 6;

// Pass an existing achievement to edit it in place.
function startWizard(assetId, existing) {
  const caps = capabilitiesFor(assetById(assetId).domain);
  state.wizard = existing
    ? { assetId, step: 0, editId: existing.id, transferable: [...existing.transferable], technical: [...existing.technical], tools: [...existing.tools],
        extraTechnical: existing.technical.filter((s) => !caps.includes(s)), extraTools: existing.tools.filter((s) => !TOOLS.includes(s)),
        indices: { ...existing.indices }, env: [...existing.env], error: "" }
    : { assetId, step: 0, editId: null, transferable: [], technical: [], tools: [], extraTechnical: [], extraTools: [], indices: {}, env: [], error: "" };
  go("achievement-new");
}

const pickChip = (label, on, group, disabled) => `
  <button type="button" class="pick-chip${on ? " is-on" : ""}" data-wz-toggle="${group}" data-value="${esc(label)}" aria-pressed="${on}"${disabled ? " disabled" : ""}><img src="${IM}${on ? "chip-done" : "chip-add"}.svg" alt="" />${esc(label)}</button>`;

function chipStep(w, key, base, noun) {
  const extra = w[key === "technical" ? "extraTechnical" : "extraTools"];
  return `
    <div class="pick-chips pick-chips--tall">${[...base, ...extra].map((s) => pickChip(s, w[key].includes(s), key)).join("")}</div>
    <form class="wz-add" data-wz-add="${key}"><input placeholder="Add new ${noun}..." aria-label="Add new ${noun}" /><button type="submit" aria-label="Add"><img src="${IM}add-white.svg" alt="" /></button></form>`;
}

function wizardStep(w, asset) {
  const q = (title, sub) => `<div class="wz-q"><h2>${title}</h2><p>${sub}</p></div>`;
  switch (w.step) {
    case 0: {
      const full = w.transferable.length >= MAX_TRANSFERABLE;
      return `${q("Which transferable skills did you employ while building this?", `Select up to ${MAX_TRANSFERABLE} most relevant ones <b>(${w.transferable.length}/${MAX_TRANSFERABLE})</b>`)}
        <div class="wz-groups">${TRANSFERABLE.map(([cat, skills]) => `
          <div class="wz-group"><p class="wz-group__head"><span>${esc(cat)}</span><i>?</i></p>
            <div class="pick-chips">${skills.map((s) => pickChip(s, w.transferable.includes(s), "transferable", full && !w.transferable.includes(s))).join("")}</div></div>`).join("")}</div>`;
    }
    case 1: return `${q("Which technical skills did you employ while building this?", "Add all that are relevant")}${chipStep(w, "technical", capabilitiesFor(asset.domain), "skill")}`;
    case 2: return `${q("Which tools did you use while building this?", "Add all that are relevant")}${chipStep(w, "tools", TOOLS, "tool")}`;
    case 3: return `${q("Which of these indices did you move?", "Think of the outcomes of your work")}
      <div class="wz-indices">${indicesFor(asset.domain).map(([name, desc]) => {
        const on = name in w.indices;
        return `<div class="index-card${on ? " is-on" : ""}">
          <button type="button" class="index-card__head" data-wz-index="${esc(name)}" aria-pressed="${on}"><span><b>${esc(name)}</b>${esc(desc)}</span><img src="${IM}${on ? "checkbox-checked" : "checkbox"}.svg" alt="" /></button>
          ${on ? `<label class="index-card__how"><span>How this moved:</span><textarea class="input" rows="1" data-wz-how="${esc(name)}" placeholder="Describe how this was impacted by your work">${esc(w.indices[name])}</textarea></label>` : ""}
        </div>`;
      }).join("")}</div>`;
    case 4: return `${q("Describe your work environment", "Choose all the attributes that fit the environment you worked in for this project")}
      <div class="wz-groups">${ENVIRONMENT.map(([cat, traits]) => `
        <div class="env-group"><p>${esc(cat)}</p>
          <div class="env-chips">${traits.map((t) => {
            const on = w.env.includes(t);
            return `<button type="button" class="env-card${on ? " is-on" : ""}" data-wz-toggle="env" data-value="${esc(t)}" aria-pressed="${on}"><i><img src="${IM}${on ? "env-bolt-on" : "env-bolt"}.svg" alt="" /></i>${esc(t)}<img src="${IM}${on ? "env-check-on" : "env-check"}.svg" alt="" /></button>`;
          }).join("")}</div></div>`).join("")}</div>`;
    default: return `${q("Review Your Achievement Card", "This is how your card will look when you share it")}${achievementFull(w, { preview: true })}`;
  }
}

function renderWizard() {
  closeAllOverlays();
  const w = state.wizard;
  if (!w || !assetById(w.assetId)) return go("achievements");
  const asset = assetById(w.assetId);
  const last = w.step === WIZARD_STEPS - 1;
  wizardScreen.innerHTML = `
    <div class="wz">
      <div class="wz-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${WIZARD_STEPS}" aria-valuenow="${w.step + 1}">${Array.from({ length: WIZARD_STEPS }, (_, i) => `<span class="${i <= w.step ? "is-on" : ""}"></span>`).join("")}</div>
      <div class="wz-head">
        <div class="wz-head__row"><h1>${w.editId ? "Editing Achievement" : "Creating New Achievement"}</h1><button type="button" class="wz-discard" data-wz="discard"><img src="${IM}delete-outline.svg" alt="" /><span>Discard</span></button></div>
        <button type="button" class="picked picked--asset" data-wz="change-asset" aria-label="Change asset">
          <img class="picked__thumb" src="${esc(assetCover(asset))}" alt="" /><span><b>${esc(asset.title)}</b>${typeTag(asset.type, "type-tag--lg")}</span><img src="${IM}edit.svg" alt="" />
        </button>
      </div>
      <div class="wz-body">${wizardStep(w, asset)}<p class="error">${w.error}</p></div>
      <div class="wz-nav">
        <button type="button" class="btn btn--secondary im-back-btn" data-wz="back">Back</button>
        <button type="button" class="btn btn--primary im-next" data-wz="next">${last ? "Save Achievement" : "Next"}<img src="${IM}next-link.svg" alt="" /></button>
      </div>
    </div>`;
}

function toggleIn(list, value) {
  const i = list.indexOf(value);
  i < 0 ? list.push(value) : list.splice(i, 1);
}

// Re-render the step but keep the page where the person was looking.
function redrawWizard() {
  const y = window.scrollY;
  renderWizard();
  window.scrollTo(0, y);
}

function wizardGoTo(step) {
  state.wizard.step = step;
  state.wizard.error = "";
  renderWizard();
  window.scrollTo(0, 0);
  animateIn(wizardScreen.querySelector(".wz-body"));
}

wizardScreen.addEventListener("click", (e) => {
  const w = state.wizard;
  if (!w) return;
  const tog = e.target.closest("[data-wz-toggle]");
  if (tog) {
    const list = w[tog.dataset.wzToggle];
    if (tog.dataset.wzToggle === "transferable" && !list.includes(tog.dataset.value) && list.length >= MAX_TRANSFERABLE) return;
    toggleIn(list, tog.dataset.value);
    w.error = "";
    return redrawWizard();
  }
  const idx = e.target.closest("[data-wz-index]");
  if (idx) {
    const name = idx.dataset.wzIndex;
    name in w.indices ? delete w.indices[name] : (w.indices[name] = "");
    redrawWizard();
    return wizardScreen.querySelector(`[data-wz-how="${CSS.escape(name)}"]`)?.focus();
  }
  switch (e.target.closest("[data-wz]")?.dataset.wz) {
    case "discard":
      state.wizard = null;
      go("achievements");
      showToast(w.editId ? "Changes discarded" : "Achievement draft discarded");
      break;
    case "change-asset":
      openAssetPicker((id) => {
        // Technical skills and indices belong to the asset's domain, so they don't carry across domains.
        if (assetById(id).domain !== assetById(w.assetId).domain) { w.technical = []; w.extraTechnical = []; w.indices = {}; }
        w.assetId = id;
        renderWizard();
      }, w.assetId);
      break;
    case "make-changes": wizardGoTo(0); break;
    case "back":
      if (w.step === 0) { state.wizard = null; return go("achievements"); }
      wizardGoTo(w.step - 1);
      break;
    case "next":
      if (w.step === 0 && !w.transferable.length) { w.error = "Pick at least one transferable skill to continue."; return redrawWizard(); }
      w.step < WIZARD_STEPS - 1 ? wizardGoTo(w.step + 1) : saveAchievement();
  }
});
wizardScreen.addEventListener("input", (e) => {
  const how = e.target.dataset.wzHow;
  if (how && state.wizard) state.wizard.indices[how] = e.target.value;
});
wizardScreen.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-wz-add]");
  if (!form) return;
  e.preventDefault();
  const w = state.wizard;
  const key = form.dataset.wzAdd;
  const value = form.querySelector("input").value.trim();
  if (!value) return;
  const base = key === "technical" ? capabilitiesFor(assetById(w.assetId).domain) : TOOLS;
  const extra = w[key === "technical" ? "extraTechnical" : "extraTools"];
  const existing = [...base, ...extra].find((s) => s.toLowerCase() === value.toLowerCase());
  if (!existing) extra.push(value);
  if (!w[key].includes(existing || value)) w[key].push(existing || value);
  redrawWizard();
  wizardScreen.querySelector("[data-wz-add] input").focus();
});

function saveAchievement() {
  const { assetId, editId, transferable, technical, tools, indices, env } = state.wizard;
  const fields = { assetId, transferable, technical, tools, indices, env };
  const a = editId ? Object.assign(achievementById(editId), fields) : { id: Date.now(), ...fields };
  if (!editId) state.achievements.unshift(a);
  state.justAddedAch = a.id;
  state.wizard = null;
  go("achievements");
  showToast(editId ? "Achievement updated" : "Achievement card created", { label: "View Card", onClick: () => openCardOverlay(a.id) });
}

// ---------- Journal (empty state, 1032:17298) ----------
const pageJournal = () => `
  ${impactHeader("Journal", "Capture and document your unique process of working")}
  ${toolbar("journal", "Search for entries", "", true)}
  <div class="im-content im-soon">
    <div class="im-soon__mark"><h2>Journal</h2><img src="${IM}journal-empty.svg" alt="" /></div>
    <div class="im-soon__text"><h3>Document your work process</h3><p>Capture, document and share your unique process of working.</p></div>
    <span class="im-soon__pill">Coming Soon</span>
  </div>`;

// ---------- Render + events ----------
function renderImpact(route, param) {
  closeAllOverlays();
  if (route === "proof-asset" && !assetById(param)) return go("proof");
  impactPage.innerHTML = route === "proof" ? pageProof()
    : route === "proof-asset" ? pageAsset(assetById(param))
    : route === "achievements" ? pageAchievements()
    : pageJournal();
  // The "just added" highlight plays once.
  state.justAddedAsset = state.justAddedAch = null;
}

const closeDropdowns = (except) => document.querySelectorAll(".dd__menu:not([hidden])").forEach((m) => m !== except && (m.hidden = true));

document.addEventListener("click", (e) => {
  const dd = e.target.closest("[data-dd]");
  const menu = dd?.parentElement.querySelector(".dd__menu");
  closeDropdowns(menu);
  if (menu) { menu.hidden = !menu.hidden; return; }

  const filter = e.target.closest("[data-filter]");
  if (filter) {
    const key = location.hash.slice(1).split("/")[0];
    if (!state.impactFilters[key]) return;
    state.impactFilters[key][filter.dataset.filter] = filter.dataset.value;
    return render();
  }

  const act = e.target.closest("[data-im]");
  if (!act) return;
  const id = Number(act.dataset.id);
  switch (act.dataset.im) {
    case "add-asset": openAssetModal(); break;
    case "edit-asset": openAssetModal(assetById(id)); break;
    case "delete-asset": confirmDeleteAsset(id); break;
    case "new-achievement": openAssetPicker(startWizard); break;
    case "create-card": startWizard(id); break;
    case "open-card": openCardOverlay(id); break;
    case "edit-card": closeAllOverlays(); startWizard(achievementById(id).assetId, achievementById(id)); break;
    case "share-card": shareAchievement(id); break;
    case "delete-card":
      state.achievements = state.achievements.filter((a) => a.id !== id);
      closeAllOverlays();
      render();
      showToast("Achievement deleted");
      break;
  }
});

// Search filters the grid in place so the input keeps focus.
impactPage.addEventListener("input", (e) => {
  const key = e.target.dataset.imSearch;
  if (!key || !state.impactFilters[key]) return;
  state.impactFilters[key].q = e.target.value;
  impactPage.querySelector(`[data-im-content="${key}"]`).innerHTML = key === "proof" ? proofContent() : achievementsContent();
});
