const trigram = require('./trigram.js');

function getHexagramByLines(lines, hexagrams) {
  if (!lines || lines.length !== 6) return null;
  const lower = trigram.trigramFromLines(lines.slice(0, 3));
  const upper = trigram.trigramFromLines(lines.slice(3, 6));
  if (!lower || !upper) return null;
  return hexagrams.find(function (h) {
    return h.upper === upper && h.lower === lower;
  }) || null;
}

function getHexagramByTrigrams(upper, lower, hexagrams) {
  return hexagrams.find(function (h) {
    return h.upper === upper && h.lower === lower;
  }) || null;
}

function toggleLine(lines, index) {
  if (index < 0 || index > 5) return lines.slice();
  const next = lines.slice();
  next[index] = next[index] === 'yang' ? 'yin' : 'yang';
  return next;
}

module.exports = {
  getHexagramByLines: getHexagramByLines,
  getHexagramByTrigrams: getHexagramByTrigrams,
  toggleLine: toggleLine
};
