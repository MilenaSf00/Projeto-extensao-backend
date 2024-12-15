import { inject, injectable } from "tsyringe";
import IProjetoRepository from "../repositories/IProjetosRepository";
import IProjetoDTO from "../../dtos/IProjetoDTO";
import ProjetoEntity from "../../entities/ProjetosEntity";

@injectable()
class CreateProjetoService {
  constructor(
    @inject("ProjetoRepository")
    private projetoRepository: IProjetoRepository
  ) {}

  public async execute(data: IProjetoDTO): Promise<ProjetoEntity> {
    const projeto = await this.projetoRepository.create(data);
    return projeto;
  }
}

export default CreateProjetoService;
