export function useVocational() {
    const state = useCookie('vocational', {
        default: () => ({
            step: 0,
            answers: []
        })
    })

    function nextStep() {
        state.value.step++
    }

    function previousStep() {
        state.value.step--
    }

    return {
        state,
        nextStep,
        previousStep
    }
}