$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
    // $('body').toggleClass('lock');
  });
  $('.js-popup-enter').click(function() {
    // $('.popup-enter').addClass('active');
    $('.popup-enter').fadeIn();
    $('body').addClass('lock');
  });
  $('.popup-enter__exit').click(function() {
    // $('.popup-enter').addClass('active');
    $('.popup-enter').fadeOut();
    $('body').removeClass('lock');
  });

});
$(document).mouseup(function (e) {
  var popup = $('.popup-enter__body');
  if (e.target!=popup[0] && popup.has(e.target).length === 0) {
    $('.popup-enter').fadeOut();
    $('body').removeClass('lock');
  }
});