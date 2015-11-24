function sumar() {
	valor = document.getElementById('parrafo').innerHTML;
	valor = parseInt(valor);
	valor += 5;
	document.getElementById('parrafo').innerHTML = valor;
}

function reset () {
	document.getElementById('parrafo').innerHTML = 5;
}

function ano () {
	var fecha = new  Date();
	var ano = fecha.getFullYear();
	document.getElementById('digito1').src="numeros/"+ano.toString().charAt(0)+".png";
	document.getElementById('digito2').src="numeros/"+ano.toString().charAt(1)+".png";
	document.getElementById('digito3').src="numeros/"+ano.toString().charAt(2)+".png";
	document.getElementById('digito4').src="numeros/"+ano.toString().charAt(3)+".png";	
}

$(document).ready(function() {
	$('#digito1').draggable();
	$('#digito2').draggable();
	$('#digito3').draggable();
	$('#digito4').draggable();
});

