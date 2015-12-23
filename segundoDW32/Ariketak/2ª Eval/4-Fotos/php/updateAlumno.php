<?php
include 'conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$imagen = $_POST['imagen'];

$stmt = $pdo->query("UPDATE personajes SET nombre='$nombre', imagen='$imagen' WHERE id=$id");
if ($stmt->execute()) {
	echo "ok";
}else {
	echo "noOk";
}
?>