$(window).on("load", function () {
    $(".loader").fadeOut(1000, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $(this).remove();
        $('.ar-head').addClass('openStyle');
        setTimeout(() => {
            $('.en-head').addClass('openStyle');
        }, 1700);
    });


    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logo.png'>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,

        center: new google.maps.LatLng($("#map").attr("lat"), $("#map").attr("long")),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});
$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".header-cont").addClass("fixed-header");
            $(".news-bar-cont").addClass("fixed-news");
            $(".menubtn").addClass("menubtn-scroll");
            // $("header").css;
        } else {
            $(".header-cont").removeClass("fixed-header");
            $(".news-bar-cont").removeClass("fixed-news");
            $(".menubtn").removeClass("menubtn-scroll");
        }
    });

    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    });

    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 3,
        autoplay: false,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    /////////Brands Slider/////////
    $('.client-slider').owlCarousel({
        items: 6,
        stagePadding: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
            },
            500: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });


    $('.marquee').marquee({
        duration: 10000,
        gap: 9,
        delayBeforeStart: 0,
        direction: document.dir == 'rtl' ? "right" : "left",
        duplicated: true,
        pauseOnHover: true
    });


    if ($(window).width() <= 991) {
        $(".foot-header").addClass("mo-accordion");
        $(".nav-foot,.contact-foot").addClass("mo-panel");
    }



    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })


    $('.menubtn').click(function () {
        $(this).toggleClass('open');
        $("._2nd-sec").fadeToggle('300');
        $(".lang").toggleClass('open');
        $("body").toggleClass("overflow");
    });
});