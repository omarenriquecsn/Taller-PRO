import { useContext } from "react"
import { UserContex } from "../../../CONTEXT/UserList"
import style from "./CerrarSesion.module.css"
const CerrarSesion = ()=>{
const userGlobal = useContext(UserContex)

const {exitLogin} = userGlobal

    const handdlerEndSesion = async () => {
        exitLogin()
    }
    return(
        <button className={style.button} onClick={handdlerEndSesion}>Cerrar Sesion</button>
    )
}

export default CerrarSesion