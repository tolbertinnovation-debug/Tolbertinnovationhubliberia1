/* One verified, distinct educational YouTube video per Metaphysics content lesson. */
(function(){
  if(typeof window==='undefined')return;
  var map={
    'What Is Metaphysics?':'uB4Hc4ImbQQ','How Metaphysical Arguments Work':'rEgKC0npXIg','A Short History of Metaphysics':'vZtQXteAE-w',
    'Ontology: What Exists?':'_y_awzmQaqI','Substance and Properties':'w4AHo-EklXQ','Universals and Particulars':'XNz110GE-FM',
    'Identity and Change':'VQtK05q9iug','The Ship of Theseus':'dYAoiLhOuao','Personal Identity':'trqDnLNRuSc',
    'What Is Causation?':'piQ0MSbR7G4','Hume and the Regularity Theory':'3vc5ZggUdYo','Laws of Nature and Sufficient Reason':'t7cfljJ79X0',
    'What Is Time?':'MAScJvxCy2Y','Presentism, Growing Block and Eternalism':'U0aSP2_IiBs','Time Travel and the Grandfather Paradox':'M8oITAoaCr4',
    'Possibility, Necessity and Contingency':'DhGMdrYmHIQ','Possible Worlds and Modal Realism':'QlXasO7COh0','Counterfactuals and Essential Properties':'HHfbk65PTCI',
    'The Mind–Body Problem':'3SJROTXnmus','Dualism, Physicalism and Functionalism':'AMTMtWHclKo','Consciousness and Other Minds':'mQ0DJYJ8USY',
    'Free Will and Determinism':'iSfXdNIolQA','Metaphysical Arguments About God':'tROD1NGo1dA','African Metaphysics: Personhood and Community':'62ZTRvakZjY'
  };
  function norm(s){return String(s||'').replace(/^\s*\d+(?:\.\d+)*\s*/,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();}
  var byNorm={};Object.keys(map).forEach(function(k){byNorm[norm(k)]=map[k];});
  window.TIH_TOPIC_VIDEOS=window.TIH_TOPIC_VIDEOS||{};window.TIH_TOPIC_VIDEOS.metaphysics=byNorm;
  var c=window.COURSES_DB&&window.COURSES_DB.metaphysics;if(c)(c.modules||[]).forEach(function(m){(m.lessons||[]).forEach(function(l){var v=byNorm[norm(l.t)];if(v)l.v=v;});});
})();
