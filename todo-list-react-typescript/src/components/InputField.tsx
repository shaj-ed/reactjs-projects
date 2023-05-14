import { ChangeEvent } from "react";

type InputTypes = {
  htmlFor: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  htmlFor,
  type,
  value,
  placeholder,
  onChange,
}: InputTypes) => {
  return (
    <label htmlFor={htmlFor}>
      <input
        className="py-2 px-4 focus:outline-slate-600 font-medium"
        type={type}
        id={htmlFor}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        autoFocus
      />
    </label>
  );
};

export default InputField;
