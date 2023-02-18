import React from "react";
import { useParams } from "react-router-dom";

import { AdditionalInfoBook } from "./additional-info-book/additional-info-book";
import { BookComents } from "./book-coments/book-coments";
import { BookRating } from "./book-rating/book-rating";
import { BookSlider } from "./book-slider/book-slider";
import { useEffect } from "react";
import { BookBreadList } from "./book-bread-list/book-bread-list";
import { CurrentBookSlice } from "../../store/books-slice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../layout/layout-main-page/loader/loader";
import { CategoryOfBooksSlice } from "../../store/books-slice";

import "./book-page.scss";
import { ErrorCase } from "../layout/layout-main-page/error-case/error-case";

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.books.loading);
  const currentBook = useSelector((state) => state.books.currentBook);
  const categories = useSelector((state) => state.books.categories);
  const error = useSelector((state) => state.books.error);

  const {
    authors,
    description,
    issueYear,
    title,
    booking,
    delivery,
    images,
    rating,
    comments,
  } = currentBook;

  useEffect(() => {
    const getBookRequestById = async () => {
      await dispatch(CurrentBookSlice(id));
      categories.length > 0 ? null : await dispatch(CategoryOfBooksSlice());
    };
    getBookRequestById();
  }, [id, dispatch, categories]);

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorCase />
  ) : (
    <div className="book-container">
      <BookBreadList title={title} />
      {error ? (
        <ErrorCase />
      ) : (
        <div className="book-holder">
          <section className="book-page">
            <div className="book-name">
              <div className="book-information">
                <BookSlider images={images} />
              </div>
              <div className="detail-head">
                <h3>{title}</h3>
                <div className="book-subtitle">
                  {authors}, {issueYear}
                </div>
                <button
                  type="button"
                  className={
                    booking?.order
                      ? "order-book-btn booking"
                      : delivery?.handed
                      ? "order-book-btn delivery"
                      : "order-book-btn"
                  }
                >
                  {booking?.order
                    ? booking?.dateOrder
                    : delivery?.handed
                    ? "Забронированно"
                    : "Забронировать"}
                </button>
              </div>
              <div className="book-about">
                <div>
                  <h5>О книге</h5>
                </div>
                <p className="description-item">{description}</p>
              </div>
            </div>

            <div className="book-summary">
              <BookRating rating={rating} />
              <AdditionalInfoBook />
              <BookComents comments={comments} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
