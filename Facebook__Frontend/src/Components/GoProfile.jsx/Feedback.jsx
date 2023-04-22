import React from 'react'
import { useGlobalContext } from '../../Hooks/context/UseContext'
import Head from '../CreatePost/Head'

import MegWrapper from '../MegWrapper'
import { Icon } from '../../utils/Icon'
const Feedback = () => {
  const { setFeedbackState, setProfileState, setGoBack, feedbackState } =
    useGlobalContext()
  return (
    <div
      className={` ${
        feedbackState ? 'py-4 translate_x' : 'py-4'
      } dark:border dark:border-bd500 rounded-lg `}
    >
      <Head
        title={`Give feedback to Facebook`}
        setFirstState={setProfileState}
        setSecondState={setFeedbackState}
        setThirdState={setGoBack}
      />
      <section className='w-full flex flex-col p-2'>
        {[
          {
            icon: <Icon.MdOutlineFacebook />,
            title: 'Help us improve Facebook',
            description: 'Give feedback about your Facebook expirence',
          },
          {
            icon: <Icon.BsFillExclamationTriangleFill />,
            title: 'Something went wrong',
            description: 'Let us know about a broken feature',
          },
        ].map(({ icon, title, description }, i) => (
          <div
            key={i + title}
            className={`  ${title} hover:bg-light300 p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-2xl rounded-full bg-gray-200 p-4 w-fit h-fit'>
                {icon}
              </p>
              <div className=''>
                <h4 className='text-gray-900 font-semibold text-lg '>
                  {title}
                </h4>
                <p className='text-md font-normal text-gray-600'>
                  {' '}
                  {description}{' '}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MegWrapper(Feedback)
