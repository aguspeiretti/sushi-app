import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/sushilogo.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="registerContainer">
      <img src={logo} alt="" />

      <div className="form">
        <form>
          <div>
            <input
              className="campo-input"
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true })}
            />
            {errors?.nombre?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
          </div>
          <div>
            <input
              className="campo-input"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="error">Formato incorrecto</p>
            )}
          </div>
          <div>
            <input
              className="campo-input"
              type="password"
              placeholder="Nueva contraseña"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors?.password?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error">
                El password no puede tener menos de 5 caracteres
              </p>
            )}
          </div>
          <div>
            <input
              className="campo-input"
              type="password"
              placeholder="Repetir contraseña"
              {...register("password_repeat", {
                required: true,
                minLength: 5,
              })}
            />
            {watch("password_repeat") !== watch("password") &&
            getValues("password_repeat") ? (
              <p className="error">Las claves no coinciden</p>
            ) : null}
          </div>
          <div className="button-submit">
            {watch("password_repeat") === watch("password") ? (
              <input
                className="principal-button"
                type="submit"
                value="Registrarme"
              />
            ) : (
              <input
                disabled
                className=" disabled"
                type="submit"
                value="Registrarme"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
