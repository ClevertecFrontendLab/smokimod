import { Outlet } from "react-router-dom";

import "./registration-layout.scss";

export const RegistrationLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <h1 className="auth-head">Cleverland</h1>
        <Outlet />
      </div>
    </div>
  );
};