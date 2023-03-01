import React from "react";
import MaskedInput from "react-text-mask";

export const RegStepThree = ({ register, errors }) => {
  const mask = [
    "+",
    /[3]/,
    /[7]/,
    /[5]/,
    " ",
    "(",
    /2|2|3|4/,
    /5|9|3|4/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  return (
    <React.Fragment>
      <label htmlFor="reg-phone-input">
        <MaskedInput
          className="reg-password"
          required
          id="reg-phone-input"
          mask={mask}
        />
        <span>Номер телефона</span>
        <div style={errors.phone ? { color: "red" } : null}>
          {errors?.phone?.message || "В формате +375 (xx) xxx-xx-xx"}
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
            // pattern:
            //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
