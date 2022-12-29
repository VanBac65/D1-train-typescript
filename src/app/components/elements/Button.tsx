import { FC, ReactElement } from "react";
import "app/styles/elements/Button.css";

type ButtonType = {
  title: string;
  icon?: string;
};

const Button: FC<ButtonType> = ({ title, icon }: ButtonType): ReactElement => {
  return (
    <a href="/">
      <button>
        {title === "Back" && <img src={icon} alt="" />}
        <label>{title}</label>
        {title === "Next" && <img src={icon} alt="" />}
      </button>
    </a>
  );
};

export default Button;
