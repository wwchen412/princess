$(document).ready(function() {
    $('body.hidden-load').fadeIn(200).removeClass('hidden-load');

    $('.navbar-nav li .dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(0);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(0);
    });
});

function download() {

    (scupioconv = window.scupioconv || []).push({ bwp: 1160, bwpid: 'prebuy' });
    (window._bwtm = window._bwtm || []).push({
        "mid": 249,
        "convid": "preconv_2",
        "carts": [{ "itemid": 1, "price": 1, "count": 1 }]
    });
    window.open('http://www.princesscruises.com.tw/downloads/Majestic_Princess_2018_Brochure_PrincessCruisesTaiwan_20171012.pdf');
}