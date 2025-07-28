import style from "./ImgUser.module.css"
import { UserContex } from "../../../CONTEXT/UserList"
import { useContext, useState } from "react"
import Popup from "../../Popup/Popup"
import UpdateImg from "./UpdateImg/UpdateImg"
const ImgUser = ()=>{
const userGlobal = useContext(UserContex)
const imagen = userGlobal.userG.user.imgProfile
const [isOpen, setIsOpen] = useState(false)

const handleIsOpen = () => {
    const askConfirm = confirm("Esta Seguro que quiere cambiar la foto de perfil")
    askConfirm ? setIsOpen(!isOpen) : null
    
}
    return (
<>
        <img className={style.img} onClick={handleIsOpen} src={`http://localhost:3000/Users/imagen/${imagen}`} alt="fotoPerfil" />
        {isOpen ? (<Popup handleClose={()=>setIsOpen(!isOpen)} content={(<UpdateImg/>)}>
            
        </Popup>) : null}
</>
    )
}

export default ImgUser