(function ($) {

    $.fn.visible = function () {

        var $element = $(this).eq(0),
            $win = $(window),
            
            elemTop = $element.position().top,
            elemBottom = elemTop + $element.height(),
            
            winTop = $win.scrollTop(),
            winBottom = winTop + $win.height();
            
        if (elemBottom < winTop) {
            return false;
        } else if (elemTop > winBottom) {
            return false;
        } else {
            return true;
        }        
    };

})(jQuery);

function padNum(num) {
    if (num < 10) {
        return " " + num;
    }
    return num;
}


var $count1 = $('.first-count');
var $count2 = $('.second-count');

// Scrolling Functions
$(window).scroll(function (event) {
    var first = 500; // Count up to 25x for first
    var second = 400; // Count up to 4x for second
    
    function countStuffUp(points, selector, duration) {
        //Animate count
        var $selector = $(selector);
        $selector.addClass('counting');
        
        var $counter = $({
            countNumber: $selector.text()
        }).animate({
            countNumber: points
        }, {
            duration: duration,
            easing: 'linear',
            step: function (now) {
                //console.log(now);
                $selector.data('remaining', (points - now) * (duration / points));
                $selector.text(padNum(parseInt(this.countNumber)));
            },
            complete: function () {
                $selector.removeClass('counting');
                $selector.text(points);
                
            }
        });
        
        $selector.data('counter', $counter);
    }
    
    // Output to div
    $(".first-count").each(function (i, el) {
        var el = $(el);
        if (el.visible() && !el.hasClass('counting')) {
            var duration = el.data('remaining') || 5600;
            console.log('duration', duration);
            countStuffUp(first, '.first-count', duration);
        } else if (!el.visible() && el.hasClass('counting')) {
            el.data('counter').stop(true);
            el.removeClass('counting');
        }
    });
    
    // Output to div
    $(".second-count").each(function (i, el) {
        var el = $(el);
        if (el.visible() && !el.hasClass('counting')) {
            var duration = el.data('remaining') || 5000;
            countStuffUp(second, '.second-count', duration);
        } else if (!el.visible() && el.hasClass('counting')) {
            el.data('counter').stop(true);
            el.removeClass('counting');
        }
    });
});