import React, { useState } from "react";

import EyeClose from "../../../../icons/auth/eye_close.svg";
import EyeOpen from "../../../../icons/auth/eye_open.svg";
import ConfirmedPassword from "../../../../icons/auth/confirm_password.svg";

export const RestorePasswordInputs = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatablePassword, setShowRepeatablePassword] = useState(false);

  return (
    <React.Fragment>
      <label htmlFor="restore-password-input">
        <input
          id="restore-password-input"
          type={showPassword ? "text" : "password"}
          className="reg-login"
          name=""
          placeholder=" "
          {...register("password", {
            required: true,
            pattern: /(?=.*\d)(?=.*[A-Z])/,
            minLength: {
              value: 8,
              message: "Пароли не совпадают",
            },
          })}
        />
        <span>Новый пароль</span>
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
        <button className="icon-password" type="button">
          <img src={ConfirmedPassword} alt="ConfirmedPassword" />
        </button>
        <div>Пароль не менее 8 символов, с заглавной буквой и цифрой</div>
      </label>
      <label htmlFor="restore-password-repeat-input">
        <input
          id="restore-password-repeat-input"
          type={showRepeatablePassword ? "text" : "password"}
          className="reg-password"
          name="dwad"
          placeholder=" "
          {...register("password_repeat", {
            required: true,
            minLength: {
              value: 8,
              message: "Пароли не совпадают",
            },
            pattern: /(?=.*\d)(?=.*[A-Z])/,
          })}
        />
        <span>Повторите пароль</span>
        <button
          type="button"
          className="icon-eye"
          onClick={() => setShowRepeatablePassword(!showRepeatablePassword)}
        >
          <img
            src={
              (showRepeatablePassword && EyeOpen) ||
              (!showRepeatablePassword && EyeClose)
            }
            alt="eye"
          />
        </button>
      </label>
      {(errors?.password?.message && (
        <div className="restore-password" style={{ color: "red" }}>
          {errors?.password?.message}
        </div>
      )) ||
        (errors?.password_repeat?.message && (
          <div className="restore-password" style={{ color: "red" }}>
            {errors?.password_repeat?.message}
          </div>
        ))}
    </React.Fragment>
  );
};
