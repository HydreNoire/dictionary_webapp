import iconPlay from "../../assets/img/icon-play.svg";
import viewIcon from "../../assets/img/icon-new-window.svg";
import s from "./style.module.css";

export function Informations({ data }) {
  var audio = new Audio(data.phonetics[data.phonetics.length - 1].audio);
  // console.log(audio.src);

  return (
    <div>
      <div className={s.header_word}>
        <div>
          <h1>{data.word}</h1>
          <span>{data.phonetic}</span>
        </div>
        <button
          className={s.btn_audio}
          onClick={() =>
            audio.src.includes("dictionaryapi") ? audio.play() : ""
          }
        >
          <img src={iconPlay} alt="logo play" />
        </button>
      </div>

      {data.meanings.map((word) => {
        return (
          <div className={s.word_infos} key={word.partOfSpeech}>
            <div className={s.word_type}>
              <h2>{word.partOfSpeech}</h2>
              <hr />
            </div>

            <h3>Meaning</h3>
            {word.definitions.map((def) => {
              return (
                <>
                  <li
                    className={s.def_item}
                    key={Math.floor(Math.random() * 100)}
                  >
                    {def.definition}
                  </li>
                  {def.example && (
                    <p className={s.word_example}>"{def.example}"</p>
                  )}
                </>
              );
            })}

            {word.synonyms.length > 0 && (
              <p className={s.word_synonyms}>
                Synonyms
                <span className={s.def_synonym}>
                  {" "}
                  {word.synonyms.join(",")}
                </span>
              </p>
            )}
          </div>
        );
      })}

      <hr className={s.end} />

      <div className={s.word_source}>
        <p>
          {" "}
          <span>Source</span>
          <a href={data.sourceUrls}>
            {data.sourceUrls}
            <img
              src={viewIcon}
              alt="icon view"
              target="_blank"
              rel="noreferrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
