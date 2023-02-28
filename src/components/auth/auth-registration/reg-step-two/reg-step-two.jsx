import React from "react";

export const RegStepTwo = ({ register, errors }) => {
  return (
    <React.Fragment>
      <label htmlFor="reg-firstName-input">
        <input
          id="reg-firstName-input"
          type="text"
          className="reg-password"
          name="dwad"
          placeholder="Имя"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 1,
              message: "Поле не может быть пустым",
            },
          })}
        />
        <div style={{ color: "red" }}> {errors?.firstName?.message}</div>
      </label>
      <label htmlFor="reg-lastName-input">
        <input
          id="reg-lastName-input"
          type="text"
          className="reg-login"
          name=""
          placeholder="Фамилия"
          {...register("lastName", {
            required: true,
            minLength: {
              value: 1,
              message: "Поле не может быть пустым",
            },
          })}
        />
        <div style={{ color: "red" }}>{errors?.lastName?.message}</div>
      </label>
    </React.Fragment>
  );
};
