// $('.fa-bars').click(function() {
//   $('.header-right ul').css('display', 'block');
//   $(this).css('display', 'none');
// });

// BONUS
$('.header-right > a').hover(function() {
    $('.header-right ul').show();
    $('.header-right > a').hide();
});

$('.header-right').mouseleave(function() {
  $('.header-right ul').hide();
  $('.header-right > a').show();
});
