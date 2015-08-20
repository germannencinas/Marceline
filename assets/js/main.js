//Infinite Scroll
var page = 2;
var url_blog = window.location;
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $.get((url_blog +'/page/'+page),
	  	function(content) {
	        if(page <= max_pages){
	        	$('.container').append($(content).children(".post").fadeIn(1400));
		        page = page + 1;
		    }
		});
    }
});

$(function() {
	var backgroundheight = 8000;
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var hourpercent = hour / 24 * 100;
	var minutepercent = minute / 60 / 24 * 100;
	var percentofday = Math.round(hourpercent + minutepercent);

	var offset = backgroundheight / 100 * percentofday;

	var offset = offset - (backgroundheight / 4);

	function scrollbackground() {
   		offset = (offset < 1) ? offset + (backgroundheight - 1) : offset - 1;
   		$('.masthead').css("background-position", "50% " + offset + "px");
   		setTimeout(function() {
			scrollbackground();
			}, 50
		);
   	}
	scrollbackground();
});

