import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BooksSlice } from "../../../store/books-slice";

import "./bread-crumbs.scss";

export const BreadCrumbs = ({ title = "" }) => {
  const { category } = useParams();
  const categories = useSelector((state) => state.books.categories);
  const dispatch = useDispatch();
  const currentСategory = categories.find((item) => item.path === category) || {
    name: "Все книги",
    path: "all",
  };

  const backToCategory = async () => {
    await dispatch(BooksSlice());
  };

  return (
    <div className="book-list-mimi">
      <div className="list-container">
        <Link
          data-test-id="breadcrumbs-link"
          onClick={backToCategory}
          to={`../books/${category}`}
        >
          {currentСategory.name}
        </Link>{" "}
        <span className="separator">/</span>{" "}
        <span data-test-id="book-name">{title}</span>
        {/* {category === "all" ? (
          <span>
            <button
              className="button-link"
              onClick={backToCategory}
              data-test-id="breadcrumbs-link"
            >
              Все книги
            </button>
            {` / ${title}`}
          </span>
        ) : (
          categories
            .filter((item) => item.path === category)
            .map((i) => {
              return (
                <span key={i.path}>
                  <button
                    className="button-link"
                    onClick={backToCategory}
                    data-test-id="breadcrumbs-link"
                  >
                    {i.name}
                  </button>
                  {` / ${title}`}
                </span>
              );
            })
        )} */}
      </div>
    </div>
  );
};
