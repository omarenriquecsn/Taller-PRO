import PropTypes from "prop-types";
import Turno from "./Turnos/Turno";
import style from "./PaginaDeTurnos.module.css";
import ArticleConImg from "../Articles/Article/ArticleConImg";
import BotonCrearTurno from "./BotonCrearTurno/BotonCrearTurno";
import CerrarSesion from "./CerrarSesion/CerrarSesion";
import ImgUser from "./ImgUser/ImgUser";
import TituloBienvenida from "./TituloBienvenida/TituloBienvenida";
import { UserContex } from "../../CONTEXT/UserList";
import { useContext } from "react";

const PaginaDeTurnos = () => {


  const { appointments } = useContext(UserContex);
  return (
    <div>
      <div className={style.containerUp}>
        <div className={style.divTopimg}>
            <ImgUser />
        </div>
        <div className={style.divToptitle}>
          <TituloBienvenida />
        </div>
        <div className={style.divTopboton}>
          <CerrarSesion />
        </div>
      </div>

      <div className={style.containerP}>
        <ArticleConImg
          Title={"Turnos Agendados"}
          Description={
            "Aqui Puedes ver todos las citas que haz reservado en nuestro taller "
          }
          Url="https://static.vecteezy.com/system/resources/previews/026/696/573/non_2x/illustration-of-car-schedule-icon-in-dark-color-and-white-background-vector.jpg"
        />
        <BotonCrearTurno />
      </div>
      <div className={style.containerT}>
        {appointments?.map((turno) => {
          return <Turno key={turno.id} turno={turno} />;
        })}
      </div>
    </div>
  );
};

PaginaDeTurnos.propTypes = {
  allTurnos: PropTypes.array,
  handlerCancel: PropTypes.func,
};

export default PaginaDeTurnos;
