import { FC, ReactElement } from "react";
import "app/styles/elements/buttonPage.css";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }): ReactElement => {
  return <button {...props}>{children}</button>;
};

export default Button;
