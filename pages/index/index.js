Page({
  data: {
    dots: [false, false, false, false, false, false],
    collectedCount: 0
  },
  onShow: function () {
    const collected = wx.getStorageSync('collected') || [];
    const dots = [false, false, false, false, false, false];
    for (let i = 0; i < Math.min(6, collected.length); i++) dots[i] = true;
    this.setData({ collectedCount: collected.length, dots: dots });
  },
  goWorkshop: function () {
    wx.navigateTo({ url: '/pages/workshop/workshop' });
  },
  goPuzzle: function () {
    wx.navigateTo({ url: '/pages/puzzle/puzzle' });
  }
});
