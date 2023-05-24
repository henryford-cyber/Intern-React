//slides
$(document).ready(function () {
  $(".header-slide-main").slick({
    dots: false,
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,  
    prevArrow: "<div class='slick-prev slick-arrow'><i class='fas fa-caret-left'></i></div>",
    nextArrow: "<div class='slick-next slick-arrow'><i class='fas fa-caret-right'></i></div>"
    
  });
});
//tab
var tabLinks = document.querySelectorAll(".tab-links");
var tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btn = el.currentTarget;
  var electronic = btn.dataset.electronic;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + electronic).classList.add("active");
  btn.classList.add("active");
}
$(document).ready(function () {
  $(".slider-list-auto").slick({
    //slide car product
    dots: false,
    infinite: true,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4, 
    prevArrow:false, 
    nextArrow:false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
      
  });
});
 

$(".button-open-modal").click((e) => {
  e.preventDefault();
  $(".modal-overlay").addClass("active");
  $(".modal-content").addClass("actived");
});
$(".button-close-modal").click((e) => {
  e.preventDefault();
  $(".modal-overlay").removeClass("active");
  $(".modal-content").removeClass("actived");
});

 
 
// const $ = document.querySelector.bind(document);
  // const $$ = document.querySelectorAll.bind(document);




// scroll 
 
//  var translateY = 0;
//  var delta;
//  var heightHeader = document.querySelector(".header-top-content").clientHeight;
//  var heightVideo = document.querySelectorAll(".header-slide-main video")[0].clientHeight;
//  var heightShopProduct1 = document.querySelectorAll(".slider-list-auto")[0].clientHeight; 
//  var heightBlogInfo= document.querySelector(".blog-info").clientHeight;
//  var heightService= document.querySelector(".warranty-and-service").clientHeight;
 

//  var tudauxuongslide = heightVideo - heightHeader;
//  var slidexuongsp1 = heightShopProduct1 / 4;
//  var sp1xuongsp2 = (heightShopProduct1 / 4)+160;
//  var sp2xuongpinsat = heightBlogInfo+150; 
//  var pinsatxuongbaohanh=heightService+240;
//   var arrHeightWeb=[tudauxuongslide,slidexuongsp1,sp1xuongsp2,sp2xuongpinsat,pinsatxuongbaohanh];
//   var index = 0;
// $("body").bind("mousewheel", function(e) {
//    delta = e.originalEvent.wheelDelta; // Lấy giá trị độ dịch chuyển của chuột bánh xe
//    var value = arrHeightWeb[index];
   
//   console.log(arrHeightWeb);
//   console.log(value);
//    if (delta > 0) { 
//     index=Math.max(0,index - 1);
//     translateY += value;
//     //  if(translateY>0){
//     //   translateY = null;
//     //  }else{
//     //   translateY += 700;
//     // }

//   } else {
//     index=Math.min(arrHeightWeb.length - 1,index + 1);

//       translateY -= value;
//     //  if(translateY<(-80)){
//     //   translateY = -80;
//     //  }else{
//     //   translateY -= 13;
//     //  }
// }
//   $("#Content").css("transform", "translateY(" + translateY +"px"+ ")"); // Áp dụng thuộc tính "transform" cho phần tử "body"
//   $("#Content").css("transition", "all"+" 2.0s"); // Áp dụng thuộc tính "transform" cho phần tử "body"
// });

 