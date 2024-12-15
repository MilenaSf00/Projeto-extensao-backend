"use strict";
// src/routes/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const projetos_routes_1 = require("./projetos.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
// Define as rotas para projetos
routes.use("/projetos", projetos_routes_1.projetosRoutes);
//# sourceMappingURL=index.js.map