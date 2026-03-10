import "./styles.scss";

import { useState, useEffect } from "react";
import { menuData } from "../../data/menuData";
import arrowIcon from "/public/assets/images/arrow.svg";

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newDirection = currentScrollY > lastScrollY ? "down" : "up";

      if (newDirection !== scrollDirection) setScrollDirection(newDirection);

      if (currentScrollY > 200 && newDirection === "down") {
        setIsVisible(false);
      } else if (newDirection === "up") {
        setIsVisible(true);
      }

      if (currentScrollY === 0) setIsVisible(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <ul className={`menu ${isVisible ? "menu--visible" : "menu--hidden"}`}>
      {menuData.map((item) => (
        <li className="menu__item" key={item.id}>
          <div className="menu__item__title">
            <a href={item.href}>{item.label}</a>
            {item.submenu && (
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="menu__item__title--icon"
              />
            )}
          </div>
          <ul className="menu__item__submenu">
            {item.submenu?.map((subItem) => (
              <li key={subItem.id} className="menu__item__submenu__item">
                <a
                  href={subItem.href}
                  className="menu__item__submenu__item--link"
                >
                  {subItem.label}
                </a>
                <img
                  src={arrowIcon}
                  alt="arrow icon"
                  className="menu__item__submenu__item--icon"
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
