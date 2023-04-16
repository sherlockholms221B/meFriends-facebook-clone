import React from 'react'

//import Hoc component
import MenuPageUrl from '../MenuPageUrl'

//import components
import { Input } from '../../Components'
import { Icon } from '../../utils/Icon'
import { Demaceta } from '../../Components/RDOMC'
import { SoftIconContainer } from '../../examples'

const MenuSL = () => {
  return (
    <section className='w-[620px] h-full pt-3 pb-3'>
      <article className='pl-3'>
        <h5 className='text-2xl text-gray-800 dark:text-heading_dark_white font-bold'>
          Menu
        </h5>
      </article>
      <section className='w-full h-full vertical_scroll flex flex-row justify-evenly items-stretch mt-2'>
        <section className='rounded-md dark:bg-darkSecondary w-[60%] flex flex-col items-center pt-3 pb-3'>
          <article className='pl-3 w-full text-start'>
            <h5 className='text-lg text-gray-800 dark:text-heading_dark_white font-medium brightness-90'>
              Recent
            </h5>
          </article>
          <section className='relative rounded-full w-[96%] h-fit'>
            <Input
              type='text'
              name='menusl'
              placeholder='Search menu...'
              autoFocus
            />
            <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
          </section>
        </section>
        <section className='rounded-md dark:bg-darkSecondary w-[33%] h-fit flex flex-col gap-4 pt-3 pb-3'>
          <div className=' '>
            <article className='pl-3 w-full text-start'>
              <h5 className='text-lg text-gray-800 dark:text-heading_dark_white font-bold brightness-105'>
                Create
              </h5>
            </article>
            <section className='w-full flex flex-col gap-0.5 pl-2 pr-2 group mt-2'>
              {[
                {
                  icon: <Icon.MdModeEditOutline />,
                  title: 'Post',
                  isMove: false,
                },
                {
                  icon: <Icon.FaBookmark />,
                  title: 'Story',
                  isMove: true,
                },
                {
                  icon: <Icon.MdVideoCall />,
                  title: 'Room ',
                  isMove: true,
                },
                {
                  icon: <Icon.MdOutlineFormatListBulleted />,
                  title: 'Page',
                  isMove: true,
                },
                {
                  icon: <Icon.MdTune />,
                  title: 'Ad',
                  isMove: false,
                },
                {
                  icon: <Icon.BsGlobe />,
                  title: 'Group',
                  isMove: true,
                },
                {
                  icon: <Icon.BsGlobe />,
                  title: 'Event',
                  isMove: true,
                },
                {
                  icon: <Icon.BsGlobe />,
                  title: 'Marketplace listing',
                  isMove: true,
                },
              ].map(({ icon, title, isMove, ref }, index) => (
                <React.Fragment key={index}>
                  <SoftIconContainer
                    key={index}
                    text={title}
                    icon={icon}
                    ref={ref}
                    handleClick={() => {}}
                  />
                  {index === 2 && <Demaceta />}
                </React.Fragment>
              ))}
            </section>
          </div>
        </section>
      </section>
    </section>
  )
}

export default MenuPageUrl(MenuSL)
