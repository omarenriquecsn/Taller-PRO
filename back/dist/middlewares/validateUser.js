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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const yup_1 = require("yup");
let userSchema = (0, yup_1.object)({
    name: (0, yup_1.string)().required(),
    email: (0, yup_1.string)().email().required(),
    nDni: (0, yup_1.number)().required(),
    birthdate: (0, yup_1.date)(),
    username: (0, yup_1.string)().required(),
    password: (0, yup_1.string)().required(),
});
const validateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userSchema.validate(req.body);
        next();
    }
    catch (error) {
        res.status(400).json({ menssage: error.errors });
    }
});
exports.validateUser = validateUser;
