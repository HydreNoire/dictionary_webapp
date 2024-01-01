import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { dictionnaryAPI } from "./api/dico";
import { Informations } from "./components/Informations/Informations";

function App() {
  const [word, setWord] = useState("keyboard");

  async function fetchWord() {
    try {
      const wordToRetrieve = await dictionnaryAPI.fetchWordToRetrieve(word);

      if (wordToRetrieve.length > 0) {
        setWord(wordToRetrieve[0]);
      }
    } catch (e) {
      alert("An error occurred while retrieving the word.");
    }
  }

  useEffect(() => {
    fetchWord(word);
  }, []);

  return (
    <div className="App">
      <Header />
      {word && <SearchBar value={word} />}
      <Informations data={word} />
    </div>
  );
}

export default App;
