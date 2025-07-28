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
exports.imgProfileService = exports.imgUploadService = exports.loginStatus = exports.updateUser = exports.createUser = exports.filterUser = exports.getAllUsuers = exports.resend = void 0;
const resend_1 = require("resend");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const credentialService_1 = require("./credentialService");
const path_1 = __importDefault(require("path"));
exports.resend = new resend_1.Resend("re_8nMjrYYa_L6gQidFh7ZtYiAZfFP92aP6k");
const getAllUsuers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userRepository_1.default.find({
        relations: ["credential", "appointments"],
        select: {
            credential: {
                username: true,
            },
        },
    });
    return users;
});
exports.getAllUsuers = getAllUsuers;
const filterUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository_1.default.findOne({
            where: { id },
            relations: {
                appointments: true,
            },
        });
        if (user) {
            return user;
        }
    }
    catch (error) {
        throw Error("El usuario no existe");
    }
});
exports.filterUser = filterUser;
const createUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, birthdate, nDni, username, password, }) {
    const newCredential = { username, password };
    const credential = yield (0, credentialService_1.creteCredential)(newCredential);
    const newUser = userRepository_1.default.create({
        name,
        email,
        birthdate,
        nDni,
        credential,
    });
    yield userRepository_1.default.save(newUser);
    const elEmail = yield exports.resend.emails.send({
        from: "Taller Omar Contreras <onboarding@resend.dev>",
        to: [newUser.email],
        subject: "Bienvenidos al Taller Omar Contreras",
        html: `<p>Hola su usuario en el taller Omar Contreras a sido creado satisfactoriamente con las siguietes credenciales </p> 
    <p><strong>username:</strong> ${username} </p> 
    <p><strong>password:</strong> ${password}</p>
    <img src="https://resend-attachments.s3.amazonaws.com/lJDOT7S2mgU7rm1"/>`,
    });
    return newUser;
});
exports.createUser = createUser;
const updateUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ newEmail, userId }) {
    const user = yield userRepository_1.default.findOneBy({
        id: userId,
    });
    if (user) {
        user.email = newEmail;
        yield userRepository_1.default.save(user);
    }
    else
        throw Error("El usuario no existe");
});
exports.updateUser = updateUser;
const loginStatus = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, }) {
    try {
        const idUser = yield (0, credentialService_1.verifyLogin)({ username, password });
        if (idUser) {
            const user = yield userRepository_1.default.findOneBy({
                id: Number(idUser),
            });
            if (user)
                return user;
        }
    }
    catch (erro) {
        throw Error("Error al autenticar al usuario");
    }
});
exports.loginStatus = loginStatus;
const imgUploadService = (file, id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, exports.filterUser)(id);
    console.log(user);
    if (user) {
        user.imgProfile = file;
        yield userRepository_1.default.save(user);
    }
    else {
        throw Error("El Usuario no existe");
    }
});
exports.imgUploadService = imgUploadService;
const imgProfileService = (direction) => {
    const imagen = path_1.default.join(__dirname, `../../${direction}`);
    return imagen;
};
exports.imgProfileService = imgProfileService;
