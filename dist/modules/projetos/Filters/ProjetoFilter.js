"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/projetos/filters/ProjetoFilter.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProjetoFilter {
    static applyFilters(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {};
            if (filters.situacao) {
                query.situacao = filters.situacao;
            }
            if (filters.ano) {
                query.vigencia = {
                    gte: new Date(`${filters.ano}-01-01`),
                    lte: new Date(`${filters.ano}-12-31`)
                };
            }
            if (filters.campus) {
                query.campus = filters.campus;
            }
            if (filters.areaConhecimento) {
                query.areaConhecimento = filters.areaConhecimento;
            }
            if (filters.linhaTematica) {
                query.linhaTematica = filters.linhaTematica;
            }
            if (filters.modalidade) {
                query.modalidade = filters.modalidade;
            }
            return prisma.projeto.findMany({
                where: query
            });
        });
    }
}
exports.default = ProjetoFilter;
//# sourceMappingURL=ProjetoFilter.js.map