import { useState } from "react";
import { AuthRegistration } from "./auth-registration/auth-registration";
import { RegistrationSucces } from "./auth-registration/registration-succes/registration-succes";

import "./auth.scss";

export const Auth = () => {
  const [step, setStep] = useState(1);
  console.log(step);
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <h1 className="auth-head">Cleverland</h1>
        {step <= 3 && <AuthRegistration step={step} setStep={setStep} />}
        {step === 4 && <RegistrationSucces />}
      </div>
    </div>
  );
};
