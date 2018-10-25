/*
 * Turn.js responsive book
 */

/*globals window, document, $*/

(function () {
    'use strict';
    
    var module = {
        ratio: 2.9,
        init: function (id) {
            var me = this;

            // if older browser then don't run javascript
            if (document.addEventListener) {
                this.el = document.getElementById(id);
                this.resize();
                this.plugins();

                // on window resize, update the plugin size
                window.addEventListener('resize', function (e) {
                    var size = me.resize();
                    $(me.el).turn('size', size.width, size.height);
                });
            }
        },

        resize: function () {
            // reset the width and height to the css defaults
            this.el.style.width = '';
            this.el.style.height = '';

            var width = this.el.clientWidth,
                height = Math.round(width / this.ratio),
                padded = Math.round(document.body.clientHeight * 0.9);

            // if the height is too big for the window, constrain it
            if (height > padded) {
                height = padded;
                width = Math.round(height * this.ratio);
            }

            // set the width and height matching the aspect ratio
            this.el.style.width = width + 'px';
            this.el.style.height = height + 'px';

            return {
                width: width,
                height: height
            };
        },

        plugins: function () {
            // run the plugin
            if($(window).width() <= 768) {
                $('.headerBooklet, .mainWrappBook').css('display', 'none');
                $('.pengantar p').css('width', '98%');
            } else {
                $(this.el).turn({
                    gradients: true,
                    acceleration: true,
                    display: 'double',
                    elevation: 50,
                    next: true,
                    autoCenter: true
                });
            }

            // hide the body overflow
            // document.body.className = 'hide-overflow';
        }
    };

    function toZoom(id, el) {
        $(id).click(function(evt) {
            $(el).zoomTarget({
                targetsize: 1,
                closeclick: true,
                duration: 800,
                nativeanimation: true,
                easing: 'ease-in-out',
                scalemode: 'height'
            });
            evt.stopPropagation();
        });
    }

    $('.era').slick({
        infinite: false,
        speed: 1000,
        variableWidth: true,
        slidesToShow: 2,
        zIndex: 1,
        nextArrow: '.sliderNext',
        prevArrow: '.sliderPrev'
      });
    // ----------------------
    // NEXT BUTTON
    // ---------------------- 
    $( '.sliderNext' ).click( function () {
        $( '.era' ).slick( 'slickNext' );
    });
	
    // ----------------------
    // PREVIOUS BUTTON
    // ---------------------- 
    $( '.sliderPrev' ).click( function () {
        $( '.era' ).slick( 'slickPrev' );
    });

    module.init('flipBook');
    toZoom('#flipBook', '.page');

    $('#flipBook').bind('last', function(event) {
        $('.next-btn').fadeOut(300);
        $('.previous-btn').fadeIn(300);
    });
    
    $('#flipBook').bind('first', function(event) {
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeOut(300);
    });
    
    $('#flipBook').bind('turned', function(event, page, view) {
        if(page == 2) {
            $('.previous-btn').fadeIn(300);
        } else if(page == 45) {
            $('.next-btn').fadeIn(300);
        }
      });

    $('#sk').on('click', function() {
        $('#flipBook').turn('page', 4);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $('#sh').on('click', function() {
        $('#flipBook').turn('page', 10);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $('#hb').on('click', function() {
        $('#flipBook').turn('page', 26);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $('#gs').on('click', function() {
        $('#flipBook').turn('page', 28);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $('#mg').on('click', function() {
        $('#flipBook').turn('page', 30);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });
    
    $('#sby').on('click', function() {
        $('#flipBook').turn('page', 35);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $('#jw').on('click', function() {
        $('#flipBook').turn('page', 38);
        $('.next-btn').fadeIn(300);
        $('.previous-btn').fadeIn(300);
    });

    $(window).on('swipeleft', function(event) {
        ('#flipBook').turn('previous');
    });

    $(window).on('swiperight', function(event) {
        ('#flipBook').turn('next');
    });

    $('.next-btn').on('click', function() {
        $('#flipBook').turn('next');
    });
    $('.previous-btn').on('click', function() {
        $('#flipBook').turn('previous');
    });    

    $(window).bind('keydown', function(e) {
        if(e.keyCode == 37) {
            $('#flipBook').turn('previous');
        } else if(e.keyCode == 39) {
            $('#flipBook').turn('next');
        } else if(e.keyCode == 48) {
            $('#flipBook').turn('page', 1);
        } else if(e.keyCode == 49) {
            $('#flipBook').turn('page', 4);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 50) {
            $('#flipBook').turn('page', 10);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 51) {
            $('#flipBook').turn('page', 26);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 52) {
            $('#flipBook').turn('page', 28);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 53) {
            $('#flipBook').turn('page', 30);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 54) {
            $('#flipBook').turn('page', 35);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        } else if(e.keyCode == 55) {
            $('#flipBook').turn('page', 38);
            $('.next-btn').fadeIn(300);
            $('.previous-btn').fadeIn(300);
        }
    });
    
}());