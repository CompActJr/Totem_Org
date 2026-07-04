import type { Usuario } from "@/types/Usuario";

const USUARIO_KEY = 'teste_usuario'

export class UsuarioService{
    static salvar(u: Usuario | null){
        localStorage.setItem(USUARIO_KEY, JSON.stringify(u));
    }

    static carregar(): Usuario | null{
        const data = localStorage.getItem(USUARIO_KEY);
        return data ? JSON.parse(data) : null;
    }

    static limpar() {
        localStorage.removeItem(USUARIO_KEY);
    }
}