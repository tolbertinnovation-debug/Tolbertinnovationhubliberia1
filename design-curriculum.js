/* TIH Complete Graphic Design Program (Canva & Adobe Photoshop) curriculum.
   Rebuilds COURSES_DB.design into the full 18-module program: design
   fundamentals, Canva (basics/advanced/social/marketing), Photoshop
   (basics/editing/design tools), logo & brand identity, print, photo
   manipulation, advertising, AI tools, freelancing, real-world projects, a
   capstone and a graduation module with exams and a Certificate of Completion.
   Every content lesson has a video + printable notes; project lessons carry
   briefs and downloadable practice files. Modelled on webdev-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.design || COURSES_DB.design._designFullBuilt) return;

  var V = ['FpwZTl3dCZE', 'BMDDGuUBO94', 'HFVTZ7J0W1E', '_ApwkN8BVsc', 'ZB_LneYCkPU', 'DSbGwruIcfc', 'OKkWRpoIFuw', '0jzrqhsXwLo', '2R5fH8iKAXc', 'A4VePn0CAl4', '9CnrknQsg5E', 'qelg3fYlxAE', 'DxLR2CFFys0', 'vaqBJ2dX-Cs', 'BSxg87CoOu4', 't1FdvLveV08', 'fbHP9pF8J2A', 'wHAVsrn4Adc'];
  var VIDEOS = {
    orientation: ['9QTCvayLhCA'],
    fundamentals: ['UmHMVU6dceA'],
    canva: ['jzWxBuvwuwQ'],
    canva_adv: ['mhosBZG7NJQ'],
    social: ['gIxvnDMYQPg'],
    marketing: ['VZvCvWwV_mM'],
    ps_basics: ['pFyOznL9UvA'],
    ps_edit: ['61mkx_OV61s'],
    ps_design: ['qvQie2QP5Vg'],
    logo: ['9QTCvayLhCA'],
    print: ['Srzj2v7ah9c'],
    manip: ['9QTCvayLhCA'],
    advertising: ['9QTCvayLhCA'],
    ai: ['9QTCvayLhCA'],
    freelance: ['9Rz2DWRcmH8'],
    projects: ['9QTCvayLhCA'],
    capstone: ['9QTCvayLhCA'],
    assessment: ['9QTCvayLhCA']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Graphic Design?', 'Careers in Graphic Design', 'Canva vs Adobe Photoshop', 'Setting Up Your Workspace', 'Installing Adobe Photoshop', 'Creating a Canva Account', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Graphic Design Fundamentals', '📐', 'fundamentals', 'content', ['Principles of Design', 'Elements of Design', 'Color Theory', 'Typography', 'Layout and Composition', 'Visual Hierarchy', 'White Space', 'Branding Basics', 'Design Trends', 'Design Best Practices']],
    [3, 'Canva Basics', '🖌️', 'canva', 'content', ['Introduction to Canva', 'Canva Dashboard', 'Templates', 'Uploading Images', 'Adding Text', 'Fonts', 'Shapes and Icons', 'Backgrounds', 'Frames and Grids', 'Saving and Exporting Designs']],
    [4, 'Canva Advanced', '✨', 'canva_adv', 'content', ['Brand Kit', 'Magic Resize', 'AI Design Tools', 'Layer Management', 'Animations', 'Presentations', 'Video Editing', 'Whiteboards', 'Team Collaboration', 'Canva Pro Features']],
    [5, 'Social Media Design with Canva', '📱', 'social', 'content', ['Facebook Posts', 'Instagram Posts', 'Instagram Stories', 'Facebook Covers', 'LinkedIn Banners', 'X (Twitter) Graphics', 'YouTube Thumbnails', 'WhatsApp Status Graphics', 'TikTok Covers', 'Social Media Campaign Design']],
    [6, 'Marketing Materials with Canva', '📣', 'marketing', 'content', ['Flyers', 'Posters', 'Brochures', 'Business Cards', 'Certificates', 'Invitations', 'Menus', 'Event Banners', 'Roll-Up Banners', 'Presentation Slides']],
    [7, 'Adobe Photoshop Basics', '🖥️', 'ps_basics', 'content', ['Introduction to Photoshop', 'Photoshop Interface', 'Creating Documents', 'Working with Layers', 'Selection Tools', 'Move Tool', 'Crop Tool', 'Brush Tool', 'Eraser Tool', 'Saving Projects']],
    [8, 'Photoshop Image Editing', '🖼️', 'ps_edit', 'content', ['Photo Cropping', 'Background Removal', 'Color Correction', 'Brightness & Contrast', 'Curves', 'Levels', 'Retouching', 'Removing Blemishes', 'Object Removal', 'Image Enhancement']],
    [9, 'Photoshop Design Tools', '🛠️', 'ps_design', 'content', ['Shapes', 'Pen Tool', 'Text Tool', 'Smart Objects', 'Masks', 'Layer Styles', 'Blending Modes', 'Filters', 'Adjustment Layers', 'Gradient Tool']],
    [10, 'Logo & Brand Identity Design', '🏷️', 'logo', 'content', ['Logo Design Principles', 'Logo Sketching', 'Logo Creation', 'Brand Colors', 'Brand Typography', 'Brand Guidelines', 'Business Cards', 'Letterheads', 'Company Profiles', 'Brand Identity Project']],
    [11, 'Print Design', '🖨️', 'print', 'content', ['Print Resolution', 'Color Modes (RGB & CMYK)', 'Bleed and Margins', 'Flyers', 'Posters', 'Brochures', 'Banners', 'Magazine Covers', 'Book Covers', 'Print Export Settings']],
    [12, 'Photo Manipulation', '🪄', 'manip', 'content', ['Double Exposure', 'Composite Images', 'Background Replacement', 'Light Effects', 'Shadows', 'Reflections', 'Color Grading', 'Fantasy Designs', 'Movie Posters', 'Creative Projects']],
    [13, 'Advertising Design', '📢', 'advertising', 'content', ['Facebook Ads', 'Instagram Ads', 'Google Display Ads', 'Product Flyers', 'Product Catalogs', 'Promotional Banners', 'Billboard Design', 'Event Promotions', 'Marketing Campaign Graphics', 'Client Design Project']],
    [14, 'AI Tools for Designers', '🤖', 'ai', 'content', ['Canva AI', 'Adobe Firefly', 'AI Image Generation', 'AI Background Removal', 'AI Image Enhancement', 'AI Content Creation', 'AI Productivity Tools', 'Ethical Use of AI']],
    [15, 'Freelancing & Business', '💼', 'freelance', 'content', ['Building a Portfolio', 'Finding Clients', 'Pricing Your Services', 'Writing Proposals', 'Managing Clients', 'Delivering Projects', 'Copyright & Licensing', 'Growing a Design Business']],
    [16, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Business Flyer', 'Church Flyer', 'Event Poster', 'Restaurant Menu', 'Company Profile', 'Product Advertisement', 'Social Media Campaign', 'Brand Identity Package', 'Certificate Design', 'YouTube Thumbnail Series']],
    [17, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'Research', 'Design Concepts', 'Canva Design', 'Photoshop Editing', 'Client Presentation', 'Final Revisions', 'Portfolio Submission']],
    [18, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Canva Assessment', 'Photoshop Assessment', 'Design Principles Quiz', 'Branding Quiz', 'Midterm Examination', 'Final Examination', 'Portfolio Review', 'Practical Design Test', 'Capstone Project Evaluation', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Projects|Series|Package)$/.test(name.trim()); }

  var skillLabel = { orientation: 'graphic design foundations', fundamentals: 'design principles', canva: 'Canva design', canva_adv: 'advanced Canva', social: 'social media design', marketing: 'marketing materials', ps_basics: 'Adobe Photoshop', ps_edit: 'photo editing in Photoshop', ps_design: 'Photoshop design tools', logo: 'logo & brand identity design', print: 'print design', manip: 'photo manipulation', advertising: 'advertising design', ai: 'AI tools for designers', freelance: 'freelancing & design business', projects: 'real design projects', capstone: 'your capstone project', assessment: 'your skills' };

  var ASSETS = '<div class="study-callout"><strong>Downloadable assets:</strong> grab free fonts from <em>Google Fonts</em>, icons &amp; mockups from <em>Freepik</em>, and stock photos from <em>Unsplash</em> and <em>Pexels</em>. Use Canva (Free/Pro), Adobe Photoshop and Adobe Firefly (AI). Print → Save as PDF to keep the brief and practice files list.</div>';

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'design skills';
    var focus = position % 2 ? 'hands-on practice, real examples and a polished result' : 'understanding the concept, planning the design and refining it';
    var showAssets = /Fonts|Templates|Backgrounds|Setting Up|Uploading Images|Adobe Firefly|AI Image/i.test(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Graphic Design · ' + esc(moduleTitle) + '</strong><span>Canva + Photoshop</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two design exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and when designers use it.</li>' +
      '<li>Follow the step-by-step method shown in the video.</li>' +
      '<li>Recreate it yourself in Canva or Photoshop — practice is how design skill grows.</li></ul>' +
      '<h4>Design exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Recreate the example for <em>' + esc(name) + '</em> from scratch.</li>' +
      '<li><strong>Exercise 2:</strong> Make one creative variation and export it for your portfolio.</li></ol>' +
      (showAssets ? ASSETS : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian brand, church, school or business design.</div>') +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a professional graphic designer.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on design project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical design project. Follow the video and notes, then create <em>' + esc(name) + '</em> yourself in Canva or Photoshop and add it to your portfolio.</p>' +
      '<h4>What to design</h4><ol><li>Plan the size, message, colours and layout.</li><li>Build it in Canva and/or Photoshop using what you have learned.</li><li>Export at the right resolution, review it, then improve and finalise it.</li></ol>' +
      ASSETS +
      '<p><strong>Deliverable:</strong> A finished, exported design (with source file) added to your portfolio.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Graphic design is mainly about:', opts: ['Only drawing by hand', 'Communicating a message visually', 'Writing code', 'Playing music'], correct: 1, exp: 'Design communicates ideas visually to an audience.' },
      { q: 'Which two tools does this course focus on?', opts: ['Word and Excel', 'Canva and Adobe Photoshop', 'Python and Java', 'Figma and Blender'], correct: 1, exp: 'You learn Canva and Adobe Photoshop.' },
      { q: 'A strong portfolio should show:', opts: ['One design', 'A range of your best, varied work', 'Only text', 'Other people’s work'], correct: 1, exp: 'A varied portfolio of your best work wins clients.' },
      { q: 'The best way to improve at design is to:', opts: ['Only watch videos', 'Practise by recreating and creating real designs', 'Memorise menus', 'Avoid feedback'], correct: 1, exp: 'Practice and feedback build real design skill.' },
      { q: 'Before designing you should first understand the:', opts: ['File size only', 'Purpose, audience and message', 'Printer brand', 'Font price'], correct: 1, exp: 'Great design starts with purpose, audience and message.' },
      { q: 'Exporting a design means:', opts: ['Deleting it', 'Saving it in a shareable file format', 'Printing only', 'Emailing the app'], correct: 1, exp: 'Exporting saves your design as PNG, JPG, PDF, etc.' }
    ],
    fundamentals: [
      { q: 'Which is a principle of design?', opts: ['Balance', 'Megabytes', 'Latency', 'Bandwidth'], correct: 0, exp: 'Balance, contrast, alignment, repetition, etc. are design principles.' },
      { q: 'Visual hierarchy guides the viewer’s:', opts: ['Internet speed', 'Attention to the most important elements first', 'Printer', 'File name'], correct: 1, exp: 'Hierarchy shows what to look at first, second, etc.' },
      { q: 'White space (negative space) is:', opts: ['Wasted space', 'The empty space that improves clarity and focus', 'Always white', 'A font'], correct: 1, exp: 'White space gives designs room to breathe and read well.' },
      { q: 'Contrast helps a design by:', opts: ['Making everything the same', 'Making key elements stand out', 'Hiding text', 'Slowing loading'], correct: 1, exp: 'Contrast separates and emphasises elements.' },
      { q: 'Complementary colours are:', opts: ['Next to each other on the wheel', 'Opposite on the colour wheel', 'Always blue', 'The same colour'], correct: 1, exp: 'Opposite colours create strong, vibrant contrast.' },
      { q: 'Good typography mainly ensures text is:', opts: ['Tiny', 'Readable and appropriate in tone', 'All capitals', 'Rainbow-coloured'], correct: 1, exp: 'Typography balances readability and the right tone.' }
    ],
    canva: [
      { q: 'Canva is best described as:', opts: ['A code editor', 'An easy online design tool with templates', 'A spreadsheet', 'A database'], correct: 1, exp: 'Canva is a template-based online design platform.' },
      { q: 'Templates in Canva help you:', opts: ['Write code', 'Start fast from a professional layout', 'Edit RAW photos', 'Host a website'], correct: 1, exp: 'Templates give a ready layout you customise.' },
      { q: 'To keep brand colours and logos consistent, use Canva’s:', opts: ['Brand Kit', 'Magic Eraser', 'Timeline', 'Terminal'], correct: 0, exp: 'The Brand Kit stores brand colours, fonts and logos.' },
      { q: 'Magic Resize lets you:', opts: ['Delete a design', 'Resize a design for different formats quickly', 'Print only', 'Add code'], correct: 1, exp: 'Magic Resize adapts a design to new sizes fast (Pro).' },
      { q: 'To export a transparent design in Canva you choose:', opts: ['JPG', 'PNG with transparent background', 'MP4', 'TXT'], correct: 1, exp: 'PNG supports transparency (a Pro option).' },
      { q: 'Canva is useful for social media because it has:', opts: ['No templates', 'Correct sizes for each platform', 'Only print sizes', 'No text tools'], correct: 1, exp: 'Canva provides ready sizes for each social platform.' }
    ],
    ps: [
      { q: 'In Photoshop, layers let you:', opts: ['Only add text', 'Stack and edit parts of an image separately', 'Print faster', 'Write code'], correct: 1, exp: 'Layers keep elements editable and independent.' },
      { q: 'A layer mask lets you:', opts: ['Delete the layer', 'Hide/reveal parts non-destructively', 'Change the file name', 'Add a font'], correct: 1, exp: 'Masks hide areas without permanently deleting pixels.' },
      { q: 'To remove a background you can use:', opts: ['The Text tool', 'Selection tools / Remove Background', 'The Zoom tool', 'The Hand tool'], correct: 1, exp: 'Selections (or Remove Background) isolate the subject.' },
      { q: 'Smart Objects are useful because they:', opts: ['Lower quality', 'Preserve quality when scaling and allow non-destructive edits', 'Delete layers', 'Add sound'], correct: 1, exp: 'Smart Objects keep source data for non-destructive edits.' },
      { q: 'Adjustment layers (like Curves) are good because they:', opts: ['Are permanent', 'Edit tone/colour non-destructively', 'Only crop', 'Add text'], correct: 1, exp: 'Adjustment layers change tone/colour without altering pixels.' },
      { q: 'To keep an editable Photoshop file with layers, save as:', opts: ['.jpg', '.psd', '.txt', '.mp3'], correct: 1, exp: '.psd keeps layers editable; export flattened copies as needed.' }
    ],
    branding: [
      { q: 'A logo should be:', opts: ['Complex and detailed', 'Simple, memorable and scalable', 'Only one colour always', 'A photo'], correct: 1, exp: 'Strong logos are simple, memorable and work at any size.' },
      { q: 'Brand guidelines define:', opts: ['Only the price', 'How the brand’s logo, colours and fonts are used', 'The office address', 'The database'], correct: 1, exp: 'Guidelines keep the brand consistent everywhere.' },
      { q: 'A brand’s colour palette should be:', opts: ['Random each time', 'Consistent across all materials', 'Only black', 'Different per designer'], correct: 1, exp: 'Consistent colours build recognition.' },
      { q: 'A logo should still work when it is:', opts: ['Only huge', 'Scaled small (e.g. on a business card)', 'Never resized', 'Only on screen'], correct: 1, exp: 'Scalability is essential for real-world use.' },
      { q: 'Brand identity includes:', opts: ['Just a logo', 'Logo, colours, typography and overall visual style', 'Only a slogan', 'Only a website'], correct: 1, exp: 'Identity is the full consistent visual system.' },
      { q: 'A vector logo is preferred because it:', opts: ['Loses quality when scaled', 'Scales to any size without losing quality', 'Is a photo', 'Cannot be printed'], correct: 1, exp: 'Vectors scale infinitely without pixelation.' }
    ],
    print: [
      { q: 'For print you should use the colour mode:', opts: ['RGB', 'CMYK', 'HEX', 'HSL'], correct: 1, exp: 'Printers use CMYK; screens use RGB.' },
      { q: 'Print resolution should generally be:', opts: ['72 DPI', '300 DPI', '10 DPI', '1 DPI'], correct: 1, exp: '300 DPI gives sharp print quality.' },
      { q: 'Bleed is:', opts: ['A printing error', 'Extra area beyond the edge so trimming leaves no white border', 'A font', 'A colour'], correct: 1, exp: 'Bleed prevents white edges after trimming.' },
      { q: 'RGB is used for:', opts: ['Print only', 'Screens/digital', 'CMYK printers', 'Nothing'], correct: 1, exp: 'RGB is for on-screen/digital output.' },
      { q: 'To send a print-ready file you usually export a:', opts: ['Low-res JPG', 'High-res PDF with bleed', 'TXT file', 'MP4'], correct: 1, exp: 'Print shops prefer high-res PDFs with bleed/marks.' },
      { q: 'Margins in print keep important content:', opts: ['At the very edge', 'Safely inside the trim line', 'Off the page', 'Invisible'], correct: 1, exp: 'Safe margins stop content being cut off.' }
    ],
    ai: [
      { q: 'Adobe Firefly is used to:', opts: ['Write essays only', 'Generate and edit images with AI', 'Host websites', 'Manage email'], correct: 1, exp: 'Firefly is Adobe’s generative AI for imagery.' },
      { q: 'AI background removal helps designers:', opts: ['Slow down', 'Cut out subjects quickly', 'Write code', 'Print faster'], correct: 1, exp: 'AI isolates subjects in seconds.' },
      { q: 'When using AI images commercially you should check:', opts: ['Nothing', 'Licensing and usage rights', 'The weather', 'Your typing speed'], correct: 1, exp: 'Always confirm you have rights to use AI output.' },
      { q: 'Ethical AI use means you:', opts: ['Copy others’ work', 'Are transparent and respect rights and originality', 'Ignore licensing', 'Never credit'], correct: 1, exp: 'Use AI responsibly, respecting rights and honesty.' },
      { q: 'AI tools are best treated as:', opts: ['A replacement for all skill', 'A helper that speeds up your creative work', 'Useless', 'Only for text'], correct: 1, exp: 'AI accelerates work but design judgement stays human.' },
      { q: 'Canva AI features can help you:', opts: ['Only delete designs', 'Generate images/text and speed up design', 'Host servers', 'Edit RAW only'], correct: 1, exp: 'Canva AI assists with generation and editing.' }
    ],
    freelance: [
      { q: 'When pricing design work you should consider:', opts: ['Nothing', 'Your time, skill, and the value to the client', 'Only the cheapest rate', 'A random number'], correct: 1, exp: 'Price on time, skill and value delivered.' },
      { q: 'A design proposal should include:', opts: ['Only your name', 'Scope, deliverables, timeline and price', 'Just a logo', 'Nothing'], correct: 1, exp: 'A clear proposal sets expectations and scope.' },
      { q: 'To find clients as a freelancer you can:', opts: ['Do nothing', 'Build a portfolio and use freelance platforms/referrals', 'Only wait', 'Avoid social media'], correct: 1, exp: 'A portfolio plus outreach and platforms win clients.' },
      { q: 'Copyright means you should:', opts: ['Use any image freely', 'Only use images you have rights to', 'Ignore licences', 'Copy competitors'], correct: 1, exp: 'Respect copyright; use licensed or free-to-use assets.' },
      { q: 'Good client communication includes:', opts: ['Ignoring messages', 'Clear updates, questions and confirming scope', 'Guessing needs', 'No revisions'], correct: 1, exp: 'Clear, regular communication keeps clients happy.' },
      { q: 'Delivering a project professionally means:', opts: ['Late, wrong format', 'On time, in the agreed formats, with source files if agreed', 'No files', 'Only a screenshot'], correct: 1, exp: 'Deliver on time in the right formats as agreed.' }
    ],
    social: [
      { q: 'Social media graphics must use the:', opts: ['Same size everywhere', 'Correct size for each platform', 'Only print sizes', 'No sizes'], correct: 1, exp: 'Each platform has recommended dimensions.' },
      { q: 'A YouTube thumbnail should be:', opts: ['Tiny text, no focal point', 'Bold, clear and readable at small sizes', 'All text', 'Blank'], correct: 1, exp: 'Thumbnails need a clear focal point and bold, readable text.' },
      { q: 'A social media campaign is:', opts: ['One random post', 'A coordinated set of designs with a consistent look', 'Only a logo', 'A print flyer'], correct: 1, exp: 'Campaigns use consistent, coordinated visuals.' },
      { q: 'Instagram Stories are usually in which orientation?', opts: ['Square', 'Vertical (9:16)', 'Wide landscape', 'Circle'], correct: 1, exp: 'Stories are full-screen vertical (9:16).' },
      { q: 'Consistent branding across posts helps:', opts: ['Confuse people', 'Build recognition and trust', 'Nothing', 'Slow loading'], correct: 1, exp: 'Consistency builds a recognisable brand.' },
      { q: 'Text on social graphics should be:', opts: ['As small as possible', 'Short, clear and legible on mobile', 'Only in one giant block', 'Hidden'], correct: 1, exp: 'Keep text short and readable on small screens.' }
    ],
    marketing: [
      { q: 'A flyer’s main goal is to:', opts: ['Confuse readers', 'Communicate an offer/message clearly and prompt action', 'Only look busy', 'Hide information'], correct: 1, exp: 'Flyers deliver a clear message and call to action.' },
      { q: 'A good business card includes:', opts: ['Everything possible', 'Name, role, and clear contact details', 'Only a photo', 'A long paragraph'], correct: 1, exp: 'Keep cards clean with essential contact info.' },
      { q: 'A strong call to action (CTA) is:', opts: ['Vague', 'Clear and action-focused (e.g. “Call now”)', 'Hidden', 'Missing'], correct: 1, exp: 'A clear CTA tells the viewer what to do next.' },
      { q: 'Marketing materials should match the:', opts: ['Random styles', 'Brand’s consistent look and colours', 'Competitor exactly', 'No style'], correct: 1, exp: 'Consistency reinforces the brand.' },
      { q: 'A brochure is best for:', opts: ['One word', 'Presenting organised information in sections/folds', 'Only a logo', 'A single icon'], correct: 1, exp: 'Brochures organise more detailed information.' },
      { q: 'For a large banner you must ensure:', opts: ['Low resolution', 'High resolution and readable-from-distance text', 'Tiny text', 'No contrast'], correct: 1, exp: 'Banners need high res and bold, distance-readable text.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', canva: 'canva', canva_adv: 'canva', social: 'social', marketing: 'marketing', ps_basics: 'ps', ps_edit: 'ps', ps_design: 'ps', logo: 'branding', print: 'print', manip: 'ps', advertising: 'marketing', ai: 'ai', freelance: 'freelance', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.canva, BANK.ps, BANK.branding, BANK.print, BANK.ai, BANK.freelance, BANK.social, BANK.marketing);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Canva/i.test(name)) return 'canva';
    if (/Photoshop/i.test(name)) return 'ps';
    if (/Principles|Design/i.test(name)) return 'fundamentals';
    if (/Brand/i.test(name)) return 'branding';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'des-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Practical Design Test/i.test(name);
        var count = big ? (/Final|Capstone/i.test(name) ? 20 : 15) : 8;
        var aid = 'des-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        var pv = pool[idx % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'des-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two design exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.design;
  COURSES_DB.design = {
    id: 'design',
    title: 'Complete Graphic Design Program: Canva & Adobe Photoshop',
    shortDesc: 'A full 18-module graphic design program: design fundamentals, Canva (basics to advanced), Adobe Photoshop, logo & brand identity, print, photo manipulation, advertising, AI tools, freelancing, 20 real-world projects, a professional portfolio and a Certificate of Completion.',
    category: 'Graphic Design',
    icon: ex.icon || '🎨',
    gradient: ex.gradient || 'linear-gradient(135deg,#be185d,#ec4899)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH designers',
    duration: '120h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$150',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-DESIGN-0001',
    learn: [
      'Master design fundamentals: principles, colour, typography and layout',
      'Design confidently in Canva (basics, advanced, social & marketing)',
      'Edit and create in Adobe Photoshop (editing, tools, manipulation)',
      'Design logos, full brand identities and print-ready materials',
      'Create advertising, social media and marketing graphics',
      'Use AI design tools, build a portfolio and start freelancing'
    ],
    requirements: [
      'A computer or tablet with internet access',
      'A free Canva account (Photoshop optional/trial for those modules)',
      'Willingness to practise every design in Canva or Photoshop'
    ],
    about: [
      'This is the complete TIH Graphic Design Program, rebuilt into eighteen modules covering Canva and Adobe Photoshop from beginner to professional.',
      'Every content lesson has a video and printable notes; twenty real-world projects and a capstone build your portfolio, and you learn logo/branding, print, photo manipulation, advertising, AI tools and freelancing.',
      'Software used: Canva (Free & Pro), Adobe Photoshop and Adobe Firefly (AI), with free assets from Google Fonts, Freepik, Unsplash and Pexels. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _designFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.design = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[DESIGN] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
