

$(document).ready(function(){
	$('.fa-bars').click(function(){
		$('.main-menu-hidden').slideToggle();
	})
})

jQuery(function($) {
    $(document).ready( function() {
      $('.main-menu-border').stickUp();
    });
  }); 

(function($){
        $(window).load(function(){
            $("a[rel='m_PageScroll2id']").mPageScroll2id({
						    offset:200
						});
        });
    })(jQuery); 