import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BooksSlice } from "../../../store/books-slice";

import "./book-bread-list.scss";

export const BookBreadList = ({ title = "" }) => {
  const { category } = useParams();
  const categories = useSelector((state) => state.books.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToCategory = async () => {
    navigate(-1);
    await dispatch(BooksSlice());
  };

  return (
    <div className="book-list-mimi">
      <div className="list-container">
        {category === "all" ? (
          <span>
            <Link to="/">Все книги</Link>
            {` / ${title}`}
          </span>
        ) : (
          categories
            .filter((item) => item.path === category)
            .map((i) => {
              return (
                <span key={i.path}>
                  <Link onClick={backToCategory}>{i.name}</Link>
                  {` / ${title}`}
                </span>
              );
            })
        )}
      </div>
    </div>
  );
};
