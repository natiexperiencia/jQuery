$(document).ready(function() {
	/*$('#start').click(function(event) {
		$('#cuadrado').slideDown(4000);
		$('#cuadrado').animate({
			marginLeft:'-=200px',
			backgroundColor:'blue'
		}, 4000);
		$('#cuadrado').slideUp(4000);
		$('#cuadrado').css({
			backgroundColor: 'red',
			marginLeft: '550px'
		});
	});*/

	$('#stop').click(function(event) {
		$('#cuadrado').stop();
		$('#cuadrado').slideUp(400,function(){
			$('#cuadrado').css({
			backgroundColor: 'red',
			marginLeft: '550px',
			});
		});
	});

	$('#start').click(function(event) {
		$('#cuadrado').slideDown(4000, function() {
			$('#cuadrado').animate({
				marginLeft:'-=200px',
				backgroundColor:'blue'},
				4000, function() {
				$('#cuadrado').slideUp(4000,function(){
					$('#cuadrado').css({
						backgroundColor: 'red',
						marginLeft: '550px'
					});
				});
			});
		});
	});
});