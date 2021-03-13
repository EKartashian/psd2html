window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
    
$(".open-btn").on("click", function(){
  $(".menu").addClass("active");
});

$(".close-btn").on("click", function(){
   $(".menu").removeClass("active"); 
});

$('.pets__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',
  responsive: [
    {
      breakpoint: 1049,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});  

$(".slider__item-btn").mouseenter(function(){
  $(this).parent().addClass("hovered");
});
$(".slider__item-btn").mouseleave(function(){
  $(this).parent().removeClass("hovered");
});

  