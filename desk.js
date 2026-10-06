// Desk (Figma section 843:21999): the one work order currently in focus.
// Content is placeholder copy from the designs; progress (sessions, artefacts) is real in-memory state.

const D = "assets/desk/";

// ---------- Progress model ----------
// Per work order, kept when the work order is paused so it can be picked up again later.
state.deskData = {};
function deskProgress(woId) {
  return (state.deskData[woId] ||= { tab: "brief", vcs: {}, lastVc: null, final: null, since: Date.now() });
}
function vcProgress(woId, vcId) {
  // logs: finished sessions; artefacts: submitted links; mentor: booked slot label
  return (deskProgress(woId).vcs[vcId] ||= { logs: [], artefacts: [], mentor: null });
}
const vcTimeMs = (v) => v.logs.reduce((sum, l) => sum + l.durationMs, 0);
const vcJournalCount = (v) => v.logs.filter((l) => l.journal).length;
const isGraded = (v) => v.artefacts.some((a) => a.level);
function vcStatus(woId, vcId) {
  const v = vcProgress(woId, vcId);
  // Done only once a community mentor has graded an artefact; submitted but ungraded is "review".
  if (isGraded(v)) return "done";
  if (v.artefacts.length) return "review";
  const live = state.session && state.session.woId === woId && state.session.vcId === vcId;
  return v.logs.length || live ? "progress" : "open";
}
// Constructs with a mentor-graded artefact (these count towards unlocks and the final deliverable)…
const artefactVcs = (woId) => Object.values(deskProgress(woId).vcs).filter(isGraded).length;
// …and constructs with any artefact submitted, graded or not.
const submittedVcs = (woId) => Object.values(deskProgress(woId).vcs).filter((v) => v.artefacts.length).length;
const totalArtefactVcs = () => Object.keys(state.deskData).reduce((n, wo) => n + artefactVcs(wo), 0);
const journalEntries = (woId) => Object.values(deskProgress(woId).vcs).reduce((n, v) => n + vcJournalCount(v), 0);
// A work order counts as contributed once a mentor has graded its final deliverable.
const contributedWos = () => Object.values(state.deskData).filter((p) => p.final?.level).length;

// Unlock requirements, live. Growth Track home repeats the artefact line (as designed); the desk has a third placeholder.
function unlockItems(where) {
  const wos = Math.min(contributedWos(), 2);
  const arts = Math.min(totalArtefactVcs(), 3);
  return [
    ["Contribute to at least 2 work orders", `${wos}/2 done`, wos >= 2],
    ["Submit at least 3 VC Artefacts", `${arts}/3 done`, arts >= 3],
    where === "desk" ? ["Some other requirement", "0/3 done", false] : ["Submit at least 3 VC Artefacts", `${arts}/3 done`, arts >= 3],
  ];
}

const pad2 = (n) => String(n).padStart(2, "0");
const fmtHm = (ms) => `${pad2(Math.floor(ms / 3600000))}h ${pad2(Math.floor(ms / 60000) % 60)}m`;

// ---------- Content ----------
const DESK_VCS = {
  1: {}, 2: { mandatory: true, recommended: true }, 3: { mandatory: true },
  4: {}, 5: { mandatory: true }, 6: {}, 7: {},
};
const vcName = (woId, id) => vcInfo(woId, id).name; // work-orders.js
const DESK_STEPS = [[1], [6, 2], [3], [4], [], [5], [7]]; // constructs applicable to each methodology step
const DESK_VC_TAB = [1, 2, 3, 4, 5]; // "Available Value Constructs" list, as designed
const DESK_TABS = [["brief", "Brief"], ["vcs", "Available Value Constructs"], ["resources", "Resources"], ["journal", "Impact Journal"], ["background", "Work Background"]];
const DESK_LOREM = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const deskWo = () => [...state.growth.desk][0];

const helpDot = (size = 12) => `<i class="help" style="width:${size}px;height:${size}px">?</i>`;
const pgmBadge = (boost = true) => `
  <span class="pgm">
    <span class="pgm__icon"><img src="${G}growth-manager.png" alt="" /></span>
    <span class="pgm__name">Professional Growth Manager</span>
    ${boost ? `<span class="boost"><img src="${G}boost.svg" alt="" />2 Boosts Available</span>` : ""}
  </span>`;

function vcCard(woId, id, { standalone = true, wrap = true } = {}) {
  const vc = vcInfo(woId, id); // work-orders.js
  const v = vcProgress(woId, id);
  const status = vcStatus(woId, id);
  const icon = status === "done"
    ? `<img class="vc-card__status" src="${D}check-circle.svg" alt="Completed" />`
    : status === "open" ? "" : `<img class="vc-card__status" src="${D}pending.svg" alt="${status === "review" ? "Awaiting mentor review" : "In progress"}" />`;
  const stats = status === "done"
    ? `<p class="vc-card__stats"><span>Journal Entries: <b>${pad2(vcJournalCount(v))}</b></span><span>Artefact Quality: <b>L${Math.max(...v.artefacts.map((a) => a.level || 0))}</b> ${helpDot()}</span></p>`
    : status === "review" ? `<p class="vc-card__stats"><span>Time Logged: <b>${fmtHm(vcTimeMs(v))}</b></span><span>Artefact: <b>Verification Pending</b></span></p>`
    : status === "progress" ? `<p class="vc-card__stats"><span>Time Logged: <b>${fmtHm(vcTimeMs(v))}</b></span><span>Journal Entries: <b>${pad2(vcJournalCount(v))}</b></span></p>` : "";
  const label = status === "progress" || status === "review" ? "Continue Working" : "Work On This";
  const card = `
    <div class="vc-card${standalone ? "" : " vc-card--nested"}">
      <div class="vc-card__main">
        <p class="vc-card__title">${esc(vc.name)}${vc.bar ? `<span class="vc-card__badge">Mandatory L${vc.floorLevel}</span>` : ""}${icon}</p>
        <p class="vc-card__desc">${esc(vc.desc)}</p>
        <p class="vc-card__leaves">Leaves: ${esc(vc.leaves)}</p>
        ${stats}
      </div>
      <div class="vc-card__side"><button type="button" class="vc-card__action" data-desk="work-on" data-vc="${id}">${label}</button><span class="vc-card__time">${esc(vc.time)}</span></div>
    </div>`;
  return vc.recommended && wrap
    ? `<div class="vc-rec"><p class="vc-rec__head"><img src="${G}career-progression.png" alt="" />Recommended<span class="vc-rec__help">${helpDot(16)}</span></p>${card}</div>`
    : card;
}

function deskTabContent(woId, tab) {
  const c = woContent(woId); // work-orders.js
  if (tab === "brief") {
    const steps = c.steps.map(({ title, desc, vcs, loopnote }, i) => `
      <div class="step-row">
        <div class="step-row__rail"><span class="step-row__n">${i + 1}</span><span class="step-row__line"></span></div>
        <div class="step-row__body">
          <div class="step-row__head">
            <b>${esc(title)}</b>
            <p>${esc(desc)}</p>${loopnote ? `<p class="step-row__loop">↻ ${esc(loopnote)}</p>` : ""}
          </div>
          ${vcs.length ? `<div class="step-row__vcs"><p class="step-row__label">Applicable Constructs</p>${vcs.map((v) => vcCard(woId, v, { standalone: false })).join("")}</div>` : ""}
        </div>
      </div>`).join("");
    return `
      <p class="desk-brief">${esc(c.brief)}</p>
      <p class="chirag"><img src="${D}sparkle.svg" alt="" />C.H.I.R.A.G ‘s Recommended Methodology<button type="button" class="chirag__eye" aria-label="Preview methodology"><img src="${D}eye.svg" alt="" /></button></p>
      <div class="steps">${steps}</div>`;
  }
  if (tab === "vcs") {
    return `
      <div class="desk-vcs">
        <p class="desk-vcs__intro">You can apply ${Object.keys(c.vcs).length} different concepts when building this work order. You can pick and choose the ones that align most with your skill set</p>
        <div class="desk-vcs__list">${c.vcTab.map((v) => vcCard(woId, v)).join("")}</div>
      </div>
      <div class="vc-help">
        <div class="vc-help__text"><b>Not sure which VC you should do?</b><p>Get personalized recommendations from your professional growth manager by boosting its capabilities</p></div>
        <div class="vc-help__pgm">${pgmBadge()}</div>
      </div>`;
  }
  if (tab === "resources") {
    return `
      <p class="desk-resources__head"><img src="${D}sparkle-24.svg" alt="" />You can learn about the following topics to help you with this work</p>
      <div class="desk-resources">${c.resources.map(([t, d]) => `
        <div class="resource"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join("")}</div>`;
  }
  if (tab === "journal") {
    const p = deskProgress(woId);
    const rows = [
      ["Process Documentation", "No. of journal entries added", pad2(journalEntries(woId))],
      ["VC Artefacts Submitted", "", `${submittedVcs(woId)} of ${Object.keys(c.vcs).length}`],
      ["VC Artefacts Graded", "By a community mentor", `${artefactVcs(woId)} of ${Object.keys(c.vcs).length}`],
      ["Final Asset Submission Status", "", p.final ? (p.final.level ? "Verified" : "Verification Pending") : "Not Submitted"],
    ];
    // Figma: "Asset Quality" is not shown until the asset is submitted.
    if (p.final) rows.push(["Asset Quality", "Graded by a community mentor, based on process documentation & artefact submission", p.final.level ? `L${p.final.level}` : "In review"]);
    return `
      <div class="desk-journal">
        <h3 class="desk-journal__title">Here’s the progress you’ve made towards the impact journal entry for this asset</h3>
        <div class="desk-journal__actions">
          <button type="button" class="desk-btn desk-btn--soft"><img src="${D}add-purple.svg" alt="" />Add Journal Entry</button>
          <button type="button" class="desk-btn"><img src="${D}pause.svg" alt="" />View Impact Journal</button>
        </div>
        <div class="desk-journal__rows">${rows.map(([t, s, v]) => `
          <div class="desk-journal__row"><div><b>${t}</b>${s ? `<p>${s}</p>` : ""}</div><b>${v}</b></div>`).join("")}</div>
      </div>`;
  }
  return `
    <div class="bg-block"><p class="kicker">Why this work is needed</p><p>${esc(c.why)}</p></div>
    <div class="bg-block"><p class="kicker">About ‘${esc(c.venture)}’</p><p>${esc(c.about)}</p></div>`;
}

function pageDesk() {
  const header = `
    <div class="page-header">
      <h1 class="page-header__title">Desk</h1>
      <p class="page-header__sub">Work that you are currently focussing on appears here.</p>
    </div>`;
  const woId = deskWo();
  if (woId === undefined) {
    return `${header}
      <section class="desk-empty-wrap">
        <div class="desk-empty">
          <img src="${G}empty-work.png" alt="" />
          <p>You have no work in focus yet, add work from your growth track</p>
          <a class="gt-empty__btn desk-empty__btn" href="#growth"><img src="${D}add-light.svg" alt="" />Add Now</a>
        </div>
      </section>`;
  }
  const role = roleName(state.growth.deskRole || activeRole());
  const p = deskProgress(woId);
  const c = woContent(woId); // work-orders.js
  const arts = artefactVcs(woId);
  const submit = p.final
    ? p.final.level
      ? `<button type="button" class="desk-submit__btn is-done" disabled>Deliverable Verified</button><p>${esc(p.final.title)} · graded L${p.final.level} by a community mentor</p>`
      : `<button type="button" class="desk-submit__btn is-done" disabled>Verification Pending</button><p>${esc(p.final.title)} · a community mentor is reviewing it</p>`
    : `<button type="button" class="desk-submit__btn" data-desk="submit-final" ${arts >= c.gate ? "" : "disabled"}>Submit Final Deliverable</button>
       <p>${arts >= c.gate ? `Ready to submit — your artefacts are graded (${c.gate}/${c.gate})` : `Get at least ${c.gate} construct artefacts graded first (${arts}/${c.gate})`}</p>`;
  return `${header}
    <section class="desk-wo">
      <div class="desk-wo__info">
        <div>
          <p class="desk-wo__service">${esc(c.service)}</p>
          <h2 class="desk-wo__title">${esc(c.title)}</h2>
        </div>
        <p class="desk-wo__tags"><span class="tag-role">${esc(role)}</span><span class="tag-industry">${esc(c.industry)}</span></p>
        <p class="desk-wo__since">On Desk Since: <span>Today</span></p>
      </div>
      <div class="desk-wo__actions">
        <button type="button" class="desk-btn" data-desk="pause"><img src="${D}pause.svg" alt="" />Pause this Work</button>
        <div class="desk-submit">${submit}</div>
      </div>
    </section>
    <section class="desk-block">
      <div class="unlock">
        <p class="unlock__label">To Unlock Paid Work For ‘${esc(role)}’</p>
        <div class="unlock__items">${unlockItems("desk").map(([t, d]) => `
          <div class="unlock__item unlock__item--gold"><img src="${G}progress-pending.png" alt="" /><span><b>${t}</b><span>${d}</span></span></div>`).join("")}</div>
      </div>
      <div class="pgm-note">${pgmBadge()}<p>${esc(c.pgm)}</p></div>
    </section>
    ${p.lastVc ? `
    <section class="desk-block desk-block--tight">
      <p class="unlock__label">Continue Working On</p>
      <div class="desk-continue">${vcCard(woId, p.lastVc, { wrap: false })}</div>
    </section>` : ""}
    <section class="desk-tabs">
      ${tabs(DESK_TABS, p.tab, "desk-tab").replace('class="gt-tabs"', 'class="gt-tabs gt-tabs--purple"')}
      ${deskTabContent(woId, p.tab)}
    </section>`;
}

const deskPage = document.getElementById("desk-page");
function renderDesk() {
  closeAllOverlays();
  deskPage.innerHTML = pageDesk();
}

// "Pausing Work" confirmation (Figma 1025:4319)
function confirmPause() {
  openOverlay(`
    <div class="confirm-modal" role="alertdialog" aria-modal="true" aria-labelledby="pause-title">
      <div class="confirm-modal__body">
        <img src="assets/session/pause-dark.svg" alt="" />
        <h2 id="pause-title">Pausing Work</h2>
        <p>Pausing this work removes it from your desk. Your progress is saved and you can continue working on this later.</p>
        <p>Are you sure you want to continue?</p>
      </div>
      <div class="confirm-modal__actions">
        <button type="button" data-close>Cancel</button>
        <button type="button" class="is-primary" data-confirm autofocus>Yes, Pause Work</button>
      </div>
    </div>`, "modal").querySelector("[data-confirm]").addEventListener("click", () => {
    state.growth.desk.clear();
    if (state.session) state.session = null;
    closeAllOverlays();
    render();
    showToast("Work paused. Your progress is saved.");
  });
}

deskPage.addEventListener("click", (e) => {
  const el = e.target.closest("[data-desk], [data-action='desk-tab']");
  if (!el) return;
  const woId = deskWo();
  if (el.dataset.action === "desk-tab") {
    deskProgress(woId).tab = el.dataset.tab;
    render();
  } else if (el.dataset.desk === "pause") confirmPause();
  else if (el.dataset.desk === "work-on") startSession(woId, Number(el.dataset.vc)); // session.js
  else if (el.dataset.desk === "submit-final") {
    openArtefactModal("Submit Final Deliverable", (item) => { // session.js
      deskProgress(woId).final = { ...item, status: "pending" };
      render();
      showToast("A community mentor will review & grade your submission");
    });
  }
});
