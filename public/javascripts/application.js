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

Data.slides = [
  { imageSrc: "demopreview-slides_02.png" },
  { imageSrc: "demopreview-slides_05.png" },
  { imageSrc: "demopreview-slides_07.png" },
  { imageSrc: "demopreview-slides_09.png" },
  { imageSrc: "demopreview-slides_11.png" },
  { imageSrc: "demopreview-slides_13.png" },
  { imageSrc: "demopreview-slides_15.png" },
  { imageSrc: "demopreview-slides_19.png" },
  { imageSrc: "demopreview-slides_21.png" }
];

 $(document).ready(function() {
   var teamTemplate = Handlebars.compile($("#team-template").html());
   $("section#about-us .content").html(teamTemplate(Data.team));

   var slidesTemplate = Handlebars.compile($("#slides-template").html());
   $("#slides").html(slidesTemplate(Data.slides));

   $("#slides").slides({width:734, height:508});
});

