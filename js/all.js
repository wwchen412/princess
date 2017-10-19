 $(function() {

     $('.book-now-js').click(function() {
         $('.select-share').removeClass('d-none').addClass('d-block');
         $('html, body').animate({
             scrollTop: $("#navtoggle").offset().top - 100
         }, 1000);
     });
 })