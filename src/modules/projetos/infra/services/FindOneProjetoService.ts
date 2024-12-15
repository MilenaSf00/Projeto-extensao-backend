import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import IProjetoRepository from "../repositories/IProjetosRepository";
import ProjetoEntity from "../../entities/ProjetosEntity"; 

@injectable()
class FindOneProjetoService {
  constructor(
    @inject('ProjetoRepository') 
    private projetoRepository: IProjetoRepository
  ) {}

  public async execute(id: string): Promise<ProjetoEntity | null> {
    const idNumber = Number(id); // Converte a string para número
    const findProjeto = await this.projetoRepository.findById(idNumber);
    return findProjeto;
  }
}

export default FindOneProjetoService;
