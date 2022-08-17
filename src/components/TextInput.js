import style from "./textStyle.module.css";
import { useState } from "react";

const TextInput = function ({ type = "text", label, HandlerFunction }) {
  const [value, setValue] = useState("");
  function changeHandler(e) {
    setValue(e.target.value);

    setValue((state) => {
      HandlerFunction(state);

      return state;
    });
  }

  return (
    <div className={style.inputCountainer}>
      <input value={value} type={type} onChange={changeHandler}></input>
      <label className={value && style.filled} htmlFor={"name"}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
