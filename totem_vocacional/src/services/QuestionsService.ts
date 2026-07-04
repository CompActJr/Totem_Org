import rawQuestions from '@/json/questions.json'
import type { Questions } from '@/types/Questions'
import type { Option } from '@/types/Option'
import { AnalysisEnum } from '@/types/Analysis'

export class QuestionsService {

  static carregar(): Questions[] {
    return rawQuestions.map((q): Questions => ({
        id: q.id,
        titulo: q.titulo,
        opcoes: q.opcoes.map((o): Option => ({
            id: o.id,
            text: o.text,
            analysisEnum: o.analysisEnum as AnalysisEnum
        }))      
    }));
  }

}
