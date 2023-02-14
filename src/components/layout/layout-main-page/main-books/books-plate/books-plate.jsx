import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import bookImage from "../../../../../icons/book-images/book-plate_icon.svg";
import altBookImage from "../../../../../icons/book-images/catAvatar_icon.svg";
import emtyStar from "../../../../../icons/book-images/emptyStar_icon.svg";
import star from "../../../../../icons/book-images/start_icon.svg";

import "./books-plate.scss";

export const BooksPlate = ({ showPlate }) => {
  const books = (useSelector) => state.books;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return showPlate ? null : (
    <div className="books-container-plate">
      {arr.map((_, i) => (
        <Link to={`/book/all/bookId/${i}`} key={Math.random()}>
          <div className="plate" data-test-id="card">
            <div className="plate-container">
              <div className="plate-img-container">
                <img
                  className="plate-img"
                  src={i === 0 || i === 9 ? altBookImage : bookImage}
                  alt={altBookImage}
                />
              </div>
              <div className="plate-book-info">
                <div className="book-info">
                  <h4>
                    Грокаем алгоритмы. Иллюстрированное пособие для
                    программистов и любопытствующих
                  </h4>
                  <div className="plate-book-autor">Адитья Бхаргава, 2019</div>
                </div>
                <div className="plate-order">
                  {i === 0 ? (
                    <div className="book-rating">ещё нет отзывов</div>
                  ) : (
                    <div className="book-rating star">
                      {[0, 1, 2, 3, 4].map((__, index) => (
                        <img
                          src={index === 4 ? emtyStar : star}
                          alt={star}
                          key={Math.random()}
                        />
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    className={
                      i === 2 || i === 5
                        ? "plate-btn item"
                        : i === 4
                        ? "plate-btn item alt"
                        : "plate-btn"
                    }
                  >
                    {i === 2 || i === 5
                      ? "Занята до 03.05"
                      : i === 4
                      ? "Забронировна"
                      : "Забронировать"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
