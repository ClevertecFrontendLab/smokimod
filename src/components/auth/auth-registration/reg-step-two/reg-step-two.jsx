import React from "react";

export const RegStepTwo = ({ register, errors }) => {
  return (
    <React.Fragment>
      <label htmlFor="reg-firstName-input">
        <input
          id="reg-firstName-input"
          type="text"
          className="reg-password"
          placeholder=" "
          {...register("firstName", {
            required: true,
            minLength: {
              message: "Поле не может быть пустым",
            },
          })}
        />
        <span>Имя</span>
        <div style={{ color: "red" }}> {errors?.firstName?.message}</div>
      </label>
      <label htmlFor="reg-lastName-input">
        <input
          id="reg-lastName-input"
          type="text"
          className="reg-login"
          placeholder=" "
          {...register("lastName", {
            required: true,
            minLength: {
              message: "Поле не может быть пустым",
            },
          })}
        />
        <span>Фамилия</span>
        <div style={{ color: "red" }}>{errors?.lastName?.message}</div>
      </label>
    </React.Fragment>
  );
};
