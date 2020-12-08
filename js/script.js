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
  $('#popup-reg').click(function() {
    $('.popup-reg').fadeIn();
    $('.popup-enter').fadeOut();
    $('body').addClass('lock');
  });
  $('#popup-enter').click(function() {
    $('.popup-reg').fadeOut();
    $('.popup-enter').fadeIn();
    $('body').addClass('lock');
  });
  $('.popup-enter__exit').click(function() {
    $('.popup-reg').fadeOut();
    $('.popup-enter').fadeOut();
    $('body').removeClass('lock');
  });

});
// $(document).mouseup(function (e) {
//   var popup = $('.popup-enter__body', '.popup-reg__body');
//   if (e.target!=popup && popup.has(e.target).length === 0) {
//     $('.popup-enter').fadeOut();
//     $('.popup-reg').fadeOut();
//     $('body').removeClass('lock');
//   }
// });
const anchors = document.querySelectorAll('a[href*="#"');

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth", 
      block: 'start'
    })
  });
}