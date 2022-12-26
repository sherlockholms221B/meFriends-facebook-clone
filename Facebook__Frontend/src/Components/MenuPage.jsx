import React from 'react'
import { motion } from 'framer-motion'

import Navbar from './Navigation Bar/Navbar'
import MSideBar from './SideBars/MSideBar'
import { useGlobalContext } from '../Context/UseContext'

const MenuPage = (Component) =>
  function HOC() {
    const { location } = useGlobalContext()

    return (
      <>
        <Navbar />
        <div
          style={{ paddingTop: `${location.height}px` }}
          className='flex items-center justify-center dark:bg-darkPrimary relative overflow-auto h-[100vh] w-[100vw] bg-primary'
        >
          <div className=' flex items-strech mid_small:justify-between w-[100vw] h-[100%]'>
            <MSideBar />
            <div className=' min-w-[260px] w-full overflow-auto h-full'>
              <div className='flex_row w-screen h-screen '>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className='w-550 dark:bg-darkSecondary h-full overflow-hidden flex items-center justify-center border-r-2 dark:border-borderDark'
                >
                  <h4 className='text-white text-3xl'> Friends Components</h4>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [200, 0] }}
                  transition={{ duration: 0.5, easing: 'easeInOut' }}
                  className='w-full bg-black h-full text-white relative flex justify-center'
                >
                  <Component />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default MenuPage
