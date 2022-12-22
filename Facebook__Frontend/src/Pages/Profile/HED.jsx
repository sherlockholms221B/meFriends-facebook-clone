import React, { useLayoutEffect, useRef } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { person_eleven, person_nine } from '../../Assets/exports'
import { useGlobalContext } from '../../Context/UseContext'
import { comments } from '../../utils/constants'

const HED = () => {
  const { dynamicLocation } = useGlobalContext()
  const HedRef = useRef(null)
  useLayoutEffect(() => {
    const element = HedRef.current.getBoundingClientRect()
    const elementHeight = element.height
    dynamicLocation({ HEDheight: elementHeight })
  }, [])
  return (
    <section
      ref={HedRef}
      className=' w-full  border-b-2 border-gray-200 bg-gradient-to-b to-white from-slate-200 dark:from-[#3a3b3c] dark:to-[#242526] dark:border-borderDark'
    >
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
          <h3 className='text-4xl dark:text-heading_dark_white font-bold'>
            Don christsanctus outis
          </h3>
          <p className='text-xl light_text_gray dark:text-heading_dark_gray font-semibold'>
            4.1k friends
          </p>
          <div className='full h-9'>
            {comments.map(
              (
                { creator, profile: [{ profileImage, createdAt }], comment },
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
              className='light_text_gray dark:text-heading_dark_gray font-semibold text-lg'
              key={i}
            >
              {item}
            </p>
          ))}
        </div>
        <div className='w-fit rounded-md bg-secondaryWhite dark:bg-darkComplementry dark:text-heading_dark_white hover:bg-primaryWhite px-4 py-3'>
          <MdMoreHoriz className='text-2xl' />
        </div>
      </div>
    </section>
  )
}

export default HED
