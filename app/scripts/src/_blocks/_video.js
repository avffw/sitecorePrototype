$(function () {
    theme.video = {
        elements:{
            video:$('.video-player'),
            icon: $('.video__icon')
        },
        init: function () {
            theme.video.elements.icon.click(function () {
                $(this).addClass('hidden');
                event.stopPropagation();
                theme.video.elements.video.removeClass('hidden');
            });
            $(document).click(function (event) {
                console.log(event.target.closest('div'));
                if ($(event.target.closest('div')) != theme.video.elements.icon){
                    theme.video.elements.icon.removeClass('hidden');
                    theme.video.elements.video.addClass('hidden');

                }
            })


        }

    }
});
