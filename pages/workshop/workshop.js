const hexCore = require('../../core/hexagram.js');
const trig = require('../../core/trigram.js');
const hexData = require('../../data/hexagrams.js').hexagrams;

Page({
  data: {
    lines: ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'],
    hexagramName: '乾',
    plain: '',
    upperSymbol: '',
    lowerSymbol: '',
    upperNature: '',
    lowerNature: '',
    currentHexagram: null
  },
  onLoad: function () { this.refresh(); },

  tapLine: function (e) {
    const i = Number(e.currentTarget.dataset.index);
    const next = hexCore.toggleLine(this.data.lines, i);
    this.setData({ lines: next }, this.refresh);
  },

  refresh: function () {
    const h = hexCore.getHexagramByLines(this.data.lines, hexData);
    if (!h) {
      this.setData({
        hexagramName: '八卦组合中',
        plain: '继续调整爻线，看看会组成哪一卦。',
        upperSymbol: '', lowerSymbol: '',
        upperNature: '', lowerNature: '',
        currentHexagram: null
      });
      return;
    }
    const up = trig.metaOf(h.upper);
    const lo = trig.metaOf(h.lower);
    this.setData({
      hexagramName: h.name,
      plain: h.plain,
      upperSymbol: up ? up.symbol : '',
      upperNature: up ? up.nature : '',
      lowerSymbol: lo ? lo.symbol : '',
      lowerNature: lo ? lo.nature : '',
      currentHexagram: h
    });
  },

  reset: function () {
    this.setData({ lines: ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'] }, this.refresh);
  },

  randomChange: function () {
    const i = Math.floor(Math.random() * 6);
    const next = hexCore.toggleLine(this.data.lines, i);
    this.setData({ lines: next }, this.refresh);
  },

  saveToCollection: function () {
    const h = this.data.currentHexagram;
    if (!h) {
      wx.showToast({ title: '先组成一个完整卦', icon: 'none' });
      return;
    }
    const collected = wx.getStorageSync('collected') || [];
    if (collected.indexOf(h.id) === -1) {
      collected.push(h.id);
      wx.setStorageSync('collected', collected);
    }
    wx.showToast({ title: '已收入图鉴', icon: 'success' });
  }
});
