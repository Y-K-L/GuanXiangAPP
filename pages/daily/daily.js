const levels = require('../../data/levels.js').dailyLevels;

Page({
  data: {
    daily: null,
    selected: null,
    submitted: false,
    correct: false
  },

  onLoad: function () {
    const d = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    const daily = levels[seed % levels.length];
    this.setData({ daily: daily });
  },

  select: function (e) {
    if (this.data.submitted) return;
    this.setData({ selected: e.currentTarget.dataset.id });
  },

  submit: function () {
    if (!this.data.selected) {
      wx.showToast({ title: '先选一个', icon: 'none' });
      return;
    }
    const correct = this.data.selected === this.data.daily.answer;
    this.setData({ submitted: true, correct: correct });

    if (correct) {
      const collected = wx.getStorageSync('collected') || [];
      if (this.data.daily.hexagramId && collected.indexOf(this.data.daily.hexagramId) === -1) {
        collected.push(this.data.daily.hexagramId);
        wx.setStorageSync('collected', collected);
      }
    }
  },

  save: function () {
    const collected = wx.getStorageSync('collected') || [];
    const hid = this.data.daily.hexagramId;
    if (hid && collected.indexOf(hid) === -1) {
      collected.push(hid);
      wx.setStorageSync('collected', collected);
      wx.showToast({ title: '已收藏', icon: 'success' });
    } else {
      wx.showToast({ title: '已收藏', icon: 'none' });
    }
  }
});
