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

    var ctx = document.getElementById("team-radar").getContext("2d");
    var data = {
        labels: ["Visual Design", "Software", "Product Development", "Team", "Amazing Product"],
        datasets: [

            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [100, 100, 100, 100, 101]
            }
        ]
    };
    var radar = new Chart(ctx).Radar(data, {
        scaleShowLabels: false,
        showTooltips: false
    });

    setInterval(function(){
       radar.datasets[0].points.forEach(function(point){
        point.value = 100 + Math.random()*10
        })
        radar.update()
    }, 800)

});