// src/routes/index.ts

import { Router } from "express";
import { projetosRoutes } from "./projetos.routes"; 

const routes = Router();

// Define as rotas para projetos
routes.use("/projetos", projetosRoutes);

export { routes };
