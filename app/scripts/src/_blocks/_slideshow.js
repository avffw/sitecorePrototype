$(function () {
    theme.slideshow = {
        elements: {
            slideshows: $('.slideshow__wrap'),
            circlesContainer: $('.slideshow__position-circles'),
            circles: $(),
            slideshowChangeRate: 2000
        },
        init: function () {
            var slides = [];
            var circles = theme.slideshow.elements.circles;
            var index =0 ;

            if (!theme.slideshow.elements.slideshows) {
                console.log('no slideshow slides detected');
            } else {
                console.log(theme.slideshow.elements.slideshows.length + ' slides found');
                var slidesFound = theme.slideshow.elements.slideshows.length;

                for (var i = 0; i < slidesFound; i += 1) {

                    slides.push($(theme.slideshow.elements.slideshows[i]));
                    if (i === 0) {
                        slides[i].toggleClass('hidden');
                    }

                    circles = circles.add('<div class="circle" data-slide="' + i + '"></div>');


                }
                console.log(circles);
                theme.slideshow.elements.circlesContainer.append(circles);
            }
            setInterval(function (slides) {

                theme.slideshow.swapSlides(slides, index);
            }, theme.slideshow.elements.slideshowChangeRate)
        },
        onSlideshowChange: function (slides) {

        },
        swapSlides: function (slides, index) {
            if (index !== 5){
                slides[index].toggleClass(hidden);
                index +=1;
            }else{
                index = 0;
            }

        },

    }

});
