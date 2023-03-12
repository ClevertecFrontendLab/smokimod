import "./button.scss";

export const Button = ({ isDirty, isValid, children, errors }) => {
  console.log(!errors);
  return (
    <button
      type="submit"
      className={
        errors?.password || errors?.password_repeat
          ? "reg-next-moveBtn disabled"
          : "reg-next-moveBtn"
      }
      disabled={!isDirty || !isValid}
    >
      {children}
    </button>
  );
};
