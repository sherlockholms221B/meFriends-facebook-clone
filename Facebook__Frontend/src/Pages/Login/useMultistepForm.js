import { useState } from 'react'

export function useMultistepForm(steps) {
  // const [props] = steps
  // const [{ props }] = steps
  // console.log(props.password, props.newPassword)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      // if (props.password !== props.newPassword) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isSecondStep: currentStepIndex === 1,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  }
}
