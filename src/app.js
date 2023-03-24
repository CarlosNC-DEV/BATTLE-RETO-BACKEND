import express from "express";
import cors from "cors";
import morgan from "morgan";

import pokemon from "./routes/pokemon.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(pokemon);

export default app;
