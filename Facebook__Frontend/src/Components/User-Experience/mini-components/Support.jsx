import React from 'react';

import { FaBookmark } from 'react-icons/fa';
import { useGlobalContext } from '../../../Hooks/context/UseContext';
import { IconHandler } from '../../../Functions/utilities/SH';
import { SectionHeader } from '../../Content-Creation/module';

import MegWrapper from '../../HOCs/MegWrapperHOC ';
import { Icon } from '../../../utils/Icon';
const Support = () => {
  const {
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    supportState,
    setSettingsState,
  } = useGlobalContext();
  return (
    <div className={` ${supportState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <SectionHeader
        title={`Help & support`}
        setFirstState={setProfileState}
        setSecondState={setSupportState}
        setThirdState={setGoBack}
      />
      <section>
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
  );
};

export default MegWrapper(Support);
