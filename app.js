App({
  onLaunch: function () {
    if (!wx.getStorageSync('collected')) {
      wx.setStorageSync('collected', []);
    }
  }
});
