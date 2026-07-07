import type { AnalysisEnum } from "./analysis";

export interface Response{
    id: number;
    idQuestion: number;
    responses: AnalysisEnum[]
}