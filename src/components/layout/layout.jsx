import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Menuburger } from "./layout-main-page/menu/menu-burger/menu-burger";
import { Footer } from "./footer";
import { Header } from "./header";

import "./layout.scss";
import { ErrorCase } from "./layout-main-page/error-case/error-case";

export const Layout = () => {
  const burger = useSelector((state) => state.burger.isBurger);
  const error = useSelector((state) => state.books.error);

  const dispatch = useDispatch();
  const toggleBurger = () => {
    dispatch({ type: "ClOSE_BURGER" });
  };

  return (
    <React.Fragment>
      <Header closeBurger={toggleBurger} />
      <main onClick={toggleBurger} role="presentation">
        {error && <ErrorCase />}
        <Outlet />
        {burger ? <Menuburger showArticle={burger} /> : null}
      </main>
      <Footer closeBurger={toggleBurger} />
    </React.Fragment>
  );
};
