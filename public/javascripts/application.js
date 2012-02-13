var Data = {};

Data.team = [
  {
    imageSrc: "me.png",
    name: "何麒",
    content: "美国加州大学洛杉矶分校 （UCLA），硕士， 计算机工程系(主修以物理为基础的电脑动画以及人工智能）联合创办了heyook网络开发公司"
  },
  {
    imageSrc: "me.png",
    name: "王智才",
    content: "毕业于美国加州大学伯克利分校 （UC Berkeley），计算机工程系。曾参与美国多家高科技公司研究开发工作。回国后联合创办了杭州食运家网络科技有限公司。XXX创始人之一，现主要负责项目开发工作。"
  },
];

Data.app = {
  title: "街区",
  summary: "如果非要用一句话来描述 街区，那就是「'本地化'，'移动版'，' 实时版'的Craigslist、赶集、58同城，加上个人服务中介的理念 的O2O 模式交易平台 。街区通过信息化技术，把供需双方更好的 结合在了一起 － 这种O2O模式的移动电商是商机无限的。",
  description: "街区 自身定位介于Craigslist的待售专区和在线拍卖行之间。使用 者需要注册一个街区账户，发布你想要买的东西，愿意付多少钱，然后 就可以坐等大家出价了。特别之处在于，你可以对想要的商品设定时限， 还有你愿意跑多远提货。这给整个移动本地购物的体验加入了更即时的 元素。街区不只把你的要求发布于他们的网站和移动平台，还共享在公 司的微博或社交网站页面上。如果很多人出价以后，买家满意，他就可 以选择一个卖家，或者现金支付，或者使用街区的整合支付系统付款。 Ebay是完全基于出价的，但是街区更像一个本地商务的协调者。KASS用 户可以不只是买卖物品。他们可以发布需要完成的一些事务，或者说需 要别人为他们做的一些事情。可以是“运送一支蜡烛”，“排队求购演唱 会门票”或者“寻找一个独立音乐人让我自己找回酷酷的感觉”等等。"
};

Data.slides = [
  { imageSrc: "demopreview-slides_19.png" },
  { imageSrc: "demopreview-slides_02.png" },
  { imageSrc: "demopreview-slides_05.png" },
  { imageSrc: "demopreview-slides_07.png" },
  { imageSrc: "demopreview-slides_09.png" },
  { imageSrc: "demopreview-slides_11.png" },
  { imageSrc: "demopreview-slides_13.png" },
  { imageSrc: "demopreview-slides_15.png" },
  { imageSrc: "demopreview-slides_21.png" }
];

 $(document).ready(function() {
   var teamTemplate = Handlebars.compile($("#team-template").html());
   $("section#about-us .content").html(teamTemplate(Data.team));

   var slidesTemplate = Handlebars.compile($("#slides-template").html());
   $("#slides").html(slidesTemplate(Data.slides));
   $("#slides").slides({width:734, height:508});

   var appMoreTemplate = Handlebars.compile($("#app-more-template").html());
   $("#app-more .body").html(appMoreTemplate(Data.app));

   var appIntroTemplate = Handlebars.compile($("#app-intro-template").html());
   $("#app-intro .body .content").html(appIntroTemplate(Data.app));
});

