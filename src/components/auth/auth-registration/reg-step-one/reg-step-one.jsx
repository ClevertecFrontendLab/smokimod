import React, { useState } from "react";

import ConfirmedPassword from "../../../../icons/auth/confirm_password.svg";
import EyeOpen from "../../../../icons/auth/eye_open.svg";
import EyeClose from "../../../../icons/auth/eye_close.svg";

export const RegStepOne = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <React.Fragment>
      <label htmlFor="reg-login-input">
        <input
          id="reg-login-input"
          type="text"
          className="reg-login"
          name=""
          placeholder=" "
          {...register("username", {
            required: true,
            pattern: /^(?=.*\d)[a-zA-Z0-9()*_\-!#$%^&*,."\'\][]+$/,
            minLength: {
              value: 2,
              message: "Используйте для логина латинский алфавит и цифры",
            },
          })}
        />
        <span>Придумайте логин для входа</span>
        <div style={errors.username ? { color: "red" } : null}>
          {errors?.username?.message ||
            "Используйте для логина латинский алфавит и цифры"}
        </div>
      </label>
      <label htmlFor="reg-password-input">
        <input
          id="reg-password-input"
          type="password"
          className="reg-password"
          name="dwad"
          placeholder=" "
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message:
                "Пароль не менее 8 символов, с заглавной буквой и цифрой",
            },
            pattern: /(?=.*\d)(?=.*[A-Z])/,
          })}
        />
        <span>Пароль</span>
        <button
          className="icon-eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={(showPassword && EyeOpen) || (!showPassword && EyeClose)}
            alt="eye"
          />
        </button>
        <button className="icon-password">
          <img src={ConfirmedPassword} alt="ConfirmedPassword" />
        </button>
        <div style={errors.password ? { color: "red" } : null}>
          {errors?.password?.message ||
            "Пароль не менее 8 символов, с заглавной буквой и цифрой"}
        </div>
      </label>
    </React.Fragment>
  );
};
