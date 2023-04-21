import React from 'react'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { Head } from '../index'
import { IconHandler } from '../../Functions/SH'
import { Icon } from '../../utils/Icon'

const Settings = () => {
  const {
    settingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    setSettingsState,
  } = useGlobalContext()
  return (
    <div className={` ${settingsState ? 'pb-4 translate_x' : 'pb-4 '} `}>
      <Head
        title={`Settings & privacy`}
        setFirstState={setProfileState}
        setSecondState={setSettingsState}
        setThirdState={setGoBack}
      />
      <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
        {[
          {
            icon: <Icon.RiSettings2Fill />,
            title: 'Settings ',
            isMove: true,
          },
          {
            icon: <Icon.MdHttps />,
            title: 'Privecy Checkup',
            isMove: true,
          },
          {
            icon: <Icon.AiOutlineBug />,
            title: 'Privecy Center ',
            isMove: true,
          },
          {
            icon: <Icon.MdOutlineFormatListBulleted />,
            title: 'Activity log',
            isMove: true,
          },
          {
            icon: <Icon.MdTune />,
            title: 'Feeds',
            isMove: false,
          },
          {
            icon: <Icon.BsGlobe />,
            title: 'Language',
            isMove: false,
          },
        ].map(({ icon, title, isMove, ref }, i) => (
          <div
            ref={ref}
            onClick={(e) =>
              IconHandler({
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
            className={`  ${title} hover:bg-dark300 hover:bg-light300 p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium dark:text-white'>
                {title}
              </h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MegWrapper(Settings)
