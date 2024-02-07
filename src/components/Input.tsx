import { ReactSet } from "../types/utils";

type InputType = {
  type: "text" | "checkbox";
  inputValue: string;
  setInputValue: ReactSet<string>;
};

const Input = ({ type, inputValue, setInputValue }: InputType) => {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="border rounded w-full p-2"
      type={type}
    />
  );
};

export default Input;
