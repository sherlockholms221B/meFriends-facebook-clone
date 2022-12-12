import React, { useRef } from 'react'
import { BsFillKeyboardFill, BsSun } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { useGlobalContext } from '../../Context/UseContext'
import Head from '../CreatePost/Head'
import MegWrapper from '../MegWrapper'
import { themeSwitcher } from '../../functions/darkTheme'
import {
  MdOutlineArrowForwardIos,
  MdOutlineCompareArrows,
} from 'react-icons/md'
const Display = () => {
  const lightMode = useRef(null)
  const darkMode = useRef(null)
  const automatic = useRef(null)
  const compactOn = useRef(null)
  const compactOff = useRef(null)
  const {
    settingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    displayState,
    setSettingsState,
  } = useGlobalContext()
  return (
    <div className={` ${displayState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <Head
        title={`Display & accessibility`}
        setFirstState={setProfileState}
        setSecondState={setDisplayState}
        setThirdState={setGoBack}
      />
      <section className='p-3 w-full'>
        {[
          {
            icon: <FaMoon />,
            title: 'Dark mode',
            desc: 'Adjust the appearance of Facebook to reduce glare and give your eyes a break.',
            options: [
              {
                switch: 'off',
                ref: lightMode,
                class: 'light',
              },
              {
                switch: 'on',
                ref: darkMode,
                class: 'dark',
              },
              {
                switch: 'automatic',
                ref: automatic,
                isDesc: true,
                class: 'auto',
                desc: "We'll automaticaly adjust your display based on the device's system settings.",
              },
            ],
          },
          {
            icon: <MdOutlineCompareArrows />,
            title: 'Compact mode',
            desc: 'Make your font size smaller so that more content can fit on the screen.',
            options: [
              { switch: 'off', ref: compactOff },
              { switch: 'on', ref: compactOn },
            ],
          },
        ].map(({ icon, desc, title, options }, i) => (
          <div
            className={` ${
              options.length === 0 ? 'items-center' : 'items-start'
            } flex flex-row gap-2 `}
            key={i}
          >
            <i className='text-xl rounded-full bg-gray-200 p-3 w-fit h-fit'>
              {icon}
            </i>
            <div className=''>
              <h4 className='text-xl font-medium text-gray-900'>{title} </h4>
              <p className='text-md text-gray-500 font-normal'> {desc} </p>
              {options.map((items, i) => (
                <button
                  className={` ${items.class} mt-2.5 mb-2.5 w-full cursor-pointer hover:bg-primary p-2 rounded-md`}
                  key={i}
                  ref={items.ref}
                  onClick={() => {
                    themeSwitcher(items.ref)
                  }}
                >
                  <div type='button' className='flex flex-row justify-between '>
                    <h4 className='text-lg capitalize font-medium text-gray-900'>
                      {items.switch}
                    </h4>
                    <div className='border-2 border-gray-500 h-6 w-6 rounded-full ' />
                  </div>
                  {items.isDesc && (
                    <p className='text-sm font-thin text-gray-500'>{desc}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className='items-center flex flex-row justify-between cursor-pointer  hover:bg-primary p-2 rounded-md'>
          <div className='flex flex-row gap-2 items-center'>
            <p className='text-xl rounded-full bg-gray-200 p-3 w-fit h-fit'>
              <BsFillKeyboardFill />
            </p>
            <h4 className='text-xl font-medium text-gray-900'>keyboard </h4>
          </div>
          <p className='font-medium text-2xl'>
            <MdOutlineArrowForwardIos />
          </p>
        </div>
      </section>
    </div>
  )
}

export default MegWrapper(Display)
