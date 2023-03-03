import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Arrow from "../../../icons/auth/arrow.svg";
import { LogInInputs } from "./log-in-inputs/log-in-inputs";
import { AuthSlice } from "../../../store/auth-slice";

import "../auth-reg-styles.scss";

export const LogInAuth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onSubmit = async (data) => {
    await dispath(AuthSlice(data));
    navigate("/books/all", { replace: true });

    reset();
  };

  return (
    <form action="" className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container">
        <div className="register-steps">
          <h2>Вход в личный кабинет</h2>
        </div>
        <div className="reg-required-inputs-container">
          <LogInInputs register={register} errors={errors} />
        </div>
        <div className="next-move-container">
          <button
            type="submit"
            className="reg-next-moveBtn"
            disabled={!isDirty || !isValid}
          >
            вход
          </button>
          <div className="next-move-question">
            Нет учётной записи?
            <Link to="/api/auth/local/register" className="logIn-link">
              Регистрация{" "}
              <div>
                <img src={Arrow} alt="alt" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
