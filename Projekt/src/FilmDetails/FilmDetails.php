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
      
$stmt = $connection->prepare("SELECT id, name, releaseYear, director, duration, movieposter, description FROM film WHERE id = ?");  
$stmt->bind_param("i",$filmId);
$stmt->execute();

$resultFilm = $stmt->get_result();  
$data = [];
    
if ($resultFilm->num_rows > 0) {      
  while($rowFilm = $resultFilm->fetch_assoc()) {   
    $rowFilm['movieposter'] = base64_encode($rowFilm['movieposter']);
    $sqlRating = "SELECT id, comment, rating FROM rating WHERE filmId = " . $rowFilm['id'];     
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
error_log("Data before encoding: " . print_r($data, true));
echo json_encode($data);    
$connection->close();    
?>  
