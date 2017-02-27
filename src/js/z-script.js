// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  /* Hamburger main nav */
  $('.main-hamburger').click(function(e) { 
      e.preventDefault();
      $('.search__input').hide();
      $(this).closest('.nav').find('.nav__list').toggle();
  });

  /* Search */
  if ($(window).width() < 1024) {
    $('.loupe').click(function(e) { 
        e.preventDefault();
        $('.nav__list').hide();
        $(this).closest('.search__label').find('.search__input').toggle();
    });
  }

  $(window).resize(function(){
    if ($(window).width() >= 768) {
      $('.nav__list').show();
    } else if ($(window).width() >= 1024) {
      $('.search__input').show();
    } else {
      $('.search__input').hide();
      $('.nav__list').hide();
    }
  });

  /* Categories sub-list */
  $('.categories__link').click(function(e) { 
      e.preventDefault();
      $(this).siblings('.sub-categories').slideToggle();
  });

  /* Hamburger categories */
  $('.cat-hamburger').click(function(e) { 
      e.preventDefault();
      $(this).siblings('.categories__list').slideToggle();
  });

  /* плавный скролл наверх */
  $('.up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });



   

  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


});

