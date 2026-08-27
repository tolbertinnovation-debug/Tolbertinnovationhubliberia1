/* TIH WASSCE PHYSICS — one distinct YouTube video per topic.
   Course id: wassce-physics

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 7 videos across 76 lessons, with a single clip playing on 21
   of them.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module ("none") are keyed "M<n>:Title",
   because a plain title key would collapse them onto one video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['wassce-physics'] || !COURSES_DB['wassce-physics'].modules) return;
  var MAP = {
    'Course Orientation': 'BnQnXN0y8P0',
    'Exam Structure & Marking Scheme': 'FfDZtHQqGrg',
    'Scientific Method': 'S6WARqVdWrE',
    'Laboratory Safety': 'MEIXRLcC6RA',
    'Study Strategies': 'J_ihIgh8YWI',
    'Physical Quantities and Units': 'ulXdXTkIkAM',
    'Scalars and Vectors': 'dHjWVlfNraM',
    'Motion': 'hpWuZh6oTew',
    'Speed, Velocity & Acceleration': 'iNTIsl8T5R4',
    'Equations of Motion': 'vgDM4D-_fkM',
    'Force and Newton\'s Laws': '85kGMxuts98',
    'Momentum': 'BDaQKzoRHtA',
    'Work, Energy & Power': 'Jeqv51p82Z4',
    'Machines': 'WtevaVAt4iA',
    'Mechanics Practice': 'hD0ineZXpcw',
    'Density': 'Qgl_l0H7Qgc',
    'Pressure': 'TpHv-sGE_Dk',
    'Elasticity': 'hkUT9PCb-KE',
    'Surface Tension': 'V8xUWWK2oT0',
    'Viscosity': '16HDJNoXQII',
    'Fluid Mechanics': 'N6BDr5RJLPY',
    'Simple Harmonic Motion': 'tNpuTx7UQbw',
    'Practical Applications': 'HQ5CBZqlnzE',
    'Temperature': 'wismV2qbQLY',
    'Heat Energy': 'bRZwzy0xvhM',
    'Thermal Expansion': '7Bj3N1E7vZk',
    'Specific Heat Capacity': 'sQ_BQhi2-tM',
    'Latent Heat': '8wO96aHpg1A',
    'Gas Laws': 'oanr4WjMe3g',
    'Heat Transfer': 'XRSiz7f5XWw',
    'Thermodynamics Practice': 'ciLQ06jaaEE',
    'Wave Motion': 'Dkxh9ZaJ4Pk',
    'Sound Waves': 'Eisum0ktUdo',
    'Reflection of Sound': 'dzpKuhkbcJ0',
    'Light Waves': '8Rwv2hvdZFo',
    'Reflection of Light': '38SyS6zXwe4',
    'Refraction': 'QUMwdOK0tFU',
    'Lenses': 'c4u_L2I192g',
    'Optical Instruments': 'Lb96PoCPyXs',
    'Wave Applications': 'OG4WfWJuA2k',
    'Practical Exercises': 'RuCDvmAaYrE',
    'Electric Charge': '9zjZbuOA6zM',
    'Electric Fields': 'Z_jthQa9xtc',
    'Current Electricity': 'r-SCyD7f_zI',
    'Resistance': 'eeinxNtXU3s',
    'Ohm\'s Law': 'FuIn1L3qeqI',
    'Electrical Circuits': 'NqV6Get9FZA',
    'Magnetism': 'V-Gus-qIT74',
    'Electromagnetism': 'GauMCi6t3L8',
    'Electromagnetic Induction': '60-NU7iNxxs',
    'Electrical Safety': 'S8lB2kxT1n0',
    'Atomic Structure': 'R2SSe0xbqfs',
    'Radioactivity': 'JACqofXXHqk',
    'Nuclear Energy': 'V4PFQpCCqzk',
    'X-rays': 'V4oUO_3ywlE',
    'Electronics Basics': 'JHyprRSbJwg',
    'Semiconductors': 'hrpPKCDLRN0',
    'Renewable Energy': 'NPx27zaohGI',
    'Modern Technology Applications': 'hCQSO8BmGWw',
    'Laboratory Apparatus': '9LM_CmF4L-8',
    'Measurement Techniques': 'i033oSRtKLM',
    'Graph Plotting': 'T4X83wEOPVs',
    'Experimental Errors': 'QFmqXqOjR4U',
    'Data Analysis': '2z1GCNnJCIo',
    'Practical Investigations': 'pLtF9sJcT9w',
    'Specimen Identification': 'VXB1HWnjQBA',
    'Laboratory Reports': 'jtgBwKQLpwA',
    'Objective Test Practice': 'ZPKCeVxravg',
    'Theory Question Practice': '24x235Nputs',
    'Numerical Problem Solving': '85w_6DI10vQ',
    'Practical Examination Practice': '-KHLPC2Nkw0',
    'Past WAEC Questions': '_VPY-Bij8ZQ',
    'Complete Physics Revision': 'F_Y1-JieCrg',
    'Formula Review': 'IDkNlU7zKYU',
    'Examination Strategies': 'ZQY-X1HjF98',
    'Certificate Requirements': 'dvhqzQ-K7K8'
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
  COURSES_DB['wassce-physics'].modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE Physics videos] distinct video applied to ' + applied + ' lessons');
  }
})();
