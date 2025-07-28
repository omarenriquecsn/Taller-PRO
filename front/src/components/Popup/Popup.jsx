import PropTypes from "prop-types";
import style from "./Popup.module.css"


const Popup = ({content= "hola", handleClose }) =>{

return( 
        <div className={style.popupbox} >
            <div className={style.container}>
                <span className={style.closeicon} onClick={handleClose}> cerrar </span>
                {content}
            </div>
        </div>
    ) 

}

Popup.propTypes = {
    content: PropTypes.any,
    handleClose: PropTypes.func
}
export default Popup