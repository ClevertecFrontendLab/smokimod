import { AuthRegistration } from "./auth-registration/auth-registration";

import "./auth.scss";

export const Auth = () => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <h1 className="auth-head">Cleverland</h1>
        <AuthRegistration />
      </div>
    </div>
  );
};
