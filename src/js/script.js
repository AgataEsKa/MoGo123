'use strict';

(function ($, $win) {

  let sliders = [
    {
      pre_title: 'Creative Template 1',
      title: 'Welcome to MoGo 1',
      link_text: 'Learn more',
      link_url: '#'
    },
    {
      pre_title: 'Creative Template 2',
      title: 'Welcome to MoGo 2',
      link_text: 'Learn more',
      link_url: '#'
    },
    {
      pre_title: 'Creative Template 3',
      title: 'Welcome to MoGo 3',
      link_text: 'Learn more',
      link_url: '#'
    },
    {
      pre_title: 'Creative Template 4',
      title: 'Welcome to MoGo 4',
      link_text: 'Learn more',
      link_url: '#'
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

    //change slider texts


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
})(jQuery, window);

