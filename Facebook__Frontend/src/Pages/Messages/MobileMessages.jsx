import * as React from 'react'

//import links
import { mNavLink } from '../../utils/links'

//import compnents
import MbarLink from '../../Components/Navigation Bar/components/SoftMobileNav'

//import react error boundary
import ErrorBoundary from '../../ErrorBundary'

//import custom icon
import { Icon } from '../../utils/Icon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

//import components
import { comments } from '../../utils/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

//import meassage roots
const MessageRoot = React.lazy(() => {
  return import('./MessageRoot')
})

const MobileMessages = () => {
  return (
    <section className='dark:bg-dark500 bg-light500 w-screen h-full '>
      <section className='flex flex-row items-center w-full justify-between px-4 py-2 mt-1 mdsm:hidden'>
        {mNavLink.map((data, index) => (
          <MbarLink {...data} key={index} />
        ))}
      </section>
      <>
        <hr />
      </>
      <ErrorBoundary
        fallback={
          <article>
            <p className=''>can't fetch chats. check you network status.</p>
          </article>
        }
      >
        <React.Suspense fallback={<p>loading...</p>}>
          <MessageRoot
            title='Messages'
            actionButton={[
              {
                icon: <Icon.MdSettings />,
              },
              {
                icon: <Icon.MdOutlineSearch />,
              },
            ]}
          >
            <Swiper
              spaceBetween={6}
              slidesPerView='auto'
              slidesPerGroup={4}
              navigation={true}
              modules={[Navigation]}
              className='mySwiper'
            >
              <SwiperSlide></SwiperSlide>
              {comments.map((tallings, index) => (
                <SwiperSlide key={index}>
                  <p className=''>messages</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </MessageRoot>
        </React.Suspense>
      </ErrorBoundary>
    </section>
  )
}

export default MobileMessages
