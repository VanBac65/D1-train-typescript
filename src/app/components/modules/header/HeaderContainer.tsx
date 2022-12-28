import { FC, ReactElement } from "react";
import HeaderNav from "./headerNav/HeaderNav";
import Logo from "app/components/elements/common/logo/Logo";
import "app/styles/HeaderContainer.css"

const Header: FC = (): ReactElement => {
    return (
        <div className="header">
            <Logo />
            <HeaderNav />
        </div>
    )
}

export default Header;