import PaginaDeTurnos from "../../components/Appointments/PaginaDeTurnos.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const MisTurnos = () => {
  const [allTurnos, setLosturnos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Appointments")
      .then((resp) => {
        setLosturnos(resp.data);
      })
      .catch((error) => {
        console.error("Ha ocurrido el siguiete error:", error);
      });
  }, []);

  const handlerCancel = (id) => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(() => {
        const updateTurns = allTurnos.map((turno) => {
          if (turno.id === id) {
            turno.status = "cancelled";
            return turno;
          } else {
            return turno;
          }
        });
        setLosturnos([...updateTurns]);
      })
      .catch((error) => {
        console.error("Ha ocurrido un error", error);
      });
  };

  return (
    <div>
      <PaginaDeTurnos allTurnos={allTurnos} handlerCancel={handlerCancel} />
    </div>
  );
};

export default MisTurnos;
