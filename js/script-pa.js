$(document).ready(function () {
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

$(document).ready(function () {
  $('.js-pa-add-dep').click(function() {
    $('.pa-add-dep').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-add-dep__exit').click(function() {
    $('.pa-add-dep').fadeOut();
    $('body').removeClass('lock');
  });

});

$(document).ready(function () {
  $('.js-pa-add-user').click(function() {
    $('.pa-add-user').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-add-user__exit').click(function() {
    $('.pa-add-user').fadeOut();
    $('body').removeClass('lock');
  });

});
$(document).ready(function () {
  $('.js-pa-add-edit').click(function() {
    $('.pa-add-edit').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-add-edit__exit').click(function() {
    $('.pa-add-edit').fadeOut();
    $('body').removeClass('lock');
  });

});

