"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjetoEntity {
    constructor(props) {
        var _a;
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
        this.parcerias = (_a = props.parcerias) !== null && _a !== void 0 ? _a : null; // Usa null se não for definido
    }
}
exports.default = ProjetoEntity;
//# sourceMappingURL=ProjetosEntity.js.map