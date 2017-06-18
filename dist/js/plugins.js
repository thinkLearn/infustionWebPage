// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function() {
    var currentIndex = 0,
      items = $('.slider__wrapper .slider__img'),
      itemAmt = items.length;

    function cycleItems() {
      var item = $('.slider__wrapper .slider__img').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }

    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 3000);

    $('[data-arrow="next"]').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    $('[data-arrow="prev"]').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });


    $(".header__hamburger").on("click", function() {
    $(".header__ul").toggle('slow');});

}());

