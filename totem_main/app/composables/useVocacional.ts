import type { Response } from "~/types/response";

export interface VocacionalState {
  step: number;
  currentQuestion: number;
  form: {
    name: string;
    email: string;
    receiveEmail: boolean;
  };
  answers: Response[];
}

export function useVocacional() {
  const state = useCookie<VocacionalState>('vocacional', {
    default: () => ({
      step: 0,
      currentQuestion: 0,
      form: {
        name: '',
        email: '',
        receiveEmail: false
      },
      answers: [],
    }),
    maxAge: 60 * 60 * 24,
    secure: false, //FIXME em produção deve ser true
    sameSite: 'strict',
    httpOnly: false
  })

  function nextStep() {
    if (state.value.step < 2) {
      state.value.step++
    }
  }

  function previousStep() {
    if (state.value.step > 0) {
      state.value.step--
    }
  }

  function nextQuestion() {
      state.value.currentQuestion++
  }

  function previousQuestion() {
      state.value.currentQuestion--
  }

  function saveAnswer(answer: Response) {

    //se ja existe uma answer marcada, acha o indice e edita ela
    const index = state.value.answers.findIndex(
        a => a.questionId === answer.questionId
    )

    if(index >= 0){ 
        state.value.answers[index] = answer
    }else{
        state.value.answers.push(answer)
    }
  }

  function getCurrentAnswer(){
    return state.value.answers.find(
        a => a.questionId === state.value.currentQuestion
    )
  }

  return { 
    state,
    nextStep,
    previousStep,
    nextQuestion,
    previousQuestion,
    saveAnswer,
    getCurrentAnswer,
  }
}