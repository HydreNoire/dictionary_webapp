export function Informations({ data }) {
  // console.log(data);
  const meanings = data.meanings;
  console.log(meanings);
  return (
    <div>
      <div>
        <h1>{data.word}</h1>
        <span>{data.phonetic}</span>
      </div>
    </div>
  );
}
