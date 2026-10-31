const trig = require('../../core/trigram.js');
const levels = require('../../data/levels.js').puzzleLevels;

Page({
  data: {
    level: null,
    trigrams: [],
    upperSel: null,
    lowerSel: null,
    focus: 'upper',
    submitted: false,
    correct: false
  },

  onLoad: function () {
    const trigrams = trig.TRIGRAM_IDS.map(function (id) {
      const m = trig.metaOf(id);
      return { id: id, name: m.name, symbol: m.symbol };
    });
    const level = levels[Math.floor(Math.random() * levels.length)];
    this.setData({ trigrams: trigrams, level: level });
  },

  selectTrigram: function (e) {
    if (this.data.submitted) return;
    const id = e.currentTarget.dataset.id;
    if (this.data.level.type === 'identifyTrigram') {
      this.setData({ upperSel: id });
      return;
    }
    if (this.data.focus === 'upper') {
      this.setData({ upperSel: id, focus: 'lower' });
    } else {
      this.setData({ lowerSel: id });
    }
  },

  submit: function () {
    const lv = this.data.level;
    let correct = false;
    if (lv.type === 'identifyTrigram') {
      correct = this.data.upperSel === lv.answer;
    } else {
      correct = this.data.upperSel === lv.answer.upper && this.data.lowerSel === lv.answer.lower;
    }
    this.setData({ submitted: true, correct: correct });

    if (correct) {
      const collected = wx.getStorageSync('collected') || [];
      if (lv.hexagramId && collected.indexOf(lv.hexagramId) === -1) {
        collected.push(lv.hexagramId);
        wx.setStorageSync('collected', collected);
      }
    }
  },

  next: function () {
    const level = levels[Math.floor(Math.random() * levels.length)];
    this.setData({
      level: level,
      upperSel: null, lowerSel: null,
      focus: 'upper',
      submitted: false, correct: false
    });
  }
});
