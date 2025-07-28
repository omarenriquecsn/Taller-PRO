// get /users => "Obtener todos los usuarios"
// get /users/:id => "Obtener un usuario por id"

// post /users/register => "Crear un nuevo usuario"
// put /user/update = "Acualizar los datos del usuario"

import { Router } from "express";
import {
  byIdUserController,
  createUserController,
  getUserController,
  imgProfileControler,
  loginUserController,
  updateUserController,
  uploadImg,
} from "../controllers/userControllers";
import { validateUser } from "../middlewares/validateUser";
import upload from "../middlewares/multerImg";

const router: Router = Router();

router.get("/users", getUserController);
router.post("/users/register", validateUser, createUserController);
router.post("/users/login", loginUserController);
router.put("/users/update", updateUserController);
router.get("/users/imagen/:imagen", imgProfileControler)
router.post("/users/upload/:id", upload.single("fotoPerfil"), uploadImg)
router.get("/users/:id", byIdUserController);

export default router;
