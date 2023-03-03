import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { BookPage } from "./components/book";
import { Layout } from "./components/layout";
import { LayoutMainPage } from "./components/layout/layout-main-page";
import { MainPage } from "./components/layout/layout-main-page/main";
import { Terms } from "./components/layout/layout-main-page/terms";
import { store } from "./store";
import { RegistrationLayout } from "./components/auth/registration-layout";
import { AuthRegistration } from "./components/auth/auth-registration/auth-registration";
import { LogInAuth } from "./components/auth/log-in-auth";

import "./index.scss";
console.log(localStorage.getItem("auth") ? "a" : "");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path="/" element={<Navigate to={"api/auth/local"} />} />

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
        </Route>
        <Route path="/api/auth/" element={<RegistrationLayout />}>
          <Route path="local" element={<LogInAuth />} />
          <Route path="local/register" element={<AuthRegistration />} />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
