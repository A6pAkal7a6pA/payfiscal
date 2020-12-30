$(document).ready(function () {
  $('.js-popup-enter').click(function () {
    // $('.popup-enter').addClass('active');
    $('.popup-enter').fadeIn();
    $('body').addClass('lock');
  });
  $('#popup-reg').click(function () {
    $('.popup-reg').fadeIn();
    $('.popup-enter').fadeOut();
    $('body').addClass('lock');
  });
  $('#popup-enter').click(function () {
    $('.popup-reg').fadeOut();
    $('.popup-enter').fadeIn();
    $('body').addClass('lock');
  });
  $('.popup-enter__exit').click(function () {
    $('.popup-reg').fadeOut();
    $('.popup-enter').fadeOut();
    $('body').removeClass('lock');
  });

});

$(document).ready(function () {
  $('.js-pa-add-dep').click(function () {
    $('.pa-add-dep').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-add-dep__exit').click(function () {
    $('.pa-add-dep').fadeOut();
    // $('body').removeClass('lock');
  });

});

$(document).ready(function () {
  $('.js-pa-add-user').click(function () {
    $('.pa-add-user').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-add-user__exit').click(function () {
    $('.pa-add-user').fadeOut();
    // $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-add-edit').click(function () {
    $('.pa-add-edit').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-add-edit__exit').click(function () {
    $('.pa-add-edit').fadeOut();
    // $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-list-dep').click(function () {
    $('.pa-list-dep').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-list-dep__exit').click(function () {
    $('.pa-list-dep').fadeOut();
    // $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.pa-list-dep__register').click(function (event) {
    $(this).toggleClass('pa-list-dep__register_active');
  });
});

$(document).ready(function () {
  $('.pa-list-user__table-main').DataTable({
    searching: false,
    ordering: true,
    lengthMenu: [5, 10, 15, 20],
    paging: true,
    "pagingType": "numbers",
    "language": {
      "info": "Показано<br> _END_ позицій з _MAX_"
    },
    "columnDefs": [
    ]
  });
});

$(document).ready(function () {
  $('.pa-list-user tbody tr td:nth-child(3)').click(function (event) {
    $(this).toggleClass('act');
  });
});

$(document).ready(function () {
  $('.js-pa-list-user').click(function () {
    $('.pa-list-user').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-list-user__exit').click(function () {
    $('.pa-list-user').fadeOut();
    // $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-oper').click(function () {
    $('.pa-oper').fadeIn();
    // $('body').addClass('lock');
  });
  $('.pa-oper__exit').click(function () {
    $('.pa-oper').fadeOut();
    // $('body').removeClass('lock');
  });
});