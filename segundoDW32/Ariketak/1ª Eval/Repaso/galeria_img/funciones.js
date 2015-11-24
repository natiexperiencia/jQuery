var foto = 1;
function siguiente () {
	if (foto == 8) {
		document.getElementById('galeria').src="galeria/1.jpg";
		foto = 1;
	}else{
		foto += 1;
		document.getElementById('galeria').src="galeria/"+foto+".jpg";
	}
}

function anterior () {
	if (foto == 1) {
		document.getElementById('galeria').src="galeria/8.jpg";
		foto = 8;
	}else{
		foto -= 1;
		document.getElementById('galeria').src="galeria/"+foto+".jpg";
	}
}

function encima (boton) {
	boton.style.backgroundColor = "red";
	boton.style.color="white";
}

function fuera (boton) {
	boton.style.backgroundColor="buttonface";
	boton.style.color="black";
}

//evitar seleccion de texto
window.onload = function()
{
     document.onselectstart = function()
     {
          return false;
     } 
// Firefox
     document.onmousedown = function()
     {
          return false;
     }
}