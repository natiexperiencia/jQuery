<?php
	$pdo = new PDO('mysql:host=localhost;dbname=precios','root','nati666000');
	$statement = $pdo->query('SELECT * FROM articulos');
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
?>