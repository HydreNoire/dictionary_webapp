export class dictionnaryAPI {
    static async fetchWordToRetrieve(wordSearch) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`);
        const word = await response.json();

        return word;
    }
}