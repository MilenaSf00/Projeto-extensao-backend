class ProjetoEntity {
  /*id_projeto: number;
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
  parcerias?: string | null; // Permite null se o banco de dados permitir*/

 
    id_projeto: number;
    modalidade: string | null;  // Permite `null`
    unidade_origem: string | null;
    titulo_projeto: string | null;
    area_conhecimento: string | null;
    area_tematica: string | null;
    linha_tematica: string | null;
    coord_projeto: string | null;
    email_coord_projeto: string | null;
    dt_inicio_proj: Date | null;
    dt_fim_proj: Date | null;
    situacao: string | null;
    ult_alter_proj: Date | null;
    palavras_chave: string | null;
    resumo: string | null;
    parcerias: string | null;


  constructor(props: ProjetoEntity) {
      this.id_projeto = props.id_projeto;
      this.modalidade = props.modalidade;
      this.unidade_origem = props.unidade_origem;
      this.titulo_projeto = props.titulo_projeto;
      this.area_conhecimento = props.area_conhecimento;
      this.area_tematica = props.area_tematica;
      this.linha_tematica = props.linha_tematica;
      this.coord_projeto = props.coord_projeto;
      this.email_coord_projeto = props.email_coord_projeto;
      this.dt_inicio_proj = props.dt_inicio_proj;
      this.dt_fim_proj = props.dt_fim_proj;
      this.situacao = props.situacao;
      this.ult_alter_proj = props.ult_alter_proj;
      this.palavras_chave = props.palavras_chave;
      this.resumo = props.resumo;
      this.parcerias = props.parcerias ?? null; // Usa null se não for definido
  }
}
export default ProjetoEntity;
