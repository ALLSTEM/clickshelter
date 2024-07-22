import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { headerRouteList } from "@/utils/menu-list";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {headerRouteList.map((link) => {
          return (
            <li
              id={link.link}
              className={pathname === link.link ? "current" : ""}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
