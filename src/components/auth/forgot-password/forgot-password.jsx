import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import ArrowBack from "../../../icons/auth/arrow_Back_to_logIn.svg";
import { Button } from "../auth-components/button/button";
import { LinkTo } from "../auth-components/link/link";
import { RestorePasswordSlice } from "../../../store/auth-slice";
import { Loader } from "../../loader";

import "../common-styles.scss";
import "./forgot-password.scss";
import { Message } from "./message/message";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const [message, setMessage] = useState(false);
  const dispath = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const onSubmit = async (data) => {
    await dispath(RestorePasswordSlice(data));
    error ? error : setMessage(true);
  };

  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      {message ? (
        <Message />
      ) : (
        <form className="restore-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="back-to-login-link-container">
            <Link className="back-to-login-link" to="/api/auth/local">
              <div>
                <img src={ArrowBack} alt="arrow" />
              </div>
              вход в личный кабинет
            </Link>
          </div>
          <div className="back-to-login-container">
            <h4>Восстановление пароля</h4>
            <div className="reg-required-inputs-container">
              <label htmlFor="restore-email-input">
                <input
                  id="restore-email-input"
                  type="email"
                  className="reg-login"
                  name=""
                  placeholder=" "
                  {...register("email", {
                    required: "Введите коректный email",
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <span>Email</span>
                <div>
                  {errors?.email?.message && (
                    <div style={{ color: "red" }}>{errors.email.message}</div>
                  )}
                  На это email будет отправлено письмо с инструкциями по
                  восстановлению пароля
                </div>
              </label>
            </div>
            <div className="next-move-container">
              <Button isDirty={isDirty} isValid={isValid}>
                восстановить
              </Button>
              <LinkTo
                question={"Нет учётной записи?"}
                link={"Регистрация"}
                path={"local/register"}
              />
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};
