import PropTypes from "prop-types";
import style from "./Turno.module.css";
import { UserContex } from "../../../CONTEXT/UserList";
import { useContext } from "react";

const Turno = ({turno}) => {
const {updateAppt} = useContext(UserContex)

  const fechaDelBack = turno?.date;
  const fecha = new Date(fechaDelBack);
  const opciones = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const fechaForm = new Intl.DateTimeFormat("es-VE", opciones).format(fecha);
  return (
    <div className={style.container}>
      <p>
        <span className={style.span}>Su cita es el</span>: {fechaForm}
      </p>
      <p>
        <span className={style.span}>Hora:</span> {turno?.time}
      </p>
      <p>
        <span className={style.span}>Servicio:</span> {turno?.description}
      </p>
      <p>
        <span className={style.span}>Estatus del servicio:</span>{" "}
        {turno?.status}
      </p>
      {turno?.status === "active" ? (
        <button
          onClick={() => updateAppt(turno.id)}
          className={style.button}
        >
          Cancelar
        </button>
      ) : null}
    </div>
  );
};

Turno.propTypes = {
  turno: PropTypes.any,
  handlerCancel: PropTypes.func,
};

export default Turno;
