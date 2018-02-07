$(document).ready(function () {
	var NavBar = $('#navbar');

	$(window).scroll(function () {
		var firstDivHeight = $('#first-div').height();
		if ($(window).scrollTop() > firstDivHeight && NavBar.css("position") == "static") {
			NavBar.css({"position": "fixed"});
			$('.content').css({"padding-top": NavBar.height() + 'px'});
		}
		else if ($(window).scrollTop() <= firstDivHeight && NavBar.css("position") == "fixed") {
			NavBar.css({"position": "static"})
			$('.content').css({"padding-top": "0"});
		}
	});
});