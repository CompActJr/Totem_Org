import type { Option } from "./Option"

export interface Questions {
  id: number,
  titulo: string,
  opcoes?: Option[]
}
