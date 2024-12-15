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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateProjetoService_1 = __importDefault(require("../services/CreateProjetoService"));
const DeleteProjetoService_1 = __importDefault(require("../services/DeleteProjetoService"));
const FindOneProjetoService_1 = __importDefault(require("../services/FindOneProjetoService"));
const ListProjetoService_1 = __importDefault(require("../services/ListProjetoService"));
const UpdateProjetoService_1 = __importDefault(require("../services/UpdateProjetoService"));
class ProjetosController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_projeto, modalidade, unidade_origem, titulo_projeto, area_conhecimento, area_tematica, linha_tematica, coord_projeto, email_coord_projeto, dt_inicio_proj, dt_fim_proj, situacao, ult_alter_proj, palavras_chave, resumo, parcerias } = req.body;
            // Formata as datas para o formato ISO 8601
            const formattedDtInicio = new Date(dt_inicio_proj).toISOString();
            const formattedDtFim = new Date(dt_fim_proj).toISOString();
            const formattedUltAlter = new Date(ult_alter_proj).toISOString();
            try {
                const createProjetoService = tsyringe_1.container.resolve(CreateProjetoService_1.default); // Renomeado para createProjetoService
                const projeto = yield createProjetoService.execute({
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
            }
            catch (error) {
                return res.status(500).json({ error: error.message || 'An unknown error occurred' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteProjetoService = tsyringe_1.container.resolve(DeleteProjetoService_1.default);
            const { id } = req.params;
            try {
                yield deleteProjetoService.execute(id);
                return res.status(202).send();
            }
            catch (error) {
                return res.status(500).json({ error: error.message || 'An unknown error occurred' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const findOneProjetoService = tsyringe_1.container.resolve(FindOneProjetoService_1.default);
                const projeto = yield findOneProjetoService.execute(id); // Passa o id como string
                return res.status(200).json(projeto);
            }
            catch (error) {
                return res.status(500).json({ error: error.message || 'An unknown error occurred' });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listProjetoService = tsyringe_1.container.resolve(ListProjetoService_1.default);
                const projetos = yield listProjetoService.execute();
                return res.status(200).json(projetos);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ error: error.message });
                }
                else {
                    return res.status(500).json({ error: 'An unknown error occurred' });
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { modalidade, unidade_origem, titulo_projeto, area_conhecimento, area_tematica, linha_tematica, coord_projeto, email_coord_projeto, dt_inicio_proj, dt_fim_proj, situacao, ult_alter_proj, palavras_chave, resumo, parcerias } = req.body;
            try {
                const updateProjetoService = tsyringe_1.container.resolve(UpdateProjetoService_1.default);
                const projeto = yield updateProjetoService.execute({
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
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ error: error.message });
                }
                else {
                    return res.status(500).json({ error: 'An unknown error occurred' });
                }
            }
        });
    }
}
exports.default = ProjetosController;
//# sourceMappingURL=ProjetoController.js.map