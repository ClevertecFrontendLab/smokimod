import React from "react";
import { withHookFormMask } from "use-mask-input";

export const RegStepThree = ({ register, errors }) => {
  return (
    <React.Fragment>
      <label htmlFor="reg-phone-input">
        <input
          className="reg-password"
          type="text"
          id="reg-phone-input"
          {...withHookFormMask(register("phone"), ["+375 (33) 999-99-99"], {
            required: true,
          })}
        />
        <span>Номер телефона</span>
        <div style={errors.phone ? { color: "red" } : null}>
          {errors?.phone || "В формате +375 (xx) xxx-xx-xx"}
        </div>
      </label>
      <label htmlFor="reg-email-input">
        <input
          id="reg-email-input"
          type="email"
          className="reg-login"
          placeholder=" "
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <span>email</span>
        <div style={{ color: "red" }}>
          {errors?.email && "Введите корректный e-mail"}
        </div>
      </label>
    </React.Fragment>
  );
};
