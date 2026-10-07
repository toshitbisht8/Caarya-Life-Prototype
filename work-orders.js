// Real (sample) work orders, authored with the forge-work-order-builder schema and mapped onto the
// existing Growth Track / Desk / Session UI by woContent() below. Every other work order id keeps the
// Figma placeholder copy. Content is dummy: venture, numbers and constructs are illustrative, not
// drawn from a business-service decomposition yet.
//
// The catalog literal is strict JSON (validated against the skill's build rules). `ui` blocks and the
// per-construct `time` / `ai` / `reads` / `community` fields are prototype-only extras the skill schema doesn't define.
const WORK_ORDER_CATALOG = [
{
 "ref": "WO-DS08-TIFFINLY-FIRSTWEEK-001",
 "ui": {
  "id": 101,
  "roles": ["Prototyper", "Interaction Designer", "Product Designer (UX/UI)"],
  "stage": "Pre-seed startup",
  "category": "Design",
  "time": "15-20 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Interactive Prototype Design",
  "deliverable": "Interactive Prototype",
  "title": "Prototype the first week of a tiffin subscription, and test it with real people",
  "role": "Prototyper",
  "industry": "FoodTech",
  "venture": "Tiffinly"
 },
 "takeaways": {
  "asset": "A tested, clickable prototype of Tiffinly's first-week flow, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 10 artefacts on your record.",
  "kind": "Hands-on making: sketching, building screens that click through, and watching real people use them."
 },
 "pre": {
  "lede": "You'll design and build a clickable prototype of how a new Tiffinly customer picks a meal plan, chooses a home chef and schedules their first week of deliveries. Then you'll put it in front of five real people and change what they stumble on.",
  "produces": "an interactive prototype: the linked, testable flow, the screens and states behind it, and the test evidence that shaped it.",
  "skills_technical": [
   "Figma prototyping",
   "User flow mapping",
   "Wireframing",
   "Interaction design",
   "Component & state design",
   "Usability testing"
  ],
  "skills_transferable": [
   "Problem Solving",
   "Attention to Detail",
   "Empathy",
   "Critical Thinking"
  ],
  "capabilities": [
   ["Prototyping", "turning a set of screens into something a person can actually use and test"],
   ["Interaction Design", "deciding how each tap, transition and state responds to the user"],
   ["UX Research & Testing", "watching real people use the work and acting on what they do"]
  ],
  "resume_line": "Designed and tested a clickable onboarding prototype for Tiffinly, a home-food subscription startup: 3 core tasks, 24 screens across every state, two rounds of usability testing with 5 users.",
  "asset_line": "A linked, clickable Tiffinly prototype with every screen and state designed, plus the test record and the changes it led to, held together as one case study."
 },
 "background": {
  "venture": "Tiffinly is a pre-seed FoodTech startup that connects working professionals and students with home chefs in their neighbourhood for daily tiffin subscriptions: home-cooked lunch or dinner, delivered on a weekly plan.",
  "project": "Tiffinly is rebuilding the first week of its app: choosing a plan, picking a chef and scheduling deliveries. Before the engineers write a line of code, the team wants a prototype it can test with real customers and hand over as the reference for the build.",
  "why": "More than half of the people who download Tiffinly never place a first order. They drop off somewhere between choosing a plan and confirming a delivery slot, and nobody on the team can say exactly where. Building the wrong flow costs weeks of engineering; a prototype that real people have used costs days, and settles the argument with evidence instead of opinion."
 },
 "chirag_intro": "The route from a blank canvas to a prototype people have actually used. Each construct sits inside the step it belongs to: open a step, or go straight to a construct.",
 "vcs": {
  "1": {
   "name": "Reference Flow Teardown",
   "short": "the teardown",
   "desc": "Take apart how two or three subscription and food apps handle their first order, and name the moves that make it feel easy or hard.",
   "leaves": "an annotated flow teardown",
   "time": "2-3h",
   "ai": ["List the screens a first-time user sees in a typical meal-subscription app, in order.", "Which steps in these flows could be removed without losing information the business needs?", "Where does each app ask for commitment (payment, address) and what does it show first?"],
   "reads": [["Heuristics for judging onboarding flows", "Gives you a checklist to name what makes each app's first order feel easy or hard, instead of going on gut feel."], ["Progressive disclosure", "Most food apps hide choices until you need them. Knowing the pattern helps you spot where they do it and why."], ["Commitment and friction in sign-up flows", "Explains why apps ask for payment and address when they do, which is the moment Tiffinly loses most people."]],
   "community": [["play", "Tearing down a food app's first-order flow, screen by screen"], ["reader", "What 5 subscription apps get right about the first week"], ["reader", "My annotated teardown template (free to copy)"], ["play", "Spotting dark patterns in food app checkouts"]],
   "bar": false,
   "rubric": [
    ["Capture the flow", "You screenshot each app's first-order flow in order and note what each screen asks for."],
    ["Name the moves", "You point to the specific choices that speed people up or slow them down: defaults, progress cues, what's asked when."],
    ["Explain the trade-offs", "You work out why an app chose a move and what it costs the user or the business."],
    ["Judge what fits Tiffinly", "You decide which moves suit Tiffinly's customers and which don't, and can defend each call."]
   ]
  },
  "2": {
   "name": "Core Task & Test Scenario Definition",
   "short": "the task definition",
   "desc": "Decide the three tasks a new customer must be able to finish in the prototype, and write each as a realistic scenario a tester can follow.",
   "leaves": "a task and scenario sheet",
   "time": "1-2h",
   "ai": ["Turn this task into a scenario that doesn't give away which buttons to press.", "What would count as success and failure for each of these three tasks?", "Which task is most likely to reveal why people drop off before ordering?"],
   "reads": [["Writing task scenarios for usability tests", "Your scenarios have to give testers a goal without telling them where to tap. This shows how."], ["Jobs-to-be-done basics", "Helps you frame the three tasks around what a new customer is actually trying to get done in week one."], ["Defining success measures for a task", "Each scenario needs a clear finish line so the test results can be compared later."]],
   "community": [["reader", "How I wrote test scenarios that didn't give the answer away"], ["play", "From assumption to task: picking what a prototype should test"], ["reader", "Success measures from past community tests"], ["play", "Office hours: reviewing task sheets live"]],
   "bar": false,
   "rubric": [
    ["Name the tasks", "You list the tasks the prototype has to support."],
    ["Write them as scenarios", "Each task becomes a short situation a tester can act on without being told where to tap."],
    ["Tie them to the problem", "You show how each task tests a specific guess about where people drop off."],
    ["Set what success looks like", "Each scenario has a clear finish line and a measure you'll record, and it holds up when someone asks why that one."]
   ]
  },
  "3": {
   "name": "User Flow Mapping",
   "short": "the flow map",
   "desc": "Map every path through choosing a plan, picking a chef and scheduling deliveries, including the ones where something goes wrong.",
   "leaves": "a user flow diagram",
   "time": "2-3h",
   "ai": ["What happens in this flow if the user's chosen chef is fully booked?", "List the decision points in this flow and the options at each.", "Which paths in this map lead back to the start, and should they?"],
   "reads": [["User flow notation", "A shared set of shapes for screens, decisions and outcomes keeps your map readable to the team."], ["Designing error and recovery paths", "The quality bar here is the unhappy paths. This covers the common ones, like a sold-out chef or a back tap."], ["Structuring scheduling flows", "Weekly delivery scheduling is the hardest part of this flow to order. This helps you lay it out."]],
   "community": [["play", "Mapping unhappy paths before you open Figma"], ["reader", "Flow map of a meal-scheduling app, with every error branch"], ["reader", "FigJam kit for user flows (community template)"], ["play", "Why my first flow map had 40 screens, and how I cut it to 18"]],
   "bar": true,
   "floor": "accounts for the paths people take when something goes wrong: a back tap, a sold-out chef, a skipped step",
   "floor_level": 2,
   "rubric": [
    ["Map the happy path", "You show the straight route from opening the app to a confirmed first delivery."],
    ["Map what goes wrong", "You add the branches for errors, dead ends and changed minds, and where each one leads."],
    ["Explain the structure", "You can say why the flow is ordered this way rather than another, using what the teardown showed."],
    ["Cut it to what's needed", "You judge which steps and branches earn their place, remove the rest, and defend the shorter flow."],
    ["Design a new pattern", "No existing pattern fits Tiffinly's weekly scheduling, so you invent one, and it holds up beyond this flow."]
   ]
  },
  "4": {
   "name": "Lo-Fi Wireframing",
   "short": "the wireframes",
   "desc": "Sketch every screen in the flow as rough greyscale wireframes, fast enough to throw away and redo.",
   "leaves": "a set of lo-fi wireframes",
   "time": "2-4h",
   "ai": ["What information does a user need on the plan-selection screen to decide?", "Suggest three different layouts for the chef-selection screen.", "Which of these screens could be merged without overloading the user?"],
   "reads": [["Visual hierarchy on small screens", "Each wireframe has to lead with the one decision the user makes on that screen."], ["Rapid sketching with the crazy-eights method", "You need several layouts for the hard screens, fast. This is the quickest way to get them."], ["Mobile patterns for lists and cards", "The chef list and plan picker are list-and-card screens. Knowing the patterns saves you reinventing them."]],
   "community": [["play", "Wireframing 12 layouts in 30 minutes"], ["reader", "Lo-fi or mid-fi: when each one is worth it"], ["reader", "Critique thread: chef selection wireframes"], ["play", "Sketch to screen: how one community member works"]],
   "bar": false,
   "rubric": [
    ["Sketch the screens", "Every screen in the flow exists as a wireframe with its main content and actions."],
    ["Try alternatives", "For the hardest screens you sketch more than one layout and keep the stronger one."],
    ["Explain the hierarchy", "You can say why each screen leads with what it does, tied to the decision the user is making there."]
   ]
  },
  "5": {
   "name": "Screen State Design",
   "short": "the screen states",
   "desc": "Design each key screen in every state it can be in: empty, loading, error, partially filled and done.",
   "leaves": "a screen-state inventory",
   "time": "3-4h",
   "ai": ["List every state the delivery-schedule screen can be in.", "Write the error message for a payment that fails at checkout.", "What should an empty chef list say when no one cooks nearby yet?"],
   "reads": [["Empty, loading and error state design", "This construct is judged on exactly these states, so learn what each one owes the user."], ["Writing microcopy for errors", "A failed payment or a sold-out chef needs words that help people recover, not just a red banner."], ["Skeleton screens and perceived speed", "Shows how to design loading states that make the chef list feel fast."]],
   "community": [["reader", "The screen-state checklist we use on every project"], ["play", "Designing empty states that don't feel empty"], ["reader", "Error messages that helped users recover (examples)"], ["play", "Loading states on a slow network: a real test"]],
   "bar": true,
   "floor": "designs the empty, loading and error states, not just the screen where everything works",
   "floor_level": 2,
   "rubric": [
    ["Design the main state", "Each key screen is designed in the state where everything works."],
    ["Design the other states", "Empty, loading, error and partly-filled versions exist for each key screen, with real copy."],
    ["Make the states consistent", "The same kind of state looks and behaves the same way everywhere, and you can show the rule you used."],
    ["Decide what each state must do", "You set what each state has to tell the user and help them do next, and every design meets it."]
   ]
  },
  "6": {
   "name": "Interaction & Transition Specification",
   "short": "the interaction spec",
   "desc": "Specify how each control responds and how screens move into one another: taps, swipes, timings and feedback.",
   "leaves": "an interaction spec",
   "time": "2-3h",
   "ai": ["What feedback should a user get the instant they tap 'Confirm plan'?", "Suggest a transition between chef list and chef profile that keeps context.", "Which interactions here need a loading state, and how long before it shows?"],
   "reads": [["Microinteractions and feedback", "Every tap in your spec needs an immediate response. This breaks down what one is made of."], ["Motion timing and easing basics", "You'll specify durations and easing for transitions, so you need a feel for what reads as smooth."], ["Documenting interactions for developers", "Your spec only helps if an engineer can build from it without asking you."]],
   "community": [["play", "Specifying transitions so engineers actually build them"], ["reader", "Interaction specs from three past work orders"], ["reader", "Timing cheat sheet: how long should a transition take?"], ["play", "Feedback on tap: what users notice and what they don't"]],
   "bar": false,
   "rubric": [
    ["List the interactions", "Every tappable element has a written response: what happens and where it goes."],
    ["Specify the feedback", "Each interaction has its timing, motion and confirmation spelled out clearly enough to build."],
    ["Explain the choices", "You show why each transition helps the user keep their place, not just that it looks smooth."],
    ["Set the interaction rules", "You define a small set of rules the whole flow follows, and the spec holds to them."]
   ]
  },
  "7": {
   "name": "Clickable Prototype Build",
   "short": "the prototype build",
   "desc": "Link the screens into a clickable prototype that a tester can move through on a phone, with the logic the core tasks need.",
   "leaves": "a linked, clickable prototype",
   "time": "4-6h",
   "ai": ["How do I make a selected plan carry through to the checkout screen in Figma?", "Which screens need conditional logic and which can be simple links?", "What's the fastest way to fake a loading state in a prototype?"],
   "reads": [["Figma variables and conditional logic", "Makes a chosen plan and chef carry through to checkout, which the core tasks depend on."], ["Interactive components in Figma", "Lets you build selectors and toggles once and reuse them across every screen."], ["Testing a prototype on a real phone", "Testers will use phones, so check gestures, scrolling and tap targets where they'll actually happen."]],
   "community": [["play", "Figma variables in 20 minutes: carrying choices across screens"], ["reader", "Faking live availability in a prototype"], ["play", "Setting up a prototype file you can change fast"], ["reader", "Prototype bugs testers hit, and how to fix them"]],
   "bar": true,
   "floor": "lets a tester finish every core task on a phone without being told where to tap",
   "floor_level": 2,
   "rubric": [
    ["Link the happy path", "The main route clicks through from start to a confirmed delivery."],
    ["Make every task finishable", "All three core tasks can be completed, including going back and changing a choice."],
    ["Make it behave like the real thing", "Choices carry through, errors appear when they should, and timing feels like the app would."],
    ["Build it to be changed", "The file is set up so a round of test findings can be applied in minutes, and you can show it."],
    ["Push the tool past its limits", "You fake something the tool doesn't support, such as live availability, convincingly enough that testers don't notice."]
   ]
  },
  "8": {
   "name": "Moderated Usability Testing",
   "short": "the usability test",
   "desc": "Run the three scenarios with at least five people who could be Tiffinly customers, and record what they do, not just what they say.",
   "leaves": "a usability test record",
   "time": "3-5h",
   "ai": ["Write a neutral intro script that doesn't bias the tester.", "What follow-up question can I ask when someone hesitates without leading them?", "How should I record task success so the sessions are comparable?"],
   "reads": [["Moderating without leading the tester", "The quality bar is recording what people do. Leading questions ruin exactly that."], ["The think-aloud method", "Getting testers to talk through what they expect tells you why they hesitate, not just where."], ["Recruiting the right test participants", "Your five testers must be people who could be Tiffinly customers, or the findings won't hold."]],
   "community": [["play", "Watch a full moderated test session, with commentary"], ["reader", "My test script, and what I'd change next time"], ["reader", "Finding five testers on campus in a day"], ["play", "What to do when a tester goes silent"]],
   "bar": true,
   "floor": "records what testers did, where they hesitated and where they failed, not just their opinions",
   "floor_level": 2,
   "rubric": [
    ["Run the sessions", "You take five people through the scenarios and note what happens."],
    ["Capture behaviour", "You record where each person hesitated, went wrong or gave up, separately from what they said."],
    ["Get underneath it", "When someone struggles, you find out what they expected to happen without telling them the answer."],
    ["Run it to a standard", "Every session follows the same script and measures, so the results can be compared and trusted."]
   ]
  },
  "9": {
   "name": "Findings Prioritisation",
   "short": "the findings",
   "desc": "Turn the test record into a ranked list of problems, each with the evidence behind it and the change you'll make.",
   "leaves": "a prioritised findings log",
   "time": "1-2h",
   "ai": ["Group these observations into distinct problems.", "Which of these problems blocks a task outright and which only slows it down?", "Suggest a change for this problem that doesn't add a new screen."],
   "reads": [["Affinity mapping observations", "Turns scattered notes from five sessions into a handful of distinct problems."], ["Severity ratings for usability problems", "Lets you rank problems by how badly they stop someone finishing a task."], ["Tracing design problems to their cause", "Helps you link each top problem back to the design decision that caused it."]],
   "community": [["play", "Affinity mapping five test sessions in an hour"], ["reader", "The severity scale we use to rank problems"], ["reader", "From finding to fix: a worked example"], ["play", "Deciding what not to fix after a test round"]],
   "bar": false,
   "rubric": [
    ["List the problems", "Each problem testers hit is written down once, with how many people hit it."],
    ["Rank them", "Problems are ordered by how badly they stop people finishing, with the evidence beside each."],
    ["Trace the cause", "For the top problems you show what in the design caused them, not just where they happened."],
    ["Decide what changes", "You commit to a fix for each top problem, and show what you chose not to fix and why."]
   ]
  },
  "10": {
   "name": "Prototype Walkthrough Recording",
   "short": "the walkthrough",
   "desc": "Record a short narrated walkthrough of the final prototype that explains the flow and the decisions behind it, for the team that will build it.",
   "leaves": "a recorded prototype walkthrough",
   "time": "1-2h",
   "ai": ["Outline a five-minute walkthrough of this prototype for engineers.", "Which design decisions here most need explaining to someone who wasn't in the tests?", "What should the walkthrough show that the prototype alone doesn't?"],
   "reads": [["Design handoff practices", "The walkthrough is a handoff. This covers what engineers need from one."], ["Explaining design decisions with evidence", "Shows how to tie each key decision to something you saw in testing."], ["Recording clear screen walkthroughs", "Pacing, cursor movement and length, so the recording is easy to follow."]],
   "community": [["play", "A 5-minute handoff walkthrough engineers liked"], ["reader", "What developers wish designers put in walkthroughs"], ["reader", "Recording tips for design handoffs"], ["play", "Walkthrough review: before and after feedback"]],
   "bar": false,
   "rubric": [
    ["Show the flow", "The recording clicks through every core task in order."],
    ["Explain the decisions", "You say why the key screens work the way they do, pointing to test evidence."],
    ["Make it buildable", "Someone who wasn't involved could build the flow from the walkthrough and the prototype alone."]
   ]
  }
 },
 "methodology": [
  {"n": 1, "title": "See how others solve it", "desc": "Before you design anything, go through the first-order flow of a few subscription and food apps as a new customer would, and notice what makes them feel quick or confusing.", "vcs": ["1"]},
  {"n": 2, "title": "Decide what the prototype has to prove", "desc": "A prototype that tries to show everything tests nothing. Pin down the few things a new customer has to manage in their first week, and what you need to learn from watching them try.", "vcs": ["2"]},
  {"n": 3, "title": "Map the route through", "desc": "Lay out every way a person can move from opening the app to a confirmed first delivery, including the wrong turns, before drawing a single screen.", "vcs": ["3"]},
  {"n": 4, "title": "Sketch it rough", "desc": "Draw every screen quickly in greyscale. Speed matters more than polish here: you want to find the wrong layouts while they're still cheap to throw away.", "vcs": ["4"]},
  {"n": 5, "title": "Set up the build file", "desc": "Create the Figma file, pull in Tiffinly's colours and type, and build the handful of components (buttons, cards, inputs) the screens will share."},
  {"n": 6, "title": "Design every screen in every state", "desc": "Bring the wireframes up to real screens, then design what each one looks like when it's empty, loading, failing or done, and decide how the user moves between them.", "vcs": ["5", "6"]},
  {"n": 7, "title": "Make it clickable", "desc": "Link the screens so a person can complete each core task on a phone, with choices that carry through and errors that appear when they should.", "vcs": ["7"]},
  {"n": 8, "title": "Put it in front of people", "desc": "Run the scenarios with five people who could be Tiffinly customers, then work out which problems matter most and change the prototype.", "vcs": ["8", "9"], "loop": true, "loopnote": "Loops back to steps 6 and 7: expect two rounds of testing and fixing."},
  {"n": 9, "title": "Hand it over", "desc": "Package the final prototype so the team that builds it understands the flow and the reasons behind it without you in the room.", "vcs": ["10"]}
 ],
 "resources": [
  ["Prototyping in Figma: links, variables and conditions", "How to make choices carry through screens and fake the logic a real app would have."],
  ["Designing for every state", "Empty, loading, error and partial states, and the copy that helps people recover."],
  ["Mapping user flows before you draw", "Turning a messy set of steps into a flow you can design, test and explain."],
  ["Running a moderated usability test", "Scripts, neutral prompts, and recording what people do rather than what they say."],
  ["Making sense of test findings", "Grouping observations, ranking problems by severity, and deciding what to change."],
  ["Onboarding flows worth studying", "Strong first-order experiences from subscription and food apps, and why they work."]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to build the whole prototype. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the teardown or the flow map: they need no design tools and teach you the problem.",
   "nudge": ["1", "3"],
   "meters": [{"l": "Business services contributed to", "a": 1, "b": 3}, {"l": "Artefact submissions at L1", "a": 2, "b": 3}],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The screen states are where an L2 is most within reach here.",
   "nudge": ["5"],
   "meters": [{"l": "Business services contributed to", "a": 3, "b": 4}, {"l": "Artefact submissions at L1", "a": 4, "b": 5}, {"l": "Artefacts at L2 or above", "a": 0, "b": 1}],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the full prototype, test it and attach it.",
   "say": "You've contributed in pieces before. This time carry the whole thing: map it, build it, test it with real people, and attach the finished prototype.",
   "pick": "Work the path in order. The four constructs carrying a quality bar are what make the prototype trustworthy.",
   "nudge": ["3", "5", "7", "8"],
   "meters": [{"l": "Business services delivered on", "a": 1, "b": 3}, {"l": "Constructs on this case study", "a": 0, "b": 2}],
   "next": "Enhancement",
   "grow": "Attaching the finished prototype counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing it isn't the challenge any more. Set yourself a hand-over date and hold to it, and treat the walkthrough as something an engineering lead will actually build from.",
   "pick": "Push the build and the usability test to L4: that's where the difference shows.",
   "nudge": ["7", "8"],
   "meters": [{"l": "Deliverables in micro work engagements", "a": 0, "b": 1}],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder here to set your target, so set it yourself: pick the number this flow should change, such as first orders completed, and build the case study to show you moved it in testing.",
   "pick": "Take the flow map to L5: the scheduling pattern only you came up with.",
   "nudge": ["3"],
   "meters": [{"l": "Paid contracts held", "a": 0, "b": 1}],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {"needs": 2, "have": 0}
},
{
 "ref": "WO-MK07-SECONDSHELF-DEMO-001",
 "ui": {
  "id": 102,
  "roles": [
   "Content Creator",
   "Social Media Manager",
   "Copywriter"
  ],
  "stage": "Student-run venture",
  "category": "Marketing & Communications",
  "time": "20-30 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Campaign Content Creation",
  "deliverable": "Campaign Content Pack",
  "title": "Make the campaign that gets freshers to skip the new-book counter",
  "role": "Content Creator",
  "industry": "EduTech & Talent",
  "venture": "Second Shelf"
 },
 "takeaways": {
  "asset": "A ready-to-publish campaign content pack — reels, posts, stories and a WhatsApp forward — held together as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 10 artefacts on your record.",
  "kind": "Hands-on making — shooting on campus, cutting short video, writing tight copy, and watching how real people react."
 },
 "pre": {
  "lede": "You'll build the content for Second Shelf's two-week semester-start campaign — the idea that ties it together, the reels and posts shot on campus, the captions, and the versions each platform needs — so a fresher thinks twice before buying a ₹900 textbook new.",
  "produces": "a campaign content pack — three reels, a carousel, four posts, six story frames and a WhatsApp forward, all ready to publish, plus the case study behind them.",
  "skills_technical": [
   "Campaign concept development",
   "Content calendar planning",
   "Shoot coordination",
   "Phone videography",
   "Short-form video editing",
   "Hook & caption writing",
   "Platform formats & specs",
   "Reading platform analytics"
  ],
  "skills_transferable": [
   "Creativity",
   "Written Communication",
   "IT/Design",
   "Personal Organization",
   "Commercial Awareness",
   "Effective Listening"
  ],
  "capabilities": [
   [
    "Content Creation & Strategy",
    "planning and producing a full set of publish-ready content, end to end"
   ],
   [
    "Campaign Planning & Execution",
    "sequencing a campaign across a fortnight and getting it out on schedule"
   ],
   [
    "Narrative & Messaging Design",
    "holding one idea steady across every piece and every platform"
   ]
  ],
  "resume_line": "Created the content pack for Second Shelf's semester-start campaign — the concept, three reels and 12 more assets shot on campus, adapted for Instagram and WhatsApp, with a review of what performed.",
  "asset_line": "A complete campaign content pack for Second Shelf — the concept brief, every reel, post, story and forward in its final format, and the publishing and performance record behind them, held together as one case study."
 },
 "background": {
  "venture": "Second Shelf is a student-run book exchange working across three colleges. Seniors list the textbooks they've finished with, first-years find them for a fraction of the price, and the hand-over happens on campus — usually on the library steps. It runs entirely on Instagram and WhatsApp, with no ad budget.",
  "project": "The 'Pass it on' campaign runs for the 14 days before semester classes begin, aimed at first- and second-year students. Second Shelf needs: one concept that ties the fortnight together; three reels (20–45 seconds, vertical, captioned for sound-off viewing); one carousel of 6–8 slides that explains the swap in three steps; four single-image posts; six story frames including at least one poll; and one WhatsApp broadcast message with a forwardable poster for class groups. The rules: everything is shot on a phone, nothing is paid for, anyone recognisable on camera has agreed to be filmed, the voice is warm and a little cheeky, and no piece ever shames someone for buying new. The real swap — list a book, get a match, hand it over — has to be shown, not just described. Second Shelf publishes the pieces that are ready during the window and shares the numbers that come back.",
  "why": "Every semester, freshers spend thousands on books they'll open for four months, while the same books sit on seniors' shelves. Second Shelf only works if people hear about it in the fortnight before they buy — miss that window and the money's already spent. Content that looks like an ad gets scrolled past. Content that feels like a senior's tip gets forwarded to the whole class group."
 },
 "chirag_intro": "The route from a blank brief to a pack that's ready to post. The constructs sit inside the steps they belong to — open a step, or go straight to a construct.",
 "vcs": {
  "1": {
   "name": "Campaign Concept & Angle Definition",
   "short": "the campaign concept",
   "desc": "Decide the one idea that ties the whole fortnight together, so every reel, post and forward feels like part of the same campaign rather than unrelated posts.",
   "leaves": "a campaign concept brief",
   "bar": true,
   "floor": "makes the idea specific to Second Shelf and its freshers — not a line any brand could post",
   "floor_level": 2,
   "rubric": [
    [
     "Name a theme",
     "The brief states one idea in a sentence and lists the pieces it could become. The idea is clear, even if a different brand could run it."
    ],
    [
     "Make it Second Shelf's",
     "The angle rests on something true of this audience and this product — the ₹900 book used for one semester, a senior's notes in the margin — not a generic 'save money' line."
    ],
    [
     "Show why it beats the others",
     "The brief shows at least two other angles you considered and says why this one suits a fresher in week one better. Every planned piece is traced back to the idea."
    ],
    [
     "Set the test every piece must pass",
     "You write two or three criteria a piece must meet to belong in the campaign — say, 'shows the real swap' or 'sounds like a senior, not a brand' — and the brief shows an idea you liked and cut because it failed them."
    ],
    [
     "Find the angle no one asked for",
     "The idea reframes the problem in a way the brief didn't suggest, and you show it holds across the whole pack and could run again next semester without going stale."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Give me five campaign ideas for a student book exchange that don't sound like an ad.",
    "Which of these ideas would still work with only a phone and no budget?",
    "Where would this concept feel preachy to a fresher?"
   ],
   "reads": [
    [
     "Building a campaign around one idea",
     "Every reel, post and forward has to feel like the same campaign. This shows what holds a set together."
    ],
    [
     "Writing a creative brief",
     "Turns your concept into a one-pager the rest of the pack can be checked against."
    ],
    [
     "Audience insight for first-year students",
     "The idea only lands if it starts from how freshers actually think about buying books."
    ]
   ],
   "community": [
    [
     "play",
     "How we picked one idea for a two-week campus campaign"
    ],
    [
     "reader",
     "Campaign concepts that worked on a zero budget"
    ],
    [
     "reader",
     "Concept brief template (community copy)"
    ],
    [
     "play",
     "Why our first campaign idea flopped, and what replaced it"
    ]
   ]
  },
  "2": {
   "name": "Content Calendar & Scheduling",
   "short": "the content calendar",
   "desc": "Plan what goes out, when and where across the 14 days, so the campaign builds rather than arriving in one burst.",
   "leaves": "a 14-day content calendar",
   "bar": false,
   "rubric": [
    [
     "Put it on dates",
     "Every piece in the pack has a day, a platform and a time slot. Nothing is double-booked or missing."
    ],
    [
     "Fit it to the real week",
     "Timing follows when freshers are actually deciding — before the bookshop rush, around fee-payment day, away from orientation events — and the calendar notes which dates you moved and why."
    ],
    [
     "Build a rhythm, not a list",
     "The order does a job — introduce, explain, prove, remind. You can say why the carousel goes before the swap reel and what would break if they swapped places."
    ],
    [
     "Plan for what goes wrong",
     "The calendar says what gets bumped if a shoot slips or a piece underperforms, with a rule for when to change course, and you can defend the trade-offs when questioned."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Lay out a 14-day posting plan that builds instead of front-loading everything.",
    "Which days before classes start will freshers be most online?",
    "Where should the WhatsApp forward land in this calendar, and why?"
   ],
   "reads": [
    [
     "Content calendar planning",
     "You're planning 14 days across four channels. This shows how to make the campaign build instead of arriving in one burst."
    ],
    [
     "Posting rhythm by platform",
     "Reels, stories and WhatsApp each have their own rhythm, and getting it wrong buries good pieces."
    ],
    [
     "Campaign arcs: tease, launch, sustain",
     "Helps you shape the fortnight so it peaks just before freshers buy their books."
    ]
   ],
   "community": [
    [
     "reader",
     "Our 14-day calendar for a semester-start campaign"
    ],
    [
     "play",
     "Planning a fortnight of content in one afternoon"
    ],
    [
     "reader",
     "Free content calendar sheet (community template)"
    ],
    [
     "play",
     "What happened when we posted everything on day one"
    ]
   ]
  },
  "3": {
   "name": "On-Site Coordination for Shoots",
   "short": "the shoot plan",
   "desc": "Line up the locations, people, permissions and timing for the campus shoot so nothing on the day depends on luck.",
   "leaves": "a shoot coordination plan",
   "bar": false,
   "rubric": [
    [
     "List what's needed",
     "The plan names every location, date, person, prop and the shot list each scene needs."
    ],
    [
     "Get the yeses before the day",
     "Locations are cleared with whoever controls them — library staff, the canteen owner — and every person on camera has agreed, with a consent note recorded for each."
    ],
    [
     "Plan around what you can't control",
     "The plan accounts for light, crowds, noise and class timings, with a backup slot or spot for each scene and the reason it was chosen."
    ],
    [
     "Write it so someone else could run it",
     "A call sheet sets out times, who does what, and which shots get dropped first if time runs out — clear enough that another person could run the shoot from it alone."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Make a shot list for a campus book hand-over, scene by scene.",
    "What permissions do I need before filming on a college campus?",
    "Draft a short consent message to send people before filming them."
   ],
   "reads": [
    [
     "Planning a shoot day",
     "A shot list and a schedule mean nothing on the day depends on luck."
    ],
    [
     "Filming people on campus, with consent",
     "Anyone recognisable has to agree to be filmed. This covers asking well and recording the yes."
    ],
    [
     "Scouting locations for phone video",
     "Light and background decide whether the library steps look inviting or flat."
    ]
   ],
   "community": [
    [
     "play",
     "Running a campus shoot with three friends and one phone"
    ],
    [
     "reader",
     "Consent message templates for student shoots"
    ],
    [
     "reader",
     "The shot list from our last campaign"
    ],
    [
     "play",
     "Scouting a location in 20 minutes"
    ]
   ]
  },
  "4": {
   "name": "Photo & Video Shooting",
   "short": "the shoot",
   "desc": "Capture the raw photos and footage on campus — the books, the people, the actual hand-over — that every other piece in the pack is built from.",
   "leaves": "a raw footage and photo set",
   "bar": true,
   "floor": "comes back with enough coverage per scene — a wide, a close detail and a reaction — that the edit isn't trapped",
   "floor_level": 2,
   "rubric": [
    [
     "Get the shots on the list",
     "Every scene on the shot list exists, in focus, framed vertically for reels, with clear audio wherever someone speaks."
    ],
    [
     "Shoot for the edit",
     "Each scene has coverage — a wide, a close detail like the highlighted page or the hand-over, and a reaction — with a few seconds either side of the action so the editor has room."
    ],
    [
     "Fix what the location throws at you",
     "Where light, crowds or noise fought you, the footage shows the adjustment — subject moved to the window, line re-recorded away from the canteen — and your notes say why."
    ],
    [
     "Know which take carries the idea",
     "You mark your selects and can say why each serves the campaign idea better than the takes you shot beside it."
    ],
    [
     "Catch what no one staged",
     "The set includes a genuine unplanned moment — a real swap, a real reaction — that becomes some of the strongest material, and the shoot was planned to leave room for it."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "What extra footage should I capture to make a book hand-over feel real?",
    "How do I get clean audio outdoors with just a phone?",
    "Suggest five opening shots that would stop someone scrolling."
   ],
   "reads": [
    [
     "Shooting video on a phone",
     "Light, framing, steady shots and clean audio without any extra kit."
    ],
    [
     "Capturing real moments, not staged ones",
     "The brief says the swap has to be shown, not described. Candid footage is how."
    ],
    [
     "Getting enough coverage to edit",
     "Three reels come from this footage, so you need more angles than you think."
    ]
   ],
   "community": [
    [
     "play",
     "Phone camera settings we use for every shoot"
    ],
    [
     "reader",
     "Natural light on campus: a quick guide"
    ],
    [
     "play",
     "Filming a real hand-over without it looking staged"
    ],
    [
     "reader",
     "Checklist: what to shoot before you leave"
    ]
   ]
  },
  "5": {
   "name": "Video & Reel Editing",
   "short": "the reel edit",
   "desc": "Cut the raw footage into three finished reels that hold attention on a phone, with or without sound.",
   "leaves": "three edited reels",
   "bar": true,
   "floor": "opens each reel on a hook in the first two seconds and keeps it watchable with the sound off",
   "floor_level": 2,
   "rubric": [
    [
     "Cut it together",
     "Each reel runs 20–45 seconds, vertical, in a clear order, with captions burned in and no dead air or stray frames."
    ],
    [
     "Hook in the first two seconds",
     "Each reel opens on movement, a question or a surprising image — not a logo — and the pace tightens wherever attention would drop."
    ],
    [
     "Make every cut earn its place",
     "You can explain each reel's structure — why this shot opens, why the swap lands where it does — and point to at least one cut you made because a section dragged."
    ],
    [
     "Judge it the way it'll be watched",
     "You test each reel muted, on a phone, against the campaign's criteria, and a version note shows what changed between cuts and why the final beats the earlier one."
    ],
    [
     "Build a format worth repeating",
     "At least one reel sets up a format — a recurring opener, a series structure — that Second Shelf could reuse next semester with new footage, and you show how."
    ]
   ],
   "time": "3-5h",
   "ai": [
    "Suggest a structure for a 30-second reel about swapping textbooks.",
    "What should happen in the first two seconds of this reel?",
    "Write on-screen captions for this reel so it works with the sound off."
   ],
   "reads": [
    [
     "Hooks and the first two seconds",
     "Most reels are lost before they start. These openers hold a thumb."
    ],
    [
     "Short-form editing",
     "Pacing, cuts and burned-in captions, so the reels work on a phone."
    ],
    [
     "Editing for sound-off viewing",
     "Your reels have to make sense on mute, because that's how most people watch."
    ]
   ],
   "community": [
    [
     "play",
     "Cutting a 30-second reel from 10 minutes of footage"
    ],
    [
     "reader",
     "Reel hooks that worked for student audiences"
    ],
    [
     "play",
     "Free editing apps compared for short video"
    ],
    [
     "reader",
     "Caption styles that stay readable on any phone"
    ]
   ]
  },
  "6": {
   "name": "Caption & Copy Writing",
   "short": "the copy",
   "desc": "Write the captions, hooks, slide text and WhatsApp message that go with each piece, in Second Shelf's voice.",
   "leaves": "a caption and copy set",
   "bar": true,
   "floor": "writes a first line that works on its own before 'more', in a voice that never shames anyone for buying new",
   "floor_level": 2,
   "rubric": [
    [
     "Write one for every piece",
     "Every reel, post, slide, story frame and the WhatsApp forward has its copy, each with a clear next step — where to list a book or find one."
    ],
    [
     "Write the first line to stop the scroll",
     "The first line works alone, before anyone taps 'more'. The copy sounds like a senior talking, stays in Second Shelf's voice, and never shames buying new."
    ],
    [
     "Fit the words to where they're read",
     "The WhatsApp forward reads like a message from a classmate, slide text reads in three seconds, and the reel caption adds to the video rather than repeating it — and you can say why each one differs."
    ],
    [
     "Choose between drafts on purpose",
     "For each key piece you show at least two first lines and why one wins, judged against the campaign's criteria rather than personal taste."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Rewrite this caption so it sounds like a senior's tip, not an ad.",
    "Give me five hooks for a post about saving ₹900 on a textbook.",
    "Draft a WhatsApp forward short enough for a class group."
   ],
   "reads": [
    [
     "Writing short copy that sounds like a person",
     "Captions and messages should read like a friend, not a brand."
    ],
    [
     "Writing in a warm, slightly cheeky voice",
     "Second Shelf has a voice. This helps you hit it without shaming anyone for buying new."
    ],
    [
     "Writing for forwards and class groups",
     "The WhatsApp message has to make sense after being forwarded with no context."
    ]
   ],
   "community": [
    [
     "reader",
     "Before and after: captions that got rewritten"
    ],
    [
     "play",
     "Finding a brand voice in an afternoon"
    ],
    [
     "reader",
     "WhatsApp forwards that actually got forwarded"
    ],
    [
     "play",
     "Copy critique session: hooks for student campaigns"
    ]
   ]
  },
  "7": {
   "name": "Channel-Adapted Asset Formatting",
   "short": "the formatting",
   "desc": "Adapt each finished piece to the shape and rules of every place it runs — feed, stories, reels and WhatsApp.",
   "leaves": "a set of channel-adapted variants",
   "bar": false,
   "rubric": [
    [
     "Resize to spec",
     "Every asset exists in the right ratio for each place it runs — vertical for reels and stories, 4:5 for the feed, a poster that reads in a WhatsApp chat — with nothing important cropped off."
    ],
    [
     "Re-compose, don't just crop",
     "Where a crop would cut a face or text, the piece is re-laid instead, and text stays clear of the areas the app covers with buttons and captions."
    ],
    [
     "Adapt the piece, not just the frame",
     "Each variant changes what it has to for its place: the WhatsApp poster carries the key details without a caption, a story frame asks for one action, and you can explain each change."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Where can I safely put text on reels and stories?",
    "Adapt this square post into a vertical story frame.",
    "Which pieces need a different version for WhatsApp, and why?"
   ],
   "reads": [
    [
     "Platform formats and safe zones",
     "Ratios, and the parts of the screen each app covers, for feed, stories, reels and WhatsApp."
    ],
    [
     "Designing story frames and polls",
     "At least one story frame needs a poll. This shows how to make one people tap."
    ],
    [
     "Exporting video for each platform",
     "Wrong export settings mean blurry reels. This covers sizes and compression."
    ]
   ],
   "community": [
    [
     "reader",
     "Safe-zone templates for every platform"
    ],
    [
     "play",
     "One post, four formats: a walkthrough"
    ],
    [
     "reader",
     "Story polls that got the most taps"
    ],
    [
     "play",
     "The export settings we use for reels"
    ]
   ]
  },
  "8": {
   "name": "Asset Organisation & Publishing Logistics",
   "short": "the asset library and log",
   "desc": "Keep every file findable and every piece tracked from draft to live, so nothing ships in the wrong version or misses its date.",
   "leaves": "an asset library and publishing log",
   "bar": false,
   "rubric": [
    [
     "Keep it findable",
     "All files live in one shared folder, named by piece, version and platform, with finals kept apart from drafts."
    ],
    [
     "Track what's live",
     "The log shows each piece's status — draft, ready, scheduled, live — with the date and link once it's published."
    ],
    [
     "Catch the gap before it ships",
     "The log records at least one problem caught before publishing — a wrong version, a missing caption, a face without consent — and how it was fixed."
    ],
    [
     "Make it run without you",
     "The library and log are set up so someone new could publish the rest of the campaign from them without asking you a single question."
    ]
   ],
   "time": "1h",
   "ai": [
    "Suggest a file-naming system for a campaign with 20 assets.",
    "What should a publishing log track for each piece?",
    "Make a checklist for the hour before a post goes live."
   ],
   "reads": [
    [
     "Organising campaign files",
     "Every file being findable is what stops the wrong version going out."
    ],
    [
     "Publishing checklists",
     "Catches the broken link or the wrong caption before a post is live."
    ],
    [
     "Scheduling posts without paid tools",
     "How to keep a 14-day plan on time with free scheduling."
    ]
   ],
   "community": [
    [
     "reader",
     "Our folder structure for campaign files"
    ],
    [
     "play",
     "Setting up a publishing log in Google Sheets"
    ],
    [
     "reader",
     "The pre-publish checklist we never skip"
    ],
    [
     "play",
     "Scheduling a fortnight of posts for free"
    ]
   ]
  },
  "9": {
   "name": "Community Engagement & Response",
   "short": "community engagement",
   "desc": "Answer the comments and messages the campaign brings in, so a curious fresher becomes someone who actually lists or finds a book.",
   "leaves": "an engagement log",
   "bar": false,
   "rubric": [
    [
     "Reply to everyone",
     "Every comment and message in the window gets a reply within a day, and each one is logged."
    ],
    [
     "Answer the question underneath",
     "Replies resolve what people were really asking — which edition, where to meet, how to pay safely — and point them to the next step."
    ],
    [
     "Turn replies into material",
     "The log shows the questions and doubts that kept coming up, and at least one story, post or pinned reply made in response."
    ],
    [
     "Handle the hard one well",
     "A sceptical, negative or awkward comment is answered in a way that keeps the voice and the trust, with your reasoning noted in the log."
    ],
    [
     "Get people answering each other",
     "Students start tagging friends or answering each other's questions because of something you set up, and the log shows what it was and that it worked."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Draft friendly replies to common questions about how the book swap works.",
    "How should I reply to a comment criticising the campaign?",
    "Write a message that nudges a curious fresher to list or find a book."
   ],
   "reads": [
    [
     "Community management basics",
     "How a reply turns a curious comment into someone who lists or finds a book."
    ],
    [
     "Replying in the brand's voice",
     "Every reply is part of the campaign, so it has to sound like the posts."
    ],
    [
     "Handling negative comments",
     "What to do when someone pushes back, without arguing in public."
    ]
   ],
   "community": [
    [
     "reader",
     "Reply templates for the questions freshers always ask"
    ],
    [
     "play",
     "How we turned comments into swaps"
    ],
    [
     "reader",
     "Handling a pile-on: a case study"
    ],
    [
     "play",
     "Community management in 15 minutes a day"
    ]
   ]
  },
  "10": {
   "name": "Content Performance Review",
   "short": "the performance review",
   "desc": "Look at how the published pieces actually did, and say what the next batch should keep, drop and try.",
   "leaves": "a content performance note",
   "bar": false,
   "rubric": [
    [
     "Report the numbers",
     "For each published piece, one table shows views, saves, shares, profile visits and link taps — whatever the platform gives you."
    ],
    [
     "Compare like with like",
     "You account for what skews the comparison — posting time, platform, reel versus post — instead of ranking raw numbers side by side."
    ],
    [
     "Say why it landed",
     "You explain what the strongest and weakest pieces did differently, linking the numbers to choices in the hook, the angle or the timing."
    ],
    [
     "Decide what to make next",
     "You recommend what the next batch should keep, cut and test, with the evidence for each and an honest note on what the numbers can't tell you."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Which numbers matter most for a campaign meant to get people swapping books?",
    "Compare these three reels and say what the best one did differently.",
    "Draft a one-page note on what to keep, drop and try next time."
   ],
   "reads": [
    [
     "Reading content numbers without fooling yourself",
     "What views, saves and shares actually tell you, and the comparisons that mislead."
    ],
    [
     "Linking content to real outcomes",
     "Second Shelf cares about swaps, not likes. This shows how to connect the two."
    ],
    [
     "Writing a short performance note",
     "Turns the numbers into a recommendation the next campaign can act on."
    ]
   ],
   "community": [
    [
     "reader",
     "What our reel numbers really meant"
    ],
    [
     "play",
     "Reading Instagram insights in 10 minutes"
    ],
    [
     "reader",
     "Performance note template (community copy)"
    ],
    [
     "play",
     "Likes versus swaps: a real comparison"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Read the brief the way Second Shelf would",
   "desc": "Go through the brief, Second Shelf's existing posts, and the swap itself — list a book, get matched, hand it over. Write down what the campaign must say, must show and must never do.",
   "vcs": []
  },
  {
   "n": 2,
   "title": "Land the idea",
   "desc": "Work out what these two weeks are actually about. Try a few angles a fresher would stop scrolling for, commit to one, and sketch which pieces come out of it.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 3,
   "title": "Map the fortnight",
   "desc": "Lay all fifteen pieces across the 14 days and both platforms, so the campaign builds toward the week freshers actually buy their books.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Line up the shoot",
   "desc": "Choose the spots, the people and the times. Clear the library steps and the canteen, and get a yes from everyone who'll be on camera.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 5,
   "title": "Shoot on campus",
   "desc": "Film and photograph the real thing — the stacks of books, a senior handing one over, a fresher's face when they see the price.",
   "loop": true,
   "loopnote": "Expect a second, shorter shoot once the first edit shows what's missing.",
   "vcs": [
    "4"
   ]
  },
  {
   "n": 6,
   "title": "Cut the reels",
   "desc": "Turn the footage into the three reels the brief asks for, each one built for a phone screen and a short attention span.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 7,
   "title": "Write the words",
   "desc": "Write everything that gets read — captions, carousel slides, story text, the poll and the WhatsApp message — in Second Shelf's voice.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 8,
   "title": "Fit it to every platform",
   "desc": "Make every piece look right wherever it lands — the Instagram feed, stories, reels and a crowded class WhatsApp group.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 9,
   "title": "Show it to three freshers",
   "desc": "Before anything goes out, show the pack to three first-years who've never heard of Second Shelf. Note what they didn't get, what they'd forward, and what they scrolled past.",
   "loop": true,
   "loopnote": "Loops back to steps 6 and 7 — expect one round of fixes.",
   "vcs": []
  },
  {
   "n": 10,
   "title": "Get it ready to go out",
   "desc": "Pull together the final versions of everything, hand Second Shelf what's due each day, and keep track of what's actually gone live.",
   "vcs": [
    "8"
   ]
  },
  {
   "n": 11,
   "title": "Be there when people reply",
   "desc": "While the campaign runs, stay in the comments and messages — that's where a curious fresher either lists a book or forgets about it.",
   "vcs": [
    "9"
   ]
  },
  {
   "n": 12,
   "title": "Read what landed",
   "desc": "Once the window closes, go through the numbers Second Shelf shares and work out what the next semester's batch should look like.",
   "loop": true,
   "loopnote": "Feeds back to step 2 — Second Shelf runs this campaign every semester.",
   "vcs": [
    "10"
   ]
  }
 ],
 "resources": [
  [
   "Building a campaign around one idea",
   "What makes a set of posts read as one campaign rather than a feed of unrelated content."
  ],
  [
   "Hooks and the first two seconds",
   "Why most short video is lost before it starts, and the openers that hold a thumb."
  ],
  [
   "Shooting video on a phone",
   "Light, framing, steady shots and clean audio without any extra kit."
  ],
  [
   "Short-form editing",
   "Pacing, cuts, burned-in captions and editing for people watching with the sound off."
  ],
  [
   "Writing short copy that sounds like a person",
   "Captions, slide text and messages that read like a friend, not a brand."
  ],
  [
   "Platform formats and safe zones",
   "Ratios and the parts of the screen each app covers, for feed, stories, reels and WhatsApp."
  ],
  [
   "Filming people on campus, with consent",
   "Asking well, recording the yes, and what to do when someone changes their mind."
  ],
  [
   "Reading content numbers without fooling yourself",
   "What views, saves and shares actually tell you, and the comparisons that mislead."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one piece of this campaign and make it properly.",
   "say": "You don't need to build the whole pack. Choose a single construct — the copy, the calendar, the shoot plan — do it for Second Shelf, and attach what it leaves behind.",
   "pick": "The copy or the content calendar — both work from the brief alone, no shoot needed.",
   "nudge": [
    "6",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 1,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "One artefact from this work order adds campaign content to your record in this role — that would make you 2 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Come back to something you've made and take it one level deeper.",
   "say": "Your breadth in this role is nearly there. What's missing is one artefact judged at L2 or above — the reels are the clearest place to show it, because a hook either works on mute or it doesn't.",
   "pick": "Reel editing — or the campaign concept, if you'd rather think than cut.",
   "nudge": [
    "5",
    "1"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is what stands between you and Activation — the breadth is already on your record."
  },
  "3": {
   "head": "Build the whole pack this time, and attach it.",
   "say": "Pieces aren't the move any more. Carry the campaign from the idea to the last story frame, test it on real freshers, and attach the full content pack.",
   "pick": "Work the path in order — the idea, the shoot, the reels and the copy carry a bar because the pack falls apart without them.",
   "nudge": [
    "1",
    "4",
    "5",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the finished pack counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Run it as if Second Shelf were paying — to a date you set.",
   "say": "Getting it done is no longer the test. Set a delivery date before you start and hold it, keep the publishing log as if a client will check it, and write the case study for someone deciding whether to hire you.",
   "pick": "Take the reels and the copy to where you can defend every choice against the campaign idea.",
   "nudge": [
    "5",
    "6",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a paid micro work engagement",
   "grow": "This gets you ready for a paid micro work engagement — that's where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose what this campaign should move, then show that it moved.",
   "say": "No one sets your target here. Decide what the fortnight should shift — more books listed, more freshers asking before they buy — and build the case study around whether it did.",
   "pick": "Lean on the performance review and the campaign concept; that's where the target is set and the evidence lives.",
   "nudge": [
    "10",
    "1"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study that shows what your content actually moved is what a career growth opportunity is judged on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-MK07-TAPRI-CAMPUS-001",
 "ui": {
  "id": 103,
  "roles": [
   "Content Creator",
   "Copywriter"
  ],
  "stage": "Early-stage venture",
  "category": "Marketing & Communications",
  "time": "24-36 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Campaign Content Creation",
  "deliverable": "Published Multimedia Feature",
  "title": "Report and write the campus story everyone walks past",
  "role": "Content Creator",
  "industry": "Entertainment & MediaTech",
  "venture": "Tapri Talk"
 },
 "takeaways": {
  "asset": "A published campus feature — written, photographed and documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 9 artefacts on your record.",
  "kind": "Hands-on reporting — sitting somewhere long enough to see it, talking to strangers, and writing."
 },
 "pre": {
  "lede": "You'll find the story hidden in one campus space, report it on the ground — watching, listening, and talking to the people who actually use it — and turn it into a short, published-quality feature with photographs.",
  "produces": "a published multimedia feature — the finished piece, its photographs, and the case study behind it.",
  "skills_technical": [
   "Feature writing",
   "Field observation",
   "Interviewing",
   "Fact-checking & attribution",
   "Photography",
   "Headline & deck writing"
  ],
  "skills_transferable": [
   "Written Communication",
   "Effective Listening",
   "Research & Analysis",
   "Critical Thinking"
  ],
  "capabilities": [
   [
    "Content Creation & Strategy",
    "producing a finished, publish-ready piece end to end"
   ],
   [
    "Narrative & Messaging Design",
    "shaping raw material into a story that reads well and lands"
   ],
   [
    "PR & Media Relations",
    "sourcing, interviewing and attributing real people accurately"
   ]
  ],
  "resume_line": "Reported and wrote an original campus feature for Tapri Talk — two field visits, three source interviews, fact-checked and published with original photography.",
  "asset_line": "A published campus feature with your byline — the written piece, its photographs and its layout, held together as one case study."
 },
 "background": {
  "venture": "Tapri Talk is a storytelling venture in the media and culture space. It documents the life of places and communities through close, human, place-based stories — the kind that capture a spot rather than just describe it.",
  "project": "Tapri Talk is building a campus strand: original features that capture what a single campus space is really like, told well enough that a stranger feels they've stood in it. This is one of those stories, reported and written from scratch.",
  "why": "Anyone can describe a place. The whole reason Tapri Talk exists is that most places get described and almost none get captured — the tea stall's regulars, the corner everyone avoids, the bench that means something. Get it right and a reader who's never been there feels they have. Get one fact wrong and no one believes a word of it."
 },
 "chirag_intro": "The full route from an empty notebook to a published piece. The constructs sit inside the steps they belong to — open a step, or go straight to a construct.",
 "vcs": {
  "1": {
   "name": "Place-Writing Technique Deconstruction",
   "short": "the swipe file",
   "desc": "Take apart strong place-based stories and name the moves they use — the sensory beat, the overheard line, the one telling detail.",
   "leaves": "an annotated swipe file",
   "bar": false,
   "rubric": [
    [
     "Name the techniques",
     "You point to the sensory beats, quotes and details a strong piece uses."
    ],
    [
     "Show how they work",
     "You explain what each move does to the reader, not just that it's there."
    ],
    [
     "Explain the choices",
     "You work out why the writer used this move here rather than another, and what it cost."
    ],
    [
     "Judge what's worth stealing",
     "You decide which techniques actually carry a place story and which are decoration, and can defend it."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Pull out the sensory details this feature uses and say what each one does.",
    "What makes this opening paragraph put the reader in the place?",
    "Compare how these two features use quotes."
   ],
   "reads": [
    [
     "What makes a place-based feature work",
     "You're naming the moves strong pieces use. This gives you the words for them."
    ],
    [
     "Reading like a writer",
     "Shows how to take a piece apart instead of just enjoying it."
    ],
    [
     "Place-based features worth studying",
     "Strong published examples to fill your swipe file with."
    ]
   ],
   "community": [
    [
     "reader",
     "My swipe file of campus features, annotated"
    ],
    [
     "play",
     "Taking apart a great place story in 15 minutes"
    ],
    [
     "reader",
     "Features the community keeps coming back to"
    ],
    [
     "play",
     "Borrowing techniques without copying the writer"
    ]
   ]
  },
  "2": {
   "name": "Story Selection & Angle Definition",
   "short": "story selection",
   "desc": "Surface several possible stories in a space, weigh them against originality, access, evidence and human interest, then commit to one.",
   "leaves": "a story pitch and reporting plan",
   "bar": false,
   "rubric": [
    [
     "Pick a story",
     "You choose one of the possible stories and can describe it."
    ],
    [
     "Pick the stronger one",
     "You weigh a couple of options and pick the one with more in it, not just the first that came to mind."
    ],
    [
     "Say why it beats the others",
     "You test each candidate against real criteria and justify the choice."
    ],
    [
     "Defend the angle under pressure",
     "You set the bar for what makes this story worth telling, and it holds when someone asks 'so what?'"
    ],
    [
     "Find the story no one saw",
     "You spot an angle that isn't obvious even to regulars, and prove it's reportable."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Help me weigh these three story ideas against originality, access and evidence.",
    "What's the 'so what' of this story?",
    "Which of these stories could I actually report in two visits?"
   ],
   "reads": [
    [
     "Finding the story in a place",
     "Every space holds several stories. This helps you surface them before you pick."
    ],
    [
     "Pitching a feature",
     "Your pitch has to say why this story, and why it's worth a reader's time."
    ],
    [
     "Testing an angle for access and evidence",
     "A great angle you can't report is no use, so check it first."
    ]
   ],
   "community": [
    [
     "play",
     "How I found the story at a campus tea stall"
    ],
    [
     "reader",
     "Pitches that got commissioned, and why"
    ],
    [
     "reader",
     "Three stories from one bench: a worked example"
    ],
    [
     "play",
     "Letting go of a favourite story idea"
    ]
   ]
  },
  "3": {
   "name": "Field Observation & Scene Capture",
   "short": "observation",
   "desc": "Spend real time in the place across two visits and record what's actually there — what you saw, heard and noticed.",
   "leaves": "a field observation log",
   "bar": true,
   "rubric": [
    [
     "Record the obvious",
     "You note what anyone standing there would see — the layout, the crowd, the noise."
    ],
    [
     "Notice the missable",
     "You come back with the detail a passer-by wouldn't clock: the worn spot, the regular's ritual, the thing out of place."
    ],
    [
     "See why it's like that",
     "You connect what you're seeing to why — the time of day, the rule no one states, the reason the corner stays empty."
    ],
    [
     "Know what's worth keeping",
     "You decide which observations carry the story and which are scenery, and can say why."
    ],
    [
     "Observe what others would miss",
     "You surface something nobody — including its regulars — had quite named before."
    ]
   ],
   "floor": "notices past the obvious — the detail a passer-by would miss",
   "floor_level": 2,
   "time": "3-4h",
   "ai": [
    "What should I watch for in the first 15 minutes at a busy campus spot?",
    "Turn these rough notes into a clean observation log.",
    "Which of my observations are details a passer-by would miss?"
   ],
   "reads": [
    [
     "Field observation for writers",
     "The quality bar is noticing past the obvious. This trains your eye for it."
    ],
    [
     "Keeping a field log",
     "A good log lets you write the piece weeks later without guessing."
    ],
    [
     "Observing without changing the scene",
     "How to sit somewhere long enough that people stop noticing you."
    ]
   ],
   "community": [
    [
     "reader",
     "Two field logs from the same place, compared"
    ],
    [
     "play",
     "What I noticed on my second visit that I missed on the first"
    ],
    [
     "reader",
     "Observation prompts for campus spaces"
    ],
    [
     "play",
     "Taking notes on a phone or in a notebook"
    ]
   ]
  },
  "4": {
   "name": "Photo & Video Shooting",
   "short": "photography",
   "desc": "Photograph the place and its people as it actually is. Real images give the piece its atmosphere and its evidence at once.",
   "leaves": "a set of location photographs",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ],
    [
     "Devise the approach",
     "No established method fits, so you build one — and it works beyond this case."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Suggest a shot list for a feature about a campus tea stall.",
    "How do I photograph people without making them pose?",
    "Which three photos would carry this story best?"
   ],
   "reads": [
    [
     "Photographing a place and its people",
     "Composition and light on a phone, and the shot that actually carries the story."
    ],
    [
     "Asking to photograph strangers",
     "Getting a yes, and respecting a no."
    ],
    [
     "Editing photos on a phone",
     "Small fixes that make location photos ready to publish."
    ]
   ],
   "community": [
    [
     "play",
     "Shooting one place at three times of day"
    ],
    [
     "reader",
     "Location photos that told the story on their own"
    ],
    [
     "reader",
     "How I ask strangers for a photo"
    ],
    [
     "play",
     "Phone photo edits in two minutes"
    ]
   ]
  },
  "5": {
   "name": "Source Interviewing",
   "short": "interviewing",
   "desc": "Talk to at least three regular users of the space and get past the first polite answer to something worth quoting.",
   "leaves": "an interview record",
   "bar": true,
   "rubric": [
    [
     "Get answers",
     "You ask your questions and record what people say."
    ],
    [
     "Get past the first answer",
     "You follow up rather than accept the polite version, and come away with something quotable."
    ],
    [
     "Get what they mean",
     "Where someone's guarded or contradicts themselves, you get to what they actually mean."
    ],
    [
     "Get the quote the story needs",
     "You know which of many answers earns a place in the piece, and steer there without leading."
    ],
    [
     "Get someone to say the unsaid",
     "You get a source to tell you the thing they've never told a stranger, handled with care."
    ]
   ],
   "floor": "gets past first answers to something the person actually means",
   "floor_level": 2,
   "time": "2-3h",
   "ai": [
    "Write open questions for a regular at a campus tea stall.",
    "How do I follow up when someone gives a polite, short answer?",
    "Draft a consent line I can read out before recording."
   ],
   "reads": [
    [
     "Interviewing regular people well",
     "Getting past the first polite answer to something worth quoting."
    ],
    [
     "Quotation, attribution and consent",
     "How to name a source, when not to, and what a quote has to survive."
    ],
    [
     "Listening for the quote the story needs",
     "Knowing which answer earns a place in the piece, and steering towards it."
    ]
   ],
   "community": [
    [
     "play",
     "A real interview, with notes on every follow-up"
    ],
    [
     "reader",
     "Questions that got people talking"
    ],
    [
     "reader",
     "Consent scripts for student reporters"
    ],
    [
     "play",
     "When someone says 'don't quote me'"
    ]
   ]
  },
  "6": {
   "name": "Behavioural Pattern Analysis",
   "short": "pattern analysis",
   "desc": "Read the unwritten rules of the space — who uses it, who doesn't, what shifts by the hour — and pin down what reveals its culture.",
   "leaves": "a culture pattern breakdown",
   "bar": false,
   "rubric": [
    [
     "Spot who's there",
     "You record who uses the space, when, and how — the visible patterns."
    ],
    [
     "Spot who isn't",
     "You catch the absences and the shifts — who avoids it, what changes by the hour."
    ],
    [
     "Read the unwritten rule",
     "You connect the patterns to the rule no one states, and test it against what people say."
    ],
    [
     "Name the tension",
     "You surface the patterns or tensions that reveal something real about the culture, each backed with evidence."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Group these observations into patterns about who uses the space and when.",
    "What unwritten rule might explain why this corner stays empty?",
    "How can I test this pattern against what people told me?"
   ],
   "reads": [
    [
     "Reading the unwritten rules of a space",
     "Turns scattered observations into what the place is really like."
    ],
    [
     "Spotting absences, not just presence",
     "Who doesn't use a space often says more than who does."
    ],
    [
     "Backing a pattern with evidence",
     "Every pattern you name needs observations and quotes behind it."
    ]
   ],
   "community": [
    [
     "reader",
     "Mapping a canteen by the hour"
    ],
    [
     "play",
     "Finding the rule nobody says out loud"
    ],
    [
     "reader",
     "A pattern breakdown from a past feature"
    ],
    [
     "play",
     "When a pattern turns out to be wrong"
    ]
   ]
  },
  "7": {
   "name": "Narrative Feature Construction",
   "short": "the writing",
   "desc": "Build the observations and interviews into a 700–1,000 word piece a stranger can step into.",
   "leaves": "a 700–1,000 word feature draft",
   "bar": true,
   "rubric": [
    [
     "Describe the place",
     "You write a clear, orderly account of what the place is and what's there."
    ],
    [
     "Bring it to life",
     "You use scene, detail and a real voice so the piece reads, not just informs."
    ],
    [
     "Put the reader inside it",
     "Observation, quote and detail are woven so a reader who's never been there experiences the place."
    ],
    [
     "Make it about something",
     "The piece is shaped around a point about the place, and every part earns its keep against that."
    ],
    [
     "Write something only you could",
     "The voice, structure and eye are distinctive enough that it couldn't have come off a template."
    ]
   ],
   "floor": "goes beyond describing the place to putting the reader inside it",
   "floor_level": 2,
   "time": "4-6h",
   "ai": [
    "Suggest three ways to open this feature with a scene.",
    "Where does this draft describe the place instead of putting me in it?",
    "Cut this 1,300-word draft to under 1,000 without losing the voice."
   ],
   "reads": [
    [
     "The fundamentals of feature writing",
     "Scene-setting, sensory detail, anecdote and voice: the moves that put a reader in a place."
    ],
    [
     "Shaping a feature around a point",
     "The piece has to be about something, not just a tour of the place."
    ],
    [
     "Editing your own draft",
     "Getting from a first draft to 700 to 1,000 words that all earn their place."
    ]
   ],
   "community": [
    [
     "reader",
     "First draft and published version of a campus feature"
    ],
    [
     "play",
     "Writing a scene that puts the reader there"
    ],
    [
     "reader",
     "Openings that hooked editors"
    ],
    [
     "play",
     "Live edit: cutting a feature by a third"
    ]
   ]
  },
  "8": {
   "name": "Fact-Check & Attribution Verification",
   "short": "the fact-check",
   "desc": "Stand behind every claim, quote and name — verify against your record, confirm consent, and cut what won't hold.",
   "leaves": "a fact-check and sourcing pass",
   "bar": true,
   "rubric": [
    [
     "Check the checkable",
     "You verify facts with one clear source, and tie each quote to who said it."
    ],
    [
     "Chase the awkward ones",
     "Claims with a partial or secondhand source get run down properly instead of left to stand."
    ],
    [
     "Resolve the conflicts",
     "Where an interview, a sign and your notes disagree, you work out what to publish and show why."
    ],
    [
     "Set the bar for the piece",
     "You define what 'stands up' means here — sourcing, consent, fairness — and it holds when challenged."
    ],
    [
     "Invent the check no one had",
     "You build a way to verify a class of claim there's no established way to check."
    ]
   ],
   "floor": "works out what stands when a source and your own observation disagree",
   "floor_level": 3,
   "time": "1-2h",
   "ai": [
    "List every claim in this draft that needs checking.",
    "How do I check a fact when my only source is secondhand?",
    "What should I do when a quote and my notes disagree?"
   ],
   "reads": [
    [
     "Fact-checking and ethical reporting",
     "Standing a claim up before it's published, and the lines you don't cross to get a story."
    ],
    [
     "Checking quotes against your record",
     "Every quote has to match what the person actually said."
    ],
    [
     "Handling sources that disagree",
     "The quality bar is working out what stands when your sources conflict."
    ]
   ],
   "community": [
    [
     "reader",
     "The fact-check pass we run on every feature"
    ],
    [
     "play",
     "A claim that fell apart under checking"
    ],
    [
     "reader",
     "Naming sources: when to keep someone anonymous"
    ],
    [
     "play",
     "Fact-checking a feature in an hour"
    ]
   ]
  },
  "9": {
   "name": "Publication Packaging & Visual Treatment",
   "short": "packaging",
   "desc": "Write the headline and deck, choose and caption the photographs, and lay the piece out so it reads as genuinely published.",
   "leaves": "a publication-ready feature package",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ],
    [
     "Devise the approach",
     "No established method fits, so you build one — and it works beyond this case."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write five headline options for this feature.",
    "Draft a one-line deck that makes someone want to read on.",
    "Write captions for these three photos."
   ],
   "reads": [
    [
     "Headline and deck writing",
     "The headline decides whether anyone reads the piece at all."
    ],
    [
     "Captioning photographs",
     "A caption should add to the photo, not repeat it."
    ],
    [
     "Laying out a feature for the web",
     "Makes the piece read as genuinely published rather than a shared doc."
    ]
   ],
   "community": [
    [
     "reader",
     "Headlines that worked on Tapri Talk"
    ],
    [
     "play",
     "Choosing the lead photo"
    ],
    [
     "reader",
     "Captions, good and bad"
    ],
    [
     "play",
     "Laying out a feature in 20 minutes"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Ground yourself in the craft",
   "desc": "Before you go anywhere, learn what makes a place-based feature work — observation, scene-setting, sensory detail, quotation, anecdote, voice, fact-checking and the ethics of reporting on real people.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Find the story worth telling",
   "desc": "Pick a campus space and surface three possible stories inside it. Weigh each against originality, human interest, access, evidence and narrative potential — then commit to the strongest.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Report it on the ground — across two visits",
   "desc": "Spend meaningful time in the place across two separate visits, recording what you see, hear and notice. Gather photographs while you're there.",
   "loop": true,
   "loopnote": "Expect to return — the second visit is where the first one's gaps get filled.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 4,
   "title": "Talk to the people who use it",
   "desc": "Speak to at least three regular users. Get past the first polite answer to something worth quoting, and note who each person is and that they're happy to be quoted.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 5,
   "title": "Decode the unwritten rules",
   "desc": "Investigate the behaviour around the space — who uses it and who doesn't, what shifts at different times, and the rules no one states but everyone follows.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Write the feature",
   "desc": "Turn the observations and interviews into a 700–1,000 word reported piece that lets someone who has never set foot there experience the place.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Make it stand up",
   "desc": "Go back through the draft: check every claim, verify every quote against your record, confirm each named source consented.",
   "loop": true,
   "loopnote": "Loops back to steps 3 and 4 — expect at least one round.",
   "vcs": [
    "8"
   ]
  },
  {
   "n": 8,
   "title": "Package it to publish",
   "desc": "Write a headline and deck, choose and caption the photographs, and give the piece a visual direction that fits the story and the place.",
   "vcs": [
    "9"
   ]
  }
 ],
 "resources": [
  [
   "The fundamentals of observational and feature writing",
   "Scene-setting, sensory detail, anecdote and voice — the moves that put a reader in a place."
  ],
  [
   "Interviewing regular people well",
   "Getting past the first polite answer to something worth quoting, and doing it kindly."
  ],
  [
   "Quotation, attribution and consent",
   "How to name a source, when not to, and what a quote has to survive."
  ],
  [
   "Fact-checking and ethical reporting",
   "Standing a claim up before it's published, and the lines you don't cross to get a story."
  ],
  [
   "Place-based features worth studying",
   "Strong published examples of writers making a reader feel present in a specific place."
  ],
  [
   "Photographing a place and its people",
   "Composition and light on a phone, and the shot that actually carries the story."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish this. Choose a single construct from the path, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the swipe file or the observation log — they need the least setup.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role — you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing — and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "Interviewing is the one most likely to earn you an L2 here.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation — you already have the breadth."
  },
  "3": {
   "head": "Take it all the way — build the full feature and attach it.",
   "say": "You've contributed in pieces before. This time carry the whole thing: report it, write it, check it, and attach the finished feature.",
   "pick": "Work the path in order — the four constructs carrying a bar are what hold the piece up.",
   "nudge": [
    "3",
    "5",
    "7",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the finished feature counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission — to a deadline you set.",
   "say": "Completing it isn't the challenge any more. Give yourself a delivery date and hold to it, and treat the case study as something a stakeholder will read.",
   "pick": "Push the four constructs carrying a bar to L4 — that's where the difference shows.",
   "nudge": [
    "7",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder here to set your target, so set it yourself: pick the outcome this piece should shift, and build the case study to prove you moved it.",
   "pick": "Take one construct to L5 — the version only you could have done.",
   "nudge": [
    "7"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-DS03-HOPON-BOOKING-001",
 "ui": {
  "id": 104,
  "roles": [
   "Interaction Designer",
   "UX Designer",
   "Product Designer (UX/UI)"
  ],
  "stage": "Seed-stage startup",
  "category": "Design",
  "time": "16-20 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Interaction Design",
  "deliverable": "Interaction Design Specification",
  "title": "Design how booking a campus shuttle seat should feel, tap by tap",
  "role": "Interaction Designer",
  "industry": "Mobility & Smart Transport",
  "venture": "Hopon"
 },
 "takeaways": {
  "asset": "An interaction specification for Hopon's seat-booking and live-tracking flow, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Detailed, hands-on design: working out exactly what happens on every tap, swipe and wait."
 },
 "pre": {
  "lede": "You'll design how a student books a seat on Hopon's campus shuttle and tracks it arriving: every state, transition and bit of feedback, specified clearly enough that an engineer can build it without guessing.",
  "produces": "an interaction design specification: the flows, the states of every component, the transitions and timings, and the reasoning behind them.",
  "skills_technical": [
   "Interaction design",
   "State modelling",
   "Micro-interaction design",
   "Motion specification",
   "Figma",
   "Design documentation"
  ],
  "skills_transferable": [
   "Attention to Detail",
   "Problem Solving",
   "Written Communication",
   "Empathy"
  ],
  "capabilities": [
   [
    "Interaction Design",
    "deciding how every control responds and how screens move into one another"
   ],
   [
    "Motion & Animation",
    "using timing and motion to tell people what just happened"
   ],
   [
    "Design Systems",
    "describing components and their states so they can be reused"
   ]
  ],
  "resume_line": "Specified the seat-booking and live-tracking interactions for Hopon, a campus shuttle startup: 6 flows, 40+ component states and a motion spec engineers built from directly.",
  "asset_line": "A complete interaction spec for Hopon's booking flow (flows, states, transitions and timings) with the decisions behind it, held together as one case study."
 },
 "background": {
  "venture": "Hopon runs app-booked shuttles between hostels, academic blocks and the nearest metro station across two large campuses. Students book a seat, see the shuttle on a live map and board with a QR code.",
  "project": "Hopon is rebuilding its booking screen before the new semester. The visual design is done; what's missing is the interaction layer: what happens when a seat sells out mid-booking, how the live map behaves when the signal drops, and how a cancelled trip is communicated.",
  "why": "Most of Hopon's support messages aren't about the shuttles. They're about the app: people tapping 'book' twice because nothing seemed to happen, or missing a shuttle because the map froze without telling them. Every one of those is an interaction nobody designed. Getting them right is cheaper than another driver."
 },
 "chirag_intro": "The route from finished screens to an interaction layer an engineer can build. The constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Interaction Audit",
   "short": "the audit",
   "desc": "Go through Hopon's current booking flow and log every moment where the app's response is missing, slow or confusing.",
   "leaves": "an interaction audit log",
   "bar": false,
   "rubric": [
    [
     "List the moments",
     "You record each tap and wait in the current flow and what the app does in response."
    ],
    [
     "Find the silent ones",
     "You catch the moments where nothing visibly happens, or happens too late, and note the effect on the user."
    ],
    [
     "Explain the cost",
     "You link each problem to what it causes: double bookings, missed shuttles, support messages."
    ],
    [
     "Rank what matters",
     "You order the problems by harm and defend the order when someone questions it."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "List every moment in a booking flow where the user is waiting for the app.",
    "What feedback should a user get when a tap takes more than a second?",
    "Which of these problems would cause a double booking?"
   ],
   "reads": [
    [
     "Heuristics for system feedback",
     "Gives you a way to name why a moment feels broken, not just that it does."
    ],
    [
     "Response-time thresholds",
     "Explains how long people will wait before they tap again, which is behind Hopon's double bookings."
    ],
    [
     "Running a cognitive walkthrough",
     "A structured way to step through the flow as a first-time user would."
    ]
   ],
   "community": [
    [
     "play",
     "Auditing a booking app in 30 minutes"
    ],
    [
     "reader",
     "Our interaction audit template"
    ],
    [
     "reader",
     "Ten silent moments we found in one checkout"
    ],
    [
     "play",
     "Turning an audit into a priority list"
    ]
   ]
  },
  "2": {
   "name": "User Flow & Edge-Case Mapping",
   "short": "the flow map",
   "desc": "Map the booking and tracking flows including every way they can go wrong: sold-out seats, a lost signal, a cancelled trip.",
   "leaves": "an edge-case flow map",
   "bar": true,
   "rubric": [
    [
     "Map the main flow",
     "You show the route from opening the app to boarding the shuttle."
    ],
    [
     "Map the edge cases",
     "You add the branches for sold-out seats, failed payments, lost signal and cancellations, and where each leads."
    ],
    [
     "Explain the recovery",
     "For each edge case you show how the user gets back on track and why that route."
    ],
    [
     "Simplify it",
     "You cut branches that don't earn their place and defend the leaner map."
    ],
    [
     "Design a new pattern",
     "You invent a recovery pattern that no existing app quite uses, and it works beyond Hopon."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "What can go wrong between tapping 'book' and boarding a shuttle?",
    "How should the app recover when a seat sells out mid-booking?",
    "Which edge cases are worth designing for, and which are too rare?"
   ],
   "reads": [
    [
     "Designing error and recovery paths",
     "The quality bar here is the edge cases. This covers the common ones and how people recover from them."
    ],
    [
     "User flow notation",
     "Keeps your map readable to the engineers who'll build from it."
    ],
    [
     "Designing for unreliable networks",
     "Campus signal drops constantly, so the flow has to survive it."
    ]
   ],
   "community": [
    [
     "play",
     "Mapping edge cases before you design"
    ],
    [
     "reader",
     "Flow map of a ride-booking app, every branch included"
    ],
    [
     "reader",
     "FigJam flow kit (community template)"
    ],
    [
     "play",
     "The edge case that broke our first launch"
    ]
   ],
   "floor": "accounts for the moments the flow goes wrong, like a sold-out seat or a lost signal, and how people recover",
   "floor_level": 2
  },
  "3": {
   "name": "Component State Modelling",
   "short": "the state model",
   "desc": "Define every state each interactive component can be in, from the seat picker to the live map, and what moves it between states.",
   "leaves": "a component state model",
   "bar": true,
   "rubric": [
    [
     "List the states",
     "Each component has its default, pressed, disabled, loading and error states listed."
    ],
    [
     "Define the triggers",
     "You show what moves each component from one state to another."
    ],
    [
     "Cover the odd cases",
     "You handle states that collide, like a seat that becomes unavailable while selected."
    ],
    [
     "Make it a system",
     "The same kinds of state behave the same way everywhere, and you can show the rule."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "List every state a seat picker can be in.",
    "What should a 'book' button do while payment is processing?",
    "Which states in this model could collide, and how do I resolve them?"
   ],
   "reads": [
    [
     "State machines for designers",
     "A simple way to think about states and triggers so nothing falls through the gaps."
    ],
    [
     "Designing component states",
     "Shows what each state has to tell the user, from disabled to loading."
    ],
    [
     "Handling conflicting states",
     "The hard part is two things happening at once; this covers how to resolve it."
    ]
   ],
   "community": [
    [
     "reader",
     "State model for a booking button, fully worked"
    ],
    [
     "play",
     "State machines explained with sticky notes"
    ],
    [
     "reader",
     "Component state checklist"
    ],
    [
     "play",
     "When two states collide: a real example"
    ]
   ],
   "floor": "defines what happens when states collide, not just each state on its own",
   "floor_level": 3
  },
  "4": {
   "name": "Micro-interaction Design",
   "short": "the micro-interactions",
   "desc": "Design the small moments that confirm an action: the tap on 'book', the seat locking in, the QR code appearing.",
   "leaves": "a micro-interaction set",
   "bar": false,
   "rubric": [
    [
     "Design the feedback",
     "Each key action has a visible response designed for it."
    ],
    [
     "Make it informative",
     "The response tells the user what happened and what comes next, not just that something moved."
    ],
    [
     "Explain the choices",
     "You can say why each moment works the way it does, tied to the problem it solves."
    ],
    [
     "Set the rules",
     "You define a small set of rules every micro-interaction follows, and the set holds to them."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Design the moment a seat booking is confirmed.",
    "How can a button show it's working without a spinner?",
    "What's the smallest change that tells a user their tap registered?"
   ],
   "reads": [
    [
     "Microinteractions: trigger, rules, feedback",
     "Breaks a small moment into parts so you can design each one deliberately."
    ],
    [
     "Haptics and sound in mobile apps",
     "Some confirmations work better felt than seen, especially on a moving shuttle."
    ],
    [
     "Designing for confidence after payment",
     "The moment after paying is when people double-tap; this shows how to reassure them."
    ]
   ],
   "community": [
    [
     "play",
     "Five micro-interactions that cut our support tickets"
    ],
    [
     "reader",
     "Before and after: a booking confirmation"
    ],
    [
     "reader",
     "Micro-interaction teardown of popular apps"
    ],
    [
     "play",
     "Prototyping a micro-interaction in Figma"
    ]
   ]
  },
  "5": {
   "name": "Transition & Motion Specification",
   "short": "the motion spec",
   "desc": "Specify how screens and elements move: durations, easing and what each motion is meant to tell the user.",
   "leaves": "a motion specification",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Suggest durations and easing for a bottom sheet opening.",
    "How should the live map animate when the shuttle position updates?",
    "Which transitions here can be removed without losing meaning?"
   ],
   "reads": [
    [
     "Motion timing and easing basics",
     "You'll specify durations and curves, so you need a feel for what reads as smooth."
    ],
    [
     "Motion with a purpose",
     "Every animation in the spec should explain something; this helps you cut the decorative ones."
    ],
    [
     "Documenting motion for developers",
     "Engineers need numbers, not adjectives. This shows how to write them down."
    ]
   ],
   "community": [
    [
     "reader",
     "Timing cheat sheet for mobile transitions"
    ],
    [
     "play",
     "Specifying motion engineers actually build"
    ],
    [
     "reader",
     "Motion spec from a past work order"
    ],
    [
     "play",
     "When animation makes an app feel slower"
    ]
   ]
  },
  "6": {
   "name": "Interactive Prototype Build",
   "short": "the prototype",
   "desc": "Build a clickable prototype of the key interactions so the team can feel them, not just read about them.",
   "leaves": "an interaction prototype",
   "bar": true,
   "rubric": [
    [
     "Link the flow",
     "The main booking route clicks through on a phone."
    ],
    [
     "Show the states",
     "Loading, error and sold-out moments appear in the prototype as specified."
    ],
    [
     "Make it feel real",
     "Timings and transitions in the prototype match the spec closely enough to judge them."
    ],
    [
     "Build it to be changed",
     "The file is set up so a change to the spec can be reflected in minutes."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How do I show a loading state in a Figma prototype?",
    "What's the quickest way to fake a live-moving shuttle on a map?",
    "Which interactions are worth prototyping and which can stay in the spec?"
   ],
   "reads": [
    [
     "Figma smart animate and variables",
     "Lets your prototype show the transitions you specified, not just jump between screens."
    ],
    [
     "Prototyping micro-interactions",
     "Shows how to build the small moments so the team can feel them."
    ],
    [
     "Testing a prototype on a real phone",
     "Timings feel different on a device; check them where they'll be used."
    ]
   ],
   "community": [
    [
     "play",
     "Smart animate in 15 minutes"
    ],
    [
     "reader",
     "Faking a live map in a prototype"
    ],
    [
     "play",
     "Prototype review: does it feel like the spec?"
    ],
    [
     "reader",
     "Prototype file setup that's easy to change"
    ]
   ],
   "floor": "lets someone feel the key interactions on a phone, including the loading and error moments",
   "floor_level": 2
  },
  "7": {
   "name": "Peer Interaction Review",
   "short": "the review",
   "desc": "Walk two other designers through the prototype, capture where the interactions confused them, and decide what to change.",
   "leaves": "a review record with changes",
   "bar": false,
   "rubric": [
    [
     "Run the review",
     "Two people go through the prototype and you note their reactions."
    ],
    [
     "Capture the confusion",
     "You record exactly where they hesitated or misread the app's response."
    ],
    [
     "Decide what changes",
     "You commit to a change for each real problem and show what you chose to keep."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write questions for a design review that don't lead the reviewer.",
    "Group this review feedback into distinct problems.",
    "Which of these comments is about taste and which is about a real problem?"
   ],
   "reads": [
    [
     "Running a design critique",
     "Gets useful feedback rather than opinions about colours."
    ],
    [
     "Separating taste from problems",
     "Helps you decide which feedback should change the spec."
    ],
    [
     "Recording review outcomes",
     "So the spec shows what changed and why."
    ]
   ],
   "community": [
    [
     "play",
     "A real design critique, start to finish"
    ],
    [
     "reader",
     "Critique questions that get useful answers"
    ],
    [
     "reader",
     "Turning feedback into spec changes"
    ],
    [
     "play",
     "Handling feedback you disagree with"
    ]
   ]
  },
  "8": {
   "name": "Interaction Specification Write-up",
   "short": "the specification",
   "desc": "Assemble the flows, states, micro-interactions and motion into one specification an engineer can build from.",
   "leaves": "an interaction design specification",
   "bar": true,
   "rubric": [
    [
     "Assemble it",
     "Flows, states and motion are collected in one document in a sensible order."
    ],
    [
     "Make it unambiguous",
     "Every interaction has its trigger, response and timing written down clearly."
    ],
    [
     "Explain the decisions",
     "Key choices carry a short reason, pointing back to the audit or the review."
    ],
    [
     "Make it buildable alone",
     "An engineer who wasn't involved could build the flow from the spec without asking you."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Outline the sections of an interaction spec for engineers.",
    "Rewrite this spec entry so it can't be misread.",
    "What would an engineer ask about this section?"
   ],
   "reads": [
    [
     "Design handoff practices",
     "The spec is the handoff. This covers what engineers need from one."
    ],
    [
     "Writing clear design documentation",
     "Short, unambiguous entries beat long explanations."
    ],
    [
     "Annotating designs in Figma",
     "Keeps the spec next to the screens it describes."
    ]
   ],
   "community": [
    [
     "reader",
     "An interaction spec engineers loved"
    ],
    [
     "play",
     "Walking engineers through a spec"
    ],
    [
     "reader",
     "Spec template (community copy)"
    ],
    [
     "play",
     "What developers wish designers wrote down"
    ]
   ],
   "floor": "is clear enough that an engineer could build the flow from it without asking a question",
   "floor_level": 3
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "See what's broken today",
   "desc": "Use the current Hopon app the way a student would, from booking to boarding, and note every moment where it leaves you unsure what happened.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Map every route, including the bad ones",
   "desc": "Lay out the booking and tracking flows with every branch where something goes wrong, before you design a single response.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Pull in the visual design",
   "desc": "Bring Hopon's finished screens and components into your file so the interactions are designed on top of what will actually ship."
  },
  {
   "n": 4,
   "title": "Define the states",
   "desc": "Work out every state each interactive component can be in and what moves it between them.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 5,
   "title": "Design the moments and the motion",
   "desc": "Design the small confirmations and the transitions between screens, and specify their timing.",
   "vcs": [
    "4",
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Make it feel real",
   "desc": "Build a prototype so the team can feel the interactions on a phone, then walk two designers through it and change what confused them.",
   "vcs": [
    "6",
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to steps 4 and 5: expect one or two rounds."
  },
  {
   "n": 7,
   "title": "Write it down for the build",
   "desc": "Assemble everything into one specification an engineer can build from without you in the room.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Heuristics for system feedback",
   "The principles behind why an app feels responsive or broken."
  ],
  [
   "Designing component states",
   "Every state a control can be in, and what each one has to tell the user."
  ],
  [
   "Motion timing and easing",
   "Durations and curves that read as smooth on a phone."
  ],
  [
   "Microinteractions",
   "Designing the small moments that confirm an action."
  ],
  [
   "Designing for unreliable networks",
   "Keeping an app understandable when the signal drops."
  ],
  [
   "Design handoff practices",
   "What engineers need from a specification."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the specification. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the audit or the flow map: they only need the current app and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The state model is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: design the full interaction layer, prototype it and specify it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the specification at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "6",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the specification counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the spec as something an engineering lead will build from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this flow should change, such as double bookings, and build the case study to show your design would move it.",
   "pick": "Take the flow map to L5: the recovery pattern only you came up with.",
   "nudge": [
    "2"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-PR13-MEDISLOT-JOURNEY-001",
 "ui": {
  "id": 105,
  "roles": [
   "UX Researcher",
   "Service Designer",
   "Product Manager"
  ],
  "stage": "Seed-stage startup",
  "category": "Product",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "User Journey Mapping",
  "deliverable": "User Journey Map",
  "title": "Map what a patient actually goes through, from first symptom to follow-up",
  "role": "UX Researcher",
  "industry": "HealthTech",
  "venture": "MediSlot"
 },
 "takeaways": {
  "asset": "A research-backed journey map of a MediSlot patient's experience, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Listening-heavy research: talking to real people, then making sense of what they told you."
 },
 "pre": {
  "lede": "You'll map the full journey of someone booking a clinic visit through MediSlot, from noticing a symptom to the follow-up afterwards, built from interviews with real patients, so the team can see where people struggle and where they quietly give up.",
  "produces": "a user journey map: the stages, actions, thoughts and feelings of a real patient, the pain points along the way, and the opportunities they point to.",
  "skills_technical": [
   "Interview design",
   "User interviewing",
   "Synthesis & affinity mapping",
   "Journey mapping",
   "Opportunity framing",
   "FigJam / Miro"
  ],
  "skills_transferable": [
   "Empathy",
   "Effective Listening",
   "Research & Analysis",
   "Written Communication"
  ],
  "capabilities": [
   [
    "UX Research & Testing",
    "finding out what people actually do and feel, not what you assume"
   ],
   [
    "Service Design",
    "seeing an experience end to end, across every touchpoint"
   ],
   [
    "Design Strategy",
    "turning findings into the opportunities a team should act on"
   ]
  ],
  "resume_line": "Mapped the patient journey for MediSlot, a clinic-booking startup: 6 patient interviews, a 7-stage journey map and 5 prioritised opportunities the product team adopted.",
  "asset_line": "A journey map built from real patient interviews, with the pain points and opportunities it surfaced, held together as one case study."
 },
 "background": {
  "venture": "MediSlot lets people book appointments at neighbourhood clinics in tier-2 cities, pay online and get reminders and prescriptions on WhatsApp. It works with around 40 small clinics.",
  "project": "MediSlot's bookings are healthy but repeat visits are low, and the team suspects the problem sits outside the app: in the waiting room, the prescription, or the follow-up nobody reminds you about. They want the whole patient journey mapped before deciding what to build next.",
  "why": "The team has been guessing. Some think reminders are the problem, others blame clinic wait times, others the price. Each guess leads to a different product roadmap. A journey map built from real patients replaces three opinions with one shared picture, and stops the team building the wrong thing for six months."
 },
 "chirag_intro": "The route from 'we think we know' to a journey map built from real patients. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Assumption Mapping",
   "short": "the assumptions",
   "desc": "Write down what the team currently believes about the patient journey, and rank which beliefs would hurt most if they were wrong.",
   "leaves": "an assumption map",
   "bar": false,
   "rubric": [
    [
     "List the beliefs",
     "You capture what the team assumes about each part of the journey."
    ],
    [
     "Rank the risky ones",
     "You sort assumptions by how much rides on them and how little evidence backs them."
    ],
    [
     "Turn them into questions",
     "The riskiest assumptions become research questions you can actually answer."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "List the assumptions a clinic-booking team might hold about repeat visits.",
    "Which of these assumptions would change the roadmap if they were wrong?",
    "Turn this assumption into a research question."
   ],
   "reads": [
    [
     "Assumption mapping",
     "Shows how to surface and rank what a team believes before you research it."
    ],
    [
     "Writing research questions",
     "Turns vague worries into questions interviews can answer."
    ],
    [
     "Spotting confirmation bias",
     "Helps you research the beliefs that might be wrong, not just the comfortable ones."
    ]
   ],
   "community": [
    [
     "play",
     "Running an assumption mapping session"
    ],
    [
     "reader",
     "Assumption map from a health app project"
    ],
    [
     "reader",
     "From assumption to research question"
    ],
    [
     "play",
     "The assumption that killed our roadmap"
    ]
   ]
  },
  "2": {
   "name": "Interview Guide Design",
   "short": "the interview guide",
   "desc": "Write a guide for 45-minute patient interviews that gets people telling stories about real visits, not giving opinions.",
   "leaves": "an interview guide",
   "bar": false,
   "rubric": [
    [
     "Cover the journey",
     "The guide asks about each stage of a clinic visit."
    ],
    [
     "Ask for stories",
     "Questions ask about a specific recent visit rather than general opinions."
    ],
    [
     "Avoid leading",
     "No question suggests an answer, and sensitive topics are approached with care."
    ],
    [
     "Test and tighten it",
     "You pilot the guide once and fix the questions that didn't work."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Rewrite this question so it asks about a specific past visit.",
    "Which of these interview questions are leading?",
    "How should I ask about a health worry without making someone uncomfortable?"
   ],
   "reads": [
    [
     "Writing an interview guide",
     "Structure, warm-up and follow-ups for a 45-minute conversation."
    ],
    [
     "Asking about past behaviour",
     "People are bad at predicting what they'll do; stories about real visits are reliable."
    ],
    [
     "Researching sensitive topics",
     "Health is personal. This covers consent and asking with care."
    ]
   ],
   "community": [
    [
     "reader",
     "Interview guide from a healthcare study"
    ],
    [
     "play",
     "Piloting your guide: what to fix"
    ],
    [
     "reader",
     "Questions that got people telling stories"
    ],
    [
     "play",
     "Asking about health without being intrusive"
    ]
   ]
  },
  "3": {
   "name": "Patient Interviewing",
   "short": "the interviews",
   "desc": "Interview five or six people who've booked a clinic visit recently, and record what happened at each step of their visit.",
   "leaves": "a set of interview notes",
   "bar": true,
   "rubric": [
    [
     "Hold the interviews",
     "You talk to five people and record what they say."
    ],
    [
     "Get the real story",
     "You follow up past general answers to what actually happened on a specific visit."
    ],
    [
     "Get under the feeling",
     "Where someone is vague or contradicts themselves, you get to what they actually experienced."
    ],
    [
     "Hear what's unsaid",
     "You pick up the worries people didn't name directly, and check them gently."
    ]
   ],
   "time": "4-6h",
   "ai": [
    "What follow-up question works when someone says 'it was fine'?",
    "How do I keep an interview on the clinic visit without being rigid?",
    "Summarise this interview transcript into key moments."
   ],
   "reads": [
    [
     "Interviewing people well",
     "Getting past the polite answer to what really happened."
    ],
    [
     "Taking notes you can use later",
     "Notes that let you build the map weeks later."
    ],
    [
     "Consent and recording",
     "How to ask to record, and how to keep notes private."
    ]
   ],
   "community": [
    [
     "play",
     "A full patient interview, with commentary"
    ],
    [
     "reader",
     "Note-taking template for interviews"
    ],
    [
     "reader",
     "Finding interviewees through clinics"
    ],
    [
     "play",
     "When an interview goes off track"
    ]
   ],
   "floor": "gets past general answers to what actually happened on a specific visit",
   "floor_level": 2
  },
  "4": {
   "name": "Research Synthesis",
   "short": "the synthesis",
   "desc": "Turn the interview notes into themes: what patients consistently do, think and feel at each stage.",
   "leaves": "an affinity map of themes",
   "bar": true,
   "rubric": [
    [
     "Group the notes",
     "Observations are clustered into groups."
    ],
    [
     "Name the themes",
     "Each group has a name that says what it means, not just what it's about."
    ],
    [
     "Back each theme",
     "Every theme points to the interviews behind it, and you note where people differed."
    ],
    [
     "Find the tension",
     "You surface the patterns that reveal something the team didn't know, each with evidence."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Group these interview notes into themes.",
    "Rewrite this theme name so it states a finding.",
    "Which themes contradict each other?"
   ],
   "reads": [
    [
     "Affinity mapping",
     "Turns hundreds of notes into a handful of themes."
    ],
    [
     "Writing insight statements",
     "A theme should say something, not just label a topic."
    ],
    [
     "Handling contradictory findings",
     "When patients disagree, that's often the most useful finding."
    ]
   ],
   "community": [
    [
     "play",
     "Affinity mapping six interviews in an hour"
    ],
    [
     "reader",
     "Insight statements, good and bad"
    ],
    [
     "reader",
     "Synthesis board from a past project"
    ],
    [
     "play",
     "When the data says something you didn't expect"
    ]
   ],
   "floor": "names themes that say something about patients, each backed by more than one interview",
   "floor_level": 2
  },
  "5": {
   "name": "Journey Stage Definition",
   "short": "the stages",
   "desc": "Define the stages of the patient journey in patients' own terms, from noticing a symptom to the follow-up.",
   "leaves": "a journey stage framework",
   "bar": false,
   "rubric": [
    [
     "List the stages",
     "The journey is broken into stages from start to finish."
    ],
    [
     "Use patients' words",
     "Stages reflect how patients describe their experience, not the app's screens."
    ],
    [
     "Draw the boundaries",
     "You can say where each stage starts and ends, and why."
    ]
   ],
   "time": "1h",
   "ai": [
    "Suggest journey stages for a clinic visit from the patient's point of view.",
    "Where does 'booking' really start for a patient?",
    "Which stages happen outside the app?"
   ],
   "reads": [
    [
     "Journey mapping basics",
     "What a journey map is for, and the parts every good one has."
    ],
    [
     "Mapping outside the product",
     "The biggest problems often happen in the waiting room, not the app."
    ],
    [
     "Framing stages from the user's view",
     "Stages should match how patients think, not how the team builds."
    ]
   ],
   "community": [
    [
     "reader",
     "Journey stages from three health apps"
    ],
    [
     "play",
     "Defining stages with a team in 20 minutes"
    ],
    [
     "reader",
     "Stages that included the offline world"
    ],
    [
     "play",
     "Why our first stage list was wrong"
    ]
   ]
  },
  "6": {
   "name": "Journey Map Visualisation",
   "short": "the journey map",
   "desc": "Lay out the stages, actions, thoughts, feelings and touchpoints as one map the whole team can read.",
   "leaves": "a user journey map",
   "bar": true,
   "rubric": [
    [
     "Lay it out",
     "Stages, actions and touchpoints are arranged on one map."
    ],
    [
     "Show the feelings",
     "The map shows how patients feel at each stage, drawn from the interviews."
    ],
    [
     "Highlight the pain",
     "The moments that hurt most stand out at a glance, with evidence."
    ],
    [
     "Make it the team's map",
     "Someone from the team could use the map to explain the journey without you there."
    ],
    [
     "Invent a better format",
     "The standard layout doesn't fit, so you design one that shows the journey more truthfully."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "What rows should a patient journey map have?",
    "How can I show emotions on a journey map without it looking like clip art?",
    "Which pain point should be the most visible on this map?"
   ],
   "reads": [
    [
     "Journey map layouts",
     "Rows, swimlanes and emotion curves, and when each one helps."
    ],
    [
     "Visualising emotion honestly",
     "Showing feelings from the data, not decorating them."
    ],
    [
     "Designing for a team audience",
     "The map has to be readable on a wall and on a screen."
    ]
   ],
   "community": [
    [
     "reader",
     "Journey maps we'd hang on a wall"
    ],
    [
     "play",
     "Building a journey map in FigJam"
    ],
    [
     "reader",
     "Journey map template (community copy)"
    ],
    [
     "play",
     "Critique: what this map gets wrong"
    ]
   ],
   "floor": "shows the patient's feelings at each stage from what interviews revealed, not from guesses",
   "floor_level": 2
  },
  "7": {
   "name": "Opportunity Framing",
   "short": "the opportunities",
   "desc": "Turn the biggest pain points into 'how might we' opportunities, and rank them for the team.",
   "leaves": "a prioritised opportunity list",
   "bar": false,
   "rubric": [
    [
     "Name opportunities",
     "Each major pain point becomes an opportunity statement."
    ],
    [
     "Frame them well",
     "Opportunities are neither too broad to act on nor too narrow to matter."
    ],
    [
     "Rank them",
     "You order opportunities by impact and effort with a reason for each."
    ],
    [
     "Defend the top three",
     "You can argue for the top three when the team pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Turn this pain point into a 'how might we' question.",
    "Is this opportunity too broad to act on?",
    "Rank these opportunities by impact on repeat visits."
   ],
   "reads": [
    [
     "Writing 'how might we' questions",
     "Framing problems so they invite solutions."
    ],
    [
     "Prioritising opportunities",
     "Impact versus effort, and why it isn't the whole story."
    ],
    [
     "Linking opportunities to evidence",
     "Every opportunity should trace back to something patients said."
    ]
   ],
   "community": [
    [
     "play",
     "How might we: framing workshop recording"
    ],
    [
     "reader",
     "Opportunity lists that changed a roadmap"
    ],
    [
     "reader",
     "Impact and effort scoring guide"
    ],
    [
     "play",
     "Saying no to a popular opportunity"
    ]
   ]
  },
  "8": {
   "name": "Findings Readout",
   "short": "the readout",
   "desc": "Present the map and opportunities to the MediSlot team in 15 minutes, and capture what they decide.",
   "leaves": "a readout deck and decision notes",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline a 15-minute research readout for a product team.",
    "Which quote best captures this finding?",
    "What should the team decide at the end of this readout?"
   ],
   "reads": [
    [
     "Presenting research findings",
     "A readout should end in a decision, not applause."
    ],
    [
     "Telling stories with quotes",
     "One real patient quote often lands harder than a chart."
    ],
    [
     "Handling pushback on findings",
     "When a stakeholder disagrees, the evidence has to do the talking."
    ]
   ],
   "community": [
    [
     "play",
     "A research readout that changed the roadmap"
    ],
    [
     "reader",
     "Readout deck template"
    ],
    [
     "reader",
     "Choosing the quotes that land"
    ],
    [
     "play",
     "When the team doesn't believe the research"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Write down what the team believes",
   "desc": "Before talking to anyone, capture what MediSlot's team assumes about patients and decide which beliefs are riskiest.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Plan the conversations",
   "desc": "Write the interview guide and recruit five or six recent patients through two partner clinics.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Set up consent and recording",
   "desc": "Prepare the consent form, the recording setup and a private place to keep notes before the first interview."
  },
  {
   "n": 4,
   "title": "Talk to patients",
   "desc": "Interview each patient about a specific recent visit, from the first symptom to what happened after.",
   "vcs": [
    "3"
   ],
   "loop": true,
   "loopnote": "Expect to adjust the guide after the first two interviews."
  },
  {
   "n": 5,
   "title": "Make sense of it",
   "desc": "Turn the notes into themes and define the stages of the journey in patients' own terms.",
   "vcs": [
    "4",
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Draw the journey",
   "desc": "Lay the stages, actions, feelings and pain points out as one map the team can read.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 7,
   "title": "Point the team somewhere",
   "desc": "Turn the worst pain points into opportunities, rank them and present them to the team.",
   "vcs": [
    "7",
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Journey mapping basics",
   "What a journey map is for and the parts every good one has."
  ],
  [
   "Interviewing people well",
   "Getting past the polite answer to what really happened."
  ],
  [
   "Affinity mapping",
   "Turning a pile of notes into a few clear themes."
  ],
  [
   "Researching health experiences ethically",
   "Consent, privacy and asking with care."
  ],
  [
   "Writing 'how might we' questions",
   "Framing problems so they invite solutions."
  ],
  [
   "Presenting research to a team",
   "Ending a readout with a decision."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the journey map. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the assumption map or the interview guide: they need no patients yet and set up everything else.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The synthesis is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: run the research, build the map and point the team to what matters.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the journey map at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "4",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the journey map counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set a readout date with yourself and treat the map as something the team will plan a quarter around.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "4",
    "6"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the decision this map should change, such as what gets built next quarter, and build the case study to show it would.",
   "pick": "Take the journey map to L5: a format that shows the experience more truthfully than the standard layout.",
   "nudge": [
    "6"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-DS05-SPLITLY-SETTLEUP-001",
 "ui": {
  "id": 106,
  "roles": [
   "UX Researcher",
   "UX Designer"
  ],
  "stage": "Pre-seed startup",
  "category": "Design",
  "time": "14-18 hrs (recommended time)"
 },
 "identity": {
  "business_service": "UX Research & Usability Testing",
  "deliverable": "UX Research Findings",
  "title": "Find out why flatmates never finish settling up",
  "role": "UX Researcher",
  "industry": "FinTech & DeFi",
  "venture": "Splitly"
 },
 "takeaways": {
  "asset": "Usability findings on Splitly's settle-up flow, with evidence and recommendations, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Careful observation: watching people use an app, noticing where they struggle and working out why."
 },
 "pre": {
  "lede": "You'll run usability tests on Splitly's settle-up flow with real flatmates, watch where they get stuck paying each other back, and turn what you see into findings the team can act on.",
  "produces": "UX research findings: the test plan, what you observed, the problems ranked by severity, and recommendations backed by evidence.",
  "skills_technical": [
   "Usability test planning",
   "Moderated testing",
   "Task analysis",
   "Severity rating",
   "Research reporting",
   "Screen recording tools"
  ],
  "skills_transferable": [
   "Effective Listening",
   "Critical Thinking",
   "Research & Analysis",
   "Empathy"
  ],
  "capabilities": [
   [
    "UX Research & Testing",
    "running tests that show what people actually do with a product"
   ],
   [
    "Interaction Design",
    "spotting the interaction causing a problem, not just the symptom"
   ],
   [
    "Design Strategy",
    "turning findings into recommendations a team acts on"
   ]
  ],
  "resume_line": "Ran usability research on Splitly's settle-up flow: 6 moderated sessions, 11 problems ranked by severity, and 4 recommendations that cut the flow from 7 steps to 4.",
  "asset_line": "A usability study of Splitly's settle-up flow, with session evidence, ranked problems and recommendations, held together as one case study."
 },
 "background": {
  "venture": "Splitly is an expense-splitting app built for students sharing flats and hostel rooms. Flatmates log rent, groceries and bills, and Splitly works out who owes whom and lets them pay through UPI.",
  "project": "Splitly's logs are busy but only about a third of balances are ever settled in the app. The team has redesigned the settle-up flow twice without much change, and wants proper usability evidence before redesigning it a third time.",
  "why": "Two redesigns built on opinion haven't moved the number. The team doesn't need a third idea; it needs to see real flatmates try to pay each other back and fail. Evidence from six sessions is worth more than another month of debate."
 },
 "chirag_intro": "The route from 'nobody settles up' to findings the team can act on. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Research Question Framing",
   "short": "the research questions",
   "desc": "Turn 'nobody settles up' into three or four questions a usability test can actually answer.",
   "leaves": "a research question set",
   "bar": false,
   "rubric": [
    [
     "List questions",
     "You write down what the team wants to learn."
    ],
    [
     "Make them testable",
     "Each question can be answered by watching people use the app."
    ],
    [
     "Tie them to decisions",
     "You show which design decision each question would settle."
    ]
   ],
   "time": "1h",
   "ai": [
    "Turn 'nobody settles up' into questions a usability test can answer.",
    "Which of these questions can't be answered by testing?",
    "What decision would this question help the team make?"
   ],
   "reads": [
    [
     "Writing research questions",
     "Turns a vague worry into something a test can answer."
    ],
    [
     "Matching methods to questions",
     "Some questions need a test, others need data or interviews."
    ],
    [
     "Linking research to decisions",
     "Research is only useful if it settles a decision."
    ]
   ],
   "community": [
    [
     "reader",
     "Research questions that worked, and ones that didn't"
    ],
    [
     "play",
     "From problem to research question in 20 minutes"
    ],
    [
     "reader",
     "Question-to-method cheat sheet"
    ],
    [
     "play",
     "When the question is the wrong one"
    ]
   ]
  },
  "2": {
   "name": "Test Plan & Task Design",
   "short": "the test plan",
   "desc": "Plan the sessions: who to test, the tasks they'll attempt, the script, and what you'll measure.",
   "leaves": "a usability test plan",
   "bar": true,
   "rubric": [
    [
     "Write the tasks",
     "Realistic settle-up tasks are written for testers."
    ],
    [
     "Make them neutral",
     "Tasks give a goal without hinting where to tap."
    ],
    [
     "Define the measures",
     "Each task has success criteria and what you'll record."
    ],
    [
     "Plan for comparison",
     "The plan makes sessions comparable, so findings can be trusted."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write a settle-up task that doesn't give away the button to press.",
    "What should count as task success here?",
    "How many participants do I need for this test, and why?"
   ],
   "reads": [
    [
     "Writing usability test tasks",
     "Tasks that give a goal without leading the tester."
    ],
    [
     "Choosing what to measure",
     "Success, time and errors, and which matters most here."
    ],
    [
     "Recruiting participants",
     "Testers who actually share flats, or the findings won't hold."
    ]
   ],
   "community": [
    [
     "reader",
     "A complete usability test plan"
    ],
    [
     "play",
     "Writing tasks that don't lead"
    ],
    [
     "reader",
     "Recruiting flatmates for tests"
    ],
    [
     "play",
     "Pilot session: what we changed"
    ]
   ],
   "floor": "gives testers realistic goals without hinting where to tap",
   "floor_level": 2
  },
  "3": {
   "name": "Moderated Session Facilitation",
   "short": "the sessions",
   "desc": "Run five or six sessions with flatmates, keeping them talking and recording what they do.",
   "leaves": "a set of session recordings and notes",
   "bar": true,
   "rubric": [
    [
     "Run the sessions",
     "Each tester attempts the tasks while you record."
    ],
    [
     "Keep them talking",
     "Testers think aloud and you prompt without leading."
    ],
    [
     "Record behaviour",
     "You note what people did, separately from what they said."
    ],
    [
     "Handle the unexpected",
     "When a tester goes off-script, you learn from it rather than steering them back."
    ]
   ],
   "time": "4-6h",
   "ai": [
    "What can I say when a tester goes quiet?",
    "How do I respond when a tester asks 'am I doing it right?'",
    "Write a neutral session intro script."
   ],
   "reads": [
    [
     "Moderating without leading",
     "Keeping testers talking without suggesting answers."
    ],
    [
     "The think-aloud method",
     "Hearing what people expect tells you why they get stuck."
    ],
    [
     "Recording sessions ethically",
     "Consent and privacy, especially around payments."
    ]
   ],
   "community": [
    [
     "play",
     "A full moderated session, with commentary"
    ],
    [
     "reader",
     "Prompts that keep testers talking"
    ],
    [
     "reader",
     "Consent script for app testing"
    ],
    [
     "play",
     "When a tester breaks the prototype"
    ]
   ],
   "floor": "records what testers did and where they struggled, not just what they said",
   "floor_level": 2
  },
  "4": {
   "name": "Observation Logging",
   "short": "the observation log",
   "desc": "Turn the recordings into a clean log of every hesitation, error and workaround, with timestamps.",
   "leaves": "an observation log",
   "bar": false,
   "rubric": [
    [
     "Log the events",
     "Each session's key moments are written down."
    ],
    [
     "Be precise",
     "Every entry has a timestamp, the task and what happened."
    ],
    [
     "Separate fact from reading",
     "Observations are kept apart from your interpretation of them."
    ]
   ],
   "time": "2h",
   "ai": [
    "Turn this session transcript into timestamped observations.",
    "Is this observation a fact or an interpretation?",
    "What should an observation log entry contain?"
   ],
   "reads": [
    [
     "Taking usable research notes",
     "Notes you can analyse later without rewatching everything."
    ],
    [
     "Separating observation from inference",
     "Keeps your findings honest."
    ],
    [
     "Tagging observations",
     "Makes it quick to find patterns across sessions."
    ]
   ],
   "community": [
    [
     "reader",
     "Observation log template"
    ],
    [
     "play",
     "Logging a session in 20 minutes"
    ],
    [
     "reader",
     "Fact or interpretation? A quiz"
    ],
    [
     "play",
     "Tagging notes for faster synthesis"
    ]
   ]
  },
  "5": {
   "name": "Severity Rating & Prioritisation",
   "short": "the severity ratings",
   "desc": "Group the observations into problems and rank each by how badly it stops people settling up.",
   "leaves": "a prioritised problem list",
   "bar": true,
   "rubric": [
    [
     "List the problems",
     "Observations are grouped into distinct problems."
    ],
    [
     "Rate the severity",
     "Each problem is rated by frequency and impact."
    ],
    [
     "Explain the ratings",
     "You show the evidence behind each rating."
    ],
    [
     "Defend the order",
     "Your ranking holds when the team questions it."
    ]
   ],
   "time": "2h",
   "ai": [
    "Group these observations into distinct problems.",
    "How severe is a problem that slows people but doesn't stop them?",
    "Rank these problems by impact on settling up."
   ],
   "reads": [
    [
     "Severity ratings for usability problems",
     "A standard way to say how bad a problem is."
    ],
    [
     "Frequency versus impact",
     "A rare problem can still matter most."
    ],
    [
     "Finding the root cause",
     "Several symptoms often come from one design decision."
    ]
   ],
   "community": [
    [
     "reader",
     "The severity scale we use"
    ],
    [
     "play",
     "Rating problems with a team"
    ],
    [
     "reader",
     "Root cause: a worked example"
    ],
    [
     "play",
     "When everything looks severe"
    ]
   ],
   "floor": "ranks problems by how badly they stop people, with the evidence beside each",
   "floor_level": 2
  },
  "6": {
   "name": "Recommendation Writing",
   "short": "the recommendations",
   "desc": "Write a recommendation for each top problem: what to change, why, and how you'd know it worked.",
   "leaves": "a recommendation set",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write a recommendation for this problem that doesn't prescribe a full design.",
    "How would we know this change worked?",
    "Which recommendation should the team do first?"
   ],
   "reads": [
    [
     "Writing actionable recommendations",
     "Specific enough to act on, open enough for designers to solve."
    ],
    [
     "Defining success measures",
     "How the team will know a change worked."
    ],
    [
     "Prioritising recommendations",
     "What to fix first when you can't fix everything."
    ]
   ],
   "community": [
    [
     "reader",
     "Recommendations that got built"
    ],
    [
     "play",
     "From finding to recommendation"
    ],
    [
     "reader",
     "Recommendation template"
    ],
    [
     "play",
     "Recommending without designing"
    ]
   ]
  },
  "7": {
   "name": "Highlight Reel Editing",
   "short": "the highlight reel",
   "desc": "Cut a short video of the key moments testers struggled, so the team sees it for themselves.",
   "leaves": "a findings highlight reel",
   "bar": false,
   "rubric": [
    [
     "Collect the clips",
     "The key struggles are clipped from the recordings."
    ],
    [
     "Tell the story",
     "Clips are ordered so the reel builds to the main finding."
    ],
    [
     "Keep it short and fair",
     "The reel is under three minutes and doesn't exaggerate what happened."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Which moments from these sessions belong in a highlight reel?",
    "Order these clips so the reel builds to the main finding.",
    "How do I blur personal payment details in a recording?"
   ],
   "reads": [
    [
     "Making research highlight reels",
     "Seeing a real person struggle convinces a team faster than a report."
    ],
    [
     "Editing short video",
     "Simple cuts and captions for clips."
    ],
    [
     "Protecting tester privacy",
     "Blurring names and payment details before sharing."
    ]
   ],
   "community": [
    [
     "play",
     "A 2-minute reel that changed a roadmap"
    ],
    [
     "reader",
     "Choosing clips that represent the data"
    ],
    [
     "play",
     "Editing research clips quickly"
    ],
    [
     "reader",
     "Privacy checklist for research video"
    ]
   ]
  },
  "8": {
   "name": "Findings Report",
   "short": "the findings report",
   "desc": "Bring the problems, evidence, recommendations and reel together into a short report the team will actually read.",
   "leaves": "a UX research findings report",
   "bar": true,
   "rubric": [
    [
     "Assemble it",
     "Problems, evidence and recommendations are in one document."
    ],
    [
     "Lead with what matters",
     "The report opens with the most important findings."
    ],
    [
     "Back every claim",
     "Each finding links to observations or clips."
    ],
    [
     "Make it stand alone",
     "Someone who missed every session could act on the report."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a findings report a product team will actually read.",
    "Write a one-paragraph summary of these findings.",
    "What should go in an appendix rather than the main report?"
   ],
   "reads": [
    [
     "Writing a research report",
     "Short, evidence-led and ending in clear actions."
    ],
    [
     "Executive summaries",
     "The paragraph most people will read; make it count."
    ],
    [
     "Linking findings to evidence",
     "Every claim should point to something you observed."
    ]
   ],
   "community": [
    [
     "reader",
     "A findings report that got read"
    ],
    [
     "play",
     "Writing the summary first"
    ],
    [
     "reader",
     "Report template (community copy)"
    ],
    [
     "play",
     "Presenting findings in 10 minutes"
    ]
   ],
   "floor": "backs every finding with something observed in the sessions",
   "floor_level": 2
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Pin down what to learn",
   "desc": "Turn the team's frustration into a few research questions a test can answer.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Plan the test",
   "desc": "Write the tasks, the script and what you'll measure, and recruit six people who actually share a flat.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Set up the sessions",
   "desc": "Prepare test accounts with realistic balances, the recording setup and consent forms."
  },
  {
   "n": 4,
   "title": "Watch people try",
   "desc": "Run the sessions, keep testers talking, and log everything they do.",
   "vcs": [
    "3",
    "4"
   ],
   "loop": true,
   "loopnote": "Expect to adjust tasks after the first session."
  },
  {
   "n": 5,
   "title": "Make sense of it",
   "desc": "Group what you saw into problems and rank them by how badly they stop people settling up.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Tell the team",
   "desc": "Write the recommendations, cut a highlight reel and bring it all together in a findings report.",
   "vcs": [
    "6",
    "7",
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Running a usability test",
   "Planning, running and analysing a moderated test."
  ],
  [
   "Writing usability tasks",
   "Goals that don't give away the answer."
  ],
  [
   "The think-aloud method",
   "Hearing what people expect as they use an app."
  ],
  [
   "Severity ratings",
   "Saying how bad a problem is, consistently."
  ],
  [
   "Research highlight reels",
   "Short videos that make a team believe the findings."
  ],
  [
   "Writing a findings report",
   "Short, evidence-led and ending in action."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the findings. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the research questions or the test plan: they need no testers yet and set up everything else.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The severity ratings are where an L2 is most within reach here.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: plan the test, run it and deliver findings the team can act on.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the findings at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "5",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the findings counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set a readout date and treat the report as something the team will plan the next sprint from.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number your findings should move, such as balances settled in the app, and build the case study to show the evidence points there.",
   "pick": "Take the test plan to L5: a way of testing payments between friends that no standard plan covers.",
   "nudge": [
    "2"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-DS02-STRIDE-EVENTS-001",
 "ui": {
  "id": 107,
  "roles": [
   "UI / Visual Designer",
   "Product Designer (UX/UI)"
  ],
  "stage": "Pre-seed startup",
  "category": "Design",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Digital Product UI Design",
  "deliverable": "High-Fidelity UI Design",
  "title": "Design the screens that get a campus run club out of bed on a Sunday",
  "role": "UI / Visual Designer",
  "industry": "SportsTech & Wellness",
  "venture": "Stride"
 },
 "takeaways": {
  "asset": "High-fidelity UI for Stride's run events and leaderboard, with its visual language, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Visual craft: type, colour, layout and detail, pushed until the screens feel finished."
 },
 "pre": {
  "lede": "You'll design the high-fidelity screens for Stride's run events and weekly leaderboard: the visual language, the components and every key screen in every state, polished enough to hand straight to engineering.",
  "produces": "a high-fidelity UI design: the visual language, a small component set, and the finished screens in all their states.",
  "skills_technical": [
   "Visual design",
   "Typography",
   "Colour systems",
   "Layout & grids",
   "Component design",
   "Figma"
  ],
  "skills_transferable": [
   "Attention to Detail",
   "Creativity",
   "Critical Thinking",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Visual & UI Design",
    "making screens that look finished and feel right to use"
   ],
   [
    "Design Systems",
    "building components and rules that keep every screen consistent"
   ],
   [
    "Brand & Identity Design",
    "carrying a brand's personality into an interface"
   ]
  ],
  "resume_line": "Designed the high-fidelity event and leaderboard UI for Stride, a campus run-club app: a visual language, 18 components and 14 production-ready screens across every state.",
  "asset_line": "Finished UI for Stride's events and leaderboard, with the visual language and components behind it, held together as one case study."
 },
 "background": {
  "venture": "Stride is a running app built around campus run clubs. Clubs post weekend runs, members sign up, and a weekly leaderboard tracks distance and streaks across the club.",
  "project": "Stride has wireframes for its new events and leaderboard screens, tested and approved. What it doesn't have is the visual layer: the app currently looks like a spreadsheet, and the founders want it to feel as energising as the runs themselves.",
  "why": "Run clubs live or die on turnout, and turnout is driven by how much people want to open the app on a Saturday night. Stride's flows already work; they just don't make anyone want to run. The visual design is the product's personality, and right now it doesn't have one."
 },
 "chirag_intro": "The route from approved wireframes to screens ready for engineering. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Visual Direction Exploration",
   "short": "the visual direction",
   "desc": "Explore two or three visual directions for Stride and pick the one that best fits a sociable, energetic run club.",
   "leaves": "a set of visual direction boards",
   "bar": false,
   "rubric": [
    [
     "Make the boards",
     "Two or three distinct directions are shown on boards."
    ],
    [
     "Make them distinct",
     "Each direction differs in personality, not just colour."
    ],
    [
     "Explain the fit",
     "You say why each direction suits, or doesn't suit, a campus run club."
    ],
    [
     "Choose and defend",
     "You recommend one and it holds up when the founders question it."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Describe three visual directions for a sociable campus running app.",
    "What makes these two directions feel different beyond colour?",
    "Which direction fits a run club better, and why?"
   ],
   "reads": [
    [
     "Mood boards that lead to decisions",
     "Boards should help choose a direction, not just collect nice images."
    ],
    [
     "Visual personality in apps",
     "How type, colour and shape carry a feeling."
    ],
    [
     "Presenting design directions",
     "Helping founders choose without designing by committee."
    ]
   ],
   "community": [
    [
     "reader",
     "Direction boards from three sports apps"
    ],
    [
     "play",
     "Building a mood board that decides something"
    ],
    [
     "reader",
     "Presenting directions to founders"
    ],
    [
     "play",
     "When the founders pick the wrong direction"
    ]
   ]
  },
  "2": {
   "name": "Type & Colour System",
   "short": "the type and colour system",
   "desc": "Define the typefaces, type scale, colour palette and how each is used across Stride.",
   "leaves": "a type and colour system",
   "bar": true,
   "rubric": [
    [
     "Pick the type and colours",
     "Typefaces and a palette are chosen."
    ],
    [
     "Set the scale and roles",
     "Sizes, weights and colour roles are defined for real use."
    ],
    [
     "Check it works",
     "Contrast passes accessibility checks and the system holds on small screens."
    ],
    [
     "Make it a system",
     "Every screen can be built from these rules without exceptions."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Suggest a type scale for a mobile app with dense stats.",
    "Do these colour pairs pass accessibility contrast?",
    "Define colour roles for success, warning and streak states."
   ],
   "reads": [
    [
     "Type scales for mobile",
     "A scale that keeps dense stats readable."
    ],
    [
     "Colour roles and accessibility",
     "A palette people can actually read, in sunlight, mid-run."
    ],
    [
     "Designing for numbers",
     "Leaderboards are mostly figures; type choices matter."
    ]
   ],
   "community": [
    [
     "play",
     "Building a type scale in 15 minutes"
    ],
    [
     "reader",
     "Colour palettes that pass contrast"
    ],
    [
     "reader",
     "Number-heavy UI done well"
    ],
    [
     "play",
     "Testing colours outdoors"
    ]
   ],
   "floor": "passes accessibility contrast and stays readable on a small screen",
   "floor_level": 2
  },
  "3": {
   "name": "Component Design",
   "short": "the components",
   "desc": "Design the components Stride's screens need: event cards, buttons, avatars, stat blocks and leaderboard rows.",
   "leaves": "a component set",
   "bar": true,
   "rubric": [
    [
     "Design the components",
     "Each needed component exists with its main state."
    ],
    [
     "Add the variants",
     "Components have their sizes and states designed."
    ],
    [
     "Make them consistent",
     "Components share spacing, radius and type rules, and you can show them."
    ],
    [
     "Make them reusable",
     "The set covers new screens without new components being invented."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "List the components an events and leaderboard screen needs.",
    "What states does an event card need?",
    "How can these components share spacing rules?"
   ],
   "reads": [
    [
     "Designing components in Figma",
     "Variants and auto layout so components are reusable."
    ],
    [
     "Spacing and sizing systems",
     "Consistent spacing makes screens look finished."
    ],
    [
     "Component states",
     "Every component has a resting, pressed and disabled version."
    ]
   ],
   "community": [
    [
     "play",
     "Auto layout and variants in 20 minutes"
    ],
    [
     "reader",
     "Event card designs we admire"
    ],
    [
     "reader",
     "Spacing scale cheat sheet"
    ],
    [
     "play",
     "Rebuilding a messy component set"
    ]
   ],
   "floor": "designs each component with its variants and states, not just its default look",
   "floor_level": 2
  },
  "4": {
   "name": "High-Fidelity Screen Design",
   "short": "the screens",
   "desc": "Design the event list, event detail, sign-up and leaderboard screens at full fidelity.",
   "leaves": "a set of high-fidelity screens",
   "bar": true,
   "rubric": [
    [
     "Design the screens",
     "Each key screen is designed at full fidelity."
    ],
    [
     "Hold the hierarchy",
     "Each screen leads with what matters most to a runner."
    ],
    [
     "Polish the detail",
     "Alignment, spacing and type are consistent across every screen."
    ],
    [
     "Make it feel like Stride",
     "The screens carry the chosen direction's energy without hurting usability."
    ],
    [
     "Push the craft",
     "One screen does something visually fresh that still works for every user."
    ]
   ],
   "time": "4-6h",
   "ai": [
    "What should a runner see first on an event detail screen?",
    "How can a leaderboard feel motivating rather than shaming?",
    "Spot the alignment and spacing problems in this screen."
   ],
   "reads": [
    [
     "Visual hierarchy",
     "Making the most important thing obvious at a glance."
    ],
    [
     "Designing leaderboards",
     "Motivating everyone, not just the top three."
    ],
    [
     "Pixel polish",
     "The small details that make a screen look finished."
    ]
   ],
   "community": [
    [
     "reader",
     "Leaderboards that motivate everyone"
    ],
    [
     "play",
     "Polishing a screen in 15 minutes"
    ],
    [
     "reader",
     "Hi-fi critique thread: sports apps"
    ],
    [
     "play",
     "From wireframe to hi-fi, live"
    ]
   ],
   "floor": "keeps each screen's most important information obvious at a glance",
   "floor_level": 2
  },
  "5": {
   "name": "State & Edge-Case Screens",
   "short": "the edge-case screens",
   "desc": "Design the screens nobody thinks about: no events yet, a cancelled run, an empty leaderboard, an offline state.",
   "leaves": "a set of state screens",
   "bar": false,
   "rubric": [
    [
     "Design the states",
     "Empty, error and loading versions of the key screens exist."
    ],
    [
     "Write the copy",
     "Each state has real, helpful copy."
    ],
    [
     "Keep them on-brand",
     "State screens carry Stride's personality, not generic grey boxes."
    ]
   ],
   "time": "2h",
   "ai": [
    "What should an empty leaderboard say on a club's first week?",
    "Write a friendly message for a cancelled run.",
    "How should the event list look while loading?"
   ],
   "reads": [
    [
     "Empty and error states",
     "What each state owes the user, and how to design it."
    ],
    [
     "Writing friendly microcopy",
     "Words that keep people motivated when something goes wrong."
    ],
    [
     "Skeleton screens",
     "Loading states that make the app feel fast."
    ]
   ],
   "community": [
    [
     "reader",
     "Empty states with personality"
    ],
    [
     "play",
     "Designing a cancelled-run screen"
    ],
    [
     "reader",
     "Microcopy examples from sports apps"
    ],
    [
     "play",
     "Loading states that feel quick"
    ]
   ]
  },
  "6": {
   "name": "Design Critique Round",
   "short": "the critique",
   "desc": "Get two designers to critique the screens, then change what their feedback reveals.",
   "leaves": "a critique record with revisions",
   "bar": false,
   "rubric": [
    [
     "Run the critique",
     "Two people review the screens and you note what they say."
    ],
    [
     "Separate taste from problems",
     "You sort feedback into real problems and personal preferences."
    ],
    [
     "Show the changes",
     "Before and after screens show what you changed and why."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write questions to ask in a design critique.",
    "Is this feedback about taste or a real problem?",
    "Summarise what changed after this critique."
   ],
   "reads": [
    [
     "Running a design critique",
     "Getting useful feedback, not opinions about colours."
    ],
    [
     "Responding to feedback",
     "When to change something and when to hold your ground."
    ],
    [
     "Documenting revisions",
     "Before-and-after evidence for your case study."
    ]
   ],
   "community": [
    [
     "play",
     "A real critique, start to finish"
    ],
    [
     "reader",
     "Critique questions that work"
    ],
    [
     "reader",
     "Before and after from a critique"
    ],
    [
     "play",
     "Holding your ground on a design"
    ]
   ]
  },
  "7": {
   "name": "Developer Handoff Preparation",
   "short": "the handoff",
   "desc": "Prepare the file for engineering: named layers, specs, assets exported and notes on behaviour.",
   "leaves": "a handoff-ready design file",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "What should a Figma file include before handoff?",
    "How should I name layers for developers?",
    "Which assets need exporting, and in what formats?"
   ],
   "reads": [
    [
     "Design handoff practices",
     "What engineers need from a design file."
    ],
    [
     "Organising Figma files",
     "Pages, naming and structure that make sense to others."
    ],
    [
     "Exporting assets",
     "Formats and sizes for icons and images."
    ]
   ],
   "community": [
    [
     "reader",
     "Handoff checklist (community copy)"
    ],
    [
     "play",
     "Cleaning up a file for handoff"
    ],
    [
     "reader",
     "What developers wish designers did"
    ],
    [
     "play",
     "Dev mode walkthrough"
    ]
   ]
  },
  "8": {
   "name": "UI Case Study Write-up",
   "short": "the case study",
   "desc": "Write up the work as a short case study: the problem, the direction, key decisions and the final screens.",
   "leaves": "a UI design case study",
   "bar": false,
   "rubric": [
    [
     "Show the work",
     "The final screens are presented clearly."
    ],
    [
     "Explain the decisions",
     "Key choices are explained with the reasons behind them."
    ],
    [
     "Tell the story",
     "The case study reads as a journey from problem to result."
    ],
    [
     "Make it hireable",
     "A recruiter could understand your contribution in two minutes."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a UI design case study for a portfolio.",
    "Rewrite this decision explanation so it's shorter and clearer.",
    "What should a recruiter see in the first screen of this case study?"
   ],
   "reads": [
    [
     "Writing design case studies",
     "Showing how you think, not just what you made."
    ],
    [
     "Presenting UI work",
     "Mock-ups and layouts that show screens at their best."
    ],
    [
     "Explaining design decisions",
     "Short reasons that point to evidence."
    ]
   ],
   "community": [
    [
     "reader",
     "Case studies recruiters remembered"
    ],
    [
     "play",
     "Writing a case study in an afternoon"
    ],
    [
     "reader",
     "Case study template"
    ],
    [
     "play",
     "Portfolio review: UI case studies"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Find Stride's look",
   "desc": "Explore two or three visual directions and choose the one that fits a sociable, energetic run club.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set the foundations",
   "desc": "Define the type and colour system every screen will be built from.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Pull in the wireframes",
   "desc": "Bring the approved wireframes into your file and set up pages, grids and frames for each screen."
  },
  {
   "n": 4,
   "title": "Build the pieces",
   "desc": "Design the components the screens need, with their variants and states.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 5,
   "title": "Design the screens",
   "desc": "Design every key screen at full fidelity, including the empty, error and loading states.",
   "vcs": [
    "4",
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Get eyes on it",
   "desc": "Have two designers critique the screens and change what their feedback reveals.",
   "vcs": [
    "6"
   ],
   "loop": true,
   "loopnote": "Loops back to step 5: expect one or two rounds."
  },
  {
   "n": 7,
   "title": "Ship it and show it",
   "desc": "Prepare the file for engineering and write the work up as a case study.",
   "vcs": [
    "7",
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Visual hierarchy",
   "Making the most important thing obvious at a glance."
  ],
  [
   "Type scales for mobile",
   "Readable type for dense, number-heavy screens."
  ],
  [
   "Colour and accessibility",
   "Palettes everyone can read."
  ],
  [
   "Components in Figma",
   "Variants and auto layout for reusable pieces."
  ],
  [
   "Designing empty and error states",
   "Screens for when things go wrong."
  ],
  [
   "Design handoff practices",
   "What engineers need from a design file."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the finished screens. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the visual direction or the type and colour system: they set up everything else.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The components are where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: design the full visual layer, every screen and state, and hand it over.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the finished screens at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "4"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the finished screens counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a handoff date and treat the file as something an engineer opens on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "4"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the outcome these screens should move, such as Sunday turnout, and build the case study to show how the design supports it.",
   "pick": "Take the screens to L5: one screen that's visually fresh and still works for every runner.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-MK11-REFILLO-CAMPAIGN-001",
 "ui": {
  "id": 108,
  "roles": [
   "Campaign Manager",
   "Marketing Manager",
   "Social Media Manager"
  ],
  "stage": "Pre-seed startup",
  "category": "Marketing & Communications",
  "time": "20-28 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Integrated Campaign Planning & Execution",
  "deliverable": "Integrated Campaign Plan & Report",
  "title": "Plan and run the month that gets a campus to ditch bottled water",
  "role": "Campaign Manager",
  "industry": "ClimateTech",
  "venture": "Refillo"
 },
 "takeaways": {
  "asset": "An integrated campaign plan for Refillo's launch month and the report on how it did, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Planning and running things: setting goals, coordinating channels, tracking what happens and adjusting."
 },
 "pre": {
  "lede": "You'll plan Refillo's four-week launch campaign across a campus, from the goal and the audience to the channel plan, budget and timeline, then track what happens and report on what worked.",
  "produces": "an integrated campaign plan and report: objectives, audience, creative idea, channel plan, budget, timeline and a post-campaign performance summary.",
  "skills_technical": [
   "Campaign planning",
   "Audience segmentation",
   "Channel planning",
   "Budgeting",
   "Campaign tracking",
   "Reporting"
  ],
  "skills_transferable": [
   "Project Management",
   "Strategic Thinking",
   "Written Communication",
   "Collaboration"
  ],
  "capabilities": [
   [
    "Campaign Planning",
    "joining goals, audience, channels and budget into one plan"
   ],
   [
    "Marketing Analytics",
    "measuring whether a campaign actually moved its goal"
   ],
   [
    "Content Creation & Strategy",
    "briefing the creative so every piece serves the plan"
   ]
  ],
  "resume_line": "Planned and tracked Refillo's campus launch campaign: a 4-week plan across 5 channels on a ₹15,000 budget, with a performance report showing 2,300 refills in the first month.",
  "asset_line": "A complete campaign plan for Refillo's launch month and the report on how it performed, held together as one case study."
 },
 "background": {
  "venture": "Refillo installs filtered water-refill stations in colleges and charges students a small monthly pass. It's live on one campus with 12 stations and wants students to swap bottled water for refills.",
  "project": "Refillo is launching across the campus in four weeks, timed with the start of term. It has ₹15,000, a student ambassador team of six and access to the campus notice boards, WhatsApp groups and fest stalls. It needs a campaign plan that joins all of it up, and a report at the end showing what worked.",
  "why": "Refillo's earlier attempt was a burst of posters and a few Instagram posts, with no plan, no target and no way to tell what worked. Passes barely moved. This time the money is tight and the founders need proof: a campaign that's planned, tracked and reported, so the next one is built on evidence."
 },
 "chirag_intro": "The route from a goal and a small budget to a campaign that's planned, run and reported. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Campaign Objective Setting",
   "short": "the objectives",
   "desc": "Set the campaign's goal and the measurable targets that will show whether it worked.",
   "leaves": "a campaign objectives sheet",
   "bar": true,
   "rubric": [
    [
     "State the goal",
     "The campaign has a clear goal written down."
    ],
    [
     "Make it measurable",
     "Targets have a number, a deadline and a way to track them."
    ],
    [
     "Tie it to the business",
     "Targets connect to what Refillo needs: passes and refills, not likes."
    ],
    [
     "Defend the targets",
     "You can say why these numbers are realistic and hold that when challenged."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Turn 'get people to use Refillo' into measurable campaign targets.",
    "Are these targets realistic for a ₹15,000 budget?",
    "Which number best shows this campaign worked?"
   ],
   "reads": [
    [
     "Setting SMART campaign objectives",
     "Targets you can actually measure at the end."
    ],
    [
     "Choosing the right metric",
     "Refills and passes matter more than reach for Refillo."
    ],
    [
     "Benchmarks for campus campaigns",
     "What realistic results look like at this budget."
    ]
   ],
   "community": [
    [
     "reader",
     "Campaign objectives that were actually useful"
    ],
    [
     "play",
     "From vague goal to target in 15 minutes"
    ],
    [
     "reader",
     "Campus campaign benchmarks"
    ],
    [
     "play",
     "When the target was wrong"
    ]
   ],
   "floor": "sets targets with a number, a deadline and a way to track them that tie to passes and refills",
   "floor_level": 2
  },
  "2": {
   "name": "Audience Segmentation",
   "short": "the audience segments",
   "desc": "Split the campus into two or three audiences with different reasons to care, and decide who to reach first.",
   "leaves": "an audience segmentation",
   "bar": false,
   "rubric": [
    [
     "Name the segments",
     "Two or three audiences are described."
    ],
    [
     "Base them on behaviour",
     "Segments differ by what people do and care about, not just year of study."
    ],
    [
     "Pick the priority",
     "You choose who to reach first and say why."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Suggest audience segments for a campus water-refill campaign.",
    "What would make a hostel student care about refills versus a day scholar?",
    "Which segment should this campaign reach first?"
   ],
   "reads": [
    [
     "Audience segmentation basics",
     "Grouping people by what moves them."
    ],
    [
     "Writing audience profiles",
     "Short, useful descriptions the creative team can work from."
    ],
    [
     "Prioritising audiences",
     "Reaching the right people first on a small budget."
    ]
   ],
   "community": [
    [
     "reader",
     "Segments from a past campus campaign"
    ],
    [
     "play",
     "Segmenting a campus in 20 minutes"
    ],
    [
     "reader",
     "Audience profile template"
    ],
    [
     "play",
     "Why we stopped targeting everyone"
    ]
   ]
  },
  "3": {
   "name": "Creative Concept & Message",
   "short": "the creative concept",
   "desc": "Decide the one idea and key message that every piece of the campaign carries.",
   "leaves": "a creative concept brief",
   "bar": false,
   "rubric": [
    [
     "Pick a concept",
     "The campaign has a single idea."
    ],
    [
     "Make it travel",
     "The concept works on a poster, a reel and a WhatsApp message."
    ],
    [
     "Tie it to the audience",
     "The message speaks to the priority segment's actual reason to care."
    ],
    [
     "Make it distinct",
     "The concept couldn't be mistaken for any other water brand's, and you can show why."
    ]
   ],
   "time": "2h",
   "ai": [
    "Give me five campaign concepts for getting students to switch to refills.",
    "Would this concept work on a poster and a WhatsApp forward?",
    "Write the key message in one sentence."
   ],
   "reads": [
    [
     "Campaign concepts",
     "One idea that ties every piece together."
    ],
    [
     "Writing a key message",
     "The one thing everyone should remember."
    ],
    [
     "Briefing creative work",
     "A brief that gets the right poster and reel made."
    ]
   ],
   "community": [
    [
     "play",
     "Choosing one idea for a campus campaign"
    ],
    [
     "reader",
     "Concepts that worked on a small budget"
    ],
    [
     "reader",
     "Creative brief template"
    ],
    [
     "play",
     "When a concept doesn't travel"
    ]
   ]
  },
  "4": {
   "name": "Channel Plan",
   "short": "the channel plan",
   "desc": "Decide which channels to use, what each one does, and how they work together across the month.",
   "leaves": "a channel plan",
   "bar": true,
   "rubric": [
    [
     "Pick the channels",
     "The channels the campaign will use are listed."
    ],
    [
     "Give each a job",
     "Each channel has a clear role, such as awareness or sign-ups."
    ],
    [
     "Join them up",
     "Channels hand people to each other, so someone who sees a poster ends up buying a pass."
    ],
    [
     "Justify the mix",
     "You can say why this mix beats the alternatives on this budget."
    ]
   ],
   "time": "2h",
   "ai": [
    "What role should WhatsApp groups play compared with notice boards?",
    "How can a fest stall hand people to an online sign-up?",
    "Which channel should get the most effort, and why?"
   ],
   "reads": [
    [
     "Integrated channel planning",
     "Making channels work together rather than in parallel."
    ],
    [
     "Campus channels that work",
     "Notice boards, groups, stalls and ambassadors, and what each is good for."
    ],
    [
     "The marketing funnel",
     "Moving people from noticing to signing up."
    ]
   ],
   "community": [
    [
     "reader",
     "A channel plan from a campus launch"
    ],
    [
     "play",
     "Mapping channels to the funnel"
    ],
    [
     "reader",
     "Ambassador programmes that worked"
    ],
    [
     "play",
     "The channel we wasted money on"
    ]
   ],
   "floor": "gives every channel a clear job and shows how they hand people to each other",
   "floor_level": 2
  },
  "5": {
   "name": "Budget & Timeline Planning",
   "short": "the budget and timeline",
   "desc": "Split the ₹15,000 across the channels and lay out the four weeks day by day.",
   "leaves": "a campaign budget and timeline",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Split ₹15,000 across these channels with a reason for each.",
    "Lay out a four-week campaign timeline for the start of term.",
    "What should happen in week one versus week four?"
   ],
   "reads": [
    [
     "Campaign budgeting",
     "Spending a small budget where it moves the target."
    ],
    [
     "Building a campaign timeline",
     "Sequencing a month so it builds rather than fizzles."
    ],
    [
     "Planning around the academic calendar",
     "Timing the push for when students decide."
    ]
   ],
   "community": [
    [
     "reader",
     "Budget sheet from a ₹20k campaign"
    ],
    [
     "play",
     "Building a timeline in Sheets"
    ],
    [
     "reader",
     "Timing campaigns to term start"
    ],
    [
     "play",
     "When we ran out of budget in week two"
    ]
   ]
  },
  "6": {
   "name": "Tracking Setup",
   "short": "the tracking setup",
   "desc": "Set up how you'll measure the campaign: links, codes, a tracking sheet and a weekly check-in.",
   "leaves": "a campaign tracking sheet",
   "bar": false,
   "rubric": [
    [
     "Set up tracking",
     "Each channel has a way to measure results."
    ],
    [
     "Make it attributable",
     "You can tell which channel a sign-up came from."
    ],
    [
     "Plan the check-ins",
     "There's a weekly routine for reading results and adjusting."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "How can I tell which channel a pass sign-up came from?",
    "Design a simple weekly campaign tracking sheet.",
    "What should I check every week during the campaign?"
   ],
   "reads": [
    [
     "Campaign tracking basics",
     "Links, codes and sheets to measure each channel."
    ],
    [
     "UTM links and referral codes",
     "Knowing where sign-ups came from."
    ],
    [
     "Weekly campaign reviews",
     "Spotting what's working while there's time to adjust."
    ]
   ],
   "community": [
    [
     "reader",
     "Tracking sheet template"
    ],
    [
     "play",
     "Setting up UTM links in 10 minutes"
    ],
    [
     "reader",
     "Referral codes for offline channels"
    ],
    [
     "play",
     "A weekly review that saved a campaign"
    ]
   ]
  },
  "7": {
   "name": "In-Flight Optimisation",
   "short": "the in-flight changes",
   "desc": "Read the results each week and decide what to change: more of what works, less of what doesn't.",
   "leaves": "an optimisation log",
   "bar": false,
   "rubric": [
    [
     "Read the results",
     "Weekly results are recorded."
    ],
    [
     "Make changes",
     "You change something based on the results and log why."
    ],
    [
     "Check the effect",
     "You look at whether each change helped and say so honestly."
    ],
    [
     "Make the hard call",
     "You stop something that isn't working, even if it was a favourite, and show the evidence."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Results this week: X. What should I change?",
    "Is this channel underperforming or just early?",
    "How do I tell if a change actually helped?"
   ],
   "reads": [
    [
     "Optimising campaigns in flight",
     "Adjusting while there's still time."
    ],
    [
     "Reading early results carefully",
     "Not overreacting to one bad day."
    ],
    [
     "Testing one change at a time",
     "So you know what actually made the difference."
    ]
   ],
   "community": [
    [
     "play",
     "Mid-campaign review, recorded"
    ],
    [
     "reader",
     "Optimisation log from a past campaign"
    ],
    [
     "reader",
     "When to stop a channel"
    ],
    [
     "play",
     "The change that doubled sign-ups"
    ]
   ]
  },
  "8": {
   "name": "Post-Campaign Report",
   "short": "the report",
   "desc": "Write the report: what the campaign set out to do, what happened, what worked and what to do next time.",
   "leaves": "a post-campaign performance report",
   "bar": true,
   "rubric": [
    [
     "Report the results",
     "Results are reported against the targets."
    ],
    [
     "Explain what worked",
     "You say which channels and messages drove results, with evidence."
    ],
    [
     "Be honest about misses",
     "Targets that were missed are explained, not hidden."
    ],
    [
     "Recommend what's next",
     "The report ends with clear recommendations for the next campaign."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a post-campaign report for a small startup.",
    "Write the summary paragraph for these results.",
    "How do I explain a missed target without excuses?"
   ],
   "reads": [
    [
     "Writing a campaign report",
     "Results against targets, and what they mean."
    ],
    [
     "Visualising campaign results",
     "Simple charts that make results obvious."
    ],
    [
     "Turning results into recommendations",
     "What the next campaign should do differently."
    ]
   ],
   "community": [
    [
     "reader",
     "A campaign report the founders loved"
    ],
    [
     "play",
     "Writing the report in an afternoon"
    ],
    [
     "reader",
     "Report template (community copy)"
    ],
    [
     "play",
     "Presenting a campaign that missed its target"
    ]
   ],
   "floor": "reports results against the targets, including the ones that were missed",
   "floor_level": 2
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Decide what success looks like",
   "desc": "Set the goal and the targets before anything else, so every later decision can be checked against them.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Know who you're talking to",
   "desc": "Split the campus into audiences and pick who to reach first.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Find the idea",
   "desc": "Decide the one concept and message that every piece of the campaign will carry.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 4,
   "title": "Plan the month",
   "desc": "Choose the channels, give each a job, split the budget and lay out the four weeks.",
   "vcs": [
    "4",
    "5"
   ]
  },
  {
   "n": 5,
   "title": "Brief the team",
   "desc": "Brief the six student ambassadors and whoever is making the posters and reels, so everyone works from the same plan."
  },
  {
   "n": 6,
   "title": "Run it and watch it",
   "desc": "Set up tracking, launch, read the results every week and adjust.",
   "vcs": [
    "6",
    "7"
   ],
   "loop": true,
   "loopnote": "Repeats weekly for the four weeks of the campaign."
  },
  {
   "n": 7,
   "title": "Report back",
   "desc": "Write up what happened against the targets and what to do next time.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Setting campaign objectives",
   "Targets you can measure at the end."
  ],
  [
   "Integrated channel planning",
   "Making channels work together."
  ],
  [
   "Campaign budgeting",
   "Spending a small budget where it counts."
  ],
  [
   "Campaign tracking",
   "Knowing what each channel did."
  ],
  [
   "Optimising in flight",
   "Adjusting while there's still time."
  ],
  [
   "Writing a campaign report",
   "Results against targets, and what's next."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the campaign plan. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the objectives or the audience segments: they need only the brief and shape everything else.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The channel plan is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: plan the campaign, run it and report on what it achieved.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the campaign plan at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "1",
    "4",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the campaign plan counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Running it isn't the challenge any more. Treat the report as something Refillo's founders will take to investors, and hold yourself to a delivery date.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "4",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number the campaign should move, such as passes sold, and build the case study to prove you moved it.",
   "pick": "Take the channel plan to L5: a way of joining campus channels that hasn't been tried here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-MK10-MENTORLY-ADCOPY-001",
 "ui": {
  "id": 109,
  "roles": [
   "Copywriter",
   "Content Creator"
  ],
  "stage": "Seed-stage startup",
  "category": "Marketing & Communications",
  "time": "12-16 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Copywriting & Ad Creative Development",
  "deliverable": "Ad Copy & Creative Pack",
  "title": "Write the ads that get a nervous first-year to book a peer tutor",
  "role": "Copywriter",
  "industry": "EduTech & Talent",
  "venture": "Mentorly"
 },
 "takeaways": {
  "asset": "A tested pack of ad copy for Mentorly across the funnel, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Writing, lots of it: many versions, sharpened down to the words that make someone act."
 },
 "pre": {
  "lede": "You'll write Mentorly's ad copy for the run-up to mid-semester exams: headlines, body copy and calls to action for Instagram ads, a landing page and an email, in several versions, tested on real students before anything goes live.",
  "produces": "an ad copy and creative pack: copy variants for each format and funnel stage, with headline, body and call to action, and the test results behind the final picks.",
  "skills_technical": [
   "Ad copywriting",
   "Headline writing",
   "Landing page copy",
   "Email copy",
   "Message testing",
   "Brand voice"
  ],
  "skills_transferable": [
   "Written Communication",
   "Creativity",
   "Empathy",
   "Critical Thinking"
  ],
  "capabilities": [
   [
    "Content Creation & Strategy",
    "writing copy that moves someone from noticing to acting"
   ],
   [
    "Narrative & Messaging Design",
    "finding the message that matters to a specific person"
   ],
   [
    "Marketing Analytics",
    "testing copy so the best version wins on evidence"
   ]
  ],
  "resume_line": "Wrote and tested Mentorly's mid-semester ad copy: 24 variants across Instagram, landing page and email, tested with 30 students, with the winning headline lifting click intent by 40%.",
  "asset_line": "A tested pack of Mentorly ad copy for every funnel stage and format, with the testing behind it, held together as one case study."
 },
 "background": {
  "venture": "Mentorly connects first-year students with second- and third-year peer tutors for one-to-one help before exams. Sessions are cheap, booked in the app, and happen on campus or over video.",
  "project": "Mentorly is running ads in the three weeks before mid-semester exams, on Instagram, a landing page and an email to students who signed up but never booked. Its current copy reads like a coaching centre. It needs copy that sounds like a helpful senior.",
  "why": "First-years who need help most are the least likely to ask: it feels like admitting you're behind. Mentorly's old ads talked about 'expert tutors' and 'guaranteed grades', which made it sound like a coaching centre. The right words can make booking a tutor feel like asking a friend, and the wrong ones cost every rupee spent on ads."
 },
 "chirag_intro": "The route from a blank page to copy that's been tested on real students. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Audience Insight Gathering",
   "short": "the audience insight",
   "desc": "Talk to five first-years about how they feel asking for help, and collect the exact words they use.",
   "leaves": "an audience insight sheet",
   "bar": true,
   "rubric": [
    [
     "Collect what they say",
     "You note what first-years say about asking for help."
    ],
    [
     "Capture their words",
     "You record the exact phrases people use, not your summary of them."
    ],
    [
     "Find the real barrier",
     "You identify what actually stops people booking, backed by what they said."
    ],
    [
     "Find the line nobody's used",
     "You spot an insight that changes how the copy should talk, and show the evidence."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write five questions to ask first-years about getting academic help.",
    "Group these quotes into the reasons people don't ask for help.",
    "Which of these phrases would work in a headline?"
   ],
   "reads": [
    [
     "Voice-of-customer research",
     "The best copy borrows the audience's own words."
    ],
    [
     "Running quick audience interviews",
     "Five short conversations that change your copy."
    ],
    [
     "Finding the real objection",
     "What actually stops someone acting."
    ]
   ],
   "community": [
    [
     "play",
     "Five interviews that rewrote our ads"
    ],
    [
     "reader",
     "Quote bank from a student audience"
    ],
    [
     "reader",
     "Questions that reveal objections"
    ],
    [
     "play",
     "Mining reviews for copy ideas"
    ]
   ],
   "floor": "captures the exact words students use, not a summary of them",
   "floor_level": 2
  },
  "2": {
   "name": "Message Hierarchy",
   "short": "the message hierarchy",
   "desc": "Decide the one main message and the two or three supporting points every ad draws from.",
   "leaves": "a message hierarchy",
   "bar": false,
   "rubric": [
    [
     "Pick the main message",
     "There's one main message."
    ],
    [
     "Order the support",
     "Supporting points are ranked by how much they matter to the audience."
    ],
    [
     "Tie it to the insight",
     "The hierarchy answers the barrier you found, with evidence."
    ]
   ],
   "time": "1h",
   "ai": [
    "What's the single most important thing a first-year should hear about Mentorly?",
    "Rank these supporting points by what matters to a nervous first-year.",
    "Does this message answer the real objection?"
   ],
   "reads": [
    [
     "Building a message hierarchy",
     "One main message, a few supporting points."
    ],
    [
     "Benefits over features",
     "What it does for the student, not what it is."
    ],
    [
     "Answering objections in copy",
     "Saying the thing that removes the worry."
    ]
   ],
   "community": [
    [
     "reader",
     "Message hierarchy from an edtech launch"
    ],
    [
     "play",
     "Ranking messages with a quick survey"
    ],
    [
     "reader",
     "Benefit versus feature rewrites"
    ],
    [
     "play",
     "When the message was about us, not them"
    ]
   ]
  },
  "3": {
   "name": "Headline Variant Writing",
   "short": "the headlines",
   "desc": "Write at least fifteen headline options across different angles, then shortlist the strongest five.",
   "leaves": "a headline shortlist",
   "bar": true,
   "rubric": [
    [
     "Write lots",
     "At least fifteen headlines exist."
    ],
    [
     "Vary the angle",
     "Headlines try genuinely different approaches, not small rewordings."
    ],
    [
     "Shortlist with reasons",
     "You pick five and say why each earns its place."
    ],
    [
     "Write the one that stops people",
     "One headline is fresh enough that it couldn't have come from a template, and still clear."
    ]
   ],
   "time": "2h",
   "ai": [
    "Give me fifteen headline angles for a peer tutoring ad.",
    "Which of these headlines are just rewordings of each other?",
    "Make this headline shorter without losing the meaning."
   ],
   "reads": [
    [
     "Headline writing",
     "The words that decide whether anyone reads on."
    ],
    [
     "Writing many versions",
     "Why the fifteenth headline is often better than the first."
    ],
    [
     "Headline angles",
     "Curiosity, benefit, social proof and more."
    ]
   ],
   "community": [
    [
     "play",
     "Writing 20 headlines in 20 minutes"
    ],
    [
     "reader",
     "Headlines that worked for student audiences"
    ],
    [
     "reader",
     "Headline angle cheat sheet"
    ],
    [
     "play",
     "Killing your favourite headline"
    ]
   ],
   "floor": "explores genuinely different angles, not small rewordings of one idea",
   "floor_level": 2
  },
  "4": {
   "name": "Funnel-Stage Copy Writing",
   "short": "the funnel copy",
   "desc": "Write the body copy and calls to action for each stage: the Instagram ad, the landing page and the follow-up email.",
   "leaves": "a set of funnel-stage copy",
   "bar": false,
   "rubric": [
    [
     "Write each piece",
     "Each format has headline, body and call to action."
    ],
    [
     "Fit each stage",
     "Copy for people discovering Mentorly differs from copy for people who signed up but never booked."
    ],
    [
     "Keep it consistent",
     "Every piece sounds like the same helpful senior."
    ],
    [
     "Make every word work",
     "Each piece is as short as it can be, and you can defend every line."
    ]
   ],
   "time": "3h",
   "ai": [
    "Write landing page copy for students who clicked a peer tutoring ad.",
    "How should an email to sign-ups who never booked differ from an ad?",
    "Cut this body copy to half its length."
   ],
   "reads": [
    [
     "Writing for each funnel stage",
     "What someone needs to hear depends on how far along they are."
    ],
    [
     "Landing page copy",
     "Keeping the promise the ad made."
    ],
    [
     "Re-engagement emails",
     "Getting someone back who signed up and stopped."
    ]
   ],
   "community": [
    [
     "reader",
     "Funnel copy from a student app"
    ],
    [
     "play",
     "Writing a landing page live"
    ],
    [
     "reader",
     "Emails that brought sign-ups back"
    ],
    [
     "play",
     "Cutting copy in half"
    ]
   ]
  },
  "5": {
   "name": "Brand Voice Calibration",
   "short": "the voice check",
   "desc": "Check every piece against Mentorly's voice, a helpful senior rather than a coaching centre, and fix what drifts.",
   "leaves": "a voice guide with before-and-after edits",
   "bar": false,
   "rubric": [
    [
     "Describe the voice",
     "Mentorly's voice is written down in a few lines."
    ],
    [
     "Check the copy",
     "Every piece is checked against the voice."
    ],
    [
     "Show the fixes",
     "Before and after edits show where copy drifted and how you fixed it."
    ]
   ],
   "time": "1h",
   "ai": [
    "Rewrite this line so it sounds like a helpful senior, not a coaching centre.",
    "Which words in this copy sound corporate?",
    "Describe Mentorly's voice in three lines."
   ],
   "reads": [
    [
     "Defining a brand voice",
     "A few clear rules beat a long guide."
    ],
    [
     "Editing for tone",
     "Small word changes that shift how copy feels."
    ],
    [
     "Avoiding coaching-centre clichés",
     "The phrases students have learned to ignore."
    ]
   ],
   "community": [
    [
     "reader",
     "Voice guides that fit on a page"
    ],
    [
     "play",
     "Editing for tone, live"
    ],
    [
     "reader",
     "Clichés to cut from edtech copy"
    ],
    [
     "play",
     "Before and after: one ad, three tones"
    ]
   ]
  },
  "6": {
   "name": "Copy Testing",
   "short": "the copy test",
   "desc": "Test the shortlisted headlines and copy with 20 to 30 students and record which versions they'd act on.",
   "leaves": "a copy test results sheet",
   "bar": true,
   "rubric": [
    [
     "Run the test",
     "Students react to the shortlisted versions and you record it."
    ],
    [
     "Measure intent",
     "You measure what people would do, not just what they like."
    ],
    [
     "Read the results honestly",
     "You say what the results show, including where they're unclear."
    ],
    [
     "Design a fair test",
     "The test controls for order and wording so the winner really won."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Design a quick test to compare five headlines with students.",
    "How do I measure 'would click' rather than 'like'?",
    "Are these test results strong enough to pick a winner?"
   ],
   "reads": [
    [
     "Testing copy before launch",
     "Cheap tests that save ad money."
    ],
    [
     "Measuring intent over preference",
     "What people would do beats what they like."
    ],
    [
     "Reading small test results",
     "What 30 responses can and can't tell you."
    ]
   ],
   "community": [
    [
     "play",
     "Running a headline test in a canteen"
    ],
    [
     "reader",
     "Copy test sheet template"
    ],
    [
     "reader",
     "When the test result surprised us"
    ],
    [
     "play",
     "A/B testing on a tiny budget"
    ]
   ],
   "floor": "measures what students would act on, not just which version they like",
   "floor_level": 2
  },
  "7": {
   "name": "Creative Pack Assembly",
   "short": "the creative pack",
   "desc": "Put the winning copy into a pack the design team can build ads from: every format, sized and labelled.",
   "leaves": "an ad copy and creative pack",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Organise this copy into a pack a designer can work from.",
    "What character limits apply to Instagram ad copy?",
    "Label each piece by format and funnel stage."
   ],
   "reads": [
    [
     "Organising a copy deck",
     "A pack designers and marketers can use without asking you."
    ],
    [
     "Platform character limits",
     "Copy that fits where it'll run."
    ],
    [
     "Briefing designers",
     "What a designer needs alongside the words."
    ]
   ],
   "community": [
    [
     "reader",
     "Copy deck template (community copy)"
    ],
    [
     "play",
     "Handing copy to a designer"
    ],
    [
     "reader",
     "Character limits cheat sheet"
    ],
    [
     "play",
     "Copy deck review"
    ]
   ]
  },
  "8": {
   "name": "Copy Rationale Write-up",
   "short": "the rationale",
   "desc": "Write a short rationale for the final copy: the insight, the choices, and what the test showed.",
   "leaves": "a copy rationale note",
   "bar": false,
   "rubric": [
    [
     "Explain the choices",
     "The main copy decisions are explained."
    ],
    [
     "Link to evidence",
     "Each choice points to the insight or the test."
    ],
    [
     "Make it a case study",
     "The note reads as a story someone could follow from problem to result."
    ]
   ],
   "time": "1h",
   "ai": [
    "Outline a one-page rationale for this ad copy.",
    "Explain why this headline won, in two sentences.",
    "What should a hiring manager learn from this rationale?"
   ],
   "reads": [
    [
     "Presenting copywriting work",
     "Showing your thinking, not just the words."
    ],
    [
     "Writing a copy rationale",
     "Short reasons tied to evidence."
    ],
    [
     "Building a copy portfolio",
     "What makes a copywriter's case study stand out."
    ]
   ],
   "community": [
    [
     "reader",
     "Copy rationales that got people hired"
    ],
    [
     "play",
     "Presenting copy to a client"
    ],
    [
     "reader",
     "Rationale template"
    ],
    [
     "play",
     "Portfolio review: copywriters"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Listen before you write",
   "desc": "Talk to first-years about asking for help, and collect the words they use.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Decide what to say",
   "desc": "Settle the main message and the points that support it.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Gather the specs",
   "desc": "Collect the formats, sizes and character limits for each place the copy will run."
  },
  {
   "n": 4,
   "title": "Write, and keep writing",
   "desc": "Write many headlines, then the body copy and calls to action for every stage and format.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Make it sound like Mentorly",
   "desc": "Check every piece against the voice and fix what drifts.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Test it on students",
   "desc": "Test the shortlisted versions with real students and keep the ones they'd act on.",
   "vcs": [
    "6"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect one round of rewrites."
  },
  {
   "n": 7,
   "title": "Package it",
   "desc": "Assemble the winning copy into a pack the design team can build from, with a short rationale.",
   "vcs": [
    "7",
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Voice-of-customer research",
   "Borrowing your audience's own words."
  ],
  [
   "Headline writing",
   "The words that decide whether anyone reads on."
  ],
  [
   "Writing for each funnel stage",
   "Different words for different moments."
  ],
  [
   "Defining a brand voice",
   "A few clear rules that keep copy consistent."
  ],
  [
   "Testing copy before launch",
   "Cheap tests that save ad money."
  ],
  [
   "Platform character limits",
   "Copy that fits where it'll run."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the copy pack. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the audience insight or the headlines: they need nothing but a notebook.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The headlines are where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: write, test and package the full copy pack.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the copy pack at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "1",
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the copy pack counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set a delivery date and treat the pack as something going live on Monday with real money behind it.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number the copy should move, such as bookings from sign-ups, and build the case study to show your copy moves it.",
   "pick": "Take the headlines to L5: the line that couldn't have come from a template.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-MK18-OPENFLOOR-COMMUNITY-001",
 "ui": {
  "id": 110,
  "roles": [
   "Community Manager",
   "Social Media Manager"
  ],
  "stage": "Community-led venture",
  "category": "Marketing & Communications",
  "time": "16-22 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Community Building & Engagement Strategy",
  "deliverable": "Community Strategy Document",
  "title": "Turn a quiet Discord into the place indie musicians actually hang out",
  "role": "Community Manager",
  "industry": "Entertainment & MediaTech",
  "venture": "Open Floor"
 },
 "takeaways": {
  "asset": "A community strategy for Open Floor's Discord, with the rituals and rules to run it, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "People work: understanding why people show up, and designing the habits that keep them coming back."
 },
 "pre": {
  "lede": "You'll write the community strategy for Open Floor's Discord server: why it exists, who it's for, the weekly rituals that give people a reason to show up, the moderation rules, and how it grows, then pilot one ritual with real members.",
  "produces": "a community strategy document: purpose, members, platform setup, engagement rituals, moderation guidelines and growth mechanisms.",
  "skills_technical": [
   "Community strategy",
   "Member research",
   "Engagement design",
   "Moderation policy",
   "Discord setup",
   "Community analytics"
  ],
  "skills_transferable": [
   "Empathy",
   "Communication",
   "Strategic Thinking",
   "Collaboration"
  ],
  "capabilities": [
   [
    "Community Building",
    "designing a space people want to come back to"
   ],
   [
    "Content Creation & Strategy",
    "creating regular moments that give people a reason to show up"
   ],
   [
    "Marketing Analytics",
    "measuring whether a community is actually healthy"
   ]
  ],
  "resume_line": "Wrote the community strategy for Open Floor, an indie music collective: member research with 8 musicians, 3 weekly rituals, and a piloted listening session that tripled weekly active members.",
  "asset_line": "A full community strategy for Open Floor's Discord, with the rituals, rules and growth plan, held together as one case study."
 },
 "background": {
  "venture": "Open Floor is a collective of independent musicians across three cities that runs monthly open-mic nights and a Discord server. Members share demos, find collaborators and hear about gigs.",
  "project": "The Discord has 900 members but only about 40 post in a given week. Open Floor wants a proper strategy: what the server is for, what happens there each week, how it's moderated and how it grows, before the next round of open-mics brings in new people.",
  "why": "Open-mic nights bring in dozens of new members every month, and almost all of them go quiet within a fortnight. The server has channels but no reason to come back. A community without rituals is just a noticeboard. Open Floor's whole model depends on musicians finding each other between gigs."
 },
 "chirag_intro": "The route from a quiet server to a community with reasons to come back. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Community Health Audit",
   "short": "the health audit",
   "desc": "Look at how the server is used today: who posts, where, when, and where new members drop off.",
   "leaves": "a community health audit",
   "bar": false,
   "rubric": [
    [
     "Count the activity",
     "You record posts, active members and busy channels."
    ],
    [
     "Find the drop-off",
     "You show where and when new members go quiet."
    ],
    [
     "Explain the pattern",
     "You link the numbers to causes, like empty channels or no welcome."
    ],
    [
     "Pick what matters",
     "You choose the two or three problems worth fixing first and defend the choice."
    ]
   ],
   "time": "2h",
   "ai": [
    "What numbers show whether a Discord server is healthy?",
    "Where do new members usually go quiet, and why?",
    "Summarise these server stats into three problems."
   ],
   "reads": [
    [
     "Measuring community health",
     "Active members, returning members and conversations, not member count."
    ],
    [
     "Reading Discord insights",
     "What the built-in numbers do and don't show."
    ],
    [
     "Spotting new-member drop-off",
     "The first two weeks decide whether someone stays."
    ]
   ],
   "community": [
    [
     "reader",
     "Health audit of a 1,000-member server"
    ],
    [
     "play",
     "Reading Discord insights in 10 minutes"
    ],
    [
     "reader",
     "Metrics that actually matter for communities"
    ],
    [
     "play",
     "Finding where members drop off"
    ]
   ]
  },
  "2": {
   "name": "Member Research",
   "short": "the member research",
   "desc": "Talk to eight members, some active and some quiet, about why they joined and what would bring them back.",
   "leaves": "a member research summary",
   "bar": true,
   "rubric": [
    [
     "Hold the conversations",
     "You talk to eight members and record what they say."
    ],
    [
     "Include the quiet ones",
     "At least half are members who stopped posting, and you learn why."
    ],
    [
     "Find what they need",
     "You name what members actually want from the server, with quotes."
    ],
    [
     "Find the unspoken need",
     "You surface a reason to belong that members feel but haven't said, and back it up."
    ]
   ],
   "time": "3h",
   "ai": [
    "Write questions for a quiet Discord member about why they stopped posting.",
    "Group these answers into reasons people join and leave.",
    "What do these musicians want from a community that they can't get elsewhere?"
   ],
   "reads": [
    [
     "Interviewing community members",
     "Getting honest answers about why people show up, or don't."
    ],
    [
     "Talking to people who left",
     "The quiet members tell you the most."
    ],
    [
     "Member needs and motivations",
     "Why people join communities and what keeps them."
    ]
   ],
   "community": [
    [
     "play",
     "Interviewing quiet members"
    ],
    [
     "reader",
     "Member research questions that work"
    ],
    [
     "reader",
     "Why people leave online communities"
    ],
    [
     "play",
     "What eight musicians told us"
    ]
   ],
   "floor": "includes members who went quiet and learns why, not just the active ones",
   "floor_level": 2
  },
  "3": {
   "name": "Community Purpose Definition",
   "short": "the purpose",
   "desc": "Write down why the community exists, who it's for, and what members get from it that they can't get elsewhere.",
   "leaves": "a community purpose statement",
   "bar": false,
   "rubric": [
    [
     "State the purpose",
     "There's a written purpose for the community."
    ],
    [
     "Make it specific",
     "It names who it's for and what they get, not just 'connect musicians'."
    ],
    [
     "Tie it to research",
     "The purpose answers what members said they need."
    ]
   ],
   "time": "1h",
   "ai": [
    "Write a purpose statement for an indie musician community.",
    "Is this purpose specific enough to guide decisions?",
    "What should this community be, and what should it not be?"
   ],
   "reads": [
    [
     "Defining a community's purpose",
     "The reason everything else hangs on."
    ],
    [
     "Who it's for, and who it isn't",
     "A community for everyone is for no one."
    ],
    [
     "Purpose that guides decisions",
     "Using the purpose to say no to things."
    ]
   ],
   "community": [
    [
     "reader",
     "Purpose statements from strong communities"
    ],
    [
     "play",
     "Writing a purpose in 20 minutes"
    ],
    [
     "reader",
     "Saying no with a purpose statement"
    ],
    [
     "play",
     "Our purpose, before and after research"
    ]
   ]
  },
  "4": {
   "name": "Engagement Ritual Design",
   "short": "the rituals",
   "desc": "Design two or three weekly rituals that give members a reason to show up, like a demo feedback night.",
   "leaves": "a set of engagement rituals",
   "bar": true,
   "rubric": [
    [
     "Design the rituals",
     "Two or three regular rituals are described."
    ],
    [
     "Make them repeatable",
     "Each ritual has a time, a format and someone to run it."
    ],
    [
     "Tie them to the purpose",
     "Each ritual serves what members said they need."
    ],
    [
     "Make them self-sustaining",
     "The rituals can run without the founders, and you show how."
    ],
    [
     "Invent one that's new",
     "One ritual is fresh for music communities and works beyond Open Floor."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Suggest weekly rituals for a community of indie musicians.",
    "How can a demo feedback session run without the founders?",
    "Which ritual would bring quiet members back first?"
   ],
   "reads": [
    [
     "Designing community rituals",
     "Regular moments that give people a reason to return."
    ],
    [
     "Hosting online events on Discord",
     "Voice channels, stages and threads."
    ],
    [
     "Making rituals self-running",
     "Rituals that survive when the organiser is busy."
    ]
   ],
   "community": [
    [
     "play",
     "A demo feedback night, recorded"
    ],
    [
     "reader",
     "Weekly rituals from music communities"
    ],
    [
     "reader",
     "Ritual planning template"
    ],
    [
     "play",
     "The ritual that brought members back"
    ]
   ],
   "floor": "gives each ritual a time, a format and someone to run it",
   "floor_level": 2
  },
  "5": {
   "name": "Server Structure Redesign",
   "short": "the server structure",
   "desc": "Redesign the channels, roles and onboarding so a new member knows where to go in their first five minutes.",
   "leaves": "a server structure plan",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Suggest a channel structure for a musician community Discord.",
    "What should a new member see in their first five minutes?",
    "Which channels here should be merged or removed?"
   ],
   "reads": [
    [
     "Structuring a Discord server",
     "Channels and roles that make sense to a newcomer."
    ],
    [
     "Onboarding new members",
     "The welcome that decides whether someone stays."
    ],
    [
     "Using Discord roles",
     "Helping members find people like them."
    ]
   ],
   "community": [
    [
     "reader",
     "Server structures we'd copy"
    ],
    [
     "play",
     "Onboarding flow walkthrough"
    ],
    [
     "reader",
     "Channel cleanup checklist"
    ],
    [
     "play",
     "Roles that helped musicians find collaborators"
    ]
   ]
  },
  "6": {
   "name": "Moderation Guidelines",
   "short": "the moderation guidelines",
   "desc": "Write the community rules and how moderators handle problems, from spam to arguments about someone's music.",
   "leaves": "a moderation guide",
   "bar": false,
   "rubric": [
    [
     "Write the rules",
     "Clear community rules exist."
    ],
    [
     "Plan the responses",
     "Moderators know what to do for common problems."
    ],
    [
     "Keep it fair",
     "Rules and responses are consistent and explained to members."
    ],
    [
     "Handle the hard cases",
     "The guide covers grey areas, like harsh feedback on a demo, with reasoning."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write five community rules for a musician Discord.",
    "How should a moderator handle harsh feedback on someone's demo?",
    "What's a fair escalation path for repeated rule-breaking?"
   ],
   "reads": [
    [
     "Writing community guidelines",
     "Rules members understand and accept."
    ],
    [
     "Moderation in practice",
     "Handling problems quickly and fairly."
    ],
    [
     "Feedback culture",
     "Keeping critique useful without it turning cruel."
    ]
   ],
   "community": [
    [
     "reader",
     "Community guidelines we admire"
    ],
    [
     "play",
     "Handling a heated thread"
    ],
    [
     "reader",
     "Moderator playbook template"
    ],
    [
     "play",
     "Building a kind feedback culture"
    ]
   ]
  },
  "7": {
   "name": "Ritual Pilot",
   "short": "the pilot",
   "desc": "Run one ritual for real for two weeks, track who shows up, and adjust it.",
   "leaves": "a ritual pilot report",
   "bar": true,
   "rubric": [
    [
     "Run it",
     "The ritual runs at least twice with real members."
    ],
    [
     "Track it",
     "You record who came, who returned and what happened."
    ],
    [
     "Learn from it",
     "You change the ritual based on what you saw and say why."
    ],
    [
     "Prove it works",
     "You show whether the ritual moved activity, honestly, including if it didn't."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How do I promote a new ritual to a quiet server?",
    "What should I track during a community pilot?",
    "The first session had 6 people. What should I change?"
   ],
   "reads": [
    [
     "Piloting community programmes",
     "Testing a ritual small before committing to it."
    ],
    [
     "Measuring a pilot",
     "Turnout, returning members and conversation."
    ],
    [
     "Promoting events in a community",
     "Getting people to show up the first time."
    ]
   ],
   "community": [
    [
     "play",
     "Running a two-week ritual pilot"
    ],
    [
     "reader",
     "Pilot results from a music server"
    ],
    [
     "reader",
     "Pilot tracking sheet"
    ],
    [
     "play",
     "When the first session flopped"
    ]
   ],
   "floor": "runs the ritual with real members at least twice and tracks who came back",
   "floor_level": 2
  },
  "8": {
   "name": "Community Strategy Document",
   "short": "the strategy document",
   "desc": "Bring everything together into one strategy: purpose, members, rituals, structure, moderation and growth.",
   "leaves": "a community strategy document",
   "bar": false,
   "rubric": [
    [
     "Assemble it",
     "Every part of the strategy is in one document."
    ],
    [
     "Make it actionable",
     "Each part says what to do, who does it and when."
    ],
    [
     "Plan the growth",
     "There's a clear plan for how new members arrive and stay."
    ],
    [
     "Make it stand alone",
     "Open Floor's team could run the community from the document without you."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a community strategy document.",
    "How should open-mic nights feed new members into the Discord?",
    "What should the team measure each month?"
   ],
   "reads": [
    [
     "Writing a community strategy",
     "Purpose, rituals, rules and growth in one place."
    ],
    [
     "Growth mechanisms for communities",
     "How new members arrive and why they stay."
    ],
    [
     "Community metrics to review monthly",
     "The few numbers that show health."
    ]
   ],
   "community": [
    [
     "reader",
     "A community strategy that got used"
    ],
    [
     "play",
     "Writing the strategy in an afternoon"
    ],
    [
     "reader",
     "Strategy template (community copy)"
    ],
    [
     "play",
     "Presenting a strategy to founders"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "See how the server is really used",
   "desc": "Look at who posts, where and when, and find where new members go quiet.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Talk to members",
   "desc": "Talk to active and quiet members about why they joined and what would bring them back.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Decide what it's for",
   "desc": "Write down why the community exists and who it's for, based on what members said.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 4,
   "title": "Design reasons to come back",
   "desc": "Design the weekly rituals, the server structure and the rules.",
   "vcs": [
    "4",
    "5",
    "6"
   ]
  },
  {
   "n": 5,
   "title": "Get the moderators on board",
   "desc": "Walk Open Floor's volunteer moderators through the plan so they can help run the pilot."
  },
  {
   "n": 6,
   "title": "Try one for real",
   "desc": "Pilot one ritual for two weeks, track it and adjust.",
   "vcs": [
    "7"
   ],
   "loop": true,
   "loopnote": "Runs weekly: expect to adjust after the first session."
  },
  {
   "n": 7,
   "title": "Write the strategy",
   "desc": "Bring it all together into one document the team can run the community from.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Measuring community health",
   "The numbers that show whether a community is alive."
  ],
  [
   "Interviewing community members",
   "Honest answers about why people stay or leave."
  ],
  [
   "Designing community rituals",
   "Regular moments that bring people back."
  ],
  [
   "Structuring a Discord server",
   "Channels, roles and onboarding."
  ],
  [
   "Writing community guidelines",
   "Rules members understand and accept."
  ],
  [
   "Growing a community",
   "How new members arrive and why they stay."
  ]
 ],
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the community strategy. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the health audit or the purpose: they need only access to the server.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The rituals are where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: research, design and pilot the full community strategy.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the community strategy at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "4",
    "7"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the community strategy counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set a date to hand the strategy over and treat it as something the moderators will run from next month.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "4",
    "7"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number the community should move, such as weekly active members, and build the case study to prove the pilot moved it.",
   "pick": "Take the rituals to L5: one that's new for music communities.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 },
 "gate": {
  "needs": 2,
  "have": 0
 }
},
{
 "ref": "WO-TE01-WARDWATCH-WEBAPP-001",
 "ui": {
  "id": 111,
  "roles": [
   "Frontend Engineer",
   "Software Engineer / Full-Stack Developer"
  ],
  "stage": "Civic-tech pilot",
  "category": "Technology & Engineering",
  "time": "20-28 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Custom Web Application Development",
  "deliverable": "Deployed Web Application",
  "title": "Build the web app residents use to report a broken streetlight in under a minute",
  "role": "Frontend Engineer",
  "industry": "Smart Cities & Built Environment",
  "venture": "WardWatch"
 },
 "takeaways": {
  "asset": "A deployed WardWatch web app where residents report and track civic issues, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Building in code: components, state, an API to talk to, and the polish that makes it feel fast on a cheap phone."
 },
 "pre": {
  "lede": "You'll build WardWatch's resident-facing web app: report an issue with a photo and a pin on the map, then track it until the ward office fixes it. It has to work on an entry-level Android phone on patchy 4G.",
  "produces": "a deployed web application: the working app, its source code, and the decisions behind how it's built.",
  "skills_technical": [
   "React",
   "TypeScript",
   "State management",
   "REST API integration",
   "Responsive CSS",
   "Web performance",
   "Deployment (Vercel / Netlify)"
  ],
  "skills_transferable": [
   "Problem Solving",
   "Attention to Detail",
   "Written Communication",
   "Critical Thinking"
  ],
  "capabilities": [
   [
    "Frontend Engineering",
    "turning designs into a fast, accessible interface that works on real devices"
   ],
   [
    "Software Architecture",
    "structuring components and state so the app stays easy to change"
   ],
   [
    "Quality Engineering",
    "testing what you build so it doesn't break the next time someone touches it"
   ]
  ],
  "resume_line": "Built and deployed WardWatch's civic issue-reporting web app in React and TypeScript: photo upload, map pinning and live status tracking, loading in under 2 seconds on a budget Android phone over 4G.",
  "asset_line": "A deployed web app with its source code, performance results and the decisions behind it, held together as one case study."
 },
 "background": {
  "venture": "WardWatch works with two municipal ward offices to fix the small things that never get fixed: potholes, broken streetlights, overflowing bins. Residents report, the ward office assigns, and everyone can see progress.",
  "project": "WardWatch has designs and a working backend API, but its current reporting tool is a Google Form. It needs a real web app before the pilot expands to five more wards next month.",
  "why": "A Google Form gives residents no way to see what happened to their report, so most stop reporting after the first time. The pilot only works if reporting is quick and people can watch their issue get fixed. On a cheap phone and a weak signal, every extra second and every confusing screen loses a resident."
 },
 "chirag_intro": "The route from designs and an API to a deployed app residents can use. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Component Architecture Planning",
   "short": "the component plan",
   "desc": "Break the designs into a tree of components and decide where each piece of state lives.",
   "leaves": "a component and state plan",
   "bar": false,
   "rubric": [
    [
     "Split the screens",
     "Each screen is broken into named components."
    ],
    [
     "Place the state",
     "You decide which component owns each piece of state and why."
    ],
    [
     "Plan for change",
     "The plan shows how a new issue type or field could be added without a rewrite."
    ],
    [
     "Defend the shape",
     "You compare your plan with one alternative and it holds up when questioned."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Break this report-an-issue screen into React components.",
    "Where should the list of reported issues live: global state or the page?",
    "What would change in this component tree if we added a comments feature?"
   ],
   "reads": [
    [
     "Thinking in React",
     "The standard way to break a design into components and place state."
    ],
    [
     "State management choices",
     "When local state, context or a store makes sense, so the plan doesn't over-engineer."
    ],
    [
     "Folder structure for frontend projects",
     "Keeps the codebase easy to find your way around as it grows."
    ]
   ],
   "community": [
    [
     "reader",
     "Component tree from a civic-tech app"
    ],
    [
     "play",
     "Planning components before writing code"
    ],
    [
     "reader",
     "State placement cheat sheet"
    ],
    [
     "play",
     "When our state lived in the wrong place"
    ]
   ]
  },
  "2": {
   "name": "UI Component Implementation",
   "short": "the components",
   "desc": "Build the reusable UI pieces: issue cards, the status badge, the photo picker, the form fields.",
   "leaves": "a set of tested UI components",
   "bar": true,
   "rubric": [
    [
     "Build the components",
     "Each component renders correctly from the designs."
    ],
    [
     "Handle their states",
     "Components show loading, empty, error and disabled states, not just the happy one."
    ],
    [
     "Make them accessible",
     "Components work with a keyboard and a screen reader, and pass an automated audit."
    ],
    [
     "Make them reusable",
     "Props are designed so the same component serves every screen that needs it."
    ]
   ],
   "time": "4-6h",
   "ai": [
    "Write a React status badge component with four states.",
    "How do I make this custom photo picker keyboard accessible?",
    "Which props does this issue card actually need?"
   ],
   "reads": [
    [
     "Building accessible components",
     "Keyboard and screen-reader support from the start, which the quality bar checks."
    ],
    [
     "Component props design",
     "Props that keep components reusable without becoming confusing."
    ],
    [
     "Styling approaches for React",
     "CSS modules, utility classes or styled components, and the trade-offs."
    ]
   ],
   "community": [
    [
     "play",
     "Building an accessible form field"
    ],
    [
     "reader",
     "Component checklist we use"
    ],
    [
     "reader",
     "Status badges done well"
    ],
    [
     "play",
     "Refactoring a component with too many props"
    ]
   ],
   "floor": "handles loading, empty and error states and works with a keyboard",
   "floor_level": 2
  },
  "3": {
   "name": "API Integration & Data Fetching",
   "short": "the API integration",
   "desc": "Connect the app to WardWatch's API: list issues, submit a report with a photo, poll for status changes.",
   "leaves": "an API integration layer",
   "bar": true,
   "rubric": [
    [
     "Fetch and show data",
     "The app loads and displays issues from the API."
    ],
    [
     "Handle failure",
     "Slow, failed and offline requests are handled with clear messages and retries."
    ],
    [
     "Keep it in sync",
     "Status changes show up without a full reload, and you can explain how."
    ],
    [
     "Design the data layer",
     "Fetching, caching and errors are handled in one place that the whole app uses."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How do I upload a photo with form data to a REST API?",
    "What should the app do when a report fails to send on a weak signal?",
    "Compare polling and websockets for status updates here."
   ],
   "reads": [
    [
     "Data fetching in React",
     "Loading, error and caching patterns, including libraries like React Query."
    ],
    [
     "Handling unreliable networks",
     "Retries and offline queues for residents on patchy 4G."
    ],
    [
     "Uploading images from the browser",
     "Compressing photos before upload so reports send on a weak signal."
    ]
   ],
   "community": [
    [
     "reader",
     "Data layer from a past work order"
    ],
    [
     "play",
     "React Query in 20 minutes"
    ],
    [
     "reader",
     "Offline-first reporting patterns"
    ],
    [
     "play",
     "Debugging a failed upload"
    ]
   ],
   "floor": "handles slow, failed and offline requests with clear messages, not just the case where the API answers",
   "floor_level": 2
  },
  "4": {
   "name": "Map & Location Feature",
   "short": "the map feature",
   "desc": "Let residents drop a pin on a map or use their location, and show nearby reported issues.",
   "leaves": "a working map feature",
   "bar": false,
   "rubric": [
    [
     "Show the map",
     "A map renders with the resident's area."
    ],
    [
     "Pin and locate",
     "Residents can drop a pin or use their location, with permission handled kindly."
    ],
    [
     "Keep it fast",
     "The map loads only when needed and doesn't slow the first screen."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "How do I add a map with Leaflet to a React app?",
    "What should happen if a resident denies location permission?",
    "How can I avoid loading the map library on the home screen?"
   ],
   "reads": [
    [
     "Maps in the browser with Leaflet",
     "An open-source map library that works without paid keys."
    ],
    [
     "Asking for location permission",
     "When and how to ask so people say yes."
    ],
    [
     "Code splitting",
     "Loading the heavy map only when it's needed."
    ]
   ],
   "community": [
    [
     "play",
     "Adding a map to a React app"
    ],
    [
     "reader",
     "Location permission patterns"
    ],
    [
     "reader",
     "Lazy loading heavy libraries"
    ],
    [
     "play",
     "Clustering many pins on a map"
    ]
   ]
  },
  "5": {
   "name": "Form Validation & Submission UX",
   "short": "the report form",
   "desc": "Build the report form so it's quick, forgiving and never loses what a resident typed.",
   "leaves": "a validated report form",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write validation rules for an issue report form.",
    "How do I keep form data if the page reloads mid-report?",
    "What should the success screen tell the resident?"
   ],
   "reads": [
    [
     "Form validation in React",
     "Inline, helpful validation without annoying people."
    ],
    [
     "Saving drafts locally",
     "Never losing what someone typed on a flaky connection."
    ],
    [
     "Writing helpful error messages",
     "Errors that tell people how to fix the problem."
    ]
   ],
   "community": [
    [
     "reader",
     "Forms that don't lose data"
    ],
    [
     "play",
     "React Hook Form walkthrough"
    ],
    [
     "reader",
     "Error message examples"
    ],
    [
     "play",
     "Testing a form on a slow phone"
    ]
   ]
  },
  "6": {
   "name": "Performance Optimisation",
   "short": "the performance pass",
   "desc": "Measure how fast the app loads on a budget phone and fix what slows it down.",
   "leaves": "a performance report with fixes",
   "bar": true,
   "rubric": [
    [
     "Measure it",
     "You record load time and Lighthouse scores on a throttled connection."
    ],
    [
     "Fix the biggest problems",
     "You make changes that measurably improve the numbers."
    ],
    [
     "Explain the gains",
     "Each fix is linked to the improvement it caused."
    ],
    [
     "Set a budget",
     "You set performance limits for the app and show it stays within them."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Interpret this Lighthouse report for a mobile web app.",
    "What's making this bundle so large?",
    "Suggest three fixes to load the first screen faster on 4G."
   ],
   "reads": [
    [
     "Web performance basics",
     "Core Web Vitals and what slows a page down."
    ],
    [
     "Testing on slow devices",
     "Throttling and real-device testing for budget phones."
    ],
    [
     "Reducing bundle size",
     "Finding and removing what makes the app heavy."
    ]
   ],
   "community": [
    [
     "play",
     "A Lighthouse audit, explained"
    ],
    [
     "reader",
     "Performance budget template"
    ],
    [
     "reader",
     "Bundle analysis walkthrough"
    ],
    [
     "play",
     "Halving load time in an afternoon"
    ]
   ],
   "floor": "measures load time on a throttled phone and shows the numbers improving",
   "floor_level": 2
  },
  "7": {
   "name": "Component & Flow Testing",
   "short": "the tests",
   "desc": "Write tests for the key components and the report-an-issue flow.",
   "leaves": "a test suite for the app",
   "bar": false,
   "rubric": [
    [
     "Write tests",
     "Key components have tests that run."
    ],
    [
     "Test behaviour",
     "Tests check what the user sees and does, not implementation details."
    ],
    [
     "Cover the flow",
     "The full report flow is tested, including a failed submission."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Write a React Testing Library test for this form.",
    "How do I mock the API in tests?",
    "Which parts of this app most need tests?"
   ],
   "reads": [
    [
     "Testing React apps",
     "Testing what users see with React Testing Library."
    ],
    [
     "Mocking APIs in tests",
     "Testing failure cases without a real server."
    ],
    [
     "What to test first",
     "Where tests protect you most for the time spent."
    ]
   ],
   "community": [
    [
     "reader",
     "Our testing checklist"
    ],
    [
     "play",
     "Testing a form end to end"
    ],
    [
     "reader",
     "Mock Service Worker setup"
    ],
    [
     "play",
     "A test that caught a real bug"
    ]
   ]
  },
  "8": {
   "name": "Deployment & Release",
   "short": "the deployment",
   "desc": "Deploy the app with a preview for every change and a short README the next developer can follow.",
   "leaves": "a deployed app with README",
   "bar": false,
   "rubric": [
    [
     "Deploy it",
     "The app is live at a public URL."
    ],
    [
     "Automate it",
     "Every change gets a preview deployment, and the main branch deploys itself."
    ],
    [
     "Document it",
     "The README lets another developer run and deploy the app without asking you."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "How do I deploy a Vite React app to Vercel?",
    "What should go in a frontend project README?",
    "How do I set environment variables for the API URL?"
   ],
   "reads": [
    [
     "Deploying frontend apps",
     "Hosting on Vercel or Netlify with preview deployments."
    ],
    [
     "Environment variables",
     "Keeping API URLs and keys out of the code."
    ],
    [
     "Writing a good README",
     "What the next developer needs to get started."
    ]
   ],
   "community": [
    [
     "play",
     "Deploying to Vercel in 10 minutes"
    ],
    [
     "reader",
     "README template (community copy)"
    ],
    [
     "reader",
     "Preview deployments explained"
    ],
    [
     "play",
     "Fixing a broken production build"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Understand the app before you code",
   "desc": "Go through the designs and the API documentation, and plan the components and where state lives.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set up the project",
   "desc": "Create the React and TypeScript project, add linting and formatting, and connect it to a Git repository."
  },
  {
   "n": 3,
   "title": "Build the pieces",
   "desc": "Build the reusable components with all their states.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Connect it to real data",
   "desc": "Wire the app to WardWatch's API, then add the map and the report form.",
   "vcs": [
    "3",
    "4",
    "5"
   ]
  },
  {
   "n": 5,
   "title": "Make it fast",
   "desc": "Measure the app on a throttled budget phone and fix what slows it down.",
   "vcs": [
    "6"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect a round of changes once you see the numbers."
  },
  {
   "n": 6,
   "title": "Make it safe to change",
   "desc": "Write tests for the key components and the report flow.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Ship it",
   "desc": "Deploy the app and write the README.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Thinking in React",
   "Breaking designs into components and placing state."
  ],
  [
   "Building accessible components",
   "Keyboard and screen-reader support from the start."
  ],
  [
   "Data fetching patterns",
   "Loading, errors, caching and retries."
  ],
  [
   "Web performance basics",
   "What makes a page slow and how to measure it."
  ],
  [
   "Testing React apps",
   "Testing what users see and do."
  ],
  [
   "Deploying frontend apps",
   "Hosting with preview deployments."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the deployed app. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the component plan or the report form: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "5"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The components is where an L2 is most within reach here.",
   "nudge": [
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the app, make it fast and ship it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the deployed app at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the deployed app counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the deployed app as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as reports completed in under a minute, and build the case study to show you moved it.",
   "pick": "Take the API integration to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE03-PAWPAL-MOBILE-001",
 "ui": {
  "id": 112,
  "roles": [
   "Frontend Engineer",
   "Software Engineer / Full-Stack Developer"
  ],
  "stage": "Pre-seed startup",
  "category": "Technology & Engineering",
  "time": "22-30 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Mobile Application Development",
  "deliverable": "Published Mobile Application",
  "title": "Build the app that reminds pet parents their dog is due for a jab",
  "role": "Frontend Engineer",
  "industry": "PetTech & Animal Care",
  "venture": "PawPal"
 },
 "takeaways": {
  "asset": "A working PawPal mobile app, built in React Native and published to a test track, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Building for phones: screens, navigation, local storage and notifications that actually arrive."
 },
 "pre": {
  "lede": "You'll build PawPal's mobile app in React Native: pet profiles, a vaccination and deworming schedule, reminders that arrive on time, and a vet visit log. It ends as a build testers can install from a test track.",
  "produces": "a published mobile application: the app on a test track, its source code, and the decisions behind it.",
  "skills_technical": [
   "React Native",
   "Expo",
   "Mobile navigation",
   "Local storage",
   "Push & local notifications",
   "App store test releases"
  ],
  "skills_transferable": [
   "Problem Solving",
   "Attention to Detail",
   "Empathy",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Mobile Engineering",
    "building apps that feel native and work offline"
   ],
   [
    "Frontend Engineering",
    "turning designs into components and screens"
   ],
   [
    "Quality Engineering",
    "testing on real devices before anyone else does"
   ]
  ],
  "resume_line": "Built PawPal's React Native app: pet profiles, a vaccination schedule and offline-first reminders, released to 40 beta testers on Android and iOS test tracks.",
  "asset_line": "A working mobile app on a test track, with its source code and the decisions behind it, held together as one case study."
 },
 "background": {
  "venture": "PawPal helps pet parents in Indian cities keep track of vaccinations, deworming and vet visits, and partners with neighbourhood vet clinics for reminders and bookings.",
  "project": "PawPal currently sends reminders by WhatsApp from a spreadsheet, which breaks as it grows. It needs a mobile app with pet profiles, a schedule worked out from the pet's age, and reminders that arrive on the phone, before a launch with 12 partner clinics.",
  "why": "Missed vaccinations are the most common reason pets end up seriously ill, and most pet parents simply forget. A spreadsheet of WhatsApp reminders can't scale past a few hundred pets. An app that knows each pet's schedule and reminds at the right time is the whole product."
 },
 "chirag_intro": "The route from designs to an app testers can install. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Navigation & Screen Structure",
   "short": "the navigation",
   "desc": "Plan and build the app's navigation: tabs, stacks and how each screen is reached.",
   "leaves": "a navigation map and working navigation",
   "bar": false,
   "rubric": [
    [
     "Build the navigation",
     "Every screen can be reached from the app's navigation."
    ],
    [
     "Match the platform",
     "Navigation feels natural on both Android and iOS, including the back button."
    ],
    [
     "Explain the structure",
     "You can say why each screen sits where it does."
    ]
   ],
   "time": "2h",
   "ai": [
    "Suggest a navigation structure for a pet care app.",
    "How should the Android back button behave in this stack?",
    "Tabs or a drawer for four main sections?"
   ],
   "reads": [
    [
     "React Navigation basics",
     "Tabs, stacks and passing data between screens."
    ],
    [
     "Platform conventions",
     "What Android and iOS users expect from navigation."
    ],
    [
     "Deep linking",
     "Opening the right screen from a notification."
    ]
   ],
   "community": [
    [
     "play",
     "Navigation setup in Expo"
    ],
    [
     "reader",
     "Navigation map from a past app"
    ],
    [
     "reader",
     "Back-button behaviour cheat sheet"
    ],
    [
     "play",
     "Deep links from notifications"
    ]
   ]
  },
  "2": {
   "name": "Screen & Component Build",
   "short": "the screens",
   "desc": "Build the pet profile, schedule and vet log screens from the designs.",
   "leaves": "a set of built screens",
   "bar": true,
   "rubric": [
    [
     "Build the screens",
     "Each screen matches the designs on a real phone."
    ],
    [
     "Handle every state",
     "Screens have empty, loading and error states."
    ],
    [
     "Fit every phone",
     "Screens work on small and large phones and with larger text settings."
    ],
    [
     "Make it feel native",
     "Gestures, keyboard handling and transitions feel right on both platforms."
    ]
   ],
   "time": "5-7h",
   "ai": [
    "Build a pet profile screen in React Native.",
    "How do I keep a form visible when the keyboard opens?",
    "What should the schedule screen show before any pet is added?"
   ],
   "reads": [
    [
     "Building screens in React Native",
     "Layout with flexbox and platform differences."
    ],
    [
     "Handling the keyboard",
     "Forms that stay usable when the keyboard opens."
    ],
    [
     "Supporting larger text",
     "Screens that still work when people turn up font size."
    ]
   ],
   "community": [
    [
     "play",
     "Building a screen from a design"
    ],
    [
     "reader",
     "Keyboard handling patterns"
    ],
    [
     "reader",
     "Screen state checklist"
    ],
    [
     "play",
     "Testing on a small phone"
    ]
   ],
   "floor": "works on small phones and with larger text, including the empty and error states",
   "floor_level": 2
  },
  "3": {
   "name": "Vaccination Schedule Logic",
   "short": "the schedule logic",
   "desc": "Work out each pet's upcoming vaccinations and deworming from its species, age and history.",
   "leaves": "a tested schedule engine",
   "bar": true,
   "rubric": [
    [
     "Calculate the schedule",
     "The app produces upcoming dates from a pet's age."
    ],
    [
     "Handle real history",
     "Past vaccinations, missed doses and late starts are handled correctly."
    ],
    [
     "Prove it with tests",
     "Tests cover puppies, adult rescues and missed doses."
    ],
    [
     "Make it configurable",
     "Vets can change schedule rules without a code change, and you show how."
    ]
   ],
   "time": "3h",
   "ai": [
    "Write a function that works out a puppy's vaccination dates.",
    "How should the schedule change if a dose was missed?",
    "Write test cases for this schedule logic."
   ],
   "reads": [
    [
     "Working with dates in JavaScript",
     "Date maths without off-by-one mistakes."
    ],
    [
     "Writing pure functions",
     "Logic that's easy to test away from the UI."
    ],
    [
     "Unit testing logic",
     "Test cases for edge cases like missed doses."
    ]
   ],
   "community": [
    [
     "reader",
     "Date handling pitfalls"
    ],
    [
     "play",
     "Test-driven schedule logic"
    ],
    [
     "reader",
     "Schedule rules from a vet"
    ],
    [
     "play",
     "The timezone bug that moved every reminder"
    ]
   ],
   "floor": "handles missed doses and late starts, backed by tests",
   "floor_level": 3
  },
  "4": {
   "name": "Offline Storage & Sync",
   "short": "the offline storage",
   "desc": "Store pets and schedules on the phone so the app works offline, and sync when it's back online.",
   "leaves": "an offline storage layer",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "3h",
   "ai": [
    "Which storage should I use in React Native for structured data?",
    "How do I sync local changes when the phone comes back online?",
    "What happens if the same pet is edited on two phones?"
   ],
   "reads": [
    [
     "Local storage in React Native",
     "AsyncStorage, SQLite and when to use each."
    ],
    [
     "Offline-first apps",
     "Working without a network and syncing later."
    ],
    [
     "Handling sync conflicts",
     "What to do when two changes disagree."
    ]
   ],
   "community": [
    [
     "reader",
     "Offline-first patterns"
    ],
    [
     "play",
     "SQLite in Expo"
    ],
    [
     "reader",
     "Sync conflict examples"
    ],
    [
     "play",
     "Testing in airplane mode"
    ]
   ]
  },
  "5": {
   "name": "Reminder Notifications",
   "short": "the reminders",
   "desc": "Schedule local notifications for upcoming doses and make sure they arrive, even after a phone restart.",
   "leaves": "a working reminder system",
   "bar": true,
   "rubric": [
    [
     "Send a reminder",
     "A notification arrives for an upcoming dose."
    ],
    [
     "Make them reliable",
     "Reminders survive app closes and phone restarts, and permission is asked kindly."
    ],
    [
     "Make them useful",
     "Tapping a reminder opens the right pet, and reminders can be snoozed."
    ],
    [
     "Prove they arrive",
     "You test delivery across Android battery savers and iOS, and record the results."
    ]
   ],
   "time": "3h",
   "ai": [
    "How do I schedule a local notification with Expo?",
    "Why might Android battery saver stop my reminders?",
    "How do I open the right screen when a notification is tapped?"
   ],
   "reads": [
    [
     "Notifications in Expo",
     "Local and push notifications and permissions."
    ],
    [
     "Android battery optimisation",
     "Why reminders go missing and how to handle it."
    ],
    [
     "Asking for notification permission",
     "When to ask so people say yes."
    ]
   ],
   "community": [
    [
     "play",
     "Scheduling local notifications"
    ],
    [
     "reader",
     "Notification reliability notes"
    ],
    [
     "reader",
     "Permission prompts that work"
    ],
    [
     "play",
     "Debugging a missing reminder"
    ]
   ],
   "floor": "arrive reliably after the app is closed or the phone restarts",
   "floor_level": 2
  },
  "6": {
   "name": "Device Testing",
   "short": "the device testing",
   "desc": "Test the app on at least three real phones, including a budget Android, and fix what breaks.",
   "leaves": "a device test log",
   "bar": false,
   "rubric": [
    [
     "Test on devices",
     "The app is tested on three real phones."
    ],
    [
     "Log what breaks",
     "Each problem is logged with the device and steps to reproduce."
    ],
    [
     "Fix and retest",
     "Problems are fixed and checked again on the same devices."
    ]
   ],
   "time": "2h",
   "ai": [
    "Make a device test checklist for a mobile app.",
    "How do I reproduce a crash that only happens on one phone?",
    "What should I check on a budget Android phone?"
   ],
   "reads": [
    [
     "Testing on real devices",
     "What simulators miss."
    ],
    [
     "Writing bug reports",
     "Steps to reproduce that a teammate can follow."
    ],
    [
     "Debugging React Native",
     "Finding crashes and slow screens."
    ]
   ],
   "community": [
    [
     "reader",
     "Device test checklist"
    ],
    [
     "play",
     "Debugging on a real phone"
    ],
    [
     "reader",
     "Bug report template"
    ],
    [
     "play",
     "The crash that only happened on one phone"
    ]
   ]
  },
  "7": {
   "name": "Test Track Release",
   "short": "the release",
   "desc": "Build the app and release it to Android and iOS test tracks so testers can install it.",
   "leaves": "a released test build",
   "bar": false,
   "rubric": [
    [
     "Make a build",
     "The app builds for Android or iOS."
    ],
    [
     "Release to testers",
     "Testers can install it from a test track."
    ],
    [
     "Document the release",
     "Release notes and steps to rebuild are written down."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I build an Android test release with EAS?",
    "What do I need for an iOS TestFlight build?",
    "Write release notes for this first beta."
   ],
   "reads": [
    [
     "Building with EAS",
     "Creating Android and iOS builds with Expo."
    ],
    [
     "Test tracks and TestFlight",
     "Getting builds to testers."
    ],
    [
     "Writing release notes",
     "Telling testers what to try and what's broken."
    ]
   ],
   "community": [
    [
     "play",
     "Your first EAS build"
    ],
    [
     "reader",
     "TestFlight setup steps"
    ],
    [
     "reader",
     "Release notes examples"
    ],
    [
     "play",
     "Fixing a failed build"
    ]
   ]
  },
  "8": {
   "name": "Beta Feedback Triage",
   "short": "the beta feedback",
   "desc": "Collect feedback from the first testers, sort it, and fix the most important problems.",
   "leaves": "a triaged feedback log",
   "bar": false,
   "rubric": [
    [
     "Collect feedback",
     "Tester feedback is gathered in one place."
    ],
    [
     "Sort it",
     "Feedback is grouped into bugs, requests and confusion, and ranked."
    ],
    [
     "Act on it",
     "The top problems are fixed and a new build is released."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write a short feedback form for beta testers.",
    "Group this beta feedback into bugs and requests.",
    "Which of these issues should be fixed before launch?"
   ],
   "reads": [
    [
     "Running a beta",
     "Getting useful feedback from testers."
    ],
    [
     "Triaging bugs",
     "Deciding what to fix first."
    ],
    [
     "Closing the loop with testers",
     "Telling people what you changed."
    ]
   ],
   "community": [
    [
     "reader",
     "Beta feedback form template"
    ],
    [
     "play",
     "Triaging feedback in 20 minutes"
    ],
    [
     "reader",
     "What testers actually report"
    ],
    [
     "play",
     "Shipping a fix build"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Map the app",
   "desc": "Plan the screens and navigation from the designs.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set up the project",
   "desc": "Create the Expo project, set up linting, and get it running on your own phone."
  },
  {
   "n": 3,
   "title": "Build the screens",
   "desc": "Build the pet profile, schedule and vet log screens.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Make it smart",
   "desc": "Write the schedule logic and store everything on the phone so it works offline.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Make it remind",
   "desc": "Schedule reminders that arrive reliably.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Test on real phones",
   "desc": "Test on three phones, fix what breaks, and release to testers.",
   "vcs": [
    "6",
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to steps 3 to 5: expect a round of fixes."
  },
  {
   "n": 7,
   "title": "Listen to testers",
   "desc": "Collect beta feedback, fix the top problems and release again.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "React Native and Expo basics",
   "Building cross-platform apps."
  ],
  [
   "Navigation in React Native",
   "Tabs, stacks and deep links."
  ],
  [
   "Offline-first apps",
   "Working without a network."
  ],
  [
   "Notifications in Expo",
   "Reminders that arrive."
  ],
  [
   "Testing on real devices",
   "What simulators miss."
  ],
  [
   "Releasing with EAS",
   "Getting builds to testers."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the app. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the navigation or the schedule logic: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The screens is where an L2 is most within reach here.",
   "nudge": [
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the app, test it on real phones and release it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the app at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the app counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the app as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as doses given on time, and build the case study to show you moved it.",
   "pick": "Take the reminders to L5: the version only you could have done.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE21-LEDGERLY-UIKIT-001",
 "ui": {
  "id": 113,
  "roles": [
   "Frontend Engineer",
   "Software Engineer / Full-Stack Developer"
  ],
  "stage": "Series A startup",
  "category": "Technology & Engineering",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Platform / Internal Developer Tooling Build",
  "deliverable": "Internal Developer Platform / Tool",
  "title": "Build the component library that stops three apps from looking like three companies",
  "role": "Frontend Engineer",
  "industry": "FinTech & DeFi",
  "venture": "Ledgerly"
 },
 "takeaways": {
  "asset": "A shared, documented React component library for Ledgerly's three frontends, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Building for other developers: clean APIs, good documentation and tooling that makes the right thing easy."
 },
 "pre": {
  "lede": "You'll build Ledgerly's shared component library: design tokens, the core components, a Storybook to browse them, and a package the three product teams can install, so every screen stops being rebuilt slightly differently.",
  "produces": "an internal developer tool: a versioned component library, its Storybook documentation, and a guide to adopting it.",
  "skills_technical": [
   "React",
   "TypeScript",
   "Design tokens",
   "Storybook",
   "npm packaging",
   "Visual regression testing"
  ],
  "skills_transferable": [
   "Attention to Detail",
   "Written Communication",
   "Collaboration",
   "Problem Solving"
  ],
  "capabilities": [
   [
    "Frontend Engineering",
    "building components other developers want to use"
   ],
   [
    "Developer Experience",
    "making the right way the easy way for other engineers"
   ],
   [
    "Design Systems",
    "turning a visual language into reusable code"
   ]
  ],
  "resume_line": "Built Ledgerly's shared React component library: 14 typed, accessible components with design tokens, Storybook docs and a versioned npm package adopted by 3 product teams.",
  "asset_line": "A versioned component library with its documentation and adoption guide, held together as one case study."
 },
 "background": {
  "venture": "Ledgerly makes bookkeeping and GST filing software for small businesses. It has three frontends (a web app, an accountant portal and an admin console) built by three small teams.",
  "project": "Each team has built its own buttons, tables and forms, so the products look and behave differently and the same bugs get fixed three times. Ledgerly wants one shared component library, with documentation, that all three teams can install.",
  "why": "Customers notice when the same company's products feel different, and accountants who use two of them get confused. Engineers waste days rebuilding components that already exist elsewhere. A shared library pays back every time a team builds a screen."
 },
 "chirag_intro": "The route from three inconsistent apps to one library every team uses. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "UI Inventory Audit",
   "short": "the inventory",
   "desc": "List every button, input, table and modal across the three apps and note how they differ.",
   "leaves": "a UI inventory",
   "bar": false,
   "rubric": [
    [
     "Collect the components",
     "Components from all three apps are listed with screenshots."
    ],
    [
     "Show the differences",
     "You show how the same component differs across apps."
    ],
    [
     "Pick what to build first",
     "You rank components by how often they're used and how much they differ."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I run a UI inventory across three apps?",
    "Group these screenshots into component types.",
    "Which components should a library build first?"
   ],
   "reads": [
    [
     "Running an interface inventory",
     "Collecting what exists before building anything."
    ],
    [
     "Prioritising a component library",
     "Building the most-used pieces first."
    ],
    [
     "Spotting inconsistency",
     "Where small differences cause real bugs."
    ]
   ],
   "community": [
    [
     "reader",
     "Interface inventory template"
    ],
    [
     "play",
     "Inventory of three apps in an hour"
    ],
    [
     "reader",
     "How we prioritised our library"
    ],
    [
     "play",
     "The 11 buttons we found"
    ]
   ]
  },
  "2": {
   "name": "Design Token System",
   "short": "the design tokens",
   "desc": "Turn colours, spacing, type and radii into tokens the components and apps share.",
   "leaves": "a design token set",
   "bar": false,
   "rubric": [
    [
     "Define the tokens",
     "Colours, spacing, type and radii are defined as tokens."
    ],
    [
     "Name them for meaning",
     "Tokens are named for their purpose, like 'danger', not their value, like 'red'."
    ],
    [
     "Make them themeable",
     "Tokens support a dark theme without changing components, and you show it."
    ]
   ],
   "time": "2h",
   "ai": [
    "Suggest a token naming scheme for colours.",
    "Convert these hard-coded styles into tokens.",
    "How do I support a dark theme with tokens?"
   ],
   "reads": [
    [
     "Design tokens explained",
     "Shared values for colour, spacing and type."
    ],
    [
     "Naming tokens well",
     "Semantic names that survive a redesign."
    ],
    [
     "Theming with CSS variables",
     "Switching themes without touching components."
    ]
   ],
   "community": [
    [
     "reader",
     "Token naming conventions"
    ],
    [
     "play",
     "Tokens to CSS variables"
    ],
    [
     "reader",
     "Dark theme with tokens"
    ],
    [
     "play",
     "Renaming tokens without breaking apps"
    ]
   ]
  },
  "3": {
   "name": "Core Component Build",
   "short": "the core components",
   "desc": "Build the core components (button, input, select, table, modal, toast) with typed props and every state.",
   "leaves": "a set of core components",
   "bar": true,
   "rubric": [
    [
     "Build them",
     "Each core component works."
    ],
    [
     "Type and document props",
     "Props are typed in TypeScript and explained."
    ],
    [
     "Make them accessible",
     "Components work with a keyboard and screen readers, and pass an automated audit."
    ],
    [
     "Design the API",
     "Component APIs are consistent with each other and hard to misuse."
    ]
   ],
   "time": "5-7h",
   "ai": [
    "Write a typed React Button with variants and sizes.",
    "How do I make this modal trap focus correctly?",
    "Is this component API consistent with the others?"
   ],
   "reads": [
    [
     "Designing component APIs",
     "Props that are easy to use and hard to misuse."
    ],
    [
     "Accessible modals and menus",
     "Focus management and keyboard support."
    ],
    [
     "TypeScript for component libraries",
     "Types that help other developers."
    ]
   ],
   "community": [
    [
     "play",
     "Building an accessible modal"
    ],
    [
     "reader",
     "Component API guidelines"
    ],
    [
     "reader",
     "Library components we admire"
    ],
    [
     "play",
     "Reviewing a component API"
    ]
   ],
   "floor": "works with a keyboard and screen reader, with typed, consistent props",
   "floor_level": 2
  },
  "4": {
   "name": "Storybook Documentation",
   "short": "the Storybook docs",
   "desc": "Document every component in Storybook with examples, props tables and usage guidance.",
   "leaves": "a published Storybook",
   "bar": true,
   "rubric": [
    [
     "Add stories",
     "Each component has stories showing its variants."
    ],
    [
     "Explain usage",
     "Docs say when to use each component, and when not to."
    ],
    [
     "Make it the source of truth",
     "Developers could build a screen from the docs without asking you."
    ]
   ],
   "time": "3h",
   "ai": [
    "Write Storybook stories for a Button component.",
    "What usage guidance should a table component have?",
    "How do I publish Storybook to a static site?"
   ],
   "reads": [
    [
     "Storybook basics",
     "Stories, controls and docs pages."
    ],
    [
     "Writing component documentation",
     "When to use it, when not to, and examples."
    ],
    [
     "Publishing Storybook",
     "A shared site the whole team can browse."
    ]
   ],
   "community": [
    [
     "play",
     "Storybook setup in 15 minutes"
    ],
    [
     "reader",
     "Docs pages we'd copy"
    ],
    [
     "reader",
     "Writing usage guidance"
    ],
    [
     "play",
     "Publishing Storybook to Chromatic"
    ]
   ],
   "floor": "lets a developer build a screen from the docs alone",
   "floor_level": 3
  },
  "5": {
   "name": "Visual Regression Testing",
   "short": "the visual tests",
   "desc": "Set up visual regression tests so an accidental style change is caught before release.",
   "leaves": "a visual regression setup",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ]
   ],
   "time": "2h",
   "ai": [
    "How does visual regression testing work with Storybook?",
    "Which components need visual tests most?",
    "How do I review and approve a visual change?"
   ],
   "reads": [
    [
     "Visual regression testing",
     "Catching unintended style changes."
    ],
    [
     "Testing in Storybook",
     "Interaction and visual tests on stories."
    ],
    [
     "Reviewing visual diffs",
     "Approving changes on purpose."
    ]
   ],
   "community": [
    [
     "reader",
     "Visual testing tools compared"
    ],
    [
     "play",
     "Catching a style regression"
    ],
    [
     "reader",
     "Review workflow for visual diffs"
    ],
    [
     "play",
     "Visual tests in CI"
    ]
   ]
  },
  "6": {
   "name": "Package Build & Versioning",
   "short": "the package",
   "desc": "Package the library for npm with types, tree-shaking and semantic versioning.",
   "leaves": "a versioned npm package",
   "bar": false,
   "rubric": [
    [
     "Publish the package",
     "The library installs from a registry."
    ],
    [
     "Ship the types",
     "Types and styles ship with the package and work in a fresh app."
    ],
    [
     "Version it properly",
     "Releases follow semantic versioning with a changelog."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I bundle a React library with types?",
    "What's the difference between a minor and a major version?",
    "Set up automatic changelogs for this library."
   ],
   "reads": [
    [
     "Packaging React libraries",
     "Bundling with types and styles."
    ],
    [
     "Semantic versioning",
     "Telling teams what a release might break."
    ],
    [
     "Changelogs and releases",
     "Automating release notes."
    ]
   ],
   "community": [
    [
     "play",
     "Publishing a private npm package"
    ],
    [
     "reader",
     "Semver cheat sheet"
    ],
    [
     "reader",
     "Changesets walkthrough"
    ],
    [
     "play",
     "The release that broke three apps"
    ]
   ]
  },
  "7": {
   "name": "Pilot Adoption",
   "short": "the pilot",
   "desc": "Replace the components on one real screen in one app with the library, and record what got easier and what didn't.",
   "leaves": "a pilot adoption report",
   "bar": false,
   "rubric": [
    [
     "Swap one screen",
     "A real screen uses the library."
    ],
    [
     "Measure the change",
     "You record code removed, bugs fixed and time taken."
    ],
    [
     "Learn from it",
     "Problems the pilot exposed are fixed in the library."
    ],
    [
     "Plan the rollout",
     "You set out how the other teams adopt it, backed by the pilot."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Plan a pilot migration of one screen to a component library.",
    "What should I measure during a pilot adoption?",
    "How do I convince another team to adopt the library?"
   ],
   "reads": [
    [
     "Migrating to a component library",
     "Adopting gradually without a big rewrite."
    ],
    [
     "Measuring developer experience",
     "Showing the library actually helps."
    ],
    [
     "Getting teams to adopt tools",
     "Making adoption easy and worth it."
    ]
   ],
   "community": [
    [
     "reader",
     "Pilot adoption report example"
    ],
    [
     "play",
     "Migrating a screen live"
    ],
    [
     "reader",
     "Adoption playbook"
    ],
    [
     "play",
     "When a team said no"
    ]
   ]
  },
  "8": {
   "name": "Contribution Guide",
   "short": "the contribution guide",
   "desc": "Write the guide for how teams request, build and review new components.",
   "leaves": "a contribution guide",
   "bar": false,
   "rubric": [
    [
     "Write the process",
     "The guide explains how to propose and add a component."
    ],
    [
     "Set the standards",
     "It lists what every new component must have."
    ],
    [
     "Make it easy",
     "A developer could add a component following only the guide."
    ]
   ],
   "time": "1h",
   "ai": [
    "Outline a contribution guide for a component library.",
    "What checklist should every new component pass?",
    "How should component requests be reviewed?"
   ],
   "reads": [
    [
     "Writing contribution guides",
     "Making it easy for others to add to the library."
    ],
    [
     "Governing a component library",
     "Who decides what gets added."
    ],
    [
     "Code review checklists",
     "Consistent quality from every contributor."
    ]
   ],
   "community": [
    [
     "reader",
     "Contribution guide template"
    ],
    [
     "play",
     "Running a library office hour"
    ],
    [
     "reader",
     "Component checklist"
    ],
    [
     "play",
     "Reviewing a contributed component"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "See what exists",
   "desc": "Inventory the components across all three apps and pick what to build first.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set up the repository",
   "desc": "Create the library repository with TypeScript, linting, Storybook and a test setup."
  },
  {
   "n": 3,
   "title": "Set the foundations",
   "desc": "Define the design tokens every component will use.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Build and document",
   "desc": "Build the core components and document each one in Storybook.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Protect and package it",
   "desc": "Add visual regression tests and publish a versioned package.",
   "vcs": [
    "5",
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Try it for real",
   "desc": "Adopt the library on one real screen and learn from it.",
   "vcs": [
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect fixes the pilot exposes."
  },
  {
   "n": 7,
   "title": "Open it up",
   "desc": "Write the guide for how other teams contribute.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Interface inventories",
   "Collecting what exists first."
  ],
  [
   "Design tokens",
   "Shared values for a whole product."
  ],
  [
   "Designing component APIs",
   "Props that are hard to misuse."
  ],
  [
   "Storybook",
   "Documenting components."
  ],
  [
   "Packaging React libraries",
   "Publishing with types and versions."
  ],
  [
   "Adopting a component library",
   "Migrating gradually."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the component library. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the inventory or the design tokens: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The core components is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the library, document it and get a team using it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the component library at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "4",
    "7"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the component library counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the component library as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "4"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as screens built with the library, and build the case study to show you moved it.",
   "pick": "Take the core components to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE13-THRIFTLOOP-E2E-001",
 "ui": {
  "id": 114,
  "roles": [
   "QA / Test Engineer",
   "Software Engineer / Full-Stack Developer"
  ],
  "stage": "Seed-stage startup",
  "category": "Technology & Engineering",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Test Automation Framework Build",
  "deliverable": "Automated Test Suite",
  "title": "Build the test suite that stops a broken checkout reaching real buyers",
  "role": "QA / Test Engineer",
  "industry": "FashionTech & Sustainable Apparel",
  "venture": "ThriftLoop"
 },
 "takeaways": {
  "asset": "An automated end-to-end test suite for ThriftLoop's marketplace, running in CI, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Methodical engineering: finding what can break, then writing code that checks it every single time."
 },
 "pre": {
  "lede": "You'll build ThriftLoop's automated test suite with Playwright: the critical journeys (sign-up, listing a garment, search, checkout) tested end to end, running on every pull request, so a broken checkout never reaches real buyers again.",
  "produces": "an automated test suite: the framework, the tests for the critical journeys, CI integration, and a report on what it covers.",
  "skills_technical": [
   "Playwright",
   "TypeScript",
   "Test design",
   "Page object model",
   "CI with GitHub Actions",
   "Test data management"
  ],
  "skills_transferable": [
   "Attention to Detail",
   "Critical Thinking",
   "Problem Solving",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Quality Engineering",
    "deciding what to test and building checks that catch real bugs"
   ],
   [
    "Test Automation",
    "writing reliable automated tests that run on their own"
   ],
   [
    "DevOps & CI/CD",
    "making tests part of how code ships"
   ]
  ],
  "resume_line": "Built ThriftLoop's Playwright end-to-end suite: 32 tests across 6 critical journeys, running in CI on every pull request in under 6 minutes with a flaky-test rate below 1%.",
  "asset_line": "An automated test suite running in CI, with its coverage report and the decisions behind it, held together as one case study."
 },
 "background": {
  "venture": "ThriftLoop is a resale marketplace for pre-loved clothing. Sellers list garments with photos, buyers search and pay online, and ThriftLoop handles pickup and delivery.",
  "project": "Every release is tested by hand by the two founders, and twice in the last month a broken checkout went live for a whole weekend. ThriftLoop wants automated end-to-end tests for its critical journeys, running on every pull request.",
  "why": "When checkout breaks on a marketplace, buyers don't report it; they leave and don't come back, and sellers lose sales. Manual testing before every release is slow and misses things. An automated suite that runs on every change catches the break before it ships."
 },
 "chirag_intro": "The route from 'the founders click through it' to tests that run on every change. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Critical Journey Mapping",
   "short": "the journey map",
   "desc": "Identify and rank the user journeys that would hurt most if they broke.",
   "leaves": "a ranked critical journey list",
   "bar": false,
   "rubric": [
    [
     "List the journeys",
     "The main user journeys are listed."
    ],
    [
     "Rank by risk",
     "Journeys are ranked by how often they're used and how badly a break would hurt."
    ],
    [
     "Define each one",
     "Each journey has its steps and expected results written down."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "List the critical journeys for a resale marketplace.",
    "Rank these journeys by business risk.",
    "Write the steps and expected results for checkout."
   ],
   "reads": [
    [
     "Risk-based testing",
     "Testing what matters most first."
    ],
    [
     "Writing test scenarios",
     "Steps and expected results someone can follow."
    ],
    [
     "Understanding a product's money paths",
     "Where a bug costs real money."
    ]
   ],
   "community": [
    [
     "reader",
     "Critical journey list from a marketplace"
    ],
    [
     "play",
     "Ranking journeys by risk"
    ],
    [
     "reader",
     "Test scenario template"
    ],
    [
     "play",
     "The bug we didn't think to test"
    ]
   ]
  },
  "2": {
   "name": "Test Framework Setup",
   "short": "the framework",
   "desc": "Set up Playwright with a clean structure: page objects, fixtures, config for environments.",
   "leaves": "a test framework scaffold",
   "bar": false,
   "rubric": [
    [
     "Set it up",
     "Playwright runs a first test."
    ],
    [
     "Structure it",
     "Page objects and fixtures keep tests readable and reusable."
    ],
    [
     "Make it configurable",
     "The suite runs against local, staging and preview environments by config alone."
    ],
    [
     "Design for scale",
     "The structure would hold for 200 tests, and you can show why."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Set up Playwright with TypeScript for a web app.",
    "Write a page object for a checkout page.",
    "How do I run the same tests against staging and preview?"
   ],
   "reads": [
    [
     "Playwright basics",
     "Writing and running browser tests."
    ],
    [
     "The page object model",
     "Keeping tests readable as the suite grows."
    ],
    [
     "Test configuration",
     "Running against different environments."
    ]
   ],
   "community": [
    [
     "play",
     "Playwright setup in 15 minutes"
    ],
    [
     "reader",
     "Page objects done well"
    ],
    [
     "reader",
     "Framework folder structure"
    ],
    [
     "play",
     "Refactoring a messy test suite"
    ]
   ]
  },
  "3": {
   "name": "End-to-End Test Writing",
   "short": "the end-to-end tests",
   "desc": "Write the tests for each critical journey, including the ways it can fail.",
   "leaves": "an end-to-end test suite",
   "bar": true,
   "rubric": [
    [
     "Write the tests",
     "Each critical journey has a test."
    ],
    [
     "Test the failures",
     "Tests cover declined payments, empty searches and invalid listings, not just success."
    ],
    [
     "Make them reliable",
     "Tests use stable selectors and proper waits, and pass ten runs in a row."
    ],
    [
     "Make them clear",
     "A failing test tells you exactly what broke without reading the code."
    ]
   ],
   "time": "5-7h",
   "ai": [
    "Write a Playwright test for checkout with a declined card.",
    "Why is this test flaky, and how do I fix it?",
    "Which selectors are most stable for tests?"
   ],
   "reads": [
    [
     "Writing reliable browser tests",
     "Selectors and waits that don't flake."
    ],
    [
     "Testing failure paths",
     "The cases that break in real life."
    ],
    [
     "Readable test names and assertions",
     "Failures that explain themselves."
    ]
   ],
   "community": [
    [
     "play",
     "Writing a checkout test"
    ],
    [
     "reader",
     "Selector strategy guide"
    ],
    [
     "reader",
     "Failure-path test ideas"
    ],
    [
     "play",
     "Hunting a flaky test"
    ]
   ],
   "floor": "cover the failure paths and pass ten runs in a row without flaking",
   "floor_level": 2
  },
  "4": {
   "name": "Test Data Management",
   "short": "the test data",
   "desc": "Create the test accounts, listings and payment data the tests need, and reset them between runs.",
   "leaves": "a test data setup",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I create test users through the API before a test?",
    "How should tests clean up the data they create?",
    "Use test card numbers for payment tests safely."
   ],
   "reads": [
    [
     "Managing test data",
     "Seeding and cleaning up between runs."
    ],
    [
     "Using APIs to set up tests",
     "Faster, more reliable setup than clicking through the UI."
    ],
    [
     "Payment test modes",
     "Testing payments with test cards only."
    ]
   ],
   "community": [
    [
     "reader",
     "Test data strategies"
    ],
    [
     "play",
     "Seeding data with fixtures"
    ],
    [
     "reader",
     "Payment test cards guide"
    ],
    [
     "play",
     "When tests polluted staging"
    ]
   ]
  },
  "5": {
   "name": "CI Pipeline Integration",
   "short": "the CI pipeline",
   "desc": "Run the suite on every pull request in GitHub Actions, with reports and screenshots on failure.",
   "leaves": "a CI test pipeline",
   "bar": true,
   "rubric": [
    [
     "Run in CI",
     "The suite runs on every pull request."
    ],
    [
     "Report failures well",
     "Failures attach screenshots, traces and a readable report."
    ],
    [
     "Keep it fast",
     "Tests run in parallel and the pipeline finishes in under ten minutes."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write a GitHub Actions workflow for Playwright.",
    "How do I upload test traces when a test fails in CI?",
    "How can I run these tests in parallel?"
   ],
   "reads": [
    [
     "Playwright in GitHub Actions",
     "Running browser tests in CI."
    ],
    [
     "Test reports and traces",
     "Making failures easy to debug."
    ],
    [
     "Parallel test runs",
     "Keeping the pipeline fast."
    ]
   ],
   "community": [
    [
     "play",
     "Playwright CI setup"
    ],
    [
     "reader",
     "Trace viewer walkthrough"
    ],
    [
     "reader",
     "Speeding up a slow pipeline"
    ],
    [
     "play",
     "Debugging a CI-only failure"
    ]
   ],
   "floor": "runs on every pull request with screenshots and traces on failure",
   "floor_level": 2
  },
  "6": {
   "name": "Flaky Test Investigation",
   "short": "the flake hunt",
   "desc": "Run the suite many times, find the tests that fail randomly, and fix their causes.",
   "leaves": "a flaky test log with fixes",
   "bar": false,
   "rubric": [
    [
     "Find the flakes",
     "You run the suite repeatedly and record which tests fail at random."
    ],
    [
     "Find the cause",
     "Each flaky test has its root cause identified."
    ],
    [
     "Fix, don't retry",
     "Causes are fixed rather than hidden with automatic retries."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I find flaky tests in a Playwright suite?",
    "What are the common causes of flaky browser tests?",
    "Is retrying a flaky test ever acceptable?"
   ],
   "reads": [
    [
     "Causes of flaky tests",
     "Timing, shared data and animations."
    ],
    [
     "Debugging with traces",
     "Seeing exactly what happened in a failed run."
    ],
    [
     "Retries versus fixes",
     "Why retries hide real problems."
    ]
   ],
   "community": [
    [
     "reader",
     "Flaky test causes checklist"
    ],
    [
     "play",
     "Fixing a race condition"
    ],
    [
     "reader",
     "Measuring flakiness"
    ],
    [
     "play",
     "The animation that broke every Friday"
    ]
   ]
  },
  "7": {
   "name": "Bug Reporting",
   "short": "the bug reports",
   "desc": "Write up the real bugs the suite finds, clearly enough that a developer can fix them straight away.",
   "leaves": "a set of bug reports",
   "bar": false,
   "rubric": [
    [
     "Report the bugs",
     "Each bug found is written up."
    ],
    [
     "Make them reproducible",
     "Reports have steps, expected and actual results, and evidence."
    ],
    [
     "Rank them",
     "Bugs carry a severity with a reason."
    ]
   ],
   "time": "1h",
   "ai": [
    "Write a bug report for this checkout failure.",
    "What severity should this bug have?",
    "What evidence should a bug report include?"
   ],
   "reads": [
    [
     "Writing bug reports",
     "Reports developers can act on."
    ],
    [
     "Severity and priority",
     "How bad is it, and how soon?"
    ],
    [
     "Attaching evidence",
     "Screenshots, traces and logs."
    ]
   ],
   "community": [
    [
     "reader",
     "Bug report template"
    ],
    [
     "play",
     "Writing a great bug report"
    ],
    [
     "reader",
     "Severity guide"
    ],
    [
     "play",
     "A bug report that got fixed in an hour"
    ]
   ]
  },
  "8": {
   "name": "Coverage & Handover Report",
   "short": "the handover",
   "desc": "Report what the suite covers, what it doesn't, and how the team should maintain it.",
   "leaves": "a test coverage and handover report",
   "bar": false,
   "rubric": [
    [
     "Report coverage",
     "The report lists which journeys and failure cases are tested."
    ],
    [
     "Name the gaps",
     "It says honestly what isn't covered and the risk that leaves."
    ],
    [
     "Make it maintainable",
     "A developer could add a test following only the handover notes."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline a test coverage report for a startup.",
    "How do I explain coverage gaps without alarming the founders?",
    "What should a test suite handover include?"
   ],
   "reads": [
    [
     "Reporting test coverage",
     "What's tested and what isn't."
    ],
    [
     "Maintaining a test suite",
     "Keeping it useful as the product changes."
    ],
    [
     "Writing handover notes",
     "Making sure the team can carry it on."
    ]
   ],
   "community": [
    [
     "reader",
     "Coverage report example"
    ],
    [
     "play",
     "Handing over a test suite"
    ],
    [
     "reader",
     "Maintenance checklist"
    ],
    [
     "play",
     "Presenting test results to founders"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Decide what matters",
   "desc": "Map the critical journeys and rank them by how badly a break would hurt.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Get access",
   "desc": "Get a staging environment, test payment keys and a test account, and confirm nothing in the tests touches real customers."
  },
  {
   "n": 3,
   "title": "Build the framework",
   "desc": "Set up Playwright with a structure that scales.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Write the tests",
   "desc": "Write the end-to-end tests and the data they need.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Make it automatic",
   "desc": "Run the suite in CI on every pull request, then hunt down the flaky tests.",
   "vcs": [
    "5",
    "6"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect at least one round of fixing flaky tests."
  },
  {
   "n": 6,
   "title": "Report what you find",
   "desc": "Write up the real bugs the suite catches.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Hand it over",
   "desc": "Report coverage and write the notes the team needs to maintain it.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Risk-based testing",
   "Testing what matters most first."
  ],
  [
   "Playwright basics",
   "Writing and running browser tests."
  ],
  [
   "Page object model",
   "Readable tests as the suite grows."
  ],
  [
   "Avoiding flaky tests",
   "Selectors, waits and test data."
  ],
  [
   "Tests in CI",
   "Running on every pull request."
  ],
  [
   "Writing bug reports",
   "Reports developers can act on."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the test suite. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the journey map or the framework: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The end-to-end tests is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the suite, run it in CI and hand it over.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the test suite at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the test suite counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the test suite as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as broken releases reaching buyers, and build the case study to show you moved it.",
   "pick": "Take the end-to-end tests to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE14-FESTPASS-LOAD-001",
 "ui": {
  "id": 115,
  "roles": [
   "QA / Test Engineer",
   "Backend Engineer"
  ],
  "stage": "Seed-stage startup",
  "category": "Technology & Engineering",
  "time": "16-22 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Performance Optimisation & Load Testing",
  "deliverable": "Performance Optimisation Report",
  "title": "Find out why the ticket site falls over the minute a college fest goes on sale",
  "role": "QA / Test Engineer",
  "industry": "Entertainment & MediaTech",
  "venture": "FestPass"
 },
 "takeaways": {
  "asset": "A load test and performance report for FestPass's ticket drops, with the fixes it led to, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Investigative engineering: simulating thousands of users, reading graphs and finding the one thing that breaks first."
 },
 "pre": {
  "lede": "You'll load test FestPass's ticketing platform with k6, recreate the rush of a fest ticket drop, find where it breaks, and work with the developers to fix it, ending in a report that proves the next drop will hold.",
  "produces": "a performance optimisation report: the test plan, load test scripts and results, the bottlenecks found, the fixes and the before-and-after numbers.",
  "skills_technical": [
   "k6 load testing",
   "Performance test design",
   "Reading metrics & dashboards",
   "Database query analysis",
   "Caching basics",
   "Report writing"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Research & Analysis",
   "Problem Solving",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Quality Engineering",
    "testing how software behaves under real-world pressure"
   ],
   [
    "Performance Engineering",
    "finding and fixing what makes systems slow"
   ],
   [
    "Observability",
    "reading metrics to understand what a system is doing"
   ]
  ],
  "resume_line": "Load tested FestPass's ticketing platform with k6: simulated 5,000 concurrent buyers, traced the failure to an unindexed seat query, and verified fixes that took checkout from timing out to under 800 ms.",
  "asset_line": "A full load test and performance report with the bottlenecks found and the fixes verified, held together as one case study."
 },
 "background": {
  "venture": "FestPass sells tickets for college fests across 30 campuses. Most of its traffic arrives in the first ten minutes after a big fest's tickets go on sale.",
  "project": "At the last big ticket drop the site slowed to a crawl within two minutes and checkout failed for half an hour. FestPass's biggest fest is in three weeks. It needs to know where the platform breaks, fix it and prove it holds before then.",
  "why": "A ticket drop is the moment FestPass is judged on. When it fails, students flood social media, organisers threaten to leave, and the platform's reputation goes with it. Guessing at the cause wastes the three weeks. Recreating the rush safely, before the real one, is the only way to know."
 },
 "chirag_intro": "The route from 'it crashed last time' to proof that it won't next time. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Performance Requirements Definition",
   "short": "the performance targets",
   "desc": "Decide what 'holds up' means: expected peak users, acceptable response times and error rates.",
   "leaves": "a performance requirements sheet",
   "bar": false,
   "rubric": [
    [
     "Set targets",
     "Target users, response times and error rates are written down."
    ],
    [
     "Base them on evidence",
     "Targets come from past drop traffic, not guesses."
    ],
    [
     "Agree them",
     "The targets are agreed with the team, with the reasoning attached."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Estimate peak concurrent users from last drop's traffic numbers.",
    "What response time is acceptable for checkout?",
    "Write performance requirements for a ticket drop."
   ],
   "reads": [
    [
     "Setting performance requirements",
     "Turning 'fast enough' into numbers."
    ],
    [
     "Estimating peak load",
     "Working out concurrent users from traffic data."
    ],
    [
     "Percentiles, not averages",
     "Why p95 response time matters more than the average."
    ]
   ],
   "community": [
    [
     "reader",
     "Performance targets from a ticketing site"
    ],
    [
     "play",
     "Estimating peak load"
    ],
    [
     "reader",
     "Percentiles explained"
    ],
    [
     "play",
     "When our targets were too optimistic"
    ]
   ]
  },
  "2": {
   "name": "Load Test Scenario Design",
   "short": "the test scenarios",
   "desc": "Design realistic scenarios: the rush at drop time, browsing, holding seats, paying, and a spike test.",
   "leaves": "a load test scenario plan",
   "bar": false,
   "rubric": [
    [
     "Design scenarios",
     "Load, spike and soak scenarios are planned."
    ],
    [
     "Make them realistic",
     "User behaviour mirrors real drops: think time, the mix of browsing and buying."
    ],
    [
     "Explain the choices",
     "You can say why each scenario tests a real risk."
    ]
   ],
   "time": "2h",
   "ai": [
    "Design a spike test for a ticket drop.",
    "What mix of browsing and buying should the test simulate?",
    "What's the difference between load, stress and soak tests?"
   ],
   "reads": [
    [
     "Types of performance test",
     "Load, stress, spike and soak, and what each finds."
    ],
    [
     "Modelling realistic users",
     "Think time and user mixes."
    ],
    [
     "Planning a test run",
     "What to prepare before you press go."
    ]
   ],
   "community": [
    [
     "reader",
     "Scenario plan template"
    ],
    [
     "play",
     "Load vs spike vs soak"
    ],
    [
     "reader",
     "Realistic user modelling"
    ],
    [
     "play",
     "A test that missed the real problem"
    ]
   ]
  },
  "3": {
   "name": "Load Script Development",
   "short": "the load scripts",
   "desc": "Write the k6 scripts that act out each scenario against a staging copy of the platform.",
   "leaves": "a set of k6 load scripts",
   "bar": true,
   "rubric": [
    [
     "Write the scripts",
     "Scripts run each scenario against staging."
    ],
    [
     "Make them realistic",
     "Scripts use varied data, handle sessions and check responses."
    ],
    [
     "Make them reusable",
     "The team could rerun the scripts before every future drop."
    ],
    [
     "Make them trustworthy",
     "Scripts check correctness under load, not just speed, and you show why it matters."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Write a k6 script that logs in and buys a ticket.",
    "How do I add checks to make sure responses are correct under load?",
    "How do I feed different test users into a k6 script?"
   ],
   "reads": [
    [
     "k6 basics",
     "Writing and running load test scripts."
    ],
    [
     "Checks and thresholds in k6",
     "Failing the test when targets are missed."
    ],
    [
     "Testing safely on staging",
     "Never pointing a load test at production."
    ]
   ],
   "community": [
    [
     "play",
     "k6 in 20 minutes"
    ],
    [
     "reader",
     "Script structure we reuse"
    ],
    [
     "reader",
     "Thresholds and checks"
    ],
    [
     "play",
     "Load testing a login flow"
    ]
   ],
   "floor": "checks that responses are correct under load, not just that they arrive",
   "floor_level": 2
  },
  "4": {
   "name": "Test Execution & Monitoring",
   "short": "the test runs",
   "desc": "Run the tests while watching server, database and app metrics, and record what happens.",
   "leaves": "a test run log with metrics",
   "bar": false,
   "rubric": [
    [
     "Run the tests",
     "Each scenario is run and its results saved."
    ],
    [
     "Watch the system",
     "Server and database metrics are captured during each run."
    ],
    [
     "Note the breaking point",
     "You record the load at which things start to fail, and the first sign of it."
    ]
   ],
   "time": "3h",
   "ai": [
    "What metrics should I watch during a load test?",
    "Read this graph: where does performance start to degrade?",
    "How do I tell if the load generator itself is the bottleneck?"
   ],
   "reads": [
    [
     "Monitoring during load tests",
     "CPU, memory, database and response times together."
    ],
    [
     "Reading performance graphs",
     "Spotting the knee where things degrade."
    ],
    [
     "Running tests responsibly",
     "Coordinating with the team so a test isn't mistaken for an incident."
    ]
   ],
   "community": [
    [
     "play",
     "Watching a load test live"
    ],
    [
     "reader",
     "Metrics checklist"
    ],
    [
     "reader",
     "Reading latency graphs"
    ],
    [
     "play",
     "When the load generator was the bottleneck"
    ]
   ]
  },
  "5": {
   "name": "Bottleneck Analysis",
   "short": "the bottleneck analysis",
   "desc": "Trace the slowdowns to their causes: slow queries, missing caches, locked rows, too few workers.",
   "leaves": "a bottleneck analysis",
   "bar": true,
   "rubric": [
    [
     "List the slow spots",
     "The slowest endpoints and resources are listed."
    ],
    [
     "Find the cause",
     "Each bottleneck is traced to a specific cause with evidence."
    ],
    [
     "Rank by impact",
     "Bottlenecks are ordered by how much fixing each would help."
    ],
    [
     "Explain the chain",
     "You show how one bottleneck causes the next, so the team fixes the root, not the symptom."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "How do I find slow database queries during a load test?",
    "Why would seat selection lock up under load?",
    "Rank these bottlenecks by likely impact."
   ],
   "reads": [
    [
     "Finding bottlenecks",
     "From slow endpoint to root cause."
    ],
    [
     "Database query analysis",
     "Explain plans, indexes and locks."
    ],
    [
     "Caching basics",
     "When a cache would remove the load."
    ]
   ],
   "community": [
    [
     "reader",
     "Bottleneck analysis example"
    ],
    [
     "play",
     "Reading a query plan"
    ],
    [
     "reader",
     "Common ticketing bottlenecks"
    ],
    [
     "play",
     "The missing index that cost us a fest"
    ]
   ],
   "floor": "traces each slowdown to a specific cause with evidence",
   "floor_level": 3
  },
  "6": {
   "name": "Optimisation Recommendations",
   "short": "the recommendations",
   "desc": "Recommend fixes for each bottleneck, with the expected gain and the effort.",
   "leaves": "a set of optimisation recommendations",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Suggest fixes for a slow seat-availability query.",
    "Estimate the impact of adding a cache here.",
    "Which fix should the team do first with three weeks left?"
   ],
   "reads": [
    [
     "Common performance fixes",
     "Indexes, caching, queues and connection pools."
    ],
    [
     "Estimating impact versus effort",
     "Picking fixes that fit the deadline."
    ],
    [
     "Writing recommendations engineers act on",
     "Specific and evidenced."
    ]
   ],
   "community": [
    [
     "reader",
     "Recommendation examples"
    ],
    [
     "play",
     "Prioritising fixes with a deadline"
    ],
    [
     "reader",
     "Queueing for ticket drops"
    ],
    [
     "play",
     "The fix that made it worse"
    ]
   ]
  },
  "7": {
   "name": "Fix Verification Retest",
   "short": "the retest",
   "desc": "Rerun the same tests after the fixes and show what changed.",
   "leaves": "a before-and-after comparison",
   "bar": false,
   "rubric": [
    [
     "Rerun the tests",
     "The same scenarios run after the fixes."
    ],
    [
     "Compare fairly",
     "Results are compared under identical conditions."
    ],
    [
     "Prove the target",
     "You show whether the platform now meets its targets, honestly."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I compare two load test runs fairly?",
    "Make a before-and-after table from these results.",
    "The fix helped but missed the target. What next?"
   ],
   "reads": [
    [
     "Comparing test runs",
     "Same conditions, fair comparison."
    ],
    [
     "Presenting before and after",
     "Charts that make the change obvious."
    ],
    [
     "Regression testing performance",
     "Making sure fixes don't break something else."
    ]
   ],
   "community": [
    [
     "reader",
     "Before and after report"
    ],
    [
     "play",
     "Comparing k6 runs"
    ],
    [
     "reader",
     "Performance regression checks"
    ],
    [
     "play",
     "When the retest surprised us"
    ]
   ]
  },
  "8": {
   "name": "Performance Report",
   "short": "the performance report",
   "desc": "Write the report: targets, tests, what broke, what was fixed, and whether the next drop will hold.",
   "leaves": "a performance optimisation report",
   "bar": false,
   "rubric": [
    [
     "Report the results",
     "Targets, tests and results are reported."
    ],
    [
     "Lead with the answer",
     "The report opens by saying whether the next drop will hold."
    ],
    [
     "Make it reusable",
     "The team could rerun the whole process before the next big drop from the report alone."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a performance test report for founders.",
    "Summarise these results in three sentences.",
    "What should the team do before the next ticket drop?"
   ],
   "reads": [
    [
     "Writing performance reports",
     "Results that non-engineers understand."
    ],
    [
     "Visualising performance data",
     "Charts that make the point."
    ],
    [
     "Making testing repeatable",
     "A process the team can rerun."
    ]
   ],
   "community": [
    [
     "reader",
     "A performance report the founders read"
    ],
    [
     "play",
     "Presenting load test results"
    ],
    [
     "reader",
     "Report template (community copy)"
    ],
    [
     "play",
     "Explaining p95 to a founder"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Define 'holds up'",
   "desc": "Set the targets from last drop's real traffic.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Design the rush",
   "desc": "Plan realistic scenarios for the ticket drop.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Prepare a safe environment",
   "desc": "Get a staging copy of the platform sized like production, with monitoring turned on, and agree test windows with the team."
  },
  {
   "n": 4,
   "title": "Recreate the rush",
   "desc": "Write the load scripts and run them while watching the system.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Find what breaks first",
   "desc": "Trace the slowdowns to their causes and recommend fixes.",
   "vcs": [
    "5",
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Prove the fixes",
   "desc": "Rerun the tests after the fixes and compare.",
   "vcs": [
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to step 5: expect one or two rounds of fix and retest."
  },
  {
   "n": 7,
   "title": "Report",
   "desc": "Write the report and the steps to rerun it before every big drop.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Performance testing basics",
   "Load, stress, spike and soak tests."
  ],
  [
   "k6",
   "Writing load test scripts."
  ],
  [
   "Reading performance metrics",
   "Percentiles, throughput and errors."
  ],
  [
   "Finding bottlenecks",
   "From slow endpoint to root cause."
  ],
  [
   "Database performance",
   "Queries, indexes and locks."
  ],
  [
   "Writing performance reports",
   "Results everyone understands."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the performance report. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the performance targets or the test scenarios: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The load scripts is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: load test the platform, fix what breaks and prove it holds.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the performance report at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "5",
    "7"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the performance report counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the performance report as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as checkout response time at peak, and build the case study to show you moved it.",
   "pick": "Take the bottleneck analysis to L5: the version only you could have done.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE10-CARENOTE-SECURITY-001",
 "ui": {
  "id": 116,
  "roles": [
   "QA / Test Engineer",
   "Solutions / Software Architect"
  ],
  "stage": "Seed-stage startup",
  "category": "Technology & Engineering",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Security Vulnerability Assessment & Penetration Testing",
  "deliverable": "Security Assessment Report",
  "title": "Check whether a clinic's patient records are as safe as the founders think",
  "role": "QA / Test Engineer",
  "industry": "Cybersecurity & Privacy",
  "venture": "CareNote"
 },
 "takeaways": {
  "asset": "A security assessment of CareNote's web app, with findings ranked by risk and fixes verified, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Careful, permission-based investigation: thinking like an attacker inside clear rules, and writing up what you find responsibly."
 },
 "pre": {
  "lede": "You'll run an authorised security assessment of CareNote's clinic records app on a dedicated test environment: check it against common web vulnerabilities, rank what you find by risk, help the team fix it, and write the report.",
  "produces": "a security assessment report: the agreed scope, the method, each finding with its risk and evidence, the recommended fixes, and the retest results.",
  "skills_technical": [
   "OWASP Top 10",
   "Burp Suite / OWASP ZAP",
   "Authentication & access control testing",
   "Risk rating (CVSS)",
   "Secure coding basics",
   "Security report writing"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Attention to Detail",
   "Research & Analysis",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Security Engineering",
    "finding weaknesses before someone with bad intentions does"
   ],
   [
    "Quality Engineering",
    "testing that the system does only what it should"
   ],
   [
    "Risk Assessment",
    "judging which problems matter most"
   ]
  ],
  "resume_line": "Ran an authorised OWASP-based security assessment of CareNote's patient records app: 9 findings including a high-risk access control flaw, all fixed and verified on retest.",
  "asset_line": "A full security assessment with findings, fixes and retest results, held together as one case study."
 },
 "background": {
  "venture": "CareNote makes a web app that small clinics use to keep patient notes, prescriptions and appointment history. It's used by 25 clinics and holds sensitive health data.",
  "project": "CareNote is about to sign its first hospital group, which requires a security assessment before go-live. The team has set up a separate test environment with fake patient data and given written permission to test it. Real systems and real data are out of scope.",
  "why": "Health records are among the most sensitive data there is, and a single access-control mistake can expose every patient at every clinic. The founders believe the app is secure, but nobody has checked. Finding problems now, in a test environment, is far cheaper than finding them after a breach."
 },
 "chirag_intro": "The route from 'we think it's secure' to evidence. Everything happens inside the agreed scope, on the test environment only. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Scope & Rules of Engagement",
   "short": "the scope",
   "desc": "Agree in writing what can be tested, how, when, and what's off-limits, before any testing starts.",
   "leaves": "a signed scope and rules of engagement",
   "bar": true,
   "rubric": [
    [
     "Write the scope",
     "What's in and out of scope is written down."
    ],
    [
     "Set the rules",
     "Testing windows, methods allowed and emergency contacts are agreed."
    ],
    [
     "Get it signed",
     "The team approves the scope in writing before testing starts."
    ]
   ],
   "time": "1h",
   "ai": [
    "What should a rules-of-engagement document include?",
    "Which systems should be out of scope here?",
    "Write the authorisation statement for this assessment."
   ],
   "reads": [
    [
     "Rules of engagement",
     "Why permission and scope come before anything else."
    ],
    [
     "Scoping a security assessment",
     "Deciding what to test and what's off-limits."
    ],
    [
     "Legal and ethical testing",
     "Staying inside what you're authorised to do."
    ]
   ],
   "community": [
    [
     "reader",
     "Rules of engagement template"
    ],
    [
     "play",
     "Scoping an assessment with a client"
    ],
    [
     "reader",
     "Ethics of security testing"
    ],
    [
     "play",
     "When the scope wasn't clear"
    ]
   ],
   "floor": "is agreed in writing before any testing, with clear limits on what's off-limits",
   "floor_level": 1
  },
  "2": {
   "name": "Threat Modelling",
   "short": "the threat model",
   "desc": "Map the app's data, users and entry points, and work out what an attacker would want and how they might try.",
   "leaves": "a threat model",
   "bar": false,
   "rubric": [
    [
     "Map the system",
     "Data, users and entry points are mapped."
    ],
    [
     "List the threats",
     "Likely threats are listed for each entry point."
    ],
    [
     "Prioritise them",
     "Threats are ranked so testing focuses on what matters."
    ],
    [
     "Find the non-obvious one",
     "You spot a threat specific to how clinics share data, with reasoning."
    ]
   ],
   "time": "2h",
   "ai": [
    "Draw the data flows for a clinic records app.",
    "Apply STRIDE to this login flow.",
    "Which threats should testing focus on first?"
   ],
   "reads": [
    [
     "Threat modelling with STRIDE",
     "A structured way to list what could go wrong."
    ],
    [
     "Data flow diagrams",
     "Seeing where sensitive data moves."
    ],
    [
     "Prioritising threats",
     "Focusing testing where the risk is."
    ]
   ],
   "community": [
    [
     "play",
     "Threat modelling in an hour"
    ],
    [
     "reader",
     "STRIDE examples"
    ],
    [
     "reader",
     "Health app threat model"
    ],
    [
     "play",
     "The threat we almost missed"
    ]
   ]
  },
  "3": {
   "name": "Automated Vulnerability Scanning",
   "short": "the automated scan",
   "desc": "Run an automated scanner against the test environment and sort real issues from false alarms.",
   "leaves": "a triaged scan report",
   "bar": false,
   "rubric": [
    [
     "Run the scan",
     "An automated scan is run against the test environment."
    ],
    [
     "Sort the results",
     "Real issues are separated from false positives, with reasons."
    ],
    [
     "Use it as a map",
     "Scan results guide where manual testing goes deeper."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I run OWASP ZAP against a test environment?",
    "Is this scanner finding a real issue or a false positive?",
    "Which scan results deserve manual follow-up?"
   ],
   "reads": [
    [
     "OWASP ZAP basics",
     "Automated scanning of web apps."
    ],
    [
     "Handling false positives",
     "Not every alert is real."
    ],
    [
     "What scanners miss",
     "Why manual testing still matters."
    ]
   ],
   "community": [
    [
     "play",
     "ZAP scan walkthrough"
    ],
    [
     "reader",
     "Triaging scanner output"
    ],
    [
     "reader",
     "False positive examples"
    ],
    [
     "play",
     "What the scanner missed"
    ]
   ]
  },
  "4": {
   "name": "Access Control Testing",
   "short": "the access control tests",
   "desc": "Test whether users can only see and change what they're allowed to: one clinic's staff must never see another clinic's patients.",
   "leaves": "an access control test log",
   "bar": true,
   "rubric": [
    [
     "Test the roles",
     "Each user role is tested against what it should and shouldn't reach."
    ],
    [
     "Try crossing boundaries",
     "You test whether one clinic can reach another clinic's records."
    ],
    [
     "Prove the finding",
     "Any flaw is shown with clear, repeatable evidence on test data."
    ],
    [
     "Test the edges",
     "You test less obvious paths, like exports and old API versions, with reasoning."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How do I test for insecure direct object references safely?",
    "Write test cases for role-based access in a clinic app.",
    "What evidence should I capture for an access control finding?"
   ],
   "reads": [
    [
     "Broken access control",
     "The most common serious web vulnerability."
    ],
    [
     "Testing authorisation",
     "Checking every role against every resource."
    ],
    [
     "Capturing evidence safely",
     "Proving a finding using only test data."
    ]
   ],
   "community": [
    [
     "reader",
     "Access control test cases"
    ],
    [
     "play",
     "Finding an IDOR on a test app"
    ],
    [
     "reader",
     "Evidence capture guide"
    ],
    [
     "play",
     "The export endpoint nobody checked"
    ]
   ],
   "floor": "tests every role against what it shouldn't reach, including crossing between clinics",
   "floor_level": 2
  },
  "5": {
   "name": "Authentication & Session Testing",
   "short": "the authentication tests",
   "desc": "Test login, password reset and session handling for common weaknesses.",
   "leaves": "an authentication test log",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "What should I test in a password reset flow?",
    "How do I check whether sessions expire properly?",
    "Is this login vulnerable to brute force?"
   ],
   "reads": [
    [
     "Authentication weaknesses",
     "Common mistakes in login and reset flows."
    ],
    [
     "Session management",
     "Expiry, cookies and logout."
    ],
    [
     "Rate limiting",
     "Stopping repeated guessing."
    ]
   ],
   "community": [
    [
     "reader",
     "Authentication test checklist"
    ],
    [
     "play",
     "Testing a reset flow"
    ],
    [
     "reader",
     "Secure cookie settings"
    ],
    [
     "play",
     "The reset link that never expired"
    ]
   ]
  },
  "6": {
   "name": "Risk Rating & Prioritisation",
   "short": "the risk ratings",
   "desc": "Rate each finding by severity and likelihood so the team knows what to fix first.",
   "leaves": "a risk-rated findings list",
   "bar": false,
   "rubric": [
    [
     "Rate the findings",
     "Each finding has a severity rating."
    ],
    [
     "Use a standard",
     "Ratings follow a standard like CVSS, with the reasoning shown."
    ],
    [
     "Put it in context",
     "Ratings reflect what the data is, here patient records."
    ],
    [
     "Defend the order",
     "The ranking holds when the team questions it."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Calculate a CVSS score for this finding.",
    "Should this be rated high or medium for a health app?",
    "Rank these findings for a team with one week."
   ],
   "reads": [
    [
     "CVSS scoring",
     "A standard way to rate severity."
    ],
    [
     "Context matters",
     "The same bug is worse when it exposes health data."
    ],
    [
     "Prioritising fixes",
     "What to fix first."
    ]
   ],
   "community": [
    [
     "reader",
     "CVSS calculator guide"
    ],
    [
     "play",
     "Rating findings with a team"
    ],
    [
     "reader",
     "Risk in context"
    ],
    [
     "play",
     "Arguing a severity rating"
    ]
   ]
  },
  "7": {
   "name": "Remediation Guidance & Retest",
   "short": "the remediation",
   "desc": "Explain how to fix each finding, then retest once fixes are in.",
   "leaves": "a remediation and retest log",
   "bar": false,
   "rubric": [
    [
     "Explain the fixes",
     "Each finding has clear fix guidance."
    ],
    [
     "Retest them",
     "Fixed findings are retested on the test environment."
    ],
    [
     "Confirm or reopen",
     "Each fix is confirmed or reopened with evidence."
    ]
   ],
   "time": "2h",
   "ai": [
    "Explain how to fix an IDOR in plain language for developers.",
    "How do I confirm this fix actually works?",
    "This fix only partly works. How do I explain that?"
   ],
   "reads": [
    [
     "Writing remediation guidance",
     "Fixes developers can apply."
    ],
    [
     "Secure coding basics",
     "Fixing the cause, not the symptom."
    ],
    [
     "Retesting findings",
     "Confirming fixes work."
    ]
   ],
   "community": [
    [
     "reader",
     "Remediation examples"
    ],
    [
     "play",
     "Retesting a fix"
    ],
    [
     "reader",
     "Secure coding cheat sheet"
    ],
    [
     "play",
     "When a fix moved the bug"
    ]
   ]
  },
  "8": {
   "name": "Security Assessment Report",
   "short": "the assessment report",
   "desc": "Write the report: scope, method, findings, risk, fixes and retest results, with an executive summary.",
   "leaves": "a security assessment report",
   "bar": true,
   "rubric": [
    [
     "Report the findings",
     "Findings, risks and fixes are reported."
    ],
    [
     "Serve both readers",
     "An executive summary for leaders, technical detail for developers."
    ],
    [
     "Handle it responsibly",
     "The report is shared only with authorised people, with sensitive detail protected."
    ],
    [
     "Make it audit-ready",
     "The hospital group's reviewers could rely on the report, and you show what makes it so."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Outline a security assessment report.",
    "Write an executive summary for these findings.",
    "How should a security report be shared safely?"
   ],
   "reads": [
    [
     "Writing security reports",
     "Clear for leaders and developers."
    ],
    [
     "Executive summaries",
     "The page leaders will read."
    ],
    [
     "Responsible disclosure",
     "Handling sensitive findings carefully."
    ]
   ],
   "community": [
    [
     "reader",
     "Security report example"
    ],
    [
     "play",
     "Presenting findings to founders"
    ],
    [
     "reader",
     "Report template (community copy)"
    ],
    [
     "play",
     "Explaining risk without fear"
    ]
   ],
   "floor": "serves leaders and developers, and is shared only with authorised people",
   "floor_level": 2
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Get permission and agree the scope",
   "desc": "Agree in writing what you can test, how and when. Nothing is tested before this is signed.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Think like an attacker",
   "desc": "Map the app and work out the threats that matter most.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Set up the test environment",
   "desc": "Confirm access to the separate test environment with fake patient data, and set up your testing tools."
  },
  {
   "n": 4,
   "title": "Scan, then look closer",
   "desc": "Run an automated scan, then test access control and authentication by hand.",
   "vcs": [
    "3",
    "4",
    "5"
   ]
  },
  {
   "n": 5,
   "title": "Judge the risk",
   "desc": "Rate each finding so the team knows what to fix first.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Fix and check",
   "desc": "Explain each fix and retest once it's in.",
   "vcs": [
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect one round of retesting."
  },
  {
   "n": 7,
   "title": "Report responsibly",
   "desc": "Write the report and share it only with authorised people.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "OWASP Top 10",
   "The most common web application risks."
  ],
  [
   "Rules of engagement",
   "Testing only with permission and scope."
  ],
  [
   "Threat modelling",
   "Working out what could go wrong."
  ],
  [
   "Access control testing",
   "Checking who can see what."
  ],
  [
   "CVSS scoring",
   "Rating severity consistently."
  ],
  [
   "Responsible disclosure",
   "Handling findings carefully."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the assessment report. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the scope or the threat model: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The risk ratings is where an L2 is most within reach here.",
   "nudge": [
    "6"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: scope it, test it, get it fixed and report it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the assessment report at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "1",
    "4",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the assessment report counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the assessment report as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "4",
    "8"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as high-risk findings fixed before go-live, and build the case study to show you moved it.",
   "pick": "Take the access control tests to L5: the version only you could have done.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-AI01-GYMFLOW-CHURN-001",
 "ui": {
  "id": 117,
  "roles": [
   "Machine Learning Engineer",
   "Business Intelligence Analyst"
  ],
  "stage": "Seed-stage startup",
  "category": "AI & Data Science",
  "time": "20-26 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Predictive Model Development",
  "deliverable": "Trained Predictive Model",
  "title": "Predict which gym members are about to quit, while there's still time to keep them",
  "role": "Machine Learning Engineer",
  "industry": "SportsTech & Wellness",
  "venture": "GymFlow"
 },
 "takeaways": {
  "asset": "A trained, evaluated churn prediction model for GymFlow's partner gyms, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Data work with a point: cleaning messy records, building features, training models and being honest about how good they are."
 },
 "pre": {
  "lede": "You'll build a model that predicts which gym members are likely to cancel in the next 30 days, from check-ins, payments and class bookings, so gym owners can reach out before they lose them. You'll evaluate it honestly and explain what drives its predictions.",
  "produces": "a trained predictive model: the cleaned dataset, the features, the trained and evaluated model, and an explanation of what drives it.",
  "skills_technical": [
   "Python",
   "pandas",
   "scikit-learn",
   "Feature engineering",
   "Model evaluation",
   "Model explainability (SHAP)",
   "Jupyter"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Research & Analysis",
   "Problem Solving",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Machine Learning",
    "building models that predict something useful from data"
   ],
   [
    "Data Engineering",
    "turning messy records into a clean, usable dataset"
   ],
   [
    "Data Storytelling",
    "explaining what a model does to people who'll act on it"
   ]
  ],
  "resume_line": "Built a churn prediction model for GymFlow's partner gyms: 18 engineered features from 40k member records, a gradient-boosted model with 0.81 ROC-AUC, and a SHAP-based explanation gym owners could act on.",
  "asset_line": "A trained churn model with its dataset, evaluation and explanations, held together as one case study."
 },
 "background": {
  "venture": "GymFlow is software for independent gyms: memberships, payments, class bookings and check-ins. It works with 60 gyms across four cities.",
  "project": "Gym owners say they only find out a member has quit when the renewal fails. GymFlow wants a model that flags members likely to cancel in the next 30 days, using the check-in, payment and booking data it already has, anonymised for this work.",
  "why": "Keeping a member costs a fraction of finding a new one, but only if the gym reaches out before the member has mentally left. Most owners notice too late. A model that flags at-risk members a month early turns a lost renewal into a phone call."
 },
 "chirag_intro": "The route from raw gym records to a model owners can act on. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Problem Framing & Success Metric",
   "short": "the problem framing",
   "desc": "Turn 'predict churn' into a precise prediction target, time window and the metric that decides success.",
   "leaves": "a problem framing note",
   "bar": false,
   "rubric": [
    [
     "Define the target",
     "What counts as churn and the prediction window are written down."
    ],
    [
     "Choose the metric",
     "A success metric is chosen with a reason, not just accuracy."
    ],
    [
     "Tie it to action",
     "The framing shows how a gym would use a prediction, and what a wrong one costs."
    ]
   ],
   "time": "1h",
   "ai": [
    "Define churn for a gym membership precisely.",
    "Why might accuracy be a misleading metric for churn?",
    "What does a false positive cost a gym, compared with a false negative?"
   ],
   "reads": [
    [
     "Framing ML problems",
     "Turning a business question into a prediction task."
    ],
    [
     "Choosing evaluation metrics",
     "Precision, recall and AUC for imbalanced problems."
    ],
    [
     "Cost of errors",
     "Why the wrong metric builds the wrong model."
    ]
   ],
   "community": [
    [
     "reader",
     "Framing a churn problem"
    ],
    [
     "play",
     "Picking a metric that matters"
    ],
    [
     "reader",
     "Metric cheat sheet"
    ],
    [
     "play",
     "When accuracy fooled us"
    ]
   ]
  },
  "2": {
   "name": "Data Cleaning & Exploration",
   "short": "the data exploration",
   "desc": "Clean the member records and explore them to understand who leaves and when.",
   "leaves": "a cleaned dataset with exploration notebook",
   "bar": true,
   "rubric": [
    [
     "Clean the data",
     "Missing values, duplicates and errors are handled and logged."
    ],
    [
     "Explore it",
     "Charts show how churners differ from members who stay."
    ],
    [
     "Spot the traps",
     "You find leaks and oddities that would mislead a model, with evidence."
    ],
    [
     "Question the data",
     "You show where the data itself is biased or incomplete, and what that means."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How should I handle members with missing check-in data?",
    "Plot check-in frequency for churned versus retained members.",
    "Is there anything in this data that would leak the answer to the model?"
   ],
   "reads": [
    [
     "Data cleaning with pandas",
     "Handling missing values, duplicates and types."
    ],
    [
     "Exploratory data analysis",
     "Understanding the data before modelling."
    ],
    [
     "Data leakage",
     "Features that secretly contain the answer."
    ]
   ],
   "community": [
    [
     "play",
     "EDA walkthrough on member data"
    ],
    [
     "reader",
     "Cleaning log template"
    ],
    [
     "reader",
     "Leakage examples"
    ],
    [
     "play",
     "The feature that was too good to be true"
    ]
   ],
   "floor": "finds and removes the data that would leak the answer to the model",
   "floor_level": 3
  },
  "3": {
   "name": "Feature Engineering",
   "short": "the features",
   "desc": "Build features from raw records, such as visit frequency trends, gaps since last check-in and payment delays.",
   "leaves": "a feature set",
   "bar": true,
   "rubric": [
    [
     "Build features",
     "Features are built from the raw records."
    ],
    [
     "Make them meaningful",
     "Each feature has a reason a gym owner would recognise."
    ],
    [
     "Avoid leakage",
     "Features only use data available before the prediction date."
    ],
    [
     "Find the signal",
     "You build a feature that captures behaviour change, not just levels, and show it helps."
    ]
   ],
   "time": "3h",
   "ai": [
    "Suggest features that capture a member losing interest.",
    "How do I compute a 4-week trend in check-ins with pandas?",
    "Does this feature use information from after the prediction date?"
   ],
   "reads": [
    [
     "Feature engineering",
     "Turning raw records into model inputs."
    ],
    [
     "Time-based features",
     "Trends, gaps and windows done correctly."
    ],
    [
     "Point-in-time correctness",
     "Only using what was known at the time."
    ]
   ],
   "community": [
    [
     "reader",
     "Churn features that work"
    ],
    [
     "play",
     "Building rolling-window features"
    ],
    [
     "reader",
     "Point-in-time joins"
    ],
    [
     "play",
     "A feature that changed everything"
    ]
   ],
   "floor": "only uses data available before the prediction date",
   "floor_level": 2
  },
  "4": {
   "name": "Baseline & Model Training",
   "short": "the model training",
   "desc": "Train a simple baseline, then better models, with a proper train, validation and test split by time.",
   "leaves": "a set of trained models",
   "bar": false,
   "rubric": [
    [
     "Train a baseline",
     "A simple baseline model is trained and scored."
    ],
    [
     "Train better models",
     "Stronger models are trained and compared fairly."
    ],
    [
     "Split by time",
     "Data is split by time so the test reflects predicting the future."
    ],
    [
     "Tune with discipline",
     "Tuning uses only validation data and the choices are logged."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Train a logistic regression baseline for churn.",
    "Why split by time rather than randomly for churn?",
    "How do I tune a gradient-boosted model without overfitting?"
   ],
   "reads": [
    [
     "Training models with scikit-learn",
     "Pipelines, baselines and comparisons."
    ],
    [
     "Train, validation and test splits",
     "Why time-based splits matter here."
    ],
    [
     "Hyperparameter tuning",
     "Improving models without fooling yourself."
    ]
   ],
   "community": [
    [
     "play",
     "Baseline to boosted model"
    ],
    [
     "reader",
     "Time-based split guide"
    ],
    [
     "reader",
     "Tuning log template"
    ],
    [
     "play",
     "When the baseline won"
    ]
   ]
  },
  "5": {
   "name": "Model Evaluation",
   "short": "the evaluation",
   "desc": "Evaluate the final model on held-out data with the chosen metric, and check how it performs for different gyms and member types.",
   "leaves": "a model evaluation report",
   "bar": true,
   "rubric": [
    [
     "Score the model",
     "The model is scored on the test set with the chosen metric."
    ],
    [
     "Check the slices",
     "Performance is checked across gyms and member types."
    ],
    [
     "Pick a threshold",
     "A decision threshold is chosen based on what errors cost a gym."
    ],
    [
     "Be honest about limits",
     "You state where the model shouldn't be trusted, with evidence."
    ]
   ],
   "time": "2h",
   "ai": [
    "Plot a precision-recall curve for this model.",
    "How do I choose a threshold for flagging at-risk members?",
    "Check whether the model works equally well for new and long-time members."
   ],
   "reads": [
    [
     "Evaluating classifiers",
     "Curves, thresholds and confusion matrices."
    ],
    [
     "Slice-based evaluation",
     "Finding where a model fails."
    ],
    [
     "Choosing a threshold",
     "Matching predictions to real decisions."
    ]
   ],
   "community": [
    [
     "reader",
     "Evaluation report example"
    ],
    [
     "play",
     "Choosing a threshold with a client"
    ],
    [
     "reader",
     "Slice analysis guide"
    ],
    [
     "play",
     "The gym where the model failed"
    ]
   ],
   "floor": "checks performance across gyms and member types, not just overall",
   "floor_level": 2
  },
  "6": {
   "name": "Model Explainability",
   "short": "the explanations",
   "desc": "Explain what drives the model's predictions overall and for individual members, in terms gym owners understand.",
   "leaves": "a model explainability summary",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "Use SHAP to explain this model's predictions.",
    "Explain why this member was flagged in one sentence for a gym owner.",
    "Which features drive churn predictions most?"
   ],
   "reads": [
    [
     "SHAP explanations",
     "Why the model made each prediction."
    ],
    [
     "Global and local explanations",
     "What drives the model overall versus for one person."
    ],
    [
     "Explaining models to non-experts",
     "Plain-language reasons people trust."
    ]
   ],
   "community": [
    [
     "play",
     "SHAP in 20 minutes"
    ],
    [
     "reader",
     "Explanations owners understood"
    ],
    [
     "reader",
     "Explainability pitfalls"
    ],
    [
     "play",
     "Explaining a prediction to a gym owner"
    ]
   ]
  },
  "7": {
   "name": "Prediction Packaging",
   "short": "the prediction script",
   "desc": "Package the model so it can score this month's members and output a ranked list.",
   "leaves": "a packaged scoring pipeline",
   "bar": false,
   "rubric": [
    [
     "Save the model",
     "The trained model and preprocessing are saved together."
    ],
    [
     "Score new data",
     "A script scores fresh member data and outputs a ranked list."
    ],
    [
     "Make it reproducible",
     "Someone else could retrain and rerun it from the instructions."
    ]
   ],
   "time": "2h",
   "ai": [
    "How do I save a scikit-learn pipeline with its preprocessing?",
    "Write a script that scores new members and outputs a CSV.",
    "What should a model README include?"
   ],
   "reads": [
    [
     "Saving models properly",
     "Pipelines with preprocessing included."
    ],
    [
     "Batch scoring",
     "Running a model on new data each month."
    ],
    [
     "Reproducible ML",
     "Fixed seeds, versions and instructions."
    ]
   ],
   "community": [
    [
     "reader",
     "Scoring script template"
    ],
    [
     "play",
     "Packaging a model"
    ],
    [
     "reader",
     "Model README template"
    ],
    [
     "play",
     "When the retrained model disagreed"
    ]
   ]
  },
  "8": {
   "name": "Model Card & Findings Write-up",
   "short": "the model card",
   "desc": "Write a model card and a short findings summary for GymFlow: what the model does, how well, and its limits.",
   "leaves": "a model card and findings summary",
   "bar": false,
   "rubric": [
    [
     "Write the card",
     "The model card covers purpose, data, performance and limits."
    ],
    [
     "Write for both readers",
     "A summary for gym owners and detail for engineers."
    ],
    [
     "Recommend next steps",
     "It says how GymFlow should use and monitor the model."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Write a model card for this churn model.",
    "Summarise these results for a gym owner in three sentences.",
    "What should GymFlow monitor once this model is in use?"
   ],
   "reads": [
    [
     "Model cards",
     "Documenting what a model is for and its limits."
    ],
    [
     "Communicating ML results",
     "Results people can act on."
    ],
    [
     "Responsible ML",
     "Fairness and privacy for member data."
    ]
   ],
   "community": [
    [
     "reader",
     "Model card example"
    ],
    [
     "play",
     "Presenting a model to a client"
    ],
    [
     "reader",
     "Model card template"
    ],
    [
     "play",
     "Explaining a model's limits"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Pin down the problem",
   "desc": "Define churn, the prediction window and how success is measured.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set up the workspace",
   "desc": "Load the anonymised data into a notebook environment, set up version control and fix random seeds."
  },
  {
   "n": 3,
   "title": "Understand the data",
   "desc": "Clean the records and explore who leaves and when.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 4,
   "title": "Build and train",
   "desc": "Engineer features, train a baseline and better models.",
   "vcs": [
    "3",
    "4"
   ],
   "loop": true,
   "loopnote": "Loops back to step 3: expect a round of new features after the first results."
  },
  {
   "n": 5,
   "title": "Judge it honestly",
   "desc": "Evaluate the model properly and explain what drives it.",
   "vcs": [
    "5",
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Make it usable",
   "desc": "Package the model to score each month's members.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Write it up",
   "desc": "Write the model card and findings for GymFlow.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Framing ML problems",
   "From business question to prediction."
  ],
  [
   "pandas for data cleaning",
   "Getting data ready."
  ],
  [
   "Feature engineering",
   "Turning records into inputs."
  ],
  [
   "scikit-learn",
   "Training and comparing models."
  ],
  [
   "Evaluating classifiers",
   "Metrics, curves and thresholds."
  ],
  [
   "Explaining models",
   "SHAP and plain-language reasons."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the model. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the problem framing or the data exploration: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The features is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the model, evaluate it honestly and package it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the model at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the model counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the model as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "5"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as members kept after being flagged, and build the case study to show you moved it.",
   "pick": "Take the features to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-AI12-KAHAANI-RECS-001",
 "ui": {
  "id": 118,
  "roles": [
   "Machine Learning Engineer"
  ],
  "stage": "Seed-stage startup",
  "category": "AI & Data Science",
  "time": "20-26 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Recommendation System Development",
  "deliverable": "Recommendation Engine",
  "title": "Recommend the next story a listener actually finishes, in their own language",
  "role": "Machine Learning Engineer",
  "industry": "Entertainment & MediaTech",
  "venture": "Kahaani"
 },
 "takeaways": {
  "asset": "A recommendation engine for Kahaani's audio stories, evaluated offline and served through an API, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Data and modelling work: understanding listening behaviour, building recommenders and measuring them fairly."
 },
 "pre": {
  "lede": "You'll build the recommendation engine behind Kahaani's 'Up next' row, suggesting the regional-language audio story a listener is most likely to finish, then evaluate it offline against simple baselines and serve it through an API.",
  "produces": "a recommendation engine: the interaction dataset, candidate and ranking models, offline evaluation, and an API that returns recommendations.",
  "skills_technical": [
   "Python",
   "pandas",
   "Collaborative filtering",
   "Content-based recommendation",
   "Ranking metrics",
   "FastAPI"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Research & Analysis",
   "Problem Solving",
   "Empathy"
  ],
  "capabilities": [
   [
    "Machine Learning",
    "building models that personalise what people see"
   ],
   [
    "Data Engineering",
    "turning listening events into a usable dataset"
   ],
   [
    "Product Thinking",
    "making sure recommendations help listeners, not just metrics"
   ]
  ],
  "resume_line": "Built Kahaani's 'Up next' recommender for regional-language audio stories: a hybrid model that lifted offline recall@10 by 34% over popularity, served through a FastAPI endpoint.",
  "asset_line": "A working recommendation engine with its evaluation and API, held together as one case study."
 },
 "background": {
  "venture": "Kahaani is an audio storytelling app with stories in Hindi, Marathi, Tamil and Bengali, from folk tales to thrillers. Most listeners are on budget phones and listen on commutes.",
  "project": "Kahaani's 'Up next' row currently shows the most popular stories in the listener's language. Completion rates are falling as the library grows. Kahaani wants a real recommender built from anonymised listening history and story metadata.",
  "why": "With 3,000 stories, most listeners never find the ones they'd love; they see the same top ten and drift away. A good recommendation is the difference between finishing a story and closing the app. Popularity alone is a lazy answer that buries most of the library."
 },
 "chirag_intro": "The route from listening logs to an 'Up next' row people finish. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Interaction Data Preparation",
   "short": "the interaction data",
   "desc": "Turn raw listening events into a clean user-story interaction dataset, defining what counts as a positive signal.",
   "leaves": "an interaction dataset",
   "bar": false,
   "rubric": [
    [
     "Build the dataset",
     "Listening events become user-story interactions."
    ],
    [
     "Define the signal",
     "You decide what counts as liking a story, such as finishing it, and say why."
    ],
    [
     "Handle the noise",
     "Accidental plays, bots and very short sessions are handled."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Turn these play events into user-story interactions.",
    "Should a 30% listen count as a positive signal?",
    "How do I spot bot or accidental listens?"
   ],
   "reads": [
    [
     "Implicit feedback",
     "Learning from behaviour rather than ratings."
    ],
    [
     "Preparing interaction data",
     "From events to a user-item matrix."
    ],
    [
     "Defining positive signals",
     "What 'liking' a story means."
    ]
   ],
   "community": [
    [
     "reader",
     "Implicit feedback explained"
    ],
    [
     "play",
     "Building an interaction matrix"
    ],
    [
     "reader",
     "Signal definitions we use"
    ],
    [
     "play",
     "When skips meant something"
    ]
   ]
  },
  "2": {
   "name": "Baseline Recommenders",
   "short": "the baselines",
   "desc": "Build simple baselines (most popular, most popular in language) to measure everything else against.",
   "leaves": "a set of baseline recommenders",
   "bar": false,
   "rubric": [
    [
     "Build baselines",
     "Popularity baselines produce recommendations."
    ],
    [
     "Make them fair",
     "Baselines respect each listener's language."
    ],
    [
     "Score them",
     "Baselines are scored with the same metrics as later models."
    ]
   ],
   "time": "1h",
   "ai": [
    "Write a most-popular-in-language recommender.",
    "Why do we need baselines before building a model?",
    "Score this baseline with recall@10."
   ],
   "reads": [
    [
     "Why baselines matter",
     "Knowing whether a model actually helps."
    ],
    [
     "Popularity recommenders",
     "The simple version to beat."
    ],
    [
     "Ranking metrics",
     "Recall@k, precision@k and NDCG."
    ]
   ],
   "community": [
    [
     "reader",
     "Baselines that were hard to beat"
    ],
    [
     "play",
     "Popularity baseline in pandas"
    ],
    [
     "reader",
     "Ranking metrics cheat sheet"
    ],
    [
     "play",
     "When popularity won"
    ]
   ]
  },
  "3": {
   "name": "Collaborative Filtering Model",
   "short": "the collaborative filtering model",
   "desc": "Train a model that learns from what similar listeners finished.",
   "leaves": "a trained collaborative filtering model",
   "bar": false,
   "rubric": [
    [
     "Train the model",
     "A collaborative filtering model is trained."
    ],
    [
     "Tune it",
     "Key settings are tuned on validation data."
    ],
    [
     "Beat the baseline",
     "It's compared fairly against the baselines."
    ],
    [
     "Understand it",
     "You show what the model has learned, such as similar-story clusters."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Train an implicit ALS model on this interaction data.",
    "How do I choose the number of latent factors?",
    "Show the stories most similar to this one according to the model."
   ],
   "reads": [
    [
     "Collaborative filtering",
     "Learning from what similar people liked."
    ],
    [
     "Matrix factorisation",
     "ALS and latent factors explained."
    ],
    [
     "Tuning recommenders",
     "Settings that matter."
    ]
   ],
   "community": [
    [
     "play",
     "ALS with the implicit library"
    ],
    [
     "reader",
     "Matrix factorisation explained"
    ],
    [
     "reader",
     "Tuning log template"
    ],
    [
     "play",
     "Visualising story embeddings"
    ]
   ]
  },
  "4": {
   "name": "Content-Based & Cold-Start Handling",
   "short": "the cold-start handling",
   "desc": "Use story metadata (language, genre, narrator, length) to recommend for new listeners and new stories.",
   "leaves": "a content-based recommender",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Build a content-based recommender from story metadata.",
    "What should a brand-new listener see?",
    "How can a story with no listens yet get recommended?"
   ],
   "reads": [
    [
     "Content-based recommendation",
     "Recommending from item features."
    ],
    [
     "The cold-start problem",
     "New users and new items."
    ],
    [
     "Hybrid recommenders",
     "Combining behaviour and content."
    ]
   ],
   "community": [
    [
     "reader",
     "Cold-start strategies"
    ],
    [
     "play",
     "Metadata similarity in pandas"
    ],
    [
     "reader",
     "Hybrid recommender example"
    ],
    [
     "play",
     "Onboarding questions for new listeners"
    ]
   ]
  },
  "5": {
   "name": "Offline Evaluation",
   "short": "the offline evaluation",
   "desc": "Evaluate every recommender on held-out listening data with ranking metrics, plus diversity and coverage.",
   "leaves": "an offline evaluation report",
   "bar": true,
   "rubric": [
    [
     "Score everything",
     "All models are scored with ranking metrics."
    ],
    [
     "Split by time",
     "The test set is the most recent listening, so it mimics the future."
    ],
    [
     "Look beyond accuracy",
     "Diversity and catalogue coverage are measured too."
    ],
    [
     "Judge the trade-off",
     "You recommend a model by weighing accuracy against diversity, and defend it."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Compute NDCG@10 for these recommenders.",
    "How do I measure catalogue coverage?",
    "This model is more accurate but less diverse. Which should we ship?"
   ],
   "reads": [
    [
     "Evaluating recommenders offline",
     "Time splits and ranking metrics."
    ],
    [
     "Beyond accuracy",
     "Diversity, novelty and coverage."
    ],
    [
     "Popularity bias",
     "When recommenders only show hits."
    ]
   ],
   "community": [
    [
     "reader",
     "Evaluation report example"
    ],
    [
     "play",
     "Measuring diversity"
    ],
    [
     "reader",
     "Popularity bias explained"
    ],
    [
     "play",
     "The accurate model nobody liked"
    ]
   ],
   "floor": "measures diversity and coverage, not just accuracy, on a time-based split",
   "floor_level": 2
  },
  "6": {
   "name": "Recommendation API",
   "short": "the API",
   "desc": "Serve recommendations through a FastAPI endpoint that responds fast enough for the app.",
   "leaves": "a recommendation API",
   "bar": true,
   "rubric": [
    [
     "Build the endpoint",
     "An API returns recommendations for a listener."
    ],
    [
     "Make it fast",
     "Responses come back in under 200 ms, with precomputed results where needed."
    ],
    [
     "Handle the edges",
     "Unknown listeners and missing stories get sensible fallbacks."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Write a FastAPI endpoint that returns recommendations.",
    "Should recommendations be computed on request or in advance?",
    "What should the API return for an unknown listener?"
   ],
   "reads": [
    [
     "Serving models with FastAPI",
     "Simple, fast prediction APIs."
    ],
    [
     "Precomputing recommendations",
     "Trading freshness for speed."
    ],
    [
     "Fallbacks",
     "Never returning nothing."
    ]
   ],
   "community": [
    [
     "play",
     "FastAPI in 20 minutes"
    ],
    [
     "reader",
     "Serving patterns for recommenders"
    ],
    [
     "reader",
     "Fallback strategies"
    ],
    [
     "play",
     "Load testing a recommendation API"
    ]
   ],
   "floor": "responds fast enough for the app and never returns nothing",
   "floor_level": 2
  },
  "7": {
   "name": "A/B Test Plan",
   "short": "the A/B test plan",
   "desc": "Design the online experiment that would prove the new recommender beats the current row.",
   "leaves": "an A/B test plan",
   "bar": false,
   "rubric": [
    [
     "Plan the test",
     "Groups, duration and success metric are defined."
    ],
    [
     "Size it",
     "The sample size needed to detect a real difference is worked out."
    ],
    [
     "Guard against harm",
     "Guardrail metrics are set, so a bad version is stopped early."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Design an A/B test for a new recommendation row.",
    "How many listeners do we need to detect a 5% lift?",
    "What guardrail metrics should we watch?"
   ],
   "reads": [
    [
     "A/B testing basics",
     "Proving a change works with real users."
    ],
    [
     "Sample size",
     "How many users you need."
    ],
    [
     "Guardrail metrics",
     "Making sure nothing else gets worse."
    ]
   ],
   "community": [
    [
     "reader",
     "A/B test plan template"
    ],
    [
     "play",
     "Sample size calculator walkthrough"
    ],
    [
     "reader",
     "Guardrails explained"
    ],
    [
     "play",
     "An experiment we stopped early"
    ]
   ]
  },
  "8": {
   "name": "Recommender Write-up",
   "short": "the write-up",
   "desc": "Write up the approach, results and recommendation for Kahaani's team.",
   "leaves": "a recommender case study",
   "bar": false,
   "rubric": [
    [
     "Explain the approach",
     "The approach and models are explained."
    ],
    [
     "Show the results",
     "Results are compared clearly against the baselines."
    ],
    [
     "Recommend next steps",
     "It says what to ship and what to test next."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline a recommender system write-up.",
    "Summarise these results for a product manager.",
    "What should Kahaani do next with this recommender?"
   ],
   "reads": [
    [
     "Writing ML case studies",
     "Showing your thinking and your results."
    ],
    [
     "Communicating to product teams",
     "Results that lead to decisions."
    ],
    [
     "Responsible recommendation",
     "Avoiding filter bubbles and bias."
    ]
   ],
   "community": [
    [
     "reader",
     "Recommender case study example"
    ],
    [
     "play",
     "Presenting to a product team"
    ],
    [
     "reader",
     "Write-up template"
    ],
    [
     "play",
     "Explaining recall to a PM"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Shape the data",
   "desc": "Turn listening events into an interaction dataset and decide what counts as liking a story.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Set the bar",
   "desc": "Build simple baselines to measure everything else against.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Set up the environment",
   "desc": "Set up the notebook environment, data splits by time and an evaluation harness every model will use."
  },
  {
   "n": 4,
   "title": "Build the models",
   "desc": "Train a collaborative filtering model and a content-based model for cold start.",
   "vcs": [
    "3",
    "4"
   ],
   "loop": true,
   "loopnote": "Loops back to step 2: expect a few rounds of compare and tune."
  },
  {
   "n": 5,
   "title": "Measure fairly",
   "desc": "Evaluate every model on held-out data, including diversity and coverage.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 6,
   "title": "Serve it",
   "desc": "Build the API and plan the online test.",
   "vcs": [
    "6",
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Write it up",
   "desc": "Write the approach, results and recommendation.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Implicit feedback",
   "Learning from behaviour."
  ],
  [
   "Collaborative filtering",
   "Matrix factorisation and ALS."
  ],
  [
   "The cold-start problem",
   "New users and new items."
  ],
  [
   "Evaluating recommenders",
   "Ranking metrics and time splits."
  ],
  [
   "Serving models with FastAPI",
   "Fast prediction APIs."
  ],
  [
   "A/B testing",
   "Proving it works with real users."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the recommendation engine. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the interaction data or the baselines: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The collaborative filtering model is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the recommender, evaluate it and serve it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the recommendation engine at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "5",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the recommendation engine counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the recommendation engine as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "5",
    "6"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as stories finished per listener, and build the case study to show you moved it.",
   "pick": "Take the cold-start handling to L5: the version only you could have done.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-AI08-CROPSENSE-MLOPS-001",
 "ui": {
  "id": 119,
  "roles": [
   "Machine Learning Engineer",
   "NLP / Generative AI Engineer"
  ],
  "stage": "Seed-stage startup",
  "category": "AI & Data Science",
  "time": "20-28 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Model Deployment & MLOps Pipeline Build",
  "deliverable": "MLOps Pipeline",
  "title": "Get a crop disease model out of a notebook and into farmers' hands",
  "role": "Machine Learning Engineer",
  "industry": "AgriTech & Food Security",
  "venture": "CropSense"
 },
 "takeaways": {
  "asset": "A working MLOps pipeline that tests, packages, deploys and monitors CropSense's model, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Engineering around models: packaging, automation, deployment and watching it in production."
 },
 "pre": {
  "lede": "You'll take CropSense's crop disease model from a notebook to production: package it as an API, containerise it, automate testing and deployment, track model versions and set up monitoring, so a new model can ship safely in an afternoon.",
  "produces": "an MLOps pipeline: a containerised model API, a CI/CD pipeline, a model registry, and monitoring with alerts.",
  "skills_technical": [
   "Python",
   "FastAPI",
   "Docker",
   "GitHub Actions",
   "MLflow",
   "Model monitoring",
   "Cloud deployment"
  ],
  "skills_transferable": [
   "Problem Solving",
   "Attention to Detail",
   "Written Communication",
   "Collaboration"
  ],
  "capabilities": [
   [
    "MLOps",
    "getting models into production and keeping them healthy"
   ],
   [
    "DevOps & CI/CD",
    "automating testing and deployment"
   ],
   [
    "Machine Learning",
    "understanding models well enough to deploy them safely"
   ]
  ],
  "resume_line": "Built CropSense's MLOps pipeline: a Dockerised FastAPI model service, CI/CD with automated model checks, MLflow versioning and drift monitoring, cutting model release time from two weeks to one afternoon.",
  "asset_line": "A working MLOps pipeline with its deployment, monitoring and runbook, held together as one case study."
 },
 "background": {
  "venture": "CropSense lets farmers photograph a leaf with their phone and get a likely diagnosis of crop disease, with advice in their language. It works through agricultural cooperatives in Maharashtra and Karnataka.",
  "project": "The data scientists have a good model, but every update means a researcher copying files to a server by hand, and nobody knows which version is live. CropSense wants a proper pipeline: package, test, deploy, version and monitor, before the monsoon season brings a surge in use.",
  "why": "During monsoon, a wrong or unavailable diagnosis can cost a farmer a season's crop. Manual deployments have already shipped a broken model once. A pipeline that tests every model before release, knows what's live and alerts when something drifts is what makes the model trustworthy."
 },
 "chirag_intro": "The route from a model in a notebook to one that ships and stays healthy. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Model Packaging",
   "short": "the model packaging",
   "desc": "Turn the notebook into a clean, tested Python package with pinned dependencies.",
   "leaves": "a packaged model module",
   "bar": false,
   "rubric": [
    [
     "Extract the code",
     "Preprocessing and prediction code is moved out of the notebook."
    ],
    [
     "Pin it",
     "Dependencies are pinned and the package installs cleanly."
    ],
    [
     "Test it",
     "Unit tests check preprocessing and prediction on sample images."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Refactor this notebook into a Python package.",
    "How do I pin dependencies so the model behaves the same everywhere?",
    "Write unit tests for an image preprocessing function."
   ],
   "reads": [
    [
     "From notebook to package",
     "Turning research code into production code."
    ],
    [
     "Dependency management",
     "Pinning versions so results are reproducible."
    ],
    [
     "Testing ML code",
     "What to test in preprocessing and prediction."
    ]
   ],
   "community": [
    [
     "play",
     "Refactoring a notebook"
    ],
    [
     "reader",
     "Project structure for ML code"
    ],
    [
     "reader",
     "Testing ML code checklist"
    ],
    [
     "play",
     "The dependency that changed predictions"
    ]
   ]
  },
  "2": {
   "name": "Model Serving API",
   "short": "the serving API",
   "desc": "Wrap the model in a FastAPI service with input validation, health checks and clear errors.",
   "leaves": "a model serving API",
   "bar": true,
   "rubric": [
    [
     "Serve predictions",
     "An endpoint returns predictions for an uploaded image."
    ],
    [
     "Validate inputs",
     "Bad images, wrong sizes and huge files get clear errors."
    ],
    [
     "Add health checks",
     "The service reports whether it and its model are ready."
    ],
    [
     "Design for production",
     "Logging, timeouts and model loading are handled for real traffic."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Write a FastAPI endpoint that accepts an image and returns a prediction.",
    "How should the API respond to a blurry or wrong-size image?",
    "What should a health check endpoint verify?"
   ],
   "reads": [
    [
     "Serving models with FastAPI",
     "Simple, typed prediction APIs."
    ],
    [
     "Input validation",
     "Rejecting bad inputs clearly."
    ],
    [
     "Health and readiness checks",
     "Knowing a service is ready."
    ]
   ],
   "community": [
    [
     "play",
     "Model API in FastAPI"
    ],
    [
     "reader",
     "API design for ML services"
    ],
    [
     "reader",
     "Health check patterns"
    ],
    [
     "play",
     "Handling bad uploads"
    ]
   ],
   "floor": "validates inputs and reports its health, not just the happy path",
   "floor_level": 2
  },
  "3": {
   "name": "Containerisation",
   "short": "the container",
   "desc": "Package the API and model into a Docker image that runs the same everywhere.",
   "leaves": "a Docker image",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write a Dockerfile for a FastAPI model service.",
    "How do I make this Docker image smaller?",
    "Where should model weights live: in the image or downloaded at start?"
   ],
   "reads": [
    [
     "Docker basics",
     "Images, containers and Dockerfiles."
    ],
    [
     "Smaller, faster images",
     "Multi-stage builds and slim bases."
    ],
    [
     "Handling model files",
     "Baking in versus downloading weights."
    ]
   ],
   "community": [
    [
     "play",
     "Dockerising a model API"
    ],
    [
     "reader",
     "Dockerfile best practices"
    ],
    [
     "reader",
     "Image size tricks"
    ],
    [
     "play",
     "Debugging a container that won't start"
    ]
   ]
  },
  "4": {
   "name": "Model Registry & Versioning",
   "short": "the model registry",
   "desc": "Track every model version with its metrics and data, and record which version is live.",
   "leaves": "a model registry setup",
   "bar": false,
   "rubric": [
    [
     "Register models",
     "Model versions are logged with their metrics."
    ],
    [
     "Link the lineage",
     "Each version records its training data and code version."
    ],
    [
     "Promote with control",
     "Moving a model to production is a recorded, reversible step."
    ]
   ],
   "time": "2h",
   "ai": [
    "Set up MLflow to log a model and its metrics.",
    "How do I record which data a model was trained on?",
    "How do I roll back to the previous model version?"
   ],
   "reads": [
    [
     "MLflow basics",
     "Tracking experiments and registering models."
    ],
    [
     "Model lineage",
     "Knowing what made each model."
    ],
    [
     "Promotion and rollback",
     "Changing the live model safely."
    ]
   ],
   "community": [
    [
     "play",
     "MLflow registry walkthrough"
    ],
    [
     "reader",
     "Model versioning strategies"
    ],
    [
     "reader",
     "Rollback runbook"
    ],
    [
     "play",
     "When we didn't know which model was live"
    ]
   ]
  },
  "5": {
   "name": "CI/CD Pipeline",
   "short": "the CI/CD pipeline",
   "desc": "Automate testing, model quality checks, building and deployment on every change.",
   "leaves": "a CI/CD pipeline",
   "bar": true,
   "rubric": [
    [
     "Automate tests",
     "Tests run on every change."
    ],
    [
     "Gate on model quality",
     "A model that scores below the live one on a fixed test set is blocked automatically."
    ],
    [
     "Deploy automatically",
     "Passing changes build and deploy to staging, then production with approval."
    ],
    [
     "Make it safe",
     "Failed deployments roll back on their own, and you show it working."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Write a GitHub Actions workflow that tests and builds a Docker image.",
    "How do I block a model that performs worse than the live one?",
    "How do I add a manual approval before production deploys?"
   ],
   "reads": [
    [
     "CI/CD with GitHub Actions",
     "Automating test, build and deploy."
    ],
    [
     "Model quality gates",
     "Never shipping a worse model."
    ],
    [
     "Safe deployments",
     "Staging, approvals and rollbacks."
    ]
   ],
   "community": [
    [
     "play",
     "CI/CD for a model service"
    ],
    [
     "reader",
     "Quality gate examples"
    ],
    [
     "reader",
     "Deployment strategies compared"
    ],
    [
     "play",
     "The quality gate that saved a release"
    ]
   ],
   "floor": "blocks a model that performs worse than the live one before it ships",
   "floor_level": 2
  },
  "6": {
   "name": "Cloud Deployment",
   "short": "the deployment",
   "desc": "Deploy the container to a cloud service with autoscaling for the monsoon peak.",
   "leaves": "a deployed model service",
   "bar": false,
   "rubric": [
    [
     "Deploy it",
     "The service runs in the cloud at a stable URL."
    ],
    [
     "Scale it",
     "It scales up for peak traffic and down when quiet."
    ],
    [
     "Secure it",
     "Secrets are kept out of code and access is restricted."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "How do I deploy a container to Google Cloud Run?",
    "Set autoscaling limits for a seasonal traffic peak.",
    "Where should API keys and credentials be stored?"
   ],
   "reads": [
    [
     "Deploying containers to the cloud",
     "Cloud Run, App Runner and similar."
    ],
    [
     "Autoscaling",
     "Handling peaks without paying for idle."
    ],
    [
     "Managing secrets",
     "Keeping credentials safe."
    ]
   ],
   "community": [
    [
     "play",
     "Deploying to Cloud Run"
    ],
    [
     "reader",
     "Autoscaling settings explained"
    ],
    [
     "reader",
     "Secrets management guide"
    ],
    [
     "play",
     "Our first monsoon traffic spike"
    ]
   ]
  },
  "7": {
   "name": "Monitoring & Drift Alerts",
   "short": "the monitoring",
   "desc": "Monitor latency, errors and prediction drift, with alerts when the model starts seeing different images than it was trained on.",
   "leaves": "a monitoring dashboard with alerts",
   "bar": true,
   "rubric": [
    [
     "Monitor the service",
     "Latency, errors and traffic are on a dashboard."
    ],
    [
     "Monitor the model",
     "Prediction distribution and input drift are tracked."
    ],
    [
     "Alert on problems",
     "Alerts fire on errors and drift, with thresholds you can justify."
    ],
    [
     "Close the loop",
     "Drift alerts lead to a documented retraining process."
    ]
   ],
   "time": "3h",
   "ai": [
    "What should I monitor for an image classification model?",
    "How do I detect drift in incoming images?",
    "Set alert thresholds that won't fire constantly."
   ],
   "reads": [
    [
     "Monitoring ML in production",
     "Service health and model health."
    ],
    [
     "Data and prediction drift",
     "Noticing when the world changes."
    ],
    [
     "Alerting without noise",
     "Alerts people actually respond to."
    ]
   ],
   "community": [
    [
     "reader",
     "Monitoring dashboard example"
    ],
    [
     "play",
     "Detecting drift with Evidently"
    ],
    [
     "reader",
     "Alert threshold guide"
    ],
    [
     "play",
     "The drift alert that caught a new disease"
    ]
   ],
   "floor": "tracks the model's predictions and inputs, not just whether the service is up",
   "floor_level": 2
  },
  "8": {
   "name": "Runbook & Handover",
   "short": "the runbook",
   "desc": "Write the runbook: how to release a new model, roll back, and respond to alerts.",
   "leaves": "a pipeline runbook",
   "bar": false,
   "rubric": [
    [
     "Document the pipeline",
     "The pipeline's parts and flow are documented."
    ],
    [
     "Write the procedures",
     "Release, rollback and alert response are step by step."
    ],
    [
     "Test the runbook",
     "A teammate follows it to release a model without your help."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline a runbook for an MLOps pipeline.",
    "Write step-by-step rollback instructions.",
    "What should someone do when a drift alert fires?"
   ],
   "reads": [
    [
     "Writing runbooks",
     "Procedures that work under pressure."
    ],
    [
     "Incident response basics",
     "What to do when alerts fire."
    ],
    [
     "Handover documentation",
     "Making the pipeline the team's, not yours."
    ]
   ],
   "community": [
    [
     "reader",
     "Runbook template"
    ],
    [
     "play",
     "Running a rollback drill"
    ],
    [
     "reader",
     "Incident response checklist"
    ],
    [
     "play",
     "Handing over a pipeline"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Get the model out of the notebook",
   "desc": "Package the model code with tests and pinned dependencies.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Wrap and box it",
   "desc": "Serve the model through an API and containerise it.",
   "vcs": [
    "2",
    "3"
   ]
  },
  {
   "n": 3,
   "title": "Set up the cloud accounts",
   "desc": "Set up the cloud project, container registry, access permissions and a staging environment."
  },
  {
   "n": 4,
   "title": "Automate the release",
   "desc": "Version every model and automate testing, quality checks and deployment.",
   "vcs": [
    "4",
    "5"
   ],
   "loop": true,
   "loopnote": "Loops back to step 2: expect fixes when the pipeline first runs end to end."
  },
  {
   "n": 5,
   "title": "Ship it",
   "desc": "Deploy the service with autoscaling for the monsoon peak.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Watch it",
   "desc": "Monitor the service and the model, with alerts for drift.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Hand it over",
   "desc": "Write the runbook and have a teammate release a model with it.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "From notebook to production",
   "Turning research code into a service."
  ],
  [
   "FastAPI for models",
   "Serving predictions."
  ],
  [
   "Docker",
   "Running the same everywhere."
  ],
  [
   "MLflow",
   "Versioning models."
  ],
  [
   "CI/CD for ML",
   "Testing and deploying automatically."
  ],
  [
   "Monitoring ML in production",
   "Health and drift."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the pipeline. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the model packaging or the serving API: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The container is where an L2 is most within reach here.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the pipeline end to end and hand it over.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the pipeline at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "5",
    "7"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the pipeline counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the pipeline as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "5",
    "7"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as time from new model to live, and build the case study to show you moved it.",
   "pick": "Take the CI/CD pipeline to L5: the version only you could have done.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-AI06-PAISASAATHI-TICKETS-001",
 "ui": {
  "id": 120,
  "roles": [
   "NLP / Generative AI Engineer"
  ],
  "stage": "Series A startup",
  "category": "AI & Data Science",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "NLP Application Development",
  "deliverable": "NLP Application / Service",
  "title": "Teach a payments app to understand its customers' Hinglish complaints",
  "role": "NLP / Generative AI Engineer",
  "industry": "FinTech & DeFi",
  "venture": "Paisa Saathi"
 },
 "takeaways": {
  "asset": "An NLP service that classifies and routes Paisa Saathi's support tickets, evaluated and deployed, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Language and data work: messy real text, careful labelling, models and honest evaluation."
 },
 "pre": {
  "lede": "You'll build an NLP service that reads Paisa Saathi's support tickets, written in English, Hindi and a lot of Hinglish, works out what each is about and how urgent it is, and routes it to the right team, then evaluate it and serve it as an API.",
  "produces": "an NLP application: a labelled dataset, a trained and evaluated classifier, and an API the support tool calls.",
  "skills_technical": [
   "Python",
   "Hugging Face Transformers",
   "Text classification",
   "Data labelling",
   "Multilingual NLP",
   "FastAPI"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Attention to Detail",
   "Empathy",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Natural Language Processing",
    "building models that understand real, messy text"
   ],
   [
    "Machine Learning",
    "training and evaluating models properly"
   ],
   [
    "Data Engineering",
    "building the labelled data a model learns from"
   ]
  ],
  "resume_line": "Built Paisa Saathi's support ticket classifier for English, Hindi and Hinglish: a fine-tuned multilingual model reaching 0.88 macro-F1 across 9 categories, cutting misrouted urgent tickets by 70% in testing.",
  "asset_line": "A deployed ticket classification service with its labelled data and evaluation, held together as one case study."
 },
 "background": {
  "venture": "Paisa Saathi is a UPI payments and micro-savings app for small-town India. Its 2 million users write to support in whatever mix of English, Hindi and Hinglish comes naturally.",
  "project": "Support receives 4,000 tickets a day, sorted by hand into nine queues. Urgent ones, like money debited but not received, often wait hours in the wrong queue. Paisa Saathi wants a model that categorises tickets and flags urgent ones automatically, using anonymised historical tickets.",
  "why": "When someone's money is stuck, every hour of waiting destroys trust in a payments app. Agents spend a third of their day just sorting tickets. Keyword rules fail on Hinglish. A model that understands how customers actually write gets urgent problems to the right person fast."
 },
 "chirag_intro": "The route from a pile of Hinglish tickets to a service that routes them. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Label Schema Design",
   "short": "the label schema",
   "desc": "Define the categories and urgency levels clearly enough that two people would label the same ticket the same way.",
   "leaves": "a labelling guide",
   "bar": false,
   "rubric": [
    [
     "Define the labels",
     "Categories and urgency levels are defined."
    ],
    [
     "Write the rules",
     "Each label has a definition, examples and edge cases."
    ],
    [
     "Test agreement",
     "Two labellers label the same tickets and their agreement is measured."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Suggest support ticket categories for a payments app.",
    "Write a labelling guide with edge cases.",
    "How do I measure agreement between two labellers?"
   ],
   "reads": [
    [
     "Designing label schemas",
     "Categories that people agree on."
    ],
    [
     "Writing labelling guidelines",
     "Definitions, examples and edge cases."
    ],
    [
     "Inter-annotator agreement",
     "Measuring whether labels are consistent."
    ]
   ],
   "community": [
    [
     "reader",
     "Labelling guide example"
    ],
    [
     "play",
     "Running a labelling calibration"
    ],
    [
     "reader",
     "Cohen's kappa explained"
    ],
    [
     "play",
     "When the categories overlapped"
    ]
   ]
  },
  "2": {
   "name": "Dataset Labelling & Cleaning",
   "short": "the labelled dataset",
   "desc": "Label a few thousand tickets, clean the text, and remove personal details.",
   "leaves": "a labelled ticket dataset",
   "bar": true,
   "rubric": [
    [
     "Label the tickets",
     "A few thousand tickets are labelled."
    ],
    [
     "Clean the text",
     "Text is normalised while keeping Hinglish intact."
    ],
    [
     "Protect privacy",
     "Names, phone numbers and account details are masked."
    ],
    [
     "Check quality",
     "You audit a sample of labels and fix systematic errors."
    ]
   ],
   "time": "4-5h",
   "ai": [
    "How should I clean Hinglish text without destroying meaning?",
    "Write a function that masks phone numbers and UPI IDs.",
    "How many labelled tickets do I need per category?"
   ],
   "reads": [
    [
     "Cleaning multilingual text",
     "Normalising without losing meaning."
    ],
    [
     "Masking personal data",
     "Protecting customer privacy."
    ],
    [
     "Labelling efficiently",
     "Getting quality labels faster."
    ]
   ],
   "community": [
    [
     "play",
     "Labelling with Label Studio"
    ],
    [
     "reader",
     "PII masking patterns"
    ],
    [
     "reader",
     "Hinglish text quirks"
    ],
    [
     "play",
     "Auditing a labelled dataset"
    ]
   ],
   "floor": "masks every phone number, name and account detail before modelling",
   "floor_level": 2
  },
  "3": {
   "name": "Baseline Classifier",
   "short": "the baseline",
   "desc": "Build a simple TF-IDF and logistic regression baseline to beat.",
   "leaves": "a baseline classifier",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Build a TF-IDF and logistic regression ticket classifier.",
    "Use character n-grams to handle Hinglish spelling variety.",
    "Score this baseline with macro-F1."
   ],
   "reads": [
    [
     "Text classification baselines",
     "TF-IDF and linear models."
    ],
    [
     "Character n-grams",
     "Handling spelling variation."
    ],
    [
     "Macro-F1",
     "Fair scoring when categories are uneven."
    ]
   ],
   "community": [
    [
     "play",
     "TF-IDF baseline in scikit-learn"
    ],
    [
     "reader",
     "Why baselines matter in NLP"
    ],
    [
     "reader",
     "Metrics for imbalanced classes"
    ],
    [
     "play",
     "The baseline that was nearly enough"
    ]
   ]
  },
  "4": {
   "name": "Transformer Fine-Tuning",
   "short": "the fine-tuning",
   "desc": "Fine-tune a multilingual transformer on the labelled tickets.",
   "leaves": "a fine-tuned classifier",
   "bar": false,
   "rubric": [
    [
     "Fine-tune a model",
     "A multilingual transformer is fine-tuned."
    ],
    [
     "Train with care",
     "Class imbalance, validation and early stopping are handled."
    ],
    [
     "Beat the baseline",
     "It's compared fairly against the baseline on the same test set."
    ],
    [
     "Choose wisely",
     "You pick a model by weighing accuracy against speed and cost, and defend it."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Fine-tune a multilingual BERT model for text classification.",
    "How do I handle class imbalance during fine-tuning?",
    "Is a smaller distilled model good enough here?"
   ],
   "reads": [
    [
     "Fine-tuning transformers",
     "With the Hugging Face Trainer."
    ],
    [
     "Multilingual models",
     "Models that handle Hindi and Hinglish."
    ],
    [
     "Speed versus accuracy",
     "Choosing a model you can afford to run."
    ]
   ],
   "community": [
    [
     "play",
     "Fine-tuning with Hugging Face"
    ],
    [
     "reader",
     "Multilingual model comparison"
    ],
    [
     "reader",
     "Handling class imbalance"
    ],
    [
     "play",
     "Distilled vs full model"
    ]
   ]
  },
  "5": {
   "name": "Error Analysis",
   "short": "the error analysis",
   "desc": "Study where the model gets it wrong and why: languages, categories and tricky phrasings.",
   "leaves": "an error analysis",
   "bar": true,
   "rubric": [
    [
     "Find the errors",
     "Misclassified tickets are collected."
    ],
    [
     "Group them",
     "Errors are grouped by cause, such as language mix or overlapping categories."
    ],
    [
     "Act on them",
     "Fixes, like more data or clearer labels, are made and measured."
    ],
    [
     "Find the hidden failure",
     "You find a group of customers the model consistently fails, with evidence."
    ]
   ],
   "time": "2h",
   "ai": [
    "Group these misclassified tickets by likely cause.",
    "Is the model worse on Hindi than English tickets?",
    "Which errors matter most for urgent tickets?"
   ],
   "reads": [
    [
     "Error analysis in NLP",
     "Learning from what the model gets wrong."
    ],
    [
     "Slice-based evaluation",
     "Performance by language and category."
    ],
    [
     "Fixing data, not just models",
     "Most gains come from better data."
    ]
   ],
   "community": [
    [
     "reader",
     "Error analysis template"
    ],
    [
     "play",
     "Reading model mistakes"
    ],
    [
     "reader",
     "Slice evaluation example"
    ],
    [
     "play",
     "The category that confused everyone"
    ]
   ],
   "floor": "checks performance separately for English, Hindi and Hinglish tickets",
   "floor_level": 2
  },
  "6": {
   "name": "Urgency Routing Logic",
   "short": "the routing logic",
   "desc": "Combine the category and urgency predictions with confidence thresholds to route tickets, sending unsure ones to a human.",
   "leaves": "a routing rules module",
   "bar": false,
   "rubric": [
    [
     "Route tickets",
     "Predictions map to team queues."
    ],
    [
     "Use confidence",
     "Low-confidence tickets go to a human for review."
    ],
    [
     "Protect urgent cases",
     "Urgent tickets are never auto-routed on low confidence, and you show the trade-off."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write routing rules that use model confidence.",
    "What confidence threshold should send a ticket to a human?",
    "How do I make sure no urgent ticket gets lost?"
   ],
   "reads": [
    [
     "Confidence thresholds",
     "When to trust the model and when to ask a human."
    ],
    [
     "Human-in-the-loop systems",
     "Combining models and people."
    ],
    [
     "Calibrating models",
     "Making confidence scores mean something."
    ]
   ],
   "community": [
    [
     "reader",
     "Human-in-the-loop routing"
    ],
    [
     "play",
     "Choosing thresholds"
    ],
    [
     "reader",
     "Calibration explained"
    ],
    [
     "play",
     "The urgent ticket we almost missed"
    ]
   ]
  },
  "7": {
   "name": "Classification API",
   "short": "the API",
   "desc": "Serve the classifier and routing logic through an API the support tool can call.",
   "leaves": "a classification API",
   "bar": false,
   "rubric": [
    [
     "Serve predictions",
     "An API returns category, urgency and route."
    ],
    [
     "Make it fast",
     "Responses come back quickly enough for live ticket intake."
    ],
    [
     "Log for improvement",
     "Predictions and agent corrections are logged for retraining."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Write a FastAPI endpoint for ticket classification.",
    "How do I speed up transformer inference on CPU?",
    "How should agent corrections be logged for retraining?"
   ],
   "reads": [
    [
     "Serving NLP models",
     "Fast inference APIs."
    ],
    [
     "Speeding up inference",
     "Batching, ONNX and smaller models."
    ],
    [
     "Feedback loops",
     "Learning from agent corrections."
    ]
   ],
   "community": [
    [
     "play",
     "Serving a Hugging Face model"
    ],
    [
     "reader",
     "CPU inference tricks"
    ],
    [
     "reader",
     "Feedback logging design"
    ],
    [
     "play",
     "Making inference 5x faster"
    ]
   ]
  },
  "8": {
   "name": "Results Write-up",
   "short": "the write-up",
   "desc": "Write up the approach, results, limits and how support should use the system.",
   "leaves": "an NLP project write-up",
   "bar": false,
   "rubric": [
    [
     "Explain the system",
     "Approach and results are explained."
    ],
    [
     "Be clear about limits",
     "Where the model is weak and what humans still do is stated."
    ],
    [
     "Recommend next steps",
     "It says how to monitor and improve the system."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline an NLP project write-up for a support team.",
    "Explain macro-F1 to a support manager.",
    "What should the team monitor after launch?"
   ],
   "reads": [
    [
     "Writing ML case studies",
     "Your thinking and your results."
    ],
    [
     "Explaining models to operations teams",
     "What it does and doesn't do."
    ],
    [
     "Responsible NLP",
     "Bias across languages and privacy."
    ]
   ],
   "community": [
    [
     "reader",
     "NLP case study example"
    ],
    [
     "play",
     "Presenting to a support team"
    ],
    [
     "reader",
     "Write-up template"
    ],
    [
     "play",
     "Explaining model limits"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Decide what to predict",
   "desc": "Define the categories and urgency levels, with a guide clear enough for consistent labels.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Build the dataset",
   "desc": "Label, clean and anonymise a few thousand tickets.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Set up the environment",
   "desc": "Set up a GPU notebook, experiment tracking and a fixed test set every model is scored on."
  },
  {
   "n": 4,
   "title": "Train the models",
   "desc": "Build a baseline, then fine-tune a multilingual transformer.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Learn from mistakes",
   "desc": "Analyse errors, fix the data and retrain.",
   "vcs": [
    "5"
   ],
   "loop": true,
   "loopnote": "Loops back to step 2: expect one or two rounds of data fixes."
  },
  {
   "n": 6,
   "title": "Route and serve",
   "desc": "Build the routing logic and the API.",
   "vcs": [
    "6",
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Write it up",
   "desc": "Write up the approach, results and limits.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Label schema design",
   "Categories people agree on."
  ],
  [
   "Multilingual NLP",
   "Handling Hindi and Hinglish."
  ],
  [
   "Text classification baselines",
   "TF-IDF and linear models."
  ],
  [
   "Fine-tuning transformers",
   "Hugging Face basics."
  ],
  [
   "Error analysis",
   "Learning from mistakes."
  ],
  [
   "Human-in-the-loop systems",
   "Models and people together."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the ticket classifier. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the label schema or the baseline: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The fine-tuning is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the dataset, train the classifier and serve it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the ticket classifier at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "2",
    "4",
    "5"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the ticket classifier counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the ticket classifier as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "4",
    "5"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as time to resolve urgent tickets, and build the case study to show you moved it.",
   "pick": "Take the error analysis to L5: the version only you could have done.",
   "nudge": [
    "5"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-AI07-ASKQUAD-RAG-001",
 "ui": {
  "id": 121,
  "roles": [
   "NLP / Generative AI Engineer"
  ],
  "stage": "Pre-seed startup",
  "category": "AI & Data Science",
  "time": "20-26 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Generative AI Agent / Assistant Development",
  "deliverable": "Deployed AI Agent",
  "title": "Build the assistant that answers every 'can I…?' question about university rules, with sources",
  "role": "NLP / Generative AI Engineer",
  "industry": "EduTech & Talent",
  "venture": "AskQuad"
 },
 "takeaways": {
  "asset": "A deployed AI assistant that answers students' questions from their university's documents, with citations and evaluation, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Building with language models: retrieval, prompts, guardrails and, above all, measuring whether the answers are right."
 },
 "pre": {
  "lede": "You'll build AskQuad's assistant for one university: it answers students' questions about attendance rules, exams, hostels and scholarships from the university's own documents, cites its sources, and says 'I don't know' rather than inventing an answer.",
  "produces": "a deployed AI agent: the document pipeline, the retrieval-augmented assistant, an evaluation set and results, guardrails and a simple chat interface.",
  "skills_technical": [
   "Python",
   "LLM APIs",
   "Retrieval-augmented generation",
   "Embeddings & vector search",
   "Prompt engineering",
   "LLM evaluation"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Attention to Detail",
   "Empathy",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Generative AI Engineering",
    "building assistants on top of language models"
   ],
   [
    "Natural Language Processing",
    "working with real documents and questions"
   ],
   [
    "Quality Engineering",
    "measuring whether an AI system's answers are right"
   ]
  ],
  "resume_line": "Built AskQuad's retrieval-augmented assistant for a 12,000-student university: 340 documents indexed, cited answers, and an evaluation set of 150 real questions with 91% answer accuracy and refusals on out-of-scope queries.",
  "asset_line": "A deployed AI assistant with its evaluation and guardrails, held together as one case study."
 },
 "background": {
  "venture": "AskQuad builds AI help desks for universities, answering the questions students ask the administration office hundreds of times a week.",
  "project": "A partner university has given AskQuad 340 documents: ordinances, the student handbook, exam rules, hostel and scholarship circulars. It wants an assistant students can ask in plain language, which answers with sources and never makes rules up.",
  "why": "Students wait in queues or in WhatsApp groups full of wrong answers to learn basic rules, like how much attendance they need to sit an exam. An assistant that invents a rule is worse than none: a student could miss an exam because of it. Getting answers right, with sources, is the whole product."
 },
 "chirag_intro": "The route from a folder of circulars to an assistant students can trust. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Document Ingestion & Chunking",
   "short": "the document pipeline",
   "desc": "Extract text from PDFs and circulars, clean it, and split it into chunks that keep each rule intact.",
   "leaves": "a document processing pipeline",
   "bar": false,
   "rubric": [
    [
     "Extract the text",
     "Text is extracted from every document, including scanned ones."
    ],
    [
     "Chunk it well",
     "Chunks keep rules and their conditions together, with source and section recorded."
    ],
    [
     "Handle the mess",
     "Tables, headers and outdated circulars are handled, with your reasoning."
    ]
   ],
   "time": "3h",
   "ai": [
    "How do I extract text from scanned PDFs?",
    "What chunk size keeps a university rule intact?",
    "How should I handle a circular that replaces an older one?"
   ],
   "reads": [
    [
     "Document parsing",
     "Getting clean text from PDFs and scans."
    ],
    [
     "Chunking strategies",
     "Splitting documents so retrieval works."
    ],
    [
     "Metadata for retrieval",
     "Recording source, section and date."
    ]
   ],
   "community": [
    [
     "play",
     "Parsing messy PDFs"
    ],
    [
     "reader",
     "Chunking strategies compared"
    ],
    [
     "reader",
     "Handling superseded documents"
    ],
    [
     "play",
     "The table that broke retrieval"
    ]
   ]
  },
  "2": {
   "name": "Embedding & Vector Index",
   "short": "the vector index",
   "desc": "Embed the chunks and build a searchable index.",
   "leaves": "a vector index",
   "bar": false,
   "rubric": [
    [
     "Build the index",
     "Chunks are embedded and indexed."
    ],
    [
     "Choose the model",
     "An embedding model is chosen with a reason, including how it handles Hindi."
    ],
    [
     "Test retrieval",
     "Sample questions retrieve the right chunks, and you measure how often."
    ]
   ],
   "time": "2h",
   "ai": [
    "Compare embedding models for English and Hindi text.",
    "Set up a vector index with Chroma or pgvector.",
    "How do I measure whether retrieval finds the right chunks?"
   ],
   "reads": [
    [
     "Embeddings explained",
     "Turning text into searchable vectors."
    ],
    [
     "Vector databases",
     "Chroma, pgvector and when to use each."
    ],
    [
     "Measuring retrieval",
     "Recall@k for search."
    ]
   ],
   "community": [
    [
     "play",
     "Building a vector index"
    ],
    [
     "reader",
     "Embedding model comparison"
    ],
    [
     "reader",
     "Retrieval metrics"
    ],
    [
     "play",
     "When the right chunk was ranked tenth"
    ]
   ]
  },
  "3": {
   "name": "Evaluation Set Building",
   "short": "the evaluation set",
   "desc": "Collect 150 real student questions with correct answers and their sources, including ones the assistant should refuse.",
   "leaves": "an evaluation question set",
   "bar": true,
   "rubric": [
    [
     "Collect questions",
     "Real student questions are gathered."
    ],
    [
     "Write the answers",
     "Each question has the correct answer and its source."
    ],
    [
     "Include the hard ones",
     "The set includes ambiguous, multi-document and out-of-scope questions."
    ],
    [
     "Cover the risks",
     "The set covers the questions where a wrong answer would hurt a student most."
    ]
   ],
   "time": "3h",
   "ai": [
    "What kinds of questions should an evaluation set include?",
    "Write ten tricky questions about attendance rules.",
    "Which questions should the assistant refuse to answer?"
   ],
   "reads": [
    [
     "Building evaluation sets for LLMs",
     "Golden questions and answers."
    ],
    [
     "Testing edge cases",
     "Ambiguous and out-of-scope questions."
    ],
    [
     "Collecting real questions",
     "Learning what students actually ask."
    ]
   ],
   "community": [
    [
     "reader",
     "Eval set template"
    ],
    [
     "play",
     "Collecting questions from students"
    ],
    [
     "reader",
     "Edge case question ideas"
    ],
    [
     "play",
     "The question everyone gets wrong"
    ]
   ],
   "floor": "includes the out-of-scope and ambiguous questions, not just easy ones",
   "floor_level": 2
  },
  "4": {
   "name": "RAG Pipeline & Prompting",
   "short": "the RAG pipeline",
   "desc": "Build the retrieve-then-answer pipeline with a prompt that answers only from sources and cites them.",
   "leaves": "a retrieval-augmented answer pipeline",
   "bar": true,
   "rubric": [
    [
     "Answer from sources",
     "The assistant answers using retrieved chunks."
    ],
    [
     "Cite sources",
     "Every answer cites the document and section it used."
    ],
    [
     "Stay grounded",
     "The prompt makes the model say it doesn't know when sources don't cover a question."
    ],
    [
     "Tune it with evidence",
     "Prompt and retrieval changes are tested against the evaluation set, not by feel."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "Write a prompt that answers only from the provided sources.",
    "How do I make the model cite the section it used?",
    "Combine keyword and vector search for better retrieval."
   ],
   "reads": [
    [
     "Retrieval-augmented generation",
     "Answering from your own documents."
    ],
    [
     "Prompting for grounded answers",
     "Sticking to sources and citing them."
    ],
    [
     "Hybrid search",
     "Keywords and vectors together."
    ]
   ],
   "community": [
    [
     "play",
     "RAG from scratch"
    ],
    [
     "reader",
     "Grounding prompts that work"
    ],
    [
     "reader",
     "Hybrid search explained"
    ],
    [
     "play",
     "Fixing a hallucinated rule"
    ]
   ],
   "floor": "answers only from sources, cites them, and says when it doesn't know",
   "floor_level": 2
  },
  "5": {
   "name": "Answer Quality Evaluation",
   "short": "the quality evaluation",
   "desc": "Score the assistant on the evaluation set for correctness, faithfulness to sources and appropriate refusals.",
   "leaves": "an evaluation results report",
   "bar": false,
   "rubric": [
    [
     "Score the answers",
     "Answers are scored against the evaluation set."
    ],
    [
     "Check faithfulness",
     "Answers are checked for claims not in the sources."
    ],
    [
     "Find the failures",
     "Failures are grouped by cause: retrieval, prompt or source gaps."
    ],
    [
     "Trust your scorer",
     "If you use a model to grade, you check its grades against human ones."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "How do I measure whether an answer is faithful to its sources?",
    "Can I use an LLM to grade answers, and how do I check it?",
    "Group these failures by cause."
   ],
   "reads": [
    [
     "Evaluating LLM applications",
     "Correctness, faithfulness and refusals."
    ],
    [
     "LLM-as-judge",
     "Automated grading and its limits."
    ],
    [
     "Diagnosing RAG failures",
     "Retrieval or generation?"
    ]
   ],
   "community": [
    [
     "reader",
     "RAG evaluation guide"
    ],
    [
     "play",
     "Scoring answers with Ragas"
    ],
    [
     "reader",
     "LLM-as-judge pitfalls"
    ],
    [
     "play",
     "Finding why answers went wrong"
    ]
   ]
  },
  "6": {
   "name": "Guardrails & Safety",
   "short": "the guardrails",
   "desc": "Add guardrails: refuse out-of-scope questions, handle personal or distressing questions with care, and resist prompt injection.",
   "leaves": "a guardrails module",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "How should the assistant respond to a question about mental health?",
    "Test this assistant against prompt injection attempts.",
    "What should happen when a student shares personal details?"
   ],
   "reads": [
    [
     "Guardrails for assistants",
     "Scope, safety and refusals."
    ],
    [
     "Prompt injection",
     "Attempts to make the assistant ignore its rules."
    ],
    [
     "Handling sensitive topics",
     "Pointing students to real help."
    ]
   ],
   "community": [
    [
     "reader",
     "Guardrail patterns"
    ],
    [
     "play",
     "Red-teaming an assistant"
    ],
    [
     "reader",
     "Sensitive topic responses"
    ],
    [
     "play",
     "The prompt injection we missed"
    ]
   ]
  },
  "7": {
   "name": "Chat Interface & Deployment",
   "short": "the chat interface",
   "desc": "Build a simple chat interface, deploy the assistant, and log questions for improvement.",
   "leaves": "a deployed chat assistant",
   "bar": false,
   "rubric": [
    [
     "Build the interface",
     "Students can chat with the assistant and see sources."
    ],
    [
     "Deploy it",
     "It runs at a public URL with API keys kept secret."
    ],
    [
     "Log responsibly",
     "Questions are logged for improvement without storing personal data."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Build a simple chat interface with Streamlit or React.",
    "How do I keep API keys out of the frontend?",
    "What should be logged, and what shouldn't?"
   ],
   "reads": [
    [
     "Building chat interfaces",
     "Streaming answers and showing sources."
    ],
    [
     "Deploying LLM apps",
     "Hosting and keeping keys safe."
    ],
    [
     "Logging and privacy",
     "Learning from usage responsibly."
    ]
   ],
   "community": [
    [
     "play",
     "Streamlit chat in 20 minutes"
    ],
    [
     "reader",
     "Showing sources in a chat UI"
    ],
    [
     "reader",
     "Privacy-safe logging"
    ],
    [
     "play",
     "Deploying an LLM app"
    ]
   ]
  },
  "8": {
   "name": "Assistant Case Study",
   "short": "the case study",
   "desc": "Write up the system, its evaluation results, its limits and the cost of running it.",
   "leaves": "an AI assistant case study",
   "bar": false,
   "rubric": [
    [
     "Explain the system",
     "Architecture and choices are explained."
    ],
    [
     "Report the evidence",
     "Evaluation results are reported honestly, including failures."
    ],
    [
     "Count the cost",
     "Running cost per question is estimated, with ways to reduce it."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Outline a case study for a RAG assistant.",
    "Estimate the monthly cost of answering 20,000 questions.",
    "Explain this assistant's limits to a university registrar."
   ],
   "reads": [
    [
     "Writing AI case studies",
     "Showing results and limits."
    ],
    [
     "Estimating LLM costs",
     "Tokens, models and caching."
    ],
    [
     "Explaining AI limits",
     "Honesty builds trust."
    ]
   ],
   "community": [
    [
     "reader",
     "Assistant case study example"
    ],
    [
     "play",
     "Presenting to a university"
    ],
    [
     "reader",
     "Cost estimation worksheet"
    ],
    [
     "play",
     "Explaining hallucination to non-experts"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Prepare the documents",
   "desc": "Extract, clean and chunk the university's documents.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Make them searchable",
   "desc": "Embed the chunks and build the index.",
   "vcs": [
    "2"
   ]
  },
  {
   "n": 3,
   "title": "Decide what 'right' means",
   "desc": "Build an evaluation set of real questions before building the assistant.",
   "vcs": [
    "3"
   ]
  },
  {
   "n": 4,
   "title": "Set up the API keys and environment",
   "desc": "Set up the model API account, usage limits and a cost dashboard, and keep keys out of code."
  },
  {
   "n": 5,
   "title": "Build and measure",
   "desc": "Build the RAG pipeline and score it on the evaluation set.",
   "vcs": [
    "4",
    "5"
   ],
   "loop": true,
   "loopnote": "Loops back to steps 1 and 2: expect several rounds of improving retrieval and prompts."
  },
  {
   "n": 6,
   "title": "Make it safe and usable",
   "desc": "Add guardrails, build the chat interface and deploy it.",
   "vcs": [
    "6",
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Write it up",
   "desc": "Write the case study with results, limits and costs.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Retrieval-augmented generation",
   "Answering from your own documents."
  ],
  [
   "Chunking and embeddings",
   "Making documents searchable."
  ],
  [
   "Prompting for grounded answers",
   "Citing and refusing."
  ],
  [
   "Evaluating LLM apps",
   "Correctness and faithfulness."
  ],
  [
   "Guardrails",
   "Scope, safety and injection."
  ],
  [
   "Estimating LLM costs",
   "Running affordably."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the assistant. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the document pipeline or the evaluation set: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "3"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The RAG pipeline is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: build the assistant, evaluate it and deploy it.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the assistant at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "4",
    "5"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the assistant counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the assistant as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "4"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as questions answered correctly with sources, and build the case study to show you moved it.",
   "pick": "Take the RAG pipeline to L5: the version only you could have done.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE06-CHARGEGRID-ARCH-001",
 "ui": {
  "id": 122,
  "roles": [
   "Solutions / Software Architect",
   "Technical Product Manager"
  ],
  "stage": "Seed-stage startup",
  "category": "Technology & Engineering",
  "time": "18-24 hrs (recommended time)"
 },
 "identity": {
  "business_service": "System Architecture Design",
  "deliverable": "System Architecture Document",
  "title": "Design the system that lets an EV driver book a charger that's actually free",
  "role": "Solutions / Software Architect",
  "industry": "Clean Energy & Storage",
  "venture": "ChargeGrid"
 },
 "takeaways": {
  "asset": "A system architecture document for ChargeGrid's booking and charger platform, with diagrams and decision records, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Big-picture technical thinking: requirements, trade-offs, diagrams and decisions you can defend."
 },
 "pre": {
  "lede": "You'll design the architecture for ChargeGrid's platform: drivers find and book chargers in an app, chargers report their status in real time, and payments settle when charging ends. It has to handle 2,000 chargers today and 20,000 in two years.",
  "produces": "a system architecture document: requirements, the architecture with diagrams, key decisions and their trade-offs, and a plan to build it in stages.",
  "skills_technical": [
   "System design",
   "C4 architecture diagrams",
   "Architecture decision records",
   "Event-driven architecture",
   "Cloud services",
   "Capacity estimation"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Strategic Thinking",
   "Written Communication",
   "Collaboration"
  ],
  "capabilities": [
   [
    "Software Architecture",
    "designing systems that meet today's needs and can grow"
   ],
   [
    "Cloud Infrastructure",
    "choosing cloud services and how they fit together"
   ],
   [
    "Technical Communication",
    "explaining technical decisions to engineers and founders"
   ]
  ],
  "resume_line": "Designed ChargeGrid's EV charging platform architecture: event-driven charger telemetry, a booking service with double-booking protection and a staged build plan, scaling from 2,000 to 20,000 chargers.",
  "asset_line": "A full architecture document with diagrams, decision records and build plan, held together as one case study."
 },
 "background": {
  "venture": "ChargeGrid runs a network of EV charging points at malls, offices and apartment complexes in Pune and Bengaluru. Drivers use its app to find, book and pay for chargers.",
  "project": "The current system is one server that polls each charger every five minutes, so the app often shows a free charger that's actually in use. ChargeGrid is raising money to expand tenfold and needs an architecture that can handle real-time status, reliable bookings and growth.",
  "why": "A driver who arrives at a 'free' charger that's taken, with 10% battery left, never trusts the app again. The current design can't fix that, and it won't survive ten times the chargers. Getting the architecture right now avoids an expensive rebuild in the middle of an expansion."
 },
 "chirag_intro": "The route from 'the app lies about free chargers' to an architecture the team can build. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Requirements Gathering",
   "short": "the requirements",
   "desc": "Gather the functional and non-functional requirements: what the system must do, how fast, how reliable and at what scale.",
   "leaves": "a requirements specification",
   "bar": false,
   "rubric": [
    [
     "List what it must do",
     "Functional requirements are listed."
    ],
    [
     "Quantify the qualities",
     "Latency, availability and scale targets are given as numbers."
    ],
    [
     "Find the hidden ones",
     "Requirements nobody stated, such as chargers going offline mid-session, are surfaced and agreed."
    ]
   ],
   "time": "2h",
   "ai": [
    "List non-functional requirements for an EV charging platform.",
    "What availability does a booking system need?",
    "What requirements might the founders not have thought of?"
   ],
   "reads": [
    [
     "Functional and non-functional requirements",
     "What it does and how well."
    ],
    [
     "Quality attributes",
     "Latency, availability, scalability and more."
    ],
    [
     "Interviewing stakeholders",
     "Drawing out what people assume."
    ]
   ],
   "community": [
    [
     "reader",
     "Requirements template for architects"
    ],
    [
     "play",
     "Running a requirements workshop"
    ],
    [
     "reader",
     "Quality attribute scenarios"
    ],
    [
     "play",
     "The requirement nobody mentioned"
    ]
   ]
  },
  "2": {
   "name": "Capacity Estimation",
   "short": "the capacity estimate",
   "desc": "Estimate the load: status messages per second, bookings at peak, data stored per year, now and at ten times the scale.",
   "leaves": "a capacity estimate",
   "bar": false,
   "rubric": [
    [
     "Estimate the load",
     "Messages, requests and storage are estimated."
    ],
    [
     "Show the working",
     "Assumptions are stated and the maths is shown."
    ],
    [
     "Plan for growth",
     "Estimates cover today and ten times the scale, and point to what breaks first."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Estimate status messages per second for 20,000 chargers.",
    "How much telemetry data will we store per year?",
    "Which part of the system hits its limit first as we grow?"
   ],
   "reads": [
    [
     "Back-of-envelope estimation",
     "Quick, useful capacity maths."
    ],
    [
     "Thinking about scale",
     "What changes at ten times the load."
    ],
    [
     "Storage estimation",
     "Planning for data growth."
    ]
   ],
   "community": [
    [
     "reader",
     "Estimation cheat sheet"
    ],
    [
     "play",
     "Estimating load live"
    ],
    [
     "reader",
     "Numbers every engineer should know"
    ],
    [
     "play",
     "When our estimate was off by 10x"
    ]
   ]
  },
  "3": {
   "name": "High-Level Architecture",
   "short": "the high-level architecture",
   "desc": "Design the main components and how they communicate: apps, booking, charger gateway, payments, data.",
   "leaves": "a high-level architecture diagram",
   "bar": true,
   "rubric": [
    [
     "Draw the system",
     "Components and their connections are diagrammed."
    ],
    [
     "Use a clear notation",
     "Diagrams follow a standard like C4, readable by anyone on the team."
    ],
    [
     "Explain the flows",
     "Key flows, like booking a charger, are traced through the diagram."
    ],
    [
     "Justify the shape",
     "You compare your design with one alternative and show why yours fits the requirements better."
    ]
   ],
   "time": "3h",
   "ai": [
    "Draw a C4 container diagram for an EV charging platform.",
    "Should chargers push status or should the server poll?",
    "Trace a booking request through this architecture."
   ],
   "reads": [
    [
     "The C4 model",
     "Context, container and component diagrams."
    ],
    [
     "Event-driven architecture",
     "When services communicate through events."
    ],
    [
     "Designing for real-time status",
     "Push versus poll."
    ]
   ],
   "community": [
    [
     "play",
     "C4 diagrams in 20 minutes"
    ],
    [
     "reader",
     "EV platform architecture example"
    ],
    [
     "reader",
     "Event-driven patterns"
    ],
    [
     "play",
     "Push vs poll, explained"
    ]
   ],
   "floor": "traces the key flows through the design and compares it with an alternative",
   "floor_level": 3
  },
  "4": {
   "name": "Data Model & Storage Design",
   "short": "the data design",
   "desc": "Design the data model and choose storage for each kind of data: bookings, charger telemetry, payments.",
   "leaves": "a data model and storage plan",
   "bar": true,
   "rubric": [
    [
     "Model the data",
     "Core entities and relationships are defined."
    ],
    [
     "Choose the storage",
     "Each kind of data has a storage choice with a reason."
    ],
    [
     "Protect consistency",
     "Double bookings are prevented, and you show how."
    ],
    [
     "Plan for growth",
     "Telemetry storage handles ten times the volume, with retention rules."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Design a data model for charger bookings.",
    "Should telemetry go in the same database as bookings?",
    "How do I prevent two drivers booking the same charger at once?"
   ],
   "reads": [
    [
     "Data modelling",
     "Entities, relationships and constraints."
    ],
    [
     "Choosing databases",
     "Relational, time-series and caches."
    ],
    [
     "Preventing double booking",
     "Locks, constraints and transactions."
    ]
   ],
   "community": [
    [
     "reader",
     "Booking data model example"
    ],
    [
     "play",
     "Preventing race conditions"
    ],
    [
     "reader",
     "Time-series storage guide"
    ],
    [
     "play",
     "The double booking bug"
    ]
   ],
   "floor": "prevents double bookings and plans storage for ten times the data",
   "floor_level": 2
  },
  "5": {
   "name": "Architecture Decision Records",
   "short": "the decision records",
   "desc": "Write a short record for each major decision: the options, the trade-offs and why you chose what you did.",
   "leaves": "a set of architecture decision records",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "2h",
   "ai": [
    "Write an ADR for choosing a message broker.",
    "What options should I compare for real-time charger status?",
    "What trade-offs did we accept by choosing this database?"
   ],
   "reads": [
    [
     "Architecture decision records",
     "Writing down why, not just what."
    ],
    [
     "Evaluating trade-offs",
     "Comparing options fairly."
    ],
    [
     "Reversible and irreversible decisions",
     "Where to spend thinking time."
    ]
   ],
   "community": [
    [
     "reader",
     "ADR template"
    ],
    [
     "play",
     "Writing an ADR"
    ],
    [
     "reader",
     "Trade-off matrix example"
    ],
    [
     "play",
     "The decision we had to reverse"
    ]
   ]
  },
  "6": {
   "name": "Failure & Resilience Design",
   "short": "the resilience design",
   "desc": "Work out what happens when things fail (a charger loses signal, payments are down, a region goes offline) and design for it.",
   "leaves": "a failure mode analysis",
   "bar": false,
   "rubric": [
    [
     "List the failures",
     "Likely failures are listed."
    ],
    [
     "Design responses",
     "Each failure has a designed response, such as retries, queues or fallbacks."
    ],
    [
     "Protect the driver",
     "The design shows what a driver sees during each failure."
    ]
   ],
   "time": "2h",
   "ai": [
    "What should happen if a charger loses connection mid-session?",
    "How should the system behave when the payment provider is down?",
    "Design a fallback for real-time status failing."
   ],
   "reads": [
    [
     "Designing for failure",
     "Retries, timeouts, circuit breakers and queues."
    ],
    [
     "Failure mode analysis",
     "Listing what can go wrong."
    ],
    [
     "Graceful degradation",
     "Staying useful when parts fail."
    ]
   ],
   "community": [
    [
     "reader",
     "Failure mode analysis template"
    ],
    [
     "play",
     "Designing for offline chargers"
    ],
    [
     "reader",
     "Resilience patterns"
    ],
    [
     "play",
     "The outage that taught us queues"
    ]
   ]
  },
  "7": {
   "name": "Architecture Review",
   "short": "the review",
   "desc": "Present the architecture to two engineers and a founder, capture their challenges, and revise.",
   "leaves": "a review record with revisions",
   "bar": false,
   "rubric": [
    [
     "Run the review",
     "The architecture is presented and questions are recorded."
    ],
    [
     "Answer the challenges",
     "Each challenge gets an answer or a change."
    ],
    [
     "Show the revisions",
     "Changes made after the review are documented."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "Prepare for an architecture review: what will engineers ask?",
    "How do I respond when a reviewer disagrees with a key decision?",
    "Summarise what changed after this review."
   ],
   "reads": [
    [
     "Running architecture reviews",
     "Getting useful challenge."
    ],
    [
     "Presenting technical designs",
     "To engineers and to founders."
    ],
    [
     "Handling disagreement",
     "When to change and when to hold."
    ]
   ],
   "community": [
    [
     "play",
     "An architecture review, recorded"
    ],
    [
     "reader",
     "Review checklist"
    ],
    [
     "reader",
     "Presenting to founders"
    ],
    [
     "play",
     "Defending a design decision"
    ]
   ]
  },
  "8": {
   "name": "Architecture Document & Roadmap",
   "short": "the architecture document",
   "desc": "Bring everything into one document with a staged plan to build it.",
   "leaves": "a system architecture document",
   "bar": false,
   "rubric": [
    [
     "Assemble it",
     "Requirements, diagrams, data design, decisions and resilience are in one document."
    ],
    [
     "Plan the build",
     "A staged plan shows what to build first and why."
    ],
    [
     "Make it the team's",
     "An engineer joining next month could understand the system from the document alone."
    ],
    [
     "Make it last",
     "The document says how it should be kept up to date as decisions change."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a system architecture document.",
    "Split this architecture into three build phases.",
    "What should a new engineer read first?"
   ],
   "reads": [
    [
     "Writing architecture documents",
     "Clear, useful and kept current."
    ],
    [
     "Planning a staged build",
     "Delivering value early."
    ],
    [
     "Documentation that stays useful",
     "Living documents."
    ]
   ],
   "community": [
    [
     "reader",
     "Architecture document example"
    ],
    [
     "play",
     "Writing for a new engineer"
    ],
    [
     "reader",
     "Document template (community copy)"
    ],
    [
     "play",
     "Phasing a big build"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Understand what's needed",
   "desc": "Gather requirements and estimate the load, now and at ten times the scale.",
   "vcs": [
    "1",
    "2"
   ]
  },
  {
   "n": 2,
   "title": "Study the current system",
   "desc": "Read the existing code and talk to the two engineers who run it, so you know what can be kept."
  },
  {
   "n": 3,
   "title": "Design the shape",
   "desc": "Design the high-level architecture and the data model.",
   "vcs": [
    "3",
    "4"
   ]
  },
  {
   "n": 4,
   "title": "Record the decisions",
   "desc": "Write a decision record for each major choice.",
   "vcs": [
    "5"
   ]
  },
  {
   "n": 5,
   "title": "Design for failure",
   "desc": "Work out what fails and how the system responds.",
   "vcs": [
    "6"
   ]
  },
  {
   "n": 6,
   "title": "Get challenged",
   "desc": "Review the architecture with engineers and a founder, then revise.",
   "vcs": [
    "7"
   ],
   "loop": true,
   "loopnote": "Loops back to steps 3 to 5: expect one round of revisions."
  },
  {
   "n": 7,
   "title": "Write it up",
   "desc": "Assemble the architecture document with a staged build plan.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "System design basics",
   "Components, communication and scale."
  ],
  [
   "The C4 model",
   "Diagrams anyone can read."
  ],
  [
   "Capacity estimation",
   "Quick, useful load maths."
  ],
  [
   "Architecture decision records",
   "Writing down why."
  ],
  [
   "Designing for failure",
   "Resilience patterns."
  ],
  [
   "Event-driven architecture",
   "Services that talk through events."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the architecture document. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the requirements or the capacity estimate: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The data design is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: design the architecture, get it challenged and write it up.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the architecture document at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "3",
    "4",
    "8"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the architecture document counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the architecture document as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "4"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as booking failures from stale charger status, and build the case study to show you moved it.",
   "pick": "Take the high-level architecture to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
},
{
 "ref": "WO-TE04-CARECIRCLE-MODERNISE-001",
 "ui": {
  "id": 123,
  "roles": [
   "Solutions / Software Architect",
   "Backend Engineer"
  ],
  "stage": "Bootstrapped business",
  "category": "Technology & Engineering",
  "time": "20-26 hrs (recommended time)"
 },
 "identity": {
  "business_service": "Legacy System Modernisation",
  "deliverable": "Modernised System / Migration Report",
  "title": "Move an eldercare agency off a fragile old system without missing a single caregiver visit",
  "role": "Solutions / Software Architect",
  "industry": "GeronTech & Silver Economy",
  "venture": "CareCircle"
 },
 "takeaways": {
  "asset": "A modernisation plan and first migrated module for CareCircle's scheduling system, with a migration report, documented as a case study you own.",
  "moves": "+1 business service toward your next stage in this role, and up to 8 artefacts on your record.",
  "kind": "Careful engineering: understanding old code, planning a safe path off it, and proving nothing breaks along the way."
 },
 "pre": {
  "lede": "You'll plan CareCircle's move off a ten-year-old PHP system that schedules home caregivers for elderly clients: map what exists, design the target, migrate the first module step by step, and prove no caregiver visit was missed along the way.",
  "produces": "a modernised system and migration report: the assessment of the old system, the target design, a migration plan, the first migrated module, and the report on how it went.",
  "skills_technical": [
   "Legacy code analysis",
   "Strangler fig pattern",
   "API design",
   "Data migration",
   "Characterisation testing",
   "Cloud deployment"
  ],
  "skills_transferable": [
   "Critical Thinking",
   "Strategic Thinking",
   "Attention to Detail",
   "Written Communication"
  ],
  "capabilities": [
   [
    "Software Architecture",
    "planning how a system changes safely over time"
   ],
   [
    "Backend Engineering",
    "building the new services that replace the old ones"
   ],
   [
    "Risk Management",
    "making big changes without breaking what people rely on"
   ]
  ],
  "resume_line": "Led the modernisation plan for CareCircle's legacy PHP scheduling system: mapped 60k lines of code, migrated the visit-scheduling module behind a strangler-fig facade with zero missed visits, and planned the remaining phases.",
  "asset_line": "A legacy assessment, target design, migrated module and migration report, held together as one case study."
 },
 "background": {
  "venture": "CareCircle sends trained caregivers to the homes of around 1,800 elderly clients in Delhi and Gurugram, for help with medicines, meals and mobility. Its schedulers plan around 3,000 visits a week.",
  "project": "Scheduling runs on a PHP system built in 2015 by a developer who has since left. It's slow, crashes on Mondays and nobody dares change it. CareCircle wants to move to a modern system gradually, starting with visit scheduling, without ever stopping operations.",
  "why": "A missed visit can mean an elderly person goes without medication or a meal. A big-bang rewrite risks exactly that, and CareCircle's last attempt was abandoned halfway. The only safe path is a gradual one, where the old and new systems run side by side and every step can be undone."
 },
 "chirag_intro": "The route from a system nobody dares touch to a safe, staged migration. Constructs sit inside the steps they belong to.",
 "vcs": {
  "1": {
   "name": "Legacy System Assessment",
   "short": "the assessment",
   "desc": "Map the old system: its modules, data, dependencies, pain points and the business rules hidden in the code.",
   "leaves": "a legacy system assessment",
   "bar": true,
   "rubric": [
    [
     "Map the system",
     "Modules, data and dependencies are mapped."
    ],
    [
     "Find the hidden rules",
     "Business rules buried in the code are written down."
    ],
    [
     "Rate the risk",
     "Each module is rated by how risky and how valuable it is to migrate."
    ],
    [
     "Find what nobody knew",
     "You surface a behaviour the team didn't know the system had, with evidence."
    ]
   ],
   "time": "3-4h",
   "ai": [
    "How do I map an unfamiliar PHP codebase quickly?",
    "Find the business rules in this scheduling function.",
    "Rate these modules by migration risk and value."
   ],
   "reads": [
    [
     "Reading legacy code",
     "Understanding code nobody documented."
    ],
    [
     "Dependency mapping",
     "Seeing what connects to what."
    ],
    [
     "Extracting business rules",
     "Finding the logic hidden in code."
    ]
   ],
   "community": [
    [
     "play",
     "Mapping a legacy codebase"
    ],
    [
     "reader",
     "Assessment template"
    ],
    [
     "reader",
     "Hidden business rules we found"
    ],
    [
     "play",
     "The Monday crash, explained"
    ]
   ],
   "floor": "writes down the business rules hidden in the code, with where each one lives",
   "floor_level": 2
  },
  "2": {
   "name": "Target Architecture Design",
   "short": "the target design",
   "desc": "Design where the system is going: services, data stores and how they'll replace the old modules.",
   "leaves": "a target architecture design",
   "bar": false,
   "rubric": [
    [
     "Design the target",
     "The future architecture is diagrammed."
    ],
    [
     "Keep it right-sized",
     "The design fits a small team, not a big tech company."
    ],
    [
     "Justify it",
     "Choices are explained against the assessment's findings."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Design a target architecture for a small home-care scheduling platform.",
    "Is microservices the right choice for a team of three?",
    "What should the scheduling service own?"
   ],
   "reads": [
    [
     "Right-sizing architecture",
     "Modular monoliths and when to split."
    ],
    [
     "Designing service boundaries",
     "What each part owns."
    ],
    [
     "Choosing a tech stack",
     "Fitting the team that will maintain it."
    ]
   ],
   "community": [
    [
     "reader",
     "Modular monolith explained"
    ],
    [
     "play",
     "Drawing service boundaries"
    ],
    [
     "reader",
     "Stack choices for small teams"
    ],
    [
     "play",
     "When microservices were overkill"
    ]
   ]
  },
  "3": {
   "name": "Migration Strategy",
   "short": "the migration strategy",
   "desc": "Plan the order of migration and how old and new run side by side, using a strangler fig approach with rollback at every step.",
   "leaves": "a migration strategy",
   "bar": true,
   "rubric": [
    [
     "Order the work",
     "Modules are ordered for migration with reasons."
    ],
    [
     "Plan the coexistence",
     "Old and new systems run side by side, with traffic routed gradually."
    ],
    [
     "Plan the rollback",
     "Every step can be undone, and you show how."
    ],
    [
     "Weigh the alternatives",
     "You compare the strangler approach with a rewrite and defend your choice with the assessment."
    ]
   ],
   "time": "2-3h",
   "ai": [
    "Explain the strangler fig pattern for this system.",
    "Which module should be migrated first, and why?",
    "Design a rollback plan for each migration step."
   ],
   "reads": [
    [
     "The strangler fig pattern",
     "Replacing a system piece by piece."
    ],
    [
     "Planning migrations",
     "Ordering steps by risk and value."
    ],
    [
     "Rollback planning",
     "Making every step reversible."
    ]
   ],
   "community": [
    [
     "play",
     "Strangler fig explained"
    ],
    [
     "reader",
     "Migration plan example"
    ],
    [
     "reader",
     "Rollback checklist"
    ],
    [
     "play",
     "Why our rewrite failed"
    ]
   ],
   "floor": "makes every step reversible, with old and new running side by side",
   "floor_level": 2
  },
  "4": {
   "name": "Characterisation Tests",
   "short": "the characterisation tests",
   "desc": "Write tests that capture what the old scheduling module actually does today, so the new one can be proven to match.",
   "leaves": "a characterisation test suite",
   "bar": false,
   "rubric": [
    [
     "Capture behaviour",
     "Tests record the old module's outputs for real inputs."
    ],
    [
     "Cover the odd cases",
     "Holidays, cancellations and double shifts are covered."
    ],
    [
     "Use them as the contract",
     "The new module must pass the same tests before it goes live."
    ]
   ],
   "time": "3h",
   "ai": [
    "What is a characterisation test?",
    "Generate test cases from last month's scheduling data.",
    "How do I compare the old and new systems' outputs automatically?"
   ],
   "reads": [
    [
     "Characterisation tests",
     "Pinning down what legacy code does."
    ],
    [
     "Golden master testing",
     "Comparing outputs at scale."
    ],
    [
     "Testing scheduling logic",
     "Edge cases in calendars and shifts."
    ]
   ],
   "community": [
    [
     "reader",
     "Characterisation tests explained"
    ],
    [
     "play",
     "Golden master testing"
    ],
    [
     "reader",
     "Scheduling edge cases"
    ],
    [
     "play",
     "The holiday bug we preserved"
    ]
   ]
  },
  "5": {
   "name": "First Module Migration",
   "short": "the module migration",
   "desc": "Build the new scheduling module behind a facade, and route a small share of traffic to it.",
   "leaves": "a migrated scheduling module",
   "bar": false,
   "rubric": [
    [
     "Follow the method",
     "You carry out the move the established way, on a case that behaves normally."
    ],
    [
     "Adapt the method",
     "The case doesn't fit cleanly and you adjust, rather than forcing it or leaving a gap."
    ],
    [
     "Work out why",
     "You handle inputs that conflict, and can explain why you did it this way rather than another."
    ],
    [
     "Judge against criteria",
     "You set out what 'good enough' means here, weigh alternatives, and it holds when someone pushes back."
    ]
   ],
   "time": "4-5h",
   "ai": [
    "Build a facade that routes scheduling requests to old or new code.",
    "How do I send 10% of traffic to the new module safely?",
    "The new module disagrees with the old one here. Which is right?"
   ],
   "reads": [
    [
     "Building a facade",
     "Routing between old and new."
    ],
    [
     "Gradual rollouts",
     "Feature flags and traffic splitting."
    ],
    [
     "Resolving behaviour differences",
     "When the old system was wrong."
    ]
   ],
   "community": [
    [
     "play",
     "Feature flags for migration"
    ],
    [
     "reader",
     "Facade pattern example"
    ],
    [
     "reader",
     "Traffic splitting guide"
    ],
    [
     "play",
     "The disagreement that found a bug"
    ]
   ]
  },
  "6": {
   "name": "Data Migration & Sync",
   "short": "the data migration",
   "desc": "Move scheduling data to the new store and keep both in sync while they run side by side.",
   "leaves": "a data migration and sync process",
   "bar": true,
   "rubric": [
    [
     "Migrate the data",
     "Historical scheduling data is moved and checked."
    ],
    [
     "Keep them in sync",
     "Changes in either system reach the other while both run."
    ],
    [
     "Prove nothing was lost",
     "Counts and spot-checks show the data matches."
    ],
    [
     "Plan the cutover",
     "The final switch is planned with a tested rollback."
    ]
   ],
   "time": "3h",
   "ai": [
    "How do I migrate data while the old system is still in use?",
    "Write reconciliation checks between old and new databases.",
    "Plan the final cutover weekend."
   ],
   "reads": [
    [
     "Data migration",
     "Moving data safely."
    ],
    [
     "Dual writes and change data capture",
     "Keeping two stores in sync."
    ],
    [
     "Reconciliation",
     "Proving the data matches."
    ]
   ],
   "community": [
    [
     "reader",
     "Data migration checklist"
    ],
    [
     "play",
     "Reconciling two databases"
    ],
    [
     "reader",
     "Sync patterns compared"
    ],
    [
     "play",
     "The cutover that went right"
    ]
   ],
   "floor": "proves no records were lost, with counts and spot-checks",
   "floor_level": 2
  },
  "7": {
   "name": "Operational Readiness",
   "short": "the readiness check",
   "desc": "Make sure schedulers are trained, monitoring is in place and support knows what to do if something goes wrong.",
   "leaves": "an operational readiness checklist",
   "bar": false,
   "rubric": [
    [
     "Prepare the people",
     "Schedulers are shown what's changing."
    ],
    [
     "Prepare the system",
     "Monitoring and alerts are in place for the new module."
    ],
    [
     "Prepare for trouble",
     "There's a plan for a missed visit or an outage, tested once."
    ]
   ],
   "time": "1-2h",
   "ai": [
    "What should an operational readiness checklist include?",
    "How do I explain a system change to non-technical schedulers?",
    "What should we monitor in the first week after migration?"
   ],
   "reads": [
    [
     "Operational readiness",
     "Making sure people and systems are ready."
    ],
    [
     "Change management",
     "Helping users through a change."
    ],
    [
     "Monitoring a new service",
     "What to watch in week one."
    ]
   ],
   "community": [
    [
     "reader",
     "Readiness checklist"
    ],
    [
     "play",
     "Training schedulers on a new tool"
    ],
    [
     "reader",
     "Week-one monitoring guide"
    ],
    [
     "play",
     "The rollback drill"
    ]
   ]
  },
  "8": {
   "name": "Migration Report",
   "short": "the migration report",
   "desc": "Report on the first migration and lay out the plan for the remaining modules.",
   "leaves": "a migration report",
   "bar": false,
   "rubric": [
    [
     "Report what happened",
     "Results of the first migration are reported."
    ],
    [
     "Prove the safety",
     "The report shows no visits were missed, with evidence."
    ],
    [
     "Plan the rest",
     "Remaining modules have a phased plan with lessons applied."
    ]
   ],
   "time": "2h",
   "ai": [
    "Outline a migration report for founders.",
    "Summarise this migration's results in three sentences.",
    "What lessons should shape the next migration phase?"
   ],
   "reads": [
    [
     "Writing migration reports",
     "Results, evidence and next steps."
    ],
    [
     "Communicating risk",
     "To founders and operations teams."
    ],
    [
     "Lessons learned",
     "Making the next phase safer."
    ]
   ],
   "community": [
    [
     "reader",
     "Migration report example"
    ],
    [
     "play",
     "Presenting to founders"
    ],
    [
     "reader",
     "Report template (community copy)"
    ],
    [
     "play",
     "A retrospective that changed our plan"
    ]
   ]
  }
 },
 "methodology": [
  {
   "n": 1,
   "title": "Understand the old system",
   "desc": "Map the system and find the business rules hidden in its code.",
   "vcs": [
    "1"
   ]
  },
  {
   "n": 2,
   "title": "Decide where you're going",
   "desc": "Design the target architecture and the migration strategy.",
   "vcs": [
    "2",
    "3"
   ]
  },
  {
   "n": 3,
   "title": "Get a safe copy",
   "desc": "Set up a copy of the old system with anonymised data where you can experiment without touching live schedules."
  },
  {
   "n": 4,
   "title": "Pin down today's behaviour",
   "desc": "Write characterisation tests for the scheduling module.",
   "vcs": [
    "4"
   ]
  },
  {
   "n": 5,
   "title": "Migrate the first module",
   "desc": "Build the new module behind a facade, migrate its data and keep both in sync.",
   "vcs": [
    "5",
    "6"
   ],
   "loop": true,
   "loopnote": "Loops back to step 4: expect rounds of fixing differences until outputs match."
  },
  {
   "n": 6,
   "title": "Get ready for real use",
   "desc": "Prepare schedulers, monitoring and the rollback plan.",
   "vcs": [
    "7"
   ]
  },
  {
   "n": 7,
   "title": "Report and plan the rest",
   "desc": "Report on the migration and plan the remaining phases.",
   "vcs": [
    "8"
   ]
  }
 ],
 "resources": [
  [
   "Working with legacy code",
   "Understanding code nobody documented."
  ],
  [
   "The strangler fig pattern",
   "Replacing a system piece by piece."
  ],
  [
   "Characterisation tests",
   "Pinning down existing behaviour."
  ],
  [
   "Data migration",
   "Moving and syncing data safely."
  ],
  [
   "Gradual rollouts",
   "Feature flags and traffic splitting."
  ],
  [
   "Operational readiness",
   "People and systems ready for change."
  ]
 ],
 "gate": {
  "needs": 2,
  "have": 0
 },
 "stages": {
  "1": {
   "head": "Pick one way to contribute, and learn it properly.",
   "say": "You don't need to finish the migration report. Choose a single construct, learn what it involves, do it, and attach what it leaves behind.",
   "pick": "Start with the assessment or the target design: they need the least setup and teach you the problem.",
   "nudge": [
    "1",
    "2"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 1,
     "b": 3
    },
    {
     "l": "Artefact submissions at L1",
     "a": 2,
     "b": 3
    }
   ],
   "next": "Alignment",
   "grow": "Two construct artefacts from this work order move you toward Alignment in this role: you're 1 of 3 business services and 2 of 3 artefacts in."
  },
  "2": {
   "head": "Keep contributing, and push one construct a level deeper.",
   "say": "More constructs count, but what you're missing is depth: one artefact judged at L2 or above. Pick one you've done before and do it again on a harder case.",
   "pick": "The characterisation tests is where an L2 is most within reach here.",
   "nudge": [
    "4"
   ],
   "meters": [
    {
     "l": "Business services contributed to",
     "a": 3,
     "b": 4
    },
    {
     "l": "Artefact submissions at L1",
     "a": 4,
     "b": 5
    },
    {
     "l": "Artefacts at L2 or above",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Activation",
   "grow": "One artefact here at L2 or above is the last thing between you and Activation: you already have the breadth."
  },
  "3": {
   "head": "Take it all the way: assess, migrate the first module safely and plan the rest.",
   "say": "You've contributed in pieces before. This time carry the whole thing through and attach the migration report at the end.",
   "pick": "Work the path in order. The constructs carrying a quality bar are what make the finished piece hold up.",
   "nudge": [
    "1",
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Business services delivered on",
     "a": 1,
     "b": 3
    },
    {
     "l": "Constructs on this case study",
     "a": 0,
     "b": 2
    }
   ],
   "next": "Enhancement",
   "grow": "Attaching the migration report counts as one of the three business services you need to deliver on to reach Enhancement."
  },
  "4": {
   "head": "Work it like a real commission, to a deadline you set.",
   "say": "Finishing isn't the challenge any more. Set yourself a hand-over date and treat the migration report as something a real team ships from on Monday.",
   "pick": "Push the constructs carrying a quality bar to L4: that's where the difference shows.",
   "nudge": [
    "3",
    "6"
   ],
   "meters": [
    {
     "l": "Deliverables in micro work engagements",
     "a": 0,
     "b": 1
    }
   ],
   "next": "Advancement",
   "offsite": "practice here; the stage moves in a micro work engagement",
   "grow": "This sharpens you for a paid micro work engagement, which is where the move into Advancement actually happens."
  },
  "5": {
   "head": "Choose the outcome you want to move, then chase it.",
   "say": "There's no stakeholder setting your target, so set it yourself: pick the number this work should move, such as missed caregiver visits during migration, and build the case study to show you moved it.",
   "pick": "Take the migration strategy to L5: the version only you could have done.",
   "nudge": [
    "3"
   ],
   "meters": [
    {
     "l": "Paid contracts held",
     "a": 0,
     "b": 1
    }
   ],
   "next": "the next role opportunity",
   "offsite": "practice here; the stage moves through a career growth opportunity",
   "grow": "A case study at this depth is what a career growth opportunity is assessed on."
  }
 }
}
];

const CATALOG_BY_ID = Object.fromEntries(WORK_ORDER_CATALOG.map((wo) => [wo.ui.id, wo]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Real work orders shown for a role, ahead of the placeholders.
const catalogFor = (roleId) => WORK_ORDER_CATALOG.filter((wo) => roleId && wo.ui.roles.includes(roleName(roleId))).map((wo) => wo.ui.id);

// One shape for every surface, whether the work order is real (catalog) or a Figma placeholder.
function woContent(id) {
  const wo = CATALOG_BY_ID[id];
  return { ...(wo ? fromCatalog(wo) : placeholderContent()), stage: stageForWo(id) };
}

function fromCatalog(wo) {
  const { identity: idn, pre, background: bg, ui } = wo;
  const vcIds = Object.keys(wo.vcs).map(Number);
  const bars = vcIds.filter((k) => wo.vcs[k].bar).length;
  const n = stageForWo(ui.id); // growth.js; Shift+C cycles it (mentor-sim.js)
  const st = wo.stages[String(n)];
  const nudge = (st.nudge || []).map(Number);
  const tags = [idn.industry, ui.stage, ui.category, ui.time];
  return {
    real: true,
    service: `${idn.business_service} for ‘${idn.venture}’`,
    title: idn.title,
    desc: pre.lede,
    tags,
    industry: idn.industry,
    venture: idn.venture,
    overview: [
      ["The asset you end with (deliverable)", wo.takeaways.asset],
      ["The pieces you collect", `${vcIds.length} constructs you can apply, each leaving its own artefact. ${bars} carry a quality bar.`],
      ["The kind of work it is", wo.takeaways.kind],
    ],
    brief: pre.lede,
    produces: [idn.deliverable, cap(pre.produces)],
    capabilities: pre.capabilities.map(([name, what]) => [cap(what), name]),
    technical: pre.skills_technical,
    transferable: pre.skills_transferable,
    artefacts: vcIds.map((k) => cap(wo.vcs[k].leaves)),
    assetLine: pre.asset_line,
    resume: `“${pre.resume_line}”`,
    why: bg.why,
    about: `${bg.venture} ${bg.project}`,
    vcs: Object.fromEntries(vcIds.map((k) => {
      const v = wo.vcs[k];
      return [k, { name: v.name, desc: v.desc, leaves: cap(v.leaves), time: v.time, ai: v.ai, reads: v.reads, community: v.community, bar: v.bar, floorLevel: v.floor_level || 1, recommended: nudge.includes(k), rubric: v.rubric }];
    })),
    steps: wo.methodology.map((s) => ({ title: s.title, desc: s.desc, vcs: (s.vcs || []).map(Number), loopnote: s.loopnote || "" })),
    vcTab: vcIds,
    resources: wo.resources,
    // Personal growth manager, for the viewer's stage: the move, then where to start.
    pgm: `${st.say}${st.offsite ? ` ${cap(st.offsite)}.` : ""} Where to start: ${st.pick}`,
    progression: st.meters.map((m) => [m.l, `${m.a}/${m.b}`]),
    grow: st.grow,
    gate: wo.gate.needs,
  };
}

const PLACEHOLDER_READS = Array.from({ length: 3 }, () => ["Topic to study", "Explanation of how this helps with the current work"]);
const PLACEHOLDER_COMMUNITY = [
  ["play", "How I plan my first session on a new work order"], ["reader", "Reading a brief: what to ask before you start"],
  ["reader", "Asking for feedback without getting vague answers"], ["play", "Breaking a big construct into short sessions"],
  ["reader", "Common mistakes in first artefact submissions"], ["play", "Documenting your process as you go"],
];

// The Figma placeholder copy, reshaped (constants live in growth.js / desk.js).
function placeholderContent() {
  const rubric = [1, 2, 3, 4, 5].map((n) => [`Criteria Title for L${n}`, `Description of criteria in a line or two...  ${LOREM}`]);
  const ai = ["Build a unit model for one video in this niche, with time costed at a rate I set.", "Which two inputs is this model most sensitive to?", "At what output volume does this candidate stop being viable, and what does that demand weekly?"];
  return {
    real: false,
    service: WORK_ORDER.service,
    title: WORK_ORDER.title,
    desc: WORK_ORDER.desc,
    tags: WORK_ORDER.tags,
    industry: "Industry Name",
    venture: "Initiative name",
    overview: DETAILS.overview,
    brief: DETAILS.brief,
    produces: ["Functional Deliverable Title", "Functional deliverable details"],
    capabilities: DETAILS.capabilities.map((c) => [c, "Capability Name"]),
    technical: DETAILS.technical,
    transferable: DETAILS.transferable,
    artefacts: Array.from({ length: DETAILS.artefacts }, () => "VC Artefact Name"),
    assetLine: "Description of the final asset",
    resume: WORK_ORDER.resume,
    why: DETAILS.why,
    about: DETAILS.about,
    vcs: Object.fromEntries(Object.entries(DESK_VCS).map(([k, v]) => [Number(k), {
      name: `Value Construct Title ${k}`, desc: "1-2 line description of what it is", leaves: "Artefact description to come here",
      time: "8-10h", ai, reads: PLACEHOLDER_READS, community: PLACEHOLDER_COMMUNITY, bar: !!v.mandatory, floorLevel: 1, recommended: !!v.recommended, rubric,
    }])),
    steps: DESK_STEPS.map((vcs) => ({ title: "Methodology Step Name", desc: `Methodology step details in a line or two......  ${DESK_LOREM}`, vcs, loopnote: "" })),
    vcTab: DESK_VC_TAB,
    resources: Array.from({ length: 5 }, () => ["Resource Title", `Resource details in a line or two......  ${DESK_LOREM}`]),
    pgm: "You do not need to complete the entire work order yet. Contribute to it through a VC of your choice to better understand how this role aligns with you. You can always come back to this work order when activating this role",
    progression: WORK_ORDER.progression,
    grow: "",
    gate: 2,
  };
}
const vcInfo = (woId, vcId) => woContent(woId).vcs[vcId];
