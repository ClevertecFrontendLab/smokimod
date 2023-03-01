import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { RegStepOne } from "./reg-step-one/reg-step-one";
import { RegStepTwo } from "./reg-step-two/reg-step-two";
import { RegStepThree } from "./reg-step-three/reg-step-three";

import "./auth-registration.scss";
import { useDispatch } from "react-redux";
import { AuthSlice } from "../../../store/auth-slice";
import axios from "axios";

export const AuthRegistration = ({ step, setStep }) => {
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
    console.log(data);
    await axios.post(
      "https://strapi.cleverland.by/api/auth/local/register",
      data
    );
    reset();
  };
  console.log(step);
  return (
    <form action="" className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container">
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
            <button type="submit" className="reg-next-moveBtn">
              зарегистрироваться
            </button>
          )}
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
