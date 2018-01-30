$(function () {
    theme.slideshow = {
        elements: {
            slideshows: $('.slideshow__wrap'),
            circlesContainer: $('.slideshow__position-circles'),
            slideshowChangeRate: 3000,
            lastSlide: undefined,
            slideIndex: 0,
            positionCircle: $(),
            intervalId: undefined,
            resumeSlideTimer: undefined
        },
        init: function () {

            theme.slideshow.detectSlides();

            theme.slideshow.elements.resumeSlideTimer = theme.slideshow.elements.slideshowChangeRate ;
            theme.slideshow.swapSlides(theme.slideshow.elements.slideshows);
            theme.slideshow.elements.slideIndex++;
            theme.slideshow.startSlideshow(theme.slideshow.elements.slideshows, false);
        },

        detectSlides: function () {
            var slides = [];
            var slidesCount = theme.slideshow.elements.slideshows.length;
            for (var i = 0; i < slidesCount; i += 1) {
                slides.push(slidesCount[i]);

            }
            theme.slideshow.processSlides(slides);
            theme.slideshow.addPositionCircles(slides);
        },
        processSlides: function (slides) {
            if (slides && $(slides[0]).hasClass('hidden')) {
                var firstSlide = $(slides[0]);
                theme.slideshow.elements.slideIndex = firstSlide.index();
                /*theme.slideshow.startSlideshow(slides, false);*/

            }
        },
        startSlideshow: function (slides, pause) {

            if (pause) {
                clearInterval(theme.slideshow.elements.intervalId);
                setTimeout(function () {
                     if(theme.slideshow.elements.lastSlide < theme.slideshow.elements.slideshows.length){
                         theme.slideshow.elements.lastSlide++;
                     }else{
                         theme.slideshow.elements.lastSlide = 0;
                     }

                    theme.slideshow.elements.intervalId = setInterval(theme.slideshow.slideshowScope, theme.slideshow.elements.slideshowChangeRate);
                },theme.slideshow.elements.resumeSlideTimer)

            } else {

                theme.slideshow.elements.intervalId = setInterval(theme.slideshow.slideshowScope, theme.slideshow.elements.slideshowChangeRate);
            }

        },
        slideshowScope: function slideshowScope() {

            var slides = theme.slideshow.elements.slideshows;
            theme.slideshow.processSlideshow(slides);
        },

        processSlideshow: function (slides) {
            if (slides) {
                if (theme.slideshow.elements.slideIndex < slides.length) {
                    theme.slideshow.swapSlides(slides);
                    theme.slideshow.elements.slideIndex++;
                }
                else {
                    theme.slideshow.elements.slideIndex = 0;
                    theme.slideshow.swapSlides(slides);
                    theme.slideshow.elements.slideIndex++;
                }
            }
        },
        addPositionCircles: function (slides) {
            var circles = $();
            for (var i = 0; i < slides.length; i += 1) {
                circles = circles.add('<div class="circle" data-slide="' + i + '"></div>');
            }
            theme.slideshow.createCircle(circles, slides);

        },
        createCircle: function (circles, slides) {
            theme.slideshow.elements.circlesContainer.append(circles);
            theme.slideshow.elements.positionCircle = $('.circle');

            theme.slideshow.elements.positionCircle.click(function () {
                if($(this).attr('data-slide')!= theme.slideshow.elements.slideIndex){
                    theme.slideshow.onSlideSelect($(this).attr('data-slide'), theme.slideshow.elements.slideshows);

                }else
                {console.log('stop clicking me you ass')}

                });
        },
        onSlideSelect: function(selectedSlideIndex, slides){
            console.log(theme.slideshow.elements.lastSlide + ' last slide before select ');
            theme.slideshow.elements.slideIndex = selectedSlideIndex;
            theme.slideshow.swapSlides(slides);
            theme.slideshow.startSlideshow(slides, true);

            },


        swapSlides: function (slides) {


            theme.slideshow.showSlide(theme.slideshow.elements.slideIndex, slides);
            theme.slideshow.hideSlide(theme.slideshow.elements.lastSlide, slides);
            theme.slideshow.elements.lastSlide = theme.slideshow.elements.slideIndex;


        },
        showSlide: function (slideIndex, slides) {
            setTimeout(function () {

                $(slides[slideIndex]).removeClass('hidden');
                $(theme.slideshow.elements.positionCircle[slideIndex]).addClass('circle__active');

            }, 500);


        }

        ,
        hideSlide: function (lastSlide, slides) {

            $(slides[lastSlide]).addClass('hidden');
            $(theme.slideshow.elements.positionCircle[lastSlide]).removeClass('circle__active');
        }

    }

});
