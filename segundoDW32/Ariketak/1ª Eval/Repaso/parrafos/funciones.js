$(document).ready(function() {
	/*
	*	Ejercicio 1
	*/
	$('#12').click(function(event) {
		$('#parrafo').removeClass();
		$('#parrafo').addClass('parrafo');
	});
	$('#14').click(function(event) {
		$('#parrafo').removeClass();
		$('#parrafo').addClass('parrafo_14');;
	});
	$('#16').click(function(event) {
		$('#parrafo').removeClass();
		$('#parrafo').addClass('parrafo_16');
	});

	/*
	*	Ejercicio 2 y 3
	*/
	$('#parrafo2').mouseenter(function(event) {
		$(this).addClass('parrafo_fondo_gris');
	});
	$('#parrafo2').mouseleave(function(event) {
		$(this).removeClass('parrafo_fondo_gris');
	});

	/*
	*	Ejercicio 4
	*/
	$(document).mousemove(function(event){
    	$('#coordenadas').text(event.pageX + ", " + event.pageY);
  	});
});