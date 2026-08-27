/* TIH WASSCE FOOD & NUTRITION — one distinct YouTube video per topic.
   Course id: wassce-food-nutrition

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 7 videos across 69 lessons, with a single clip playing on 28
   of them.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module ("none") are keyed "M<n>:Title",
   because a plain title key would collapse them onto one video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['wassce-food-nutrition'] || !COURSES_DB['wassce-food-nutrition'].modules) return;
  var MAP = {
    'Course Orientation': '92OequINNe0',
    'Exam Structure & Marking Scheme': 'YDDjkxz2_1k',
    'Introduction to Food & Nutrition': 'HP5z1-FTH-A',
    'Importance of Nutrition': 'NqV1Ig4_nfI',
    'Study Strategies': 'KN9MuYjcEC8',
    'Introduction to Nutrients': 'QVgeB5iWcBc',
    'Carbohydrates': 'jcfNSSPwR4M',
    'Proteins': 'uSMvgpxYDnc',
    'Fats and Oils': 'TkzMN0BK0Bo',
    'Vitamins': 'SixZpaMs-cE',
    'Minerals': 'sKJksdRzrAU',
    'Water and Dietary Fiber': '44MsQw8VjEs',
    'Functions and Sources of Nutrients': 'e_UBU4bp7yY',
    'Digestion and Absorption': 'zAxUSUPCins',
    'Balanced Diet': 'DaSn-TJXdrU',
    'Meal Planning': '9qJ4mO-YYJQ',
    'Nutritional Requirements Across the Life Cycle': '-6IcfLUbNrs',
    'Malnutrition': 'wrDX3dNQSBg',
    'Deficiency Diseases': 'AaJIDKgLIbc',
    'Therapeutic Diets': 'vo3rMknNbWw',
    'Healthy Eating Habits': 'pm8rZtjw73o',
    'Principles of Food Preparation': 'AUBGRjnL_vQ',
    'Kitchen Safety': 'm5T1a6_Q4G8',
    'Kitchen Equipment and Utensils': 'KL9r9q9n20A',
    'Methods of Cooking': 'AEe81F2mGPE',
    'Food Presentation': 'x0DQ-2i6VdE',
    'Recipe Interpretation': '3YV0HFlPYMo',
    'Portion Control': 'Gk-znewUD64',
    'Practical Cooking Sessions': 'dw5QWme8e1w',
    'Food Hygiene': 'mPHjB2rQMKU',
    'Personal Hygiene in Food Preparation': '-aZhUamumnQ',
    'Food Contamination': 'yiNTqUU-h6w',
    'Food Poisoning': 'flxmB8NKMzE',
    'Food Storage': 'nGKv7l3saK4',
    'Food Preservation Methods': 'PAwICHcbnoY',
    'Packaging and Labeling': 'fZbKBPJgK0c',
    'Quality Control': 'IltDWHRIgkY',
    'Introduction to Catering': 'UZUQGPR_b2A',
    'Table Setting': 'nX4d1xYeNgU',
    'Table Service': 'ccpZNYNnxAQ',
    'Menu Planning': 'rbGW3qFtNvE',
    'Event Catering': 'J_Kuix0F7k0',
    'Restaurant Operations': 'HRBN3OSGjjI',
    'Customer Service': 'qyqCFeKSYWc',
    'Hospitality Ethics': 'yQPgnN0UdcU',
    'Family Nutrition': 'eWgCeZSlA7M',
    'Budgeting for Meals': 'ihGWMBLaRKo',
    'Food Purchasing': 'kSKuP7kZ-1I',
    'Consumer Rights': 'Yj-0QgivuKg',
    'Household Management': 'dTnJhWZZAs4',
    'Sustainable Food Choices': 'PdssKPCCzFs',
    'Waste Reduction': 'K9eMzl2ub_M',
    'Food Security': 'TRiQ4-XBhwQ',
    'Preparation of Breakfast Meals': 'jKEVfwNpA4I',
    'Preparation of Lunch Meals': 'OF0Q-n35Bcg',
    'Preparation of Dinner Meals': '_eC1Nsp2hFc',
    'Baking Fundamentals': 'TNK-x4te9oA',
    'Pastry and Desserts': '8-5yLt1gqIo',
    'Beverage Preparation': 'AGfI6pum57c',
    'Practical Food Tests': 'yi9yUC_fohQ',
    'Practical Examination Techniques': 'tndZTZKWQJY',
    'Objective Test Practice': 'UIt7DtBI4Lw',
    'Theory Question Practice': 'AxUSCdmKfqg',
    'Menu Planning Exercises': 'QJjrhWjLI1c',
    'Past WAEC Questions': '2wLQID-KnTI',
    'Complete Food & Nutrition Revision': 'gTitbP5_FtY',
    'Key Concepts Review': 'gzsV-neH3SI',
    'Practical Examination Review': '6_AO9G30txs',
    'Certificate Requirements': '4AZzAvy4Kck'
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
  COURSES_DB['wassce-food-nutrition'].modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE Food & Nutrition videos] distinct video applied to ' + applied + ' lessons');
  }
})();
