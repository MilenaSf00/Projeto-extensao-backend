import { container } from 'tsyringe';
import ProjetoRepository from '../../../prisma/ProjetoRepository';
import IProjetoRepository from '../infra/repositories/IProjetosRepository';
import ListProjetoService from '../infra/services/ListProjetoService';


container.registerSingleton<IProjetoRepository>("ProjetoRepository", ProjetoRepository);
container.registerSingleton<ListProjetoService>("ListProjetoService", ListProjetoService);
