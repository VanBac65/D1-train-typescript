import { FC, ReactElement } from "react";
import Logo from "app/components/elements/Logo";
import "app/styles/modules/HeaderContainer.css";

const navHeader: string[] = [
  "Home",
  "About Us",
  "Projects",
  "Services",
  "Contact Us",
];
const Header: FC = (): ReactElement => {
  const HeaderNav: FC = (): ReactElement => {
    return (
      <div className="header-nav">
        <ul>
          {navHeader.map((item: string, index: number): ReactElement => {
            return (
              <li className="nav-item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <div className="header">
      <Logo />
      <HeaderNav />
    </div>
  );
};

export default Header;
