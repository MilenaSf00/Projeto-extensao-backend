import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import IProjetoRepository from "../repositories/IProjetosRepository";
import { AppError } from "../../../../errors/AppErros";

@injectable()
class DeleteProjetoService {
    
    constructor(
        @inject('ProjetoRepository')
        private projetoRepository: IProjetoRepository
    ){}

    public async execute(id: string): Promise<void> {
        // Converter id para número
        const idNumber = Number(id);

        const findProjeto = await this.projetoRepository.findById(idNumber);
        if (!findProjeto) {
            throw new AppError("Projeto não encontrado", 404);
        }

        await this.projetoRepository.delete(idNumber);
        return;
    }   
}

export default DeleteProjetoService;
