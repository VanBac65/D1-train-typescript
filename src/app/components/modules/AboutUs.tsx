import { FC, ReactElement } from "react";
import imgPath from "public/images/aboutUs/about-us.png";
import "app/styles/modules/AboutUs.css";
import Button from "../elements/Button";

const AboutUs: FC = (): ReactElement => {
  return (
    <div className="about-us">
      <img src={imgPath} alt="" />
      <div className="about-us-description">
        <h2 className="title">About Us</h2>
        <p>
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
        </p>
        <p>
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <Button title="More on Our History" />
      </div>
    </div>
  );
};

export default AboutUs;
