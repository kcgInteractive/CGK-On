<script>
  if ( $(window).width() > 640 ) { 
	$(window).scroll(function(){      
    // var relativeY = $(".home_story_intro").offset().top - $(".cgkONbar_home").height();
    // console.log(relativeY);
		if ($(this).scrollTop() > 30){ 
	        $('.cgkONbar_home').addClass('cgkONbar_home_active');
            $(".cgkOn_swap").css("display", "inline-block");
            $(".cgkOn_swapped").css("display", "none");
	    }
	    else{
	        $('.cgkONbar_home').removeClass('cgkONbar_home_active');
            $(".cgkOn_swap").css("display", "none");
            $(".cgkOn_swapped").css("display", "inline-block");
	    }
	});
}
</script>