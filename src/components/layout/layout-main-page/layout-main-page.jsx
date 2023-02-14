import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BooksSlice } from "../../../store/books-slice";
import { Menu } from "./menu";

import "../layout.scss";
import { ErrorCase } from "./error-case/error-case";
import { onErrorRequest } from "../../../store/error-reducer";

export const LayoutMainPage = () => {
  const [loaded, setLoaded] = useState(false);
  // const error = useSelector((state) => state.error);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getInitialData = async () => {
        setLoaded(true);
        await dispatch(BooksSlice());
        setLoaded(false);
      };
      getInitialData();
    } catch (err) {
      setLoaded(false);
      setError(err);
    }
  }, [dispatch, error]);

  return (
    <div className="main-container">
      <div className="show-menu">
        <Menu loaded={loaded} />
      </div>
      {error ? (
        <React.Fragment>
          <ErrorCase />
          <Outlet context={[error, loaded]} />
        </React.Fragment>
      ) : (
        <Outlet context={[error, loaded]} />
      )}
    </div>
  );
};
