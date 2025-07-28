"use strict";
// get /users => "Obtener todos los usuarios"
// get /users/:id => "Obtener un usuario por id"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// post /users/register => "Crear un nuevo usuario"
// put /user/update = "Acualizar los datos del usuario"
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const validateUser_1 = require("../middlewares/validateUser");
const multerImg_1 = __importDefault(require("../middlewares/multerImg"));
const router = (0, express_1.Router)();
router.get("/users", userControllers_1.getUserController);
router.post("/users/register", validateUser_1.validateUser, userControllers_1.createUserController);
router.post("/users/login", userControllers_1.loginUserController);
router.put("/users/update", userControllers_1.updateUserController);
router.get("/users/imagen/:imagen", userControllers_1.imgProfileControler);
router.post("/users/upload/:id", multerImg_1.default.single("fotoPerfil"), userControllers_1.uploadImg);
router.get("/users/:id", userControllers_1.byIdUserController);
exports.default = router;
