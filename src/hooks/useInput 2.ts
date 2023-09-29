import {  useState } from "react";

function useInput(): [string, (newValue: string) => void] {
  const [value, setValue] = useState<string>("");
  const onChange = (newValue:string) => {
    setValue(newValue);
  };
  return [value, onChange];
}

export default useInput;
