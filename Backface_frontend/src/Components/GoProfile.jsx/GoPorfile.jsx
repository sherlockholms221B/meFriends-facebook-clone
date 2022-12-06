import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaQuestionCircle } from 'react-icons/fa'
import { RiFeedbackFill, RiLogoutBoxRFill } from 'react-icons/ri'
import { MdOutlineArrowForwardIos, MdSettingsSuggest } from 'react-icons/md'

import MegWrapper from '../MegWrapper'
import { ProfilePicture } from '../index'
import { useGlobalContext } from '../../Context/UseContext'
const GoPorfile = () => {
  const { setProfileState } = useGlobalContext()
  return (
    <>
      <section className='p-1 shadow rounded-md'>
        <Link
          onClick={() => setProfileState(false)}
          to={`/backface/api/profile`}
          className='hover:bg-gray-100 h-fit flex flex-row items-center gap-3 px-2 py-1 rounded-md cursor-pointer'
        >
          <ProfilePicture />
          <h5 className='text-lg font-semibold text-gray-900'>
            Don Christsantus Outis
          </h5>
        </Link>
        <div className='border mt-1 mb-1' />
        <div className='hover:bg-gray-100 h-fit flex flex-row justify-between items-center gap-3 p-2 rounded-md'>
          <h5 className='text-blue-600 cursor-pointer font-medium'>
            See all profiles
          </h5>
          <div className='flex items-center justify-center  w-6 h-6 rounded-full bg-red-600  border-2 border-white'>
            <p className='text-white text-[12px] font-bold'>10</p>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col gap-1 mt-4'>
        {[
          {
            icon: <MdSettingsSuggest />,
            title: 'Settings & privacy',
            isMove: true,
          },
          {
            icon: <FaQuestionCircle />,
            title: 'Help & support',
            isMove: true,
          },
          { icon: <FaMoon />, title: 'Display & accessibility', isMove: true },
          { icon: <RiFeedbackFill />, title: 'Give feedback', isMove: false },
          {
            icon: <RiLogoutBoxRFill />,
            title: 'Log Out',
            isMove: false,
          },
        ].map(({ icon, title, isMove }, i) => (
          <div
            key={i + title}
            className={` ${
              isMove && 'justify-between flex flex-row items-center'
            } hover:bg-gray-100 p-2 w-full rounded-md cursor-pointer`}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className='text-xl rounded-full bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className=''>{title}</h4>
            </div>
            {isMove && (
              <p className=''>
                <MdOutlineArrowForwardIos />
              </p>
            )}
          </div>
        ))}
      </section>
      <section className='mt-2'>
        <p className='text-sm'>
          Privacy · Terms · Advertising · Ad choices · Cookies ·{' '}
          <span className='cursor-pointer'>more</span> · Meta © 2022
        </p>
      </section>
    </>
  )
}

export default MegWrapper(GoPorfile)
