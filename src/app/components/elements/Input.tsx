import { FC, ReactElement } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input: FC<InputProps> = ({ children, ...props }): ReactElement => {
  return <input {...props} />;
};

export default Input;
