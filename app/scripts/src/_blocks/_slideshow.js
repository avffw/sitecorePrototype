$(function () {
    theme.slideshow = {
        elements: {
            slideshows: $('.slideshow__wrap'),
            circlesContainer: $('.slideshow__position-circles'),
            slideshowChangeRate: 7000,
            lastSlide: undefined,
            positionCircle: $()
        },
        init: function () {
            theme.slideshow.detectSlides();

        },

        detectSlides: function () {
            var slides = [];
            var slidesCount = theme.slideshow.elements.slideshows;
            for (var i = 0; i < slidesCount.length; i += 1) {
                slides.push(slidesCount[i]);

            }
            theme.slideshow.processSlides(slides);
            theme.slideshow.addPositionCircles(slides);
        },
        processSlides: function (slides) {
            if (slides && $(slides[0]).hasClass('hidden')) {
                var firstSlide = $(slides[0]);

                theme.slideshow.startSlideshow(firstSlide.index(), slides);
            }
        },
        startSlideshow: function (slideIndex, slides) {


            theme.slideshow.swapSlides(slideIndex, slides);
            slideIndex += 1;

            setInterval(function () {
                if (slides) {
                    if (slideIndex < slides.length && slideIndex !== 0) {
                        theme.slideshow.swapSlides(slideIndex, slides);
                        slideIndex += 1;
                    }
                    else {
                        slideIndex = 0;
                        theme.slideshow.swapSlides(slideIndex, slides);
                        slideIndex += 1;
                    }
                }

            }, theme.slideshow.elements.slideshowChangeRate)
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
                theme.slideshow.swapSlides( $(this).attr('data-slide'), slides);
            })
        },
        swapCircles: function (slideIndex, circles) {

        },

        swapSlides: function (slideIndex, slides) {

            theme.slideshow.showSlide(slideIndex, slides);
            theme.slideshow.hideSlide(theme.slideshow.elements.lastSlide, slides);
            theme.slideshow.elements.lastSlide = slideIndex;

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
