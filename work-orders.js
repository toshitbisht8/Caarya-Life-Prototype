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
}
];

const CATALOG_BY_ID = Object.fromEntries(WORK_ORDER_CATALOG.map((wo) => [wo.ui.id, wo]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Real work orders shown for a role, ahead of the placeholders.
const catalogFor = (roleId) => WORK_ORDER_CATALOG.filter((wo) => roleId && wo.ui.roles.includes(roleName(roleId))).map((wo) => wo.ui.id);

// One shape for every surface, whether the work order is real (catalog) or a Figma placeholder.
function woContent(id) {
  const wo = CATALOG_BY_ID[id];
  return wo ? fromCatalog(wo) : placeholderContent();
}

function fromCatalog(wo) {
  const { identity: idn, pre, background: bg, ui } = wo;
  const vcIds = Object.keys(wo.vcs).map(Number);
  const bars = vcIds.filter((k) => wo.vcs[k].bar).length;
  const n = state.careerStage; // growth.js; Shift+C cycles it (mentor-sim.js)
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
