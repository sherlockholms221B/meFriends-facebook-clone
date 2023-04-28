import * as React from 'react'

import { useNavigate } from 'react-router-dom'

//import data
import { comments } from '../../utils/constants'

//import motion animation module
import { motion } from 'framer-motion'

//import icons
import { Icon } from '../../utils/Icon'
import moment from 'moment'
import { profile } from '../../Assets/exports'

//import sanity url reader
import { urlFor } from '../../utils/client'

const PSTIMG = ({ synced, image, video }) => {
  const navigate = useNavigate()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastindex = comments?.length - 1
    if (index < 0) {
      setIndex(lastindex)
    }
    if (index > lastindex) {
      setIndex(0)
    }
  }, [index])

  // React.useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
  //   }, 5000)

  //   return () => {
  //     clearInterval(slider)
  //   }
  // }, [index])

  return (
    /* POST DETAILS IMAGE COMPONENT */
    <React.Fragment>
      <section className=' max-w-[600px] w-full mx-auto h-full flex flex-row relative overflow-hidden'>
        {/* {image?.map(({ asset, _key, _type }, i) => {
          let position = 'nextSlide'
          if (index === i) {
            position = 'activeSlide'
          }
          if (index === i - 1 || (i === 0 && index === image.length - 1)) {
            position = 'lastSlide'
          }
          return (
            <React.Fragment key={i + _key}>
              <img
                src={urlFor(asset).url()}
                alt='post'
                className={`${position} ${
                  synced ? 'rounded-xl' : ''
                } h-full object-cover transition-all absolute w-full top-0 right-0 `}
              />
            </React.Fragment>
          )
        })} */}
        {synced && (
          <section
            className={`absolute top-0 right-0 left-0 w-full p-4 flex flex-col gap-3`}
          >
            <div className='flex flex-row gap-1 w-full border'>
              {comments.map((data, i) => {
                let animation = 'bg-blue-600 w-full'
                if (index === i) {
                  animation = 'animate-ping bg-white'
                }
                if (index === i - 1) {
                  animation = 'bg-green-500'
                }

                return (
                  <div
                    className='w-full h-1 tab:h-2 bg-red-400 rounded-full'
                    key={index}
                  >
                    <div className={`h-1 tab:h-2 rounded-full ${animation} `} />
                  </div>
                )
              })}
            </div>
            <div className='flex flex-row items-center justify-between'>
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
              <Icon.MdClose
                className='text-3xl dark:text-thdark500'
                onClick={() => navigate(-1)}
              />
            </div>
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
