import { Request, Response } from "express";
import {
  getAllUsuers,
  filterUser,
  createUser,
  updateUser,
  loginStatus,
  imgUploadService,
  imgProfileService,
} from "../services/usersService";
import {
  creteCredential,
  updatePasswordCredential,
  verifyLogin,
} from "../services/credentialService";
import { User } from "../entities/userEntity";
import multer from "multer"
const upload = multer()


export const getUserController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsuers().then((allUsers) => {
      res.status(200).json(allUsers);
    });
  } catch (error) {
    res
      .status(500)
      .json({ menssage: "Ocurrio un error al obtener los usuarios" });
    console.log("Error:", error);
  }
};

export const byIdUserController = async (req: Request, res: Response) => {
  try {
    const idUser: number = Number(req.params.id);
    const oneUser = await filterUser(idUser).then((user: User | undefined) => {
      if (user) return res.status(200).json(user);
      else throw Error("El usuario no existe");
    });
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Ocurrio un error al obtener el usuario" });
    console.log("Error:", error);
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body).then((user) => {
      res.status(201).json({ menssage: "Usuario creado" });
    });
  } catch (error) {
    res.status(400).json({
      menssage:
        "Ocurrio un error al crear el usuario el Email o el Usuario ya estan registrados o faltan datos",
    });
    console.log("Error:", error);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    if (req.body.newPassword) {
      await updatePasswordCredential(req.body).then(() => {
        res.status(201).json({ message: "Contraseña cambiada con Exito" });
      });
    } else if (req.body.newEmail) {
      await updateUser(req.body).then(() => {
        res.status(201).json({ menssage: "Email actualizado" });
      });
    }
  } catch (error) {
    res.status(500).json({ menssage: "Ocurrio un error al actualizar" });
    console.log("Error:", error);
  }
};
export const loginUserController = async (req: Request, res: Response) => {
  try {
    const user = await loginStatus(req.body);
    res.status(200).json({ login: true, user });
  } catch (error) {
    res.status(400).json({ menssage: "Error Usuario o password incorrectos",
      login: false
     });
    console.log("Error:", error);
  }
};

export const uploadImg = async (req:Request, res: Response) =>{
try{
  const file = req.file?.filename;
  const id = Number(req.params.id)
  console.log(file, id)
  if(file){

    console.log("hola")
    await imgUploadService(file, id)
    res.status(201).json({menssage: "Imagen de perfil cargada con exito"})
  }
}catch(error){
  res.status(400).json({menssage: "No se pudo cargar la imagen de perfil"})
}
}


export const imgProfileControler = (req: Request, res: Response) => {
  console.log("hola")
  console.log(req.body)
  console.log(req.params)
  try{
    const laImagen = imgProfileService(`Subida/${req.params.imagen}`)
    if(laImagen){
      res.status(200).sendFile(laImagen)
    }
  }catch(error){
    res.status(400).json({menssage: "No existe la foto de perfil"})
  }
}

// AGREGA LOS ESTATUS AL MENSAJE