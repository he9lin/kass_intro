var Data = {};

Data.team = [
  {
    imageSrc: "team_qi.png",
    name: "何麒",
    content: "美国加州大学洛杉矶分校 （UCLA），硕士， 计算机工程系(主修以物理为基础的电脑动画以及人工智能）。2011年在美国联合创办了heyook网络开发公司，主要用RoR做SNS开发。现主要负责街区项目开发工作。"
  },
  {
    imageSrc: "team_wes.png",
    name: "王智才",
    content: "美国加州大学伯克利分校 （UC Berkeley），计算机工程系。曾参与美国多家高科技公司研究开发工作。回国后联合创办了杭州食运家网络科技有限公司。街区创始人之一，现主要负责项目开发工作。"
  },
  {
    imageSrc: "team_lisa.png",
    name: "刘丽莎",
    content: "上海同济大学行政管理系毕业。后在美国洛杉矶ELAC学习2D设计与网页设计。Heyook网络开发公司设计师。"
  },
  {
    imageSrc: "team_lihao.png",
    name: "朱利浩",
    content: "浙江大学，计算机科学与技术。 曾就职于正泰从事软件开发工作。杭州食运家网络科技有限公司创始人之一。现主要负责街区项目开发工作。"
  },
  {
    imageSrc: "team_lin.png",
    name: "何麟",
    content: "美国加州大学洛杉矶分校 （UCLA），硕士， 计算机工程系(主修计算机网络）。凭着对Web 2.0网站开发的热情开始了与好友创业的旅程，是一名狂热的测试引导开发的支持者。现主要负责街区项目开发工作。"
  }
];

Data.app = {
  title: "街区",
  summary: "在任何时间，地点，您可以通过街区发布您的任何需求，街区将为您网聚周围的力量，快速地完成您的需求。街区，通过信息化技术，把供需双方更好的结合在一起！",
  description: "街区是一个以买方为驱动，引入个人服务中介理念的实时的 O2O+LBS 模式的交易平台。使用者需要注册一个街区账户，发布你想要买的东西，愿意付多少钱，然后 就可以坐等大家出价了。特别之处在于，你可以对想要的商品设定时限， 还有你愿意跑多远提货。这给整个移动本地购物的体验加入了更即时的 元素。街区不只把你的要求发布于他们的网站和移动平台，还共享在公 司的微博或社交网站页面上。如果很多人出价以后，买家满意，他就可 以选择一个卖家，或者现金支付，或者使用街区的整合支付系统付款。 Ebay是完全基于出价的，但是街区更像一个本地商务的协调者。街区用 户可以不只是买卖物品。他们可以发布需要完成的一些事务，或者说需 要别人为他们做的一些事情。可以是“运送一支蜡烛”，“排队求购演唱 会门票”或者“寻找一个独立音乐人让我自己找回酷酷的感觉”等等。"
};

Data.slides = [
  { imageSrc: "demopreview-slides_19n.png" },
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
  $("#slides2").html(slidesTemplate(Data.slides));
  $("#slides2").slides({width:734, height:508});

  var appMoreTemplate = Handlebars.compile($("#app-more-template").html());
  $("#app-more .body").html(appMoreTemplate(Data.app));

  var appIntroTemplate = Handlebars.compile($("#app-intro-template").html());
  $("#app-intro .body .content").html(appIntroTemplate(Data.app));

  $("header.main nav a").click(function(event) {
    event.preventDefault();
    
    $("header.main nav a").removeClass("current")
    var link = $(event.target);
    link.addClass("current");
    var currentWrapper = $(link.attr("href"));
    
    // if( currentWrapper.attr("id") == "app-more"){
    //   $("#container").attr({"height" : "800px"});
    // }else{
    //   $("#container").attr({"height" : "1600px"});
    // }
    
    $("body").scrollTo(currentWrapper, 800, {
      onAfter: function() {  }
    });
  });

  var link = $("header.main nav a" + "[href='" + window.location.hash + "']");

  if (link.length == 0) {
    link = $("header.main nav a:first");
  }

  link.addClass("current");
  var currentWrapper = $(link.attr("href"));
  $("#container").scrollTo(currentWrapper);
});

