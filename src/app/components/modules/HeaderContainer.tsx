import { FC, ReactElement } from "react";
import Logo from "app/components/elements/Logo";
import HeaderNav from "../elements/HeaderNav";
import "app/styles/modules/HeaderContainer.css";

const Header: FC = (): ReactElement => {
  return (
    <div className="header">
      <Logo />
      <HeaderNav />
    </div>
  );
};

export default Header;
