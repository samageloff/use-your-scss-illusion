$('#toggle-lines').on('click', function() {
    'use strict';
    $('.circle').toggleClass('active');

    if ($('.circle').hasClass('active')) {
        $(this).text('Hide lines');
    }
    else {
        $(this).text('Show lines');
    }
});