import s from "./style.module.css";
import moonIcon from "../../assets/img/icon-moon.svg";

export function SelectTheme() {
  return (
    <>
      <label className={s.switch}>
        <input type="checkbox" />
        <span></span>
      </label>
      <img src={moonIcon} alt="theme icon" />
    </>
  );
}
