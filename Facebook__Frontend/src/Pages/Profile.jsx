import React from 'react'
import { ImCamera } from 'react-icons/im'
import { BsCameraFill } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { MdCardTravel } from 'react-icons/md'
import { useGlobalContext } from '../Context/UseContext'
import MSideBar from '../Components/SideBars/MSideBar'
import { person_eleven, person_nine, profile } from '../Assets/exports'
import { comments } from '../utils/constants'
import { MdMoreHoriz } from 'react-icons/md'
import { CMPFooter, Feeds } from '../Components'

const Profile = () => {
  const { location } = useGlobalContext()
  return (
    <div
      style={{ paddingTop: `${location.height}px` }}
      className='flex items-center justify-center dark:bg-darkPrimary relative overflow-auto h-[100vh] w-[100vw] bg-primary'
    >
      <div className='flex items-strech mid_small:justify-between w-[100vw] h-[100%]'>
        <MSideBar />
        <div className=' min-w-[260px] w-full '>
          <div className='overflow-auto h-full'>
            <section className=' w-full  border-b-2 border-gray-200 bg-gradient-to-b to-white from-slate-200'>
              <div className='w-fit m-auto rounded-b-lg'>
                <img
                  src={person_nine}
                  alt='coverPicture'
                  className='w-[1000px] h-458 object-cover rounded-b-lg'
                />
              </div>
              <div className='w-[1000px] border-b-2 border-gray-500 m-auto relative flex items-center pt-5 pb-2'>
                <img
                  src={person_eleven}
                  alt='profile'
                  className='absolute -top-11 w-52 h-52 rounded-full object-contain ring-4 ring-white'
                />
                <div className='w-56 h-10 rounded-full object-contain'></div>
                <div className='flex flex-col gap-3 py-3'>
                  <h3 className='text-4xl font-bold'>
                    Don christsanctus outis
                  </h3>
                  <p className='text-xl light_text_gray font-semibold'>
                    4.1k friends
                  </p>
                  <div className='full h-9'>
                    {comments.map(
                      (
                        {
                          creator,
                          profile: [{ profileImage, createdAt }],
                          comment,
                        },
                        i
                      ) => (
                        <div className='relative' key={i}>
                          <img
                            src={profileImage}
                            alt='friends'
                            className={`absolute rounded-full w-9 h-9 ${
                              i === 0 && 'left-0 '
                            } ${i === 1 && 'left-8'} ${i === 2 && 'left-16'} ${
                              i === 3 && 'left-24'
                            } ${i === 4 && 'left-32'} ${i === 5 && 'left-40'} ${
                              i === 6 && 'left-48'
                            } ${i === 7 && 'left-56'} ${i === 8 && 'left-64'} ${
                              i > 8 && 'hidden'
                            } ring-2 ring-white
                           `}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className='w-[1000px]  m-auto relative flex items-center justify-between py-3 '>
                <div className='flex items-center justify-between w-8/12 '>
                  {[
                    'Post',
                    'About',
                    'Friends',
                    'Photo',
                    'Vidoe',
                    'Check-ins',
                    'More',
                  ].map((item, i) => (
                    <p
                      className='light_text_gray font-semibold text-lg'
                      key={i}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className='w-fit rounded-md bg-secondaryWhite hover:bg-primaryWhite px-4 py-3'>
                  <MdMoreHoriz className='text-2xl' />
                </div>
              </div>
            </section>
            <section className='flex flex-row gap-4 h-screen overflow-hidden justify-center  w-full'>
              <div className='flex flex-col gap-4 overflow-auto scroll-hidden min-w-[260px] mid_small:w-[420px] px-0.5 pt-0.5 small:pt-4'>
                <section className='bg-white rounded-lg p-3 flex flex-col gap-5  '>
                  <h2 className='text-xl font-bold'>Intro</h2>
                  <p className='light_text_gray font-normal text-lg text-center'>
                    Hi my name is Sanctus, I am a Full Stack Developer. I am
                    poised to help you achieve your goals...
                  </p>
                  <button className='bg-secondaryWhite hover:bg-primaryWhite py-2 text-lg rounded-lg font-semibold'>
                    Edit Bio
                  </button>
                  {[
                    {
                      title: 'Full Stack developer',
                      icon: <MdCardTravel />,
                    },
                    {
                      title: 'Studied at University of Nigeria, Nsukka',
                      icon: <FaUserGraduate />,
                    },
                  ].map(({ title, icon }, i) => (
                    <div className='flex_row gap-2' key={i}>
                      <p className='light_text_gray font-normal text-2xl'>
                        {icon}
                      </p>
                      <h2 className='light_text_gray font-normal text-lg text-center'>
                        {title}
                      </h2>
                    </div>
                  ))}

                  {['Edit Details', 'Add Hobbies', 'Add Featured'].map(
                    (title, i) => (
                      <button
                        key={i}
                        className='bg-secondaryWhite hover:bg-primaryWhite py-2 text-lg rounded-lg font-semibold'
                      >
                        {title}
                      </button>
                    )
                  )}
                </section>
                <section className='bg-white rounded-lg p-3 flex flex-col gap-5  '>
                  <h2 className='text-xl font-bold'>Intro</h2>
                  <p className='light_text_gray font-normal text-lg text-center'>
                    Hi my name is Sanctus, I am a Full Stack Developer. I am
                    poised to help you achieve your goals...
                  </p>
                  <button className='bg-secondaryWhite hover:bg-primaryWhite py-2 text-lg rounded-lg font-semibold'>
                    Edit Bio
                  </button>
                  {[
                    {
                      title: 'Full Stack developer',
                      icon: <MdCardTravel />,
                    },
                    {
                      title: 'Studied at University of Nigeria, Nsukka',
                      icon: <FaUserGraduate />,
                    },
                  ].map(({ title, icon }, i) => (
                    <div className='flex_row gap-2' key={i}>
                      <p className='light_text_gray font-normal text-2xl'>
                        {icon}
                      </p>
                      <h2 className='light_text_gray font-normal text-lg text-center'>
                        {title}
                      </h2>
                    </div>
                  ))}

                  {['Edit Details', 'Add Hobbies', 'Add Featured'].map(
                    (title, i) => (
                      <button
                        key={i}
                        className='bg-secondaryWhite hover:bg-primaryWhite py-2 text-lg rounded-lg font-semibold'
                      >
                        {title}
                      </button>
                    )
                  )}
                </section>
                <CMPFooter />
              </div>
              <div className='overflow-auto scroll-hidden'>
                <Feeds isNot={false} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
