import { FC, ReactElement } from "react";
import Logo from "app/components/elements/Logo";
import "app/styles/modules/HeaderContainer.css";

type MenuHeaderProps = {
  menu: Array<string>;
};

const Header: FC<MenuHeaderProps> = ({ menu }): ReactElement => {
  return (
    <div className="header">
      <Logo />
      <div className="header-nav">
        <ul>
          {menu.map((item: string, index: number): ReactElement => {
            return (
              <li className="nav-item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
