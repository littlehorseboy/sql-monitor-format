const sampleTextarea = document.querySelector('.sample-textarea');

const keys = [
  '00．未核',
  '01．醫囑類別',
  '02．開始日期',
  '03．開始時間',
  '04．醫囑名稱',
  '05．頻率',
  '06．截止日',
  '07．截止時間',
  '08．說明、囑附',
  '09．醫囑名稱',
  '10．開單碼',
  '11．開始日期',
  '12．',
  '13．adomdate',
  '14．',
  '15．adomordno',
  '16．狀態',
  '17．adommark',
  '18．SORT',
  '19．GetOrderSortStr1',
  '20．截止日',
  '21．1=說明有改',
  '22．計價註記 00:不計價 01:計價',
  '23．',
  '24．醫師',
  '25．科別',
  '26．數量',
  '27．作廢',
  '28．作廢原因',
  '29．',
  '30．',
  '31．',
  '32．',
  '33．'
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
