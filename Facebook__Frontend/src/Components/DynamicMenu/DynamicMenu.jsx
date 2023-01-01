import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../../Context/UseContext'

const DynamicMenu = (Component) =>
  function HOC() {
    const { location } = useGlobalContext()
    const DNM = useRef(null)
    useLayoutEffect(() => {
      DNM.current.style.left = `${location.left}px`
      DNM.current.style.top = `${location.center}px`
    }, [location])

    return (
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.4, ease: 'linear' }}
        className={`${
          location.left === 0 || location.left === 'undefined'
            ? 'hidden'
            : 'block'
        } absolute z-10 opacity-0 transition-all before:absolute before:w-5 before:h-5    before:-translate-x-[95%] before: before:bg-inherit rounded-b-xl rounded-tr-xl triangle dark:bg-darkSecondary`}
        ref={DNM}
      >
        <Component />
      </motion.div>
    )
  }

export default DynamicMenu
