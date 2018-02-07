$(document).ready(function () {
	var NavBar = $('#navbar');

	$(window).scroll(function () {
		var firstDivHeight = $('#first-div').height();
		if ($(window).scrollTop() > firstDivHeight && NavBar.css("position") == "static")
			NavBar.css({"position": "fixed"})
		else if ($(window).scrollTop() <= firstDivHeight && NavBar.css("position") == "fixed")
			NavBar.css({"position": "static"})
	});
});