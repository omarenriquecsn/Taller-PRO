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
exports.verifyLogin = exports.updatePasswordCredential = exports.creteCredential = void 0;
const credentialRepository_1 = __importDefault(require("../repositories/credentialRepository"));
let id = 4;
let credentialList = [
    {
        id: 1,
        username: "juanperez85",
        password: "SecurePassword123",
    },
    {
        id: 2,
        username: "mariagarcia90",
        password: "AnotherPassword456",
    },
    {
        id: 3,
        username: "carlosr78",
        password: "YetAnotherPassword789",
    },
    {
        id: 4,
        username: "luciaf2000",
        password: "Password2021!",
    },
];
// crear DTO
const creteCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, }) {
    const credential = credentialRepository_1.default.create({
        username,
        password,
    });
    yield credentialRepository_1.default.save(credential);
    return credential;
});
exports.creteCredential = creteCredential;
// crear DTO
const updatePasswordCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, password, }) {
    const credential = yield credentialRepository_1.default.findOneBy({
        id: userId
    });
    if (!credential)
        throw Error("No existe la Credencial");
    credential.password = password;
    yield credentialRepository_1.default.save(credential);
});
exports.updatePasswordCredential = updatePasswordCredential;
// crear DTO
const verifyLogin = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, }) {
    const credential = yield credentialRepository_1.default.findOne({
        where: {
            username,
            password,
        },
    });
    if (credential) {
        return credential.id;
    }
    else
        throw Error("Error al autenticar el usuario");
});
exports.verifyLogin = verifyLogin;
