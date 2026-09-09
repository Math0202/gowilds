(function ($) {
  'use strict';

  var $menu = $('[data-menu]');
  var $toggle = $('[data-menu-toggle]');

  $toggle.on('click', function () {
    var isOpen = $menu.toggleClass('is-open').hasClass('is-open');
    $(this).attr('aria-expanded', isOpen);
    $(this).find('i').toggleClass('fa-bars', !isOpen).toggleClass('fa-times', isOpen);
    $('body').toggleClass('menu-open', isOpen);
  });

  $menu.find('a').on('click', function () {
    $menu.removeClass('is-open');
    $toggle.attr('aria-expanded', 'false').find('i').removeClass('fa-times').addClass('fa-bars');
    $('body').removeClass('menu-open');
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $hero = $('.hero-slider');

  if ($hero.length) {
    $hero.slick({
      arrows: false,
      dots: true,
      fade: !reduceMotion,
      autoplay: !reduceMotion,
      autoplaySpeed: 6000,
      speed: reduceMotion ? 0 : 700,
      pauseOnHover: true,
      pauseOnFocus: true
    });

    $('[data-hero-control]').on('click', function () {
      var paused = $(this).attr('aria-pressed') === 'true';
      $hero.slick(paused ? 'slickPlay' : 'slickPause');
      $(this)
        .attr('aria-pressed', String(!paused))
        .attr('aria-label', paused ? 'Pause hero slides' : 'Play hero slides')
        .find('i')
        .toggleClass('fa-pause', paused)
        .toggleClass('fa-play', !paused);
    });
  }

  $('.specials-carousel').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 980, settings: { slidesToShow: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1 } }
    ]
  });

  $('.reviews-carousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('[data-ui-only-form]').on('submit', function (event) {
    event.preventDefault();
    var $note = $(this).find('[data-form-note]');
    $note.text('Thank you. Form delivery will be connected in the next development phase.').attr('role', 'status');
  });
})(window.jQuery);
