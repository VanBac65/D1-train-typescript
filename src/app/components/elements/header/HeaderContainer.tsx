import { ReactElement } from "react";
import { HeaderLogo } from "./headerLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import "./HeaderContainer.css"

export const Header = (): ReactElement => {
    return (
        <div className="header">
            <HeaderLogo />
            <HeaderNav />
        </div>
    )
}