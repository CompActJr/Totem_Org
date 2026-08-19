import type { EducationalLevel } from "~/types/educational.types"
export interface NavigationLink {
  label: string
  href: string
  children?: NavigationLink[]
}

/**
 * @author Jonas
 * Classe com padrão builder para construir os links do menu interativo
 * reaproveitavel para construir diferentes builders
 */
export class NavigationBuilder {

  private links: NavigationLink[] = []

  public buildHome(): this {
    this.links.push({
      label: "HOME",
      href: "/"
    })

    return this
  }

  public buildNossaEscola(): this {
    this.links.push({
      label: "NOSSA ESCOLA",
      href: "/nossa-escola",
      children: [
        { label: "Por que o Totem", href: "/nossa-escola#porque_o_totem" },
        { label: "Nossa História", href: "/nossa-escola#nossa_historia" },
        { label: "Visão de Educação", href: "/nossa-escola#visao_de_educacao" },
        { label: "Metodologias", href: "/nossa-escola#metodologias" },
        { label: "Perguntas Frequentes", href: "/nossa-escola#faq" },
      ]
    })

    return this
  }

  public buildUnidades(): this {
    this.links.push({
      label: "UNIDADES",
      href: "/unidades",
      children: [
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta" },
        { label: "Santa Maria", href: "/unidades/santa-maria" },
      ]
    })

    return this
  }

  public buildMatriculas(): this {
    this.links.push({
      label: "MATRÍCULAS",
      href: "/matriculas",
      children: [
        { label: "Nosso Processo", href: "/" },
        { label: "Agende sua Visita", href: "#agende-visita" },
      ]
    })

    return this
  }

  public buildFaleComAGente(): this {
    this.links.push({
      label: "FALE COM A GENTE",
      href: "/",
      children: [
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul#section_contato" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta#section_contato" },
        { label: "Santa Maria", href: "/unidades/santa-maria#section_contato" },
      ]
    })

    return this
  }

  public buildUnidadeFaleComAGente(unidadeSlug: string): this {
    this.links.push({
      label: "FALE COM A GENTE", href: `/unidades/${unidadeSlug}#section_contato`
    })
    return this;
  }

  public buildUnidadeDiferenciais(unidadeSlug: string): this{
    this.links.push({
      label: "DIFERENCIAIS", href: `/unidades/${unidadeSlug}/diferenciais`
    })
    return this;
  }

  public buildUnidadesNiveis(unidadeSlug: string, niveis: EducationalLevel[]): this{
    const children: NavigationLink[] = [];

    niveis.forEach((n)=> {
      children.push({
        label: n.name,
        href: `/unidades/${unidadeSlug}/${n.link}`,
      })
    });

    this.links.push({
      label: "NÍVEIS DE ENSINO",
      href: `/unidades/${unidadeSlug}`,
      children: children
    })

    return this;
  }

  public build(): NavigationLink[] {
    return this.links
  }

  public reset(): void {
    this.links = [];
  }

}