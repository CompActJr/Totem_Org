export enum AnalysisEnum{
    I = 'INVESTIGATIVO',
    A = 'ARTÍSTICO',
    S = 'SOCIAL',
    R = 'REALISTA',
    E = 'EMPREENDEDOR',
    C = 'CONVENCIONAL'
}

export interface Analysis {
    id: number,
    type: AnalysisEnum,
    descricao: String,
    sugesteds: String[]
}
