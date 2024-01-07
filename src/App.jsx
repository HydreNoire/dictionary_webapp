import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { dictionnaryAPI } from "./api/dico";
import { Informations } from "./components/Informations/Informations";

function App() {
  const [word, setWord] = useState();

  async function fetchWord() {
    try {
      const wordToRetrieve = await dictionnaryAPI.fetchWordToRetrieve(
        "keyboard"
      );

      if (wordToRetrieve.length > 0) {
        setWord(wordToRetrieve[0]);
      }
    } catch (e) {
      alert("An error occurred while retrieving the word.");
    }
  }

  async function searchWord(word) {
    try {
      const searchResponse = await dictionnaryAPI.fetchWordToRetrieve(word);
      if (searchResponse.length > 0) {
        setWord(searchResponse[0]);
      } else {
        alert(
          "We can't find the word, you maybe misspell it or it doesn't exist."
        );
      }
    } catch (e) {
      alert("An error occurred while searching for the word.");
    }
  }

  useEffect(() => {
    fetchWord(word);
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar onSubmit={searchWord} />
      {word && <Informations data={word} />}
    </div>
  );
}

export default App;
