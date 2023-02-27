import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./auth-registration.scss";

export const AuthRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form action="" className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container">
        <div className="register-steps">
          <h2>Регистрация</h2>
          <div>
            <span>1 шаг из 3</span>
          </div>
        </div>
        <div className="reg-required-inputs-container">
          <label htmlFor="reg-login-input">
            <input
              id="reg-login-input"
              type="text"
              className="reg-login"
              name=""
              placeholder="Придумайте логин для входа"
              {...register("username", {
                required: "Используйте для логина латинский алфавит и цифры",
              })}
            />
            <div style={{ color: "red" }}>
              {errors?.username && errors?.username?.message}
              Используйте для логина латинский алфавит и цифры
            </div>
          </label>
          <label htmlFor="reg-password-input">
            <input
              id="reg-password-input"
              type="password"
              className="reg-password"
              name=""
              placeholder="Пароль"
              {...register("password", {
                required:
                  "Пароль не менее 8 символов, с заглавной буквой и цифрой",
                minLength: {
                  value: 8,
                  message: "Пароль не менее 8 символов",
                },
                pattern: /[A-Z]+[0-9]+[@#$&]/,
              })}
            />
            <div>
              {errors?.password && errors?.password?.message}
              Пароль не менее 8 символов, с заглавной буквой и цифрой
            </div>
          </label>
        </div>
        <div className="next-move-container">
          <button className="reg-next-moveBtn" type="button">
            следующий шаг
          </button>
          <div className="next-move-question">
            Есть учётная запись?{" "}
            <Link to="/api/auth/local" className="logIn-link">
              войти
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
