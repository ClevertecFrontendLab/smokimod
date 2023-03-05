import "./form.scss";

export const Form = ({ handleSubmit, children }) => {
  return (
    <form action="" className="register-form" onSubmit={handleSubmit}>
      <div className="register-container">{children}</div>
    </form>
  );
};
