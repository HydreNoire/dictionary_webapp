import { useEffect, useState } from "react";
import s from "./style.module.css";

export function SelectTheme() {
  const [isChecked, setIsChecked] = useState(false);
  console.log("Dans le selectheme ", isChecked);

  function handleTheme() {
    if (isChecked) {
      return setIsChecked(false);
    } else {
      return setIsChecked(true);
    }
  }

  return (
    <>
      <label className={s.switch} onChange={handleTheme}>
        <input type="checkbox" />
        <span></span>
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={isChecked ? "#a745ef" : "#838383"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </>
  );
}
