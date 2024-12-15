import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import IProjetoRepository from "../repositories/IProjetosRepository";
import ProjetoEntity from "../../entities/ProjetosEntity";
import { AppError } from "../../../../errors/AppErros";
import IProjetoDTO from "../../dtos/IProjetoDTO";

@injectable()
class UpdateProjetoService {

    constructor(
        @inject('ProjetoRepository')
        private projetoRepository: IProjetoRepository
    ){}

    public async execute( data: ProjetoEntity): Promise<ProjetoEntity> {
        const findProjeto = await this.projetoRepository.findById(data.id_projeto);

        if(!findProjeto) {
            throw new AppError("Projeto não encontrada", 404);
        }

        const updateProjeto = await this.projetoRepository.update(data);
        return updateProjeto;
    }
}

export default UpdateProjetoService;