export function SelectTypo({ defaultValue, onChange }) {
  return (
    <div>
      <select value={defaultValue} onChange={onChange}>
        <option value="lora">Serif</option>
        <option value="inter">Sans serif</option>
        <option value="inconsolata">Monospace</option>
      </select>
    </div>
  );
}
