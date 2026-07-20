/**
 * @author Jonas
 * Padrão repository, implementa as classes para acesso aos dados das unidades
 */


import type { AtividadeType } from "~/types/atividades.types";
import type { DepoimentoType } from "~/types/depoimentos.types";
import type { ProfessorType } from "~/types/professores.types";
import type { UnidadeType } from "~/types/unidade.type";

import unidades from "~/data/unidades.json";
import atividades from "~/data/atividades.json";
import professores from "~/data/professores.json";

export interface IUnidadeRepository {
    getBySlug(slug: string): UnidadeType | undefined;

    getAtividades(unidadeId: number): AtividadeType[];

    getDepoimentos(unidadeId: number): DepoimentoType[];

    getProfessores(unidadeId: number): ProfessorType[];

}

export class JsonUnidadeRepository implements IUnidadeRepository {
    getDepoimentos(unidadeId: number): DepoimentoType[] {
        throw new Error("Method not implemented.");
    }
    
    getProfessores(unidadeId: number): ProfessorType[] {
        return professores.filter(
            p => p.unidadeId === unidadeId
        )
    }

    getBySlug(slug: string) {
        return unidades.find(
            u => u.slug === slug
        );
    }

    getAtividades(unidadeId: number) {
        return atividades.filter(
            a => a.unidadeId === unidadeId
        );
    }

}

//quando precisar mudar a maneira de buscar só mudar a instancia
export const useUnidadeRepository =(()=>{
    return new JsonUnidadeRepository();
})