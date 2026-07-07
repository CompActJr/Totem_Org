export function useVocacional() {
  const state = useCookie('vocacional', {
    default: () => ({
      step: 0,
      form: {
        name: '',
        email: '',
        receiveEmail: false
      },
      answers: []
    }),
    watch: false
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

  return { state, nextStep, previousStep}
}