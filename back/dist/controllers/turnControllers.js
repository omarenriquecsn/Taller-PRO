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
exports.updateTurnController = exports.createTurnController = exports.byIdTurnController = exports.getTurnController = void 0;
const turnsService_1 = require("../services/turnsService");
const getTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, turnsService_1.getAllTurns)().then((resp) => {
            res.status(200).json(resp);
        });
    }
    catch (error) {
        res
            .status(404)
            .json({ menssage: "Ha ocurrido un error al obtener el turno" });
        console.log("Error:", error);
    }
});
exports.getTurnController = getTurnController;
const byIdTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, turnsService_1.filterTurns)(Number(req.params.id)).then((resp) => {
            res.status(200).json(resp);
        });
    }
    catch (error) {
        res
            .status(404)
            .json({ menssage: "Ha ocurrido un error al buscar el turno" });
        console.log("Error:", error);
    }
});
exports.byIdTurnController = byIdTurnController;
const createTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, turnsService_1.createTurn)(req.body).then(() => {
            res.status(201).json({ menssage: "Turno Creado" });
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ menssage: "Ha ocurrido un error al crear un turno" });
        console.log("Error:", error);
    }
});
exports.createTurnController = createTurnController;
const updateTurnController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, turnsService_1.updateTurn)(Number(id)).then(() => {
            res.status(201).json({ menssage: "Turno Cancelado" });
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ menssage: "Ha ocurrido un error al cancelar el turno" });
        console.log("Error:", error);
    }
});
exports.updateTurnController = updateTurnController;
