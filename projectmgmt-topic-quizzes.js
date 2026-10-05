/* TIH Project Management question bank, revision 2 (2026-10-05).
 * Authored questions, not title-substitution templates. Each taught topic has
 * three practice items and one reserved item. Project briefs contribute four
 * reserved items. The curriculum allocates reserved/exam items without reuse.
 * Row format: question | answer | distractor | distractor | distractor | rationale.
 * Correct options rotate deterministically; player-side shuffling remains safe.
 */
(function () {
  'use strict';
  var topics = {};
  function answerPosition(text) {
    var hash = 0;
    for (var i = 0; i < text.length; i++) hash = (Math.imul(hash, 31) + text.charCodeAt(i)) | 0;
    return (hash >>> 0) % 4;
  }
  function add(module, topic, text) {
    var key = 'M' + module + ':' + topic;
    if (topics[key]) throw new Error('Duplicate PM topic: ' + key);
    topics[key] = text.trim().split('\n').map(function (line, index) {
      var p = line.split('|').map(function (s) { return s.trim(); });
      if (p.length !== 6 || p.some(function (s) { return !s; })) throw new Error('Invalid PM question: ' + key);
      var answer = answerPosition(p[0]), opts = p.slice(2, 5);
      opts.splice(answer, 0, p[1]);
      return { id: key + ':' + (index + 1), topic: key, module: module,
        q: p[0], opts: opts, correct: answer, exp: p[5] };
    });
    if (topics[key].length !== 4) throw new Error('PM topic needs four questions: ' + key);
  }

  add(1, 'Welcome to the Course', `
What learning routine best connects this course to practical work? | Study a topic, apply it, then review feedback | Watch every video before taking notes | Memorise quiz letters | Complete only the final test | Applying a concept and reviewing feedback turns information into a usable skill.
Which item provides evidence of learning beyond watching a lesson? | A completed project charter with justified decisions | A list of video lengths | A screenshot of the course homepage | A count of logins | A completed artifact shows how you applied the method.
After an incorrect practice answer, what is the most useful next step? | Read the explanation and revisit the relevant concept | Repeat the same choice quickly | Skip all remaining practices | Copy another learner's score | Feedback identifies the misunderstanding to correct before progressing.
A learner has limited study time each week. Which plan is most workable? | Set regular sessions with small learning and practice goals | Reserve everything for the final evening | Study only when deadlines disappear | Replace exercises with attendance records | Small scheduled goals make progress visible and realistic.
`);
  add(1, 'What is Project Management?', `
What does project management coordinate to achieve an agreed result? | People, work, resources and decisions | Only document formatting | Only individual job titles | Only the launch ceremony | Management integrates the work and resources needed to meet objectives.
A school is creating its first computer lab. Why does it need project management? | Installation, training and acceptance must be coordinated | Every task can proceed independently | Buying computers completes every objective | The supplier can define all school needs | Related activities need coordinated decisions and agreed outcomes.
Which activity belongs to managing a project rather than performing its technical work? | Resolving competing deadlines across teams | Wiring one electrical socket | Painting one classroom wall | Installing one application | The manager coordinates interdependent work; specialists perform technical tasks.
A clinic system is delivered on time but staff cannot use it. What was overlooked? | Readiness and intended user outcomes | The calendar date alone | The number of status emails | The project name | Delivery must support the intended benefit, including user readiness.
`);
  add(1, 'Career Opportunities in Project Management', `
Which entry-level role commonly supports schedules, meetings and action tracking? | Project coordinator | External auditor | Payroll director | Product customer | Coordination work builds experience in organising and following up project activities.
Which example best demonstrates transferable project skills? | Coordinating a community event with a budget and deadline | Listing unrelated software names | Claiming a title without examples | Describing only personal hobbies | Planning and delivery evidence transfers between industries.
When comparing PM job advertisements, what should a learner identify first? | Repeated responsibilities and required evidence of skills | The longest job title | The employer's logo colour | The number of decorative headings | Repeated requirements help target relevant learning and portfolio evidence.
A construction coordinator moves into IT. What should accompany existing planning skills? | Learning the new domain and delivery context | Assuming all technical risks are identical | Discarding all prior experience | Promising expertise without preparation | Transferable skills remain useful but need domain-specific understanding.
`);
  add(1, 'Project Manager Roles & Responsibilities', `
A sponsor and developer give conflicting priorities. What should the PM do? | Clarify objectives and resolve priorities with the decision owners | Tell each side its request is first | Let the newest request always win | Stop reporting the conflict | The PM integrates competing needs through clear decision authority.
Who normally secures senior organisational support for a project? | The sponsor | The temporary meeting recorder | Every supplier individually | The newest trainee | Sponsorship provides organisational backing and escalation support.
Which delegation preserves the PM's responsibility? | Assign work with an owner and review agreed outcomes | Assign work and stop checking progress | Require the PM to do every specialist task | Give tasks without authority or resources | Delegation distributes work while accountability and oversight remain clear.
A blocker exceeds the PM's spending authority. What is appropriate? | Escalate with options and a recommendation | Approve the expense secretly | Ask the supplier to hide the cost | Delay without recording the impact | Escalation sends decisions to the role authorised to make them.
`);
  add(1, 'Project Life Cycle', `
What is a project phase? | A related group of work ending in a meaningful outcome or review | A synonym for every daily meeting | A permanent department | An individual invoice | Phases organise the project's work into useful stages.
How do process groups relate to life-cycle phases? | They can recur within phases | Each group must equal exactly one phase | They apply only after closure | They replace deliverables | Initiating, planning and other processes can be repeated within different phases.
Why hold a review at a phase boundary? | Decide whether evidence supports continuing, changing or stopping | Guarantee that no later risk can occur | Replace all future planning | Automatically release every supplier | A gate checks readiness and continued justification before further commitment.
A prototype reveals an unmet user need. What can an adaptive life cycle support? | Revising subsequent work using feedback | Hiding the prototype until closure | Treating the first plan as unchangeable | Removing the user from reviews | Iteration allows learning to influence the next delivery decisions.
`);
  add(1, 'Types of Projects', `
Which example is a community development project? | Establishing a village water system with agreed handover | Running the same daily pump check indefinitely | Processing routine monthly salaries | Selling existing stock each morning | A defined change with a handover is a project rather than recurring operations.
What most influences a suitable approach across project types? | Uncertainty, requirements and delivery constraints | Whether the name contains 'innovation' | The PM's favourite colour | The number of office chairs | The delivery approach should fit the nature and uncertainty of the work.
Which project likely needs careful physical sequencing? | Constructing a building foundation and structure | Editing an independent draft paragraph | Sorting unrelated contact names | Choosing a meeting title | Physical dependencies constrain the order of construction work.
An NGO project and a commercial project may judge success differently because: | Their intended benefits and stakeholders differ | NGOs cannot use budgets | Businesses do not have risks | Community projects never need schedules | Success criteria should reflect the purpose and stakeholders of each project.
`);
  add(1, 'Course Roadmap', `
Why study initiation before developing a detailed project plan? | Planning should respond to an authorised purpose and objectives | Initiation provides every final cost | Planning never needs stakeholder input | The order is only decorative | Purpose and initial boundaries guide later detailed planning.
How should portfolio documents develop across the course? | Build connected artifacts for a consistent scenario | Use unrelated assumptions in every document | Leave every template blank until graduation | Replace all documents with quiz screenshots | Connected artifacts demonstrate integrated management rather than isolated form filling.
Which checkpoint reveals a learning gap early? | Applying the current topic and checking the result | Counting only completed videos | Waiting until the final examination | Comparing certificates with friends | Application and feedback reveal misunderstandings while there is time to address them.
A learner understands scheduling but struggles with budgeting. How should the roadmap be used? | Add targeted budget practice while maintaining overall progress | Repeat only scheduling lessons | Skip cost topics permanently | Change all scores to complete | A roadmap can guide focused revision without abandoning the whole programme.
`);
  add(1, 'Professional Ethics', `
A supplier offers a personal gift during bid evaluation. What is the appropriate response? | Disclose it and follow the organisation's gift policy | Accept it without telling the evaluation team | Increase the supplier's score | Ask for a larger gift | Disclosure and policy protect the fairness of the selection process.
Which status update demonstrates honesty? | Report a delay with its impact and recovery options | Keep the original date despite contrary evidence | Remove delayed tasks from the report | Report effort as completed deliverables | Accurate reporting supports informed decisions even when news is unwelcome.
What does fairness require when assigning opportunities? | Use relevant criteria consistently | Always favour personal friends | Reward only the loudest person | Exclude people who question decisions | Consistent relevant criteria reduce bias and support trust.
A PM discovers an error in a report already sent. What should happen? | Correct the record promptly and explain the impact | Wait until someone proves the error | Change the file silently without notification | Blame the recipient for relying on it | Responsibility includes acknowledging and correcting mistakes.
`);
  add(1, 'Final Capstone Project', `
A capstone budget funds training but its schedule contains no training activity. What should be corrected? | Align the scope, schedule and budget | Delete the budget total | Add a decorative chart | Rename the project | Integrated plans must describe the same work and assumptions.
What makes a capstone objective assessable? | A measurable result, target and completion date | A broad ambition without evidence | A list of team preferences | A promise to work hard | Reviewers need a defined outcome and evidence threshold.
Which capstone evidence best supports a claimed decision? | A documented comparison of options against criteria | An unsigned claim that everyone agreed | A copied template without data | A photo unrelated to the decision | Traceable criteria and evidence make decisions defensible.
A capstone presentation receives a challenge to its assumptions. What is the strongest response? | Explain the evidence, uncertainty and effect if the assumption fails | Insist assumptions cannot be questioned | Remove all risks from the slides | Claim the plan guarantees success | Professional judgement recognises uncertainty and its consequences.
`);
  add(2, 'Project vs. Operations', `
Which activity is an operation? | Processing the same monthly payroll | Introducing a new payroll system | Moving to a new office | Building a new school | Repeated ongoing service delivery is operational work.
When does a new-service project normally transition into operations? | When the service is accepted and ongoing ownership is transferred | When the first idea is mentioned | Before any training is planned | Whenever the PM stops sending emails | Transition needs acceptance and a responsible operational owner.
What can projects and operations share? | People, resources and organisational objectives | A requirement to end on the same date | Identical uniqueness in every cycle | Freedom from performance measures | Different work types may use the same resources and support the same strategy.
A help desk answers tickets daily while implementing a new portal. How should these be classified? | Ticket handling is operations; portal implementation is a project | Both are always operations | Both are always projects | Ticket handling is the project; implementation is operations | The ongoing service and temporary change effort are distinct.
`);
  add(2, 'Project Constraints', `
A client adds features without moving the deadline. What should be assessed? | Effects on cost, resources, quality and feasibility | Only the new feature names | Only the meeting location | Whether the original logo still fits | Constraints interact; changing scope can affect several performance targets.
Which statement describes a constraint? | The venue must be available by 1 December | The venue might become cheaper | The sponsor prefers blue slides | The team learned a new technique | A constraint limits the available choices.
What should a PM do when all requested targets cannot be met together? | Present trade-offs for an authorised decision | Promise every target without analysis | Hide the conflict from the sponsor | Reduce quality without discussion | Decision makers need realistic options when constraints conflict.
A two-week delay can be recovered only by increasing cost. What does this illustrate? | A schedule-cost trade-off | A risk-free improvement | Proof that scope is irrelevant | Automatic failure of the business case | Recovering time can consume additional resources and money.
`);
  add(2, 'Project Success Criteria', `
Which success criterion is measurable? | At least 90% of trainees pass the agreed skills assessment | Learners feel successful somehow | The project looks impressive | The team holds many meetings | A defined measure and threshold allow objective evaluation.
When should success criteria be agreed? | Early enough to guide planning and acceptance | Only after all results are known | After the certificate is printed | Whenever the PM prefers | Early agreement prevents retrospective changes to the meaning of success.
Why distinguish outputs from outcomes? | A delivered product may not yet produce the intended benefit | Outputs never need acceptance | Outcomes are always immediate | Only outcomes have owners | Delivery and the change it enables require different evidence.
A training project delivers 100 sessions but skills remain unchanged. Which conclusion is justified? | The output target was met but the outcome may not have been | Every objective was necessarily achieved | Session counts prove skill growth | The schedule must be incorrect | Activity or output counts alone do not demonstrate benefits.
`);
  add(2, 'Organizational Structures', `
In a functional organisation, who often controls specialist staff assignments? | The functional manager | The external customer alone | The procurement bidder | The project receptionist | Functional managers typically retain authority over their staff.
What is a common challenge in a matrix structure? | Competing priorities from project and functional managers | Having no specialist departments | A legal ban on collaboration | Absence of all reporting lines | Shared authority needs explicit priorities and resource agreements.
What characterises a projectized structure? | Resources are organised primarily around projects | Every decision belongs to unrelated departments | Project managers have no coordinating role | All work is routine operations | Projectized arrangements give the project a central organisational role.
A shared engineer is assigned to two urgent projects. What should the PM seek? | An agreed allocation with the other manager and resource owner | Two simultaneous full-time commitments | An unrecorded private promise | Removal of the engineer's leave entitlement | A realistic resource agreement resolves conflicting demands.
`);
  add(2, 'Project Governance', `
What is the main purpose of project governance? | Define decision rights, oversight and accountability | Replace every technical procedure | Eliminate the sponsor's responsibilities | Make every decision informally | Governance establishes how decisions and oversight operate.
Which decision most likely requires escalation under a spending threshold? | A change exceeding the PM's delegated budget authority | Choosing a meeting agenda order | Updating an action item's status | Correcting a spelling error | Authority limits determine which decisions need higher approval.
What should a governance decision record include? | The decision, authority, rationale and conditions | Only the meeting's catering cost | Only the speaker's job title | A list of unrelated tasks | A decision trail clarifies what was authorised and why.
A steering committee approves continuation subject to a safety review. What must the PM do? | Track and satisfy the condition before the relevant work proceeds | Treat approval as unconditional | Delete the condition from the minutes | Delegate the condition without follow-up | Conditional approval requires visible ownership and fulfilment.
`);
  add(2, 'Business Case', `
Which question does a business case primarily answer? | Is the proposed investment justified? | Who attends tomorrow's meeting? | Which font should the report use? | How many pages must the charter have? | It compares expected value with cost, risk and alternatives.
Why include a do-nothing option in a business case? | To compare investment with the consequences of no change | To avoid analysing benefits | To guarantee approval | To remove operating costs from all options | The baseline alternative helps establish incremental value.
When should a business case be revisited? | When significant assumptions or expected benefits change | Only after successful closure | Never after authorisation | Only when a new logo is selected | Continued justification depends on current evidence.
A cheaper option fails the core business need. How should it be evaluated? | Against value and feasibility, not price alone | Automatically selected as best value | Treated as identical to other options | Approved because cost is the only criterion | Low cost is insufficient if the option cannot deliver the required benefit.
`);
  add(2, 'Project Charter', `
What is a charter's central function? | Authorise the project and establish high-level direction | Record every daily task update | Replace the final acceptance record | List only procurement invoices | A charter establishes purpose, authority and initial boundaries.
Which content belongs in a high-level charter? | Objectives, sponsor, scope boundaries and key risks | Every test result from closure | Every timesheet for the entire project | All future meeting transcripts | The charter is an authorising overview, not the full detailed plan.
Who normally authorises the charter? | The sponsor or designated initiating authority | A bidder acting alone | The newest project volunteer | Any person receiving the status report | Authorisation comes from the role empowered to initiate the project.
A charter omits the PM's authority to use resources. What ambiguity results? | Which commitments the PM may make | Which colour the Gantt chart uses | Whether the final report needs a title | How many words each task contains | Explicit authority helps prevent disputes over resource commitments.
`);
  add(2, 'Project Management Frameworks', `
Why tailor a management framework? | Fit controls and practices to the project's context | Remove every accountability requirement | Make all projects identical | Avoid explaining decisions | Tailoring preserves useful discipline while matching project needs.
Which situation favours an adaptive delivery approach? | Requirements evolve through frequent user feedback | All learning must wait until closure | Scope is certain and cannot change by agreement | No stakeholder can inspect results | Adaptive delivery supports learning and adjustment under uncertainty.
What is a hybrid approach? | Combining suitable predictive and adaptive practices | Using two unrelated project names | Avoiding both planning and feedback | Repeating every meeting twice | Hybrid delivery combines approaches where different work needs them.
A regulated building project uses iterative software design for its access system. What is sensible? | Tailor methods by workstream while coordinating interfaces | Force every activity into identical cycles | Remove regulatory reviews from the building work | Treat software and building interfaces as unrelated | Different approaches can coexist with coordinated dependencies and controls.
`);
  add(2, 'Project Management Processes', `
What does monitoring and controlling do? | Compare performance with plans and manage needed adjustments | Perform only initial project approval | Replace all delivery work | Wait until closure to observe results | Monitoring and control support timely responses during delivery.
Which activity belongs to planning? | Defining how scope, schedule and cost will be managed | Signing final customer acceptance | Archiving a completed contract | Recording only historical invoices | Planning establishes the approach and baselines for delivery.
Why can planning continue during execution? | New information may require authorised updates | The initial plan must always be discarded | Execution eliminates all uncertainty | Planning and execution are legally incompatible | Plans are refined as evidence changes, using appropriate controls.
A PM discovers a variance and agrees a corrective action. Which processes are interacting? | Monitoring and controlling with planning and execution | Closing with payroll only | Initiating with recruitment only | Procurement with certificate printing | Observing performance leads to revised actions and implementation.
`);
  add(3, 'Identifying Business Needs', `
What should a needs statement describe before proposing a solution? | The performance gap and affected users | A preferred vendor's brochure | A predetermined software brand | Only the available budget | A clear gap keeps solution selection focused on the actual problem.
A clinic has long queues. What is the best first investigation? | Observe patient flow and gather waiting-time data | Immediately buy more computers | Assume staff are unmotivated | Redesign the clinic logo | Evidence helps distinguish symptoms from underlying causes.
Which source strengthens a claimed business need? | User interviews supported by operational data | One unverified rumour | A supplier's unsupported promise | A competitor's slogan | Multiple relevant sources help validate the need.
Two departments describe the same delay differently. What should an analyst do? | Reconcile their evidence and define the shared problem | Adopt the senior person's view without checking | Combine incompatible numbers silently | Cancel all interviews | Clarifying perspectives prevents a solution based on a false diagnosis.
`);
  add(3, 'Defining Project Objectives', `
Which objective is most specific and measurable? | Reduce average registration time from 20 to 10 minutes by June | Make registration better | Work harder on registration | Buy something modern | A baseline, target and deadline make achievement testable.
How does an objective differ from an activity? | It states the result sought rather than the work performed | It lists only meeting attendees | It always contains a supplier name | It cannot be measured | Activities are means; objectives describe intended results.
Who should help validate project objectives? | The sponsor and affected stakeholders | Only the graphic designer | Only the lowest-cost bidder | Only people outside the project | Shared validation connects targets with business and user needs.
A target requires twice the capacity available before the deadline. What should happen? | Reassess feasibility and negotiate the target or resources | Publish it as guaranteed | Remove capacity data from the plan | Wait until the deadline to discuss it | Achievable objectives require realistic resources and constraints.
`);
  add(3, 'Stakeholder Identification', `
Who should be included in a stakeholder register? | People or groups affecting or affected by the project | Only people on the payroll | Only supporters of the proposal | Only those attending the launch | Stakeholders extend beyond the project team and supporters.
A road project affects nearby market traders. Why include them? | Access and livelihoods may be affected | Only contractors can be stakeholders | Traders must approve every invoice | Their inclusion eliminates all objections | Impact creates a relevant interest even without formal project authority.
When should stakeholder identification occur? | Initially and again as the project context changes | Once at the final ceremony | Only when someone complains | Only after all contracts close | New stakeholders and interests can emerge during delivery.
A register lists names but no interests or contact roles. What is missing? | Information needed to plan meaningful engagement | A guarantee of project success | An approved cost baseline | A finished technical design | Useful identification supports subsequent analysis and communication.
`);
  add(3, 'Stakeholder Analysis', `
How should a high-power, high-interest stakeholder generally be engaged? | Closely, with relevant ongoing involvement | Ignored until closure | Sent only generic annual news | Removed from decision discussions | Both influence and interest justify active engagement.
What should stakeholder analysis consider besides formal authority? | Interests, influence, impact and current engagement | Only office location | Only job title length | Only alphabetical order | Informal influence and impact can be as important as hierarchy.
Why update a stakeholder analysis? | Influence and attitudes can change | All stakeholders become identical over time | The initial register must be deleted monthly | Power can never change | An outdated analysis can lead to unsuitable engagement decisions.
A low-power community faces major disruption. What is an appropriate response? | Plan meaningful consultation despite limited formal power | Exclude it because it cannot approve funds | Communicate only through the contractor | Assume silence means consent | Engagement should consider impact and voice, not only authority.
`);
  add(3, 'Scope Definition', `
What does an initial scope boundary establish? | What the project will and will not deliver | Every future issue resolution | Every individual timesheet | Only the project slogan | Boundaries create a shared understanding of the intended work.
A computer-lab project includes installation but excludes ongoing repairs. Where should that be explicit? | The scope exclusions and handover arrangements | Only the launch speech | A private message to one technician | The meeting-room booking | Explicit exclusions reduce misunderstandings about responsibility.
What should happen to an unclear deliverable before detailed planning? | Clarify its requirements and acceptance conditions | Estimate it as if fully understood | Hide it under miscellaneous work | Promise unlimited changes | Clear deliverables support credible estimates and acceptance.
A sponsor requests a second site during initiation. What should be clarified first? | Whether it belongs within the proposed project's boundaries | Which certificate colour to use | Who will photograph the launch | Whether the first site needs no planning | Initial scope decisions determine the size and nature of the project.
`);
  add(3, 'Creating the Project Charter', `
Which evidence should inform a draft charter? | Validated business needs and stakeholder expectations | Only a copied project title | Only last year's attendance list | Only a supplier's advertisement | The charter should reflect the actual justification and context.
What is the difference between a charter assumption and a confirmed fact? | An assumption still needs validation or monitoring | An assumption is guaranteed by definition | A fact always lacks evidence | They are interchangeable labels | Unverified assumptions create uncertainty that must be managed.
A draft charter names no sponsor. What is the key concern? | Authorisation and organisational ownership are unclear | The schedule must be exactly one year | Every supplier becomes the sponsor | Budget estimates become automatically accurate | A clear sponsor anchors accountability and authorisation.
The sponsor approves a revised charter. What should the PM communicate? | The authorised version and its implications | Only the obsolete first draft | Only a verbal promise of approval | Every unrelated internal document | Stakeholders need a shared, current authorising reference.
`);
  add(3, 'Project Approval Process', `
What should precede a formal go/no-go decision? | Review of justification, feasibility, risks and authority | Automatic hiring of all staff | Unapproved major spending | Deletion of alternative options | Approval should follow evidence-based consideration of the proposed investment.
What does conditional approval mean? | Proceed only within the stated conditions | All constraints are permanently removed | Every future change is pre-approved | The project can skip reporting | Conditions qualify what the decision permits.
Why record a rejected proposal's rationale? | Preserve learning and a transparent decision trail | Prevent every future proposal | Replace the need for evidence | Hide who made the decision | The rationale explains the decision and supports future reassessment.
A project needs board approval but receives a manager's informal endorsement. What next? | Obtain approval from the authorised body | Treat the endorsement as equivalent | Start irreversible procurement immediately | Remove the approval rule from the plan | Support and formal authorisation are not the same.
`);
  add(3, 'Initiation Case Study', `
A community requests a water point. Which initiation action comes first? | Confirm needs, users and intended benefits | Purchase a pump before site assessment | Announce a fixed budget without evidence | Select a contractor solely by friendship | Understanding the need comes before committing to a solution.
Two sites serve different groups. What supports a defensible choice? | Agreed criteria, evidence and stakeholder consultation | The PM's unrecorded preference | The first supplier's demand | Choosing the easiest site to photograph | A transparent comparison makes trade-offs visible.
A proposed training centre lacks an operating owner. What initiation risk emerges? | Benefits may not be sustained after handover | Construction becomes automatically cheaper | The charter no longer needs a sponsor | User training becomes unnecessary | Ongoing ownership is necessary to sustain the intended service.
In an initiation case, the benefit depends on an unconfirmed partner contribution. What should be recorded? | The assumption, validation owner and consequence if false | The contribution as guaranteed income | Only the partner's logo | A completed acceptance certificate | Critical assumptions need explicit follow-up and contingency thinking.
`);
  add(4, 'Work Breakdown Structure (WBS)', `
What does a WBS organise? | The full project scope into deliverables and work packages | Only meeting dates | Only staff reporting lines | Only expenditure receipts | A WBS decomposes the work needed to deliver the scope.
What does the 100% rule require? | Include all agreed scope without adding unrelated work | Assign every task exactly 100 hours | Spend all contingency immediately | Give every person equal work | The decomposition must cover the complete parent scope.
How does a WBS dictionary help? | Clarifies each work package's scope and acceptance details | Replaces the business case with acronyms | Records only office vocabulary | Guarantees identical estimates | Definitions prevent different interpretations of work packages.
A WBS omits user training included in the scope statement. What is wrong? | The scope decomposition is incomplete | The schedule automatically includes it anyway | Training cannot be project work | The scope statement must always be ignored | All agreed deliverables and associated work must be represented.
`);
  add(4, 'Project Scheduling', `
What information is needed to build a credible schedule? | Activities, dependencies, durations and resource availability | Only the desired finish date | Only the budget total | Only staff birthdays | A schedule combines the work's logic with time and resource constraints.
Why should a schedule be reviewed with delivery teams? | To validate sequencing and realistic estimates | To make all activities equal in length | To eliminate every dependency | To avoid recording assumptions | Those doing the work can expose impractical planning assumptions.
What is a schedule baseline? | The approved schedule used for comparison | Any temporary list of dates | A record of invoices only | The latest unapproved wish list | An approved reference enables meaningful performance comparison.
A supplier needs three weeks after order confirmation. How should that affect planning? | Include lead time and its dependency in the schedule | Count only the delivery day | Assume ordering and delivery are simultaneous | Remove the supplier from the plan | Lead times constrain when dependent work can start.
`);
  add(4, 'Gantt Charts', `
What does the length of a task bar usually represent on a Gantt chart? | Its scheduled duration | Its owner's salary | Its risk probability | Its acceptance score | Bars place activities across a time axis.
What can dependency links add to a Gantt chart? | Show how one activity's timing affects another | Prove every activity is on budget | Replace all resource information | Make all dates independent | Links reveal sequencing relationships beyond simple dates.
Two bars overlap on a chart. What should be checked before assuming feasibility? | Whether required shared resources are available | Whether their colours match | Whether both task names are short | Whether both tasks have identical costs | Overlap may require resources that cannot work on both tasks simultaneously.
An updated bar moves later than its baseline. What does this indicate? | A schedule variance needing analysis | Automatic scope approval | A completed quality audit | An unchanged forecast | Baseline comparison makes timing deviations visible.
`);
  add(4, 'Milestones', `
Which item is a milestone? | Customer acceptance signed | Train users for three days | Install cables for five days | Review documents for two hours | A milestone marks an event rather than a duration of work.
Why attach clear criteria to a milestone? | So achievement can be verified | So it can be claimed without evidence | So all tasks can be removed | So the budget can remain unknown | Evidence-based criteria prevent premature declarations of success.
How should a milestone normally be represented in a schedule? | As a zero-duration point | As the longest work package | As every employee's leave period | As a recurring expense | Milestones mark significant points in time.
A team reports 'design approved' while the approver has requested revisions. What is correct? | The approval milestone has not yet been achieved | Starting revisions proves approval | Meeting attendance equals sign-off | The milestone should be backdated | Approval requires the agreed decision, not just review activity.
`);
  add(4, 'Critical Path Method (CPM)', `
Parallel paths take 9 and 12 days with no resource limits. What is the minimum project duration? | 12 days | 9 days | 21 days | 3 days | The longest dependent path controls completion under the stated assumptions.
What is total float? | Delay possible without delaying the scheduled project finish | The money left in the budget | The duration of every meeting | The number of free staff | Float measures schedule flexibility, not cost or staffing.
A zero-float activity slips two days with no recovery. What is the expected effect? | The project finish slips two days | The budget necessarily halves | Every other task becomes critical | The project finishes earlier | A delay on the controlling path affects the finish unless action offsets it.
A 10-day path is shortened to 7 days while another remains 8 days. What now controls completion? | The 8-day path | The old 10-day path regardless of changes | The 7-day path | The sum of all task durations | The critical path can change after schedule changes.
`);
  add(4, 'Resource Planning', `
What should resource planning establish? | Required skills, quantities, availability and timing | Only a list of job titles | Only the office floor plan | Only the final payment date | Resource needs must align with when the scheduled work occurs.
One technician is assigned to two full-day tasks on the same day. What is this? | Resource over-allocation | A completed milestone | A cost saving already earned | An approved scope change | The plan exceeds the person's available capacity.
How can resource levelling affect a schedule? | It can delay tasks and change the finish date | It always shortens every task | It removes all dependencies | It guarantees unchanged dates | Levelling adjusts timing to respect resource limits.
A task needs a licensed specialist unavailable until next month. What should the plan reflect? | The availability constraint or a qualified alternative | An unqualified substitute without review | The original date as certain | A zero-duration estimate | Required competence and availability are real planning constraints.
`);
  add(4, 'Budget Planning', `
Why time-phase a budget? | Match planned expenditure to when work will occur | Make every month cost the same | Hide early spending | Replace all cost estimates | Time-phasing supports funding and performance monitoring.
Which cost is often missed in an equipment budget? | Installation, training and maintenance needs | The equipment's brand name | The report's heading | The sponsor's job title | Planning must consider associated lifecycle and implementation costs.
What is the purpose of a funding requirement forecast? | Identify when money must be available | Prove all benefits already occurred | Replace supplier acceptance criteria | Make actual spending equal to estimates | Cash availability must support the timing of planned commitments.
A project has enough total funding but cannot pay an early deposit. What is the problem? | A funding-timing mismatch | An automatic quality failure | A completed risk response | Excessive schedule float | Total affordability does not ensure cash is available when required.
`);
  add(4, 'Cost Estimation', `
What should accompany a cost estimate? | Assumptions, method, scope and uncertainty | Only a single unexplained number | Only the estimator's photograph | Only a desired profit figure | The basis of estimate explains its reliability and limits.
When is analogous estimating especially useful? | Early planning with limited detail and relevant past projects | When no comparable information exists | Only after every invoice is paid | When exact quantities are already guaranteed | Comparable historical data can support an early approximate estimate.
A rate is USD 12 per kit for 80 kits. What is the estimated kit cost? | USD 960 | USD 92 | USD 680 | USD 1,200 | Parametric estimation multiplies quantity by the applicable unit rate.
Why update an estimate as design detail improves? | Better information can narrow uncertainty | Estimates must increase every time | Earlier estimates were necessarily dishonest | Detailed design removes every risk | Progressive detail can improve the estimate's basis and range.
`);
  add(4, 'Procurement Planning', `
What should be defined before requesting supplier offers? | The requirement and evaluation criteria | The preferred bidder's reward | Only the launch date | Only the invoice format | Clear requirements and criteria support comparable offers.
What does a make-or-buy analysis compare? | Internal delivery with external sourcing | Two versions of a meeting agenda | Actual cost with attendance | Staff leave with milestone colours | The analysis considers capability, cost, risk and timing of sourcing options.
Why include procurement lead times in the plan? | Supplier selection and delivery take time before work can proceed | They always reduce the project duration | They replace all technical estimates | They guarantee the cheapest offer | Procurement processes can constrain downstream activities.
A tender needs technical expertise as well as price comparison. Which approach is strongest? | Use disclosed weighted technical and commercial criteria | Select the lowest price regardless of requirements | Change criteria after opening bids | Ask bidders to choose the winner | Consistent criteria evaluate value while supporting fairness.
`);
  add(4, 'Project Planning Workshop', `
Who should attend an integrated planning workshop? | Relevant delivery specialists and decision stakeholders | Only people with no project role | Only the event photographer | Only the last available employee | Planning needs both technical knowledge and decision input.
What is a useful workshop output? | An agreed plan with assumptions, owners and unresolved actions | A attendance photo alone | A list of unassigned wishes | A budget with no scope | An actionable plan records decisions and remaining work.
Two workstreams use conflicting delivery dates. What should the workshop do? | Reconcile dependencies and agree a consistent schedule | Retain both dates without explanation | Hide the conflict in separate slides | Delete the interface task | Integrated planning resolves inconsistencies across workstreams.
A key estimate remains uncertain at workshop close. What should be recorded? | An assumption, validation task, owner and deadline | A fabricated precise figure | A silent blank line | Automatic sponsor approval | Unresolved uncertainty needs explicit follow-up rather than invented certainty.
`);
  add(5, 'Collecting Requirements', `
Which technique helps uncover how users actually perform a task? | Observation | Guessing from job titles | Copying a vendor slogan | Reviewing only the budget | Observation reveals workflow needs users may not mention in interviews.
What makes a requirement testable? | A clear condition with measurable acceptance criteria | A vague adjective such as excellent | An unlimited promise | An unnamed user preference | Testable requirements specify observable evidence of fulfilment.
Two users request incompatible features. What should happen? | Clarify needs and agree priorities | Promise both without analysis | Ignore both users | Let alphabetical order decide | Requirements conflicts need stakeholder discussion and prioritisation.
A requirements workshop excludes frontline staff. What is the main risk? | Actual workflow needs may be missed | Every requirement becomes cheaper | All approvals become invalid automatically | The schedule needs no review | People doing the work provide essential practical requirements.
`);
  add(5, 'Defining Scope', `
Which statement defines a deliverable clearly? | A configured 20-seat lab meeting listed acceptance criteria | Improve everything at the school | Support any future request | Provide modern services somehow | Defined outputs and criteria establish manageable scope.
Why document exclusions? | Clarify work outside the agreed boundaries | Avoid discussing any requirements | Remove all customer responsibilities | Guarantee there will be no changes | Exclusions prevent assumptions about work not included.
How do product scope and project scope differ? | Product scope describes features; project scope includes work to deliver them | Both mean the budget alone | Product scope lists only staff | Project scope excludes delivery work | Features and the work required to produce them are related but distinct.
A scope description includes 'all necessary improvements' without detail. What should the PM seek? | Specific deliverables, limits and acceptance criteria | A larger font | Immediate unconditional sign-off | A shorter project title | Ambiguous boundaries invite conflicting expectations.
`);
  add(5, 'Creating Scope Statements', `
Which item belongs in a scope statement? | Deliverables, exclusions, assumptions and acceptance criteria | Only meeting minutes | Only supplier bank details | Only the final score | Scope statements define what is included and under what conditions.
Who should validate a scope statement? | Relevant stakeholders and authorised approvers | Only the document typist | Only an unrelated supplier | Nobody once it is drafted | Validation aligns expectations before commitment.
Why state assumptions alongside scope? | Show conditions on which the definition depends | Convert uncertainty into guaranteed facts | Avoid estimating the work | Replace every risk response | Assumptions explain the basis and limits of the scope.
A scope statement promises training without naming audience or quantity. What needs refinement? | The training deliverable and acceptance conditions | The project's acronym only | The report's page numbering | The sponsor's biography | Audience and quantity affect effort, cost and acceptance.
`);
  add(5, 'Scope Baseline', `
Which combination forms a typical predictive scope baseline? | Approved scope statement, WBS and WBS dictionary | Budget, payroll and invoices | Charter, email list and timesheets | Risk register and meeting agenda | These approved components define the reference scope.
Can an approved scope baseline change? | Yes, through the agreed change-control process | Never under any circumstances | Only by deleting its history | Whenever any team member wishes | Baselines can evolve with authorised, traceable changes.
Why retain earlier baseline versions? | Preserve the history of approved changes | Encourage use of obsolete plans | Avoid identifying the current version | Replace customer acceptance | Version history explains how the authorised scope evolved.
A team works from an unapproved WBS revision. What should be checked? | Which version is authorised and whether changes were approved | Whether the new file has more colours | Whether the file is larger | Whether its title sounds professional | Work should align with the current approved reference.
`);
  add(5, 'Scope Verification', `
What is the central purpose of scope verification or validation? | Obtain formal acceptance of completed deliverables | Estimate every remaining risk | Recruit the delivery team | Approve unrelated expenditure | Validation confirms the customer accepts the agreed deliverable.
How does acceptance differ from quality inspection? | Acceptance is an authorised decision; inspection checks conformance | They always use identical decision makers | Acceptance replaces all testing | Inspection grants project funding | Technical conformance and customer acceptance are distinct activities.
What supports a fair acceptance review? | Previously agreed criteria and evidence | New criteria invented after delivery | Only the PM's confidence | Only the number of hours worked | Agreed criteria prevent arbitrary acceptance decisions.
A customer rejects a deliverable against an agreed criterion. What next? | Record the gap and arrange correction or an authorised change | Mark it accepted anyway | Delete the criterion silently | Close the project immediately | Rejection requires a documented response to the unmet condition.
`);
  add(5, 'Scope Control', `
What does scope control monitor? | Actual work and changes against the approved scope | Only staff attendance | Only supplier popularity | Only the project website | Scope control protects the agreed boundaries while managing change.
A user requests an extra report during delivery. What should occur first? | Log and assess the request's impact | Build it without estimating effort | Reject it solely because it is new | Hide it under an existing task | Change evaluation supports an informed approval decision.
Who decides a scope change? | The authority defined by the change process | Whoever receives the request first | Always the software vendor | Any team member independently | Approval rights should follow agreed governance.
An approved feature change affects testing and training. What must be updated? | The related scope, schedule, cost and acceptance documents | Only the feature's name | Only the meeting invitation | Nothing beyond a verbal announcement | Integrated changes require consistent downstream plans.
`);
  add(5, 'Preventing Scope Creep', `
What is scope creep? | Uncontrolled expansion beyond agreed scope | Any authorised change | Finishing a task early | Routine progress reporting | The problem is uncontrolled expansion, not all change.
Which practice best discourages informal additions? | Clear boundaries and a visible request-and-approval process | Refusing all stakeholder conversation | Removing acceptance criteria | Promising free extras | A usable process lets requests be evaluated transparently.
Why can many small extras become a serious problem? | Their cumulative effort and cost can be substantial | Small changes never require work | They automatically extend the deadline | They eliminate testing needs | Individually minor additions can consume significant capacity together.
A technician adds an unrequested feature to impress the client. What should the PM address? | Unauthorised work and its consequences | Only whether the feature looks attractive | Only the technician's speed | Nothing if no one complains | Gold plating can add risk and cost without authorised value.
`);
  add(5, 'Scope Management Project', `
A scope project has requirements but no acceptance tests. What is missing? | A way to demonstrate each requirement is met | A larger project team automatically | An extra advertising campaign | A new course title | Acceptance evidence connects stated needs to delivery.
A portfolio WBS includes unrelated office renovations. What should the reviewer challenge? | Work outside the authorised scope | The presence of work-package numbers | The use of a hierarchy | The inclusion of owners | The WBS should cover agreed work and exclude unrelated additions.
A requirements traceability matrix links needs to what? | Deliverables and verification evidence | Only staff birthdays | Only supplier advertisements | Only certificate numbers | Traceability follows each requirement into delivery and testing.
A scope exercise changes a deliverable after approval. What evidence should accompany it? | The change decision and updated baseline | Only the new document's colour | A deleted version history | An informal promise to explain later | Controlled changes need a traceable authorisation and consistent reference.
`);
  add(6, 'Activity Definition', `
What is derived from work packages during activity definition? | Specific actions needed to produce deliverables | Only the sponsor's objectives | Only contract payment terms | Only the organisation chart | Activities describe the work performed to create each deliverable.
Which activity is most actionable? | Configure 20 learner accounts | Improve technology | Achieve excellence | Support innovation | An action with a clear object is easier to estimate and assign.
Why decompose work to a manageable level? | Enable realistic estimation, ownership and tracking | Maximise the number of task names | Eliminate every dependency | Avoid discussing deliverables | Useful detail supports planning and control without needless fragmentation.
A work package says 'training delivered'. Which activity is missing from a plan containing only delivery sessions? | Prepare and validate training materials | Print the closure certificate first | Remove the training objective | Reclassify all costs as revenue | Deliverables often need preparation and validation as well as execution.
`);
  add(6, 'Activity Sequencing', `
What does a finish-to-start dependency mean? | The successor starts after its predecessor finishes | Both tasks must finish together | The predecessor starts after the successor finishes | The tasks have no relationship | The dependency connects the predecessor's finish to the successor's start.
Which example is a mandatory dependency? | A wall must exist before it is painted | The PM prefers Monday meetings | The team likes designing slides first | A report uses blue headings | Physical or technical constraints can require an order.
What is schedule lag? | A planned delay between linked activities | A task's total budget | A person's annual leave balance | A completed milestone | Lag represents waiting time within a dependency.
Concrete needs two days to cure before loading. How should this be represented? | A curing activity or justified lag before loading | Two days removed from all durations | No dependency because curing needs little labour | Loading scheduled before pouring | Waiting time still constrains when subsequent work can begin.
`);
  add(6, 'Time Estimation', `
Which input improves a duration estimate? | Relevant historical data and the team's judgement | The desired deadline alone | The longest task name | The invoice number | Evidence and expertise provide a stronger basis than wishful dates.
Optimistic, most likely and pessimistic estimates help describe what? | Duration uncertainty | Only staff seniority | Only invoice approval | A fixed guarantee | Three-point estimates acknowledge a range of possible outcomes.
Using PERT, what is the expected duration for 2, 5 and 8 days? | 5 days | 15 days | 3 days | 8 days | The weighted estimate is (2 + 4×5 + 8) / 6 = 5.
A task needs 16 hours of effort from someone available four hours daily. What is the minimum working duration? | Four working days | Two working days | Sixteen working days | Half a working day | Duration depends on available capacity as well as effort.
`);
  add(6, 'Schedule Development', `
What should be checked before approving a schedule? | Logic, resources, calendars and constraints | Only the chart's colours | Only the task count | Only the project title | A feasible schedule needs consistent logic and realistic availability.
How can non-working holidays affect completion? | They reduce available working time | They always reduce task effort | They remove technical dependencies | They automatically approve overtime | Calendars affect when work can occur.
What is fast tracking? | Overlapping work that was planned sequentially | Adding funds to every task | Removing all quality checks | Extending every duration | Overlap can save time but may increase rework risk.
A recovery plan adds skilled staff to shorten a critical activity at extra cost. What technique is this? | Crashing | Resource smoothing only | Scope verification | Risk avoidance by cancellation | Crashing trades additional resources or cost for shorter duration.
`);
  add(6, 'Schedule Control', `
What is needed to assess schedule performance reliably? | An approved baseline and current progress data | Only the original launch announcement | Only staff opinions | Only the total cost | Comparison needs both a reference and actual performance evidence.
A delayed noncritical task still has sufficient float. What should be checked? | Whether the remaining float protects dependent completion | Whether all milestones must be moved | Whether the task can be deleted | Whether cost variance is necessarily negative | Not every activity delay immediately delays the project finish.
When should a finish-date forecast be revised? | When credible performance data changes the expected outcome | Only after the finish date passes | Only after a new sponsor arrives | Never after baseline approval | A forecast should reflect current expectations; the baseline remains the reference.
A team hides delays by changing the baseline each week. Why is that wrong? | It erases the reference needed to evaluate performance | Weekly reporting is prohibited | All baselines must contain equal durations | Forecasts can never change | Baseline changes require authorisation, not concealment of variance.
`);
  add(6, 'Time Tracking', `
What should a useful time record connect? | Effort, activity and reporting period | Only employee initials | Only the project logo | Only the office address | Structured records support effort analysis and planning improvement.
Why is time spent not the same as progress? | Effort may not produce accepted work | Hours always equal completed deliverables | Every task has identical productivity | Time records replace inspections | Progress needs output evidence in addition to effort.
A task used 30 hours but is only half complete. What should be reviewed? | Remaining effort and reasons for the difference | Only whether 30 is a round number | Only the worker's job title | Whether to mark it complete | Actual effort informs a realistic estimate of work remaining.
What makes time tracking more accurate? | Timely entries using consistent task codes | Reconstructing a month from memory | Charging all hours to one generic task | Recording only successful activities | Frequent consistent records reduce recall errors and misclassification.
`);
  add(6, 'Productivity Tools', `
What should drive selection of a personal productivity tool? | The workflow and information the user needs to manage | The most complicated feature list | The highest subscription price | The brightest icon | A tool is useful when it supports the actual work.
How does a prioritised task list help? | Directs attention to important work and deadlines | Guarantees every estimate is correct | Replaces stakeholder decisions | Removes every interruption | Priority visibility helps allocate limited attention.
What is a risk of using several unsynchronised task apps? | Conflicting records and missed updates | Automatic better accountability | Guaranteed faster delivery | Elimination of duplicate work | Fragmented records can undermine a reliable source of task status.
A team receives excessive notifications and misses urgent alerts. What should it adjust? | Notification rules and escalation channels | Add more alerts to every event | Remove all task ownership | Stop recording deadlines | Relevant signals should be distinguishable from routine noise.
`);
  add(6, 'Time Management Exercises', `
In a planning exercise, how should a large urgent assignment be approached? | Break it into prioritised actions and allocate time | Wait for an uninterrupted full week | Begin with unrelated easy tasks | Estimate only after the deadline | Decomposition and prioritisation make the work manageable.
A one-day exercise contains ten hours of tasks but six available hours. What is required? | Reprioritise, delegate or renegotiate the work | Assume four extra hours appear | Mark all tasks complete | Hide the capacity gap | Workload must fit capacity or be explicitly adjusted.
Why review estimated versus actual time after an exercise? | Improve future estimates and habits | Prove estimates should never be made | Replace every deadline with an average | Assign blame without context | Reflection identifies planning biases and sources of lost time.
Repeated interruptions consume a learner's planned study block. What experiment is sensible? | Protect a shorter focused block and review its effectiveness | Abandon scheduling entirely | Add more simultaneous tasks | Record interrupted time as completed study | A focused experiment tests a practical improvement.
`);
  add(7, 'Project Budgeting', `
What distinguishes a project budget from a cost estimate? | A budget allocates authorised funding to planned work | A budget contains no assumptions | Estimates are always actual payments | Budgets cannot be time-phased | Estimates inform the funding plan and authorised allocations.
A budget omits supplier delivery charges. What should be done? | Include applicable charges and revise the total | Treat them as free automatically | Remove the supplier from the scope | Charge them to an unrelated project | All relevant costs need a justified place in the budget.
Why distinguish committed costs from paid costs? | Existing obligations may create future payments | Unpaid commitments have no financial effect | Paid costs are always estimates | Commitments replace deliverables | Cash already spent is not the whole remaining liability.
A training budget includes USD 600 materials, USD 900 facilitation and USD 150 transport. What is the subtotal? | USD 1,650 | USD 1,500 | USD 1,050 | USD 1,750 | Add all three planned cost categories before reserves or other charges.
`);
  add(7, 'Cost Estimation Methods', `
Which method estimates individual work packages and totals them? | Bottom-up estimating | Random allocation | Schedule compression | Stakeholder mapping | Bottom-up estimates aggregate detailed components.
Which method uses a cost per measurable unit? | Parametric estimating | Informal voting | Scope validation | Issue escalation | Parametric methods apply a relevant rate to a quantity.
What limits an analogous estimate? | Differences between the current and reference projects | The presence of historical evidence | The use of comparable scope | Recording its assumptions | Differences in scale, context and timing can weaken comparability.
An estimate uses last year's material prices during rapid price changes. What is necessary? | Validate current rates and document uncertainty | Assume past rates remain guaranteed | Delete material quantities | Replace every cost with a fixed allowance | Outdated input data can distort an otherwise sound method.
`);
  add(7, 'Budget Baseline', `
What is the cost baseline used for? | Comparing approved planned cost with performance | Guaranteeing every payment date | Recording only office rent | Replacing the scope statement | The baseline is the approved time-phased cost reference.
How are contingency and management reserves typically distinguished? | Contingency addresses identified risks; management reserve addresses unforeseen in-scope work | Both are unrestricted profit | Management reserve is always in the cost baseline | Contingency must never be used | The reserves have different purposes and approval arrangements.
Who should authorise a baseline increase? | The authority specified by governance | Any person editing the spreadsheet | The lowest-cost bidder | Every learner independently | A reference budget changes through approved control.
An authorised change adds USD 2,000 to the baseline. What should accompany the update? | A documented change record and revised cost plan | Deletion of the original approval | A hidden spreadsheet adjustment | An unchanged funding forecast despite the addition | Traceability and consistency keep the new baseline meaningful.
`);
  add(7, 'Cost Control', `
What is an early signal for cost-control review? | Actual and committed costs diverging from the plan | A change in report font | A larger mailing list | A completed team photo | Variances and obligations help identify emerging overruns.
Why should cost control include a forecast to complete? | Current spending alone does not show total expected cost | Future work is always free | Forecasts replace all invoices | Costs stop when a report is sent | Remaining work can materially change the final result.
A supplier invoice exceeds the agreed quantity. What should happen first? | Verify the contract, delivery evidence and invoice | Pay without checking | Delete the invoice from records | Reduce unrelated staff pay | Reconciliation distinguishes a valid variation from an error.
A project appears under budget because activities are delayed. What is the sound interpretation? | Check delivered work and forecast before calling it a saving | Lower spending proves efficiency | Cancel all unfinished work | Report the unused funds as profit | Spending must be interpreted alongside physical progress.
`);
  add(7, 'Earned Value Management (EVM)', `
What does earned value represent? | Budgeted value of work actually completed | The cash paid to suppliers | The budget for all future work | Expected profit from sales | EV expresses accomplished work in baseline budget terms.
With EV = 800 and AC = 1,000, what is CPI? | 0.8 | 1.25 | 200 | 1.8 | CPI = EV / AC = 800 / 1,000.
With EV = 600 and PV = 750, what is SPI? | 0.8 | 1.25 | 150 | 1.8 | SPI = EV / PV; below one indicates less value completed than planned.
A project has EV = 4,000, AC = 5,000 and PV = 4,500. What are CV and SV? | CV = -1,000; SV = -500 | CV = 1,000; SV = 500 | CV = -500; SV = -1,000 | CV = 9,000; SV = 8,500 | CV = EV - AC and SV = EV - PV; both are unfavourable here.
`);
  add(7, 'Financial Reporting', `
What should a financial status report distinguish? | Budget, actuals, commitments and forecast | Only paid invoices | Only the largest expense | Only the account balance | Different financial measures answer different management questions.
Why state the reporting cutoff date? | So readers know the period and transactions covered | To replace the need for totals | To prove all invoices are approved | To guarantee no future costs | A common cutoff makes comparisons interpretable.
A financial report combines USD and LRD without conversion. What is wrong? | The total mixes incompatible currency units | Multiple currencies cannot be used in projects | All LRD costs should be deleted | The total is automatically conservative | Currency amounts need stated units and a consistent conversion basis.
A budget variance is reported without explanation. What should be added? | Cause, likely impact and recommended action | Only a larger chart | Only more decimal places | Only the preparer's signature | Decision makers need meaning and response options, not just numbers.
`);
  add(7, 'Cost Performance Analysis', `
What does a negative cost variance indicate in EVM? | Earned value is less than actual cost | The project necessarily finishes late | The budget has never been approved | Planned value equals zero | Negative CV means the completed work cost more than its budgeted value.
If BAC is USD 10,000 and future cost efficiency remains CPI = 0.8, what is EAC? | USD 12,500 | USD 8,000 | USD 10,800 | USD 2,000 | Under that assumption, EAC = BAC / CPI.
Why analyse cost trends across reporting periods? | Identify persistent deterioration or improvement | Ensure every period shows the same value | Replace the scope baseline | Hide one unfavourable result | Trends can reveal patterns a single snapshot misses.
A favourable CPI comes from understated actual invoices. What is the right response? | Correct the data before interpreting performance | Celebrate the apparent efficiency | Increase the baseline to match it | Ignore unpaid liabilities permanently | Performance ratios are only useful when inputs are reliable.
`);
  add(7, 'Budget Management Assignment', `
A submitted budget has totals but no quantities or rates. What should be requested? | The basis of estimate for each cost line | Only a new cover page | A larger contingency without explanation | A certificate screenshot | Quantities and rates make the estimate reviewable.
A budget assignment includes contingency twice. What is the effect? | The total may be overstated | The schedule becomes shorter | Risk disappears | Acceptance becomes automatic | Double counting distorts the funding requirement.
A student's revised forecast exceeds funding. What is the best recommendation? | Present realistic scope, timing or funding options for approval | Hide the excess in miscellaneous costs | Assume the donor will pay automatically | Remove already incurred costs | Financial gaps require transparent choices by authorised decision makers.
Which evidence best demonstrates budget control in a portfolio? | Baseline, actuals, variance explanation and an approved response | Only the original total | Only blank invoice forms | Only a list of staff names | Control involves measurement, analysis and action.
`);
  add(8, 'Quality Planning', `
When should quality criteria be defined? | During planning with relevant stakeholders | Only after the customer complains | Only after all testing ends | After the final certificate | Early criteria guide how work is performed and checked.
Which quality requirement is measurable? | All installed computers pass the agreed connectivity test | Computers should be wonderful | Training should feel premium | Reports should look modern | Observable tests make conformance assessable.
What should a quality plan identify? | Standards, checks, responsibilities and evidence | Only a slogan about excellence | Only the purchase date | Only the team's uniforms | Quality needs operational definitions and assigned responsibilities.
A project plans inspection but no prevention activities. What should be considered? | Training and process controls that reduce defects before they occur | Cancelling all inspections | Assuming rework has no cost | Replacing requirements with opinions | Prevention and inspection complement each other.
`);
  add(8, 'Quality Assurance', `
What does quality assurance primarily examine? | Whether processes can consistently produce the required quality | Only the finished item's colour | Only employee attendance | Only the payment schedule | Assurance focuses on how quality is built into the work.
Which is an assurance activity? | Reviewing whether the testing process follows agreed procedures | Counting only final defects | Signing a supplier invoice | Recording a milestone date | Process reviews assess the effectiveness of quality arrangements.
Why check process adherence before final delivery? | Find systemic weaknesses while improvement is still possible | Guarantee that testing is unnecessary | Eliminate all customer involvement | Replace the project charter | Early process feedback can prevent repeated defects.
A team uses an outdated installation procedure. What is an assurance response? | Update, communicate and verify the correct process | Inspect only the launch banner | Ignore it if staff are experienced | Record every installation as accepted | Assurance addresses the process weakness causing potential nonconformance.
`);
  add(8, 'Quality Control', `
What is quality control concerned with? | Checking outputs against defined requirements | Setting the organisation's strategy | Hiring the project sponsor | Allocating all contingency funds | Control measures whether delivered work conforms.
A test fails an acceptance tolerance. What should be recorded? | The defect, evidence, owner and required follow-up | Only that testing occurred | A successful result for convenience | The tester's preferred solution without evidence | Defects need traceable correction and verification.
Why retest after correcting a defect? | Confirm the correction meets the requirement | Increase the reported task count only | Avoid informing the customer | Replace all future inspections | A claimed fix is not proof that the output now conforms.
A sample passes inspection. What can be concluded responsibly? | The sample met the checked criteria within the sampling method's limits | Every untested item is certainly defect-free | All processes are permanently reliable | No further control is ever needed | Sampling provides evidence with limits, not absolute certainty.
`);
  add(8, 'Continuous Improvement', `
What is the purpose of a small improvement cycle? | Test a change, measure results and learn | Replace all standards every morning | Make change without evidence | Delay every delivery indefinitely | Small cycles reduce uncertainty about what improves performance.
In PDCA, what happens during Check? | Compare observed results with expectations | Authorise every unrelated purchase | Assign all blame to staff | Stop collecting data | Checking evaluates whether the tested change worked.
When should an effective improvement be standardised? | After evidence supports the change | Before any trial or measurement | Only when the project fails | Whenever a supplier requests it | Standardisation should follow validation of benefit.
A new checklist reduces errors but doubles processing time. What should the team review? | The overall trade-off and possible refinement | Error rate alone with no context | Only the checklist's title | Whether to hide the time data | Improvement should consider the full performance impact.
`);
  add(8, 'Root Cause Analysis', `
What distinguishes a root cause from a symptom? | It helps explain why the problem occurs | It is simply the loudest complaint | It is always a person's name | It is the most recent incident date | Addressing underlying causes reduces recurrence.
What is the purpose of asking successive 'why' questions? | Explore contributing causal links | Force a predetermined confession | Replace all evidence gathering | Guarantee exactly five answers | The technique probes causes; conclusions still need evidence.
How can a fishbone diagram help? | Organise possible causes into categories | Prove one cause without investigation | Calculate the full project budget | Approve a scope change | It structures hypotheses for investigation.
Repeated data errors follow an ambiguous form field. What response targets the cause? | Clarify the field and validate the revised form | Correct each record but keep the ambiguity | Blame every data-entry worker | Stop checking the data | Removing the ambiguity addresses a recurring source of error.
`);
  add(8, 'Quality Audits', `
What should an audit compare? | Evidence of practice against defined criteria | Only two employees' opinions | Only the number of reports | Only marketing claims | Audit findings need a clear criterion and supporting evidence.
Why is audit independence useful? | It reduces self-review bias | It removes the need for competence | It guarantees no findings | It makes evidence unnecessary | An independent perspective can improve objectivity.
What makes an audit finding actionable? | A specific gap, evidence and assigned corrective follow-up | An unexplained negative label | A rumour without context | A generic demand to improve | Clear findings allow proportionate corrective action.
An audit finds an undocumented approval step. What should be verified next? | Whether required approvals occurred and how the control will be restored | Whether the report has a cover photo | Whether all staff should be dismissed | Whether the requirement can be silently erased | Evidence and corrective control matter more than unsupported blame.
`);
  add(8, 'Customer Satisfaction', `
Why can a technically conforming deliverable still disappoint users? | It may not meet their practical needs or expectations | Technical tests are always meaningless | Users never understand quality | Acceptance criteria can never be improved | Conformance and fitness for use both matter.
Which method gives useful satisfaction evidence? | Targeted feedback from representative users | Only praise from the project team | Only the number of launch guests | Only the supplier's opinion | Representative feedback is more informative than selective approval.
What should happen to a recurring customer complaint? | Investigate its cause and agree a response | Treat repetition as proof it is unimportant | Remove the feedback channel | Count it only as a meeting request | Repeated feedback can reveal a systemic gap.
Survey results exclude people unable to use the service. What is the concern? | The results may overstate satisfaction | Nonusers can never provide relevant feedback | The sample automatically represents everyone | Exclusion eliminates all bias | Excluding affected users can hide important usability failures.
`);
  add(8, 'Quality Improvement Project', `
A quality project claims improvement without baseline data. What is weak? | The evidence for comparing before and after performance | The need for a project title | The right to assign owners | The ability to hold meetings | A baseline helps demonstrate the size of change.
Which improvement target is useful? | Reduce registration errors from 12% to 4% within eight weeks | Eliminate every possible problem forever | Make everyone happier somehow | Hold more meetings | A measurable target connects action with an evaluable result.
Why pilot a new quality procedure? | Test effectiveness and unintended effects on a smaller scale | Avoid collecting any evidence | Guarantee organisation-wide success | Replace staff training permanently | Pilots expose problems before wider rollout.
A pilot succeeds with expert supervision but fails elsewhere. What should be examined? | Training, resources and conditions needed for reliable adoption | Only the pilot's title | Whether all data should be averaged away | Whether feedback should be stopped | Transferability depends on the conditions that enabled the result.
`);
  add(9, 'Risk Identification', `
How does a risk differ from an issue? | A risk is uncertain; an issue has occurred | Risks always have negative effects | Issues can never affect objectives | They mean exactly the same thing | Uncertainty distinguishes a risk from an existing problem.
Which risk statement is most useful? | Heavy rain may block access and delay material delivery | Weather | Delivery is important | The team needs transport | Cause, uncertain event and consequence make a risk actionable.
Why involve different specialists in risk identification? | They see different sources of uncertainty | They guarantee no risk is missed | They replace the risk owner | They make every risk equally likely | Diverse perspectives improve coverage of possible threats and opportunities.
A previously reliable supplier faces financial difficulty. What should the PM do? | Assess and record the new delivery risk | Assume the original assessment remains valid | Mark the project complete | Remove the supplier from all records | New information can create or change project risks.
`);
  add(9, 'Risk Analysis', `
What does qualitative risk analysis primarily support? | Prioritising risks using agreed probability and impact scales | Calculating every invoice exactly | Guaranteeing the finish date | Approving all responses automatically | Relative ratings help focus limited management attention.
A threat has probability 0.25 and a USD 4,000 loss if it occurs. What is its expected monetary loss? | USD 1,000 | USD 4,250 | USD 16,000 | USD 3,000 | Expected monetary value uses probability multiplied by impact.
Why define rating scales before scoring risks? | Make assessments more consistent | Make every risk high priority | Remove expert judgement entirely | Ensure all risks disappear | Shared definitions reduce inconsistent interpretation of ratings.
Two risks share a supplier and may occur together. What should analysis consider? | Correlation and combined exposure | Only their alphabetical order | That independent estimates are always sufficient | That one must be deleted | Related risks can create aggregate exposure beyond isolated ratings.
`);
  add(9, 'Risk Response Planning', `
Moving outdoor work to a dry season to remove a rain threat is which response? | Avoidance | Transfer | Passive acceptance | Exploitation | Changing the plan can remove exposure to a threat.
Buying insurance mainly provides what type of threat response? | Transfer of specified financial consequences | Removal of every underlying hazard | Elimination of all project responsibility | Guaranteed schedule recovery | Transfer reallocates covered consequences; the event may still occur.
What should a response plan specify? | Action, owner, trigger, resources and follow-up | Only a risk colour | Only an optimistic statement | Only the original estimate | Responses must be executable and monitored.
A backup supplier reduces delivery exposure but adds compatibility risk. What is the added risk called? | A secondary risk | A completed issue | A scope baseline | An earned benefit | A response itself can introduce new uncertainty.
`);
  add(9, 'Risk Monitoring', `
What should be monitored after a response is implemented? | Residual exposure and whether the response works | Only whether a meeting was held | Only the initial risk number | Only the project's logo | Implemented actions do not automatically eliminate risk.
What is a risk trigger? | A warning condition that prompts a planned action | The final project certificate | The budget total | An approved deliverable | Triggers make contingency actions timely.
When a risk event occurs, what should the team do? | Activate the response and manage the resulting issue | Keep recording it only as a distant possibility | Delete all related evidence | Assume the original schedule is unaffected | An occurred event needs active issue management as well as risk updates.
A threat's probability falls after successful mitigation. What should be updated? | The risk rating and remaining response needs | Every unrelated requirement | Only the meeting attendance | Nothing until closure | Monitoring keeps the register aligned with current exposure.
`);
  add(9, 'Risk Register', `
Which entry makes a risk register actionable? | A named owner and planned response | A colour without explanation | A project slogan | A supplier logo | Ownership and actions turn identification into management.
Why distinguish a risk owner from an action owner? | Overall monitoring and a specific response task may belong to different people | Risk owners must do every task personally | Action owners can approve any budget | The roles always refer to external auditors | Clear roles prevent gaps in follow-through.
What should a risk status indicate? | Whether it is active, changing, realised or closed | Only its original list position | Only the number of readers | Only the author's initials | Status communicates the current management state.
A register has many high risks with blank owners. What is the priority improvement? | Assign accountable owners and response follow-up | Change every rating to low | Hide the register from the sponsor | Add more colour categories | Unowned risks are unlikely to receive reliable action.
`);
  add(9, 'Opportunity Management', `
What is a project opportunity? | An uncertain event with a potential positive effect | Any completed benefit | A guaranteed cost saving | An issue that must be ignored | Positive uncertainty can be managed as well as threats.
What does enhancing an opportunity mean? | Increase its probability or positive impact | Remove every uncertainty by cancelling work | Transfer all responsibility without agreement | Record it only after closure | Enhancement improves the chance or scale of benefit.
A partnership combines capabilities to pursue an opportunity. Which response does this illustrate? | Sharing | Avoiding | Escalating every task | Correcting a defect | Sharing allocates opportunity ownership to exploit combined strengths.
An early-delivery discount is possible if materials arrive promptly. What should be assessed? | Expected benefit, likelihood and cost of pursuing it | Only the discount headline | Only the supplier's enthusiasm | Whether all risk records can be deleted | Pursuing opportunities also involves trade-offs and uncertainty.
`);
  add(9, 'Risk Management Workshop', `
What should a risk workshop produce beyond a list of concerns? | Priorities, owners and response actions | Only a group photograph | Only a new project name | Only an attendance count | Useful workshops turn observations into management commitments.
How should a facilitator handle one person dominating risk discussion? | Invite other perspectives through a structured process | Accept only the loudest view | End evidence gathering immediately | Remove all minority concerns | Balanced participation improves identification and analysis.
Why revisit assumptions during a risk workshop? | Uncertain assumptions may hide important exposure | Assumptions are always established facts | Assumptions cannot affect cost | Every assumption must become a project | Testing assumptions helps uncover consequences if they fail.
A workshop rates all risks high without criteria. What should be improved? | Agree scales and reassess based on evidence | Add more red formatting | Delete low-cost responses | Approve all spending immediately | Meaningful prioritisation needs consistent criteria.
`);
  add(10, 'Communication Planning', `
What should a communication plan match? | Audience needs, information, frequency, channel and owner | Every audience to the same long report | Only the PM's preferred app | Only meeting-room availability | Communication should fit the recipient and decision need.
Which channel suits an urgent complex disagreement? | Timely interactive discussion followed by a record | An unread archive folder alone | A generic newsletter next month | A silent dashboard update | Interaction enables clarification; a record preserves the agreement.
Why confirm understanding after a critical instruction? | Sending a message does not prove it was understood | All recipients interpret messages identically | Written communication is never useful | Confirmation replaces task ownership | Feedback closes the communication loop.
A rural team has unreliable data access. What should the plan consider? | Accessible channels and realistic update arrangements | Mandatory continuous video calls | Removing the team from reporting | Assuming access matches headquarters | Communication methods must fit actual access conditions.
`);
  add(10, 'Stakeholder Engagement', `
How does engagement differ from simply sending information? | It involves participation and responding to concerns | It requires agreement with every request | It means only mass emails | It excludes consultation | Engagement is a two-way relationship, not just transmission.
What helps move a resistant stakeholder toward constructive participation? | Understand the concern and involve them appropriately | Label them difficult without discussion | Remove all feedback channels | Promise benefits without evidence | Understanding interests supports a relevant response.
Why compare current and desired engagement? | Identify targeted actions to close the gap | Rank people by personal popularity | Eliminate all dissent | Replace the stakeholder register | Engagement analysis helps plan specific interventions.
A community representative changes midway through delivery. What should happen? | Re-establish communication and confirm interests and commitments | Assume the new representative knows everything | Ignore the change until closure | Delete previous decisions | Relationships and shared understanding need renewal after role changes.
`);
  add(10, 'Meeting Management', `
What should a meeting agenda clarify? | Purpose, decisions needed and time allocation | Only the venue's address | Only the lunch menu | Only the project slogan | A clear agenda focuses preparation and discussion.
What makes an action item usable? | A specific action, owner and due date | A vague wish without responsibility | An unrecorded suggestion | A list of all attendees | Ownership and timing support follow-through.
When is an asynchronous update preferable to a meeting? | When information can be understood without live discussion | When a sensitive conflict needs immediate dialogue | When a decision requires negotiation | When participants need real-time clarification | Simple updates may not justify synchronous time.
A meeting ends with different interpretations of the decision. What should the chair do? | Summarise the agreement and confirm the record | Assume silence resolves the difference | Schedule the same meeting indefinitely | Publish only attendance | Explicit confirmation reduces ambiguity.
`);
  add(10, 'Conflict Resolution', `
What does a collaborative conflict approach seek? | Understand interests and solve the underlying problem | Ensure the most senior person always wins | Avoid every disagreement forever | Assign blame before hearing evidence | Collaboration addresses needs rather than only positions.
When can temporarily withdrawing from a conflict be appropriate? | To cool emotions before a planned follow-up | To abandon a safety issue permanently | To hide all project problems | To avoid every difficult decision | A short pause can help, but unresolved issues need follow-up.
Two specialists disagree on design. What should the PM establish first? | The facts, criteria and interests behind their positions | Which person is more popular | Which person spoke first | Which option has a longer name | Shared evidence and criteria support constructive resolution.
A conflict concerns a possible safety breach. What takes priority? | Address the safety concern through the appropriate process | Preserve harmony by suppressing the concern | Wait for the next annual review | Ask the complainant to stay silent | Safety concerns require prompt handling, not compromise for appearances.
`);
  add(10, 'Negotiation Skills', `
What should be prepared before a negotiation? | Interests, evidence, limits and alternatives | Only an opening demand | Only the other party's weaknesses | Only a planned threat | Preparation supports realistic choices and informed concessions.
What is a BATNA? | The best alternative if no agreement is reached | The first price a supplier states | The final project invoice | The average of all offers | Knowing alternatives helps judge whether a proposed agreement is worthwhile.
Why separate positions from interests? | Different positions may reflect needs that can be met in several ways | Interests are irrelevant to agreement | Positions never change | All parties value identical things | Exploring underlying needs can reveal workable options.
A supplier offers a lower price in exchange for later delivery. What should be evaluated? | The total impact of the price-time trade-off | Price alone | The supplier's logo | Only the contract page count | A concession is useful only in the context of project objectives.
`);
  add(10, 'Presentation Skills', `
What should shape a project presentation? | The audience's knowledge and decision needs | Every available data point | Only the speaker's favourite topic | The maximum possible slide count | Relevant selection helps the audience understand and act.
Which slide best supports a funding decision? | Options, costs, risks and a clear recommendation | A dense list of unexplained acronyms | Only decorative images | A timeline without any decision request | Decision presentations should make the choice and implications clear.
How should a presenter respond to a question they cannot answer accurately? | Acknowledge the gap and agree to verify it | Invent a confident figure | Criticise the questioner | Change the reported data secretly | Honest follow-up is more credible than speculation presented as fact.
A chart uses an unlabeled axis. What should be corrected? | The measure, units and relevant context | Only the chart colour | Only the slide transition | Only the company logo | Charts need clear labels to avoid misleading interpretation.
`);
  add(10, 'Status Reporting', `
What should a useful status report include? | Progress, variances, risks, issues and decisions needed | Only positive achievements | Only team attendance | Only copied plans | Reporting should support informed action on current performance.
Why define red, amber and green status thresholds? | Make status ratings consistent and interpretable | Ensure every report stays green | Replace all narrative explanation | Remove escalation responsibilities | Shared thresholds reduce subjective or misleading ratings.
How should an unresolved issue be reported? | With impact, owner, next action and escalation need | As a completed task | Only as an unnamed concern | Without any due date or consequence | Actionable reporting makes responsibility and urgency visible.
A project is on schedule but expects a serious cost overrun. What should the summary show? | Both the schedule position and cost concern | Green overall without explanation | Only the favourable schedule result | No report until closure | A balanced summary must not conceal material problems.
`);
  add(10, 'Communication Assignment', `
A communication matrix lists audiences but no frequency. What is missing? | When each audience should receive information | The final project score | The WBS hierarchy | The supplier's tax code | Timing is a core communication planning dimension.
A donor report uses technical jargon the audience cannot interpret. What should change? | Explain relevant results in accessible language | Add more abbreviations | Remove all supporting evidence | Increase the document length only | Clarity should match audience needs while retaining substance.
How can a communication assignment demonstrate effectiveness? | Show feedback and evidence that the intended message was understood | Count emails alone | Count document pages alone | List every software icon | Reach does not by itself establish understanding or usefulness.
A project team shares sensitive beneficiary data in a public status report. What should be revised? | Limit the report to necessary appropriately protected information | Add more personal details for credibility | Remove all progress information | Assume public access is always acceptable | Reporting should communicate progress without unnecessary exposure of personal data.
`);
  add(11, 'Building High-Performing Teams', `
What helps a new team work effectively together? | Shared goals, clear roles and working agreements | Unspoken expectations | Competition for all information | Changing priorities without explanation | Clarity and shared expectations support coordinated work.
What does psychological safety enable? | Raising concerns and admitting mistakes without humiliation | Freedom from accountability | Agreement with every decision | Avoidance of quality standards | Safe speaking-up helps problems surface early while standards remain.
Why consider complementary skills when forming a team? | The work may require different capabilities | Identical skills always cover every need | Skill gaps disappear with motivation | Team size alone determines performance | Capability coverage matters more than headcount alone.
A team meets deadlines but members hide errors. What should the leader address? | Trust, learning and safe reporting of problems | Only the number of completed tasks | Only individual speed | Whether reports can omit defects | Hidden errors undermine sustainable performance.
`);
  add(11, 'Leadership Styles', `
Why adapt leadership style to the situation? | Experience, urgency and task complexity vary | A leader should have no consistent values | Every team needs identical direction | Adapting eliminates accountability | Leadership support should fit the team's needs and context.
Which behaviour reflects servant leadership? | Helping the team remove barriers to effective work | Keeping all information with the leader | Seeking personal credit for every result | Avoiding team development | Service-oriented leadership enables others to succeed.
When might more explicit direction be useful? | A novice team faces an unfamiliar high-risk task | Experts already share a proven routine | The only goal is reducing dialogue | Every decision is trivial | Clear guidance can support safe performance when experience is limited.
An experienced team is micromanaged on every small decision. What adjustment may help? | Delegate suitable decisions within clear boundaries | Remove all objectives | Increase approvals for routine work | Stop providing resources | Autonomy with boundaries can improve ownership and responsiveness.
`);
  add(11, 'Motivation Techniques', `
Which approach recognises differences in motivation? | Ask about individual goals and meaningful support | Assume everyone values the same reward | Reward only long working hours | Use pressure as the sole technique | Motivators differ across people and circumstances.
Why can recognition improve motivation? | It makes valued contributions visible | It replaces fair pay in every situation | It eliminates the need for feedback | It guarantees permanent satisfaction | Specific recognition reinforces meaningful contributions.
What is an intrinsic motivator? | Satisfaction from learning and useful achievement | A cash bonus alone | A travel allowance alone | A fixed overtime payment | Intrinsic motivation comes from the activity and its meaning.
A capable team member disengages after repeated unacknowledged work. What is a useful first step? | Discuss their experience and recognise specific contributions | Publicly label them lazy | Increase workload without discussion | Remove every development opportunity | Listening helps identify the actual cause rather than assuming one.
`);
  add(11, 'Delegation', `
What should accompany a delegated task? | Expected outcome, authority, resources and check-ins | Only a vague instruction | Responsibility without any access | A deadline with no context | Effective delegation gives the means and clarity to deliver.
What is the difference between delegation and abandonment? | Delegation retains appropriate support and oversight | Delegation removes all accountability | Abandonment always improves autonomy | They are the same management technique | The manager remains engaged at an agreed level.
How should a leader choose a delegate? | Match capability and development needs to task risk | Choose only by personal friendship | Always choose the busiest person | Ignore available capacity | Suitability includes competence, capacity and appropriate growth.
A delegate encounters a decision outside their authority. What should they do? | Escalate through the agreed boundary | Make an unlimited commitment | Hide the decision until completion | Stop all communication | Clear escalation preserves appropriate decision control.
`);
  add(11, 'Team Development', `
What can early disagreement in a new team signal? | Roles and working methods still need clarification | The team must always be disbanded | The project has already failed | All discussion should stop | Teams often need to negotiate expectations as they develop.
How can a leader support shared working norms? | Facilitate explicit agreements and revisit them | Assume rules are understood without discussion | Let each person define conflicting rules | Change norms privately | Shared norms need collective understanding.
What is a useful team retrospective question? | What should we keep, change or try next? | Who should receive all blame? | How can we hide the delay? | Which evidence should be deleted? | Reflection should lead to learning and practical improvement.
A new member joins an established team. What should happen? | Provide onboarding and revisit relevant roles and agreements | Assume they know every decision | Exclude them from context | Reset all project objectives automatically | Membership changes can affect team understanding and coordination.
`);
  add(11, 'Performance Management', `
What makes performance expectations fairer? | Clear agreed outcomes and relevant measures | Secret criteria introduced later | Ranking only by visibility | Measuring only overtime | Transparent criteria support useful evaluation.
How should corrective feedback be delivered? | With specific observations, impact and a path to improvement | Through personal insults | Only as a vague warning | Only after annual closure | Specific actionable feedback supports change.
A team member repeatedly misses a target. What should be investigated? | Capability, clarity, workload and barriers | Only their personality | Only their age | Only who likes them | Performance problems can have several causes.
A target encourages speed while defects rise. What needs review? | Whether the measure creates an unhealthy incentive | Whether quality data should be hidden | Whether faster work proves success | Whether all feedback should stop | Measures influence behaviour and should reflect balanced outcomes.
`);
  add(11, 'Coaching & Mentoring', `
What is a typical coaching approach? | Ask focused questions that help a person develop their own solution | Give every answer without discussion | Replace the person's responsibilities | Avoid setting any goal | Coaching supports reflection and skill development.
How does mentoring commonly differ from coaching? | It often draws on broader experience and career guidance | It requires no trust | It is always a disciplinary process | It excludes sharing experience | Mentoring can support longer-term professional development.
What makes a development conversation actionable? | A goal, practice action and follow-up | General encouragement alone | An unrelated reading list only | A promise with no next step | Follow-up connects discussion to changed practice.
A junior PM struggles to chair meetings. What development action fits? | Observe, practise facilitation and review specific feedback | Assign only unrelated data entry | Remove all meeting participation | Evaluate only the person's confidence | Guided practice targets the skill gap directly.
`);
  add(11, 'Managing Remote Teams', `
What is especially important for remote coordination? | Clear ownership and accessible shared information | Continuous surveillance of webcams | Assuming silence means agreement | Storing decisions only in private chats | Distributed work needs visible responsibilities and context.
How can teams reduce time-zone disadvantages? | Use asynchronous updates and rotate necessary meeting times | Always favour headquarters' convenience | Require every person to be online all night | Stop documenting decisions | Fair arrangements support participation across locations.
What should a remote working agreement clarify? | Response expectations, channels and escalation | Only the team's profile pictures | Only personal social accounts | Only office furniture | Shared expectations reduce uncertainty about availability and urgency.
A remote colleague misses updates during network outages. What is a practical response? | Provide low-bandwidth summaries and an agreed fallback channel | Assume lack of commitment | Increase mandatory video quality | Remove access to shared notes | Collaboration should account for real connectivity constraints.
`);
  add(12, 'Introduction to Agile', `
Why deliver work in small increments? | Obtain useful feedback before committing to all remaining work | Avoid all planning | Guarantee no defects | Eliminate stakeholder involvement | Incremental delivery supports early learning and adaptation.
Which environment particularly benefits from iterative learning? | Needs are uncertain and can be explored with users | Feedback is forbidden | Every requirement is already immutable | Nothing can be inspected until years later | Iteration is useful when learning can guide future work.
Does Agile mean there is no documentation? | No; documentation should support useful delivery and collaboration | Yes; all records are prohibited | Yes; only verbal agreements are allowed | No; every document must be finished before any learning | Agility does not remove the need for appropriate records.
A team releases small features but ignores user feedback. What is missing? | Adaptation based on learning | A larger release ceremony | A longer project title | A rule forbidding change | Small batches alone do not create an effective learning cycle.
`);
  add(12, 'Agile Principles', `
What should guide frequent delivery? | Useful value for customers | The largest possible document count | The number of internal announcements | Avoidance of feedback | Delivery should serve meaningful user outcomes.
How should an Agile team respond to changing needs? | Evaluate and adapt priorities with stakeholders | Accept every request instantly without trade-offs | Refuse every change after day one | Hide changes from the team | Responsiveness still requires prioritisation and capacity decisions.
Why support a sustainable working pace? | Protect long-term effectiveness and quality | Ensure people never face deadlines | Replace the need for prioritisation | Guarantee constant output in all situations | Persistent overload can damage quality and team capacity.
A team automates tests to maintain reliable frequent delivery. Which idea does this support? | Technical quality enables continued adaptability | Testing should wait until project closure | Speed makes quality irrelevant | Automation replaces all user feedback | Reliable engineering practices make change safer.
`);
  add(12, 'Scrum Framework', `
What is Scrum designed to support? | Learning and value delivery in complex work | A fixed script for every possible task | Elimination of product decisions | Unlimited work without review | Scrum provides a framework for inspection and adaptation.
Which three ideas support Scrum's empirical approach? | Transparency, inspection and adaptation | Secrecy, prediction and blame | Procurement, payroll and archiving | Scope, tax and inventory | Visible work enables useful inspection and timely adjustment.
How long is a Sprint in Scrum? | One month or less | Exactly six months | Unlimited until all work is done | Always one working day | Sprints use a consistent timebox of no more than one month.
A team calls its process Scrum but hides unfinished work during reviews. What is undermined? | Transparency needed for inspection | The need for a team name | The invoice approval process | The office seating plan | Hidden information weakens evidence-based adaptation.
`);
  add(12, 'Scrum Roles', `
Who is accountable for ordering the Product Backlog? | The Product Owner | Every stakeholder independently | The finance clerk | The external auditor | Product ownership includes ordering work toward product value.
Who creates the plan for delivering the Sprint work? | The Developers | The customer alone | The procurement committee | The human resources director | Developers plan how they will create the Increment.
What is a Scrum Master's key accountability? | Helping establish Scrum and improve the team's effectiveness | Assigning every technical task personally | Approving all business expenditure | Acting as every stakeholder's manager | The Scrum Master supports effective use of the framework.
Two executives give conflicting backlog orders. Who should resolve the product ordering decision? | The Product Owner, considering stakeholder input | Whoever sends the latest email | The most senior Developer by default | Each executive independently | A single accountable Product Owner avoids conflicting product priorities.
`);
  add(12, 'Scrum Events', `
What is the main purpose of Sprint Planning? | Agree the Sprint's goal and plan the selected work | Sign final project closure | Evaluate staff salaries | Archive every product requirement | Planning connects a valuable goal with feasible delivery work.
What does the Daily Scrum help Developers do? | Inspect progress toward the Sprint Goal and adapt their plan | Report personal performance to an external manager | Approve annual budgets | Replace all technical collaboration | It is a focused planning event for the Developers.
How does a Sprint Review differ from a Retrospective? | Review examines product outcomes; Retrospective improves how the team works | Both are only supplier audits | Review is for salaries; Retrospective is for invoices | Neither involves learning | Product direction and team effectiveness need different inspection conversations.
A Sprint ends with unfinished items. What should happen? | Make their state transparent and replan remaining work | Extend the Sprint indefinitely | Call unfinished work Done | Hide the items from the Product Owner | A timebox ends as planned; unfinished work must remain visible.
`);
  add(12, 'Scrum Artifacts', `
Which artifact holds the ordered work needed to improve the product? | Product Backlog | Expense ledger | Staff appraisal | Meeting attendance register | The Product Backlog is the evolving source of product work.
What connects the Increment to a shared quality standard? | The Definition of Done | The supplier's advertisement | The office opening hours | The project logo | Done specifies the quality state required of an Increment.
What provides a single objective for the Sprint? | The Sprint Goal | The annual payroll total | The contract filing number | The meeting-room name | The Sprint Goal focuses the team's delivery decisions.
A feature passes coding review but fails required testing. Can it count as Done? | No, if the Definition of Done requires that testing | Yes, because coding is the only work | Yes, if it appears on a slide | Yes, if its estimate was large | All applicable Done criteria must be met.
`);
  add(12, 'Kanban', `
What does a work-in-progress limit constrain? | How many items are active in a stage or system | How many goals the organisation may have | How many invoices can be archived | How many users can read a report | WIP limits help control flow and expose congestion.
A testing column is full. What is usually more useful than starting more development? | Help clear the testing bottleneck | Hide the testing column | Increase all limits without analysis | Mark untested items complete | Finishing blocked flow can be more valuable than starting more work.
What does cycle time measure? | Time from starting an item to finishing it under the defined workflow | The employee's total career length | Only the annual budget cycle | The number of tasks assigned | A defined start and finish make flow time measurable.
Why make workflow policies explicit on a Kanban board? | Create shared rules for entry, movement and completion | Prevent all process improvement | Replace customer requirements | Guarantee identical tasks | Clear policies support consistent flow and meaningful improvement.
`);
  add(12, 'Agile Estimation', `
What do relative estimates compare? | The size, complexity or effort of work items | Guaranteed calendar deadlines | Individual salaries | Product revenue alone | Relative estimation expresses comparative size rather than exact time.
Why discuss large differences in estimation votes? | Reveal different assumptions and understanding | Force everyone to match the senior person's number | Avoid all clarification | Rank team members publicly | Disagreement can expose missing information or hidden complexity.
How should historical velocity be used? | As one input to forecasting for that team's context | As a guaranteed promise for all future Sprints | As a universal ranking of different teams | As a substitute for a Product Goal | Past throughput can inform forecasts but does not guarantee outcomes.
A large story remains poorly understood. What is a sensible next step? | Refine or split it and investigate uncertainty | Assign an arbitrary precise estimate | Commit it without discussion | Compare it to another team's salaries | Better understanding and smaller work improve estimation usefulness.
`);
  add(12, 'Agile Project Simulation', `
During a simulation, users reject an assumed workflow. What should the team do? | Use feedback to revise upcoming work | Hide the feedback until graduation | Increase the estimate without changing the design | Blame the users for participating | A simulation should demonstrate learning-driven adaptation.
A simulation selects more work than its team can finish. What should be discussed? | Capacity, priorities and a realistic Sprint plan | How to label all work complete | How to remove the timebox | How to avoid all future reviews | Feasible commitments require capacity-aware planning.
Which evidence demonstrates an Agile simulation beyond a board screenshot? | An inspected increment and documented changes from feedback | Only colourful cards | Only attendance records | Only an initial feature wish list | Evidence should show delivery and learning, not just tool setup.
A simulated retrospective identifies too much simultaneous work. What experiment fits? | Reduce WIP and review its effect on flow | Double all active assignments | Stop tracking completion | Remove every task owner | A targeted experiment tests the identified improvement.
`);
  add(13, 'Monitoring Progress', `
Which evidence best supports a claim of completed work? | Verified deliverables against agreed criteria | Hours spent alone | Number of emails sent | Personal confidence alone | Progress should reflect accomplished work, not only activity.
Why use a consistent reporting date across workstreams? | Make progress data comparable | Force every task to finish together | Eliminate all uncertainty | Replace the baseline | Different cutoff dates can produce misleading comparisons.
A task is repeatedly reported as 90% complete. What should be examined? | Remaining work and objective completion evidence | Only the repeated percentage | Only the owner's job title | Whether the chart colour should change | Persistent near-completion claims may conceal unresolved work.
What is the value of leading indicators? | They can signal emerging problems before final outcomes | They guarantee future performance | They replace all outcome measures | They measure only completed invoices | Early signals allow earlier investigation and action.
`);
  add(13, 'Performance Measurement', `
What makes a performance measure meaningful? | A defined objective, formula, data source and interpretation | A large number with no context | A decorative chart | A metric chosen only because it is easy | Measures need a clear relationship to what matters.
Why distinguish efficiency from effectiveness? | Low resource use does not prove objectives were achieved | Both mean the number of meetings | Effectiveness excludes outcomes | Efficiency means unlimited spending | Doing work economically and achieving the right result are different.
What should happen when a metric's data source is unreliable? | Validate or correct it before drawing conclusions | Publish more decimal places | Treat uncertainty as zero | Hide the source name | Precision cannot compensate for invalid input data.
A team measures tickets closed but ignores reopened tickets. What may be missed? | Whether closure quality is sustainable | The number of project logos | The office lease period | The sponsor's availability | A narrow output count can conceal rework and unresolved needs.
`);
  add(13, 'Change Management', `
What should an integrated change request include? | Description, justification and effects on relevant baselines | Only a new deadline | Only the requester's job title | Only a statement that change is easy | Decision makers need the full impact, not just the desired result.
When should an approved change be communicated? | In time for affected people to use the revised plan | Only after they finish obsolete work | Never if the PM remembers it | Only at the closing ceremony | Timely communication prevents work based on outdated assumptions.
How does project change control differ from adoption management? | It governs changes to project commitments; adoption supports people using the change | They are always identical activities | Change control handles only emotions | Adoption manages only invoice totals | Both may be needed, but their immediate purposes differ.
An urgent change is approved through an emergency process. What still matters? | Recording the decision and updating affected plans | Erasing the approval trail | Bypassing all later review | Assuming no impact analysis is needed ever | Urgency changes the route, not the need for accountability.
`);
  add(13, 'Issue Tracking', `
What belongs in an issue log? | An existing problem, impact, owner and resolution date | Only hypothetical opportunities | Only project benefits | Only completed procurement forms | Issues require action on conditions already affecting work.
How should issue priority be determined? | By impact, urgency and agreed criteria | By alphabetical order | By who complains most loudly alone | By the issue number alone | Relevant criteria focus attention on consequential problems.
When should an issue be escalated? | When its resolution exceeds authority or agreed thresholds | Only after all deadlines are missed | Whenever its title is long | Never if it concerns a supplier | Escalation obtains decisions or resources unavailable locally.
An issue is marked closed after sending an email. What should be verified? | The agreed resolution actually worked | The email contained enough words | The recipient has a senior title | The log row is coloured green | Communication of an action is not proof of resolution.
`);
  add(13, 'Project Dashboards', `
What should a dashboard make easy to identify? | Current condition, exceptions and decisions needing attention | Every raw record at once | Only favourable results | Only the largest team | Dashboards summarise information for action.
Why display data freshness on a dashboard? | Readers need to know whether indicators are current | Older data is always better | It replaces source validation | It guarantees all forecasts | Stale data can mislead operational decisions.
A green summary hides a red safety indicator. What should change? | Make the critical exception visible | Average it away silently | Remove safety from the dashboard | Change all indicators to green | Material exceptions should not disappear in aggregation.
A dashboard contains 60 equally prominent metrics. What is a useful improvement? | Prioritise decision-relevant measures and allow detail on demand | Add more charts without hierarchy | Remove every label | Make all numbers flash | A clear hierarchy reduces information overload.
`);
  add(13, 'KPI Monitoring', `
What does a KPI track? | Performance on an important objective | Any available number regardless of purpose | Only staff age | Only document size | Key indicators should connect directly to priority objectives.
Why define a KPI threshold? | Specify when investigation or action is needed | Guarantee the target will be met | Replace data collection | Eliminate judgement | Thresholds connect measurement with a response.
An indicator improves after its formula changes. What should be checked? | Whether results remain comparable with earlier periods | Whether the new figure looks attractive | Whether the old data can be deleted | Whether all targets should be marked achieved | Method changes can create apparent improvement without real change.
A KPI remains below target for three periods. What should happen? | Analyse causes and assign a response | Keep copying the same status indefinitely | Change the target secretly | Stop showing the measure | Persistent deviation needs management action, not reporting alone.
`);
  add(13, 'Variance Analysis', `
What is variance analysis used to understand? | Differences between planned and actual performance and their causes | Only the project's name | Only the final attendance count | Only supplier advertisements | Analysis goes beyond identifying the size of a difference.
Actual cost is USD 7,200 against a simple spending plan of USD 6,000. What is the spending difference? | USD 1,200 more than planned | USD 1,200 less than planned | USD 13,200 less than planned | No difference | Actual minus planned spending is 7,200 - 6,000; this is not EVM cost variance.
Why separate one-time from recurring causes? | Their implications for future forecasts differ | One-time costs never matter | Recurring causes cannot be corrected | Both must always be ignored | Forecasts should reflect whether a cause is likely to continue.
A late activity used an incorrect progress entry. What should happen before corrective planning? | Verify and correct the data | Immediately add resources | Change the baseline without approval | Cancel the dependent work | Responses should be based on reliable evidence.
`);
  add(13, 'Corrective Actions', `
What is the purpose of corrective action? | Bring performance back into alignment with agreed objectives | Add unapproved features | Hide an unfavourable metric | Replace all planning with optimism | Corrective action addresses a performance deviation.
What should a corrective-action plan specify? | Action, owner, deadline and effectiveness check | Only a general promise | Only the person who found the issue | Only the meeting location | Implementation and verification need clear responsibility.
How does prevention differ from correction? | Prevention reduces the chance of future problems; correction addresses an existing deviation | Prevention happens only at closure | Correction never needs evidence | Both mean changing report colours | The timing and purpose of the intervention differ.
A recovery action shortens delivery but raises safety exposure. What should be done? | Evaluate the consequences before authorising the action | Approve it based on speed alone | Hide the safety implication | Assume recovery actions have no risks | Corrective choices must respect other objectives and constraints.
`);
  add(14, 'Closing a Project', `
What should formal closure confirm? | Accepted outputs, settled obligations and transferred responsibilities | Only that spending has stopped | Only that the PM changed jobs | Only that the launch occurred | Closure establishes a controlled end and continuing ownership.
Can a cancelled project still require closure? | Yes, records, contracts and responsibilities still need resolution | No, cancellation erases all obligations | No, only successful projects have records | Yes, but only a celebration is needed | Early termination still leaves commitments and learning to manage.
Why release resources deliberately at closure? | Allow orderly reassignment and avoid lingering commitments | Ensure nobody learns from the project | Remove every archived record | Avoid notifying functional managers | Resource release should be coordinated with future ownership.
A closed project leaves unresolved supplier claims. What was incomplete? | Contract and obligation closure | The choice of project logo | The lesson attendance register | The internal team nickname | Outstanding commitments require resolution or an explicit transfer.
`);
  add(14, 'Final Deliverables', `
What should accompany a final deliverable? | Evidence it meets agreed requirements | Only a congratulatory message | Only a list of hours spent | Only a supplier's promise | Final delivery should be supported by verification evidence.
Why use a final deliverables checklist? | Confirm completeness against agreed scope | Add unapproved extras | Replace all customer review | Guarantee future benefits | A checklist helps avoid omissions.
A deliverable includes software but omits agreed user instructions. What should be recorded? | An incomplete delivery requiring resolution | Automatic full acceptance | A new unrelated project by default | A harmless formatting issue | Supporting materials are part of scope when agreed.
Which version should be handed over as final? | The identified approved version with supporting records | The first draft found in email | Any local copy with a recent filename | All conflicting versions without explanation | Version clarity prevents use of obsolete or unapproved outputs.
`);
  add(14, 'Project Evaluation', `
What should project evaluation compare? | Outcomes with agreed objectives and success criteria | Only staff popularity | Only the number of meetings | Only the largest invoice | Evaluation asks whether the intended results were achieved.
Why may benefits evaluation continue after project closure? | Some benefits take time to appear in operations | Closure means benefits are guaranteed | Projects never have outcomes | Evaluation replaces operational ownership | Benefit realisation can extend beyond delivery.
What strengthens an evaluation finding? | Relevant evidence and acknowledgement of limitations | Only a positive testimonial | Only the PM's opinion | Only a large sample with no relevance | Sound conclusions depend on appropriate evidence.
A project met cost and schedule targets but users abandoned its service. What should evaluation consider? | Adoption and intended benefits as well as delivery performance | Only the original budget | Only the launch date | Whether to remove user feedback | Delivery efficiency alone does not demonstrate overall success.
`);
  add(14, 'Lessons Learned', `
When should lessons be captured? | Throughout delivery and consolidated at closure | Only after a failure | Only before initiation | Only when the sponsor requests a ceremony | Timely capture preserves detail and supports immediate improvement.
What makes a lesson useful to future teams? | Context, cause, consequence and a practical recommendation | A vague statement to do better | Only a person's name | Only a photograph | A reusable lesson explains when and how to act differently.
How should lessons-learned discussions handle mistakes? | Focus on evidence and system improvement | Seek public humiliation | Remove all difficult topics | Assume one person caused everything | Constructive analysis supports learning rather than concealment.
A lessons document is archived but never shared with new teams. What is missing? | A mechanism to apply the learning | More decorative headings | A longer list of attendees | A different file extension | Capturing knowledge has little value unless it informs later work.
`);
  add(14, 'Client Acceptance', `
Who should provide client acceptance? | The person or body authorised to accept the deliverable | Any person copied on an email | The supplier alone | The newest team member | Acceptance authority must be clear.
What should an acceptance record identify? | Deliverable, criteria, decision, date and authorised sign-off | Only the project slogan | Only total staff hours | Only a meeting invitation | A specific record establishes what was accepted and by whom.
How should conditional acceptance be handled? | Record remaining conditions, owners and deadlines | Treat all conditions as already fulfilled | Delete the open items | Assume no follow-up is needed | Conditions must remain visible until resolved.
A customer gives verbal praise but the contract requires written acceptance. What is needed? | The required documented acceptance | A social-media post only | The PM's own signature for the customer | Automatic closure based on praise | Positive feedback does not replace the agreed acceptance mechanism.
`);
  add(14, 'Final Documentation', `
What belongs in a final project record? | Approved plans, decisions, results and closure evidence | Only draft cover pages | Only personal chat messages | Only advertising material | The record should explain what was authorised, delivered and learned.
Why organise archives with clear access controls? | Make records retrievable while protecting sensitive information | Allow everyone to edit all records | Hide all decisions permanently | Replace retention requirements | Archiving balances future use with appropriate protection.
What should happen to superseded documents? | Retain or dispose of them under policy with version status clear | Present them as current | Mix them silently with final versions | Rewrite them to match later events | Version integrity preserves a reliable history.
A successor cannot locate warranty details after closure. What documentation gap exists? | Operational handover records are incomplete or inaccessible | The project title was too short | The sponsor attended too few meetings | The budget necessarily failed | Handover must include information needed to support the asset.
`);
  add(14, 'Project Handover', `
What is the purpose of project handover? | Transfer outputs, knowledge and ongoing responsibility | End all support without discussion | Transfer only the project logo | Avoid user acceptance | Handover enables continued use and ownership.
What should a receiving team confirm? | Readiness, documentation, training and support arrangements | Only attendance at the launch | Only the colour of equipment | Only the PM's departure date | Operational readiness goes beyond physical delivery.
Why assign a benefits owner during handover? | Someone must monitor intended outcomes after delivery | The PM must own every benefit forever | Benefits appear without effort | Ownership replaces measurement | Continued accountability supports benefit realisation.
A system is delivered but no one can administer user accounts. What should be addressed? | Access, training and operational ownership before transition | Only the final slide design | Whether the launch photos are ready | Whether more certificates can be printed | A usable handover includes the capability to operate the system.
`);
  add(14, 'Project Closure Checklist', `
Which item should a closure checklist include? | Confirmation of deliverable acceptance and open obligations | Only launch attendance | Only the original slogan | Only a list of planned meetings | Closure checks both completed work and remaining commitments.
Why assign owners to outstanding items at closure? | Prevent unresolved work from losing accountability | Make every item automatically complete | Remove the receiving team's involvement | Replace the need for deadlines | Any transferred action needs explicit responsibility.
What should happen before final resource release? | Confirm transition needs and reassignment arrangements | Delete all contact information | Cancel every warranty | Remove all project evidence | A controlled transition avoids losing support prematurely.
A checklist marks every item complete without evidence. What is the weakness? | It records assertions rather than verified closure | It contains too many rows | It uses the wrong paper size | It includes a completion date | Checklists support control only when their statuses are substantiated.
`);
  add(15, 'Microsoft Project', `
Why enter task dependencies in a scheduling tool such as Microsoft Project? | Let linked dates respond to scheduling logic | Make every task independent | Replace duration estimates | Guarantee no resource conflicts | Dependencies model how changes propagate through the schedule.
What should a saved baseline help compare? | Approved dates and costs with current performance | Only two document fonts | Only employee names | Only the number of views | Baselines preserve the agreed reference for tracking.
A schedule shows a resource assigned beyond capacity. What should be reviewed? | Allocations, calendars and possible levelling | Only the task bar colours | Only the file name | Whether the resource can be hidden | Scheduling software exposes conflicts but managers must resolve them.
Why should a PM inspect a calculated critical path? | Validate the underlying logic and assumptions | Assume software output is infallible | Remove all noncritical tasks | Treat every displayed date as a contract | Incorrect links or calendars can produce misleading calculations.
`);
  add(15, 'Trello', `
In a Trello-style board, what does a card usually represent? | A work item | The entire organisation's legal identity | A fixed salary rate | A compulsory project phase | Cards make individual work visible within a board.
Why define what each board list means? | Ensure card movement reflects a shared workflow | Make every list contain identical cards | Avoid assigning task owners | Replace acceptance criteria | Shared column meanings make status reliable.
A card moves to Done with unfinished checklist items. What should be checked? | Whether agreed completion criteria are met | Whether the card colour is attractive | Whether its title is short | Whether the board has enough lists | Status should reflect evidence, not merely movement.
A Trello board has many overdue cards with no owners. What is the most useful cleanup? | Assign accountability and review realistic priorities and dates | Add more decorative labels | Move all cards to Done | Create duplicate boards for each viewer | A board supports coordination only when tasks are actionable.
`);
  add(15, 'Asana', `
When setting up tasks in Asana, what supports accountability? | A clear owner, expected output and due date | A title alone | A list of unrelated followers | A decorative project icon | Task clarity helps people know what to deliver and when.
Why break a large task into useful subtasks? | Make the steps and responsibilities manageable | Maximise task counts for reporting | Hide the original objective | Avoid tracking dependencies | Useful decomposition supports execution and follow-up.
A dependent task is delayed. What should the team review in its work-management plan? | Effects on downstream work and dates | Only the project colour | Only completed comments | Whether to remove all reminders | Task changes should be interpreted in their delivery context.
An Asana project and a separate spreadsheet show conflicting dates. What should be agreed? | The authoritative record and update process | Both are correct by default | The newer-looking interface always wins | Neither needs an owner | Teams need consistent information and responsibility for updates.
`);
  add(15, 'Jira', `
What should a useful Jira issue description contain? | The need, context and acceptance criteria | Only a vague title | Only a developer's initials | Only a desired colour | Clear descriptions support shared understanding and verification.
Why should a defect be linked to relevant work? | Preserve context and traceability | Make it impossible to prioritise | Replace the need to reproduce it | Guarantee immediate resolution | Links help teams understand impact and related changes.
An issue changes status without meeting its workflow conditions. What is at risk? | Reliability of reported progress | The number of available project names | The office attendance record | The supplier's bank balance | Workflow status should mean something verifiable.
A Jira backlog contains large unclear items near the top. What is needed before commitment? | Refinement and discussion of acceptance and size | Immediate assignment of arbitrary deadlines | Deletion of all user feedback | Marking them complete to reduce the backlog | High-priority work should be sufficiently understood before selection.
`);
  add(15, 'Monday.com', `
What should status labels on a shared work board communicate? | Clearly defined stages or conditions | Personal preferences with no shared meaning | Only staff seniority | Only contract value | Common definitions make board summaries interpretable.
Why review automations before enabling them widely? | Confirm triggers and actions match the team's workflow | Assume automation cannot create errors | Eliminate all task ownership | Replace acceptance reviews | Incorrect automation can spread incorrect updates quickly.
A board report shows 100% complete while key dependencies are unresolved. What needs review? | Status definitions and underlying task evidence | Only the dashboard theme | Only the number of viewers | Whether to hide dependency records | Aggregated progress is only as sound as its underlying data.
A Monday.com workflow sends every minor update to all staff. What should be improved? | Notification relevance and recipient rules | Add more recipients | Remove all deadlines | Duplicate every task | Focused notifications reduce noise without losing important signals.
`);
  add(15, 'ClickUp', `
Why use a consistent hierarchy when organising work in ClickUp? | Help users locate related work and understand its context | Make every task name identical | Avoid recording deliverables | Replace the project objective | A coherent hierarchy improves navigation and reporting.
What is the risk of creating too many custom fields? | More maintenance and inconsistent data entry | Automatic elimination of uncertainty | Guaranteed better decisions | No need for user training | Fields should support a clear use, not complexity for its own sake.
A dashboard combines tasks with inconsistent status meanings. What should be done? | Standardise or map the meanings before interpretation | Assume all statuses are equivalent | Delete the dashboard labels | Increase the chart size | Reliable aggregation needs comparable underlying definitions.
A team copies a ClickUp template into a new project. What should it review? | Roles, dates, dependencies and suitability to the new work | Only the template's popularity | Only the original author's name | Nothing because templates are universal | Templates require tailoring to the current project.
`);
  add(15, 'Notion', `
What makes a project knowledge page useful? | Current information with clear ownership and links to decisions | Many decorative images without context | Unlabelled draft notes | Contradictory copies of the same plan | Knowledge needs structure, currency and accountability.
Why use consistent fields in a project database? | Support reliable filtering and comparison | Prevent every user from reading it | Replace source evidence | Guarantee all entries are correct | Structured fields make related records easier to use.
A Notion decision page lacks dates and owners. What should be added? | Decision context, authority and follow-up responsibility | Only an animated cover | Only a longer page title | Only unrelated references | Decision records should be traceable and actionable.
What should happen when a shared project page becomes obsolete? | Mark or archive it and point users to the current source | Leave conflicting guidance unlabelled | Rewrite history silently | Duplicate it under several names | Clear lifecycle status prevents reliance on outdated information.
`);
  add(15, 'Smartsheet', `
What is essential when using a spreadsheet-style project tracker? | Consistent columns, owners and update rules | Merged cells everywhere | Unexplained abbreviations in every row | Separate conflicting files for each reader | Structure and responsibility keep tracking information dependable.
Why protect critical formulas or calculation fields? | Reduce accidental changes to reported results | Hide the meaning of the calculations | Stop all collaboration | Guarantee every input is valid | Formula integrity matters, alongside input validation.
A summary totals rows from different reporting periods. What is the concern? | The aggregate may compare incompatible data | The sheet has too few colours | Every total must be zero | All rows should be deleted | Consistent scope and dates are needed for meaningful totals.
Before sharing a Smartsheet tracker externally, what should be checked? | Access permissions and the information recipients need | Only the header colour | Only the number of rows | Only the file's popularity | Collaboration should expose appropriate information to the right people.
`);
  add(15, 'Google Workspace for Project Teams', `
What is an advantage of a shared project document? | Collaborators can work from a common current record | It removes the need for ownership | It guarantees every edit is correct | It replaces all approvals | Shared access reduces fragmented copies when managed well.
Why use comments for a proposed revision? | Discuss changes with context before resolving them | Hide disagreements permanently | Replace every formal decision record | Prevent anyone reading the document | Contextual discussion supports collaborative review.
What should a team consider before granting editing access? | The person's role and required level of access | Whether they like the document theme | Whether everyone else has full access | Whether the file name is short | Permissions should fit legitimate collaboration needs.
Two versions of meeting minutes circulate by attachment. What is a better practice? | Maintain an identified authoritative version with controlled access | Rename both final and leave them conflicting | Ask each reader to choose randomly | Stop documenting decisions | A common reference reduces version confusion.
`);
  add(15, 'Software Practice Exercises', `
What should a PM software exercise demonstrate? | A realistic workflow with tasks, owners, dates and evidence | Only account creation | Only a colourful empty board | Only a list of product names | The exercise should show how the tool supports actual work.
How should two tools be compared in practice? | Use the same representative needs and evaluation criteria | Choose whichever has the most icons | Compare only their logos | Ignore the team's access constraints | A consistent scenario makes the comparison useful.
What is a good test of a project tracker? | Enter a realistic delay and check its effect on reports and dependencies | Enter only perfect data | Hide all overdue tasks | Skip user feedback | Testing exceptions reveals whether the setup supports control.
A practice board works only when its creator updates every field. What needs improvement? | Shared ownership, instructions and sustainable update routines | More personal dashboards | A larger cover image | More unassigned tasks | A professional setup should remain usable beyond one person.
`);
  add(16, 'Business Analysis Basics', `
What does business analysis connect? | Business needs with options that deliver value | Only invoices with receipts | Only job titles with salaries | Only meeting dates with rooms | Analysis clarifies needs and suitable changes.
Why distinguish a requested solution from the underlying need? | Another option may address the problem more effectively | Users should never be consulted | Solutions are always irrelevant | Needs cannot be measured | Understanding the need avoids premature solution commitment.
What is requirements traceability useful for? | Following a need through delivery and verification | Ranking staff by popularity | Replacing all testing | Removing stakeholder ownership | Traceability connects decisions and evidence across the work.
A department requests a new app to fix slow approvals. What should be explored first? | The approval workflow and causes of delay | The app's logo | The app-store category | The developer's preferred colour | Process analysis may reveal a simpler or better solution.
`);
  add(16, 'SWOT Analysis', `
Which SWOT category describes an internal capability advantage? | Strength | Threat | Opportunity | External constraint | Strengths are favourable internal factors.
A new competing service enters the market. Where does it usually fit? | Threat | Internal strength | Internal weakness | Completed benefit | Competition is an external factor that may harm objectives.
Why should SWOT findings lead to actions? | Analysis has value when it informs choices | Every quadrant automatically creates a project | Lists alone guarantee success | Actions remove all uncertainty | Strategic analysis should influence decisions rather than remain descriptive.
An organisation has skilled trainers but unreliable equipment. How should these be classified? | Strength and weakness respectively | Two external opportunities | Two threats | Weakness and strength respectively | Both factors are internal; one helps and the other limits performance.
`);
  add(16, 'PESTLE Analysis', `
What is PESTLE used to examine? | The wider external environment | Only an individual's work habits | Only internal task assignments | Only the WBS hierarchy | PESTLE scans macro factors that may affect a project or organisation.
Which factor concerns changes in population needs and behaviour? | Social | Technical task duration | Internal staffing hierarchy | Project accounting code | Social trends can change demand and stakeholder expectations.
Why revisit an external-environment analysis? | Conditions can change during a long project | The first analysis is always wrong | All external factors are controllable | Every trend guarantees a result | Monitoring changing conditions supports timely adaptation.
A new digital technology could make a proposed service obsolete. Which PESTLE dimension is most direct? | Technological | Internal resource allocation | Individual performance | Document control | Technology trends may alter an option's future relevance.
`);
  add(16, 'Feasibility Studies', `
What does technical feasibility assess? | Whether the solution can be delivered with suitable technology and capability | Whether every stakeholder likes the name | Only the marketing budget | Only staff attendance | Feasibility examines practical ability to implement the option.
Why include operational feasibility? | A technically working solution may not fit users or operating capacity | Operations never affect benefits | Technical success guarantees adoption | Training is always outside scope | The organisation must be able to use and sustain the solution.
A feasible design costs more than available funding. Which dimension needs attention? | Financial feasibility | Logo consistency | Meeting etiquette | Task numbering | Affordability is distinct from technical possibility.
What is a responsible feasibility recommendation under major uncertainty? | State assumptions, evidence gaps and conditions for proceeding | Present uncertain benefits as guaranteed | Omit the uncertainty to secure approval | Select an option solely by enthusiasm | Decision makers need both findings and their limits.
`);
  add(16, 'Strategic Planning', `
How should projects connect to strategy? | Contribute to defined organisational priorities and benefits | Compete for attention without common goals | Be chosen only by personal interest | Use identical deliverables in every department | Strategic alignment links investment to intended direction.
Why prioritise among proposed projects? | Resources are limited and value differs | Every proposal can start simultaneously | Priorities eliminate all trade-offs | The longest proposal is always best | Selection should reflect value, capacity and constraints.
What distinguishes a strategic objective from a task? | It describes a desired organisational result | It is always a one-hour activity | It lists only meeting attendees | It cannot be measured | Tasks contribute to broader objectives.
A project no longer supports the organisation's priorities. What should happen? | Reassess its continued justification | Continue automatically because money was already spent | Rename it without review | Hide it from the portfolio | Changed strategy can alter whether further investment is worthwhile.
`);
  add(16, 'Organizational Change Management', `
What is the focus of organisational change management? | Helping people adopt and sustain new ways of working | Only approving scope-baseline changes | Only calculating earned value | Only closing supplier contracts | Adoption requires attention to people, behaviour and support.
Why investigate resistance to change? | It may reveal real concerns, losses or implementation gaps | Resistance always proves incompetence | All concerns should be suppressed | It replaces the need for leadership | Understanding concerns supports a relevant response.
Which measure better indicates adoption than training attendance alone? | Evidence people use the new process effectively | Number of training invitations | Number of presentation slides | Number of launch posters | Participation is not the same as changed behaviour.
Staff return to the old process after training. What should be examined? | Incentives, usability, support and management reinforcement | Only the certificate design | Whether more slogans are needed | Whether all feedback should stop | Sustained adoption depends on conditions beyond initial instruction.
`);
  add(16, 'Decision-Making Techniques', `
What does a weighted decision matrix do? | Compare options against criteria with stated importance | Guarantee the politically easiest option wins | Replace evidence with random scores | Eliminate every subjective judgement | A matrix makes trade-offs and assumptions more explicit.
Why perform sensitivity analysis on a decision? | Check whether plausible assumption changes alter the preferred option | Make all options score equally | Remove all uncertainty permanently | Avoid considering alternatives | Robustness matters when estimates or weights are uncertain.
What is a danger of using sunk costs to justify continuation? | Past spending may distract from future costs and benefits | Past costs are always recoverable | Every delayed project must stop | Future value is irrelevant | Continuation should consider prospective value, not only money already spent.
Two options score almost equally with uncertain inputs. What is sensible? | Investigate decisive uncertainties and discuss trade-offs | Claim the tiny difference proves certainty | Delete the second option | Change weights secretly | Small score differences may not be meaningful under uncertainty.
`);
  add(16, 'Business Case Development', `
What should the options section of a business case explain? | Alternatives and why the preferred option offers suitable value | Only the chosen supplier's slogan | Only a final invoice | Only staff biographies | Comparing alternatives supports a defensible recommendation.
Why name benefit owners? | Benefits need accountability for measurement and realisation | Benefits are guaranteed once named | Owners replace the sponsor | Every owner must be the PM | Someone must follow through after delivery.
What should a benefits forecast distinguish? | Evidence-based estimates from uncertain assumptions | Only large and small font sizes | Only staff and supplier names | Only current and obsolete logos | Decision makers need to understand confidence in the forecast.
A business case counts the same saving under two departments. What is the issue? | Double counting overstates expected value | The project must have two sponsors | Costs should also be counted twice | Benefits cannot be shared | Shared benefits should be counted once in the overall justification.
`);
  add(17, 'Business Communication', `
What makes a business message actionable? | A clear purpose, relevant context and requested next step | A long introduction without a request | Unexplained acronyms throughout | Several conflicting requests | Readers need to understand what matters and what to do.
How should tone be chosen for a professional message? | Match the audience and purpose while remaining respectful | Use the same informal language everywhere | Sound forceful regardless of context | Avoid all direct statements | Professional communication is clear, appropriate and respectful.
Why confirm important verbal agreements in writing? | Create a shared reference for commitments | Prove conversation is never useful | Replace every relationship with paperwork | Make later questions impossible | A written record reduces ambiguity and supports follow-through.
An email mixes urgent action with unrelated background. What would improve it? | Lead with the decision or action and organise supporting detail | Add more recipients | Remove the deadline | Hide the request in an attachment | Clear ordering helps recipients recognise priority and respond.
`);
  add(17, 'Report Writing', `
What should an executive summary provide? | Key findings, implications and recommendations | Every raw data row | Only acknowledgements | Only a table of contents | The summary helps decision makers understand the essential message.
How should facts and interpretations be presented? | Distinguish evidence from the conclusions drawn | Present every opinion as a fact | Omit sources to save space | Mix assumptions into actual results silently | Clear distinctions make the reasoning reviewable.
Why use headings and consistent structure in a report? | Help readers locate and understand information | Increase the word count automatically | Replace the need for evidence | Guarantee approval | Structure improves navigation and comprehension.
A report recommends more funding without explaining the gap. What is missing? | Evidence and reasoning linking the problem to the recommendation | A larger cover image | More signatures unrelated to the decision | A different page margin | Recommendations should follow from documented analysis.
`);
  add(17, 'Proposal Writing', `
What should a strong proposal connect? | A demonstrated need, feasible approach, results and resources | A broad promise with no implementation plan | Only the organisation's history | Only a request for money | The reader needs to see how the proposed work addresses the need.
Why tailor a proposal to the recipient's criteria? | Show relevant fit and answer the actual evaluation questions | Guarantee acceptance | Avoid explaining costs | Replace evidence with the recipient's logo | Relevance helps reviewers assess the proposal fairly.
What makes a proposed outcome credible? | A realistic target supported by activities and assumptions | A guaranteed result without evidence | A target unrelated to resources | A statement that every problem will disappear | Credibility depends on a plausible path from work to result.
A proposal budget excludes activities promised in its narrative. What should be corrected? | Consistency between the approach, schedule and costs | Only the document's title | Only the font size | Only the signature page | Reviewers need an integrated and feasible proposal.
`);
  add(17, 'Professional Ethics', `
A PM has a financial interest in a bidder. What is the appropriate action? | Disclose the conflict and follow recusal requirements | Score the bidder privately | Ask colleagues to hide the relationship | Assume expertise removes the conflict | Disclosure and appropriate separation protect impartial decisions.
A sponsor asks the PM to inflate beneficiary numbers. What should the PM do? | Refuse misrepresentation and report accurate evidence through proper channels | Adjust the numbers to protect funding | Count the same people repeatedly | Remove the measurement method | Professional reporting requires truthful, supportable claims.
When using another person's work in a project report, what is appropriate? | Credit the source and respect applicable permission | Present it as original work | Remove identifying information to conceal copying | Assume online material has no owner | Attribution and responsible use are part of professional integrity.
A colleague reports misconduct in good faith. What response supports ethical practice? | Use the appropriate reporting process and protect fair treatment | Retaliate through task assignments | Publicly label the colleague disloyal | Destroy the relevant records | Ethical systems need safe reporting and a fair evidence-based response.
`);
  add(17, 'Emotional Intelligence', `
What is self-awareness in a leadership context? | Recognising one's emotions and their effects on behaviour | Assuming feelings are always facts | Ignoring all personal reactions | Knowing every colleague's private history | Awareness helps a leader choose a constructive response.
How can empathy improve a difficult conversation? | Help understand another person's perspective without requiring agreement | Remove the need for boundaries | Guarantee the other person is correct | Replace all evidence | Understanding perspective supports respectful problem-solving.
A PM feels angry after criticism. What is a useful first response? | Pause and separate the emotional reaction from the issue | Send an immediate hostile reply | Cancel all feedback sessions | Publicly blame the team | Self-regulation creates space for a considered response.
A quiet team member appears distressed after a meeting. What is appropriate? | Check in privately and listen without assumptions | Diagnose them publicly | Demand personal details in front of the team | Ignore all signs of difficulty | Respectful inquiry supports people without jumping to conclusions.
`);
  add(17, 'Problem-Solving', `
What should precede choosing a solution? | Define the problem and investigate causes | Select the first available tool | Allocate blame immediately | Copy an unrelated project's response | A clear diagnosis prevents solving the wrong problem.
Why generate more than one solution option? | Compare trade-offs and avoid premature commitment | Make the decision impossible | Guarantee all options are equally good | Avoid any evaluation criteria | Alternatives improve the quality of choice.
What should follow implementation of a solution? | Check whether it resolved the problem and caused side effects | Assume success because work was done | Delete the baseline evidence | Stop monitoring immediately | Implementation is not proof of effectiveness.
A team repeatedly fixes symptoms but the problem returns. What should change? | Revisit underlying causes and test a more durable response | Increase the frequency of the same temporary fix only | Stop recording recurrence | Redefine the problem as success | Recurrence suggests the causal mechanism remains unaddressed.
`);
  add(17, 'Critical Thinking', `
What is a useful question when evaluating a claim? | What evidence supports it and what could challenge it? | Who can repeat it most confidently? | Does it match my preference? | Is the presentation colourful? | Critical thinking tests support and alternative explanations.
What is confirmation bias? | Favouring information that supports existing beliefs | Changing a view after strong evidence | Checking contradictory data carefully | Using a consistent measurement method | Selective attention can distort judgement.
Two indicators move together. What should be avoided? | Assuming one necessarily caused the other | Investigating possible links | Checking the data definitions | Considering external factors | Correlation alone does not establish causation.
A vendor cites one successful example as proof its tool always works. What should be examined? | Comparable evidence, failures and conditions of success | Only the testimonial's enthusiasm | Only the vendor's logo | Whether the example has a catchy name | General claims require more than one selected success story.
`);
  add(17, 'Networking Skills', `
What makes professional networking sustainable? | Mutual value, genuine interest and reliable follow-up | Asking for favours in every first message | Collecting contacts without context | Sending identical demands repeatedly | Relationships develop through relevance and reciprocity.
After a useful professional conversation, what is a good follow-up? | A brief personalised message referring to the discussion | An unrelated mass advertisement | An immediate demand for employment | A message pretending a commitment was made | Specific follow-up shows attention and keeps the connection meaningful.
Why keep notes about professional contacts responsibly? | Remember context and commitments without unnecessary personal data | Build a public list of private details | Replace permission with assumptions | Share all conversations widely | Useful records should respect the relationship and privacy.
A contact cannot offer a role now. What response preserves the relationship? | Thank them and stay in touch appropriately | Pressure them repeatedly | Publicly criticise them | Claim they promised employment | Respectful boundaries sustain professional trust.
`);
  add(18, 'Building a Professional Resume', `
Which resume statement gives stronger evidence of project ability? | Coordinated a 6-week training rollout for 80 learners within the approved budget | Responsible for many things | Very hardworking person | Interested in management | Specific scope and results make experience assessable.
How should a resume be tailored? | Emphasise truthful experience relevant to the role | Invent missing qualifications | Copy the job advertisement as personal experience | Include every unrelated detail equally | Tailoring changes emphasis, not facts.
How should an unfinished certification be described? | Accurately as in progress, if relevant | As already awarded | As equivalent to a different credential | Without any indication of status | Credential claims must reflect actual status.
A learner has no paid PM role but led a volunteer project. What can they include? | The genuine role, responsibilities and results with context | A fabricated corporate job title | Only paid work can ever be relevant | Another person's achievements | Relevant volunteer experience can demonstrate transferable skills.
`);
  add(18, 'LinkedIn Optimization', `
What should a professional profile headline communicate? | Relevant skills, role focus and value | Only a vague inspirational phrase | A qualification not yet earned | A list of unrelated emojis | A clear headline helps readers understand professional relevance.
What strengthens the experience section? | Specific responsibilities and evidence of outcomes | Unsupported superlatives only | Copied descriptions from strangers | Hidden dates and invented employers | Credibility comes from truthful, concrete evidence.
Why keep a public profile consistent with a resume? | Avoid contradictory claims about experience and qualifications | Make both documents identical in every word | Remove all project examples | Guarantee recruitment | Consistency supports trust even when formats differ.
Before posting a client project example, what should be checked? | Permission and confidentiality of the information shared | Only whether it looks impressive | Only the likely number of likes | Whether the client is online | Public portfolios must respect client information and permissions.
`);
  add(18, 'Interview Preparation', `
What does the STAR structure help organise? | Situation, task, action and result | Salary, title, age and references | Scope, tax, audit and revenue | Software, testing, approval and release | STAR structures a clear evidence-based experience example.
Why prepare examples of setbacks as well as successes? | Show judgement, accountability and learning | Prove all projects must fail | Avoid discussing actual actions | Replace technical knowledge | Reflection on setbacks can demonstrate professional growth.
An interviewer asks about a skill you have not used. What is the strongest response? | Be honest and explain relevant knowledge and how you would learn | Invent a successful project using it | Change the topic without answering | Claim every tool is identical | Honest boundaries are more credible than fabricated experience.
A candidate describes only what 'we' did. What detail would strengthen the answer? | Their own contribution and its effect | More unrelated team names | A longer project slogan | The office address | Interviewers need to understand the candidate's specific role.
`);
  add(18, 'PMP Certification Overview', `
Who awards the PMP credential? | Project Management Institute | TIH automatically after this course | Any project software vendor | A course participant's employer by default | PMP is a PMI credential, distinct from a TIH course certificate.
Before applying for PMP, where should a learner verify current eligibility? | PMI's official certification guidance | An undated social-media screenshot | A friend's old application alone | The price of this course | Requirements and exam arrangements should be checked with the awarding body.
What does finishing a preparatory course establish by itself? | Completion of that course, not automatic PMP certification | A guaranteed PMP award | Exemption from every PMI requirement | Guaranteed employment as a PM | Course completion and external credential award are separate processes.
Why keep accurate project experience records for a certification application? | Support truthful claims that can be verified | Make unrelated work appear eligible | Replace official eligibility criteria | Avoid reading application instructions | Evidence-based records support an accurate application.
`);
  add(18, 'CAPM Certification Overview', `
What does CAPM stand for? | Certified Associate in Project Management | Chartered Advanced Procurement Manager | Certified Agile Product Maker | Community Association Programme Monitor | CAPM is PMI's associate-level project management credential.
What should guide a choice between CAPM and PMP preparation? | Current experience, goals and official eligibility requirements | Which acronym sounds more senior | The number of letters in the title | A promise of automatic certification | A suitable pathway depends on the learner's situation and the awarding body's rules.
Why use an official exam content outline when preparing? | Align study with the assessed domains and current guidance | Obtain a guaranteed pass | Avoid learning concepts | Replace practice with memorised rumours | The outline is an authoritative guide to examination scope.
A course provider promises CAPM without PMI's certification process. What should a learner do? | Verify the claim directly with PMI before relying on it | Assume every course certificate is CAPM | Pay because the promise is confident | Put CAPM on a resume immediately | External credentials require the awarding body's actual process.
`);
  add(18, 'Freelancing as a Project Manager', `
What should a freelance engagement define before work begins? | Deliverables, boundaries, responsibilities and payment terms | Only an informal greeting | Only the client's logo | Only a broad promise to help | Clear terms reduce misunderstandings about work and compensation.
How should additional client work be handled? | Clarify its impact and agree the change in writing | Absorb unlimited extras silently | Refuse all communication | Invoice an unexplained amount afterwards | Agreed changes protect expectations on both sides.
Why track availability across freelance clients? | Avoid commitments exceeding realistic capacity | Guarantee every client gets unlimited attention | Eliminate the need for schedules | Hide conflicting deadlines | Capacity planning supports reliable delivery.
A prospective client requests confidential documents from a previous assignment. What is appropriate? | Offer authorised or anonymised examples instead | Share everything to win the work | Claim ownership overrides confidentiality | Publish the documents publicly first | A portfolio must respect previous clients' information.
`);
  add(18, 'Consulting Opportunities', `
What distinguishes a useful consulting recommendation? | It addresses the client's diagnosed problem with feasible actions | It always promotes the consultant's favourite tool | It contains only general slogans | It avoids discussing constraints | Advice should fit the client's evidence and context.
Why agree the consulting problem statement early? | Align expectations and prevent solving the wrong problem | Eliminate all later learning | Guarantee a particular solution | Avoid involving client staff | Shared framing guides the engagement.
What should a consultant transfer beyond a report? | Understanding and capability to implement the recommendations | Only a branded cover page | Only a list of new jargon | Only an invoice reference | Sustainable value often depends on client capability and ownership.
A client requests work beyond the consultant's competence. What is responsible? | State the limit and seek suitable expertise or referral | Promise expertise without support | Copy an unrelated report | Hide the limitation until delivery | Professional practice recognises competence boundaries.
`);
  add(18, 'Career Growth Roadmap', `
What should a career roadmap connect? | Target roles, skill gaps, actions and review points | Only desired job titles | Only salary wishes | Only a list of certificates | A roadmap turns ambition into a realistic development plan.
Why review the roadmap periodically? | Goals, opportunities and evidence of progress can change | The first plan must always be discarded | Every new trend must be followed | Skills stop developing after one course | Regular review keeps development relevant.
Which action gives stronger evidence of a new PM skill? | Apply it in a project and collect feedback | Add the skill name without practice | Watch one advertisement | Buy a notebook | Demonstrated application is stronger than an unsupported claim.
A learner wants a senior role but lacks delivery experience. What is a realistic next step? | Seek progressively responsible project work with mentoring | Claim senior experience immediately | Collect unrelated certificates only | Avoid entry-level opportunities | Experience and feedback build the evidence needed for greater responsibility.
`);
  add(19, 'Community Development Project', `
A community project selects a site without consulting affected households. What is the main planning gap? | Meaningful stakeholder participation | The choice of presentation software | The length of the project name | The colour of the budget sheet | Local impacts and needs should inform project decisions.
What should a community water-point handover establish? | Maintenance ownership, skills and funding arrangements | Only the launch guest list | Only the contractor's photograph | Only the original proposal title | Sustained service needs operational capability and responsibility.
Which indicator better measures a community project's outcome? | Reduction in average time households spend collecting safe water | Number of planning slides | Number of committee emails | Size of the launch banner | Outcomes measure the change experienced by beneficiaries.
A community plan assumes free volunteer labour every weekday. What should be validated? | Actual availability, expectations and livelihood constraints | Only the volunteer list's font | Whether volunteers need no coordination | Whether free labour eliminates every cost | Resource assumptions must respect people's real commitments.
`);
  add(19, 'Construction Project Plan', `
A building schedule starts roofing before structural work is ready. What should be corrected? | Technical dependencies and readiness criteria | Only the contractor's name | Only the budget chart | The project's category | Physical sequencing must be feasible and safe.
Why include inspections in a construction plan? | Verify required quality and readiness before dependent work | Replace all design requirements | Guarantee no future defects | Avoid recording contractor performance | Inspection points provide evidence before work is covered or continued.
A construction budget uses quantities from an obsolete drawing. What needs reconciliation? | The estimate with the current approved design | Only the invoice numbering | Only the project acronym | Only the reporting calendar | Cost quantities must reflect the authorised scope.
Heavy rains threaten access to a building site. What should the plan include? | A practical access response with triggers and ownership | A statement that weather never matters | An unchanged schedule with no explanation | Removal of all contingency | Site-specific risks need executable responses.
`);
  add(19, 'IT Project Management', `
An IT rollout works technically but users cannot complete their tasks. What needs attention? | User requirements, usability and adoption | Only server branding | Only the number of code files | Only the launch date | Technical operation alone does not establish user value.
Why plan data migration validation? | Confirm transferred information is complete and accurate | Guarantee data has no sensitivity | Replace all backup planning | Avoid involving data owners | Migration can introduce loss or errors that require checking.
What should a go-live plan include for a critical system? | Readiness criteria, support and a fallback approach | Only a publicity announcement | Only a list of programmers | Only a final invoice | Controlled rollout prepares for both normal use and problems.
A software vendor changes an interface used by another team. What should be managed? | Integration impact, testing and coordinated change | Only the vendor's logo | Only the meeting title | Whether to hide the dependency | Interfaces connect workstreams and need joint validation.
`);
  add(19, 'Event Planning Project', `
Which dependency matters in event planning? | Confirm venue capacity before finalising attendance limits | Print certificates before knowing the event | Ignore supplier lead times | Treat every activity as independent | Venue constraints affect safe and feasible attendance planning.
What should an event contingency plan address? | Plausible disruptions, response owners and communication | Only decorative alternatives | Only the host's biography | Only a list of songs | Contingencies need practical actions for credible disruptions.
A speaker cancels shortly before the event. What helps the team respond? | A pre-agreed alternative and clear decision authority | An unowned risk list | A larger banner | Deleting the programme | Prepared options and authority enable timely decisions.
How should an event project assess success beyond attendance? | Compare participant outcomes and stakeholder objectives | Count chairs alone | Count social posts alone | Use only the organiser's enthusiasm | Attendance is an output; the purpose may require broader results.
`);
  add(19, 'NGO Project Management', `
What should a donor-funded project's results framework connect? | Activities, outputs, outcomes and supporting assumptions | Only invoice numbers | Only staff titles | Only donor logos | A results chain explains how work is expected to produce change.
Why specify means of verification for indicators? | Identify credible evidence sources | Guarantee every target is achieved | Replace data collection | Avoid assigning measurement owners | Indicators need practical sources of evidence.
A project spends slowly because activities are delayed. What should a donor report explain? | Delivery status, reasons, forecast and recovery options | Only the low spending as a success | Only the available bank balance | Nothing until funds are exhausted | Financial and programme performance should be interpreted together.
An NGO needs more time within existing funding. What is appropriate? | Request approval under the donor's extension process | Assume an extension is automatic | Change the end date silently | Spend remaining funds on unrelated items | Changes to agreed terms need the applicable approval.
`);
  add(19, 'Business Expansion Project', `
Before opening a second branch, what should be tested? | Demand, operating capability and financial assumptions | Only whether the name sounds attractive | Only the existing branch's wall colour | Only the opening ceremony plan | Expansion needs evidence that the new operation is viable.
Why separate expansion project costs from ongoing operating costs? | Understand both implementation funding and future sustainability | Make operating costs disappear | Guarantee a positive cash balance | Avoid estimating staffing | The business needs to fund the change and sustain the resulting operation.
A new branch draws customers from the existing one. What should evaluation consider? | Net organisational benefit rather than new-site revenue alone | Only the new site's sales | Only the launch attendance | Whether to stop tracking existing sales | Displaced revenue can reduce the true incremental benefit.
What should an expansion handover confirm? | Operational staffing, systems, ownership and readiness | Only completion of the lease signature | Only a marketing slogan | Only the PM's final timesheet | A functioning branch needs more than a finished project document.
`);
  add(19, 'Risk Assessment Project', `
A risk assessment assigns probabilities without stating their basis. What should be added? | Evidence, assumptions and the rating method | Only more decimal places | Only a colour scale | Only the PM's signature | Ratings should be interpretable and reviewable.
A risk report combines threats and opportunities into one unexplained score. What is the concern? | Opposing effects may be obscured | Opportunities must never be recorded | Threats can never be quantified | Every risk needs the same response | Different effects require clear interpretation and suitable responses.
A high-impact threat has low probability. Should it automatically be ignored? | No; assess it against risk tolerance and response options | Yes; low probability means impossible | Yes; impact is irrelevant | No; every low-probability event must stop the project | Prioritisation considers both likelihood and consequence in context.
A risk plan has expensive responses exceeding the exposure they address. What should be reviewed? | Proportionality and cost-effectiveness of the responses | Only the risk numbering | Whether more responses can be added | Whether all risks can be renamed | Responses should be justified by their expected value and constraints.
`);
  add(19, 'Complete Project Management Plan', `
A complete plan's scope, schedule and budget use different work-package names. What should be improved? | Consistent traceability across the integrated plan | Only the cover-page colour | Only the number of appendices | Only the project slogan | Shared references help reveal omissions and inconsistencies.
What should an integrated plan explain about changes? | How requests are assessed, authorised, communicated and tracked | That no change can ever occur | That anyone may change baselines privately | That approval is unnecessary below any amount | A complete plan includes a workable control process.
A project plan lists risks but has no schedule or cost allowance for responses. What should be examined? | Whether response work is integrated and funded | Only whether the register is long enough | Only whether the risks are alphabetised | Whether all risks should be deleted | Risk actions consume time and resources that need planning.
Which portfolio evidence best demonstrates integration? | A change example traced through affected plans and decisions | Separate blank templates | A list of software names | Only a graduation photo | Integration is visible when connected decisions remain consistent.
`);
  // Additional risk examination items: the two risk assessments need 16
  // unseen questions; seven taught topics and the project supply eleven.
  var riskExamRows = `
A project's supplier-delay risk is accepted actively. What distinguishes this from passive acceptance? | A contingency arrangement is prepared | The risk is guaranteed not to happen | The supplier becomes the sponsor | The risk is removed from all records | Active acceptance plans a response or reserve while retaining exposure.
A risk exceeds the project's authority to manage. Which response may be appropriate? | Escalate it to the organisational owner | Hide it in the lowest category | Accept unlimited liability privately | Delete it from the report | Escalation assigns the risk to a level able to act on it.
A response reduces a threat but cannot remove it. What remains? | Residual risk | Earned value | Scope acceptance | A completed benefit | Residual risk is the exposure left after a response.
A simulation produces a range of possible finish dates. How should its result be interpreted? | As a probability-based forecast under stated assumptions | As a guaranteed single date | As proof that all risks are independent | As a replacement for all monitoring | Quantitative models express uncertainty and depend on their inputs.
A contingency trigger occurs while the assigned owner is absent. What would make the response more reliable? | A clear backup authority and communicated response procedure | Keeping the plan in a private folder | Waiting indefinitely for the owner | Removing the trigger from the register | Continuity arrangements help planned responses work when circumstances change.
`;
  var exams = riskExamRows.trim().split('\n').map(function (line, i) {
    var p = line.split('|').map(function (s) { return s.trim(); });
    if (p.length !== 6) throw new Error('Invalid PM exam question');
    var answer = answerPosition(p[0]), opts = p.slice(2, 5); opts.splice(answer, 0, p[1]);
    return { id: 'PM-RISK-EXAM:' + (i + 1), topic: 'M9:Risk examination', module: 9,
      q: p[0], opts: opts, correct: answer, exp: p[5] };
  });
  // Fresh integrative items keep later examinations balanced after the
  // subject assessments have consumed their reserved lesson questions.
  var comprehensive = [];
  function exam(module, topic, rows) {
    add(module, topic, rows);
    var key = 'M' + module + ':' + topic;
    comprehensive = comprehensive.concat(topics[key]); delete topics[key];
  }
  exam(2, 'Fundamentals examination', `
A sponsor proposes a project with no identifiable benefit owner. Which early decision is needed? | Establish who is accountable for the intended value | Approve every purchase immediately | Replace objectives with activity counts | Assign benefits to an unnamed future team | Benefits need ownership as well as a delivery plan.
A team follows all planned tasks but discovers the business need has disappeared. What should governance review? | Whether continued investment is still justified | Only whether the task list is complete | Only the team's overtime total | Whether the old plan can be renamed | Continued justification matters even when execution follows the original plan.
A manager calls daily customer support a six-month project without defining a change or end result. What should be clarified? | The distinction between ongoing service and a temporary change effort | Only the manager's title | Only the number of support staff | Whether every ticket needs a charter | A project needs a defined temporary undertaking and intended result.
A project is approved on an assumption of available premises. The premises are withdrawn before planning finishes. What is appropriate? | Reassess feasibility and seek a decision on revised options | Continue treating the original charter as proof of availability | Hide the change until procurement | Remove the assumption from history | A failed critical assumption can affect the authorisation basis.
`);
  exam(7, 'Cost examination', `
An approved budget is USD 18,000, actual cost is USD 7,000 and remaining work is estimated at USD 13,000. What is the forecast total? | USD 20,000 | USD 18,000 | USD 24,000 | USD 6,000 | Actual cost plus estimate to complete gives 7,000 + 13,000 = 20,000.
A project has paid USD 4,000 and signed a further USD 3,000 obligation within a USD 9,000 allocation. What remains uncommitted? | USD 2,000 | USD 5,000 | USD 7,000 | USD 12,000 | Both paid and committed amounts consume the allocation: 9,000 - 4,000 - 3,000.
A cost-saving option removes required safety testing. What should the PM recommend? | Seek a compliant alternative rather than sacrifice the requirement | Accept the saving without review | Mark the tests complete without performing them | Hide testing costs in another project | Cost decisions must respect required quality and safety obligations.
A cost forecast uses CPI even though the overrun came from a one-time event unlikely to recur. What should be reconsidered? | Whether that forecasting assumption fits the remaining work | Whether actual cost can be deleted | Whether earned value should equal revenue | Whether all forecasts must use the same formula | Forecast methods should reflect the expected causes of future performance.
`);
  exam(9, 'Risk examination extension', `
Two response plans depend on the same backup generator. What should the risk review test? | Whether the backup can support both needs at the same time | Whether both plans have different titles | Whether the generator is listed twice | Whether each owner likes the supplier | Shared contingency capacity can fail when risks occur together.
A PM reports a risk as closed because its response was assigned yesterday. What evidence is missing? | Implementation and confirmation that closure criteria are met | A longer risk title | Another copy of the register | A new sponsor signature on every task | Assignment alone does not establish that exposure has ended.
A team reserves funds for a possible delay but never specifies who can release them. What should be clarified? | The trigger and authority for using the reserve | Only the reserve's spreadsheet colour | Only the original estimate date | Whether the risk can be hidden | Contingency funding needs an executable decision process.
An opportunity could shorten delivery by a week but requires a costly trial. What should the decision compare? | Likelihood and value of the gain against trial cost and downside | The best-case gain alone | The trial cost alone without benefits | Only the supplier's enthusiasm | Opportunity pursuit requires a balanced assessment of expected value and risk.
`);
  exam(12, 'Agile examination', `
A team completes many low-value backlog items while an urgent user need waits. What should be reviewed? | Product ordering and the value of selected work | Only the number of completed cards | Only the team's meeting attendance | Whether estimates can be inflated | Throughput is useful only in relation to valuable outcomes.
Developers learn mid-Sprint that a selected solution is unsuitable. What response preserves the Sprint Goal? | Collaborate with the Product Owner to adapt the plan without undermining the goal | Hide the finding until the review | Automatically cancel every Sprint | Continue unsuitable work only to match the initial task list | The plan can adapt as learning emerges while protecting the objective.
A stakeholder demands that every request enter the current Sprint immediately. What should the team explain? | Requests need value and capacity trade-offs while protecting the Sprint Goal | Agile guarantees unlimited changes without impact | Only written requests are ever considered | Feedback is prohibited until project closure | Adaptability does not mean uncontrolled commitments.
An Agile team increases velocity by changing its point scale. What can be concluded about productivity? | The numbers alone do not demonstrate real improvement | Productivity has definitely doubled | Customer value necessarily increased | Defects have definitely fallen | Changed estimation units make velocity comparisons unreliable.
`);

  window.TIH_PM_QUESTION_BANK = { revision: 2, topics: topics, exams: exams, comprehensive: comprehensive };
})();
