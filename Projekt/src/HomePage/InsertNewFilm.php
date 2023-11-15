<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");  
$servername = "localhost";      
$username = "root";      
$password = "";      
$dbname = "iuprojekt";   
  
$connection = new mysqli($servername, $username, $password, $dbname); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $json = file_get_contents('php://input');

    $data = json_decode($json, true);

    $name = $data['name'];
    $releaseYear = $data['releaseYear'];
    $director = $data['director'];
    $duration = $data['duration'];
    $description = $data['description'];

    $stmt = $connection->prepare("INSERT INTO film (name, releaseYear, director, duration, description) VALUES (?, ?, ?, ?, ?)");

    $stmt->bind_param('sssis', $name, $releaseYear, $director, $duration, $description); //sssis steht für den Datentyp der variablen

    $stmt->execute();
}
?>