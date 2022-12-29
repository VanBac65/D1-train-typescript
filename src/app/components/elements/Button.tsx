import { FC, ReactElement } from "react";
import "app/styles/elements/Button.css";

type ButtonType = {
  title: string;
  icon?: string;
};

type ButtonProps = {
  item: ButtonType;
};

const Button: FC<ButtonProps> = ({ item }): ReactElement => {
  return (
    <a href="/">
      <button>
        {item.title === "Back" && <img src={item.icon} alt="" />}
        <label>{item.title}</label>
        {item.title === "Next" && <img src={item.icon} alt="" />}
      </button>
    </a>
  );
};

export default Button;
