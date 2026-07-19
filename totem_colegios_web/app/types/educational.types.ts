export const EducationalTypes = {
    BERCARIO: "Berçário",
    EDUCACAO_INFANTIL: "Educação Infantil",
    ENSINO_FUNDAMENTAL_I: "Ensino Fundamental I",
    ENSINO_FUNDAMENTAL_II: "Ensino Fundamental II",
    ENSINO_MEDIO: "Ensino Médio"
} as const;

export type EducationalTypes = typeof EducationalTypes[keyof typeof EducationalTypes];

export interface EducationalLevel {
    id: number,
    name: EducationalTypes,
    image: string,
    link: string,
}