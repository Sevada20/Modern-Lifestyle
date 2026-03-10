import "./styles.scss";

import { useState } from "react";
import type { ComponentT } from "./types";
import searchIcon from "/public/assets/images/search.svg";
import closeIcon from "/public/assets/images/close.svg";

export const Search: ComponentT = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className={`search ${isSearchOpen ? "open" : ""}`}>
      {!isSearchOpen ? (
        <button
          className="search--icon-btn"
          onClick={handleSearchClick}
          aria-label="Open search"
        >
          <img src={searchIcon} alt="search icon" />
        </button>
      ) : (
        <div className="search__input-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search posts..."
            className="search__input-container--input"
            autoFocus
          />
          <button
            className="search__input-container__close-btn"
            onClick={handleClose}
            aria-label="Close search"
          >
            <img
              src={closeIcon}
              alt="close icon"
              className="search__input-container__close-btn--icon"
            />
          </button>
        </div>
      )}
    </div>
  );
};
