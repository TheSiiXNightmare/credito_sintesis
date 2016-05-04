<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "credito_sintesis";

	$conn = new mysql_connect($servername, $username, $password, $dbName);
	
	if (!$conn) {die("Connection Failed. ". mysqli_connect_error());}
?>localhost/TheSiiXNightmare/ItemsData.phplocalhost/TheSiiXNightmare/ItemsData.php