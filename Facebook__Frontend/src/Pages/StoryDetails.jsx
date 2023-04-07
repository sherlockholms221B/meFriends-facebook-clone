import * as React from 'react'

//import react-router-dom module from 'react-router';
import { useNavigate } from 'react-router-dom'

//import moment for time framing
import moment from 'moment'

//import component
import { THRDot } from '../Components'
import PSTIMG from '../Pages/Posts/PSTIMG'

//import custom icons
import { Icon } from '../utils/Icon'

//import data from utils
import { comments } from '../utils/constants'

//import utils functions
import { randomNumberGenerator } from '../Functions/random.'

const StoryDetails = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <section className='flex justify-between items-center py-1 pr-2 border-b-2 dark:border-borderDark dark:bg-darkSecondary '>
        <div className='flex items-center justify-start w-fit gap-3 ml-4 '>
          <Icon.MdClose
            className='text-3xl dark:text-heading_dark_white'
            onClick={() => navigate(-1)}
          />
          <Icon.MdOutlineFacebook className='text-5xl shade_blue' />
        </div>
        <THRDot />
      </section>
      <section className='flex flex-col tablet:flex-row items-center w-screen h-screen '>
        <section className='hidden tablet:block tablet:w-550 dark:bg-darkSecondary h-full overflow-y-auto'>
          <div className='h-full overflow-auto home_scroll'>
            {comments.map(
              (
                { creator, profile: [{ profileImage, createdAt }], comment },
                index
              ) => (
                <div
                  className='w-full flex flex-row gap-3 cursor-pointer dark:hover:bg-darkComplementry  hover:bg-slate-200 px-2 py-1.5 mt-0.5 mb-0.5 rounded-md'
                  key={index + creator}
                >
                  <img
                    src={profileImage}
                    alt='sender'
                    className='w-10 h-10 rounded-full'
                  />
                  <article className=''>
                    <h3 className='capitalize text-black dark:text-heading_dark_white hidden larg:block text-lg font-medium'>
                      {creator}
                    </h3>
                    <article className='flex_row gap-2 dark:text-heading_dark_gray'>
                      <h3 className='text-sm'>
                        {`${comment.substring(
                          0,
                          randomNumberGenerator(9, 21)
                        )}...`}
                      </h3>
                      <p className='text-sm'>
                        {`${moment(createdAt).fromNow().substring(0, 5)}.`}
                      </p>
                    </article>
                  </article>
                </div>
              )
            )}
          </div>
        </section>
        <section className='w-full bg-black h-full text-white relative flex justify-center'>
          <section className='absolute flex justify-end items-center top-0 right-0 w-full'>
            <div className='flex items-center justify-end w-fit gap-8 mr-4 py-1'>
              <Icon.BiZoomIn className='text-2xl text-heading_dark_white' />
              <Icon.BiZoomOut className='text-2xl text-heading_dark_white' />
              <Icon.BsTagsFill className='text-2xl text-heading_dark_white' />
              <Icon.FaExpandAlt className='text-lg text-heading_dark_white' />
            </div>
          </section>
          <PSTIMG />
        </section>
      </section>
    </React.Fragment>
  )
}

export default StoryDetails
