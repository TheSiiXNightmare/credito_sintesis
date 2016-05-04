<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "credito_sintesis";

	$conn = new mysql_connect($servername, $username, $password,) or die("Error al conectar con el servidor");
	$base = mysql_select_db($dbName) or die("Error al conectar con la base de datos");
?>