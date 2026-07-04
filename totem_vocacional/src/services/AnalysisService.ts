import rawAnalysis from '@/json/analysis.json';
import { AnalysisEnum, type Analysis } from '@/types/Analysis';


export class AnalysisService{
    static carregar(): Analysis[] {
        return rawAnalysis.map((a): Analysis => ({
            id: a.id,
            type: a.type as AnalysisEnum,
            descricao: a.descricao,
            sugesteds: a.sugesteds
        }));
    }
}