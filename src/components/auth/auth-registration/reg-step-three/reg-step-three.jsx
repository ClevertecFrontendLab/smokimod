import React from "react";
import MaskedInput from "react-text-mask";

export const RegStepThree = ({ register, errors }) => {
  const formatChars = {
    P: "[PK]",
    0: "[02468]",
  };
  return (
    <React.Fragment>
      <label htmlFor="reg-phone-input">
        {/* <input
          id="reg-phone-input"
          type="number"
          className="reg-password"
          name="dwad"
          placeholder="Номер телефона"
          {...register("phone", {
            required: true,
            minLength: {
              value: 1,
              message: "Поле не может быть пустым",
            },
          })}
        /> */}
        <MaskedInput
          className="reg-password"
          required={true}
          id="reg-phone-input"
          placeholder="Номер телефона"
          mask={[
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
          ]}
          type="text"
          value="+375 (xx) xxx-xx-xx"
          keepCharPositions={true}
        />
        <div style={errors.phone ? { color: "red" } : null}>
          {errors?.phone?.message || "В формате +375 (xx) xxx-xx-xx"}
        </div>
      </label>
      <label htmlFor="reg-login-input">
        <input
          id="reg-login-input"
          type="email"
          className="reg-login"
          name=""
          placeholder="email"
          {...register("lastName", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <div style={{ color: "red" }}>
          {errors?.email && "Введите корректный e-mail"}
        </div>
      </label>
    </React.Fragment>
  );
};
