export interface TurmaType {
  nome: string;
  detalhes: string;
}

export interface AtividadeType {
  id: number;
  unidade: string;
  unidadeId: number;
  name: string;
  turmas: TurmaType[];
  professorNome: string;
  image: string;
}