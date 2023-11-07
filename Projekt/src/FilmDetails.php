<?php  
header("Access-Control-Allow-Origin: *");    
$servername = "localhost";      
$username = "root";      
$password = "";      
$dbname = "iuprojekt";   
  
$connection = new mysqli($servername, $username, $password, $dbname);      
  
if ($connection->connect_error) {      
  die("Verbindung fehlgeschlagen: " . $connection->connect_error);      
}    
  
$filmId = isset($_GET['id']) ? $_GET['id'] : 1; 
      
$stmt = $connection->prepare("SELECT id, name, releaseYear, director, duration, description FROM film WHERE id = ?");  
$stmt->bind_param("i",$filmId);
$stmt->execute();

$resultFilm = $stmt->get_result();  
$data = [];
    
if ($resultFilm->num_rows > 0) {      
  while($rowFilm = $resultFilm->fetch_assoc()) {      
    $sqlRating = "SELECT comment, rating FROM rating WHERE filmId = " . $rowFilm['id'];     
    $resultRating = $connection->query($sqlRating);    
    $ratings = [];    
    if ($resultRating->num_rows > 0) {    
      while($rowRating = $resultRating->fetch_assoc()) {    
        $ratings[] = $rowRating;    
      }    
    }    
    $rowFilm['ratings'] = $ratings;    
    $data[] = $rowFilm;     
  }      
}    
    
header('Content-Type: application/json');    
echo json_encode($data);    
$connection->close();    
?>  
