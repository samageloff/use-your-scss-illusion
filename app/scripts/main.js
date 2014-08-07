$('#toggle-lines').on('click', function() {
    'use strict';
    var $circle = $('.circle');

    $circle.toggleClass('active');

    if ($circle.hasClass('active')) {
        $(this).text('Hide lines');
    }
    else {
        $(this).text('Show lines');
    }
});