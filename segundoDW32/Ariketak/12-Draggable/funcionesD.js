$(document).ready(function() {
	$( "#draggable1" ).draggable({ containment: "#container1", delay:1000});
	$( "#draggable2" ).draggable({ containment: "#container2", 
									distance:500, 
									stop: function(event, ui) { alert("Ha finalizado el arrastre") } 
								});
	$( "#draggable3" ).draggable({ containment: "#container3", 
									drag: function(event, ui) { $('#draggable3').css('border', '5px solid black'); },
									stop: function(event, ui) { $('#draggable3').css('border', 'none'); },
									cursor: "crosshair",
									cursorAt: { top: 56, left: 56 }
								});
});