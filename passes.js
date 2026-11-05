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
    openCheckout(`credits-${picked}`);
  });
  draw();
}

// ---------- Checkout: a full page (#checkout/program-<id> or #checkout/credits-<pack>) ----------
// Left: what's being bought and the total. Right: UPI, card or net banking. After paying, a receipt with Continue.
// What's typed is only checked for shape and never kept (only the last digits / bank name, for the receipt).
const BANKS = ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank", "Punjab National Bank"];
const PAY_METHODS = [["upi", "UPI"], ["card", "Card"], ["netbanking", "Net banking"]];
const payRef = () => `CL${Date.now().toString(36).toUpperCase()}`;
const checkoutEl = document.getElementById("checkout-page");
let checkoutFrom = "programs"; // where Back (and Continue, for credits) returns to
let checkout = null; // { key, method, bank, paid: { via, ref, at } }

// What a checkout key buys: { name, sub, price, credits, done() }
function checkoutItem(key) {
  const [kind, id] = (key || "").split(/-(.+)/);
  if (kind === "program" && programById(id)) {
    const program = programById(id), pass = PASSES[program.pass];
    return { name: program.name, sub: `${program.tag} · includes ${credits(pass.credits)} credits`, price: pass.price, credits: pass.credits,
      cta: "Go to Growth Track", done: () => enroll(program) };
  }
  if (kind === "credits" && CREDIT_PACKS[id]) {
    const [n, price] = CREDIT_PACKS[id];
    return { name: `${credits(n)} credits`, sub: "Credit pack", price, credits: n, cta: "Done", done: () => buyCredits(n) };
  }
  return null;
}
function openCheckout(key) {
  if (currentBase() !== "checkout") checkoutFrom = location.hash.slice(1) || "programs";
  checkout = { key, method: "upi", bank: "", paid: null };
  go(`checkout/${key}`);
}

function renderCheckout(key) {
  const item = checkoutItem(key);
  if (!item) return go(checkoutFrom);
  if (!checkout || checkout.key !== key) checkout = { key, method: "upi", bank: "", paid: null };
  checkoutEl.innerHTML = checkout.paid ? receipt(item) : `
    <div class="co">
      <aside class="co__summary">
        <a class="co__back" href="#${checkoutFrom}"><span aria-hidden="true">←</span> Back</a>
        <p class="co__merchant"><img src="assets/menu/logo-icon.jpg" alt="" />Caarya Life</p>
        <div class="co__due"><p>Pay Caarya Life</p><p class="co__amount">${rupees(item.price)}</p></div>
        <div class="co__lines">
          <div class="co__line"><div><p>${item.name}</p><small>${item.sub}</small></div><p>${rupees(item.price)}</p></div>
          <div class="co__line"><p>Subtotal</p><p>${rupees(item.price)}</p></div>
          <div class="co__line co__total"><p>Total due today</p><p>${rupees(item.price)}</p></div>
        </div>
        <p class="co__secure"><img src="${G}lock-small.svg" alt="" />Payments are encrypted and secure</p>
      </aside>
      <main class="co__pay">
        <form class="co__form" novalidate>
          <h1>Payment method</h1>
          <div class="pay__tabs" role="tablist">${PAY_METHODS.map(([k, label]) => `
            <button type="button" role="tab" aria-selected="${k === checkout.method}" class="pay__tab${k === checkout.method ? " is-on" : ""}" data-method="${k}">${label}</button>`).join("")}</div>
          <div class="co__fields">${payFields()}</div>
          <p class="pay__error" role="alert"></p>
          <button type="submit" class="co__submit">Pay ${rupees(item.price)}</button>
        </form>
      </main>
    </div>`;
}

const payField = (label, attrs) => `<label class="pay__field"><span>${label}</span><input ${attrs} /></label>`;
function payFields() {
  if (checkout.method === "upi") return `${payField("UPI ID", 'name="upi" placeholder="yourname@bank" autocomplete="off" inputmode="email"')}
    <p class="pay__hint">You’ll get a request in your UPI app to approve the payment.</p>`;
  if (checkout.method === "card") return `
    <div class="pay__field"><span>Card information</span>
      <div class="co__card">
        <input name="card" aria-label="Card number" placeholder="1234 1234 1234 1234" autocomplete="cc-number" inputmode="numeric" maxlength="23" />
        <div><input name="exp" aria-label="Expiry" placeholder="MM / YY" autocomplete="cc-exp" inputmode="numeric" maxlength="7" />
          <input name="cvv" aria-label="CVV" placeholder="CVV" autocomplete="cc-csc" inputmode="numeric" maxlength="4" type="password" /></div>
      </div>
    </div>
    ${payField("Name on card", 'name="holder" autocomplete="cc-name"')}`;
  return `<div class="pay__field"><span>Your bank</span><div class="pay__banks" role="radiogroup" aria-label="Bank">${BANKS.map((b) => `
    <button type="button" role="radio" aria-checked="${checkout.bank === b}" class="pay__bank${checkout.bank === b ? " is-on" : ""}" data-bank="${b}">${b}</button>`).join("")}</div></div>`;
}
// Light checks on the shape of what's entered.
function payProblem(f) {
  if (checkout.method === "upi") return /^[\w.-]{2,}@[a-z]{2,}$/i.test(f.upi.value.trim()) ? "" : "Enter a valid UPI ID, like yourname@bank.";
  if (checkout.method === "card") {
    const num = f.card.value.replace(/\D/g, "");
    if (num.length < 12 || num.length > 19) return "Enter a valid card number.";
    const [, mm, yy] = f.exp.value.match(/^(\d{2})\s*\/\s*(\d{2})$/) || [];
    if (!mm || mm < 1 || mm > 12 || new Date(2000 + Number(yy), Number(mm)) < new Date()) return "Enter a valid expiry date.";
    if (!/^\d{3,4}$/.test(f.cvv.value)) return "Enter the CVV.";
    return f.holder.value.trim() ? "" : "Enter the name on the card.";
  }
  return checkout.bank ? "" : "Choose your bank.";
}
// How the receipt names the payment: "UPI · priya@okbank", "Card •••• 4242", "HDFC Bank".
function paidVia(f) {
  if (checkout.method === "upi") return `UPI · ${f.upi.value.trim()}`;
  if (checkout.method === "card") return `Card •••• ${f.card.value.replace(/\D/g, "").slice(-4)}`;
  return `Net banking · ${checkout.bank}`;
}

// Receipt (reference: a purchase summary): the amount, the date, what was bought and how it was paid.
function receipt(item) {
  const p = checkout.paid;
  const on = new Date(p.at).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  return `
    <div class="co-done">
      <div class="co-done__card" role="status">
        <img class="co-done__tick" src="${CA}done.svg" alt="" />
        <p class="co-done__amount">${rupees(item.price)}</p>
        <p class="co-done__on">Paid to Caarya Life on ${on}</p>
        <section class="co-done__block">
          <h2>Summary</h2>
          <div class="co__line"><div><p>${item.name}</p><small>${item.sub}</small></div><p>${rupees(item.price)}</p></div>
          <div class="co__line co__total"><p>Total</p><p>${rupees(item.price)}</p></div>
        </section>
        <section class="co-done__block">
          <h2>Payment</h2>
          <div class="co__line"><p>${esc(p.via)}</p><p>${rupees(item.price)}</p></div>
          <p class="co-done__ref">Reference ${p.ref}</p>
        </section>
        <button type="button" class="co__submit" data-co-continue>${item.cta} <span aria-hidden="true">→</span></button>
      </div>
    </div>`;
}

checkoutEl.addEventListener("click", (e) => {
  const m = e.target.closest("[data-method]");
  if (m) { checkout.method = m.dataset.method; return renderCheckout(checkout.key); }
  const b = e.target.closest("[data-bank]");
  if (b) { checkout.bank = b.dataset.bank; checkoutEl.querySelector(".co__fields").innerHTML = payFields(); return; }
  if (e.target.closest("[data-co-continue]")) {
    const item = checkoutItem(checkout.key);
    const credit = checkout.key.startsWith("credits");
    checkout = null;
    if (credit) go(checkoutFrom); // a top-up returns to where it started; enrolling lands on Growth Track
    item.done();
  }
});
// Card number in groups of four, expiry as MM / YY.
checkoutEl.addEventListener("input", (e) => {
  const t = e.target;
  if (t.name === "card") t.value = t.value.replace(/\D/g, "").slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 ");
  if (t.name === "exp") { const d = t.value.replace(/\D/g, "").slice(0, 4); t.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d; }
  if (t.name === "cvv") t.value = t.value.replace(/\D/g, "");
});
checkoutEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const err = payProblem(f);
  f.querySelector(".pay__error").textContent = err;
  if (err) return;
  const via = paidVia(f);
  const btn = f.querySelector(".co__submit");
  btn.disabled = true;
  btn.innerHTML = `<span class="pay__spinner" aria-hidden="true"></span>Processing…`;
  f.querySelectorAll("input, .pay__tab, .pay__bank").forEach((el) => (el.disabled = true));
  const key = checkout.key;
  setTimeout(() => {
    if (!checkout || checkout.key !== key || currentBase() !== "checkout") return; // left the page: no payment
    checkout.paid = { via, ref: payRef(), at: Date.now() };
    renderCheckout(key);
  }, PAY_MS);
});

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
