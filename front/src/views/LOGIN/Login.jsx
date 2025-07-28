import axios from "axios";
import { useContext } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContex } from "../../CONTEXT/UserList";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const userGlobal = useContext(UserContex);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("El nombre de usuario es requerido"),
      password: Yup.string()
        .required("La contraseña es Requerida")
        .min(7, "Minimo debe teren 7 caracteres"),
    }),
    onSubmit: async (values) => {
      axios
        .post("http://localhost:3000/users/login", values)
        .then((res) => {
          userGlobal.addUser(res.data);
          alert("Ha iniciado sesión con exito");
          navigate("/MisTurnos");
        })
        .catch((error) => {
          alert(
            "Ocurrio un error al iniciar sesión verifique sus credenciales o el uso de mayusculas"
          );
          console.error(error);
        });
    },
  });

  return (
    <div className={style.container}>
      <div className={style.boxImg}>
        <img
          className={style.img}
          src="src\assets\6HgzjerzQkWYy-kg-pVd6g.png"
          alt="LOGO"
        />
        <h2 className={style.h2}>Inicio de Sesion</h2>

        <p className={style.mensaje}>
          Si aun no estas registrado haz click en{" "}
          <Link className={style.link} to="/Register">
            Register
          </Link>
        </p>
      </div>
      <div>
        <form className={style.formulario} onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="nickname"
            name="username"
            id="username"
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className={style.mensaje}>{formik.errors.username}</div>
          ) : null}

          <label htmlFor="password">Contraseña</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="password"
            placeholder="Lacontraseña123."
            name="password"
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={style.mensaje}>{formik.errors.password}</div>
          ) : null}

          <button
          type="submit"
          disabled={
            formik.values.username.length == 0 ||
            formik.values.password.length == 0 
          }
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
