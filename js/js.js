$(document).ready(function () {
	var NavBar = $('#navbar');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 250)
			NavBar.css({"position": "fixed"})
		else
			NavBar.css({"position": "static"})
	});
});