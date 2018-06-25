$(window).on("scroll", function() {
    if ($(window).scrollTop() > 600) $('.Mus').addClass('fixed');
          else $('.Mus').removeClass('fixed');
    });