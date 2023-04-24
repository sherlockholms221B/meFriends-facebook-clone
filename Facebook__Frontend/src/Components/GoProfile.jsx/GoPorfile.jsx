import React from 'react'

//import react-router-dom module
// import { Link } from 'react-router-dom'

//import higher order components wrapper
import MegWrapper from '../MegWrapper'

//import components
import { CMPFooter, Profile } from '../index'
import { Demarcate } from '../RDOMC'

//import context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import data from utils
import { GoPLink } from '../../utils/LWRef'

//import  react custom icons
import { Icon } from '../../utils/Icon'

//import iconhandler from function
import { IconHandler } from '../../Functions/utilities/SH'

//import authstore
import useAuthStore from '../../Store/AuthStore'
//
const GoPorfile = () => {
  const {
    setSettingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    goBack,
  } = useGlobalContext()
  const { logOut } = useAuthStore()
  return (
    <section className={`${goBack && 'translate__x'}`}>
      <section
        className={` p-1 shadow-lg rounded-md drop-shadow-md shadow-gray-400 dark:shadow-zinc-900`}
      >
        <section role='button' onClick={() => setProfileState(false)}>
          <Profile
            hidden
            customstyle='flex flex row gap-4 items-center hover:bg-light300 dark:hover:bg-dark300 h-fit flex flex-row items-center gap-3 px-2 py-1 rounded-md cursor-pointer'
          />
        </section>
        <Demarcate />
        <section
          section
          className='dark:hover:bg-dark300 hover:bg-light300 h-fit flex flex-row justify-between items-center gap-3 p-2 rounded-md'
        >
          <h5 className='deep_blue cursor-pointer font-medium'>
            See all profiles
          </h5>
          <article className='flex items-center justify-center  w-6 h-6 rounded-full bg-red-600  border-2 dark:border-bd500 border-white'>
            <p className='text-white text-[12px] font-bold'>10</p>
          </article>
        </section>
      </section>
      <section className='w-full flex flex-col gap-1 mt-4'>
        {GoPLink().map(({ icon, title, next, ref }, i) => (
          <section
            role='button'
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
                logOut,
              })
            }
            key={i + title}
            className={` ${
              next && 'group justify-between flex flex-row items-center'
            } ${title} group dark:hover:bg-dark300 hover:bg-light300 p-2 w-full rounded-md cursor-pointer`}
          >
            <article className='flex flex-row items-center gap-2 w-fit '>
              <p className='group-hover:brightness-150 text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium dark:text-white'>
                {title}
              </h4>
            </article>
            {next && (
              <p className='font-medium text-2xl dark:text-white'>
                <Icon.MdOutlineArrowForwardIos />
              </p>
            )}
          </section>
        ))}
      </section>
      <CMPFooter />
    </section>
  )
}

export default MegWrapper(GoPorfile)
