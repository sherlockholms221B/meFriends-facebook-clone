import React from 'react'
import { BiWifi } from 'react-icons/bi'
import { BsExclamationSquareFill } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { useGlobalContext } from '../../Context/UseContext'
import { iconHandler } from '../../functions/stateHandler'
import Head from '../CreatePost/Head'

import MegWrapper from '../MegWrapper'
const Support = () => {
  const {
    settingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    supportState,
    setSettingsState,
  } = useGlobalContext()
  return (
    <div className={` ${supportState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <Head
        title={`Help & support`}
        setFirstState={setProfileState}
        setSecondState={setSupportState}
        setThirdState={setGoBack}
      />
      <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
        {[
          {
            icon: <FaQuestionCircle />,
            title: 'Settings ',
          },
          {
            icon: <MdMarkEmailRead />,
            title: 'Privecy Checkup',
          },
          {
            icon: <BsExclamationSquareFill />,
            title: 'Privecy Center ',
          },
          {
            icon: <BiWifi />,
            title: 'Language',
          },
        ].map(({ icon, title, isMove, ref }, i) => (
          <div
            ref={ref}
            onClick={(e) =>
              iconHandler({
                e,
                ref,
                setSettingsState,
                setDisplayState,
                setFeedbackState,
                setSupportState,
                setProfileState,
              })
            }
            key={i + title}
            className={`  ${title} hover:bg-secondaryWhite p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-xl rounded-full bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium '>{title}</h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MegWrapper(Support)
