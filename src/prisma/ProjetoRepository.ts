/*import { PrismaClient } from "@prisma/client";
import IProjetoDTO from "../modules/projetos/dtos/IProjetoDTO";
import ProjetoEntity from "../modules/projetos/entities/ProjetosEntity";
import IProjetoRepository from "../modules/projetos/infra/repositories/IProjetosRepository";


const prisma = new PrismaClient();

export default class ProjetoRepository implements IProjetoRepository {
    public async create(data: IProjetoDTO): Promise<ProjetoEntity> {
        // Certifique-se de que o objeto está no formato esperado pelo Prisma
        const projetoData: ProjetoCreateInput = {
            id_projeto: data.id_projeto, // Se id_projeto for gerado automaticamente pelo banco, remova ou deixe opcional
            modalidade: data.modalidade ?? "", // Adicione valores padrão para campos opcionais
            unidade_origem: data.unidade_origem ?? "",
            titulo_projeto: data.titulo_projeto ?? "",
            area_conhecimento: data.area_conhecimento ?? "",
            area_tematica: data.area_tematica ?? "",
            linha_tematica: data.linha_tematica ?? "",
            coord_projeto: data.coord_projeto ?? "",
            email_coord_projeto: data.email_coord_projeto ?? "",
            dt_inicio_proj: data.dt_inicio_proj ?? new Date(),
            dt_fim_proj: data.dt_fim_proj ?? new Date(),
            situacao: data.situacao ?? "",
            ult_alter_proj: data.ult_alter_proj ?? new Date(),
            palavras_chave: data.palavras_chave ?? "",
            resumo: data.resumo ?? "",
            parcerias: data.parcerias ?? "",
        };

        const projeto = await prisma.projeto.create({ data: projetoData });
        return projeto as ProjetoEntity;
    }
    
    
    public async create(data: IProjetoDTO): Promise<ProjetoEntity> {
        const projeto = await prisma.projeto.create({ data });
        return projeto as ProjetoEntity;
    }

    public async delete(id: number): Promise<void> {
        await prisma.projeto.delete({ where: { id_projeto: id } });
    }

    public async findById(id: number): Promise<ProjetoEntity | null> {
       
        const projeto = await prisma.projeto.findUnique({
            where: {
                id_projeto: id 
            }
        });
        return projeto as ProjetoEntity | null;
    }

    public async update(data: ProjetoEntity): Promise<ProjetoEntity> {
        const projeto = await prisma.projeto.update({
            where: { id_projeto: data.id_projeto },
            data
        });
        return projeto as ProjetoEntity;
    }

    public async listAll(): Promise<ProjetoEntity[]> {
        return await prisma.projeto.findMany();
    }
    public async filterProjects(filters: any): Promise<ProjetoEntity[]> {
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
            query.unidade_origem = filters.campus;
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

        return await prisma.projeto.findMany({
            where: query
        });
    }
}
*/import { PrismaClient, Projeto } from "@prisma/client"; // Não importa `ProjetoCreateInput` diretamente
import IProjetoDTO from "../modules/projetos/dtos/IProjetoDTO";
import ProjetoEntity from "../modules/projetos/entities/ProjetosEntity";
import IProjetoRepository from "../modules/projetos/infra/repositories/IProjetosRepository";

const prisma = new PrismaClient();

export default class ProjetoRepository implements IProjetoRepository {
    public async create(data: IProjetoDTO): Promise<ProjetoEntity> {
        // Ajuste de dados para garantir que não há valores nulos onde não são permitidos
        const projetoData: Projeto = {
            id_projeto: data.id_projeto, // Se o `id_projeto` for gerado automaticamente pelo banco, remova esse campo
            modalidade: data.modalidade || '',  // Garantir que `modalidade` não seja nulo
            unidade_origem: data.unidade_origem || '',
            titulo_projeto: data.titulo_projeto || '',
            area_conhecimento: data.area_conhecimento || '',
            area_tematica: data.area_tematica || '',
            linha_tematica: data.linha_tematica || '',
            coord_projeto: data.coord_projeto || '',
            email_coord_projeto: data.email_coord_projeto || '',
            dt_inicio_proj: data.dt_inicio_proj || new Date(),
            dt_fim_proj: data.dt_fim_proj || new Date(),
            situacao: data.situacao || '',
            ult_alter_proj: data.ult_alter_proj || new Date(),
            palavras_chave: data.palavras_chave || '',
            resumo: data.resumo || '',
            parcerias: data.parcerias || '',
        };

        // Criar o projeto usando Prisma
        const projeto = await prisma.projeto.create({ data: projetoData });
        return projeto as ProjetoEntity;
    }

    public async delete(id: number): Promise<void> {
        await prisma.projeto.delete({ where: { id_projeto: id } });
    }

    public async findById(id: number): Promise<ProjetoEntity | null> {
        const projeto = await prisma.projeto.findUnique({
            where: { id_projeto: id }
        });
        return projeto as ProjetoEntity | null;
    }

    public async update(data: ProjetoEntity): Promise<ProjetoEntity> {
        const projeto = await prisma.projeto.update({
            where: { id_projeto: data.id_projeto },
            data
        });
        return projeto as ProjetoEntity;
    }

    public async listAll(): Promise<ProjetoEntity[]> {
        return await prisma.projeto.findMany();
    }

    /*public async filterProjects(filters: any): Promise<ProjetoEntity[]> {
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
            query.unidade_origem = filters.campus;
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

        return await prisma.projeto.findMany({
            where: query
        });
    }*/
}
