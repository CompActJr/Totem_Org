import type { UnidadeType } from "~/types/unidade.type";

export const useCurrentUnit = () => useState<UnidadeType>("current-unit")