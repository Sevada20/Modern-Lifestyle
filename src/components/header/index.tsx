import "./styles.scss";

import { Search } from "../search";
import type { ComponentT } from "./types";
import logo from "/public/assets/images/logo.svg";
import hamburger from "/public/assets/images/hamburger.svg";

export const Header: ComponentT = ({ onMobileMenuToggle, onSearch }) => {
  return (
    <div className="header">
      <img
        className="header--hamburger"
        src={hamburger}
        alt="hamburger menu"
        onClick={onMobileMenuToggle}
      />
      <img src={logo} alt="logo" className="header--logo" />
      <Search onSearch={onSearch} />
    </div>
  );
};
