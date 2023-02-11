import React, { useEffect, useState } from 'react'
import { comments } from '../../utils/constants'
import { motion } from 'framer-motion'
import { Icon } from '../../utils/Icon'

const PSTIMG = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastindex = comments.length - 1
    if (index < 0) {
      setIndex(lastindex)
    }
    if (index > lastindex) {
      setIndex(0)
    }
  }, [index])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    /* POST DETAILS IMAGE COMPONENT */
    <>
      <section className=' max-w-[600px] w-full mx-auto h-full flex flex-row relative overflow-hidden'>
        {comments.map(({ profile: [{ profileImage }] }, i) => {
          let position = 'nextSlide'
          if (index === i) {
            position = 'activeSlide'
          }
          if (index === i - 1 || (i === 0 && index === comments.length - 1)) {
            position = 'lastSlide'
          }
          return (
            <img
              key={i}
              src={profileImage}
              alt='post'
              className={`${position} h-full object-cover transition-all absolute w-full top-0 right-0 `}
            />
          )
        })}
      </section>
      <motion.button
        whileHover={{
          x: [0, 20],
        }}
        onClick={() => setIndex(index - 1)}
        className='text-white absolute text-2xl top-1/2 left-2 rounded-full p-3 dark:bg-darkSecondary '
      >
        <Icon.FaChevronLeft />
      </motion.button>
      <motion.button
        whileHover={{
          x: [0, -20],
        }}
        onClick={() => setIndex(index + 1)}
        className='text-white absolute text-2xl top-1/2 right-2 rounded-full p-3 dark:bg-darkSecondary'
      >
        <Icon.FaChevronRight />
      </motion.button>
    </>
  )
}

export default PSTIMG
