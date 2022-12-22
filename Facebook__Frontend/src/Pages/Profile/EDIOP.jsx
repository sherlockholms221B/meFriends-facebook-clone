import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { MdCardTravel } from 'react-icons/md'

const EDIOP = () => {
  return (
    <section className='dark:bg-darkSecondary bg-white rounded-lg p-3 flex flex-col gap-5  '>
      <h2 className='text-xl font-bold dark:text-heading_dark_white'>Intro</h2>
      <p className='light_text_gray dark:text-heading_dark_gray font-normal text-lg text-center'>
        Hi my name is Sanctus, I am a Full Stack Developer. I am poised to help
        you achieve your goals...
      </p>
      <button className='bg-secondaryWhite hover:bg-primaryWhite py-2 text-lg rounded-lg font-semibold dark:bg-darkComplementry dark:text-heading_dark_white'>
        Edit Bio
      </button>
      {[
        {
          title: 'Full Stack developer',
          icon: <MdCardTravel />,
        },
        {
          title: 'Studied at University of Nigeria, Nsukka',
          icon: <FaUserGraduate />,
        },
      ].map(({ title, icon }, i) => (
        <div className='flex_row gap-2' key={i}>
          <p className='light_text_gray font-normal text-2xl'>{icon}</p>
          <h2 className='light_text_gray dark:text-heading_dark_gray font-normal text-lg text-center'>
            {title}
          </h2>
        </div>
      ))}

      {['Edit Details', 'Add Hobbies', 'Add Featured'].map((title, i) => (
        <button
          key={i}
          className='bg-secondaryWhite hover:bg-primaryWhite dark:bg-darkComplementry dark:text-heading_dark_white py-2 text-lg rounded-lg font-semibold'
        >
          {title}
        </button>
      ))}
    </section>
  )
}

export default EDIOP
