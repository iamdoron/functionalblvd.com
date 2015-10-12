$(function() {
    var minScale = 0.3;

    $(window).on('resize', function(){
        console.log('resize');
    })
    var el = $('.intro'),
        blvd = $('#blvd'),
        offset = blvd.offset(),
        windowHeight = $(window).height();
    var scrollTopPositionWhenReachedMaxScale = (1-minScale) * offset.top;
    updateBlvd();
    $(window).on('scroll', function() {
        updateBlvd();
        // if (windowTop >= 1020) {
        //     el.hide();
        // } else {
        //     el.show();
        // }
    });

    function updateBlvd() {
        var windowTop = $(window).scrollTop(),
            scrollPercent = Math.max(minScale, (offset.top - windowTop) / offset.top),
            scale = 'scale(' + scrollPercent + ')';

        console.log(windowTop, scrollTopPositionWhenReachedMaxScale, 'translateY(' + (-windowTop + scrollTopPositionWhenReachedMaxScale) + 'px) ')
        el.css('transform', scale);
        if (scrollPercent === minScale) {
            if (!scrollTopPositionWhenReachedMaxScale) {
                scrollTopPositionWhenReachedMaxScale = windowTop;
            }
           el.css('transform', 'translateY(' + (-windowTop + scrollTopPositionWhenReachedMaxScale) + 'px) ' + scale);
        }
    }

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