
function waypoints() {

    $('#waypoint1').waypoint(function(direction) {    
      $(".block-1").addClass("swing-down").removeClass("swing-out");
      $(".block-2").addClass("swing-left").removeClass("swing-out");
    },{
      offset: 900
    });
  
    $('#waypoint2').waypoint(function(direction) {    
      $(".block-3").addClass("swing-right").removeClass("swing-out");
    },{
      offset: 800
    });  

    $('#waypoint3').waypoint(function(direction) {    
      $(".block-4").addClass("swing-down").removeClass("swing-out");
      $(".block-5").addClass("swing-up").removeClass("swing-out");
    },{
      offset: 800
    }); 
    

}waypoints();


function openNewWindow(url){
  window.open(url, '_blank');
}

function ChangeTextColorOfLink(element, newColor){
  element.style.color = "#" + newColor;
}

/*--Copyright Year--*/
	function copyright() {
		var today = new Date();
		var year = today.getFullYear();
		$('.copyright').prepend('&copy; '+year);
	}
	copyright();
/*--END Copyright Year--*/



/*--SEARCH FUNCTIONALITY--*/
	$('.open_search_icon').click(function(event){

		$('.search').toggleClass('search_open');

		if ( $('nav').hasClass('nav_open') ) { 
			 $('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '0' }, 500);
			 $('nav').toggleClass('nav_open');
			 $('.navicon_button').toggleClass('open');
			 
			 event.stopPropagation();
		}

		$('.search').slideToggle();

	});

	$('.close_search_icon').click(function(event){

		$('.search').toggleClass('search_open');

		$('.search').slideToggle();

		event.stopPropagation();
	});


	/*--Click outside the search to close it--*/
		$(document).click(function(event){

			$('.search').slideUp();
			$('.search').removeClass('search_open');

		});

		$('.open_search_icon, .search').click(function(event){

		 	event.stopPropagation();

		});
	/*--Click outside the search to close it--*/


	/*--New Search Button--*/
		$('#try_new_search').click(function(){

			if ( $('.search').hasClass('search_open') ) {}

			else {
				$('.search').slideDown();
				$('.search').addClass('search_open');
			}
          
            
            if ( $('nav').hasClass('nav_open') ) { 
               $('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '0' }, 500);
               $('nav').toggleClass('nav_open');
               $('.navicon_button').toggleClass('open');
               
               event.stopPropagation();
            }
                

			event.stopPropagation();
		});
	/*--End New Search Button--*/
/*--END SEARCH FUNCTIONALITY--*/





/*--NAVIGATION FUNCTIONALITY--*/
	if ($(window).width() > 481) {

		$('.navicon_button').click(function(event){

			if ( $('nav').hasClass('nav_open') ) { 
				 $('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '0' }, 500);
				 $(this).removeClass('open');
			}

			else { 
				$('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '-360px' }, 500);
				$(this).addClass('open');
			}

			$('nav').toggleClass('nav_open');

			event.stopPropagation();
	
		});

	}

	if ($(window).width() < 481) {

		$('.navicon_button').click(function(event){

			if ( $('nav').hasClass('nav_open') ) { 
				 $('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '0' }, 500);
				 $(this).removeClass('open');
			}
			else { 
				$('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '-95%' }, 500);
				$(this).addClass('open');			
			}

			$('nav').toggleClass('nav_open');

			event.stopPropagation();

		});

	}


	/*--Click outside the nav to close it--*/
		$(document).click(function(event){

			$('.homepage_content_container, .article_page_content_container').animate({ 'margin-left': '0' }, 500);

			if ( $('nav').hasClass('nav_open') ) {
				 $('nav').toggleClass('nav_open');
				 $('.navicon_button').toggleClass('open');
			}

			event.stopPropagation();

		});

		$('nav').click(function(event){

		 	event.stopPropagation();

		});
	/*--End click outside the nav to close it--*/
/*--END NAVIGATION FUNCTIONALITY--*/





/*--SHARE ARTICLE ICON HOMEPAGE THUMBS--*/
	$('.share_icon').click(function(){


		if ($(window).width() > 768) { 

			if ( $(this).parent().siblings().find('.social_media_share_menu_bg_closed').hasClass('social_media_share_menu_bg_open') ) {
				 $(this).find('.share_icon_blue').toggleClass('close_share_icon_blue');
				 $(this).parent().siblings().find('.social_media_share_menu_bg_closed').animate({ 'width': '0em' }, 500);
				 $(this).parent().siblings().find('.social_media_share_menu').animate({ 'margin-right': '-4.75em' }, 500);
			}

			else {
				$(this).find('.share_icon_blue').toggleClass('close_share_icon_blue');
				$(this).parent().siblings().find('.social_media_share_menu_bg_closed').animate({ 'width': '5.25em' }, 500);
				$(this).parent().siblings().find('.social_media_share_menu').animate({ 'margin-right': '0' }, 500);
			}

		}

		else {
			$(this).find('.share_icon_blue').toggleClass('close_share_icon_blue');
			$(this).parent().siblings().find('.social_media_share_menu_bg_closed').next('ul').slideToggle(); 
		}

		$(this).parent().siblings().find('.social_media_share_menu_bg_closed').toggleClass('social_media_share_menu_bg_open');

	});
/*--END SHARE ARTICLE ICON HOMEPAGE THUMBS--*/





/*--VIDEO ARTICLE HEADER VIDEO--
	$('.gp_video_button').click(function () {
	    $(this).toggle();
	    $('#JWPlayermediaplayer').height($('.video_container').height());
	    $('#JWPlayermediaplayer').width($('.video_container').width());
	    $('#JWPlayermediaplayer').show();
	    //$('.video_container').toggle();
	    $('.article_right_col').animate({ 'margin-top': '5em' }, 250);
        
        
	    
      player.playVideo();
	});

	$('.we_are_koch_video_play_button').click(function(){
		$(this).toggle();
        $('#JWPlayermediaplayer').height($('.video_container').height());
        $('#JWPlayermediaplayer').width($('.video_container').width());
        $('#JWPlayermediaplayer').show();
        //$('.video_container').toggle();
        jwplayer('JWPlayermediaplayer').play(true);		
		$('.article_right_col').animate({ 'margin-top': '5em' }, 250);
	});

	$('.video_close_icon').click(function(){
		//$('.video_container').toggle();
		//$('.video_article_play_button').toggle();
	    jwplayer('JWPlayermediaplayer').pause();
	    player.stopVideo();
	});

--END VIDEO ARTICLE HEADER VIDEO--*/





/*--HASH PAGE STATE--*/	
	$(window).on('hashchange',function(){ 
		if (document.location.hash === "#people") {
			
		}

		else if (document.location.hash === "#community") {
		 	
		}

		else if (document.location.hash === "#innovation") {
		 	
		}

		else if (document.location.hash === "#sustainability") {
			
		}

		else if (document.location.hash === "#most_recent") {
			
		}

	});
/*--END HASH PAGE STATE--*/





/*--FULLPAGE INTRO VIDEO--*/
  $('.fullpage_intro_video_overlay').fadeIn(500).removeClass('hidden');
  
  $(function(){
  
    $('.fullpage_intro_video_overlay').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  
    $(window).resize(function(){
      $('.fullpage_intro_video_overlay').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
  
  });
  
  
  if ( localStorage.getItem("fullpage_video_state") !== null ) {
    
      $('.fullpage_intro_video_overlay').remove();
  
  }
  
  
  $('body').on('click', '.skip_intro_video', function() {
  
      $('.fullpage_intro_video_overlay').remove();
  
      localStorage.setItem("fullpage_video_state", "played");
  
  });
/*--END FULLPAGE INTRO VIDEO--*/





/*--NEXT ARTICLE CTA--*/
	var scrollTrigger = false;
    console.log($(document).height()*.1);
    console.log($(document).height());

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= ($(document).height()*.75) && !scrollTrigger ) { // this refers to window
	        $('.next_article_cta_container').removeClass('hidden');
	        scrollTrigger = true;
	    }
	});

	$('.close_next_article_cta_container_icon').click(function(event){
		$('.next_article_cta_container').addClass('teased');
        event.stopPropagation();
	});

	$('.next_article_tease_button').click(function(event){
		$('.next_article_cta_container').removeClass('teased')
        event.stopPropagation();
	});
/*--END NEXT ARTICLE CTA--*/
////////////////////////////
////////////////////////////
/*--FEATURE VIDEO--*/
	function videoScaling() {
		if ( $(window).width() > 1024 ) {
			var videoIframeContainer = $('.full_screen_video_container .video'),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			videoRatioWidth = $(window).width() * .90,
			videoRatioHeight = videoRatioWidth / 1.77777;
			if ( windowHeight*.9 < videoRatioHeight ) {
				videoRatioHeight = $(window).height() *.90,
				videoRatioWidth = videoRatioHeight * 1.77777;
				videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
			}
			else {
				videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
			}

			$(window).resize(function() {
				var windowWidth = $(window).width(),
						windowHeight = $(window).height(),
						videoRatioWidth = $(window).width() * .90,
						videoRatioHeight = videoRatioWidth / 1.77777;

				if ( windowHeight*.9 < videoRatioHeight ) {
					var videoRatioHeight = $(window).height() *.90,
					videoRatioWidth = videoRatioHeight * 1.77777;
					videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
				else {
					videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
			});
		}
	} //end videoScaling 4:3

	function videoScalingWideShot() {
		if ( $(window).width() > 1024 ) {
			var videoIframeContainer = $('.full_screen_video_container .video'),
			videoRatioWidth = $(window).width() * .70,
			videoRatioHeight = videoRatioWidth / 2.7417;
			videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
			$(window).resize(function() {
				var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				videoRatioWidth = $(window).width() * .90,
				videoRatioHeight = videoRatioWidth / 2.7417;
				if ( windowHeight < videoRatioHeight ) {
					var videoRatioHeight = $(window).height() *.90,
					videoRatioWidth = videoRatioHeight * 2.7417;
                    videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
				else {
					videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
			});
		}
	}
    //end videoScaling Wide Format
    function videoScaling241() {
        $( ".video" ).addClass( "videoScaling241" );//for mobile breakpoint,class for padding 2.4:1
		if ( $(window).width() > 1024 ) {
			var videoIframeContainer = $('.full_screen_video_container .video'),
			videoRatioWidth = $(window).width() * .90,
			videoRatioHeight = videoRatioWidth / 2.4;
			videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
			$(window).resize(function() {
				var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				videoRatioWidth = $(window).width() * .90,
				videoRatioHeight = videoRatioWidth / 2.4;
				if ( windowHeight < videoRatioHeight ) {
					var videoRatioHeight = $(window).height() *.90,
					videoRatioWidth = videoRatioHeight * 2.4;
                    videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
				else {
					videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
				}
			});
		}
      }
    //end video scaling 2.4:1
	function fullScreenVideo() {
		var playButton = $('.fa_play_button'),
		playCTA = $('.play_cta'),
		textLinkPlay = $('.text_link_play');

		fullScreenVideoContainer = $('.full_screen_video_container'),
        fullScreenVideoContainer2 = $('.full_screen_video_container2'),
		videoIframeContainer = $('.full_screen_video_container .video'),
		videoIframe = $('.full_screen_video_container .video iframe'),
		closeButton = $('.full_screen_video_container .close_button');
        closeButton2 = $('.full_screen_video_container2 .close_button');

		playButton
			.add(playCTA)
			.add(textLinkPlay)
			.click( function(event) {
				var clicked = $(this);
              
				var videoID = $(this).attr("video-id");
                //new option of assined player-id for JWPlayer Custom Players  
                var playerID = $(this).attr("player-id");
                //new option of assigned video-url for JWPlayer source file
                var playerURL = $(this).attr("video-url");
              
                  if (playerURL !== undefined){
                    videoURL = playerURL;
                    videoDirectEmbed();
                    //console.log("full video url = "+videoURL);
                    //$.getScript('http://video.kochcreativegroupdev.com/players/LKo5M3aH-s4sNuXmz.js')
                        }  
                  else if (playerID !== undefined){
                    //alert(playerID+" is assigned")
                    videoPlaybackDevice();
                      }
                  else {
                    //if no custom player then assign the default playerID
                    playerID = "quhcId2B";
                    videoPlaybackDevice();
                    //alert(playerID)
                      };
              //////////////////////////I would like to find a better mobile solution///////////////////////
              function videoPlaybackDevice(){
              if(window.innerWidth <= 800 && window.innerHeight <= 736) {
                  videoURL = "http://video.kochcreativegroupdev.com/players/"+videoID+"-"+playerID+".html";
                  }
                 else {
                  videoURL = "http://video.kochcreativegroupdev.com/players/"+videoID+"-"+playerID+".html";
                  };
                iframeEmbed();
				};
                //end videoPlaybackDevice Function
              ////////////////////////////////////////////////////
              //////new function for embed////////////////////////
              ////////////////////////////////////////////////////
              function videoDirectEmbed(){
                fullScreenVideoContainer2.fadeToggle();
                //alert(videoURL);
                var aspect;
                if(clicked.hasClass('241')) {
                	aspect = '2.4:1';
                }else {
                	aspect = '16:9';
                }

                jwplayer("jwvid").setup({
                  file: videoURL,
                  aspectratio: aspect,
                  width:'80%'
                });

              };
              ///////////////////////////////////////////////////
              function iframeEmbed(){
				fullScreenVideoContainer.fadeToggle();
                videoIframe.attr('src', videoURL);
                videoIframe.attr('allowtransparency', 'true');
                };
              ///////////////////////////////////////////////////
				if ($(this).hasClass('wideShot') ) {
					videoScalingWideShot();
				}
                if ($(this).hasClass('241') ) {
					videoScaling241();
				}
				else {
					videoScaling();
				}

				event.stopPropagation();
			});

			closeButton
				.add(fullScreenVideoContainer)
				.click( function(event) {
					fullScreenVideoContainer.toggle();
					videoIframe.attr('src', '');
					event.stopPropagation();
                });
      
            closeButton2
				.add(fullScreenVideoContainer)
				.click( function(event) {
					fullScreenVideoContainer2.toggle();
					//videoIframe.attr('src', '');
                  jwplayer("jwvid").remove({file: videoURL});
					event.stopPropagation();
                });
		}
	fullScreenVideo();
/*--END FEATURE VIDEO--*/

//////////////////////
//////////////////////
	// function fullScreenVideo() {
	// 	var playButton = $('.fa_play_button'),
	// 		playCTA = $('.play_cta'),

	// 		fullScreenVideoContainer = $('.full_screen_video_container'),
	// 		videoIframeContainer = $('.full_screen_video_container .video'),
	// 		videoIframe = $('.full_screen_video_container .video iframe'),
	// 		closeButton = $('.full_screen_video_container .close_button');

	// 	playButton
	// 		.add(playCTA)
	// 		.click( function(event) {
	// 		var embedLink = $(this).attr("data-url");
	// 		var videoURL = embedLink+"?rel=0&controls=1&showinfo=0&autoplay=1&wmode=transparent";
			
	// 		fullScreenVideoContainer.toggle();
	// 		videoIframe.attr('src', videoURL);

	// 		if ($(this).hasClass('wideShot') ) {
	// 			videoScalingWideShot();
	// 		}
	// 		else {
	// 			videoScaling();
	// 		}

	// 		event.stopPropagation();
	// 	});

	// 	closeButton
	// 		.add(fullScreenVideoContainer)
	// 		.click( function(event) {
	// 		fullScreenVideoContainer.toggle();
	// 		videoIframe.attr('src', '');

	// 		event.stopPropagation();
	// 	});
	// }
	// fullScreenVideo();
//////////////////////
//////////////////////


//$(function(a){var b=jQuery.noConflict();b(window).scroll(function(a){var c=b(document).height(),d=b(window).height(),e=function(){return c-d},f=function(){return b(window).scrollTop()};if("max"in document.createElement("progress")){var g=b("progress");g.attr({max:e()}),b(document).on("scroll",function(){g.attr({value:f()})}),b(window).resize(function(){g.attr({max:e(),value:f()})})}else{var i,j,g=b(".progress-bar"),h=e(),k=function(){return i=f(),j=i/h*100,j+="%"},l=function(){g.css({width:k()})};b(document).on("scroll",l),b(window).on("resize",function(){h=e(),l()})}})});