<?php
include 'conexion.php';

$descripcion = $_POST['descripcion'];
$precioDolar = $_POST['precioDolar'];
$precioDolarD = $_POST['precioDolarD'];
$precioEuro = $_POST['precioEuro'];
$precioEuroD = $_POST['precioEuroD'];
$precioLibra = $_POST['precioLibra'];
$precioLibraD = $_POST['precioLibraD'];

$precioDolarF = floatval($precioDolar .".". $precioDolarD);
$precioEuroF = floatval($precioEuro .".". $precioEuroD);
$precioLibraF = floatval($precioLibra .".". $precioLibraD);


$stmt = $pdo->prepare ("INSERT INTO articulos(descripcion,dolares,euros,libras) VALUES('$descripcion',$precioDolarF,$precioEuroF,$precioLibraF)");
if ($stmt->execute()) {
	echo "ok";
}else {
	echo "noOk";
}

?>