import React from "react";

export const RegStepOne = ({ register, errors }) => {
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
        <div style={errors.password ? { color: "red" } : null}>
          {errors?.password?.message ||
            "Пароль не менее 8 символов, с заглавной буквой и цифрой"}
        </div>
      </label>
    </React.Fragment>
  );
};
