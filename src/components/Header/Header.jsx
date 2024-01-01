import s from "./style.module.css";
import logo from "../../assets/img/logo.svg";
import { SelectTypo } from "../SelectTypo/SelectTypo";
import { useState } from "react";
import { SelectTheme } from "../SelectTheme/SelectTheme";

export function Header() {
  const [typo, setTypo] = useState("lora");

  function handleChange(e) {
    setTypo(e.target.value);

    switch (e.target.value) {
      case "inconsolata":
        document.body.style.fontFamily = "'Inconsolata', monospace";
        break;
      case "inter":
        document.body.style.fontFamily = "'Inter', sans-serif";
        break;
      case "lora":
        document.body.style.fontFamily = "'Lora', serif";
        break;
      default:
        document.body.style.fontFamily = "'Inter', sans-serif";
        break;
    }
  }

  return (
    <div className={s.nav_header}>
      <img src={logo} alt="logo" />

      <div className={s.selects}>
        <SelectTypo defaultValue={typo} onChange={handleChange} />
        <span>|</span>
        <SelectTheme />
      </div>
    </div>
  );
}
