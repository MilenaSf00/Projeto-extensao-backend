import  IProjetoDTO  from "../../dtos/IProjetoDTO";
import  ProjetoEntity  from "../../entities/ProjetosEntity";

export default interface IProjetoRepository{
    create (data: IProjetoDTO): Promise<ProjetoEntity>
    delete (id: Number): Promise<void>;
    findById(id: number): Promise<ProjetoEntity | null>; 
    update(data: ProjetoEntity): Promise<ProjetoEntity>;
    listAll(): Promise<ProjetoEntity[]>;
    //filterProjects(filters: any): Promise<ProjetoEntity[]>; 
}
