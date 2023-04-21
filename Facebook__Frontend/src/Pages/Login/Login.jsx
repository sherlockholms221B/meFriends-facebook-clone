import React from 'react'

import Main from './Switch'
// import { useMultistepForm } from './useMultistepForm'

const Login = () => {
  //  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //    useMultistepForm([

  //    ])
  return (
    <section className='relative w-full h-full flex flex-col justify-start items-center bg-light400 dark:bg-dark500'>
      <section className='flex flex-col items-center mt-14 w-full mdxs:w-fit'>
        <Main />
      </section>
    </section>
  )
}

export default Login
