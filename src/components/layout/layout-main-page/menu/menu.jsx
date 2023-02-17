import { useEffect, useState } from "react";
import { NavLink, useLocation, } from "react-router-dom";
import { useSelector } from "react-redux";
import "./menu.scss";

// eslint-disable-next-line complexity
export const Menu = ({ showArticle, hanbdleClose }) => {
  const setActive = ({ isActive }) => (isActive ? " active item" : "");
  const loading = useSelector((state) => state.books.loading);
  const books = useSelector((state) => state.books.books);
  const categories = useSelector((state) => state.books.categories);
  const [isTogleMenu, setIsTogleMenu] = useState(false);
  const location = useLocation();
  const bookPath = location.pathname.substring(1, 6);


  useEffect(
    () => {
      loading ? setIsTogleMenu(true) : setIsTogleMenu(false)
    },
    [loading]
  );

  useEffect(
    () => (bookPath !== "books" ? setIsTogleMenu(true) : setIsTogleMenu(false)),
    [bookPath]
  );

  return (
    <article className="show-article">
      <nav className="menu-wraper">
        <div className="category-container">
          <NavLink to="/books/all" style={{ width: "100%" }}>
            <h5
              role="presentation"
              onClick={() => setIsTogleMenu(!isTogleMenu)
              }
              className={bookPath === "books" ? "category active" : "category"}
              data-test-id={
                showArticle ? "burger-showcase" : "navigation-showcase"
              }
            >
              Витрина книг
              <div
                className={isTogleMenu ? "categoy-icon" : "categoy-icon toggle"}
              />
            </h5>
          </NavLink>
        </div>


        <ul className={isTogleMenu ? "navigation disabled" : "navigation"}>
          <li className="first-li">
            <NavLink
              to="/books/all"
              className={setActive}
              data-test-id={showArticle ? "burger-books" : "navigation-books"}
              onClick={showArticle ? hanbdleClose : null}
            >
              Все книги
            </NavLink>
          </li>
          {categories.map((item) => {
            return (
              <li key={item.path}>
                <NavLink
                  className={setActive}
                  to={`/books/${item.path}`}
                  onClick={showArticle ? hanbdleClose : null}
                >
                  {item.name}
                </NavLink>
                <span>{books.length}</span>
              </li>)
          })}


        </ul>
        <div className="terms-deal-container">
          <NavLink
            className={setActive}
            to="/rules"
            activeclassname="active item"
            data-test-id={showArticle ? "burger-terms" : "navigation-terms"}
          >
            <button type="button" className="terms item" onClick={hanbdleClose}>
              Правила пользования
            </button>
          </NavLink>
          <NavLink
            className={setActive}
            to="/contract"
            activeclassname="active item"
            data-test-id={
              showArticle ? "burger-contract" : "navigation-contract"
            }
          >
            <button className="terms item" onClick={hanbdleClose} type="button">
              Договор оферты
            </button>
          </NavLink>
        </div>
      </nav>
    </article>
  );
};
