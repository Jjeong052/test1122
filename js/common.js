$(document).ready(function(){

  //데스크탑 2차메뉴 구현

  $(".depth2").hide();
  //먼저 숨기고,

  $(".gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
  });
  //stop 안 걸어주면 잔상이 남아서 마우스 안 올려도 이전에 마우스오버한 순서대로 나타남. 
  //stop 무조건 적어주기 

  $(".gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
  });
   
  //this는 "" 필요없음 (주의)


  //모바일 gnb
  $(".dim").hide();


  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({"right" : "0"}), 500, "swing";
  });
  //animte({" " : " "}), , " "; -> {}까먹지말기
  
  $(".mgnb-close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({"right" : "-100%"}), 500, "swing";
  });

  //stop은 마우스가 오버될 때 경로를 기억하고 마우스를 떼도 잔상이 남아서 효과를 보여주기 때문에 적용해주면 mouseleave 시에 그 잔상이 없어짐.
  //fadeIn의 stop은 마우스 오버 시에만 사용하면 됌.
  //클릭이어서 여기서는 사용 안함.

 
  //모바일 서브메뉴
  $(".mdepth2").hide();
  $(".mgnb > li").click(function(){
    if($(this).children(".mdepth2").css("display") == "none"){
      $(this).children(".mdepth2").slideDown();
      $(this).siblings().children(".mdepth2").slideUp();
    }else{
      $(this).children(".mdepth2").slideUp();
    }
  });

  //search
  $(".search").hide();
  $(".btn-search").click(function(){
    $(".search").fadeIn();
    $(".search input[type='text']").focus();
    //' '(주의) focus 함수 : 검색창 열었을 때 들아가자마자 포커스가 검색박스 안에 있게 하는 함수
  });
  $(".search-close").click(function(){
    $(".search").fadeOut();
  });

  //메인 슬라이드
  var swiper = new Swiper(".mv", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    effect:"fade",
    fadeEffect:{ //efect:"fade",를 주면 겹쳐지는 효과가 사라짐.
      crossFade:true
    },
    loop:true,
    speed:1000,
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    }
  });


  //story
  var storyList = new Swiper(".story-list", { //변수명에는 하이픈(-) 허용 안됌!!!!!!!!!!!
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });


    //product-list
    var productList = new Swiper(".product-list", { //변수명에는 하이픈(-) 허용 안됌!!!!!!!!!!!
      loop:true, // 이전과 연결해주는 것.
      centeredSlides:true, //양쪽끝이 짤리는 모습
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
    });




});

