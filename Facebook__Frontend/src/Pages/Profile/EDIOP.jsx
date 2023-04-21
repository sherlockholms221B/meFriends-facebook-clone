import React from 'react'

//import icons
import { Icon } from '../../utils/Icon'

const EDIOP = () => {
  return (
    <section className='dark:bg-dark400 bg-white rounded-lg p-3 flex flex-col gap-5  '>
      <h2 className='text-xl font-bold dark:text-thdark500'>Intro</h2>
      <p className='light_text_gray dark:text-thlight500 font-normal text-lg text-center'>
        Hi my name is Sanctus, I am a Full Stack Developer. I am poised to help
        you achieve your goals...
      </p>
      <button className='bg-light300 hover:bg-light400 py-2 text-lg rounded-lg font-semibold dark:bg-dark300 dark:text-thdark500'>
        Edit Bio
      </button>
      {[
        {
          title: 'Full Stack developer',
          icon: <Icon.MdCardTravel />,
        },
        {
          title: 'Studied at University of Nigeria, Nsukka',
          icon: <Icon.FaUserGraduate />,
        },
      ].map(({ title, icon }, i) => (
        <div className='flex_row gap-2' key={i}>
          <p className='light_text_gray font-normal text-2xl'>{icon}</p>
          <h2 className='light_text_gray dark:text-thlight500 font-normal text-lg text-center'>
            {title}
          </h2>
        </div>
      ))}

      {['Edit Details', 'Add Hobbies', 'Add Featured'].map((title, i) => (
        <button
          key={i}
          className='bg-light300 hover:bg-light400 dark:bg-dark300 dark:text-thdark500 py-2 text-lg rounded-lg font-semibold'
        >
          {title}
        </button>
      ))}
    </section>
  )
}

export default EDIOP
