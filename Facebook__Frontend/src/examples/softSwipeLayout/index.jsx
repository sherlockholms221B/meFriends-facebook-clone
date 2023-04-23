import * as React from 'react'
import { Link } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

import useAuthStore from '../../Store/AuthStore.js'
import { urlFor } from '../../utils/client.js'

import Swiper, { Navigation, Pagination, History } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Icon } from '../../utils/Icon.js'
import Box from './components/box.js'

const SoftSwipeLayout = ({ data, title }) => {
  const { userProfile } = useAuthStore()

  React.useEffect(() => {
    new Swiper('.swiper', {
      speed: 300,
      spaceBetween: 6,
      slidesPerView: title === 'Rooms' ? 2 : 3,
      modules: [Navigation, Pagination, History],
      createElements: true,
      init: 'true',
      history: {
        key: 'slide',
      },
      navigation: {
        nextEl: '.swipe-btn-custom-next',
        prevEl: '.swipe-btn-custom-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: title === 'Rooms' ? 2 : 4,
          spaceBetween: 10,
        },

        1367: {
          slidesPerView: title === 'Rooms' ? 3 : 6,
        },
      },
    })
  }, [title])

  return (
    <React.Fragment>
      <section className='h-40 mdxs:h-48  flex flex-row items-center justify-start swiper relative p-2'>
        <section className='swiper-slide flex justify-center items-center rounded-lg shadow-xl  w-full h-48 '>
          <figure className='group dark:bg-dark400 flex flex-col w-full h-full rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
            <img
              src={urlFor(userProfile?.profileImage.asset).url()}
              alt='str'
              className='w-full h-[70%] rounded-t-lg object-cover group-hover:brightness-75'
            />
            <figcaption>
              <h1 className='text-gray-600 text-xs mdxs:text-sm mdsm:text-base font-semibold rounded-b-lg pt-4 px-1'>
                Create {title}
              </h1>
            </figcaption>
            <Link to={`/backface/api/profile`}>
              <article className='animate-pulse ring-4 ring-white dark:ring-[#242526] rounded-full cursor-pointer absolute top-[55%] right-[35%] bg-blue-700 p-1 z-10'>
                <RiAddLine className='text-white text-2xl font-bold' />
              </article>
            </Link>
          </figure>
        </section>
        {data.map((tallings, index) => (
          <section
            key={index}
            className={
              ' swiper-slide max-w-28 h-60 flex justify-center items-center ' +
              (title === 'Rooms' &&
                'w-52 h-52 flex flex-col justify-around items-center overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center')
            }
          >
            <Box tallings={tallings} title={title} />
          </section>
        ))}
        <button className='hidden mdsm:block swipe-btn-custom-next absolute z-[5] p-2.5 top-auto bottom-auto right-2 bg-dark400 rounded-full h-fit w-fit'>
          <Icon.MdOutlineArrowForwardIos className='text-white text-lg' />
        </button>
        <button className='hidden mdsm:block swipe-btn-custom-prev absolute z-[5] p-2.5 top-auto bottom-auto left-2 bg-dark400  rounded-full h-fit w-fit'>
          <Icon.IoChevronBack className='text-white text-xl' />
        </button>
      </section>
    </React.Fragment>
  )
}

export default SoftSwipeLayout
