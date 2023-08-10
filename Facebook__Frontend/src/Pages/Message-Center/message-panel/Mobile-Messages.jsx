import * as React from 'react';

//import links
import { mNavLink } from '../../../utils/links';

//import compnents
import MbarLink from '../../../Components/Navigation Bar/components/SoftMobileNav';

//import react error boundary
import ErrorBoundary from '../../../ErrorBundary';

//import custom icon
import { Icon } from '../../../utils/Icon';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import components
import { comments } from '../../../utils/constants';

import { HashLoader } from 'react-spinners'; // Import BeatLoader from react-spinners

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import { MdPhotoCamera } from 'react-icons/md';

//import meassage roots
const MessageRoot = React.lazy(() => {
  return import('../components/roots/Root');
});

const MobileMessages = () => {
  return (
    <section className='dark:bg-dark500 bg-light500 w-screen h-screen '>
      <section className='dark:bg-dark400 bg-white flex flex-row items-center w-full justify-between px-4 py-2 mdsm:hidden'>
        {mNavLink.map((data, index) => (
          <MbarLink {...data} key={index} />
        ))}
      </section>
      <>
        <hr className='dark:border-bd500' />
      </>
      <ErrorBoundary
        fallback={
          <article>
            <p className=''>can't fetch chats. check you network status.</p>
          </article>
        }
      >
        <React.Suspense
          fallback={
            <div className='w-full h-full flex items-center justify-center'>
              {/* Replace the "loading..." text with the BeatLoader */}
              <HashLoader color='blue' />
            </div>
          }
        >
          <MessageRoot
            title='Messages'
            actionButton={[
              {
                icon: <Icon.MdSettings className='text-xl' />,
              },
              {
                icon: <Icon.MdOutlineSearch className='text-xl' />,
              },
            ]}
          >
            <Swiper
              spaceBetween={10}
              slidesPerView='auto'
              slidesPerGroup={4}
              navigation={true}
              modules={[Navigation]}
              className='mySwiper'
            >
              <SwiperSlide>
                <button className='w-24 h-24 flex flex-col gap-1.5 items-center justify-center cursor-pointer px-2 py-1.5 rounded-md darkhover:bg-dark300 hover:bg-slate-200'>
                  <i className='w-16 h-16 rounded-full bg-dark300 flex justify-center items-center  ring-4 dark:ring-dark500 ring-black'>
                    <MdPhotoCamera className='text-2xl text-white' />
                  </i>
                  <article className='flex flex-col justify-center items-start'>
                    <h3 className='capitalize text-black dark:text-thdark500  text-sm font-light'>
                      Add to story
                    </h3>
                  </article>
                </button>
              </SwiperSlide>
              {comments.map((tallings, index) => (
                <SwiperSlide key={index}>
                  {comments.map(
                    (
                      {
                        creator,
                        profile: [{ profileImage, createdAt }],
                        comment,
                      },
                      index
                    ) => (
                      <button
                        className='w-24 h-24 flex flex-col gap-1.5 items-center justify-center cursor-pointer px-2 py-1.5 rounded-md dark:hover:bg-dark300 hover:bg-slate-200'
                        key={index + creator}
                        // onClick={() => {
                        //   setMessageState(false)
                        //   setChatState(true)
                        // }}
                      >
                        <img
                          src={profileImage}
                          alt='sender'
                          className='w-16 h-w-16 rounded-full object-cover ring-4 ring-blue-600'
                        />
                        <article className='flex flex-col justify-center items-start'>
                          <h3 className='capitalize text-black dark:text-thdark500  text-sm font-light'>
                            {creator.split(' ')[0]}
                          </h3>
                        </article>
                      </button>
                    )
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </MessageRoot>
        </React.Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default MobileMessages;
