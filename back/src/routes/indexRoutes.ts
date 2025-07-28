// ruta principal que recibe todas las solicitudes

import { Router } from "express";
import userRoutes from "./userRoutes";
import appointmentsRoutes from "./appointmentsRoutes";
// import turnRoutes from "./turnRoutes"
const router: Router = Router();

router.use("/", userRoutes);
router.use("/", appointmentsRoutes);

export default router;
