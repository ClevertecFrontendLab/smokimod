import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BooksSlice } from "../../../store/books-slice";
import { Menu } from "./menu";

import "../layout.scss";
import { ErrorCase } from "./error-case/error-case";

export const LayoutMainPage = () => {
  const error = useSelector((state) => state.books.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialData = async () => {
      await dispatch(BooksSlice());
    };
    getInitialData();
  }, [dispatch, error]);

  return (
    <div className="main-container">
      <div className="show-menu">
        <Menu />
      </div>
      {error ? (
        <React.Fragment>
          <ErrorCase />
          <Outlet />
        </React.Fragment>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
