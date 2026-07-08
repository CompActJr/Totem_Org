import type { Option } from "./option"

export interface Questions {
  id: number,
  titulo: string,
  opcoes?: Option[]
}
