// Passes and credits (a mock: no payment is taken). After set-up a pod mentor reviews the user; the Talent Manager
// then tells them which passes they can buy (Camp messages in camp.js).
//   Learner Pass     Experience Studio work and unpaid gigs
//   Worker Pass      paid gigs and jobs / CGOs: eligible once a pod mentor grades work submitted on the Desk
//   Integrated Pass  both; available with the Learner Pass, its industrial half opens once the user is eligible for it
// Any pass opens the real Growth Track and Your Work. Credits are separate: they unlock (with 200 free) when the user
// first unlocks Your Network or Your Knowledge Space, or buys a pass, and can be topped up from the account menu.
// Demo shortcut (mentor-sim.js): Shift+L approves Learner Pass eligibility.

const PASSES = {
  learner: { name: "Learner Pass", price: 2999, credits: 2000, unlocks: ["Experience Studio work", "Unpaid gigs, as you reach them", "Your Work: Desk and Session Logs"] },
  worker: { name: "Worker Pass", price: 2999, credits: 2000, unlocks: ["Paid gigs", "Jobs / CGOs", "Your Work: Desk and Session Logs"] },
  integrated: { name: "Integrated Pass", price: 4999, credits: 5000, unlocks: ["Everything in the Learner Pass", "Paid gigs and jobs / CGOs, once you’re eligible for them", "Your Work: Desk and Session Logs"] },
};
const CREDIT_PACKS = [[500, 499], [1000, 999], [2500, 2499]]; // [credits, price in ₹] (prices are placeholders)
const FREE_CREDITS = 200;
const PAY_MS = 1200; // the mock payment "processing"
const P = "assets/passes/";

state.pass = { eligible: new Set(), owned: new Set() }; // eligible: "learner" (pod mentor), "worker" (graded Desk work)

const rupees = (n) => `₹${n.toLocaleString("en-IN")}`;
const credits = (n) => n.toLocaleString("en-IN");
const owns = (k) => state.pass.owned.has(k);
// Returning users (the demo account) have the full product.
const hasPass = () => !isFresh() || state.pass.owned.size > 0;
const workerEligible = () => !isFresh() || state.pass.eligible.has("worker");
const passEligible = (k) => k === "worker" ? workerEligible() : state.pass.eligible.has("learner") || workerEligible();
const passesOpen = () => isFresh() && passEligible("learner");
const canLearn = () => !isFresh() || owns("learner") || owns("integrated");
const canWork = () => !isFresh() || owns("worker") || (owns("integrated") && workerEligible());
const creditsOn = () => !isFresh() || state.camp.unlocked.has("credits");

// Called on every workspace render (workspace.js): a pass holder whose Desk asset is graded becomes worker-eligible.
function syncPasses() {
  if (isFresh() && hasPass() && Object.values(state.deskData).some((p) => p.final?.level)) state.pass.eligible.add("worker");
}

function addCredits(n) {
  state.coins += n;
  state.coinsMax += n;
}
// The first time credits open, the user gets some to spend as they choose; the spotlight (camp.js) introduces them.
function unlockCredits() {
  if (creditsOn()) return;
  unlock("credits");
  addCredits(FREE_CREDITS);
}

// Why a tab on Explore Work is closed by the user's passes ("" when it isn't).
function passLock(tab) {
  if (tab === "studio" || tab === "unpaid") return canLearn() ? "" : "Get the Learner Pass or Integrated Pass to unlock this";
  if (canWork()) return "";
  if (!workerEligible()) return owns("integrated") ? "Opens on your Integrated Pass once a pod mentor grades work you submit on the Desk"
    : "Unlocks once a pod mentor grades work you submit on the Desk";
  return "Get the Worker Pass to unlock paid gigs and jobs";
}

// ---------- Pass picker ----------
const modalHead = (title) => `
  <header class="pgm-modal__head pass-modal__head">
    <h2 class="pass-modal__title">${title}</h2>
    <button type="button" class="pgm-modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
  </header>`;

function passState(k) {
  if (owns(k)) return ["is-owned", "Active"];
  if (k !== "integrated" && owns("integrated")) return ["is-owned", "Included in your Integrated Pass"];
  if (!passEligible(k)) return ["is-locked", "Unlocks once a pod mentor grades work you submit on the Desk"];
  return ["", ""];
}

function openPasses(preselect) {
  let picked = preselect && !passState(preselect)[0] ? preselect : Object.keys(PASSES).find((k) => !passState(k)[0]) || "";
  const ov = openOverlay(`<div class="pgm-modal pass-modal" role="dialog" aria-modal="true" aria-label="Choose your pass"></div>`, "modal");
  const box = ov.querySelector(".pass-modal");
  function draw() {
    box.innerHTML = `${modalHead("Choose your pass")}
      <div class="pgm-modal__body pgm-modal__scroll pass-modal__body">
        <p>Each pass opens a part of the platform and comes with credits. You can add another pass later.</p>
        <div class="pass-grid" role="radiogroup" aria-label="Passes">${Object.entries(PASSES).map(([k, p]) => {
          const [cls, note] = passState(k);
          const on = picked === k;
          return `
          <button type="button" role="radio" aria-checked="${on}" class="pass-card ${cls}${on ? " is-selected" : ""}" data-pass="${k}" ${cls ? "disabled" : ""}>
            <span class="pass-card__name">${p.name}</span>
            <span class="pass-card__price">${rupees(p.price)}</span>
            <span class="pass-card__credits"><img src="${G}coins-dark.svg" alt="" />${credits(p.credits)} credits included</span>
            <span class="pass-card__list">${p.unlocks.map((u) => `<span><img src="${CA}done.svg" alt="" />${u}</span>`).join("")}</span>
            ${note ? `<span class="pass-card__note">${cls === "is-locked" ? `<img src="${G}lock-small.svg" alt="" />` : ""}${note}</span>` : ""}
          </button>`;
        }).join("")}</div>
      </div>
      <footer class="pgm-modal__foot pass-modal__foot">
        <span></span>
        <button type="button" class="pgm-btn" data-pass-next ${picked ? "" : "disabled"}>Continue <span aria-hidden="true">→</span></button>
      </footer>`;
  }
  ov.addEventListener("click", (e) => {
    const card = e.target.closest("[data-pass]");
    if (card && !card.disabled) { picked = card.dataset.pass; return draw(); }
    if (!e.target.closest("[data-pass-next]") || !picked) return;
    closeOverlay();
    openCheckout({ kind: "pass", key: picked });
  });
  draw();
}

// ---------- Credit top-up ----------
function openTopUp() {
  let picked = 1;
  const ov = openOverlay(`<div class="pgm-modal pass-modal pass-modal--credits" role="dialog" aria-modal="true" aria-label="Top up credits"></div>`, "modal");
  const box = ov.querySelector(".pass-modal");
  function draw() {
    box.innerHTML = `${modalHead("Top up credits")}
      <div class="pgm-modal__body pgm-modal__scroll pass-modal__body">
        <p>Credits are spent on work orders, in your Knowledge Space and in your Network. You have <b>${credits(state.coins)}</b>.</p>
        <div class="pass-grid" role="radiogroup" aria-label="Credit packs">${CREDIT_PACKS.map(([n, price], i) => `
          <button type="button" role="radio" aria-checked="${picked === i}" class="pass-card pass-card--pack${picked === i ? " is-selected" : ""}" data-pack="${i}">
            <span class="pass-card__credits"><img src="${G}coins-dark.svg" alt="" />Credit pack</span>
            <span class="pass-card__name">${credits(n)} credits</span>
            <span class="pass-card__price">${rupees(price)}</span>
          </button>`).join("")}</div>
      </div>
      <footer class="pgm-modal__foot pass-modal__foot">
        <span></span>
        <button type="button" class="pgm-btn" data-pack-next>Continue <span aria-hidden="true">→</span></button>
      </footer>`;
  }
  ov.addEventListener("click", (e) => {
    const card = e.target.closest("[data-pack]");
    if (card) { picked = Number(card.dataset.pack); return draw(); }
    if (!e.target.closest("[data-pack-next]")) return;
    closeOverlay();
    openCheckout({ kind: "credits", pack: picked });
  });
  draw();
}

// ---------- Checkout (mock) ----------
function openCheckout(item) {
  const pass = item.kind === "pass" ? PASSES[item.key] : null;
  const [packCredits, packPrice] = pass ? [pass.credits, pass.price] : CREDIT_PACKS[item.pack];
  const name = pass ? pass.name : `${credits(packCredits)} credits`;
  const ov = openOverlay(`
    <div class="pgm-modal pass-modal pass-modal--checkout" role="dialog" aria-modal="true" aria-label="Checkout">
      ${modalHead("Checkout")}
      <div class="pgm-modal__body pass-modal__body">
        <div class="checkout__item">
          <div><p class="checkout__name">${name}</p>
            <p class="checkout__sub">${pass ? `Includes ${credits(packCredits)} credits` : "Credit pack"}</p></div>
          <p class="checkout__price">${rupees(packPrice)}</p>
        </div>
        <dl class="checkout__rows">
          <div><dt>Subtotal</dt><dd>${rupees(packPrice)}</dd></div>
          <div class="checkout__total"><dt>Total</dt><dd>${rupees(packPrice)}</dd></div>
        </dl>
        <p class="checkout__note">This is a mock payment for the prototype. Nothing is charged.</p>
      </div>
      <footer class="pgm-modal__foot pass-modal__foot">
        <button type="button" class="pgm-prev" data-pay-back><span aria-hidden="true">←</span> Back</button>
        <button type="button" class="pgm-btn" data-pay>Pay ${rupees(packPrice)}</button>
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    if (e.target.closest("[data-pay-back]")) {
      closeOverlay();
      return pass ? openPasses(item.key) : openTopUp();
    }
    const pay = e.target.closest("[data-pay]");
    if (!pay || pay.disabled) return;
    pay.disabled = true;
    pay.textContent = "Processing…";
    ov.querySelector("[data-pay-back]").disabled = true;
    setTimeout(() => { closeOverlay(); pass ? buyPass(item.key) : buyCredits(packCredits); }, PAY_MS);
  });
}

// A pass opens the real Growth Track and Your Work; the spotlights (camp.js) then show what's new.
function buyPass(k) {
  const p = PASSES[k];
  state.pass.owned.add(k);
  unlockCredits();
  addCredits(p.credits);
  unlock("desk", "session-logs");
  go("growth");
  showToast(`${p.name} active\n${credits(p.credits)} credits added`, undefined, POPUP_DELAY_MS, "step");
}
function buyCredits(n) {
  addCredits(n);
  render();
  showToast(`${credits(n)} credits added`);
}
