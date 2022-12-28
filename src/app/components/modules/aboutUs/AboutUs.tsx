import { FC, ReactElement } from "react";
import imgPath from "public/images/aboutUs/about-us.png"
import AboutUsDescription from "app/components/modules/aboutUs/aboutUsDescription/AboutUsDescription";
import "app/styles/aboutUs/AboutUs.css"

const AboutUs: FC = (): ReactElement => {
  return (
    <div className="about-us">
      <img src={imgPath} alt="" />
      <AboutUsDescription />
    </div>
  )
} 

export default AboutUs;