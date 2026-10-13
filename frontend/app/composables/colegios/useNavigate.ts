
export function useNavigation() {

  const navLinks = new NavigationBuilder()
    .buildHome()
    .buildNossaEscola()
    .buildUnidades()
    .buildMatriculas()
    .buildFaleComAGente()
    .build();

  return { navLinks }

}