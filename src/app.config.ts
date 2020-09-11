export default {
  // ! 新增或减少页面，需要修改 pages 数组
  pages: [
    'pages/index/index',
    'pages/home/home',
    "pages/demo/demo"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#cccccc",
    selectedColor: "#3072f6",
    backgroundColor: "#ffffff",
    borderStyle: "#f0f0f0",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/home/home",
        text: "我的"
      }
    ]
  }
}
