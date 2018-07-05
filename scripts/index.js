//function for back to top arrow to fade in and out as user moves up and down screen
jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.goTop').fadeIn('slow');
        } else {
            $('.goTop').fadeOut('slow');
        }
    });
    $('.goTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});


  
