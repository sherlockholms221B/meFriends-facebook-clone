import React from 'react'

//import context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import components
import { CMPFooter, Feeds, Navbar } from '../../Components'
import { HED, EDIOP, Friends, Photos } from '../index'

//import layout
import MSideBar from '../../Components/SideBars/MSideBar'

const Profile = () => {
  const { location } = useGlobalContext();
  return (
    <section>
      <Navbar />
      <div
        style={{ paddingTop: `${location.height}px` }}
        className='flex items-center justify-center dark:bg-dark500 relative overflow-auto h-[100vh] w-[100vw] bg-light500'
      >
        <div className=' flex items-strech sm:justify-between w-screen h-full'>
          <MSideBar />
          <div className=' min-w-[260px] w-full  overflow-auto h-full scroll-hidden'>
            <div className='h-fit '>
              <HED />
              <section className='relative flex flex-col lap:flex-row lap:gap-4 lap:h-screen overflow-y-auto lap:overflow-hidden justify-center  w-full scroll-hidden'>
                <section className='flex flex-col gap-4 lap:overflow-auto scroll-hidden lap:min-w-[260px] w-full sm:w-520 mx-auto lap:mx-0 px-0.5 pt-0.5 mdsm:pt-4'>
                  <EDIOP />
                  <Photos />
                  <Friends />
                  <CMPFooter hidden />
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
