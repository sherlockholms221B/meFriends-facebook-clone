import React, { useRef } from 'react';

import { useGlobalContext } from '../../../Hooks/context/UseContext';
import MegWrapper from '../../HOCs/MegWrapperHOC ';
import { themeSwitcher } from '../../../Functions/utilities/darkTheme';
import { Icon } from '../../../utils/Icon';
import { SectionHeader } from '../../Content-Creation/module';

const DisplaySettings = () => {
  const lightMode = useRef(null);
  const darkMode = useRef(null);
  const automatic = useRef(null);
  const compactOn = useRef(null);
  const compactOff = useRef(null);
  const theme = localStorage.getItem('theme');
  const { setDisplayState, setProfileState, setGoBack, displayState } =
    useGlobalContext();
  return (
    <section className={` ${displayState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <SectionHeader
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
            }  ${i === 1 ? 'hidden sm:flex' : 'flex'} flex-row gap-2 `}
            key={i}
          >
            <i className='text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-3 w-fit h-fit'>
              {icon}
            </i>
            <div className=''>
              <h4 className='text-xl font-medium text-gray-900 dark:text-thdark500'>
                {title}{' '}
              </h4>
              <p className='text-md text-gray-500 font-normal'> {desc} </p>
              {options.map((items, i) => (
                <button
                  className={` ${items.class} mt-2.5 mb-2.5 w-full cursor-pointer dark:hover:bg-dark300 hover:bg-light500 p-2 rounded-md`}
                  key={i}
                  ref={items.ref}
                  onClick={() => {
                    themeSwitcher(items.ref);
                  }}
                >
                  <div
                    type='button'
                    className='flex flex-row justify-between items-center'
                  >
                    <div className='flex flex-col items-start text-start w-fit'>
                      <h4 className='text-lg capitalize font-medium text-gray-900 dark:text-thdark500'>
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
                      }  sm:h-4 h-3 sm:w-4 w-3 rounded-full transition-colors `}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className='hidden items-center sm:flex flex-row justify-between cursor-pointer  hover:bg-light500 p-2 rounded-md'>
          <article className='flex flex-row gap-2 items-center'>
            <p className='text-xl  dark:bg-dark300 dark:text-thdark500 rounded-full bg-gray-200 p-3 w-fit h-fit'>
              <Icon.BsFillKeyboardFill />
            </p>
            <h4 className='text-xl font-medium text-gray-900 dark:text-thdark500'>
              keyboard{' '}
            </h4>
          </article>
          <p className='font-medium text-2xl dark:text-thdark500'>
            <Icon.MdOutlineArrowForwardIos />
          </p>
        </div>
      </section>
    </section>
  );
};

export default MegWrapper(DisplaySettings);
