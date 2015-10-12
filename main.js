$(function() {
    var scrollTopPositionWhenReachedMaxScale = undefined;
    var el = $('.intro'),
        blvd = $('#blvd'),
        offset = blvd.offset(),
        windowHeight = $(window).height();

    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop(),
            scrollPercent = Math.max(0.3, (offset.top - windowTop) / offset.top),
            scale = 'scale(' + scrollPercent + ')';

        el.css('transform', scale);
        if (scrollPercent === 0.3) {
            if (!scrollTopPositionWhenReachedMaxScale) {
                scrollTopPositionWhenReachedMaxScale = windowTop;
            }
           el.css('transform', 'translateY(' + (-windowTop + scrollTopPositionWhenReachedMaxScale) + 'px) ' + scale);
        }
        // if (windowTop >= 1020) {
        //     el.hide();
        // } else {
        //     el.show();
        // }
    });

});