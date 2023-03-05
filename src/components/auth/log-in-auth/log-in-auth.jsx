import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LogInInputs } from "./log-in-inputs/log-in-inputs";
import { AuthSlice } from "../../../store/auth-slice";
import { Form } from "../auth-components/form/form";
import { Loader } from "../../loader";
import { Button } from "../auth-components/button/button";
import { LinkTo } from "../auth-components/link/link";

import "../common-styles.scss";

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
  const loading = useSelector((state) => state.auth.loading);

  const onSubmit = async (data) => {
    await dispath(AuthSlice(data));
    navigate("/books/all", { replace: true });

    reset();
  };

  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="register-steps">
          <h2>Вход в личный кабинет</h2>
        </div>
        <div className="reg-required-inputs-container">
          <LogInInputs register={register} errors={errors} />
        </div>
        <div className="next-move-container">
          <Button isDirty={isDirty} isValid={isValid}>
            вход
          </Button>
          <LinkTo
            question={"Нет учётной записи?"}
            link={"Регистрация"}
            path={"local/register"}
          />
        </div>
      </Form>
    </React.Fragment>
  );
};
