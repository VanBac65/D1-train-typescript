import { FC, ReactElement } from "react";
import FooterLeft from "app/components/modules/footer/footerLeft/FooterLeft";
import FooterRight from "app/components/modules/footer/footerRight/FooterRight";
import CopyRight from "app/components/elements/footer/copyRight/CopyRight";
import "app/styles/footer/Footer.css"

const Footer: FC = (): ReactElement => {
    return (
        <div className="footer">
            <div className="top">
                <FooterLeft />
                <FooterRight />
            </div>
            <div className="copy-right">
                <CopyRight />
            </div>
        </div>
    )
}

export default Footer;