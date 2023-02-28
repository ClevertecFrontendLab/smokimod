import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { RegStepOne } from "./reg-step-one/reg-step-one";
import { RegStepTwo } from "./reg-step-two/reg-step-two";
import { RegStepThree } from "./reg-step-three/reg-step-three";

import "./auth-registration.scss";

export const AuthRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const [step, setStep] = useState(1);
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
            <span>{step > 3 ? 3 : step} шаг из 3</span>
          </div>
        </div>
        <div className="reg-required-inputs-container">
          {step === 1 && <RegStepOne register={register} errors={errors} />}
          {step === 2 && <RegStepTwo register={register} errors={errors} />}
          {step === 3 && <RegStepThree register={register} errors={errors} />}
        </div>
        <div className="next-move-container">
          <button
            className="reg-next-moveBtn"
            type="buttom"
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            disabled={!isDirty || !isValid}
          >
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
