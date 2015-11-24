$(document).ready(function() {
	capaFx = new Fx.Tween("cubo",{
		property:"width",
		duration:4000,
		fps:50,
		transition:"elastic:out",
	});

	$('#cubo').click(function(event) {
		capaFx.start("800");
	});

	$('#toggle').click(function(event) {
		$(this).effect("highlight",{color:"#669966"},3000);
	});
	$('#toggle').draggable();
	$('#arrastra').draggable();

	/*$('#toggle').click(function() {
 		$("#toggle").toggle("highlight");
	});*/

$( '#efecto' ).tween({
   borderRadius:{
      start: 0,
      stop: 20,
      time: 0,
      duration: 2,
      units: 'px',
      effect:'easeInOut'
   },
   borderRadiusTopLeft:{
      start: 0,
      stop: 50,
      time: 0,
      duration: 2,
      units: 'px',
      effect:'easeInOut'
   }
});
 
$.play();
});