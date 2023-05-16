import React from 'react'

//import framer motino module
import { motion } from 'framer-motion'

//import react router module
import { useLocation } from 'react-router-dom'

//import useglobal context
import { useGlobalContext } from '../Hooks/context/UseContext'

//import components
import { mNavLink } from '../utils/links'
import { Navbar } from '../Components'
import MSideBar from '../Components/SideBars/MSideBar'
import MbarLink from '../Components/Navigation Bar/components/SoftMobileNav'

const MenuPage = (Component, ComponentBtn, idName) =>
  function HOC() {
    const WILL_ANIMATE = window.matchMedia('(min-with:700px)').matches
    const search = useLocation().search
    const query = new URLSearchParams(search).get('talling')
    const { location } = useGlobalContext()
    console.log(WILL_ANIMATE)

    return (
      <React.Fragment>
        {!WILL_ANIMATE ? (
          <Navbar />
        ) : (
          <section className='dark:bg-dark400 bg-white flex flex-row items-center w-full justify-between px-4 py-2 mdsm:hidden'>
            {mNavLink.map((data, index) => (
              <MbarLink {...data} key={index} />
            ))}
          </section>
        )}
        <section
          style={{ marginTop: `${location.height}px` }}
          className='flex items-center justify-center relative h-screen w-screen overflow-hidden'
        >
          <section className=' flex items-strech sm:justify-between w-screen h-screen'>
            <MSideBar />
            <section className='min-w-[260px] w-full h-full relative flex flex-col md:flex-row items-center bg-light500 dark:bg-dark500'>
              <motion.div
                whileInView={
                  WILL_ANIMATE ? { opacity: [0.99, 1] } : { opacity: [0, 1] }
                }
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='md:w-550 w-full dark:bg-dark500 md:dark:bg-dark400 bg-white h-fit md:h-full overflow-hidden flex items-start justify-start md:justify-center md:border-r-2 md:dark:border-bd500'
              >
                {idName && <ComponentBtn />}
              </motion.div>
              <motion.div
                whileInView={
                  WILL_ANIMATE
                    ? { opacity: [0.99, 1] }
                    : { opacity: [0, 1], x: [200, 0] }
                }
                transition={{ duration: 0.5, easing: 'easeInOut' }}
                className='w-full h-full md:h-full bg-light500 dark:bg-dark500 text-white relative flex justify-center overflow-auto'
              >
                {(query === 'Friends' ||
                  query === 'Saved' ||
                  query === 'Watch' ||
                  query === 'Memories' ||
                  query.includes('Market')) && <Component />}
              </motion.div>
            </section>
          </section>
        </section>
      </React.Fragment>
    )
  }

export default MenuPage
