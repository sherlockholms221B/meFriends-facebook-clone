import React, { useRef } from 'react'
import { useGlobalContext } from '../../Context/UseContext'
import MSideBar from '../../Components/SideBars/MSideBar'
import { CMPFooter, Feeds, Navbar, ProfilePicture } from '../../Components'
import { HED, EDIOP, Friends, Photos } from '..'
import { MdMoreHoriz } from 'react-icons/md'

const Profile = () => {
  const { location } = useGlobalContext()
  console.log(location)
  return (
    <>
      <Navbar />
      <div
        style={{ paddingTop: `${location.height}px` }}
        className='flex items-center justify-center dark:bg-darkPrimary relative overflow-auto h-[100vh] w-[100vw] bg-primary'
      >
        <div className=' flex items-strech mid_small:justify-between w-screen h-full'>
          <MSideBar />
          <div className=' min-w-[260px] w-full  overflow-auto h-full'>
            <div className='h-fit '>
              <HED />
              <section className='relative flex flex-row gap-4 h-screen overflow-hidden justify-center  w-full'>
                <div className='flex flex-col gap-4 overflow-auto scroll-hidden min-w-[260px] mid_small:w-[420px] px-0.5 pt-0.5 small:pt-4'>
                  <EDIOP />
                  <Photos />
                  <Friends />
                  <CMPFooter />
                </div>
                <div className='overflow-auto scroll-hidden'>
                  <Feeds isNot={false} />
                </div>
                <section
                  style={{ top: `${location.height}`, position: 'absolute' }}
                  className='py-2 dark:bg-darkSecondary hidden xtra_larg:flex_row justify-around'
                >
                  <div className='flex items-center gap-3'>
                    <ProfilePicture />
                    <p className=' text-black dark:text-heading_dark_white hidden larg:block text-lg font-medium'>{`Christsanctus chinedu`}</p>
                  </div>
                  <div className='w-fit rounded-md bg-secondaryWhite dark:bg-darkComplementry dark:text-heading_dark_white hover:bg-primaryWhite px-4 py-3'>
                    <MdMoreHoriz className='text-2xl' />
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
