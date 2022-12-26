import { ReactElement } from "react";
import "./HeaderNav.css"

const nav: String[] = ['Home', 'About Us', 'Project', 'Services', 'Contact Us']

export const HeaderNav = (): ReactElement => {
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