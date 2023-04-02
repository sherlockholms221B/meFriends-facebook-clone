import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'

import Main from './Switch'
// import { useMultistepForm } from './useMultistepForm'

const Login = () => {
  //  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //    useMultistepForm([

  //    ])
  return (
    <section className='relative w-full h-full flex flex-col justify-evenly items-center bg-primaryWhite dark:bg-darkPrimary'>
      <h2 className='text-5xl font-bold dark:text-white text-gray-800 tracking-wide mb-2'>
        MeFriends
      </h2>
      <Main />
    </section>
  )
}

export default Login
