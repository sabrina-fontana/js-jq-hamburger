$('.header-right > a').click(function() {
  $('.hamburger-menu').addClass('active');
});

$('a.close').click(function() {
  $('.hamburger-menu').removeClass('active');
});

// BONUS
$('button').hover(function() {
  $(this).css('color', 'red');
}, function() {
  $(this).css('color', 'black');
});
$('button').click(function() {
  $(this).css('color', 'green');
  $(this).text('Hai cliccato');
});
