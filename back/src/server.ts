import express from "express";
import router from "./routes/indexRoutes";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);

export default app;
