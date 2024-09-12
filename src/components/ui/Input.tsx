import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="border border-gray-300 shadow-md
   focus:outline-none
  focus:ring-2 focus:ring-indigo-500
  rounded-lg px-3 py-3
  "
    />
  );
};

export default Input;
