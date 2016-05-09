<?php
	require_once ("conexion.php");

	$user = mysqli_real_escape_string($conn, $_GET['user']);
	$tiempo = mysqli_real_escape_string($conn, $_GET['tiempo']);


	$sql = "INSERT INTO partida(partida_user_nik, partida_score)VALUES('$user','$tiempo')";
	if ($conn->query($sql) === TRUE) {
   		echo "1";
	} else {
   		echo "0";
	}
?>