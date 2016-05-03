<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "credito_sintesis";

	//conexion
	$conn = new mysqli($servername, $username, $password, $dbName);
	//comprobar conexion
	if (!$conn) {die("Connection Failed. ". mysqli_connect_error());}

	//consulta
	$sql = "SELECT user_name, user_pass FROM user";
	$resultados = mysqli_query($sql);

	if (mysqli_num_rows(&result) > 0) {
		while ($row = mysqli_fetch_assoc($resultados)) {
			echo "Nombre de usuario: ".$row['user_name']." / Contraseña: ".$row['user_pass']."<br>";
		}
	}
?>