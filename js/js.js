$(document).ready(function () {
	var NavBar = $('#navbar');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 250 && NavBar.css("position") == "static")
			NavBar.css({"position": "fixed"})
		else if ($(window).scrollTop() <= 250 && NavBar.css("position") == "fixed")
			NavBar.css({"position": "static"})
	});
});