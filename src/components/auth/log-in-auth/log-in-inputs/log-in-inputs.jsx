import React from "react";

export const LogInInputs = ({ register, errors }) => {
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
          type="password"
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
        <div style={{ marginTop: "16px" }}>
          {errors?.password?.message ||
            (errors?.username?.message && (
              <span style={{ colro: "red" }}>Восстановить?</span>
            )) ||
            "Забыли логин или пароль?"}
        </div>
      </label>
    </React.Fragment>
  );
};
