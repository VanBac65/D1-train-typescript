import { FC, ReactElement } from "react";
import "app/styles/header/HeaderNav.css"

const nav: string[] = ['Home', 'About Us', 'Project', 'Services', 'Contact Us']

const HeaderNav: FC = (): ReactElement => {
    return (
        <div className="header-nav">
            <ul>
                {nav.map((item, index): ReactElement => {
                    return (
                        <li className="nav-item" key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HeaderNav;