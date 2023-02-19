import { Link, useParams } from "react-router-dom";

import altBookImage from "../../../../../icons/book-images/catAvatar_icon.svg";
import emtyStar from "../../../../../icons/book-images/emptyStar_icon.svg";
import star from "../../../../../icons/book-images/start_icon.svg";

import "./books-plate.scss";

export const BooksPlate = ({
  title,
  authors,
  id,
  image,
  rating,
  issueYear,
  booking,
  delivery,
}) => {
  const IMAGE_URL = "https://strapi.cleverland.by";
  const { categories } = useParams();

  return (
    <Link to={`/books/${categories}/${id}`} key={id}>
      <div className="plate" data-test-id="card">
        <div className="plate-container">
          <div className="plate-img-container">
            <img
              className="plate-img"
              src={image ? `${IMAGE_URL}${image.url}` : altBookImage}
              alt={altBookImage}
            />
          </div>
          <div className="plate-book-info">
            <div className="book-info">
              <h4>{title}</h4>
              <div className="plate-book-autor">
                {authors}, {issueYear}
              </div>
            </div>
            <div className="plate-order">
              {rating ? (
                <div className="book-rating star">
                  {[0, 1, 2, 3, 4].map((__, index) => (
                    <img
                      src={index >= Math.round(rating) ? emtyStar : star}
                      alt={star}
                      key={Math.random()}
                    />
                  ))}
                </div>
              ) : (
                <div className="book-rating">ещё нет отзывов</div>
              )}
              <button
                id={booking ? booking?.id : delivery ? delivery?.id : ""}
                type="button"
                className={
                  booking?.order
                    ? "plate-btn booking"
                    : delivery?.handed
                    ? "plate-btn delivery"
                    : "plate-btn"
                }
              >
                {booking?.order
                  ? `Занята до ${booking.dateOrder}`
                  : delivery?.handed
                  ? "Забронировна"
                  : "Забронировать"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
