const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "3e24a137d4b640658b6b559b28b9534e",//"6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx468cfd53dfeac032",

  // 微信公众号的appsecret
  APP_SECRET: "602841614e447838fd60f4c560bf3b72",

  // 微信公众号的模板ID
  TEMPLATE_ID: "1FqY83__A7_SR3vOb0CBbiyvci-EJfcdUxz9EH5K4EQ",

  // 天行API的key
  TXApiKey: "187b84496d7baa1c3e0280228b55e39b",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "梓媚",
      // 用户列表的`微信号`
      userId: "oymZC5y4kXkcEufJfGFbxKLqwV4A",
      // 星座
      star: "射手座",
      // 生日 - 格式：08-22
      birthday: "12-11",
      // 城市 - 格式：支持省市县区
      city: "茂名市",
    },
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "艺任",
      // 用户列表的`微信号`
      userId: "oymZC51oZl9GOczXKQaEqv67Hcck",
      // 星座
      star: "巨蟹座",
      // 生日 - 格式：08-22
      birthday: "07-09",
      // 城市 - 格式：支持省市县区
      city: "广州市",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2021-04-05",

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
    healthtip: false,
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
