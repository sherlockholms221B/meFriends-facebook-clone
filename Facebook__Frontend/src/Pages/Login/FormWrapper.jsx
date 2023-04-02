import * as React from 'react'
// import { useMultistepForm } from './useMultistepForm'

export function FormWrapper({ title, children }) {
  // const { isFirstStep } = useMultistepForm()
  return (
    <>
      {title !== 'Log in to Mefriends' && (
        <>
          <h5 className='text-2xl font-bold dark:text-white text-gray-800 ml-1 mt-1'>
            Sign up
          </h5>
          <plaintext className='text-gray-800 dark:text-white ml-2 mt-0.5'>
            it's quick & easy
          </plaintext>
        </>
      )}
      <h2 className='text-center mt-2 mb-4 text-lg dark:text-white text-gray-800 font-medium'>
        {title}
      </h2>
      <section>{children}</section>
    </>
  )
}
