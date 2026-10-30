const TRIGRAM_META = {
  qian: { name: '乾', symbol: '☰', nature: '天', attribute: '健' },
  dui:  { name: '兑', symbol: '☱', nature: '泽', attribute: '悦' },
  li:   { name: '离', symbol: '☲', nature: '火', attribute: '丽' },
  zhen: { name: '震', symbol: '☳', nature: '雷', attribute: '动' },
  xun:  { name: '巽', symbol: '☴', nature: '风', attribute: '入' },
  kan:  { name: '坎', symbol: '☵', nature: '水', attribute: '陷' },
  gen:  { name: '艮', symbol: '☶', nature: '山', attribute: '止' },
  kun:  { name: '坤', symbol: '☷', nature: '地', attribute: '顺' }
};

// 从下往上：阳=1，阴=0
const TRIGRAM_BINARY = {
  qian: '111',
  dui:  '110',
  li:   '101',
  zhen: '100',
  xun:  '011',
  kan:  '010',
  gen:  '001',
  kun:  '000'
};

const BINARY_TO_TRIGRAM = {};
Object.keys(TRIGRAM_BINARY).forEach(function (id) {
  BINARY_TO_TRIGRAM[TRIGRAM_BINARY[id]] = id;
});

const TRIGRAM_IDS = ['qian', 'dui', 'li', 'zhen', 'xun', 'kan', 'gen', 'kun'];

function linesToBinary(lines) {
  return lines.map(function (l) {
    return l === 'yang' ? '1' : '0';
  }).join('');
}

function trigramFromLines(lines) {
  if (!lines || lines.length !== 3) return null;
  return BINARY_TO_TRIGRAM[linesToBinary(lines)] || null;
}

function linesFromTrigram(id) {
  const bin = TRIGRAM_BINARY[id];
  if (!bin) return null;
  return bin.split('').map(function (b) {
    return b === '1' ? 'yang' : 'yin';
  });
}

function metaOf(id) {
  return TRIGRAM_META[id] || null;
}

module.exports = {
  TRIGRAM_META: TRIGRAM_META,
  TRIGRAM_IDS: TRIGRAM_IDS,
  linesToBinary: linesToBinary,
  trigramFromLines: trigramFromLines,
  linesFromTrigram: linesFromTrigram,
  metaOf: metaOf
};
