import { FC, ReactElement } from "react";
import "app/styles/elements/buttonPage.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }): ReactElement => {
  const handleBackHome = () => {
    window.scroll(0, 0);
  };
  return (
    <button onClick={handleBackHome} {...props}>
      {children}
    </button>
  );
};

export default Button;
