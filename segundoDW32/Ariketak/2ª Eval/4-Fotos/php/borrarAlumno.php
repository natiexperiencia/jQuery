<?php
include 'conexion.php';

$id = $_POST['id'];

$stmt = $pdo->query("DELETE FROM personajes WHERE id=$id");
if ($stmt->execute()) {
	echo "ok";
}else {
	echo "noOk";
}
?>