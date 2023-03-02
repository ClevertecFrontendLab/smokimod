import { useSelector } from "react-redux";
import { Loader } from "../../../loader";
import { Link } from "react-router-dom";

import "./registration-succes.scss";

export const RegistrationSucces = () => {
  const loading = useSelector((state) => state.auth.loading);

  return loading ? (
    <Loader />
  ) : (
    <div className="reg-succes">
      <h3>Регистрация успешна</h3>
      <p>
        Регистрация прошла успешно. Зайдите в личный кабинет, используя свои
        логин и пароль
      </p>
      <Link to="/api/auth/local">
        <button className="succes-btn"></button>
      </Link>
    </div>
  );
};
