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
