// loder-js
$(window).on('load', function () {
    $('#lodder-wapper').delay(5000).fadeOut(1000);
})
// scroll-header-js
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('scroll-header');
    }
    else {
        $('header').removeClass('scroll-header');
    }
});
// scroll-btn-js
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('#scroll-btn').fadeIn(200)
    }else {
        $('#scroll-btn').fadeOut();
    };
});
$(document).ready(function () {
    //swiper-js
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
    // md-menus-js
    $('#md-menus-open').click(function () {
        $('#md-menus').toggle(500);
        $(this).children('i').toggle(1);
    });
    // skills-owl-carosel-js
    var owl = $('.owl-carousel#skill');
    owl.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            900: {
                items: 3,
            },
            450: {
                items: 2,
            },
            0: {
                items: 1,
            },
        },
    });
    // nav-pills-owl-carosel-js
    var owl = $('.owl-carousel.nav-pills');
    owl.owlCarousel({
        items: 3,
        loop: true,
        center: true,
        responsive: {
            768: {
                items: 3,
            },
            0: {
                items: 1,
            },
        },
    });
    // section - hover - js
    var section = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        section.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a').children('span').removeClass('active');

                $(this).addClass('');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').children('span').addClass('active');
            };
        });
    });
});