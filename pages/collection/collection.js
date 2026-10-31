const hexData = require('../../data/hexagrams.js').hexagrams;
const trig = require('../../core/trigram.js');

Page({
  data: {
    trigrams: [],
    hexagrams: [],
    collectedCount: 0
  },
  onShow: function () {
    const collected = wx.getStorageSync('collected') || [];
    const trigrams = trig.TRIGRAM_IDS.map(function (id) {
      const m = trig.metaOf(id);
      return { id: id, name: m.name, symbol: m.symbol, nature: m.nature };
    });
    const hexagrams = hexData.map(function (h) {
      return {
        id: h.id,
        name: h.name,
        fullName: h.fullName,
        unlocked: collected.indexOf(h.id) !== -1
      };
    });
    this.setData({
      trigrams: trigrams,
      hexagrams: hexagrams,
      collectedCount: collected.length
    });
  }
});
