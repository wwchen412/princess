$(document).ready(function() {
    $('body.hidden-load').fadeIn(200).removeClass('hidden-load');

    $('.navbar-nav li .dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(0);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(0);
    });
});