import React, { useRef } from 'react'
//import context
import { useGlobalContext } from '../../../Context/UseContext'
import { Icon } from '../../../utils/Icon'
import Profile from '../../Profile'
import { IconHandler } from '../../../Functions/SH'
import { themeSwitcher } from '../../../Functions/darkTheme'
import { RiLogoutBoxRFill } from 'react-icons/ri'
const MOverlay = () => {
  const lightMode = useRef(null)
  const darkMode = useRef(null)
  const automatic = useRef(null)
  const compactOn = useRef(null)
  const compactOff = useRef(null)
  const theme = localStorage.getItem('theme')
  const {
    setMobileMenu,
    setSettingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
  } = useGlobalContext()
  return (
    <section className='h-screen w-screen absolute z-40 top-0 right-0 dark:bg-darkPrimary bg-primaryWhite overflow-auto'>
      <section className='flex flex-row justify-between py-3 px-1.5 items-center border-b dark:border-borderDark border-gray-700'>
        <div className='flex flex-row gap-3 items-center'>
          <button
            onClick={() => setMobileMenu(false)}
            className=' dark:shadow-black dark:bg-darkComplementry w-10 h-10    rounded-full hover:bg-secondaryWhite bg-gray-300 p-2 cursor-pointer'
          >
            <Icon.MdArrowBack className='text-2xl  dark:text-white' />
          </button>
          <h3 className='text-2xl dark:text-white font-bold tracking-wide brightness-95'>
            Menu
          </h3>
        </div>

        <Icon.MdOutlineSearch fontSize={40} className='dark:text-white' />
      </section>
      <section>
        <Profile size='w-10 h-10' link='/profile' />
      </section>
      <section className='border-y-2 dark:border-borderDark pb-2'>
        <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
          <article className='flex flex-row gap-3 items-center w-full px-3 mb-2'>
            <Icon.RiSettings2Fill className='dark:text-white text-2xl' />
            <h3 className='dark:text-white font-bold tracking-wider text-xl'>
              Setting & privacy
            </h3>
          </article>
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
              className={`  ${title} dark:bg-darkComplementry hover:bg-secondaryWhite p-2 w-full rounded-md cursor-pointer`}
            >
              <div className='flex flex-row items-center gap-2 w-fit '>
                <p className='text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
                  {icon}
                </p>
                <h4 className='text-gray-900 font-medium dark:text-white'>
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className='border-y-2 dark:border-borderDark pb-2'>
        <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
          <article className='flex flex-row gap-3 items-center w-full px-3 mb-2'>
            <Icon.FaQuestionCircle className='dark:text-white text-2xl' />
            <h3 className='dark:text-white font-bold tracking-wider text-xl'>
              Help & support
            </h3>
          </article>
          {[
            {
              icon: <Icon.FaQuestionCircle />,
              title: 'Settings ',
            },
            {
              icon: <Icon.MdMarkEmailRead />,
              title: 'Privecy Checkup',
            },
            {
              icon: <Icon.BsExclamationSquareFill />,
              title: 'Privecy Center ',
            },
            {
              icon: <Icon.BiWifi />,
              title: 'Language',
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
              className={`  ${title} dark:bg-darkComplementry hover:bg-secondaryWhite p-2 w-full rounded-md cursor-pointer`}
            >
              <div className='flex flex-row items-center gap-2 w-fit '>
                <p className='text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
                  {icon}
                </p>
                <h4 className='text-gray-900 font-medium dark:text-white'>
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className='border-y-2 dark:border-borderDark pb-2'>
        <section className='w-full flex flex-col gap-1 mt-4 pl-2 pr-2'>
          <article className='flex flex-row gap-3 items-center w-full px-3 mb-2'>
            <Icon.FaMoon className='dark:text-white text-2xl' />
            <h3 className='dark:text-white font-bold tracking-wider text-xl'>
              Display & accessibility
            </h3>
          </article>
          {[
            {
              icon: <Icon.FaMoon />,
              title: 'Dark mode',
              desc: 'Adjust the appearance of Facebook to reduce glare and give your eyes a break.',
              options: [
                {
                  switch: 'Off',
                  ref: lightMode,
                  class: 'light',
                },
                {
                  switch: 'On',
                  ref: darkMode,
                  class: 'darkmode',
                },
                {
                  switch: 'Automatic',
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
                    className={` ${items.class} mt-2.5 mb-2.5 w-full cursor-pointer dark:bg-darkComplementry hover:bg-primary p-2 rounded-md`}
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
                      <div
                        className={` ${
                          theme === items.class
                            ? 'relative bg-inherit before:w-2 before:h-2 before:bg-blue-500 before:absolute before:rounded-full before:translate-y-1/2 before:-translate-x-1/2 ring-blue-500 before:top-auto before:right-auto ring-2'
                            : 'ring-2 dark:ring-white ring-gray-500'
                        }  mid_small:h-4 h-3 mid_small:w-4 w-3 rounded-full transition-colors `}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className='flex flex-row gap-3 h-20 items-center px-6'>
        <RiLogoutBoxRFill
          fontSize={40}
          className='dark:text-white brightness-90'
        />
        <button
          className='dark:text-white font-bold tracking-wider text-xl '
          onClick={() => {
            localStorage.removeItem('user')
            window.location.reload()
          }}
        >
          Log out
        </button>
      </section>
    </section>
  )
}

export default MOverlay
