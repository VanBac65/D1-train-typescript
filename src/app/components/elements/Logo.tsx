import { FC, ReactElement } from "react";
import theBoxText from "public/images/header/TheBox.png"
import logoImage from "public/images/header/Random Symboles 3.png"
import "app/styles/elements/Logo.css"

const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <img src={logoImage} alt="" />
      <img src={theBoxText} alt="" />
    </div>
  )
}

export default Logo;