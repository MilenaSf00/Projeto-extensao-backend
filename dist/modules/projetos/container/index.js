"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ProjetoRepository_1 = __importDefault(require("../../../prisma/ProjetoRepository"));
const ListProjetoService_1 = __importDefault(require("../infra/services/ListProjetoService"));
tsyringe_1.container.registerSingleton("ProjetoRepository", ProjetoRepository_1.default);
tsyringe_1.container.registerSingleton("ListProjetoService", ListProjetoService_1.default);
//# sourceMappingURL=index.js.map