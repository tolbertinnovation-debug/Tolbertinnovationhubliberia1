/* TIH GRAPHIC DESIGN — one distinct YouTube video per topic.
   Course id: design

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 16 videos across 163 lessons, with one clip playing on 33
   of them and the next four covering another 62 between them.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module -- Brochures, Business Cards, Flyers and
   Posters each appear in both the Canva marketing-materials module and the
   print-design module -- are keyed "M<n>:Title", because a plain title key
   would collapse each pair onto one video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.design || !COURSES_DB.design.modules) return;
  var MAP = {
    'Welcome to the Course': 'YloiSbUzOGc',
    'What is Graphic Design?': '70LHCrfVYC4',
    'Careers in Graphic Design': 'WUWCHJN5yU4',
    'Canva vs Adobe Photoshop': '79iaMTeqhcU',
    'Setting Up Your Workspace': 'u8aQq0KYFgE',
    'Installing Adobe Photoshop': 'kQCtSHz2z7o',
    'Creating a Canva Account': 'loQ5X5-67so',
    'Course Roadmap': '0p8eriCDFXU',
    'Final Capstone Project': 'Qkg1isp-OJY',
    'Principles of Design': 'SGT1l9AukLc',
    'Elements of Design': 'UzsaAgQ4cs8',
    'Color Theory': '4QNEDhrsRLo',
    'Typography': 'H6VTzP2rq94',
    'Layout and Composition': 'ZZKHTk_31ik',
    'Visual Hierarchy': '7mZ2fsA9APQ',
    'White Space': 'ZXItTIjC0Wk',
    'Branding Basics': 'kK1TOpI948o',
    'Design Trends': 'd0SRFbcMvUo',
    'Design Best Practices': 'Vy0EuGgAzrY',
    'Introduction to Canva': 'lh2MQbSFRJc',
    'Canva Dashboard': '2yU2z4Qrt_c',
    'Templates': 'zRWCMjCPkgw',
    'Uploading Images': 'l7cnqbhplAk',
    'Adding Text': 'LMKaYHBiC0o',
    'Fonts': 'UsCwwfLbycM',
    'Shapes and Icons': 'XPtlpI2BeUQ',
    'Backgrounds': 'GNRuKssa6Fo',
    'Frames and Grids': 'aeqhvIjI8yM',
    'Brand Kit': 'NpJmi2ETyDA',
    'Magic Resize': 'EWmFK5yZSL8',
    'AI Design Tools': 'lDHXXgc8sDY',
    'Layer Management': 'W9iG20uB7IY',
    'Animations': 'OfL65d5Ctyc',
    'Presentations': 'Xx8V_BrTIKU',
    'Video Editing': 'ujBj0PRHWEs',
    'Whiteboards': 'CjOuSEdue6g',
    'Team Collaboration': '9KA_OpzOpOY',
    'Canva Pro Features': 'dFP7wN573h8',
    'Facebook Posts': 'LolqPo-IMAQ',
    'Instagram Posts': '9CnrknQsg5E',
    'Instagram Stories': 'iizK1buYKag',
    'Facebook Covers': '_DwFzvAMBGc',
    'LinkedIn Banners': 'D2teBk2wH9k',
    'X (Twitter) Graphics': 'rLHJcoC5xI4',
    'YouTube Thumbnails': 'uwNV7k-pAw4',
    'WhatsApp Status Graphics': 'SrQcwlmTnHE',
    'TikTok Covers': 'w-IXzXylnuk',
    'M6:Flyers': 'KglO4C412DA',
    'M6:Posters': 'DWiM3GLw0Z8',
    'M6:Brochures': 'w2ipcNgBSJM',
    'M6:Business Cards': 'iwAauxXSUKI',
    'Certificates': '4sTMS36ooY0',
    'Invitations': '4lESiy4GEGc',
    'Menus': 'oTF2C4NaB7Y',
    'Event Banners': 'kJs-Q4NmAsE',
    'Roll-Up Banners': 'Z6Pxa1UbV5k',
    'Presentation Slides': 'TA1o7xU1y4U',
    'Introduction to Photoshop': 'PQtDXAQs37U',
    'Photoshop Interface': 'jBCDKCpsmso',
    'Creating Documents': 'lO9cNUajts8',
    'Working with Layers': 'ekO-QeTFGks',
    'Selection Tools': 'Til_xsAkc7g',
    'Move Tool': 'HhE9KjKBaBE',
    'Crop Tool': '6Ealkbzfud0',
    'Brush Tool': 'pZ77we2iKlI',
    'Eraser Tool': '_g2UuT5vN8w',
    'Saving Projects': 'ZNKMnCMl0J4',
    'Photo Cropping': 'DvwOsiS24oQ',
    'Background Removal': 'Tg1uECPZzKY',
    'Color Correction': 'o0hqk2Fm4P8',
    'Brightness & Contrast': 'V6negGUyAmQ',
    'Curves': 'IlcWHILjkO0',
    'Levels': 'W5JRTdIe4PU',
    'Retouching': '2C9p23iffNA',
    'Removing Blemishes': '-pRGyFpWTyw',
    'Object Removal': 'QmX2xu73tW0',
    'Image Enhancement': 'Aqb4NQDjEd4',
    'Shapes': 'YRpP8yAfZXo',
    'Pen Tool': 'UUAAj9-Lu0A',
    'Text Tool': 'sXHnwYkQdNI',
    'Smart Objects': 'EOsEPnYuQdc',
    'Masks': 'T3X2sTaqMx4',
    'Layer Styles': 'fE1_nHllIp8',
    'Blending Modes': 'jqEwBncEhWU',
    'Filters': 'VVz1lyV5V3k',
    'Adjustment Layers': '1HOQQLcEH4g',
    'Gradient Tool': 'yeQR0qAl_-k',
    'Logo Design Principles': 'oJjqG7hPCwQ',
    'Logo Sketching': '91l6lyCTZk0',
    'Logo Creation': '1To6sqJmQAU',
    'Brand Colors': 'ngdasKemfl4',
    'Brand Typography': '7hzfmZ8kVK8',
    'Brand Guidelines': 'MFCMSRnxE28',
    'M10:Business Cards': 'k5NXajFT_8Y',
    'Letterheads': 'DxLR2CFFys0',
    'Company Profiles': 'tSTllDiERPo',
    'Print Resolution': '0x8rhNLxAVc',
    'Color Modes (RGB & CMYK)': 'hgpPhlWIk68',
    'Bleed and Margins': 'gnxJYQEY5CA',
    'M11:Flyers': 'yJF67pnSYhg',
    'M11:Posters': '7XpudLC5r0U',
    'M11:Brochures': 'ed1pcgxcELM',
    'Banners': '03_fX1r0CTs',
    'Magazine Covers': 'p6rXlbHqd4g',
    'Book Covers': '4AxkNtpy46Y',
    'Print Export Settings': 'NrISnJ4iwNg',
    'Double Exposure': 'CPPlXWSRJ-8',
    'Composite Images': '-r3vZlEWPeo',
    'Background Replacement': 'h8Rjpae_NwE',
    'Light Effects': 'HYVDlajEZOI',
    'Shadows': 'zFMHGc0Habo',
    'Reflections': 'ahvif0E9qv0',
    'Color Grading': 'f4qJqh6kyug',
    'Fantasy Designs': 'wrvghIDL9fc',
    'Movie Posters': '6R9YzyhKTXY',
    'Facebook Ads': 'CIVvI6pQJGA',
    'Instagram Ads': 'zJUDNlL75SQ',
    'Google Display Ads': 'G-2PhwvGbvw',
    'Product Flyers': 'T70cbbN2etA',
    'Product Catalogs': '0ToXV_aly1s',
    'Promotional Banners': 'DqUXg3UDx5k',
    'Billboard Design': 'e73MHjaWfCw',
    'Event Promotions': 'iLc7UGbzoEQ',
    'Marketing Campaign Graphics': 'EFM52C1cCfs',
    'Client Design Project': 'HzAGUY9zHSw',
    'Canva AI': 'n8j99J8gBvU',
    'Adobe Firefly': 'tZBohx5AN1Q',
    'AI Image Generation': 'gFL1oGzHlEw',
    'AI Background Removal': '6CcqpA5peg4',
    'AI Image Enhancement': 'ZCvEBoQnPmQ',
    'AI Content Creation': 'S6-TZYS5YXY',
    'AI Productivity Tools': '46xAMyOOeTw',
    'Ethical Use of AI': 'vbi2MoySAG8',
    'Building a Portfolio': 'BY07wW1lEjQ',
    'Finding Clients': 't1FdvLveV08',
    'Pricing Your Services': 'qkjabk1HGQ8',
    'Writing Proposals': 'LHaBxcQwkuQ',
    'Managing Clients': 'SYKj9Oy2w-g',
    'Delivering Projects': 'FWSGIngI4g8',
    'Copyright & Licensing': 'B7YjIGZiA-Q',
    'Growing a Design Business': 'TA63_BqTdmI',
    'Business Flyer': '-UeRKu4A2ow',
    'Church Flyer': 'ucdZVm5uVoE',
    'Event Poster': 'R8mnIQytcDA',
    'Restaurant Menu': 'lw0SWGnZ074',
    'Company Profile': '2-FtYvawChE',
    'Product Advertisement': 'YRfOwDQJtZ0',
    'Social Media Campaign': 'oS_1O3hD7nY',
    'Brand Identity Package': 'HOi8M56e6KE',
    'Certificate Design': 'WH6QBzjBvPQ',
    'YouTube Thumbnail Series': 'Pbci-mLbjCg',
    'Project Planning': 'zCgM6JQYyTg',
    'Research': 'sYcxwouSozk',
    'Design Concepts': 'BSxg87CoOu4',
    'Canva Design': '_WyYr1p1XVk',
    'Photoshop Editing': 'w-PoV_sIWos',
    'Client Presentation': 'Khkm2Z2vde0',
    'Final Revisions': 'a0S5vVvLOyI',
    'Portfolio Submission': 'ypsM6UbBp-U',
    'Saving and Exporting Designs': 'ztF3mL5XasE',
    'Social Media Campaign Design': '3VYpWxokxps',
    'Brand Identity Project': 'hBlU6w5rruw',
    'Creative Projects': 'oj_-2-E9Hto'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB.design.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[DESIGN videos] distinct video applied to ' + applied + ' lessons');
  }
})();
