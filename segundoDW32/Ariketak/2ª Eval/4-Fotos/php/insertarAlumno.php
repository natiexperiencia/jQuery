<?php
include 'conexion.php';

$nombre = $_POST['nombre'];
$imagen = $_POST['imagen'];

$stmt = $pdo->query("INSERT INTO personajes(nombre,imagen) VALUES('$nombre','$imagen')");
if ($stmt->execute()) {
	echo "ok";
}else {
	echo "noOk";
}
?>