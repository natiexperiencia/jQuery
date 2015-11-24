function mostrarHora () {
	var fecha = new Date();
	horas = fecha.getHours();
	minutos= fecha.getMinutes();
	segundos=fecha.getSeconds();
	if (horas < 10) {
		document.getElementById('hora').src="numeros/0.png";
		document.getElementById('hora2').src="numeros/"+horas+".png";
	}else{
		document.getElementById('hora').src="numeros/"+horas.toString().charAt(0)+".png";
		document.getElementById('hora2').src="numeros/"+horas.toString().charAt(1)+".png";
	};
	if (minutos < 10) {
		document.getElementById('minuto').src="numeros/0.png";
		document.getElementById('minuto2').src="numeros/"+minutos+".png";
	}else{
		document.getElementById('minuto').src="numeros/"+minutos.toString().charAt(0)+".png";
		document.getElementById('minuto2').src="numeros/"+minutos.toString().charAt(1)+".png";
	};
	if (segundos < 10) {
		document.getElementById('segundo').src="numeros/0.png";
		document.getElementById('segundo2').src="numeros/"+segundos+".png";
	}else{
		document.getElementById('segundo').src="numeros/"+segundos.toString().charAt(0)+".png";
		document.getElementById('segundo2').src="numeros/"+segundos.toString().charAt(1)+".png";
	};
}

setInterval(function(){ mostrarHora(); }, 1000);