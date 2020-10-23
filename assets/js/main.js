$(document).ready(function () {
   /*==========================
   // Header
   ============================ */
   // mobile menu
   $(".toggler-button").on("click", function () {
      $(".header").toggleClass("menu-show");
   });
   $(".header-overlay, .mobile-cancel").on("click", function () {
      $(".header").toggleClass("menu-show");
   });
   if ($(window).width() < 767) {
      $(".main-menu .menu-item .menu-link").on("click", function () {
         $(this).parent(".menu-item").find(".sub-menu").slideToggle();
         // $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });
   }

   //Fixed header
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
         $(".header").addClass("fixedHeader");
      } else {
         $(".header").removeClass("fixedHeader");
      }
   });
   // scroll it
   $(function () {
      $.scrollIt();
   });

   // search popup
   $(".search-btn").magnificPopup({
      type: "inline",
      midClick: true,
   });

   /*==========================
   // banner
   ============================ */

   // slider
   $(".banner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      arrows: true,
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
   });
   $(".banner-slider").slickAnimation();

   // video popup
   $(".play-btn").magnificPopup({
      type: "iframe",
      iframe: {
         markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>",
         patterns: {
            youtube: {
               index: "youtube.com/",
               id: "v=",
               src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
               index: "vimeo.com/",
               id: "/",
               src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: {
               index: "//maps.google.",
               src: "%id%&output=embed",
            },
         },
         srcAction: "iframe_src",
      },
   });

   /*==========================
   // About Intro
   ============================ */
   $(".testimonial-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      navText: [
         '<i class="fas fa-arrow-left"></i>',
         '<i class="fas fa-arrow-right"></i>',
      ],
   });

   /*==========================
   // team
   ============================ */
   $(".mainteam-wrapper").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      navText: [
         '<i class="fas fa-angle-left"></i>',
         '<i class="fas fa-angle-right"></i>',
      ],
      margin: 30,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true,
         },
         768: {
            items: 2,
            nav: true,
         },
         992: {
            items: 3,
            nav: true,
         },
      },
   });

   /*==========================
   // Contact form select
   ============================ */
   $("select").niceSelect();

   /*==========================
   // backtotop
   ============================ */
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".back-to-top").fadeIn("slow");
      } else {
         $(".back-to-top").fadeOut("slow");
      }
   });
   $("body, html").on("click", ".back-to-top", function (e) {
      e.preventDefault();
      $("html, body").animate(
         {
            scrollTop: 0,
         },
         800
      );
   });

   /*==========================
   // gallery pop up
   ============================ */
   $(".gicon").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });

});
