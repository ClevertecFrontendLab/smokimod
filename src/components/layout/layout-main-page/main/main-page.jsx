import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

import activePlateIcon from "../../../../icons/buttons/button_plate_active.svg";
import activeSqureIcon from "../../../../icons/buttons/button_suqare_active.svg";
import plateIcon from "../../../../icons/buttons/plate.svg";
import squreIcon from "../../../../icons/buttons/squre-icon.svg";
import crossIcon from "../../../../icons/creset_icon.svg";
import SearchIcon from "../../../../icons/glass_icon.svg";
import { Loader } from "../loader/loader";
import { BooksPlate } from "../main-books/books-plate/books-plate";
import { BookSqure } from "../main-books/books-squre";

import "./main-page.scss";

export const MainPage = () => {
  const [showSeacthBar, setShowSeacthBar] = useState(false);
  const [showPlate, setShowPlate] = useState(true);
  // const error = useSelector((state) => state.error);

  const [error, loaded] = useOutletContext();
  const buttonAutoFocus = useRef(null);
  const toggleShowBar = () => {
    setShowSeacthBar(!showSeacthBar);
  };

  useEffect(() => {
    if (buttonAutoFocus.current) {
      buttonAutoFocus.current.focus();
    }
  }, [buttonAutoFocus]);

  return (
    <React.Fragment>
      {loaded ? <Loader /> : null}
      <section
        className={
          error || loaded ? "article-section hidden" : "article-section"
        }
      >
        <div className="navigation-wraper">
          <div className="navigation-menu">
            <div
              className={
                showSeacthBar
                  ? "search-input-container"
                  : "search-input-container disabled"
              }
            >
              <input
                className="search-input"
                placeholder="Поиск книги или автора..."
                type="text"
                data-test-id="input-search"
              />
              <button
                type="button"
                className="cross-button"
                data-test-id="button-search-close"
              >
                <img
                  src={crossIcon}
                  alt="cross-icon"
                  onClick={toggleShowBar}
                  role="presentation"
                />
              </button>
            </div>
            <div className="search-container">
              <button
                type="button"
                className={
                  showSeacthBar ? "seacrh-button disable" : "seacrh-button"
                }
                onClick={toggleShowBar}
                data-test-id="button-search-open"
              >
                <img src={SearchIcon} alt="buuton-glass" />
              </button>
              <label
                htmlFor="btn-autor"
                className={showSeacthBar ? "icon-autor disable" : "icon-autor"}
              >
                <input
                  type="text"
                  className="btn-autor"
                  placeholder="Поиск книги или автора..."
                />
                <span className="icon-crest" />
              </label>
              <label
                htmlFor="btn-raiting"
                className={
                  showSeacthBar ? "icon-rating disable" : "icon-rating"
                }
              >
                <input
                  type="text"
                  className="btn-raiting"
                  placeholder="По рейтингу"
                />
              </label>
            </div>
            <div
              className={
                showSeacthBar ? "view-of-books disable" : "view-of-books"
              }
            >
              <button
                data-test-id="button-menu-view-window"
                type="button"
                className={`btnSqure ${showPlate ? "active" : ""}`}
                ref={buttonAutoFocus}
                onClick={() => setShowPlate(true)}
              >
                <img
                  src={showPlate ? activeSqureIcon : squreIcon}
                  alt="squreIcon"
                />
              </button>
              <button
                type="button"
                data-test-id="button-menu-view-list"
                className={`btnLine ${showPlate ? "" : "active"}`}
                onClick={() => setShowPlate(!true)}
              >
                <img
                  className="btn-plate"
                  src={showPlate ? plateIcon : activePlateIcon}
                  alt="plateIcon"
                />
              </button>
            </div>
          </div>
          <div className="books">
            <BooksPlate showPlate={showPlate} />
            <BookSqure showPlate={showPlate} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};