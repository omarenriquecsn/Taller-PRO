import axios from "axios";
import { useContext } from "react";
import style from "./CrearTurno.module.css";
import { UserContex } from "../../CONTEXT/UserList";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const CrearTurno = () => {
  const navigate = useNavigate();
  const userGlobal = useContext(UserContex);

  const { userG,addAppt } = userGlobal;

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      description: "",
    },

    validationSchema: Yup.object({
      date: Yup.date()
        .required("La fecha es requerida")
        .min(new Date(), "No puede agendar turnos en el pasado"),
      time: Yup.string().required("La hora es requerida"),
      description: Yup.string()
        .required("La descripcion es requerida")
        .max(25, "Maximo 25 caracteres"),
    }),
    onSubmit: async (values) => {
      values.userId = userG.user.id;
      await axios
        .post("http://localhost:3000/appointments/schedule", values)
        .then(() => {
          addAppt(values)
          alert("Su Turno ha sido Creado Exitosamente");
          navigate("/MisTurnos");
        })
        .catch((error) => {
          alert(
            "Su turno no fue creado porfavor verifique los datos suministrados"
          );
          console.error("Error:", error);
        });
    },
  });

  return (
    <div className={style.container}>
      <form
        onSubmit={formik.handleSubmit}
        className="formulario"
        id={style.formulario}
      >
        <label htmlFor="date">Fecha de la Cita</label>
        <input
          onChange={formik.handleChange}
          type="date"
          id="date"
          className="date"
          name="date"
          onBlur={formik.handleBlur}
          value={formik.values.date}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className={style.mensaje}>{formik.errors.date}</div>
        ) : null}

        <label htmlFor="time">Hora de la cita</label>
        <select
          onChange={formik.handleChange}
          className={style.input}
          id="time"
          onBlur={formik.handleBlur}
          value={formik.values.time}
          name="time"
        >
          <option value="default">Seleccione una hora para su turno</option>
          <option value="8:00Am">8:00Am</option>
          <option value="9:00Am">9:00Am</option>
          <option value="10:00Am">10:00Am</option>
          <option value="11:00Am">11:00Am</option>
          <option value="12:00M">12:00M</option>
          <option value="1:00Pm">1:00Pm</option>
          <option value="2:00Pm">2:00Pm</option>
          <option value="3:00Pm">3:00Pm</option>
          <option value="4:00Pm">4:00Pm</option>
        </select>

        {formik.touched.time && formik.errors.time ? (
          <div className={style.mensaje}>{formik.errors.time}</div>
        ) : null}

        <label htmlFor="description">Breve descripcion del servicio</label>
        <input
          onChange={formik.handleChange}
          type="description"
          className="description"
          name="description"
          value={formik.values.description}
          onBlur={formik.handleBlur}
          id="description"
        />

        {formik.touched.description && formik.errors.description ? (
          <div className={style.mensaje}>{formik.errors.description}</div>
        ) : null}
        <button
          type="submit"
          disabled={
            formik.values.description.length == 0 ||
            formik.values.time.length == 0 ||
            formik.values.date.length == 0
          }
        >
          Crear Su nuevo Turno
        </button>
      </form>
      <div className={style.boxImg}>
        <img
          className={style.img}
          src="src\assets\6HgzjerzQkWYy-kg-pVd6g.png"
          alt="LOGO"
        />
        <h2 className={style.h2}>FORMULARIO DE CITAS</h2>
      </div>
    </div>
  );
};

export default CrearTurno;
