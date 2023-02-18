import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./book-bread-list.scss";

export const BookBreadList = ({ title = "" }) => {
  const { category } = useParams();
  const categories = useSelector((state) => state.books.categories);

  return (
    <div className="book-list-mimi">
      <div className="list-container">
        {category === "all" ? (
          <span>{`Все книги / ${title}`}</span>
        ) : (
          categories
            .filter((item) => item.path === category)
            .map((i) => {
              return <span key={i.path}>{`${i.name} / ${title}`}</span>;
            })
        )}
      </div>
    </div>
  );
};
