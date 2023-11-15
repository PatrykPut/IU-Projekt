import { Navbar } from "./Header/Navbar";
import { Header } from "./Header/Header";
import { CardDeck } from "./HomePage/CardDeck";
import { FilmProvider } from "./Context/FilmContext";
import { FilmDetails } from "./FilmDetails/FilmDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
  
function App() { 
  
  return ( 
    <Router>  
      <FilmProvider>    
        <Header/>
        <Routes>  
          <Route path="/" element={
          <>
          <Navbar/>
          <CardDeck/>
          </>
          } />  
          <Route path="/:id" element={<FilmDetails/>} />  
        </Routes>  
      </FilmProvider>  
    </Router>  
  );  
}  

export default App;