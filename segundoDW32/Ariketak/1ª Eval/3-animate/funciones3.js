$(document).ready(function() {
	$('#imagen').click(function(event) {
		$(this).animate({
			'width':'60%',
			'borderWidth':'3px',
			'marginLeft':'150px',
			'borderColor': '#f37736'
		}, 3000);
		$('h1').animate({
			'backgroundColor':'blue',
			'marginLeft':'150px',
			'color':'red'
		}, 2000);

	});
});