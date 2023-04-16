import React from 'react'

import Main from './Switch'
// import { useMultistepForm } from './useMultistepForm'

const Login = () => {
  //  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //    useMultistepForm([

  //    ])
  return (
    <section className='relative w-full h-full flex flex-col justify-start items-center bg-primaryWhite dark:bg-darkPrimary'>
      <section className='flex flex-col items-center mt-14 w-full p_sm:w-fit'>
        <Main />
      </section>
    </section>
  )
}

export default Login
