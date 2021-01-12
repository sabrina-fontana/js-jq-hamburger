// $('.fa-bars').click(function() {
//   $('.header-right ul').css('display', 'block');
//   $(this).css('display', 'none');
// });

// BONUS
$('.header-right > a').hover(function() {
    $('.header-right ul').css('display', 'block');
    $('.header-right > a').css('display', 'none');
});

$('.header-right').mouseleave(function() {
  $('.header-right ul').css('display', 'none');
  $('.header-right > a').css('display', 'block');
});
