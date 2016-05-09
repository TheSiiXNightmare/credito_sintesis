<?php
	require_once ("conexion.php");

	$contrasena = mysqli_real_escape_string($conn, $_GET['pass']);
	$contrasena = md5($contrasena);
	$user = mysqli_real_escape_string($conn, $_GET['user']);
      
                $buscar = "SELECT * FROM user WHERE user_name='$user'";
	        $sql1 = mysqli_query($conn, $buscar);

	        if ($sql1) {
		        $datos = mysqli_num_rows($sql1);
		        if ($datos == 1 ) {
		        	echo '2';
		        }else {
		        	$sql2 = "INSERT INTO user(user_name, user_pass)VALUES('$user','$contrasena')";
	                        if ($conn->query($sql2) === TRUE) {
   		                     echo "1";
                                     header('Location: http://thesiixnightmare.esy.es/index.html');
	                        } else {
   		                     echo "0";
	                        }
		        }
	        }
        
?>					