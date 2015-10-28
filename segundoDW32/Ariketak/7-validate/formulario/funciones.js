$(document).ready(function() {
	$('#textarea').focus(function(event) {
		$(this).css('backgroundColor', 'lightblue');
	});
	$('#textarea').focusout(function(event) {
		$(this).css('backgroundColor', 'white');
	});
});