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
      <React.Fragment>
        <Navbar />
        <div
          style={{ paddingTop: `${location.height}px` }}
          className='flex items-center justify-center dark:bg-dark500 relative h-screen w-screen bg-light500 overflow-hidden'
        >
          <div className=' flex items-strech sm:justify-between w-screen h-screen'>
            <MSideBar />
            <div className=' min-w-[260px] w-full  h-full relative'>
              <div className='flex flex-col mdxs:flex-row items-center w-screen h-screen '>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className='sm:w-550 w-full dark:bg-dark400 h-full overflow-hidden flex items-start justify-center border-r-2 dark:border-bd500'
                >
                  {idName && <ComponentBtn />}
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1], x: [200, 0] }}
                  transition={{ duration: 0.5, easing: 'easeInOut' }}
                  className='w-full bg-black h-full text-white relative flex justify-center overflow-auto'
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
      </React.Fragment>
    )
  }

export default MenuPage
