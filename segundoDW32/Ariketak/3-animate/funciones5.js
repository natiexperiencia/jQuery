$(document).ready(function() {

	$('#stop').click(function(event) {
		$('#cuadrado').stop();
		$('#cuadrado').slideUp(400,function(){
			$('#cuadrado').css({
			backgroundColor: 'red',
			marginLeft: '650px',
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
						marginLeft: '650px'
					});//css
				});//slideUp
			});//animate
		});//slideDown
	});
});