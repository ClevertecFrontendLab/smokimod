import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { RegStepOne } from "./reg-step-one/reg-step-one";
import { RegStepTwo } from "./reg-step-two/reg-step-two";
import { RegStepThree } from "./reg-step-three/reg-step-three";
import { RegisterSlice } from "../../../store/auth-slice";
import { RegistrationSucces } from "./registration-succes/registration-succes";
import { Loader } from "../../loader";
import { Form } from "../auth-components/form/form";
import { LinkTo } from "../auth-components/link/link";

import "../common-styles.scss";

export const AuthRegistration = () => {
  const loading = useSelector((state) => state.auth.loading);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(RegisterSlice(data));
    setStep((prev) => prev + 1);
    console.log(data);
    reset();
  };
  return step > 3 ? (
    <RegistrationSucces />
  ) : (
    <React.Fragment>
      {loading ? <Loader /> : null}
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="register-steps">
          <h2>Регистрация</h2>
          <div>
            <span>{step} шаг из 3</span>
          </div>
        </div>
        <div className="reg-required-inputs-container">
          {step === 1 && <RegStepOne register={register} errors={errors} />}
          {step === 2 && <RegStepTwo register={register} errors={errors} />}
          {step === 3 && <RegStepThree register={register} errors={errors} />}
        </div>
        <div className="next-move-container">
          {step === 1 || step === 2 ? (
            <button
              className="reg-next-moveBtn"
              type="buttom"
              onClick={() => {
                setStep((prev) => prev + 1);
              }}
              disabled={!isDirty || !isValid}
            >
              {step === 1 ? "следующий шаг" : "последний шаг"}
            </button>
          ) : (
            <button
              type="submit"
              className="reg-next-moveBtn"
              disabled={!isDirty || !isValid}
            >
              зарегистрироваться
            </button>
          )}
          <LinkTo
            question={"Есть учётная запись?"}
            link={"Вход"}
            path={"local"}
          />
        </div>
      </Form>
    </React.Fragment>
  );
};
