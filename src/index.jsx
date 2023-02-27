import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { BookPage } from "./components/book";
import { Layout } from "./components/layout";
import { LayoutMainPage } from "./components/layout/layout-main-page";
import { MainPage } from "./components/layout/layout-main-page/main";
import { Terms } from "./components/layout/layout-main-page/terms";
import { store } from "./store";

import "./index.scss";
import { Auth } from "./components/auth/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path="/" element={<Navigate to="books/all" />} />
            <Route path="books/:category" element={<MainPage />} />
            <Route
              path="rules"
              element={<Terms contentView="Правила пользования" />}
            />
            <Route
              path="contract"
              element={<Terms contentView="Договор оферты" />}
            />
          </Route>
          <Route path="books/:category/:id" element={<BookPage />} />
        </Route> */}
        <Route path="/api/auth/local/register" element={<Auth />} />
      </Routes>
    </Provider>
  </HashRouter>
);
