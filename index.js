const sampleTextarea = document.querySelector('.sample-textarea');

function init() {
  sampleTextarea.value = `1       10:14:55  SQL Execute: INFORMIX - Select first 1 CURRENT from Systables 

2       10:14:55  SQL Execute: INFORMIX - select * from isd where type    = "CN"   and name = "CM" order by id

3       10:14:55  SQL Execute: INFORMIX - select * from isd where type    = "CN"   and name = "MR" order by id

4       10:14:55  SQL Execute: INFORMIX - select * from isd where type    = "CN"   and name = "MR" order by id

`;
}

init();

// ============================================================================================================

const useDeduplicationChecked = document.querySelectorAll('input[name=use-deduplication]');

const leftTextarea = document.querySelector('.left-textarea');
const rightTextarea = document.querySelector('.right-textarea');

const setRightValue = () => {
  const sqlMonitorContent = leftTextarea.value;

  const splitSqlSentences = sqlMonitorContent.split('\n');

  const filteredSqlSentences = splitSqlSentences.filter((sentence) => sentence !== '');

  const subtract42SqlSentences = filteredSqlSentences.map((sentence) => sentence.slice(42));

  const trimSqlSentences = subtract42SqlSentences.map((sentence) => sentence.trim());

  const useDeduplicationChecked = document.querySelector('input[name=use-deduplication]:checked');
  const isUseDeduplication = useDeduplicationChecked.value === 'yes';

  const uniqueSqlSentences = isUseDeduplication ? _.uniq(trimSqlSentences) : trimSqlSentences;

  const joinSqlSentences = uniqueSqlSentences.join('\r\n');

  rightTextarea.value = joinSqlSentences;
};

leftTextarea.addEventListener('input', setRightValue);
useDeduplicationChecked.forEach((radioButton) => radioButton.addEventListener('input', setRightValue));
