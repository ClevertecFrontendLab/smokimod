import { useForm } from "react-hook-form";
import { Button } from "../auth-components/button/button";

import { Form } from "../auth-components/form/form";
import { RestorePasswordInputs } from "./restore-password-inputs/restore-password-inputs";

import "./restore-password.scss";

export const RestorePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data) => {
    return console.log(data);
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <div className="register-steps">
        <h2>Восстановление пароля</h2>
      </div>
      <div className="reg-required-inputs-container">
        <RestorePasswordInputs register={register} errors={errors} />
      </div>
      <div className="next-move-container">
        <Button isDirty={isDirty} isValid={isValid} errors={errors}>
          сохранить изменения
        </Button>
        <div className="next-move-question">
          <span style={{ color: "#727272" }}>
            После сохранения войдите в библиотеку, используя новый пароль
          </span>
        </div>
      </div>
    </Form>
  );
};
