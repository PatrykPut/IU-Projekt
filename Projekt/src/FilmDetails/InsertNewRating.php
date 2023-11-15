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

    $comment = $data['comment'];
    $rating = $data['rating'];
    $filmId = $data['filmId'];

    $stmt = $connection->prepare("INSERT INTO rating (comment, rating, filmId) VALUES (?, ?, ?)");

    $stmt->bind_param('sii' ,$comment, $rating, $filmId);

    $stmt->execute();
}
?>