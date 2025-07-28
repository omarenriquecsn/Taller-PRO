"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Subida/'); // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        const ext = path_1.default.extname(file.originalname); // Obtener la extensión del archivo
        const baseName = path_1.default.basename(file.originalname, ext); // Obtener el nombre base del archivo sin la extensión
        console.log(baseName);
        cb(null, baseName.replace(/ /g, "-") + ext); // Añadir un sufijo único y mantener la extensión
    }
});
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
