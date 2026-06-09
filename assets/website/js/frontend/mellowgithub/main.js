/*=================================================================

Template name: Hylik - Organic Dairy Farm HTML Template
Version: 1.0.0
Author: BlackGallery     
Author url: https://themeforest.net/user/blackgallery 


[Table of Content]

01: Hero slider
02: Shop Section  
03: Feedback Section
04: Testimonial Section
05: Testimonial Section Two 
06: Client Section
07: Product Section
08: Shop slider
09: Gallery magnific Popup
10: Gallery and Slider animated
11: Preloader 
12: Scroll Top 
13: Document Ready 
14: Window Load
15: Window Scroll
 
====================================================================*/
 
(function($) {
    'use strict';

    /* =======================================
       01: Hero slider
    =======================================*/

    function heroSlider() {
        $("#slider_owl").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 9000, // Default is 5000
            smartSpeed: 1000, // Default is 250
            loop: true,
            navText: [],
            mouseDrag: true,
            touchDrag: true,
        });
    }

 
    /*=======================================
        02: Shop Section  
    =======================================*/
    function shopOwlCarousel() {
        $("#shop_carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 5 seconds
            autoplay: false,
            smartSpeed: 1000, // Default is 250
            items: 1, //Set Testimonial items
            loop: true,
            margin: 30,
            singleItem: false,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
            nav: false,
            dots: true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3
                },
                768: {
                    items: 2
                },
                480: {
                    items: 1
                },
                320: {
                    items: 1
                },
                280: {
                    items: 1
                }
            }
        }); 
    }

    /*=======================================
        03: Feedback Section  
    =======================================*/
    function feedbackCarousel() {
        $("#fea_carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 5 seconds
            autoplay: false,
            smartSpeed: 1000, // Default is 250
            items: 1, //Set Testimonial items
            loop: true,
            margin: 30,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
            nav: true,
            dots: false,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        });    
    }
 
    /*=======================================
        04: Testimonial Section  
    =======================================*/
    function testimonialCarousel() {
        $("#testimonial").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 5 seconds
            autoplay: false,
            smartSpeed: 1000, // Default is 250
            items: 1, //Set Testimonial items
            loop: true,
            margin: 30,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
            nav: true,
            dots: false,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        });    
    }
 
    /*=======================================
        05: Testimonial Section Two 
    =======================================*/
    function testimonialCarouselTwo() {
        $("#testimonial2").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 5 seconds
            autoplay: false,
            smartSpeed: 1000, // Default is 250
            items: 3, //Set Testimonial items
            loop: true,
            margin: 0,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
            nav: true,
            dots: true,
            center:true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"], 
        });    
    }
    
    /*=======================================
        06: Client Section
    =======================================*/
    function clientCarousel() {
        $("#client_carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 5 seconds
            autoplay: true,
            smartSpeed: 2000, // Default is 250
            items: 5,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: false,
            dots: false,
            nav: false,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                1200: {
                    items: 5
                },
                992: {
                    items: 5
                },
                768: {
                    items: 4
                },
                480: {
                    items: 3
                },
                320: {
                    items: 2
                },
                280: {
                    items: 2
                }
            }

        });    
    }

    /*=======================================
        07: Product Section
    =======================================*/

    function productCarousel() {
        $('.project_slider_one').slick({
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 6000,
            prevArrow: '<i class="fal fa-chevron-left"></i>',
            nextArrow: '<i class="fal fa-chevron-right"></i>',
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '80px',
                        centerMode: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                        centerMode: true,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });  
    }
 
 
    /*=======================================
        08: Shop slider
    =======================================*/

    function singleProductCarousel() {

        $('.single-thumbnail-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-thumbnail-small'
        });

        $('.single-thumbnail-small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.single-thumbnail-big',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            prevArrow: '<button type="button" class="custom-prev"><i class="fa fa-long-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="custom-next"><i class="fa fa-long-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });
    }

    /*=======================================
        09: Gallery magnific Popup     
    ======================================= */
    function magnificGalleryPopup() {
        $(".project-link").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });

        /* For Menu  */
        $("#navigation").menumaker({
            title: "",
            format: "multitoggle"
        });

        /*  WOW ANIMATION */
        var wow = new WOW({
            mobile: false
        });
        wow.init();
        
    }

    /*=======================================
        10: Gallery and Slider animated        
    ======================================= */
    function projectClick() { 
        /*  For Gallery  */
        $(".projects-titles li").on('click', function() {
            $(".projects-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
            filter: selector 
            });
        }); 

        /*  slider Section  */
        $(".slider_home").on("translate.owl.carousel", function () {
            $(".single_slider h2, .single_slider h5, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
    
        $(".slider_home").on("translated.owl.carousel", function () {
            $(".single_slider h2, .single_slider h5, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        /*  For Search  */

        var $searchWrap = $('.search_wrp');
        var $navSearch = $('.search-trigger');
        var $searchClose = $('#search_close');
    
        $('.search-trigger').on('click', function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: 'toggle' }, 500);
            $navSearch.add($searchClose).addClass("open");
        });
    
        $('.search_close').on('click', function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: 'toggle' }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });
    
        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }
    
        $(document.body).on('click', function (e) {
            closeSearch();
        });
        $(".search-trigger, .header-search-input").on('click', function (e) {
            e.stopPropagation();
        });

        /*    For Cart Sidebar  */

        $(".header_cart_icon").on("click", function () {
            $(".cart_sidebar_info").addClass("info-opened");
            $(".body-overlay").addClass("opened");
        });
        $(".cart_sidebar_close-btn").on("click", function () {
            $(".cart_sidebar_info").removeClass("info-opened");
            $(".body-overlay").removeClass("opened");
        });
        $(".body-overlay").on("click", function () {
            $(".cart_sidebar_info").removeClass("info-opened");
            $(".body-overlay").removeClass("opened");
        });


        /* For Checkout Page */
    
        $('#showlogin, #showcoupon').on('click', function() {
            $(this).parent().next().slideToggle(600);
        }); 

            /*----------------------------
    cart-plus-minus-button
   ------------------------------ */
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    }

    /*=======================================
        11: Preloader                     
    ======================================= */
    function preloader() {
        $(".slides__preload_wrapper").fadeOut(1500);
        $(".projects-list").isotope();
    }
 

    /*=======================================
        12: Scroll Top                     
    ======================================= */
 
    function scrollTop() {      
        if ($(window).scrollTop() >= 500) {
            $('.scrollup').slideDown(450);
        } else {
            $('.scrollup').slideUp(450);
        }
    }

    /*---------------------
        13: Document Ready 
    ----------------------*/
    $(document).ready(function () { 
        heroSlider();
        shopOwlCarousel();
        feedbackCarousel();
        testimonialCarousel();
        testimonialCarouselTwo();
        clientCarousel();
        productCarousel();
        singleProductCarousel();
        magnificGalleryPopup(); 
        projectClick();
    });
 
    /*------------------
        14: Window Load
    --------------------*/
    $(window).on('load', function () {
        preloader(); 
    });

    /*--------------------
     15: Window Scroll
    ----------------------*/
    $(window).on("scroll", function() {    
        scrollTop();
     });
 
})(jQuery);