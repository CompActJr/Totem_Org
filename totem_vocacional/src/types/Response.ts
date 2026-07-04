import type { AnalysisEnum } from "./Analysis";

export interface Response{
    id: number;
    idQuestion: number;
    responses: AnalysisEnum[]
}