import React, { useState } from "react";
import { Link } from "react-router-dom";

import EyeOpen from "../../../../icons/auth/eye_open.svg";
import EyeClose from "../../../../icons/auth/eye_close.svg";

export const LogInInputs = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <React.Fragment>
      <label htmlFor="reg-identifier-input">
        <input
          id="reg-identifier-input"
          type="text"
          className="reg-login"
          name=""
          placeholder=" "
          {...register("identifier", {
            required: true,
            pattern: /^(?=.*\d)[a-zA-Z0-9()*_\-!#$%^&*,."\'\][]+$/,
            minLength: {
              value: 2,
              message: "Неверный логин или пароль!",
            },
          })}
        />
        <span>Придумайте логин для входа</span>
      </label>
      <label htmlFor="reg-password-input">
        <input
          id="reg-password-input"
          type={showPassword ? "text" : "password"}
          className="reg-password"
          name="dwad"
          placeholder=" "
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Неверный логин или пароль!",
            },
            pattern: /(?=.*\d)(?=.*[A-Z])/,
          })}
        />
        <span>Пароль</span>
        <button
          type="button"
          className="icon-eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={(showPassword && EyeOpen) || (!showPassword && EyeClose)}
            alt="eye"
          />
        </button>
      </label>
      <div className="restore-password">
        {(errors?.password?.message && (
          <div className="pass-error" style={{ color: "red" }}>
            {errors?.password?.message}
            <Link to="/api/auth/forgot-password">Восстановить?</Link>
          </div>
        )) ||
          (errors?.identifier?.message && (
            <div className="pass-error" style={{ color: "red" }}>
              {errors?.identifier?.message}
              <Link to="/api/auth/forgot-password">Восстановить?</Link>
            </div>
          )) || (
            <Link to="/api/auth/forgot-password">Забыли логин или пароль?</Link>
          )}
      </div>
    </React.Fragment>
  );
};
