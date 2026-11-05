// Programs, passes and credits. After set-up a pod mentor reviews the user; the Talent Manager then tells them which
// programs they can enroll in (Camp messages in camp.js). Each program comes with a pass, and passes control access:
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
const PAY_MS = 1600; // "processing" on the payment screen
const P = "assets/passes/";

// Programs on offer (the Programs page, which Growth Track shows until the user has a pass).
const PROGRAMS = [
  { id: "safari", name: "Industry Safari", pass: "learner", tag: "Learner Pass" },
  { id: "castles", name: "Career Castles", pass: "learner", tag: "Learner Pass" },
  { id: "fusion", name: "Fusion Work Study", pass: "worker", tag: "Worker Pass" },
  { id: "integrated", name: "Integrated Program", pass: "integrated", tag: "Learner + Worker Pass" },
];
const programById = (id) => PROGRAMS.find((p) => p.id === id);

// eligible: "learner" (pod mentor), "worker" (graded Desk work); owned: passes; programs: program ids enrolled in
state.pass = { eligible: new Set(), owned: new Set(), programs: new Set() };

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
  if (tab === "studio" || tab === "unpaid") return canLearn() ? "" : "Enroll in a program to unlock this";
  if (canWork()) return "";
  if (!workerEligible()) return owns("integrated") ? "Opens on your Integrated Pass once a pod mentor grades work you submit on the Desk"
    : "Unlocks once a pod mentor grades work you submit on the Desk";
  return "Enroll in Fusion Work Study to unlock paid gigs and jobs";
}

const modalHead = (title) => `
  <header class="pgm-modal__head pass-modal__head">
    <h2 class="pass-modal__title">${title}</h2>
    <button type="button" class="pgm-modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
  </header>`;

// ---------- Programs page (references: the user's pricing-page examples) ----------
// [class, note]: enrolled, locked until eligible, or open to enroll.
function programState(p) {
  if (state.pass.programs.has(p.id)) return ["is-enrolled", "Enrolled"];
  if (!passEligible(p.pass)) return ["is-locked", "Unlocks once a pod mentor grades work you submit on the Desk"];
  return ["", ""];
}
const programsOpenToEnroll = () => PROGRAMS.some((p) => !programState(p)[0]);
const openPasses = () => go("programs"); // where every "choose a program" link leads

function programCard(p) {
  const pass = PASSES[p.pass];
  const [cls, note] = programState(p);
  const featured = p.pass === "integrated";
  const list = [...pass.unlocks, `${credits(pass.credits)} credits to get you started`];
  return `
    <article class="prog${featured ? " prog--featured" : ""}${cls ? ` ${cls}` : ""}" aria-labelledby="prog-${p.id}">
      <div class="prog__top">
        <div class="prog__title"><h3 id="prog-${p.id}">${p.name}</h3>${featured ? `<span class="prog__badge">Best value</span>` : ""}</div>
        <p class="prog__pass">${p.tag}</p>
        <p class="prog__price">${rupees(pass.price)}</p>
      </div>
      <div class="prog__body">
        <p class="prog__label">Includes</p>
        <ul class="prog__list">${list.map((u) => `<li><img src="${CA}done.svg" alt="" />${u}</li>`).join("")}</ul>
      </div>
      <div class="prog__foot">
        ${cls === "is-enrolled" ? `<span class="prog__state is-on"><img src="${CA}done.svg" alt="" />${note}</span>`
          : cls === "is-locked" ? `<span class="prog__state"><img src="${G}lock-small.svg" alt="" />${note}</span>`
          : `<button type="button" class="pgm-btn" data-enroll="${p.id}">Enroll <span aria-hidden="true">→</span></button>`}
      </div>
    </article>`;
}

function programsPage() {
  const first = !hasPass();
  return `
    <section class="programs">
      ${first ? "" : backLink("Back to Growth Track", "growth")}
      <div class="programs__head">
        <h1>${first ? "Enroll in a program to get started" : "Programs"}</h1>
        <p>${first ? "Each program comes with a pass that opens part of Caarya Life, and credits to get you going."
          : "Add a program to open more of Caarya Life. Each comes with its pass and credits."}</p>
      </div>
      <h2 class="programs__group">Programs</h2>
      <div class="programs__grid">${PROGRAMS.filter((p) => p.pass !== "integrated").map(programCard).join("")}</div>
      <h2 class="programs__group">Learn and work</h2>
      ${PROGRAMS.filter((p) => p.pass === "integrated").map(programCard).join("")}
    </section>`;
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

// ---------- Checkout: the order, then the payment screen ----------
function openCheckout(item) {
  const program = item.kind === "program" ? programById(item.id) : null;
  const pass = program ? PASSES[program.pass] : null;
  const [packCredits, packPrice] = pass ? [pass.credits, pass.price] : CREDIT_PACKS[item.pack];
  const name = program ? program.name : `${credits(packCredits)} credits`;
  const ov = openOverlay(`
    <div class="pgm-modal pass-modal pass-modal--checkout" role="dialog" aria-modal="true" aria-label="Checkout">
      ${modalHead("Checkout")}
      <div class="pgm-modal__body pass-modal__body">
        <div class="checkout__item">
          <div><p class="checkout__name">${name}</p>
            <p class="checkout__sub">${program ? `${program.tag} · includes ${credits(packCredits)} credits` : "Credit pack"}</p></div>
          <p class="checkout__price">${rupees(packPrice)}</p>
        </div>
        <dl class="checkout__rows">
          <div><dt>Subtotal</dt><dd>${rupees(packPrice)}</dd></div>
          <div class="checkout__total"><dt>Total</dt><dd>${rupees(packPrice)}</dd></div>
        </dl>
      </div>
      <footer class="pgm-modal__foot pass-modal__foot">
        <button type="button" class="pgm-prev" data-pay-back><span aria-hidden="true">←</span> Back</button>
        <button type="button" class="pgm-btn" data-pay>Proceed to pay <span aria-hidden="true">→</span></button>
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    if (e.target.closest("[data-pay-back]")) {
      closeOverlay();
      return program ? undefined : openTopUp(); // the Programs page is behind the checkout
    }
    if (!e.target.closest("[data-pay]")) return;
    closeOverlay();
    openGateway(name, packPrice, () => (program ? enroll(program) : buyCredits(packCredits)), () => openCheckout(item));
  });
}

// ---------- Payment screen ----------
// UPI, card or net banking. What's typed here is only checked for shape and never kept.
const BANKS = ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank", "Punjab National Bank"];
const PAY_METHODS = [["upi", "UPI"], ["card", "Card"], ["netbanking", "Net banking"]];
const payRef = () => `CL${Date.now().toString(36).toUpperCase()}`;

function openGateway(name, price, onPaid, onBack) {
  let method = "upi";
  let bank = "";
  let paid = false;
  const ov = openOverlay(`<div class="pgm-modal pass-modal pay-modal" role="dialog" aria-modal="true" aria-label="Payment"></div>`, "modal",
    () => paid && onPaid()); // closing after a successful payment completes the purchase
  const box = ov.querySelector(".pay-modal");
  const summary = `
    <aside class="pay__summary">
      <p class="pay__merchant"><img src="assets/menu/logo-icon.jpg" alt="" />Caarya Life</p>
      <div><p class="pay__label">Paying for</p><p class="pay__item">${name}</p></div>
      <div><p class="pay__label">Amount</p><p class="pay__amount">${rupees(price)}</p></div>
      <p class="pay__secure"><img src="${G}lock-small.svg" alt="" />Payments are encrypted and secure</p>
    </aside>`;
  const field = (label, attrs) => `<label class="pay__field"><span>${label}</span><input ${attrs} /></label>`;
  const forms = {
    upi: () => `${field("UPI ID", 'name="upi" placeholder="yourname@bank" autocomplete="off" inputmode="email"')}
      <p class="pay__hint">You’ll get a request in your UPI app to approve the payment.</p>`,
    card: () => `${field("Card number", 'name="card" placeholder="1234 5678 9012 3456" autocomplete="cc-number" inputmode="numeric" maxlength="23"')}
      ${field("Name on card", 'name="holder" placeholder="As printed on the card" autocomplete="cc-name"')}
      <div class="pay__row">${field("Expiry", 'name="exp" placeholder="MM / YY" autocomplete="cc-exp" inputmode="numeric" maxlength="7"')}
        ${field("CVV", 'name="cvv" placeholder="•••" autocomplete="cc-csc" inputmode="numeric" maxlength="4" type="password"')}</div>`,
    netbanking: () => `<div class="pay__banks" role="radiogroup" aria-label="Bank">${BANKS.map((b) => `
      <button type="button" role="radio" aria-checked="${bank === b}" class="pay__bank${bank === b ? " is-on" : ""}" data-bank="${b}">${b}</button>`).join("")}</div>`,
  };
  function draw() {
    box.innerHTML = `${modalHead("Payment")}
      <div class="pay__body">
        ${summary}
        <form class="pay__form" novalidate>
          <div class="pay__tabs" role="tablist">${PAY_METHODS.map(([k, label]) => `
            <button type="button" role="tab" aria-selected="${k === method}" class="pay__tab${k === method ? " is-on" : ""}" data-method="${k}">${label}</button>`).join("")}</div>
          <div class="pay__fields">${forms[method]()}</div>
          <p class="pay__error" role="alert"></p>
          <div class="pay__actions">
            <button type="button" class="pgm-prev" data-pay-back><span aria-hidden="true">←</span> Back</button>
            <button type="submit" class="pgm-btn">Pay ${rupees(price)}</button>
          </div>
        </form>
      </div>`;
  }
  // Light checks on the shape of what's entered; nothing is stored.
  function problem(f) {
    if (method === "upi") return /^[\w.-]{2,}@[a-z]{2,}$/i.test(f.upi.value.trim()) ? "" : "Enter a valid UPI ID, like yourname@bank.";
    if (method === "card") {
      const num = f.card.value.replace(/\D/g, "");
      if (num.length < 12 || num.length > 19) return "Enter a valid card number.";
      if (!f.holder.value.trim()) return "Enter the name on the card.";
      const [, mm, yy] = f.exp.value.match(/^(\d{2})\s*\/\s*(\d{2})$/) || [];
      if (!mm || mm < 1 || mm > 12 || new Date(2000 + Number(yy), Number(mm)) < new Date()) return "Enter a valid expiry date.";
      return /^\d{3,4}$/.test(f.cvv.value) ? "" : "Enter the CVV.";
    }
    return bank ? "" : "Choose your bank.";
  }
  function processing() {
    box.querySelector(".pay__form").innerHTML = `<div class="pay__status"><span class="pay__spinner" aria-hidden="true"></span>
      <p class="pay__status-title">Processing your payment</p><p>Please don’t close this window.</p></div>`;
  }
  function success() {
    if (!box.isConnected) return; // closed while processing: no payment
    paid = true;
    box.querySelector(".pay__form").innerHTML = `<div class="pay__status">
      <img class="pay__tick" src="${CA}done.svg" alt="" />
      <p class="pay__status-title">Payment successful</p>
      <p>${rupees(price)} paid for ${name}</p>
      <p class="pay__ref">Reference ${payRef()}</p>
      <button type="button" class="pgm-btn" data-close>Continue <span aria-hidden="true">→</span></button>
    </div>`;
    box.querySelector("[data-close].pgm-btn").focus();
  }
  ov.addEventListener("click", (e) => {
    const m = e.target.closest("[data-method]");
    if (m) { method = m.dataset.method; return draw(); }
    const b = e.target.closest("[data-bank]");
    if (b) { bank = b.dataset.bank; box.querySelector(".pay__fields").innerHTML = forms.netbanking(); return; }
    if (e.target.closest("[data-pay-back]")) { closeOverlay(); onBack(); }
  });
  // Card number in groups of four, expiry as MM / YY.
  ov.addEventListener("input", (e) => {
    const t = e.target;
    if (t.name === "card") t.value = t.value.replace(/\D/g, "").slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 ");
    if (t.name === "exp") { const d = t.value.replace(/\D/g, "").slice(0, 4); t.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d; }
    if (t.name === "cvv") t.value = t.value.replace(/\D/g, "");
  });
  ov.addEventListener("submit", (e) => {
    e.preventDefault();
    const err = problem(e.target);
    box.querySelector(".pay__error").textContent = err;
    if (err) return;
    processing();
    setTimeout(success, PAY_MS);
  });
  draw();
}

// Enrolling gives the program's pass: the real Growth Track and Your Work open; the spotlights (camp.js) show what's new.
function enroll(program) {
  const pass = PASSES[program.pass];
  state.pass.programs.add(program.id);
  state.pass.owned.add(program.pass);
  unlockCredits();
  addCredits(pass.credits);
  unlock("desk", "session-logs");
  go("growth");
  showToast(`Enrolled in ${program.name}\n${pass.name} active · ${credits(pass.credits)} credits added`, undefined, POPUP_DELAY_MS, "step");
}
function buyCredits(n) {
  addCredits(n);
  render();
  showToast(`${credits(n)} credits added`);
}
