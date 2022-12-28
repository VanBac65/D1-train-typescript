import { FC, ReactElement } from "react";

const navHeader: string[] = [
  "Home",
  "About Us",
  "Projects",
  "Services",
  "Contact Us",
];

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

export default HeaderNav;
