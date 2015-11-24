var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(extraerTexto);
  x=$("#boton2");
  x.click(modificarTexto);
  x=$("#boton3");
  x.click(modificarDatosTabla);
  x=$("#reset");
  x.click(resetear);
}
function extraerTexto()
{
  var x=$("#parrafo1");
  alert(x.text());
}
function modificarTexto()
{
  var x=$("#parrafo1");
  x.text("Nuevo texto del párrafo");
}
function modificarDatosTabla()
{
  var x=$("td");
  x.text("texto nuevo");
}
function resetear ()
{
  $("#parrafo1").text("Texto del párrafo");
  $("td:first").text("Celda 1,1").next().text("Celda 1,2").next().text("Celda 2,1").next().text("Celda 2,2");

}
