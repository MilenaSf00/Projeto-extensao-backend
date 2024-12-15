// src/routes/projetosRoutes.ts
import { Router } from "express";
import ProjetosController from "../modules/projetos/infra/Controller/ProjetoController";

const projetosRoutes = Router();
const projetosController = new ProjetosController();

// Rota para criar um novo projeto
projetosRoutes.post("/", projetosController.create.bind(projetosController));

// Rota para atualizar um projeto existente
projetosRoutes.put("/:id", projetosController.update.bind(projetosController));

// Rota para deletar um projeto existente
projetosRoutes.delete("/:id", projetosController.delete.bind(projetosController));

// Rota para listar todos os projetos
projetosRoutes.get("/", projetosController.getAll.bind(projetosController));

// Rota para buscar um projeto específico
projetosRoutes.get("/:id", projetosController.getOne.bind(projetosController));

projetosRoutes.get("/filter", projetosController.getFiltered.bind(projetosController));

export { projetosRoutes };
//Finalizado
//Registrado
