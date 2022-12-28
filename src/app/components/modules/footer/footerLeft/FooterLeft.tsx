import { FC, ReactElement } from "react";
import Logo from "app/components/elements/common/logo/Logo";
import "app/styles/FooterLeft.css"

const FooterLeft: FC = (): ReactElement => {
    return (
        <div className="footer-left">
            <p><title>ADDRESS:</title>6391 Elgin St. Celina, Delaware 10299</p>
            <p><title>PHONE:</title>+84 1102 2703</p>
            <p><title>EMAIL:</title>hello@thebox.com</p>
            <Logo />
        </div>
    )
}

export default FooterLeft;