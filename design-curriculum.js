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

  function topicQuestions(num, name) {
    var bank = window.TIH_DESIGN_QUESTIONS, key = 'M'+num+':'+name;
    if (!bank || !bank.topics[key] || bank.topics[key].length !== 4) throw new Error('Incomplete Design topic '+key);
    return bank.topics[key];
  }
  function cloneQ(q) { return {q:q.q, opts:q.opts.slice(), correct:q.correct, exp:q.exp}; }
  function practiceQuiz(num, name) { return {title:'Practice: '+name, moduleNum:num, questions:topicQuestions(num,name).slice(0,3).map(cloneQ)}; }
  function assessmentQuiz(key, name, count) { return {title:name, moduleNum:18, questionCount:count, questions:[]}; }
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
      quizzes[pqid] = practiceQuiz(num, name);
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

  window.tihApplyDesignTopicQuizzes = function () {
    var bank = window.TIH_DESIGN_QUESTIONS, course = COURSES_DB.design;
    if (!bank || !course) throw new Error('Missing Design question bank');
    var reserves = [], projects = [];
    course.modules.forEach(function (m, mi) {
      m.lessons.forEach(function (l) {
        if (!l.isQuiz) return;
        var quiz = course.quizzes[l.quizId];
        if (quiz.title.indexOf('Practice: ') !== 0) return;
        var rows = topicQuestions(mi+1, quiz.title.slice(10));
        quiz.questions = rows.slice(0,3).map(cloneQ);
        quiz.moduleNum = mi+1;
        reserves.push(rows[3]);
      });
    });
    projects = bank.exams.slice();
    var used = {};
    function take(pool, count) {
      var buckets = {}, out = [], nums = [];
      pool.forEach(function(q) { if (used[q.q]) return; if(!buckets[q.module]) { buckets[q.module]=[]; nums.push(q.module); } buckets[q.module].push(q); });
      nums.sort(function(a,b){return a-b;});
      var changed = true;
      while(out.length < count && changed) {
        changed = false;
        nums.forEach(function(n) {
          if(out.length >= count || !buckets[n].length) return;
          var q = buckets[n].shift(); used[q.q]=true; out.push(cloneQ(q)); changed=true;
        });
      }
      if(out.length !== count) throw new Error('Exhausted Design assessment pool');
      return out;
    }
    var papers = Object.keys(course.quizzes).map(function(k){return course.quizzes[k];}).filter(function(q){return q.title.indexOf('Practice: ')!==0;});
    var subjects = {'Canva Assessment':[3,4], 'Photoshop Assessment':[7,8,9], 'Design Principles Quiz':[2], 'Branding Quiz':[10]};
    papers.filter(function(q){return !!subjects[q.title];}).forEach(function(q) {
      q.questions = take(reserves.filter(function(r){return subjects[q.title].indexOf(r.module)>=0;}), q.questionCount);
    });
    ['Midterm Examination','Final Examination','Portfolio Review','Practical Design Test','Capstone Project Evaluation','Graduation Assessment'].forEach(function(title) {
      var q = papers.filter(function(q){return q.title===title;})[0];
      if(!q) throw new Error('Missing Design assessment '+title);
      var pool = ['Portfolio Review','Practical Design Test','Capstone Project Evaluation'].indexOf(title)>=0 ? projects : reserves.filter(function(r){return r.module <= (title==='Midterm Examination' ? 9 : 15);});
      // Keep one Design Principles reserve for the final's full module coverage.
      if(title==='Midterm Examination') {
        var principles = reserves.filter(function(r){return r.module===2 && !used[r.q];});
        var finalPrinciple = principles[principles.length-1];
        pool = pool.filter(function(r){return r!==finalPrinciple;});
      }
      q.questions=take(pool,q.questionCount);
    });
  };
  window.tihApplyDesignTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[DESIGN] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
