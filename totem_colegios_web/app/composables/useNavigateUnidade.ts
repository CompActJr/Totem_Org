import type { EducationalLevel } from "~/types/educational.types"


export function useNavigationUnidade(unidadeSlug: string, levels: EducationalLevel[]) {

  const navUnidadesLinks = new NavigationBuilder()
    .buildHome()
    .buildNossaEscola()
    .buildUnidades()
    .buildUnidadesNiveis(unidadeSlug, levels)
    .buildUnidadeDiferenciais(unidadeSlug)
    .buildUnidadeFaleComAGente(unidadeSlug)
    .build()

  return { navUnidadesLinks }

}