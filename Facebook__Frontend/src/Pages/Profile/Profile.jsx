import React from 'react'

//import context
import { useGlobalContext } from '../../Context/UseContext'

//import components
import { CMPFooter, Feeds, Navbar } from '../../Components'
import { HED, EDIOP, Friends, Photos } from '../index'

//import layout
import MSideBar from '../../Components/SideBars/MSideBar'

const Profile = () => {
  const { location } = useGlobalContext()
  console.log(location)
  return (
    <section>
      <Navbar />
      <div
        style={{ paddingTop: `${location.height}px` }}
        className='flex items-center justify-center dark:bg-darkPrimary relative overflow-auto h-[100vh] w-[100vw] bg-primary'
      >
        <div className=' flex items-strech mid_small:justify-between w-screen h-full'>
          <MSideBar />
          <div className=' min-w-[260px] w-full  overflow-auto h-full scroll-hidden'>
            <div className='h-fit '>
              <HED />
              <section className='relative flex flex-col laptop:flex-row laptop:gap-4 laptop:h-screen overflow-y-auto laptop:overflow-hidden justify-center  w-full scroll-hidden'>
                <section className='flex flex-col gap-4 laptop:overflow-auto scroll-hidden laptop:min-w-[260px] w-full mid_small:w-520 mx-auto laptop:mx-0 px-0.5 pt-0.5 small:pt-4'>
                  <EDIOP />
                  <Photos />
                  <Friends />
                  <CMPFooter />
                </section>
                <section className='overflow-auto scroll-hidden'>
                  <Feeds isNot={false} />
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
