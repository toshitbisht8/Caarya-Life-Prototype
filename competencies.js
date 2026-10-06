// Competencies (Figma 1073:25397 technical, 1045:34295 transferable): add technical skills and ask a
// community mentor to verify them, rate comfort with transferable skills. Ratings feed the Profile page.
const CP = "assets/competencies/";

// [{ name, status, level }] — status "new" | "pending" | "verified"; a mentor sets the 1–5 level on verifying.
state.techSkills = [];
state.tSkills = {}; // { skill name: comfort 1–7 }; missing = not rated yet
state.tDraft = null; // transferable ratings being edited (null = viewing)
state.compTab = "technical";

// Technical Skill Proficiency Scale (1045:37323)
const TECH_LEVELS = [
  ["Novice", "Just starting out; limited exposure or practice."],
  ["Beginner", "Understand basics; need guidance for most tasks."],
  ["Competent", "Handle routine tasks independently and reliably."],
  ["Proficient", "Confident across varied and real-world situations."],
  ["Expert", "Solve complex problems and guide others."],
];
// [label, summary shown with the saved rating (1038:7706), prompt shown under the slider (1038:7467)]
const COMFORT_LEVELS = [
  ["Low comfort", "Feels unnatural; usually avoid.", "Does not feel natural, I rarely use this skill."],
  ["Limited comfort", "Can use, but takes conscious effort.", "Can use when needed, but feels effortful."],
  ["Emerging comfort", "Manageable with focus; not yet easy.", "Manageable with focus but not easy yet."],
  ["Moderate comfort", "Works fine in familiar situations.", "Comfortable in familiar or guided situations."],
  ["Good comfort", "Feels mostly natural and reliable.", "Feels natural, I use it fairly often."],
  ["High comfort", "Comes easily; a personal strength.", "Comes easily and feels like a strength."],
  ["Full comfort", "Effortless and instinctive to use.", "Effortless, instinctive, and highly reliable"],
];
// Category title colours on the transferable tab, in TRANSFERABLE order.
const CAT_TEXT = ["#c44eb9", "#6775f5", "#0497ae", "#2bb656", "#fba804", "#f57d34"];

const techSkill = (name) => state.techSkills.find((s) => s.name === name);
// How many achievement cards use a skill.
const skillUses = (name) => state.achievements.filter((a) => a.transferable.includes(name) || a.technical.includes(name) || a.tools.includes(name)).length;
// Domains behind the roles picked at signup (roles are stored as "Domain::Role").
const myDomains = () => ROLE_GROUPS.filter((g) => DOMAIN_DATA[g.name] && g.roles.some((r) => state.roles.has(`${g.name}::${r}`))).map((g) => g.name);

// Suggestions: capabilities of the person's domains, plus anything already on their achievements.
function techSuggestions() {
  const domains = myDomains().length ? myDomains() : ASSET_DOMAINS;
  const used = state.achievements.flatMap((a) => [...a.technical, ...a.tools]);
  return [...new Set([...domains.flatMap(capabilitiesFor), ...used])];
}

// ---------- Shared bits ----------
const diamonds = (level, max) => `
  <span class="dia" role="img" aria-label="${level ? `${level} out of ${max}` : "Not rated"}">${Array.from({ length: max }, (_, i) => `<i class="${i < level ? "is-on" : ""}"></i>`).join("")}</span>`;

// Slider (1045:37323 / 1038:7467). `minor` = small ticks between two numbers.
function scale(name, max, value, kind, minor) {
  const ticks = Array.from({ length: (max - 1) * (minor + 1) + 1 }, (_, i) => `<i class="${i % (minor + 1) === 0 ? "is-major" : ""}"></i>`).join("");
  return `
    <div class="scale scale--${kind}${value ? "" : " is-unset"}">
      <input type="range" min="1" max="${max}" step="1" value="${value || 1}" data-scale="${esc(name)}" data-kind="${kind}" aria-label="${esc(name)}" />
      <div class="scale__ticks" aria-hidden="true">${ticks}</div>
      <div class="scale__nums" aria-hidden="true">${Array.from({ length: max }, (_, i) => `<span>${i + 1}</span>`).join("")}</div>
      <p class="scale__text" data-scale-text></p>
    </div>`;
}

// Writes the description under a slider for its current value.
function paintScale(input) {
  const box = input.closest(".scale");
  const text = box.querySelector("[data-scale-text]");
  if (box.classList.contains("is-unset")) text.innerHTML = "<b>Not rated yet</b>";
  else text.textContent = COMFORT_LEVELS[input.value - 1][2];
}

const tabIcon = (layers, cls = "") => `<span class="cp-icon ${cls}">${layers.map(([file, inset]) => `<span style="inset:${inset}"><img src="${CP}${file}" alt="" /></span>`).join("")}</span>`;
const TECH_ICON = [["tab-technical-1.svg", "5.47%"], ["tab-technical-2.svg", "4.07%"]];
const TRANSFER_ICON = [["tab-transferable.svg", "0.2% 10.27% 0.19% 10.23%"]];

const cpIntro = (title, sub, action, icon, label) => `
  <div class="cp-intro"><div><h2>${title}</h2><p>${sub}</p></div>
    <button type="button" class="cp-text-btn" data-cp="${action}"><img src="${CP}${icon}" alt="" />${label}</button></div>`;

// ---------- Technical ----------
function technicalTab() {
  if (!state.techSkills.length) {
    return `
      <div class="cp-center"><div class="cp-empty">
        ${tabIcon(TECH_ICON, "cp-icon--xl")}
        <div><h2>Add Your Technical Skills</h2><p>Let recruiters know what you’re skilled in</p></div>
        <button type="button" class="btn btn--primary im-add" data-cp="manage-tech"><img src="${IM}add-circle-light.svg" alt="" />Add Now</button>
      </div></div>`;
  }
  return `
    ${cpIntro("Skill Proficiency", "Get your skills verified by a community mentor to show how proficient you are", "manage-tech", "settings.svg", "Manage")}
    <div class="cp-vskills">${state.techSkills.map(techRow).join("")}</div>`;
}

// A skill row (1073:25397): Get Verified → Verification Pending; verified skills show the mentor's rating.
function techRow(s) {
  if (s.status === "verified") {
    const [label, desc] = TECH_LEVELS[s.level - 1];
    return `
      <div class="cp-vskill"><h3>${esc(s.name)}<img src="${CP}verified.svg" alt="Verified" title="Verified by a community mentor" /></h3>
        <div class="cp-rating cp-vskill__rating">${diamonds(s.level, 5)}<p><b>${label}:</b> ${desc}</p></div></div>`;
  }
  return `
    <div class="cp-vskill"><h3>${esc(s.name)}</h3>${s.status === "pending"
      ? `<span class="cp-verify cp-verify--pending">Verification Pending</span>`
      : `<button type="button" class="cp-verify" data-cp-verify="${esc(s.name)}">Get Verified</button>`}</div>`;
}

// Pick which skills are on the list (1045:35589)
function openManageTech() {
  const picked = new Set(state.techSkills.map((s) => s.name));
  const options = [...new Set([...techSuggestions(), ...picked])];
  const ov = openOverlay(`<div class="cp-modal" role="dialog" aria-modal="true" aria-label="Manage Technical Skills"></div>`, "modal");
  const box = ov.querySelector(".cp-modal");
  function draw() {
    box.innerHTML = `
      <header class="im-modal__head"><h2>Manage Technical Skills</h2><button type="button" data-close aria-label="Close"><img src="${IM}close.svg" alt="" /></button></header>
      <div class="cp-modal__body">
        <div class="pick-chips cp-modal__chips">${options.map((s) => `
          <button type="button" class="pick-chip${picked.has(s) ? " is-on" : ""}" data-mt="${esc(s)}" aria-pressed="${picked.has(s)}"><img src="${IM}${picked.has(s) ? "chip-done" : "chip-add"}.svg" alt="" />${esc(s)}</button>`).join("")}</div>
        <form class="wz-add" data-mt-add><input placeholder="Add new skill..." aria-label="Add new skill" /><button type="submit" aria-label="Add"><img src="${IM}add-white.svg" alt="" /></button></form>
      </div>
      <footer class="im-modal__foot">
        <button type="button" class="btn btn--secondary im-back-btn" data-close>Cancel</button>
        <button type="button" class="btn btn--primary im-next" data-mt-save>Save<img src="${CP}done-white.svg" alt="" /></button>
      </footer>`;
  }
  ov.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-mt]");
    if (chip) { picked.has(chip.dataset.mt) ? picked.delete(chip.dataset.mt) : picked.add(chip.dataset.mt); return draw(); }
    if (!e.target.closest("[data-mt-save]")) return;
    // Skills that stay keep their verification status; new ones start unverified.
    state.techSkills = [...picked].map((name) => techSkill(name) || { name, status: "new" });
    closeOverlay();
    render();
  });
  ov.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = ov.querySelector("[data-mt-add] input").value.trim();
    if (!value) return;
    const existing = options.find((s) => s.toLowerCase() === value.toLowerCase());
    if (!existing) options.push(value);
    picked.add(existing || value);
    draw();
    ov.querySelector("[data-mt-add] input").focus();
  });
  draw();
}

// ---------- Transferable ----------
// Viewing (1045:34296) shows saved ratings; Manage switches every skill to a slider (1045:34661) until Save.
function transferableTab() {
  const editing = !!state.tDraft;
  return `
    ${cpIntro("Comfort with Skill Use", "Rate each skill on your level of comfort with using it", editing ? "save-comfort" : "edit-comfort", editing ? "done-all.svg" : "settings.svg", editing ? "Save" : "Manage")}
    <div class="cp-cats">${TRANSFERABLE.map(([cat, skills, line, bg], i) => `
      <section class="cp-cat${editing ? " is-editing" : ""}" style="--cat-line:${line};--cat-bg:${bg};--cat-text:${CAT_TEXT[i]}">
        <p class="cp-cat__head"><span>${esc(cat)}</span><i>?</i></p>
        <div class="cp-cat__skills">${skills.map((s) => {
          const level = state.tSkills[s];
          return `<div class="cp-tskill"><h3>${esc(s)}</h3>
            ${editing ? scale(s, 7, state.tDraft[s], "comfort", 2)
              : `<div class="cp-rating">${diamonds(level || 0, 7)}<p>${level ? `<b>${COMFORT_LEVELS[level - 1][0]}:</b> ${COMFORT_LEVELS[level - 1][1]}` : "<b>Not Rated Yet</b>"}</p></div>`}
          </div>`;
        }).join("")}</div>
      </section>`).join("")}</div>`;
}

// ---------- Page ----------
const competenciesPage = document.getElementById("competencies-page");

function renderCompetencies() {
  closeAllOverlays();
  const tab = state.compTab;
  competenciesPage.innerHTML = `
    <div class="page-header"><h1 class="page-header__title">Competencies</h1><p class="page-header__sub">Add and rate the skills you bring to your work</p></div>
    <div class="cp-panel">
      <div class="cp-tabs" role="tablist">${[["technical", "Technical Skills", TECH_ICON], ["transferable", "Transferable Skills", TRANSFER_ICON]].map(([k, label, icon]) => `
        <button type="button" role="tab" aria-selected="${tab === k}" class="cp-tab${tab === k ? " is-on" : ""}" data-cp-tab="${k}">${tabIcon(icon)}${label}</button>`).join("")}</div>
      <div class="cp-body">${tab === "technical" ? technicalTab() : transferableTab()}</div>
    </div>`;
  competenciesPage.querySelectorAll("[data-scale]").forEach(paintScale);
}

competenciesPage.addEventListener("click", (e) => {
  const verify = e.target.closest("[data-cp-verify]");
  if (verify) {
    techSkill(verify.dataset.cpVerify).status = "pending";
    renderCompetencies();
    return showToast("A community mentor will reach out to you soon");
  }
  const tab = e.target.closest("[data-cp-tab]");
  if (tab) {
    state.compTab = tab.dataset.cpTab;
    state.tDraft = null; // leaving mid-edit drops unsaved comfort ratings
    renderCompetencies();
    return animateIn(competenciesPage.querySelector(".cp-body"));
  }
  switch (e.target.closest("[data-cp]")?.dataset.cp) {
    case "manage-tech": openManageTech(); break;
    case "edit-comfort": state.tDraft = { ...state.tSkills }; renderCompetencies(); break;
    case "save-comfort":
      state.tSkills = state.tDraft;
      state.tDraft = null;
      renderCompetencies();
      showToast("Transferable skill ratings saved");
      break;
  }
});

// Sliders (transferable only): ratings go to the draft until Save.
function onScale(input) {
  input.closest(".scale").classList.remove("is-unset");
  paintScale(input);
  const value = Number(input.value);
  if (state.tDraft) state.tDraft[input.dataset.scale] = value;
}
competenciesPage.addEventListener("input", (e) => e.target.matches("[data-scale]") && onScale(e.target));
// A click on "1" doesn't change the value, so it fires no input event — still counts as rating 1.
competenciesPage.addEventListener("pointerup", (e) => e.target.matches("[data-scale]") && onScale(e.target));
