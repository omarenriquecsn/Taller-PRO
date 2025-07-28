"use strict";
// get /turn => "Obtener todos los turnos"
// get /turn/:id => "Obtener un turno por id"
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnControllers_1 = require("../controllers/turnControllers");
// post /turn/schedule => "Crear un nuevo turno"
// put /turn/cancel => "Cancelar todos los turnos"
const router = (0, express_1.Router)();
router.get("/appointments", turnControllers_1.getTurnController);
router.get("/appointments/:id", turnControllers_1.byIdTurnController);
router.post("/appointments/schedule", turnControllers_1.createTurnController);
router.put("/appointments/cancel/:id", turnControllers_1.updateTurnController);
exports.default = router;
