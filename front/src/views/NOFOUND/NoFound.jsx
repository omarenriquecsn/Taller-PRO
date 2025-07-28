import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Nofound.module.css";

const Nofound = () => {
  const [segundos, setSegundos] = useState(7);
  const navigate = useNavigate();
    useEffect(() => {
      const intervalo = setInterval(() => {
        setSegundos((unsegundo) => unsegundo - 1);
      }, 1000);
      if (segundos < 1) {
        clearInterval(intervalo);
        setSegundos(7);
        navigate("/");
      }
    },[segundos, navigate]);
  return (
    <div >
      <div className={style.container}>
      </div>
      <div className={style.contenido}>
        <h2>pagina no encontrada</h2>
        <p className={style.texto}>sera redirecionado a la pagina principal en {segundos}</p>
      </div>
    </div>
  );
};

export default Nofound;
