import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateProjetoService from "../services/CreateProjetoService";
import DeleteProjetoService from "../services/DeleteProjetoService";
import FindOneProjetoService from "../services/FindOneProjetoService";
import ListProjetoService from "../services/ListProjetoService";
import UpdateProjetoService from "../services/UpdateProjetoService";
//import FilterProjetoService from "../services/FilterProjetoService";
import ProjetoFilter from "../../Filters/ProjetoFilter";


export default class ProjetosController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
            id_projeto,
            modalidade,
            unidade_origem,
            titulo_projeto,
            area_conhecimento,
            area_tematica,
            linha_tematica,
            coord_projeto,
            email_coord_projeto,
            dt_inicio_proj,
            dt_fim_proj,
            situacao,
            ult_alter_proj,
            palavras_chave,
            resumo,
            parcerias
        } = req.body;

        // Formata as datas para o formato ISO 8601
        const formattedDtInicio = new Date(dt_inicio_proj).toISOString();
        const formattedDtFim = new Date(dt_fim_proj).toISOString();
        const formattedUltAlter = new Date(ult_alter_proj).toISOString();

        try {
            const createProjetoService = container.resolve(CreateProjetoService); // Renomeado para createProjetoService
            const projeto = await createProjetoService.execute({
                modalidade,
                unidade_origem,
                titulo_projeto,
                area_conhecimento,
                area_tematica,
                linha_tematica,
                coord_projeto,
                email_coord_projeto,
                dt_inicio_proj: new Date(formattedDtInicio),
                dt_fim_proj: new Date(formattedDtFim),
                situacao,
                ult_alter_proj: new Date(formattedUltAlter),
                palavras_chave,
                resumo,
                parcerias,
                id_projeto
            });

            return res.status(201).json(projeto);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message || 'An unknown error occurred' });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteProjetoService = container.resolve(DeleteProjetoService); 
        const { id } = req.params;

        try {
            await deleteProjetoService.execute(id); 

            return res.status(202).send(); 
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message || 'An unknown error occurred' });
        }
    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const findOneProjetoService = container.resolve(FindOneProjetoService);
            const projeto = await findOneProjetoService.execute(id); // Passa o id como string

            return res.status(200).json(projeto);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message || 'An unknown error occurred' });
        }
    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const listProjetoService = container.resolve(ListProjetoService);
            const projetos = await listProjetoService.execute();

            return res.status(200).json(projetos);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            } else {
                return res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const {
            modalidade,
            unidade_origem,
            titulo_projeto,
            area_conhecimento,
            area_tematica,
            linha_tematica,
            coord_projeto,
            email_coord_projeto,
            dt_inicio_proj,
            dt_fim_proj,
            situacao,
            ult_alter_proj,
            palavras_chave,
            resumo,
            parcerias
        } = req.body;

        try {
            const updateProjetoService = container.resolve(UpdateProjetoService);
            const projeto = await updateProjetoService.execute({
                id_projeto: Number(id), // Converte para número
                modalidade,
                unidade_origem,
                titulo_projeto,
                area_conhecimento,
                area_tematica,
                linha_tematica,
                coord_projeto,
                email_coord_projeto,
                dt_inicio_proj: new Date(dt_inicio_proj),
                dt_fim_proj: new Date(dt_fim_proj),
                situacao,
                ult_alter_proj: new Date(ult_alter_proj),
                palavras_chave,
                resumo,
                parcerias
            });

            return res.status(200).json(projeto);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            } else {
                return res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    /*public async getFiltered(req: Request, res: Response): Promise<Response> {
        const filterProjetoService = container.resolve(FilterProjetoService);
        const filters = req.query; // Captura os filtros da query string

        try {
            const projetos = await filterProjetoService.execute(filters);

            return res.status(200).json(projetos);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message || 'An unknown error occurred' });
        }
    }*/
}
