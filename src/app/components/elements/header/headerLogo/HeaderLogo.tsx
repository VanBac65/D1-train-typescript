import { ReactElement } from "react";
import theBoxText from "../../../../../public/images/header/TheBox.png"
import logoImage from "../../../../../public/images/header/Random Symboles 3.png"
import "./HeaderLogo.css"

export const HeaderLogo = (): ReactElement => {
  return (
    <div className="header-logo">
      <img src={logoImage} alt="" />
      <img src={theBoxText} alt="" />
    </div>
  )
}