import type { AnalysisEnum } from "@/types/Analysis";
import type { Response } from "@/types/Response";

const RESPONSE_KEY = "teste_respostas";

export class ResponseService {

  static carregar(): Response[] {
    const data = localStorage.getItem(RESPONSE_KEY);
    return data ? JSON.parse(data) : [];
  }

  static salvar(responses: Response[]): void {
    localStorage.setItem(RESPONSE_KEY, JSON.stringify(responses));
  }

  static push(id: number, idQuestion: number, resp: AnalysisEnum[]): void {
     const responses = this.carregar();

    const index = responses.findIndex(r => r.idQuestion === idQuestion);

    if (index !== -1) {
      responses[index]!.responses = resp;
    } else {
      responses.push({
        id,
        idQuestion,
        responses: resp
      });
    }

    this.salvar(responses);
  }

  static getCurrentId(): number{
    return this.carregar().length + 1;
  }

  static limpar(): void {
    localStorage.removeItem(RESPONSE_KEY);
  }

  static getResponseCalculed(): Record<AnalysisEnum, number> {
    const responses = this.carregar();

    const result: Record<AnalysisEnum, number> = {
      INVESTIGATIVO: 0,
      ARTÍSTICO: 0,
      SOCIAL: 0,
      REALISTA: 0,
      EMPREENDEDOR: 0,
      CONVENCIONAL: 0
    };

    responses.forEach(r => {
      r.responses.forEach(enumValue => {
        result[enumValue]++;
      });
    });

    return result;
}

// pegar os 3 maiores valores
  static getTop3Responses(): AnalysisEnum[] {
    const calculated = this.getResponseCalculed();

    const sorted = Object.entries(calculated)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([key]) => key as AnalysisEnum);

    return sorted;
  }
}
