// src/modules/projetos/services/ListProjetoService.ts
import { injectable, inject } from "tsyringe";
import IProjetoRepository from "../repositories/IProjetosRepository";
import ProjetoEntity from "../../entities/ProjetosEntity";

@injectable()
class ListProjetoService {
  constructor(
    @inject("ProjetoRepository")
    private projetoRepository: IProjetoRepository
  ) {}

  public async execute(): Promise<ProjetoEntity[]> {
    return this.projetoRepository.listAll();
  }
}

export default ListProjetoService;
