export const AnalysisEnum = {
    I: 'INVESTIGATIVO',
    A: 'ARTÍSTICO',
    S: 'SOCIAL',
    R: 'REALISTA',
    E: 'EMPREENDEDOR',
    C: 'CONVENCIONAL'
} as const;

export type AnalysisEnum = typeof AnalysisEnum[keyof typeof AnalysisEnum];

export interface Analysis {
    id: number,
    type: AnalysisEnum,
    descricao: String,
    sugesteds: String[]
}

export interface Option{
    id: number,
    analysisEnum: AnalysisEnum,
    text: String
}

export interface Questions {
  id: number,
  titulo: string,
  opcoes: Option[]
}

export  interface FormUser{
  nome: string
  email: string
  celular: string
  cidade: string
  idade: number
}

export interface Response{
    questionId: number;
    options: number[];
}