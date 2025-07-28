import { useNavigate } from "react-router-dom"
import style from "./BotonCrearTurno.module.css"
const BotonCrearTurno = () => {

    const navigate = useNavigate()
    const handdlerCreateT = () => {
        navigate("/CrearTurno")
    }

    return(
        <button className={style.button} onClick={handdlerCreateT}>Crear un nuevo Turno</button>
    )
}

export default BotonCrearTurno