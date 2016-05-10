<?php
	require_once ("conexion.php");

	$login = mysqli_real_escape_string($conn, $_REQUEST['name']);
	$contrasena = mysqli_real_escape_string($conn, $_REQUEST['pass']);
	$contrasena = md5($contrasena);
      
	$buscar = "SELECT * FROM user WHERE user_name='$login'";
	$sql1 = mysqli_query($conn, $buscar);

	if ($sql1) {
		$datos = mysqli_num_rows($sql1);
		if ($datos == 1 ) {
		    echo '0';
		}else {
		    $sql2 = "INSERT INTO user(user_name, user_pass)VALUES('$login','$contrasena')";
	            if ($conn->query($sql2) === TRUE) {
   		        echo '1';
	            }
                }
        }   
?>						