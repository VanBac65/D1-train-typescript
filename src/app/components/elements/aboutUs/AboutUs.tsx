import { ReactElement } from "react";
import imgPath from "../../../../public/images/aboutUs/about-us.png"
import { AboutUsDescription } from "./aboutUsDescription/AboutUsDescription";
import "./AboutUs.css"

export const AboutUs = (): ReactElement => {
  return (
    <div className="about-us">
      <img src={imgPath} alt="" />
      <AboutUsDescription />
    </div>
  )
} 