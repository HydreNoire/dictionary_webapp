export function Informations({ data }) {
  console.log(data);
  return (
    <div>
      <div>
        <h1>{data.word}</h1>
        <span>{data.phonetic}</span>
      </div>
    </div>
  );
}
