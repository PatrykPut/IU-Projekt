import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { CardDeck } from "./CardDeck";
import { FilmProvider } from "./FilmContext";

function App() {

  return (
    <FilmProvider>
    <Header/>
    <Navbar/>
    <CardDeck/>
    </FilmProvider>
  );
}

export default App;