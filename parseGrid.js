const sampleTextarea = document.querySelector('.sample-textarea');

const keys = [
  '未核',
  '醫囑類別',
  '開始日期',
  '開始時間',
  '醫囑名稱',
  '頻率',
  '截止日',
  '截止時間',
  '說明、囑附',
  '醫囑名稱',
  '開單碼',
  '開始日期',
  '',
  'adomdate',
  '',
  'adomordno',
  '狀態',
  'adommark',
  'SORT',
  'GetOrderSortStr1',
  '截止日',
  '1=說明有改',
  '計價註記 00:不計價 01:計價',
  '',
  '醫師',
  '科別',
  '數量',
  '作廢',
  '作廢原因',
  '',
  '',
  '',
  '',
  ''
];

function init() {
  sampleTextarea.value = `**|U|0316|1327|乳品  [配方奶,心美力SSC20卡,本院,,每餐奶量10ml,Oral,,,Q6H]|Q6H|||[配方奶,心美力SSC20卡,本院,,每餐奶量10ml,Oral,,,Q6H]|乳品 |43009500|1100316|||||||zz|41003161327|||01||||1|||||||`;
}

init();

// ============================================================================================================

const useDeduplicationChecked = document.querySelectorAll('input[name=use-deduplication]');

const leftTextarea = document.querySelector('.left-textarea');
const rightTextarea = document.querySelector('.right-textarea');

const setRightValue = () => {
  const leftTextareaContent = leftTextarea.value;

  const splitContentSentences = leftTextareaContent.split('|');

  // const trimSqlSentences = splitContentSentences.map((sentence) => sentence.trim());

  const useDeduplicationChecked = document.querySelector('input[name=use-deduplication]:checked');
  const isUseDeduplication = useDeduplicationChecked.value === 'yes';

  const uniqueSqlSentences = isUseDeduplication ? _.uniq(splitContentSentences) : splitContentSentences;

  const zippedObject = _.zipObject(keys, uniqueSqlSentences);

  rightTextarea.value = JSON.stringify(zippedObject, null, 2);
};

leftTextarea.addEventListener('input', setRightValue);
useDeduplicationChecked.forEach((radioButton) => radioButton.addEventListener('input', setRightValue));
