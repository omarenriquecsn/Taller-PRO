import axios from "axios";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Su nombre y apellido son requerido"),
      email: Yup.string().email().required("El email es requerido"),
      birthdate: Yup.date().required("Su fecha de nacimiento es requerida"),
      nDni: Yup.number().required("Su numero de DNI es requerido"),
      username: Yup.string().required("Un Nombre de usuario es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(7, "La contraseña debe tener 7 o mas caracteres"),
    }),
    onSubmit: async (values) => {
      axios
        .post("http://localhost:3000/users/register", values)
        .then(() => {
          alert("Usuario Creado con Exito");
          navigate("/Login");
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
  return (
    <div className={style.container}>
      <form
        onSubmit={formik.handleSubmit}
        className="formulario"
        id={style.formulario}
      >
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="Ejem: Pedro Perez"
          className="name"
          id="name"
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={style.mensaje} >{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="Example@gmail.com"
          className="email"
          id="email"
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className={style.mensaje}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="date"
          className="birthdate"
          id="birthdate"
          value={formik.values.birthdate}
        />

        {formik.touched.birthdate && formik.errors.birthdate ? (
          <div className={style.mensaje}>{formik.errors.birthdate}</div>
        ) : null}

        <label htmlFor="nDni">Documento de identidad</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="number"
          className="nDni"
          id="nDni"
          value={formik.values.nDni}
        />
        {formik.touched.nDni && formik.errors.nDni ? (
          <div className={style.mensaje}>{formik.errors.nDni}</div>
        ) : null}

        <label htmlFor="username">Username</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="username"
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
          className="password"
          id="password"
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={style.mensaje}>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Registrarse</button>
      </form>
      <div className={style.boxImg}>
        <img
          className={style.img}
          src="src\assets\6HgzjerzQkWYy-kg-pVd6g.png"
          alt="LOGO"
        />
        <h2 className={style.h2}>FORMULARIO DE REGISTRO</h2>

        <p className={style.mensaje}>
          Si ya estas registrado haz click en{" "}
          <Link className={style.link} to="/Login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
