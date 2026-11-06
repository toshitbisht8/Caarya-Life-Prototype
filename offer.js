// A recruiter's offer: once a new user has a Learner Pass (or the Integrated Program) and submits their first
// artefact, the Talent Manager passes on that a client wants to work with them (camp.js MESSAGE_DEFS "recruiter").
// Saying yes puts the client's work order under Paid Gigs on Explore Work (growth.js), free to pick up.

const OFFER_RECRUITER = { name: "Ananya Rao", role: "Head of Marketing" };
const OFFER_PAY = 5000; // ₹, paid on delivery
// null until the offer is made; then { wo, role, answer: null | "yes" | "no" }
state.offer = null;

const artefactCount = () => Object.values(state.deskData).reduce((n, p) => n + Object.values(p.vcs).reduce((m, v) => m + v.artefacts.length, 0), 0);
const anyTracked = (id) => Object.values(state.growth.tracks).some((t) => t.includes(id));

// The client's work order: a real one for one of the user's roles that they haven't picked up, else any real one.
function pickOffer() {
  const mine = myRoles().flatMap((r) => catalogFor(r).map((id) => [id, r]));
  const all = WORK_ORDER_CATALOG.map((wo) => [wo.ui.id, activeRole()]);
  const [wo, role] = [...mine, ...all].find(([id]) => !anyTracked(id)) || [];
  return wo ? { wo, role, answer: null } : null;
}
const offerDue = () => isFresh() && canLearn() && artefactCount() > 0 && !!(state.offer ||= pickOffer());
const offerVenture = () => woContent(state.offer.wo).venture;
const isOfferWo = (id) => state.offer?.answer === "yes" && state.offer.wo === id;
// Left out of the Experience Studio lists once it's been offered (it's the client's paid gig).
const notOffered = (id) => !state.offer || state.offer.wo !== id;

const offerText = () => `Good news, ${firstName()}! ${OFFER_RECRUITER.name} from ${offerVenture()} has seen your work and wants to work with you on a paid gig. Would you be interested?`;

function openOffer() {
  const m = state.camp.inbox.find((x) => x.id === "recruiter");
  m.read = true;
  const d = woContent(state.offer.wo);
  const answered = state.offer.answer;
  const ov = openOverlay(`
    <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-label="Message from your Talent Manager">
      <header class="pgm-modal__head">
        <span class="pgm-modal__from">${MANAGERS.talent[1]}${MANAGERS.talent[0]}<span class="camp-msg__time">${msgTime(m.at)}</span></span>
        <button type="button" class="pgm-modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      </header>
      <div class="pgm-modal__body brand-gig">
        <p class="pgm-modal__kicker">Paid Gig · ${esc(d.venture)}</p>
        <h2>${esc(d.venture)} wants to work with you</h2>
        <p>${esc(OFFER_RECRUITER.name)}, ${esc(OFFER_RECRUITER.role)} at ${esc(d.venture)}, has seen the work you’ve been submitting and would like you to take on a paid gig for them.</p>
        <div class="offer__wo">
          <p class="offer__service">${esc(d.service)}</p>
          <p class="offer__title">${esc(d.title)}</p>
          <p>${esc(d.desc)}</p>
        </div>
        <dl class="brand-gig__facts">
          <div><dt>Pay</dt><dd>${rupees(OFFER_PAY)}</dd></div>
          <div><dt>Time</dt><dd>${esc(d.tags[3].replace(/\s*\(.*\)/, ""))}</dd></div>
          <div><dt>You deliver</dt><dd>${esc(d.produces[0])}</dd></div>
        </dl>
        ${answered ? `<p class="offer__answer">${answered === "yes"
          ? "You said yes. The work order is waiting for you under Paid Gigs."
          : `You passed on this one. I’ve let ${esc(OFFER_RECRUITER.name.split(" ")[0])} know.`}</p>` : ""}
      </div>
      <footer class="pgm-modal__foot${answered === "yes" ? " pgm-modal__foot--center" : ""}">
        ${answered === "yes" ? `<button type="button" class="pgm-btn" data-offer="go">View in Paid Gigs <span aria-hidden="true">→</span></button>`
          : answered ? `<span></span><button type="button" class="pgm-btn" data-close>Close</button>`
          : `<button type="button" class="pgm-prev" data-offer="no">Not right now</button>
             <button type="button" class="pgm-btn" data-offer="yes">I’m interested <span aria-hidden="true">→</span></button>`}
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    const a = e.target.closest("[data-offer]")?.dataset.offer;
    if (!a) return;
    closeOverlay();
    if (a === "no") {
      state.offer.answer = "no";
      render();
      return showToast(`Got it. I’ll let ${OFFER_RECRUITER.name.split(" ")[0]} know you’re not taking this one on.`);
    }
    if (a === "yes") state.offer.answer = "yes";
    showOfferGig();
  });
}

// Explore Work, on Paid Gigs, where the client's work order sits.
function showOfferGig() {
  if (state.offer.role) state.growth.activeRole = state.offer.role;
  state.growth.exploreTab = "paid";
  go("explore-all");
}

// The card under Paid Gigs, with who sent it.
const offerCard = () => `
  <div class="offer-gig">
    <p class="offer-gig__head"><span class="offer-gig__avatar">${MSG_AVATAR.talent}</span>Sent to you by ${esc(OFFER_RECRUITER.name)}, ${esc(offerVenture())} · ${rupees(OFFER_PAY)}</p>
    ${woCard(state.offer.wo, "explore")}
  </div>`;

// Picking it up: free (the client pays you), onto the track of the role it was offered for.
function pickUpOffer() {
  const { wo, role } = state.offer;
  const r = role || activeRole();
  if (anyTracked(wo)) return;
  trackFor(r).push(wo);
  state.growth.activeRole = r;
  state.growth.justAdded = wo;
  go("growth");
  showToast("Paid Gig Added To Growth Track", {
    label: "Add to Desk", icon: "assets/session/add-white.svg", onClick: () => addToDesk(wo, r),
  });
}
