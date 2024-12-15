// src/dto/CreateProjetosDTO.ts

export default interface IProjetoDTO {
    modalidade: string;
    unidade_origem: string;
    titulo_projeto: string;
    area_conhecimento: string;
    area_tematica: string;
    linha_tematica: string;
    coord_projeto: string;
    email_coord_projeto: string;
    dt_inicio_proj: Date;
    dt_fim_proj: Date;
    situacao: string;
    ult_alter_proj: Date;
    palavras_chave: string;
    resumo: string;
    parcerias: string;
  }
  