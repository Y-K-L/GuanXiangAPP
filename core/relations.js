function isBi(posA, yinYangA, posB, yinYangB) {
  return Math.abs(posA - posB) === 1 && yinYangA !== yinYangB;
}

function isYing(lines) {
  if (!lines || lines.length !== 6) return false;
  const pairs = [[0, 3], [1, 4], [2, 5]];
  return pairs.every(function (p) {
    return lines[p[0]] !== lines[p[1]];
  });
}

function isZhong(pos) {
  return pos === 2 || pos === 5;
}

function isZheng(pos, yinYang) {
  const odd = pos % 2 === 1;
  return (odd && yinYang === 'yang') || (!odd && yinYang === 'yin');
}

module.exports = { isBi, isYing, isZhong, isZheng };
