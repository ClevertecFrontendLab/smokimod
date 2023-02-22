import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../loader/loader";
import { BooksPlate } from "../main-books//books-plate";
import { BookSqure } from "../main-books/books-squre";

import { MobileSearchView } from "./mobile-search-view/moble-search-view";
import { PlateSqureButtoms } from "./plate-squre-buttoms/plate-squre-buttoms";
import { SearchField } from "./search-field/search-field";

import "./main-page.scss";

export const MainPage = () => {
  const books = useSelector((state) => state.books.books);
  const error = useSelector((state) => state.books.error);
  const loading = useSelector((state) => state.books.loading);
  const categories = useSelector((state) => state.books.categories);
  const { category } = useParams();

  const selectedCategoryName = categories.find(
    (item) => item.path === category
  );
  console.log(selectedCategoryName);

  const [showSeacthBar, setShowSeacthBar] = useState(false);
  const [showPlate, setShowPlate] = useState(true);
  const [sortByRating, setSortByRating] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [booksList, setBooks] = useState(books && []);

  const toggleShowBar = () => {
    setShowSeacthBar(!showSeacthBar);
  };

  const filterAndSortBooks = () => {
    return booksList
      .filter((item) => {
        return category === "all"
          ? item
          : item.categories.includes(selectedCategoryName.name);
      })
      .sort((a, b) => {
        return sortByRating ? a.rating - b.rating : b.rating - a.rating;
      });
  };

  useEffect(() => {
    const result = books.filter((item) => {
      return searchParam.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(searchParam.toLowerCase());
    });
    setBooks(result);
  }, [searchParam, books]);

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
              searchParam={searchParam}
              setSearchParam={setSearchParam}
            />
            <SearchField
              setSearchParam={setSearchParam}
              searchParam={searchParam}
              sortByRating={sortByRating}
              setSortByRating={setSortByRating}
              toggleShowBar={toggleShowBar}
              showSeacthBar={showSeacthBar}
            />
            <PlateSqureButtoms
              showSeacthBar={showSeacthBar}
              setShowPlate={setShowPlate}
              showPlate={showPlate}
            />
          </div>
          <div className="books">
            <div
              className={
                showPlate ? "books-container" : "books-container-plate"
              }
            >
              {filterAndSortBooks(books).map((item) => {
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
