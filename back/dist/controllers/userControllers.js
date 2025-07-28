"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgProfileControler = exports.uploadImg = exports.loginUserController = exports.updateUserController = exports.createUserController = exports.byIdUserController = exports.getUserController = void 0;
const usersService_1 = require("../services/usersService");
const credentialService_1 = require("../services/credentialService");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getAllUsuers)().then((allUsers) => {
            res.status(200).json(allUsers);
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ menssage: "Ocurrio un error al obtener los usuarios" });
        console.log("Error:", error);
    }
});
exports.getUserController = getUserController;
const byIdUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = Number(req.params.id);
        const oneUser = yield (0, usersService_1.filterUser)(idUser).then((user) => {
            if (user)
                return res.status(200).json(user);
            else
                throw Error("El usuario no existe");
        });
    }
    catch (error) {
        res
            .status(404)
            .json({ menssage: "Ocurrio un error al obtener el usuario" });
        console.log("Error:", error);
    }
});
exports.byIdUserController = byIdUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, usersService_1.createUser)(req.body).then((user) => {
            res.status(201).json({ menssage: "Usuario creado" });
        });
    }
    catch (error) {
        res.status(400).json({
            menssage: "Ocurrio un error al crear el usuario el Email o el Usuario ya estan registrados o faltan datos",
        });
        console.log("Error:", error);
    }
});
exports.createUserController = createUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.newPassword) {
            yield (0, credentialService_1.updatePasswordCredential)(req.body).then(() => {
                res.status(201).json({ message: "Contraseña cambiada con Exito" });
            });
        }
        else if (req.body.newEmail) {
            yield (0, usersService_1.updateUser)(req.body).then(() => {
                res.status(201).json({ menssage: "Email actualizado" });
            });
        }
    }
    catch (error) {
        res.status(500).json({ menssage: "Ocurrio un error al actualizar" });
        console.log("Error:", error);
    }
});
exports.updateUserController = updateUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, usersService_1.loginStatus)(req.body);
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json({ menssage: "Error Usuario o password incorrectos",
            login: false
        });
        console.log("Error:", error);
    }
});
exports.loginUserController = loginUserController;
const uploadImg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const id = Number(req.params.id);
        console.log(file, id);
        if (file) {
            console.log("hola");
            yield (0, usersService_1.imgUploadService)(file, id);
            res.status(201).json({ menssage: "Imagen de perfil cargada con exito" });
        }
    }
    catch (error) {
        res.status(400).json({ menssage: "No se pudo cargar la imagen de perfil" });
    }
});
exports.uploadImg = uploadImg;
const imgProfileControler = (req, res) => {
    console.log("hola");
    console.log(req.body);
    console.log(req.params);
    try {
        const laImagen = (0, usersService_1.imgProfileService)(`Subida/${req.params.imagen}`);
        if (laImagen) {
            res.status(200).sendFile(laImagen);
        }
    }
    catch (error) {
        res.status(400).json({ menssage: "No existe la foto de perfil" });
    }
};
exports.imgProfileControler = imgProfileControler;
// AGREGA LOS ESTATUS AL MENSAJE
