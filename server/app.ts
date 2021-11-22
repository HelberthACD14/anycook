import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import tasksRoutes from "./routes/index";
import recipeRoutes from "./routes/recipes";

const app = express();
const methodOverride = require('method-override');
const session = require('express-session');

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", tasksRoutes);
app.use("/api", recipeRoutes);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'SecretAccessTP',
    resave: true,
    saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, "..", "..", "dist")));
//cd Server
//npm run build
//npm start
//navigate to localhost 3000

export default app;
