import * as React from 'react'

//import data
import { comments } from '../../utils/constants'

//import motion animation module
import { motion } from 'framer-motion'

//import icons
import { Icon } from '../../utils/Icon'
import moment from 'moment'
import { profile } from '../../Assets/exports'

const PSTIMG = ({ synced }) => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastindex = comments.length - 1
    if (index < 0) {
      setIndex(lastindex)
    }
    if (index > lastindex) {
      setIndex(0)
    }
  }, [index])

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    /* POST DETAILS IMAGE COMPONENT */
    <React.Fragment>
      <section className=' max-w-[600px] w-full mx-auto h-full flex flex-row relative overflow-hidden'>
        {comments.map(
          ({ creator, createdAt, profile: [{ profileImage }] }, i) => {
            let position = 'nextSlide'
            if (index === i) {
              position = 'activeSlide'
            }
            if (index === i - 1 || (i === 0 && index === comments.length - 1)) {
              position = 'lastSlide'
            }
            return (
              <React.Fragment key={i}>
                <img
                  src={profileImage}
                  alt='post'
                  className={`${position} ${
                    synced ? 'rounded-xl' : ''
                  } h-full object-cover transition-all absolute w-full top-0 right-0 `}
                />
              </React.Fragment>
            )
          }
        )}
        {synced && (
          <section
            className={`absolute top-0 right-0 left-0 w-full p-4 flex flex-col gap-3`}
          >
            <div className='flex flex-row gap-1'>
              {comments.map((data, index) => (
                <div
                  className='w-full h-2 bg-gray-400 rounded-full'
                  key={index}
                >
                  <div className={`w-full h-2 bg-white rounded-full`} />
                </div>
              ))}
            </div>
            <figure className='flex flex-row items-center gap-3'>
              <img
                src={profile}
                alt='storie'
                className='h-12 w-12 rounded-full ring-4 ring-blue-600'
              />
              <figcaption className='flex flex-col text-start'>
                <h5 className='capitalize dark:text-thdark500 text-black brightness-95'>
                  <b>{'John Diggle'}</b>
                </h5>
                <article className='flex flex-row '>
                  <u className='dark:text-blue-700 text-black text-base mr-1'>
                    {comments.length} new
                  </u>
                  <center>
                    <strong className='dark:text-white text-black'>.</strong>
                  </center>
                  <u className='dark:text-thlight500 text-black text-base ml-1'>
                    {moment(new Date()).fromNow()}
                  </u>
                </article>
              </figcaption>
            </figure>
          </section>
        )}
      </section>

      <motion.button
        whileHover={{
          x: [0, 20],
        }}
        onClick={() => setIndex(index - 1)}
        className='text-white absolute text-2xl top-1/2 left-2 rounded-full p-3 dark:bg-dark400 '
      >
        <Icon.FaChevronLeft />
      </motion.button>
      <motion.button
        whileHover={{
          x: [0, -20],
        }}
        onClick={() => setIndex(index + 1)}
        className='text-white absolute text-2xl top-1/2 right-2 rounded-full p-3 dark:bg-dark400'
      >
        <Icon.FaChevronRight />
      </motion.button>
    </React.Fragment>
  )
}

export default PSTIMG
