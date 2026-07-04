import { defineStore } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { TesteStorageService } from '@/services/TesteStorageService';
import type { Usuario } from '@/types/Usuario';
import { UsuarioService } from '@/services/UsuarioService';
import type { Questions } from '@/types/Questions';
import type { Analysis, AnalysisEnum } from '@/types/Analysis';
import { QuestionsService } from '@/services/QuestionsService';
import { AnalysisService } from '@/services/AnalysisService';
import { ResponseService } from '@/services/ResponseService';
import type { Response } from '@/types/Response';

interface State{
  estado: TesteEstado;
  usuario: Usuario | null;
  questions: Questions[];
  analysis: Analysis[];
  currentId: number;
  responses:  Response[];
}

export const useTestStore = defineStore('teste', {
  state: (): State => {
    return {
      estado: TesteStorageService.carregar(),
      usuario: UsuarioService.carregar(),
      questions: QuestionsService.carregar(),
      analysis: AnalysisService.carregar(),
      currentId: ResponseService.getCurrentId(),
      responses: ResponseService.carregar()
    }
  },

  actions: {
    iniciar(){
      this.estado = TesteEstado.PERGUNTAS;
      TesteStorageService.salvar(this.estado);
    },

    finalizar(){
      this.estado = TesteEstado.FINALIZADO;
      TesteStorageService.salvar(this.estado);
    },

    resetar(){
      this.estado = TesteEstado.CADASTRO;
      TesteStorageService.salvar(this.estado);
      UsuarioService.limpar()
      ResponseService.limpar()
      this.responses = []
      this.currentId = 1;
    },

    salvarUsuario(u: Usuario | null){
      this.usuario = u;
      UsuarioService.salvar(this.usuario);
    },

    removerUsuario(){
      UsuarioService.limpar();
    },

    toggleResposta(idQuestion: number, value: AnalysisEnum) {
      let r = this.responses.find(r => r.idQuestion === idQuestion)

      if (!r) {
        r = {
          id: idQuestion,
          idQuestion,
          responses: []
        }
        this.responses.push(r)
      }

      if (r.responses.includes(value)) {
        r.responses = r.responses.filter(v => v !== value)
      } else {
        if (r.responses.length < 2) {
          r.responses.push(value)
        }
      }

      ResponseService.salvar(this.responses)
    },

    voltar(){
      this.currentId = (this.currentId === 1)
        ? 1
        : this.currentId - 1;
    },

    avancar(){
      this.currentId = (this.currentId === this.questions.length)
        ? this.questions.length
        : this.currentId + 1;
    }
  }
})