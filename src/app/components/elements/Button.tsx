import { FC, ReactElement } from "react";
import btnBack from "public/images/button/Back.png";
import btnNext from "public/images/button/Next.png";
import "app/styles/elements/Button.css";

type ButtonType = {
  title: string;
};

const Button: FC<ButtonType> = ({ title }: ButtonType): ReactElement => {
  return (
    <button>
      {title === "Back" && <img src={btnBack} alt="" />}
      <label>{title}</label>
      {title === "Next" && <img src={btnNext} alt="" />}
    </button>
  );
};

export default Button;
