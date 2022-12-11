import { ChangeEvent, useState } from "react";


export const PatternTextField = (initialValue:string) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
      
}

