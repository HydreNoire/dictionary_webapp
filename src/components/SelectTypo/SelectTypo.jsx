import s from "./style.module.css";

export function SelectTypo({ defaultValue, onChange }) {
  return (
    <div className={s.container}>
      <select
        value={defaultValue}
        onChange={onChange}
        className={s.selector_typo}
      >
        <option value="lora">Serif</option>
        <option value="inter">Sans serif</option>
        <option value="inconsolata">Monospace</option>
      </select>
    </div>
  );
}
