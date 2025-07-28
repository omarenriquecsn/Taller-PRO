import { UserContex } from "../../../CONTEXT/UserList"
import { useContext } from "react"
import style from "./TituloBienvenida.module.css"

const TituloBienvenida = () => {
    const userGlobal = useContext(UserContex)

    const Nombre = userGlobal.userG.user.name
    return(
        <div>
            <h1 className={style.title}>Bienvenido {Nombre}</h1>
        </div>
    )
}

export default TituloBienvenida