import "./styles.scss";

import { menuData } from "../../data/menuData";
import type { ComponentT } from "./types";
import closeIcon from "/public/assets/images/close.svg";
import arrowIcon from "/public/assets/images/arrow.svg";
import logo from "/public/assets/images/logo.svg";

export const MobileMenu: ComponentT = ({ isOpen, onClose }) => {
  return (
    <div className="mobile-menu-container">
      {isOpen && (
        <div className="mobile-menu-container--overlay" onClick={onClose} />
      )}
      <aside
        className={`mobile-menu-container__content ${isOpen ? "open" : ""}`}
      >
        <div className="mobile-menu-container__content__header">
          <img
            src={logo}
            alt="logo"
            className="mobile-menu-container__content__header--logo"
          />
          <button
            className="mobile-menu-container__content__header--close"
            onClick={onClose}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>

        <nav className="mobile-menu-container__content__nav">
          <ul className="mobile-menu-container__content__nav__list">
            {menuData.map((item) => (
              <li
                key={item.id}
                className="mobile-menu-container__content__nav__list__item"
              >
                <a
                  href={item.href}
                  className="mobile-menu-container__content__nav__list__item--link"
                >
                  {item.label}
                </a>
                <img
                  src={arrowIcon}
                  alt="arrow icon"
                  className="mobile-menu-container__content__nav__list__item--icon"
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
