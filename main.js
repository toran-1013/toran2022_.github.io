const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
$(".slide-items").slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:true,//ドット部分を表示する
        infinite:true,//無限にスライドする
        fade:true,//フェードする
        speed:500,//フェードするスピード 0.5秒
        prevArrow:'<p class="slide-arrow prev-arrow"></p>',//矢印左
        nextArrow:'<p class="slide-arrow next-arrow"></p>'//矢印右
});
$('.slick01').slick({
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        dots: false,
      }
    },
  ]
});
//$(".swiper").slick({
    //autoplay:true,
    //autoplaySpeed:4000,
    //dots:true,
//});

