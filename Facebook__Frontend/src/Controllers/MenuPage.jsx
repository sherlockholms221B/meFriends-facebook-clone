import React from 'react'
import { motion } from 'framer-motion'

import { useGlobalContext } from '../Context/UseContext'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../Components'
import MSideBar from '../Components/SideBars/MSideBar'

const MenuPage = (Component, ComponentBtn, idName) =>
  function HOC() {
    const search = useLocation().search
    const query = new URLSearchParams(search).get('talling')
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
            <div className=' min-w-[260px] w-full overflow-auto h-full relative'>
              <div className='flex_row w-screen h-screen '>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className='w-550 dark:bg-darkSecondary h-full overflow-hidden flex items-center justify-center border-r-2 dark:border-borderDark'
                >
                  {idName && <ComponentBtn />}
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [200, 0] }}
                  transition={{ duration: 0.5, easing: 'easeInOut' }}
                  className='w-full bg-black h-full text-white relative flex justify-center'
                >
                  {(query === 'Friends' ||
                    query === 'Saved' ||
                    query === 'Watch' ||
                    query === 'Memories' ||
                    query.includes('Market')) && <Component />}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default MenuPage
