import React from 'react'

import MenuPage from '../MenuPage'
import { Icon } from '../../utils/Icon'
import { Input } from '../../Components'
import { Demarcate } from '../../Components/RDOMC'
import { SoftButton, SoftIconContainer } from '../../examples'
import { comments } from '../../utils/constants'
const MarketPlace = () => {
  return (
    <div className='dark:bg-dark500 flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <article className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-thdark500 font-bold'>
          Today's picks
        </h5>
        <p className=' text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </article>
      <section className='flex flex-row flex-wrap w-full gap-3 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <div key={i + creator} className='w-[300px] h-[460px] flex-grow'>
              <img
                src={profileImage}
                alt=''
                className='w-full h-[80%] object-cover rounded-xl'
              />
              <div className='h-1/2 w-full flex flex-col items-center justify-start text-left'>
                <div className='w-[90%] flex flex-col gap-1 items-start justify-evenly '>
                  <h4 className='text-base text-gray-900 font-medium dark:text-white capitalize'>
                    {'$500.0'}
                  </h4>
                  <div className='flex flex-row gap-2 items-center justify-start'>
                    <p className='text-xs dark:text-thlight500'>
                      {'smart phone'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  )
}

const MarketPlaceBtn = () => {
  return (
    <section className='dark:bg-dark400 flex flex-col w-[400px] h-full  px-3 items-start pt-3 pb-3 text-start'>
      <article className='pl-3 w-full text-start flex justify-between items-center'>
        <h5 className='text-3xl text-gray-800 dark:text-thdark500 brightness-105 tracking-wide'>
          <strong>Marketplace</strong>
        </h5>
        <SoftButton
          rounded
          title='dark:bg-dark300 bg-gray-200 p-2 rounded-full'
          functionCall={() => {}}
        >
          <Icon.MdSettings className='text-xl dark:text-thdark500' />
        </SoftButton>
      </article>
      <section className='relative rounded-full w-full h-fit my-3'>
        <Input
          type='text'
          name='menusl'
          placeholder='Search Marketplace'
          autoFocus
        />
        <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </section>
      {[
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Notification',
          next: false,
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Inbox',
          next: false,
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Buying',
          next: true,
        },
      ].map(({ icon, title, next }, i) => (
        <SoftIconContainer
          next={next}
          icon={icon}
          text={title}
          handleClick={() => {}}
          key={i}
        />
      ))}
      <SoftButton
        title='mt-4 text-lg text-blue-500 bg-[#0c4aad47] py-2 capitalize w-full'
        functionCall={() => {}}
      >
        <Icon.HiPlusSm />
        Create new listing
      </SoftButton>
      <Demarcate />
      <b className='text-xl text-gray-800 dark:text-thdark500 brightness-95 tracking-wider'>
        Filter
      </b>
      <Demarcate />
      <b className='text-xl text-gray-800 dark:text-thdark500 brightness-95 tracking-wider'>
        Categories
      </b>
      {[
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Notification',
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Inbox',
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Buying',
        },
      ].map(({ icon, title, next }, i) => (
        <SoftIconContainer
          next={next}
          icon={icon}
          text={title}
          handleClick={() => {}}
          key={i}
        />
      ))}
    </section>
  )
}

export default MenuPage(MarketPlace, MarketPlaceBtn, 'marketplace')
