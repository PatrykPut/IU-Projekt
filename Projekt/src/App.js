import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { CardDeck } from "./CardDeck";
import { FilmProvider } from "./Context/FilmContext";
import { FilmDetails } from "./FilmDetails/FilmDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
  
function App() {  
  return (  
    <Router>  
      <FilmProvider>    
        <Header/>  
        <Navbar/>  
        <Routes>  
          <Route path="/" element={<CardDeck/>} />  
          <Route path="/:id" element={<FilmDetails/>} />  
        </Routes>  
      </FilmProvider>  
    </Router>  
  );  
}  

export default App;