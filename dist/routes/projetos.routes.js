"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projetosRoutes = void 0;
// src/routes/projetosRoutes.ts
const express_1 = require("express");
const ProjetoController_1 = __importDefault(require("../modules/projetos/infra/Controller/ProjetoController"));
const projetosRoutes = (0, express_1.Router)();
exports.projetosRoutes = projetosRoutes;
const projetosController = new ProjetoController_1.default();
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
//Finalizado
//Registrado
//# sourceMappingURL=projetos.routes.js.map