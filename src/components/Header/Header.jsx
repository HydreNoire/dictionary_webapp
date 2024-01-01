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
        document.body.style.fontFamily = "Inconsolata";
        break;
      case "inter":
        document.body.style.fontFamily = "Inter";
        break;
      case "lora":
        document.body.style.fontFamily = "Lora";
        break;
      default:
        document.body.style.fontFamily = "Lora";
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
