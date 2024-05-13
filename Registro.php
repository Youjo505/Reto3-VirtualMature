<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmPassword']) && isset($_POST['edad']) && isset($_POST['telefono'])) {
        
 
        if ($_POST['password'] === $_POST['confirmPassword']) {

            $nombre = $_POST['nombre'];
            $email = $_POST['email'];
            $contraseña = $_POST['password'];
            $confirmPassword = $_POST['confirmPassword'];
            $edad = $_POST['edad'];
            $telefono = $_POST['telefono'];


            $servername = "127.0.0.1"; 
            $username = "root"; 
            $password = ""; 
            $dbname = "registro"; 


            $conn = new mysqli($servername, $username, $password, $dbname);


            if ($conn->connect_error) {
                die("La conexión falló: " . $conn->connect_error);
            }


            $sql = "INSERT INTO registro (Nombre, Email, Contraseña, Confirmar_Contraseña, Edad, Telefono) VALUES ('$nombre', '$email', '$contraseña', '$confirmPassword', '$edad', '$telefono')";


            if ($conn->query($sql) === TRUE) {
                echo "¡Registro exitoso!";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }


            $conn->close();
        } else {
            echo "Las contraseñas no coinciden.";
        }
    } else {
        echo "Todos los campos son obligatorios.";
    }
}
?>


