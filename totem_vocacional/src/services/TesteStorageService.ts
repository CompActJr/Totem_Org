import { TesteEstado } from '@/types/Estado';

const STORAGE_KEY = 'teste_estado'

export class TesteStorageService{

  static salvar(estado: TesteEstado) {
    localStorage.setItem(STORAGE_KEY, estado)
  }

  static carregar(): TesteEstado {
    return (localStorage.getItem(STORAGE_KEY) as TesteEstado) 
      || TesteEstado.CADASTRO
  }

  static limpar() {
    localStorage.removeItem(STORAGE_KEY)
  }

}
