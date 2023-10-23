<?php  
header("Access-Control-Allow-Origin: *");
$servername = "localhost";  
$username = "root";  
$password = "mypass";  
$dbname = "iuprojekt";  
    
$connection = new mysqli($servername, $username, $password, $dbname);  
   
if ($connection->connect_error) {  
  die("Verbindung fehlgeschlagen: " . $connection->connect_error);  
}  
  
$sql = "SELECT id, name, releaseYear, director, duration, description FROM film";  
$result = $connection->query($sql);  
 
$data = [];
if ($result->num_rows > 0) {  
    
  while($row = $result->fetch_assoc()) {  
    $data[] = $row; 
  }  
} else {  
  echo json_encode(["message" => "0 Ergebnisse"]);  
}  

header('Content-Type: application/json');
echo json_encode($data);
$connection->close();  
?> 
