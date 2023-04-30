import React from 'react'

//import main logo from assets
import { logo } from '../../../Assets/exports'

const SoftAppLoader = () => {
  return (
    <section className='dark:bg-dark500 bg-white text-center flex flex-col items-center justify-center w-screen h-full'>
      <figure>
        <img src={logo} alt='src logo' className='w-16 h-16 object-cover' />
        <figcaption className='text-center flex flex-col justify-center items-center absolute bottom-24 sm:bottom-6'>
          <p className='text-sm text-gray-500 tracking-wide'>From</p>
          <h3 className='text-blue-700 font-extrabold tracking-wider'>
            @Santus
          </h3>
        </figcaption>
      </figure>
    </section>
  )
}

export default SoftAppLoader
