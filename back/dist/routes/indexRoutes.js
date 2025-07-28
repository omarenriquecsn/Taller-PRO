"use strict";
// ruta principal que recibe todas las solicitudes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const appointmentsRoutes_1 = __importDefault(require("./appointmentsRoutes"));
// import turnRoutes from "./turnRoutes"
const router = (0, express_1.Router)();
router.use("/", userRoutes_1.default);
router.use("/", appointmentsRoutes_1.default);
exports.default = router;
