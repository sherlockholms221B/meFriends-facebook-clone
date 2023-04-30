import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

//import components
import SoftSwiperMapData from './components/SoftSwiperMapData.js'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './components/styles.css'

// import required modules
import { Navigation } from 'swiper'

export default function SoftSwipeLayout({ data, title, children }) {
  return (
    <Swiper
      spaceBetween={6}
      slidesPerView='auto'
      slidesPerGroup={4}
      navigation={true}
      modules={[Navigation]}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      className='mySwiper'
    >
      <SwiperSlide>{children}</SwiperSlide>
      {data.map((tallings, index) => (
        <SwiperSlide key={index}>
          <SoftSwiperMapData tallings={tallings} title={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
/* <div className='autoplay-progress'>
  <svg viewBox='0 0 48 48' ref={progressCircle}>
    <circle cx='24' cy='24' r='20'></circle>
  </svg>
  <span ref={progressContent}></span>
</div> */

// const progressCircle = useRef(null)
// const progressContent = useRef(null)
// const onAutoplayTimeLeft = (s, time, progress) => {
//   console.log(progress)
//   progressCircle.current.style.setProperty('--progress', 1 - progress)
//   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
// }
