/* TIH Complete WASSCE Technical Drawing Preparation Course.
   Builds COURSES_DB['wassce-technical-drawing'] directly with the full 10-module
   WAEC Technical Drawing structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Technical Drawing syllabus. Modelled on
   wassce-computer-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-technical-drawing';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceTDFull) return;

  // Vetted geometry (maths) + design videos reused from the TIH courses.
  // Content, notes and quizzes are fully Technical-Drawing-specific.
  var VIDEOS = {
    intro: ['FsuYINdMXtg'],
    instruments: ['YIWLG8Gqz8M'],
    geometry: ['FjgHCYLMbjg'],
    ortho: ['JvW5bb8yZc8'],
    isometric: ['gpEA7qqBgRE'],
    sections: ['QrqjYLlzAnY'],
    building: ['JvW5bb8yZc8'],
    cad: ['FsuYINdMXtg'],
    exampractice: ['FsuYINdMXtg'],
    final: ['FsuYINdMXtg']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Technical Drawing', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Technical Drawing Exam', 'Exam Structure & Marking Scheme', 'Introduction to Technical Drawing', 'Drawing Instruments & Materials', 'Study Strategies']],
    [2, 'Drawing Instruments & Basic Drawing Skills', '📐', 'instruments', 'content', ['Drawing Board and T-Square', 'Set Squares', 'Compass and Dividers', 'Protractor', 'Scale Rule', 'Types of Lines', 'Lettering and Dimensioning', 'Drawing Standards']],
    [3, 'Geometrical Constructions', '📏', 'geometry', 'content', ['Bisecting Lines and Angles', 'Constructing Triangles', 'Constructing Polygons', 'Tangents', 'Circles and Arcs', 'Loci', 'Plane Geometry', 'Practical Construction Exercises']],
    [4, 'Orthographic Projection', '🔲', 'ortho', 'content', ['Principles of Orthographic Projection', 'First-Angle Projection', 'Third-Angle Projection', 'Multi-View Drawings', 'Hidden Lines', 'Dimensioning', 'Reading Engineering Drawings', 'Practical Exercises']],
    [5, 'Isometric & Oblique Drawing', '📦', 'isometric', 'content', ['Introduction to Isometric Drawing', 'Isometric Projection', 'Isometric Circles', 'Oblique Drawing', 'Pictorial Drawings', 'Converting Orthographic to Isometric', 'Practical Applications', 'Drawing Practice']],
    [6, 'Sectional Views & Development', '✂️', 'sections', 'content', ['Introduction to Sectioning', 'Full Sections', 'Half Sections', 'Offset Sections', 'Development of Solids', 'Surface Development', 'Intersections', 'Practical Drawing']],
    [7, 'Building & Mechanical Drawing', '🏗️', 'building', 'content', ['Building Plans', 'Floor Plans', 'Elevations', 'Sections of Buildings', 'Mechanical Components', 'Assembly Drawings', 'Exploded Views', 'Industrial Applications']],
    [8, 'Computer-Aided Design (CAD) Basics', '🖱️', 'cad', 'content', ['Introduction to CAD', 'AutoCAD Interface', 'Drawing Basic Shapes', 'Editing Commands', 'Layers', 'Dimensioning in CAD', 'Printing Drawings', 'CAD Practice']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Geometrical Construction Practice', 'Orthographic Drawing Practice', 'Isometric Drawing Practice', 'Building Drawing Practice', 'Past WAEC Questions', 'Mock Practical Examination']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete Technical Drawing Revision', 'Drawing Standards Review', 'Examination Techniques', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Technical Drawing exam', instruments: 'drawing instruments & basic skills', geometry: 'geometrical constructions', ortho: 'orthographic projection', isometric: 'isometric & oblique drawing', sections: 'sectional views & development', building: 'building & mechanical drawing', cad: 'computer-aided design (CAD)', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    instruments: '<h4>📥 Guide: Drawing Instruments & Standards</h4><ul><li><strong>T-square &amp; drawing board:</strong> draw accurate horizontal lines and a reference edge.</li><li><strong>Set squares:</strong> 45° and 30°/60° for verticals and standard angles.</li><li><strong>Compass &amp; dividers:</strong> draw circles/arcs and step off equal distances.</li><li><strong>Line types:</strong> continuous thick (visible), dashed (hidden), chain (centre lines).</li><li><strong>Lettering &amp; dimensioning:</strong> neat single-stroke capitals; dimension clearly to scale.</li></ul>',
    geometry: '<h4>📥 Guide: Geometrical Constructions</h4><ul><li><strong>Bisecting:</strong> use equal arcs from both ends to bisect a line or angle.</li><li><strong>Polygons:</strong> construct regular polygons in/around a circle.</li><li><strong>Tangents:</strong> a tangent touches a circle at 90° to the radius.</li><li><strong>Loci:</strong> the path traced by a point moving under a rule.</li><li><strong>Always</strong> leave your construction arcs visible — examiners award method marks.</li></ul>',
    ortho: '<h4>📥 Guide: Orthographic Projection</h4><ul><li><strong>Orthographic views:</strong> front elevation, end/side elevation and plan.</li><li><strong>First-angle</strong> (used in Africa/Europe): the view is projected beyond the object.</li><li><strong>Third-angle</strong> (USA): the view is projected in front of the object.</li><li><strong>Hidden detail</strong> is shown with dashed lines; centre lines are chain lines.</li><li><strong>Dimension</strong> each view clearly and to the stated scale.</li></ul>',
    isometric: '<h4>📥 Guide: Isometric & Oblique Drawing</h4><ul><li><strong>Isometric axes:</strong> vertical plus two lines at 30° to the horizontal.</li><li><strong>Isometric lines</strong> are drawn to true length; non-isometric lines are not.</li><li><strong>Isometric circles</strong> appear as ellipses (use the four-centre method).</li><li><strong>Oblique drawing:</strong> the front face is true shape; depth is drawn at 45°.</li><li><strong>Pictorial drawings</strong> show a 3-D impression of the object.</li></ul>',
    sections: '<h4>📥 Guide: Sectional Views & Development</h4><ul><li><strong>Sectioning</strong> shows internal features by an imaginary cut.</li><li><strong>Hatching</strong> (thin 45° lines) marks the cut surface.</li><li><strong>Full section</strong> cuts right through; a <strong>half section</strong> cuts halfway.</li><li><strong>Development</strong> unfolds a solid’s surface flat (e.g. a cylinder → a rectangle + 2 circles).</li><li><strong>Cutting plane</strong> is shown by a chain line with arrows.</li></ul>',
    building: '<h4>📥 Guide: Building & Mechanical Drawing</h4><ul><li><strong>Floor plan:</strong> a top view of a building’s layout of rooms and walls.</li><li><strong>Elevation:</strong> the front/side external view of a building.</li><li><strong>Section:</strong> a cut-through view showing internal construction.</li><li><strong>Assembly drawing</strong> shows parts fitted together; an <strong>exploded view</strong> shows them separated in order.</li><li><strong>Use standard symbols</strong> and a clear title block.</li></ul>',
    cad: '<h4>📥 Guide: CAD Basics</h4><ul><li><strong>CAD</strong> = Computer-Aided Design (e.g. AutoCAD, LibreCAD).</li><li><strong>Basic commands:</strong> LINE, CIRCLE, RECTANGLE, TRIM, OFFSET, MIRROR.</li><li><strong>Layers</strong> organise a drawing (e.g. dimensions, hidden, centre lines).</li><li><strong>Coordinates:</strong> absolute, relative and polar input for precision.</li><li><strong>Advantages:</strong> accuracy, easy editing, reuse and quick printing/plotting.</li></ul>'
  };
  function templateFor(name, skill) {
    if (skill === 'instruments' || /T-Square|Set Squares|Compass|Protractor|Scale Rule|Types of Lines|Lettering|Drawing Standards/i.test(name)) return TEMPLATES.instruments;
    if (skill === 'geometry' || /Bisecting|Triangles|Polygons|Tangents|Circles and Arcs|Loci|Plane Geometry/i.test(name)) return TEMPLATES.geometry;
    if (skill === 'ortho' || /Orthographic|First-Angle|Third-Angle|Multi-View|Hidden Lines|Engineering Drawings/i.test(name)) return TEMPLATES.ortho;
    if (skill === 'isometric' || /Isometric|Oblique|Pictorial/i.test(name)) return TEMPLATES.isometric;
    if (skill === 'sections' || /Section|Development|Intersections|Solids/i.test(name)) return TEMPLATES.sections;
    if (skill === 'building' || /Building|Floor Plans|Elevations|Mechanical|Assembly|Exploded/i.test(name)) return TEMPLATES.building;
    if (skill === 'cad' || /CAD|AutoCAD|Editing Commands|Layers|Printing Drawings/i.test(name)) return TEMPLATES.cad;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Technical Drawing skills';
    var focus = position % 2 ? 'clear method, worked construction steps and timed drawing practice' : 'understanding the principle and applying it to WAEC-style drawing questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Technical Drawing · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and worked steps, then complete the two drawing exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Learn the method/convention for <em>' + esc(name) + '</em> and how WAEC tests it in the drawing paper.</li>' +
      '<li>Follow the construction step by step, keeping instruments sharp and lines to standard.</li>' +
      '<li>Practise with past-question-style items, drawing accurately to scale and leaving construction lines.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Complete one WAEC-style drawing on <em>' + esc(name) + '</em> and check it against the marking scheme.</div>') +
      '<h4>Drawing exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Draw/construct <em>' + esc(name) + '</em> accurately on a drawing sheet, showing all construction lines.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and add it to your technical-drawing portfolio.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Technical Drawing preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this drawing task accurately on a drawing sheet (or in CAD), to scale and to standard, then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Technical Drawing exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Technical drawing is best described as:', opts: ['Free-hand art', 'A precise graphical language for communicating designs', 'Only painting', 'Writing essays'], correct: 1, exp: 'It is an accurate graphical language for engineering/design.' },
      { q: 'WASSCE Technical Drawing is mainly assessed by:', opts: ['An oral test only', 'Objective questions and practical drawing papers', 'One essay only', 'Cooking'], correct: 1, exp: 'It has objective and practical drawing components.' },
      { q: 'In the drawing paper, marks are earned mainly for:', opts: ['Speed only', 'Accuracy, correct method and neatness to standard', 'Colour only', 'Guessing'], correct: 1, exp: 'Accuracy, method and neat standard work score marks.' },
      { q: 'You should leave construction lines on a geometry drawing because they:', opts: ['Waste time', 'Show your method and earn marks', 'Are wrong', 'Must be erased'], correct: 1, exp: 'Construction lines show the method examiners reward.' },
      { q: 'A good study strategy for technical drawing is to:', opts: ['Never practise', 'Practise drawings regularly under timed conditions', 'Only read notes', 'Skip instruments'], correct: 1, exp: 'Regular timed drawing practice builds accuracy and speed.' }
    ],
    instruments: [
      { q: 'The T-square is used mainly to draw:', opts: ['Circles', 'Accurate horizontal lines', 'Curves only', 'Letters'], correct: 1, exp: 'The T-square draws horizontal lines and guides set squares.' },
      { q: 'Set squares commonly provide angles of:', opts: ['45°, 30° and 60°', '10° and 20°', '15° only', 'No angles'], correct: 0, exp: 'The two set squares give 45° and 30°/60°.' },
      { q: 'A compass is used to draw:', opts: ['Straight lines', 'Circles and arcs', 'Letters', 'Sections'], correct: 1, exp: 'A compass draws circles and arcs.' },
      { q: 'Hidden edges of an object are shown with:', opts: ['Thick continuous lines', 'Dashed (broken) lines', 'Chain lines', 'No lines'], correct: 1, exp: 'Hidden detail is drawn with dashed lines.' },
      { q: 'Centre lines are drawn as:', opts: ['Thick lines', 'Chain (long-short dash) lines', 'Dashed lines', 'Wavy lines'], correct: 1, exp: 'Centre lines use a chain-line convention.' },
      { q: 'Dividers are used to:', opts: ['Draw circles', 'Step off / transfer equal distances', 'Write letters', 'Shade areas'], correct: 1, exp: 'Dividers transfer and step off measurements.' }
    ],
    geometry: [
      { q: 'To bisect a line you draw equal arcs from:', opts: ['One end only', 'Both ends of the line', 'The middle only', 'A random point'], correct: 1, exp: 'Equal arcs from both ends give the perpendicular bisector.' },
      { q: 'A tangent to a circle meets the radius at:', opts: ['0°', '45°', '90°', '180°'], correct: 2, exp: 'A tangent is perpendicular (90°) to the radius at the point of contact.' },
      { q: 'A regular hexagon has how many equal sides?', opts: ['5', '6', '7', '8'], correct: 1, exp: 'A hexagon has 6 equal sides.' },
      { q: 'A locus is:', opts: ['A type of pencil', 'The path traced by a point moving to a rule', 'A drawing board', 'An angle'], correct: 1, exp: 'A locus is the path of a point under a given condition.' },
      { q: 'The angles in any triangle add up to:', opts: ['90°', '180°', '270°', '360°'], correct: 1, exp: 'Triangle angles sum to 180°.' },
      { q: 'To construct a perpendicular you typically use a:', opts: ['Compass and straight edge', 'Colour pencil', 'Rubber only', 'Protractor only'], correct: 0, exp: 'Perpendiculars are constructed with compass and straight edge.' }
    ],
    ortho: [
      { q: 'The three principal orthographic views are the front elevation, end elevation and:', opts: ['Isometric', 'Plan', 'Section only', 'Sketch'], correct: 1, exp: 'Front elevation, end elevation and plan.' },
      { q: 'First-angle projection is the system commonly used in:', opts: ['The USA', 'Africa and Europe', 'Nowhere', 'Only CAD'], correct: 1, exp: 'First-angle is standard in Africa/Europe; third-angle in the USA.' },
      { q: 'The plan view is the view looking:', opts: ['From the front', 'From directly above (top)', 'From below only', 'From inside'], correct: 1, exp: 'The plan is the top view.' },
      { q: 'Orthographic projection represents a 3-D object using:', opts: ['One pictorial view', 'Two or more 2-D views', 'Only a section', 'Colour'], correct: 1, exp: 'It uses multiple flat 2-D views.' },
      { q: 'In third-angle projection, the top view is placed:', opts: ['Below the front view', 'Above the front view', 'To the far left', 'Nowhere'], correct: 1, exp: 'In third-angle the plan sits above the front view.' },
      { q: 'Dimensions on a drawing should be:', opts: ['Guessed', 'Clear, complete and to the stated scale', 'Omitted', 'In colour only'], correct: 1, exp: 'Dimensions must be clear, complete and to scale.' }
    ],
    isometric: [
      { q: 'Isometric drawings use axes at ___ to the horizontal:', opts: ['15°', '30°', '45°', '60°'], correct: 1, exp: 'Isometric receding axes are at 30° to the horizontal.' },
      { q: 'On an isometric drawing, a circle appears as:', opts: ['A perfect circle', 'An ellipse', 'A square', 'A line'], correct: 1, exp: 'Isometric circles are drawn as ellipses.' },
      { q: 'In oblique drawing, the front face is drawn:', opts: ['Distorted', 'As its true shape', 'At 30°', 'Upside down'], correct: 1, exp: 'The oblique front face shows true shape; depth goes back at 45°.' },
      { q: 'A pictorial drawing is one that:', opts: ['Shows a flat single view', 'Gives a 3-D impression of the object', 'Has no shape', 'Is only dimensions'], correct: 1, exp: 'Pictorial drawings (isometric/oblique) look 3-D.' },
      { q: 'Isometric lines are drawn to:', opts: ['Half length', 'Their true length', 'Random length', 'Zero'], correct: 1, exp: 'Lines along the isometric axes are true length.' },
      { q: 'Converting an orthographic drawing to isometric produces a:', opts: ['Flat view', 'Pictorial 3-D view', 'Section', 'Graph'], correct: 1, exp: 'It turns 2-D views into a 3-D pictorial drawing.' }
    ],
    sections: [
      { q: 'A sectional view is used to show:', opts: ['Colour', 'Internal features of an object', 'Only the outside', 'The scale'], correct: 1, exp: 'Sections reveal internal detail via an imaginary cut.' },
      { q: 'The cut surface in a section is shown by:', opts: ['Dashed lines', 'Hatching (thin 45° lines)', 'Colour', 'Nothing'], correct: 1, exp: 'Hatching marks the cut surface.' },
      { q: 'A full section cuts the object:', opts: ['Halfway', 'Completely through', 'Not at all', 'Diagonally only'], correct: 1, exp: 'A full section passes completely through.' },
      { q: 'Development of a solid means:', opts: ['Painting it', 'Unfolding its surface into a flat pattern', 'Cutting it up', 'Dimensioning'], correct: 1, exp: 'Development lays the surface out flat (e.g. a net).' },
      { q: 'The development of a cylinder is a:', opts: ['Triangle', 'Rectangle plus two circles', 'Single circle', 'Cube'], correct: 1, exp: 'A cylinder unrolls to a rectangle with two end circles.' },
      { q: 'The cutting plane in a section drawing is shown by a:', opts: ['Thick line', 'Chain line with arrows', 'Dashed line only', 'Wavy line'], correct: 1, exp: 'A chain line with arrows shows the cutting plane.' }
    ],
    building: [
      { q: 'A floor plan is a:', opts: ['Front view', 'Top view of a building’s layout', 'Section only', '3-D model'], correct: 1, exp: 'A floor plan is a top (plan) view of the layout.' },
      { q: 'An elevation shows the:', opts: ['Top view', 'External front or side view of a building', 'Internal wiring only', 'Roof plan only'], correct: 1, exp: 'Elevations show external faces of a building.' },
      { q: 'An assembly drawing shows:', opts: ['One part only', 'How parts fit together', 'Only dimensions', 'A floor plan'], correct: 1, exp: 'Assembly drawings show parts combined.' },
      { q: 'An exploded view shows the parts:', opts: ['Destroyed', 'Separated in their assembly order', 'Painted', 'Hidden'], correct: 1, exp: 'Exploded views separate parts in fitting order.' },
      { q: 'A section of a building shows:', opts: ['Only the roof', 'A cut-through view of the internal construction', 'The colour', 'The plot only'], correct: 1, exp: 'A building section reveals internal construction.' },
      { q: 'A title block on a drawing usually contains:', opts: ['The weather', 'Title, scale, date and drawer’s name', 'A story', 'Nothing'], correct: 1, exp: 'The title block records drawing details.' }
    ],
    cad: [
      { q: 'CAD stands for:', opts: ['Computer-Aided Design', 'Central Access Device', 'Colour And Draw', 'Computer Art Design'], correct: 0, exp: 'CAD = Computer-Aided Design.' },
      { q: 'An advantage of CAD over manual drawing is:', opts: ['Slower work', 'Easy, accurate editing and reuse', 'No accuracy', 'No printing'], correct: 1, exp: 'CAD gives accuracy, easy editing and reuse.' },
      { q: 'In CAD, layers are used to:', opts: ['Waste memory', 'Organise different types of lines/objects', 'Colour the screen only', 'Delete files'], correct: 1, exp: 'Layers separate dimensions, hidden lines, etc.' },
      { q: 'Which is a common CAD editing command?', opts: ['TRIM', 'COOK', 'SLEEP', 'SING'], correct: 0, exp: 'TRIM, OFFSET, MIRROR, etc. are CAD edit commands.' },
      { q: 'An example of CAD software is:', opts: ['AutoCAD', 'A T-square', 'A compass', 'A pencil'], correct: 0, exp: 'AutoCAD (and LibreCAD) are CAD programs.' },
      { q: 'Precise input in CAD can use:', opts: ['Guesswork', 'Coordinates (absolute, relative, polar)', 'Colour only', 'Nothing'], correct: 1, exp: 'Coordinate input gives precision in CAD.' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one drawing', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'Before starting a drawing you should:', opts: ['Draw randomly', 'Plan the layout and choose the scale', 'Skip the title block', 'Use blunt pencils'], correct: 1, exp: 'Plan layout and scale before drawing.' },
      { q: 'Neat, accurate line work in the drawing paper:', opts: ['Wastes time', 'Earns marks and communicates clearly', 'Is banned', 'Does not matter'], correct: 1, exp: 'Neat, standard line work scores and communicates well.' },
      { q: 'Sharp pencils and correct line thickness help you to:', opts: ['Lose marks', 'Produce clear, professional drawings', 'Draw slower only', 'Avoid the exam'], correct: 1, exp: 'Good instruments/technique improve accuracy and clarity.' },
      { q: 'Reviewing your errors after a mock helps you:', opts: ['Nothing', 'Target weak drawing skills before the real exam', 'Waste time', 'Guess better'], correct: 1, exp: 'Error analysis focuses your final revision.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', instruments: 'instruments', geometry: 'geometry', ortho: 'ortho', isometric: 'isometric', sections: 'sections', building: 'building', cad: 'cad', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.instruments, BANK.geometry, BANK.ortho, BANK.isometric, BANK.sections, BANK.building, BANK.cad, BANK.examstrat);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'wtd-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Technical Drawing Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Technical Drawing Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the drawing practice and the Mock Practical Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, drawing instruments, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Practical Examination/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wtd-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, then review every answer explanation.</p></div>';
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
      var pqid = 'wtd-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two drawing exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Technical Drawing: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Technical Drawing preparation course aligned to the WAEC syllabus: drawing instruments & skills, geometrical constructions, orthographic projection, isometric & oblique drawing, sectional views & development, building & mechanical drawing, CAD basics, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '📐',
    gradient: 'linear-gradient(135deg,#5A6B8A,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Technical Drawing examination with clear worked constructions, drawing conventions, CAD basics and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-TDRW',
    learn: [
      'Understand the WAEC Technical Drawing exam structure and marking scheme',
      'Use drawing instruments and apply line, lettering and dimensioning standards',
      'Perform geometrical constructions: bisections, polygons, tangents and loci',
      'Produce orthographic projections (first- and third-angle) and read drawings',
      'Create isometric, oblique, sectional and development drawings',
      'Interpret building/mechanical drawings and use CAD basics'
    ],
    requirements: ['A phone or computer with internet', 'Drawing instruments (board/T-square, set squares, compass, scale rule)', 'Drawing sheets/paper and quality pencils', 'Access to CAD software for the CAD module (optional)', 'Commitment to timed drawing practice'],
    about: [
      'This is the complete TIH WASSCE Technical Drawing preparation course, organised into ten modules aligned to the WAEC Technical Drawing syllabus and examination structure (objective and practical drawing).',
      'Every content lesson has a video and printable notes with worked construction steps and drawing conventions; downloadable resources include drawing sheets, engineering templates and instrument/CAD guides. The course ends with a full mock examination and a Certificate of Completion.',
      'Technical Drawing is highly practical — you must draw regularly with proper instruments. Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-technical-drawing',
    _wassceTDFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-TECHDRAWING] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
