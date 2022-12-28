import { FC, ReactElement } from "react";
import facebook from "public/images/footer/Vector.png";
import instagram from "public/images/footer/Vector-1.png";
import twitter from "public/images/footer/Vector-2.png";
import Logo from "app/components/elements/Logo";
import "app/styles/modules/Footer.css";
import Button from "app/components/elements/Button";

const Footer: FC = (): ReactElement => {
  return (
    <div className="footer">
      <div className="top">
        <div className="footer-left">
          <p>
            <title>ADDRESS:</title>6391 Elgin St. Celina, Delaware 10299
          </p>
          <p>
            <title>PHONE:</title>+84 1102 2703
          </p>
          <p>
            <title>EMAIL:</title>hello@thebox.com
          </p>
          <Logo />
        </div>
        <div className="footer-right">
          <p>NEWSLETTER:</p>
          <input type="text" placeholder="Your email here" />
          <Button title="Subscribe" />
          <p>SOCIAL:</p>
          <div className="social-imgs">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>TheBox Company © 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
