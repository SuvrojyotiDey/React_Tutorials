import { useState } from "react";

const HookUseInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value: value,
    type: "password",
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default HookUseInput;
