$(document).ready(function() {
	var dia = "martes";
	var hora = 9;
	$("input").click(function(event) {
		var resp = $(this).val();
		if (dia.toLowerCase() == resp.toLowerCase()) {
			alert("ACERTASTE!!!!!");
		}
	});

	$("button").click(function(event) {
		var horaSel = $(this).text();
		if (hora == parseInt(horaSel)) {
			alert("Acertaste!!!!");
		};
	});
});