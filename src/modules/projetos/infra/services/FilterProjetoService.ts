import { PrismaClient } from "@prisma/client";
import ProjetoEntity from "../../entities/ProjetosEntity";
const prisma = new PrismaClient();

export default class FilterProjetoService {
    public async execute(filters: any): Promise<ProjetoEntity[]> {
        const query: any = {};

        // Aplicar filtros
        if (filters.campus) {
            query.unidade_origem = filters.campus; // Ajustar para o campo correto
        }

        if (filters.situacao) {
            query.situacao = filters.situacao;
        }

        if (filters.ano) {
            query.ano = filters.ano;
        }

        // Adicionar mais filtros conforme necessário

        return await prisma.projeto.findMany({
            where: query
        });
    }
}
