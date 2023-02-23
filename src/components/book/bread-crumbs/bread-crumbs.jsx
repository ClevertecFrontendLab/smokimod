import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BooksSlice } from "../../../store/books-slice";

import "./bread-crumbs.scss";

export const BreadCrumbs = ({ title = "" }) => {
  const { category } = useParams();
  const categories = useSelector((state) => state.books.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToCategory = async () => {
    navigate(`/books/${category}`);
    await dispatch(BooksSlice());
  };

  return (
    <div className="book-list-mimi">
      <div className="list-container">
        {category === "all" ? (
          <span>
            <button className="button-link" onClick={backToCategory}>
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
                  <button className="button-link" onClick={backToCategory}>
                    {i.name}
                  </button>
                  {` / ${title}`}
                </span>
              );
            })
        )}
      </div>
    </div>
  );
};
