import React from 'react'
import { motion } from 'framer-motion'

import { useGlobalContext } from '../Context/UseContext'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../Components'
import MSideBar from '../Components/SideBars/MSideBar'
import MenuSL from './MenuSL'

const MenuPageUrl = (Component) =>
  function HOC() {
    const search = useLocation().search
    const query = new URLSearchParams(search).get('talling')
    const { location, menuSl, shortCutSl, groupSl } = useGlobalContext()

    return (
      <>
        {(menuSl || groupSl || shortCutSl) && (
          <section className='absolute top-0 bottom-0 w-full h-full z-10'>
            <Navbar />
            <div
              style={{ paddingTop: `${location.height}px` }}
              className='flex items-center justify-center overflow-auto h-[100vh] w-[100vw] backdrop-filter backdrop-saturate-100 backdrop-brightness-50 backdrop-opacity-100 backdrop-contrast-100
              '
            >
              <div className=' flex items-strech mid_small:justify-between w-[100vw] h-[100%]'>
                <MSideBar />
                <div className=' min-w-[260px] w-full overflow-auto h-full flex justify-start items-stretch'>
                  <motion.div
                    animate={{ x: [200, 0] }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='w-[620px] dark:bg-darkSecondary h-full opacity-0 overflow-hidden flex items-center justify-center border-r-2 dark:border-borderDark'
                  >
                    {(menuSl || groupSl || shortCutSl) && <Component />}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    )
  }

export default MenuPageUrl
