import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./menu.scss";

// eslint-disable-next-line complexity
export const Menu = ({ showArticle, hanbdleClose, loaded }) => {
  const setActive = ({ isActive }) => (isActive ? " active item" : "");
  const [isTogleMenu, setIsTogleMenu] = useState(false);
  const location = useLocation();
  const bookPath = location.pathname.substring(1, 6);
  console.log(location);
  const toggleMenu = () => {
    setIsTogleMenu(!isTogleMenu);
  };

  useEffect(
    () => (loaded ? setIsTogleMenu(true) : setIsTogleMenu(false)),
    [loaded]
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
              onClick={toggleMenu}
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

          <li>
            <NavLink
              className={setActive}
              to="/books/buisnes"
              onClick={showArticle ? hanbdleClose : null}
            >
              Бизнес-книги
            </NavLink>
            <span>14</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="/books/:detective">
              Детективы
            </NavLink>
            <span>8</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="/books/:children">
              Детские книги
            </NavLink>
            <span>14</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:foreing">
              Зарубежная литература
            </NavLink>
            <span>2</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:history">
              История
            </NavLink>
            <span>5</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:classic">
              Классическая литература
            </NavLink>
            <span>12</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:psychology">
              Книги по психологии
            </NavLink>
            <span>11</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:compuneter">
              Компьютерная литература
            </NavLink>
            <span>54</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:culture&history">
              Культура и искусство
            </NavLink>
            <span>5</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:sience&education">
              Наука и образование
            </NavLink>
            <span>2</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:public">
              Публицистическая литература
            </NavLink>
            <span>0</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:faq">
              Справочники
            </NavLink>
            <span>10</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:fantastic">
              Фантастика
            </NavLink>
            <span>12</span>
          </li>
          <li role="presentation" onClick={showArticle ? hanbdleClose : null}>
            <NavLink className={setActive} to="books/:humor">
              Юмористическая литература
            </NavLink>
            <span>8</span>
          </li>
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
