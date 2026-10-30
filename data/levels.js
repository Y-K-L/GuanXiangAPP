module.exports = {
  puzzleLevels: [
    { id: 'p1', type: 'identifyTrigram', prompt: '☰ 这个卦形是哪个卦？',
      options: ['qian', 'kun', 'kan', 'li'], answer: 'qian',
      explanation: '☰ 三阳爻，乾为天，刚健不息。' },
    { id: 'p2', type: 'identifyTrigram', prompt: '☷ 这个卦形是哪个卦？',
      options: ['qian', 'kun', 'zhen', 'dui'], answer: 'kun',
      explanation: '☷ 三阴爻，坤为地，柔顺承载。' },
    { id: 'p3', type: 'identifyTrigram', prompt: '☵ 这个卦形是哪个卦？',
      options: ['li', 'kan', 'gen', 'xun'], answer: 'kan',
      explanation: '☵ 上下阴、中间阳，坎为水，险陷之象。' },
    { id: 'p4', type: 'identifyTrigram', prompt: '☲ 这个卦形是哪个卦？',
      options: ['li', 'kan', 'zhen', 'dui'], answer: 'li',
      explanation: '☲ 上下阳、中间阴，离为火，光明之象。' },
    { id: 'p5', type: 'composeByName', prompt: '请拼出「水雷屯」',
      hexagramId: 3, answer: { upper: 'kan', lower: 'zhen' },
      explanation: '屯卦上坎下震，水在雷上，象征初生之难。' },
    { id: 'p6', type: 'composeByName', prompt: '请拼出「地天泰」',
      hexagramId: 11, answer: { upper: 'kun', lower: 'qian' },
      explanation: '泰卦上坤下乾，地气下行、天气上行，上下交泰。' },
    { id: 'p7', type: 'composeByName', prompt: '请拼出「天地否」',
      hexagramId: 12, answer: { upper: 'qian', lower: 'kun' },
      explanation: '否卦上乾下坤，天气上行、地气下行，上下不交。' },
    { id: 'p8', type: 'composeByName', prompt: '请拼出「水火既济」',
      hexagramId: 63, answer: { upper: 'kan', lower: 'li' },
      explanation: '既济卦上坎下离，水在火上，事已成就，宜守成防变。' }
  ],

  dailyLevels: [
    { id: 'd1',
      scenario: '你接手了一个全新项目，团队尚未磨合，资源有限，外界期待却很高。',
      question: '以下哪一卦更贴合这个处境？',
      options: [
        { id: 'qian', text: '乾 · 纯阳开创' },
        { id: 'tun', text: '屯 · 初生之难' },
        { id: 'jiji', text: '既济 · 已完成' },
        { id: 'mingyi', text: '明夷 · 光明受伤' }
      ],
      answer: 'tun', hexagramId: 3,
      explanation: '屯卦上坎下震，水在雷上，象征初生之难：有生机，但根基未稳，宜稳住根基、寻找帮手。乾偏开创，既济偏完成，明夷偏受伤。' },
    { id: 'd2',
      scenario: '上下关系通畅，沟通顺畅，事业进入上升期，各方配合默契。',
      question: '以下哪一卦更贴合这个处境？',
      options: [
        { id: 'pi', text: '否 · 闭塞不通' },
        { id: 'tai', text: '泰 · 上下交泰' },
        { id: 'bo', text: '剥 · 剥落之象' },
        { id: 'kun', text: '困 · 困穷之象' }
      ],
      answer: 'tai', hexagramId: 11,
      explanation: '泰卦上坤下乾，地气下行、天气上行，象征上下交泰、沟通顺畅的通泰之时。' },
    { id: 'd3',
      scenario: '事情已经基本做成，团队容易松懈，需要防止后续走样。',
      question: '以下哪一卦更贴合这个处境？',
      options: [
        { id: 'weiji', text: '未济 · 未完成' },
        { id: 'jiji', text: '既济 · 已完成' },
        { id: 'tun', text: '屯 · 初生之难' },
        { id: 'qian', text: '乾 · 纯阳开创' }
      ],
      answer: 'jiji', hexagramId: 63,
      explanation: '既济卦上坎下离，水在火上，事已成就，但卦辞提醒"初吉终乱"，宜守成防变。' },
    { id: 'd4',
      scenario: '环境不明朗，才华暂时无法施展，需要收敛锋芒、保存自己。',
      question: '以下哪一卦更贴合这个处境？',
      options: [
        { id: 'mingyi', text: '明夷 · 光明受伤' },
        { id: 'dayou', text: '大有 · 大有收获' },
        { id: 'jin', text: '晋 · 晋升之象' },
        { id: 'feng', text: '丰 · 丰盛之象' }
      ],
      answer: 'mingyi', hexagramId: 36,
      explanation: '明夷卦上坤下离，光明入地，象征光明受伤、韬光养晦之时。' }
  ]
};
