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
import { ForgotPassword } from "./components/auth/forgot-password/forgot-password";
import { RestorePassword } from "./components/auth/restore-password/restore-password";

const root = ReactDOM.createRoot(document.getElementById("root"));
const toggleRoutesPermission = localStorage.getItem("auth");

import "./index.scss";

root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path={toggleRoutesPermission ? "/" : ""} element={<Layout />}>
          <Route element={<LayoutMainPage />}>
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
        <Route index path="/" element={<Navigate to={"api/auth/local"} />} />
        <Route path="/api/auth/" element={<RegistrationLayout />}>
          <Route path="reset-password" element={<RestorePassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="local" element={<LogInAuth />} />
          <Route path="local/register" element={<AuthRegistration />} />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
