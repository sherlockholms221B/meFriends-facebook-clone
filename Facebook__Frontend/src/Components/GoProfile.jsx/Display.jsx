import React, { useRef } from 'react'

import { useGlobalContext } from '../../Context/UseContext'
import Head from '../CreatePost/Head'
import MegWrapper from '../MegWrapper'
import { themeSwitcher } from '../../functions/darkTheme'
import { Icon } from '../../utils/Icon'
const Display = () => {
  const lightMode = useRef(null)
  const darkMode = useRef(null)
  const automatic = useRef(null)
  const compactOn = useRef(null)
  const compactOff = useRef(null)
  const { setDisplayState, setProfileState, setGoBack, displayState } =
    useGlobalContext()
  return (
    <div className={` ${displayState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <Head
        title={`Display & accessibility`}
        setFirstState={setProfileState}
        setSecondState={setDisplayState}
        setThirdState={setGoBack}
      />
      <section className='p-3 w-full overflow-auto'>
        {[
          {
            icon: <Icon.FaMoon />,
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
            icon: <Icon.MdOutlineCompareArrows />,
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
            }  ${i === 1 ? 'hidden mid_small:flex' : 'flex'} flex-row gap-2 `}
            key={i}
          >
            <i className='text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-3 w-fit h-fit'>
              {icon}
            </i>
            <div className=''>
              <h4 className='text-xl font-medium text-gray-900 dark:text-heading_dark_white'>
                {title}{' '}
              </h4>
              <p className='text-md text-gray-500 font-normal'> {desc} </p>
              {options.map((items, i) => (
                <button
                  className={` ${items.class} mt-2.5 mb-2.5 w-full cursor-pointer dark:hover:bg-darkComplementry hover:bg-primary p-2 rounded-md`}
                  key={i}
                  ref={items.ref}
                  onClick={() => {
                    themeSwitcher(items.ref)
                  }}
                >
                  <div
                    type='button'
                    className='flex flex-row justify-between items-center'
                  >
                    <div className='flex flex-col items-start text-start w-fit'>
                      <h4 className='text-lg capitalize font-medium text-gray-900 dark:text-heading_dark_white'>
                        {items.switch}
                      </h4>
                      {items.isDesc && (
                        <p className='text-xs font-thin text-gray-500'>
                          {desc}
                        </p>
                      )}
                    </div>
                    <div className='ring-2 ring-gray-500  h-5 w-5 rounded-full ' />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className='hidden items-center mid_small:flex flex-row justify-between cursor-pointer  hover:bg-primary p-2 rounded-md'>
          <div className='flex flex-row gap-2 items-center'>
            <p className='text-xl  dark:bg-darkComplementry dark:text-heading_dark_white rounded-full bg-gray-200 p-3 w-fit h-fit'>
              <Icon.BsFillKeyboardFill />
            </p>
            <h4 className='text-xl font-medium text-gray-900 dark:text-heading_dark_white'>
              keyboard{' '}
            </h4>
          </div>
          <p className='font-medium text-2xl dark:text-heading_dark_white'>
            <Icon.MdOutlineArrowForwardIos />
          </p>
        </div>
      </section>
    </div>
  )
}

export default MegWrapper(Display)
