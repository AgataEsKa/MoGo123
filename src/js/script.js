'use strict';

(function ($, $win) {

  let sliders = [
    {
      pre_title: 'Projekty oświetlenia drogowego',
      title: 'Witaj w Akonsult 1',
      link_text: 'Dowiedz się więcej',
      link_url: '#service',
      data_open: 'accordion_button_3'
    },
    {
      pre_title: 'Projekty odwodienia',
      title: 'Witaj w Akonsult 2',
      link_text: 'Dowiedz się więcej',
      link_url: '#service',
      data_open: 'accordion_button_2'
    },
    {
      pre_title: 'Projekty gospodarki zielenią i drzewostanem w pasie drogowym',
      title: 'Witaj w Akonsult 3',
      link_text: 'Dowiedz się więcej',
      link_url: '#service',
      data_open: 'accordion_button_1'
    },
    {
      pre_title: 'Projekty melioracji wodnych',
      title: 'Witaj w Akonsult 4',
      link_text: 'Dowiedz się więcej',
      link_url: '#service',
      data_open: 'accordion_button_3'
    }
  ];

  let counter = 0;

  let $sliders_progress = $('.top-slider-wrapper_progress');
  let $sliders_wrappers = $('.top-slider-wrapper');
  let $sliders_progress_length = $sliders_progress.length;

  //header elements
  let $top_header = $('.top-header');
  let $pre_title = $('#top-header__pre-title');
  let $title = $('#top-header__title');
  let $link = $('#top-header__link');
  let $loader = $('.loader');

  $($win).on('load', function () {
    $top_header.fadeIn(250);
    $loader.fadeOut(250,
        function () {
          animate_slides(counter);
        });

  });

  function switch_counter_and_rerun_slider(counter) {
    counter++;
    if (counter > ($sliders_progress_length - 1)) {
      counter = 0
    }
    animate_slides(counter);
  }

  function animate_slides(counter) {

    let current_slide = sliders[counter];

    let current_pre_title = current_slide.pre_title;
    let current_title = current_slide.title;
    let current_url = current_slide.link_url;
    let current_link_text = current_slide.link_text;

    $pre_title.text(current_pre_title);
    $title.text(current_title);
    $link.text(current_link_text);
    $link.attr("href", current_url);

    $sliders_wrappers.removeClass('active');
    $($sliders_wrappers[counter]).addClass('active');

    $sliders_progress.css({
      width: '0%'
    });

    $($sliders_progress[counter]).animate({
          width: '100%'
        },
        8000,
        function () {
          $top_header.fadeOut(300,
              function () {
                switch_counter_and_rerun_slider(counter);
                $top_header.fadeIn(300);
              });
        }
    );
  }


  //accordion
  $('.collapse').on('hidden.bs.collapse', function () {
    $(this).parent().find('.accordion_arrow').addClass('rotate');
  });

  $('.collapse').on('shown.bs.collapse', function () {

    let imageClass = $(this).attr('data-image');

    let image = $(imageClass);
    let images = $('.accordion_image');
    images.fadeOut(200);
    image.fadeIn(200);

    $(this).parent().find('.accordion_arrow').removeClass('rotate');

  });


  //slick slider initialize
  $('.slick_slider').slick({
    // dots: true,
    arrows: true
  });

  $.fn.scrollToElement = function (top) {
    if (!this.length) return this;
    return this.each(function () {
      let $this = $(this);
      $this.on('click', function (event) {
        event.preventDefault();
        let href = $this.attr('href');
        $('html, body').animate({
          scrollTop: $(href).offset().top - top
        }, 500);
      })
    });
  };
  let scrollElement = $('.nav-link, #top-header__link');
  scrollElement.scrollToElement(70);

  $(window).on('scroll', function () {
    let scroll_top = $(window).scrollTop();
    let navbar = $('.navbar');
    if (scroll_top > 120) {
      navbar.addClass('scrolled')
    } else {
      navbar.removeClass('scrolled')
    }
  })


})(jQuery, window);
