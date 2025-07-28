// get /turn => "Obtener todos los turnos"
// get /turn/:id => "Obtener un turno por id"

import { Router } from "express";
import {
  byIdTurnController,
  createTurnController,
  getTurnController,
  updateTurnController,
} from "../controllers/turnControllers";

// post /turn/schedule => "Crear un nuevo turno"
// put /turn/cancel => "Cancelar todos los turnos"
const router: Router = Router();
router.get("/appointments", getTurnController);
router.get("/appointments/:id", byIdTurnController);
router.post("/appointments/schedule", createTurnController);
router.put("/appointments/cancel/:id", updateTurnController);

export default router;
