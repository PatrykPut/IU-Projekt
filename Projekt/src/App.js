import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { CardDeck } from "./CardDeck";
import { FilmProvider } from "./FilmContext";
import { Survey } from "./Survey";

function App() {

  return (
    <FilmProvider>
    <Survey/>
    <Header/>
    <Navbar/>
    <CardDeck/>
    </FilmProvider>
  );
}

export default App;