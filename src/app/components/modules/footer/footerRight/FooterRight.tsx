import { FC, ReactElement } from "react";
import facebook from "public/images/footer/Vector.png"
import instagram from "public/images/footer/Vector-1.png"
import twitter from "public/images/footer/Vector-2.png"
import "app/components/modules/footer/footerRight/FooterRight.css"

const FooterRight: FC = (): ReactElement => {
    return (
        <div className="footer-right">
            <p>NEWSLETTER:</p>
            <input type="text" placeholder="Your email here" />
            <button>Subscribe</button>
            <p>SOCIAL:</p>
            <div className="social-imgs">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    )
}

export default FooterRight;