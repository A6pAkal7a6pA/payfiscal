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
    $('body').addClass('lock');
  });
  $('.pa-add-dep__exit').click(function () {
    $('.pa-add-dep').fadeOut();
    $('body').removeClass('lock');
  });

});

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.pa-add-dep').fadeOut();
    $('.pa-add-edit').fadeOut();
    $('.pa-list-dep').fadeOut();
    $('.pa-list-user').fadeOut();
    $('.pa-add-user').fadeOut();
    $('.pa-oper').fadeOut();
    $('.pa-list-ppo').fadeOut();
    $('body').removeClass('lock');
  }
});

$(document).ready(function () {
  $('.js-pa-add-user').click(function () {
    $('.pa-add-user').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-add-user__exit').click(function () {
    $('.pa-add-user').fadeOut();
    $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-add-edit').click(function () {
    $('.pa-add-edit').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-add-edit__exit').click(function () {
    $('.pa-add-edit').fadeOut();
    $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-list-dep').click(function () {
    $('.pa-list-dep').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-list-dep__exit').click(function () {
    $('.pa-list-dep').fadeOut();
    $('body').removeClass('lock');
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
    $('body').addClass('lock');
  });
  $('.pa-list-user__exit').click(function () {
    $('.pa-list-user').fadeOut();
    $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.js-pa-oper').click(function () {
    $('.pa-oper').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-oper__exit').click(function () {
    $('.pa-oper').fadeOut();
    $('body').removeClass('lock');
  });
});

$(document).ready(function () {
  $('.pa-list-ppo__table').DataTable({
    ordering: true,
    lengthMenu: [5, 4, 3, 2, 1],
    paging: true,
    "pagingType": "numbers",
    "language": {
      "info": "Показано<br> _END_ позицій з _MAX_",
      "lengthMenu": "Показати _MENU_"
    },
  });
});

$(document).ready(function () {
  $('.js-pa-list-ppo').click(function () {
    $('.pa-list-ppo').fadeIn();
    $('body').addClass('lock');
  });
  $('.pa-list-ppo__exit').click(function () {
    $('.pa-list-ppo').fadeOut();
    $('body').removeClass('lock');
  });
});

let select = function () {
  let selectHeader = document.querySelectorAll('.pa-add-user-select__header');
  let selectItem = document.querySelectorAll('.pa-add-user-select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.pa-add-user-select'),
          currentText = select.querySelector('.pa-add-user-select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();