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
      spaceBetween: 10,
      slidesPerView: title === 'Rooms' ? 3 : 5,
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
    })
  }, [])

  return (
    <React.Fragment>
      <section className=' h-60 flex flex-row items-center justify-start swiper relative p-2'>
        <section className='swiper-slide flex justify-center items-center ring-2 dark:ring-slate-700 ring-white rounded-lg shadow-md shadow-slate-700 w-full h-60'>
          <figure className='group dark:bg-darkSecondary flex flex-col w-full h-full rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
            <img
              src={urlFor(userProfile?.profileImage.asset).url()}
              alt='str'
              className='w-full h-[70%] rounded-t-lg object-cover group-hover:brightness-75'
            />
            <figcaption>
              <h1 className='text-gray-600 text-md font-semibold rounded-b-lg pt-4 px-1'>
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
            class='swiper-slide max-w-28 h-60 flex justify-center items-center'
          >
            <Box tallings={tallings} />
          </section>
        ))}
        <button className='swipe-btn-custom-next absolute z-[5] p-2.5 top-auto bottom-auto right-2 bg-[#0c4aad8f] rounded-full h-fit w-fit'>
          <Icon.MdOutlineArrowForwardIos className='text-white text-lg' />
        </button>
        <button className='swipe-btn-custom-prev absolute z-[5] p-2.5 top-auto bottom-auto left-2 bg-[#0c4aad8f] rounded-full h-fit w-fit'>
          <Icon.IoChevronBack className='text-white text-xl' />
        </button>
      </section>
    </React.Fragment>
  )
}

export default SoftSwipeLayout
