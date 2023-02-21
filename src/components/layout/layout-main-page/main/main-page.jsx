import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import activePlateIcon from "../../../../icons/buttons/button_plate_active.svg";
import activeSqureIcon from "../../../../icons/buttons/button_suqare_active.svg";
import plateIcon from "../../../../icons/buttons/plate.svg";
import squreIcon from "../../../../icons/buttons/squre-icon.svg";
import SearchIcon from "../../../../icons/glass_icon.svg";
import { Loader } from "../loader/loader";
import { BooksPlate } from "../main-books//books-plate";
import { BookSqure } from "../main-books/books-squre";

import "./main-page.scss";
import { MobileSearchView } from "./mobile-search-view/moble-search-view";

export const MainPage = () => {
  const [showSeacthBar, setShowSeacthBar] = useState(false);
  const [showPlate, setShowPlate] = useState(true);
  const [sortByRating, setSortByRating] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const books = useSelector((state) => state.books.books);
  const error = useSelector((state) => state.books.error);
  const loading = useSelector((state) => state.books.loading);
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
      {loading ? <Loader /> : null}
      <section
        className={
          error || loading ? "article-section hidden" : "article-section"
        }
      >
        <div className="navigation-wraper">
          <div className="navigation-menu">
            <MobileSearchView
              toggleShowBar={toggleShowBar}
              showSeacthBar={showSeacthBar}
            />
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
                  type="search"
                  onChange={(e) => setSearchParam(e.target.value)}
                  value={searchParam}
                  className="btn-autor"
                  placeholder="Поиск книги или автора..."
                />
              </label>
              <label
                onClick={() => {
                  setSortByRating(!sortByRating);
                }}
                htmlFor="btn-raiting"
                className={
                  showSeacthBar
                    ? "icon-rating disable"
                    : sortByRating
                    ? "icon-rating toggle"
                    : "icon-rating"
                }
              >
                <button type="text" className="btn-raiting">
                  По рейтингу
                </button>
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
            <div
              className={
                showPlate ? "books-container" : "books-container-plate"
              }
            >
              {books
                .filter((item) => {
                  return searchParam.toLowerCase() === ""
                    ? item
                    : item.title
                        .toLowerCase()
                        .includes(searchParam.toLowerCase());
                })
                .map((item) => {
                  return showPlate ? (
                    <BookSqure
                      title={item.title}
                      authors={item.authors}
                      id={item.id}
                      image={item.image}
                      rating={item.rating}
                      issueYear={item.issueYear}
                      booking={item.booking}
                      delivery={item.delivery}
                      key={item.id}
                    />
                  ) : (
                    <BooksPlate
                      title={item.title}
                      authors={item.authors}
                      id={item.id}
                      image={item.image}
                      rating={item.rating}
                      issueYear={item.issueYear}
                      booking={item.booking}
                      delivery={item.delivery}
                      key={item.id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
