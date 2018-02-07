$(document).ready(function () {
	var NavBar = $('#navbar');
	var Content= $('.content');

	$(window).scroll(function () {
		var firstDivHeight = $('#first-div').height();
		var navBarHeight = NavBar.height() + 'px';
		if ($(window).scrollTop() > firstDivHeight && NavBar.css("position") == "static") {
			NavBar.css({"position": "fixed"});
			Content.css({"padding-top": navBarHeight});
		}
		else if ($(window).scrollTop() <= firstDivHeight && NavBar.css("position") == "fixed") {
			NavBar.css({"position": "static"})
			Content.css({"padding-top": "0"});
		}
	});
});