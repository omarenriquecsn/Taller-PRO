import axios from "axios";
import { useFormik } from "formik"
import * as Yup from "yup"
import { UserContex } from "../../../../CONTEXT/UserList";
import { useContext } from "react";
import style from "./UpdateImg.module.css"

const UpdateImg = () => {

    const {userG, addUser} = useContext(UserContex)

const formik = useFormik({
    initialValues:{
        fotoPerfil: null,
    },
    validationSchema: Yup.object({
        fotoPerfil: Yup.mixed().required("La imagen es requerida").test("fileForma", 'El formato no es soportado', (value) => {
            if(value){
                const suportedFormats = ['image/jpg', 'image/jpeg', 'image/png'];
                return suportedFormats.includes(value.type)
            }
            return false
        }),
    }),
    onSubmit: values => {
        axios.post(`http://localhost:3000/users/upload/${userG.user.id}`,values,{headers:{"Content-Type": "multipart/form-data"}}).then(()=>{
            const newUser = userG;
            newUser.user.imgProfile =values.fotoPerfil.name.replace(/ /g, "-" )
             addUser(newUser)
             alert("Su foto de perfil ha sido modificada")
        })
    }
})
    return(
        <form className={style.form} onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="fotoPerfil">Sube tu imagen (JPG, JPEG, PNG)</label>
          <input 
            id="fotoPerfil"
            name="fotoPerfil"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(event) => {
              formik.setFieldValue('fotoPerfil', event.currentTarget.files[0]);
            }}
          />
          {formik.errors.fotoPerfil && formik.touched.fotoPerfil && (
            <div>{formik.errors.fotoPerfil}</div>
          )}
        </div>
        <button type="submit">Cambiar imagen</button>
      </form>
    );
    
}

export default UpdateImg