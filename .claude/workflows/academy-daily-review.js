export const meta = {
  name: 'academy-daily-review',
  description: 'Daily professional audit and improvement of TIH Academy website',
  phases: [
    { title: 'Audit', detail: 'Scan all key pages for UI, content, and code issues' },
    { title: 'Fix UI', detail: 'Fix visual design, layout, and mobile issues' },
    { title: 'Fix Content', detail: 'Fix grammar, placeholder text, missing copy' },
    { title: 'Fix Code', detail: 'Fix JavaScript bugs, broken links, HTML errors' },
    { title: 'Commit & Push', detail: 'Save all improvements to GitHub' },
  ],
}

// ─── STEP 1: AUDIT ────────────────────────────────────────────────────────────
// Three agents scan different parts of the site in parallel at the same time.
// Each one reads the actual files and reports what needs fixing.
// ─────────────────────────────────────────────────────────────────────────────
phase('Audit')

const ISSUE_SCHEMA = {
  type: 'object',
  properties: {
    ui_issues:      { type: 'array', items: { type: 'string' } },
    content_issues: { type: 'array', items: { type: 'string' } },
    code_issues:    { type: 'array', items: { type: 'string' } },
  },
  required: ['ui_issues', 'content_issues', 'code_issues'],
}

const [auditPlayer, auditHome, auditData] = await parallel([

  // AGENT 1 PROMPT — reviews the course player (the screen learners use most)
  () => agent(
    `You are a senior web developer doing a professional quality audit of TIH Academy's course player page.
Read the file: /home/user/Tolbertinnovationhubliberia1/course-player.html
Also read: /home/user/Tolbertinnovationhubliberia1/lesson-content.js

Check for ALL of the following issues and list every one you find:

UI ISSUES to look for:
- Any element that overflows off the screen on mobile (width > 100%)
- Inconsistent font sizes (mixing too many sizes in one section)
- Buttons that are too small to tap on mobile (under 44px height)
- Colors that are hard to read (poor contrast)
- Missing hover effects on interactive elements
- The sidebar: does it look clean and professional?
- The certificate modal: does it look like a real certificate?
- The progress bar: is it visible and polished?
- Any section that looks empty or unfinished

CONTENT ISSUES to look for:
- Any placeholder text like "Lorem ipsum" or "Coming soon"
- Generic text that should be specific (e.g., "Your course title here")
- Missing lesson descriptions
- Typos or grammar errors you can spot
- Any labels that are confusing or unprofessional

CODE ISSUES to look for:
- JavaScript variables used before they are defined
- Event listeners that might fail if the element is missing
- CSS properties that might not work in mobile browsers
- Any console.log() left in production code
- Missing semicolons or obvious syntax issues

Return exactly what you find. Be specific — include the CSS class name, function name, or line content where possible.`,
    { schema: ISSUE_SCHEMA, label: 'audit:course-player' }
  ),

  // AGENT 2 PROMPT — reviews the homepage (first impression for all visitors)
  () => agent(
    `You are a senior web developer doing a professional quality audit of TIH Academy's homepage.
Read the file: /home/user/Tolbertinnovationhubliberia1/index.html

Check for ALL of the following and list every issue you find:

UI ISSUES:
- Hero section: is the headline large and bold? Is the main CTA button obvious?
- Navigation bar: does it look clean? Are links spaced evenly?
- Course cards: do they look professional? Are images/icons consistent?
- Footer: is it complete with contact info, links, and copyright year (2026)?
- Any section with broken layout or misaligned elements
- Mobile: would any element break or overlap on a phone screen?
- Any animation or hover effect that looks cheap or broken

CONTENT ISSUES:
- Outdated information (wrong year, old dates)
- Missing or vague descriptions for courses or services
- Spelling mistakes or awkward phrasing
- Empty sections or "TBD" / "Coming soon" text
- The About section: is it compelling and specific?

CODE ISSUES:
- Broken href links (links to pages that might not exist)
- Missing alt attributes on img tags
- JavaScript errors or console warnings likely
- Duplicate CSS or unused styles that slow the page

Return exactly what you find. Be specific.`,
    { schema: ISSUE_SCHEMA, label: 'audit:homepage' }
  ),

  // AGENT 3 PROMPT — reviews the course data (the engine behind all 12 courses)
  () => agent(
    `You are a professional content reviewer auditing TIH Academy's course database.
Read the file: /home/user/Tolbertinnovationhubliberia1/courses-db.js

Check for ALL of the following:

CONTENT ISSUES:
- Any course missing a description, or with a very vague description (under 20 words)
- Lesson titles that are unclear or generic
- Module names that don't clearly say what the learner will gain
- Any typos, grammar mistakes, or capitalization errors
- Courses that have fewer modules or lessons than expected
- Any lesson marked as a quiz or project that has a confusing title

CODE ISSUES:
- Any course missing required fields (id, title, description, modules)
- Duplicate course IDs
- Inconsistent data format between courses (some using arrays, some using objects differently)
- Any broken or missing thumbnail/image path

UI ISSUES:
- Course descriptions that are too long and would break the card layout (over 200 characters)
- Course titles that are too long for a course card heading

Return exactly what you find. Be specific about which course ID has the problem.`,
    { schema: ISSUE_SCHEMA, label: 'audit:course-data' }
  ),
])

// Merge all findings from the three audit agents
const allUI      = [...(auditPlayer?.ui_issues || []),      ...(auditHome?.ui_issues || []),      ...(auditData?.ui_issues || [])]
const allContent = [...(auditPlayer?.content_issues || []), ...(auditHome?.content_issues || []), ...(auditData?.content_issues || [])]
const allCode    = [...(auditPlayer?.code_issues || []),    ...(auditHome?.code_issues || []),    ...(auditData?.code_issues || [])]

log(`Audit done — ${allUI.length} UI issues · ${allContent.length} content issues · ${allCode.length} code issues`)

// ─── STEP 2: FIX UI ───────────────────────────────────────────────────────────
// One agent reads each file that has UI problems and applies professional fixes.
// ─────────────────────────────────────────────────────────────────────────────
phase('Fix UI')

if (allUI.length > 0) {
  await agent(
    `You are a senior front-end developer fixing visual issues on TIH Academy — a professional educational website for Liberia, West Africa.
Working directory: /home/user/Tolbertinnovationhubliberia1/
Git branch: ccr-18abdbb2-w1rn9d

HERE ARE THE UI ISSUES FOUND IN TODAY'S AUDIT:
${allUI.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}

YOUR TASK:
Fix every issue above. For each fix:
1. Read the file first (use the Read tool)
2. Apply the fix using the Edit tool
3. Move to the next issue

DESIGN RULES — follow these exactly:
- Primary blue: #002868 (dark navy, used for headers and primary buttons)
- Accent red: #BF0A30 (used for highlights and alerts — sparingly)
- Gold: #f59e0b (used for stars, badges, certificates)
- Green: #10b981 (used for success states, completed lessons)
- Font stack: 'Inter', 'Segoe UI', sans-serif
- Minimum button height on mobile: 44px
- All interactive elements must have a :hover or :focus state
- Cards should have subtle box-shadow: 0 2px 8px rgba(0,0,0,0.08)
- Consistent border-radius: 8px for cards, 6px for buttons, 50% for icons

IMPORTANT RULES:
- ONLY fix what is listed above — do not redesign things that are working
- Do NOT change any JavaScript logic
- Do NOT remove any existing working features
- After applying all fixes, do NOT commit — the next step will handle that`,
    { label: 'fix:ui' }
  )
} else {
  log('No UI issues to fix today.')
}

// ─── STEP 3: FIX CONTENT ─────────────────────────────────────────────────────
// One agent fixes all text, copy, and content quality issues.
// ─────────────────────────────────────────────────────────────────────────────
phase('Fix Content')

if (allContent.length > 0) {
  await agent(
    `You are a professional content editor for TIH Academy — an educational platform empowering Liberians with technology and business skills.
Working directory: /home/user/Tolbertinnovationhubliberia1/

HERE ARE THE CONTENT ISSUES FOUND IN TODAY'S AUDIT:
${allContent.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}

YOUR TASK:
Fix every content issue above. For each fix:
1. Read the file first
2. Apply the fix using the Edit tool
3. Move to the next issue

CONTENT VOICE GUIDELINES:
- Tone: professional, encouraging, clear — written for adult Liberian learners
- Avoid jargon; explain technical terms simply
- Course descriptions should say WHO the course is for and WHAT they will gain
- Lesson titles should start with an action verb (e.g., "Understand...", "Build...", "Apply...")
- Any reference to Liberia, West Africa, or local context should be accurate and respectful
- Current year is 2026 — update any outdated copyright or date references

IMPORTANT RULES:
- ONLY fix what is listed above
- Do NOT change CSS or JavaScript
- Do NOT alter the structure of courses-db.js — only fix text values
- After applying all fixes, do NOT commit yet`,
    { label: 'fix:content' }
  )
} else {
  log('No content issues to fix today.')
}

// ─── STEP 4: FIX CODE ─────────────────────────────────────────────────────────
// One agent finds and fixes JavaScript bugs, broken HTML, and broken links.
// ─────────────────────────────────────────────────────────────────────────────
phase('Fix Code')

if (allCode.length > 0) {
  await agent(
    `You are a senior JavaScript and HTML developer fixing bugs in TIH Academy — a static GitHub Pages website (no backend, no build step, pure HTML/CSS/JS).
Working directory: /home/user/Tolbertinnovationhubliberia1/

HERE ARE THE CODE ISSUES FOUND IN TODAY'S AUDIT:
${allCode.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}

YOUR TASK:
Fix every code issue above. For each fix:
1. Read the file first
2. Apply the minimal fix using the Edit tool
3. Move to the next issue

CODE RULES:
- This is a static site — no Node.js, no npm, no build step
- All scripts run in the browser — use vanilla JavaScript only (no imports)
- Global variables are shared via window scope between script tags
- The course data lives in: window.COURSES_DB (from courses-db.js)
- The lesson content lives in: window.LESSON_CONTENT (from lesson-content.js)
- Always guard against null/undefined: use optional chaining or if-checks
- Never remove error handling that already exists
- Remove any console.log() statements left in production code

IMPORTANT RULES:
- Make the MINIMAL change needed to fix the bug — do not refactor
- Do NOT change any CSS or content
- Do NOT introduce new features
- After applying all fixes, do NOT commit yet`,
    { label: 'fix:code' }
  )
} else {
  log('No code issues to fix today.')
}

// ─── STEP 5: COMMIT & PUSH ────────────────────────────────────────────────────
// Final agent commits all changes and pushes to GitHub Pages.
// ─────────────────────────────────────────────────────────────────────────────
phase('Commit & Push')

const totalIssues = allUI.length + allContent.length + allCode.length

await agent(
  `You are a developer finishing a daily automated review of TIH Academy website.
Working directory: /home/user/Tolbertinnovationhubliberia1/
Branch: ccr-18abdbb2-w1rn9d

Today's review found and fixed:
- UI issues: ${allUI.length}
- Content issues: ${allContent.length}
- Code issues: ${allCode.length}
- Total: ${totalIssues}

YOUR TASK:
1. Run: git status  (see what files changed)
2. If there are changes to commit:
   a. Run: git add course-player.html index.html courses-db.js lesson-content.js  (add the main files)
   b. Also run: git add -u  (catch any other modified tracked files)
   c. Run: git commit with this exact format:
      "Daily review 2026-06-24: fixed ${totalIssues} issues (${allUI.length} UI, ${allContent.length} content, ${allCode.length} code)"
   d. Run: git push -u origin main
   e. Run: git push -u origin main:ccr-18abdbb2-w1rn9d
   f. Report: "✅ Pushed successfully. X files changed."
3. If there are NO changes to commit:
   - Report: "✅ No changes needed today — site is already up to standard."

RULES:
- Never use --force when pushing
- Never skip hooks with --no-verify
- Use exponential backoff if push fails: wait 2s, retry; wait 4s, retry; wait 8s, retry; wait 16s, final retry`,
  { label: 'commit-push' }
)

return {
  date: '2026-06-24',
  issues_found: { ui: allUI.length, content: allContent.length, code: allCode.length },
  status: 'complete',
}
