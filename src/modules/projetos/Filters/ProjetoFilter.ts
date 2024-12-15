// src/modules/projetos/filters/ProjetoFilter.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface FilterOptions {
    situacao?: string;
    ano?: number;
    campus?: string;
    areaConhecimento?: string;
    linhaTematica?: string;
    modalidade?: string;
}

export default class ProjetoFilter {
    public static async applyFilters(filters: FilterOptions) {
        const query: any = {};

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
    }
}
