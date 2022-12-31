const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx468cfd53dfeac032",

  // 微信公众号的appsecret
  APP_SECRET: "602841614e447838fd60f4c560bf3b72",

  // 微信公众号的模板ID
  TEMPLATE_ID: "J82gES6qXLIOhjFvF8NDts7d1EQAq-uV0bosXRGkmMA",

  // 天行API的key
  TXApiKey: "187b84496d7baa1c3e0280228b55e39b",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小沐沐吖",
      // 用户列表的`微信号`
      userId: "oymZC51oZl9GOczXKQaEqv67Hcck",
      // 星座
      star: "摩羯座",
      // 生日 - 格式：08-22
      birthday: "01-28",
      // 城市 - 格式：支持省市县区
      city: "夏邑县",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-05-20",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: false,
    // 土味情话
    saylove: false,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: false,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: false,
  },
};

module.exports = {
  CONFIG,
};
