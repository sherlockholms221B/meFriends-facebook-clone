import * as React from 'react'

//import react-router-dom module from 'react-router';
import { useNavigate } from 'react-router-dom'

//import moment for time framing
import moment from 'moment'

//import component
import { Input, THRDot } from '../../Components'
import { Button } from '../../Components/RDOMC'
import SoftButton from '../../examples/SoftButton'
import PSTIMG from '../Posts/PSTIMG'

//import custom icons
import { Icon } from '../../utils/Icon'

//import data from utils
import { posts } from '../../utils/constants'

const StoryDetails = () => {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col tab:flex-row items-center w-screen h-screen '>
      <aside className='hidden tab:flex tab:w-550 dark:bg-dark400 h-full flex-col'>
        <section className='flex items-center justify-start gap-3 p-2 w-full'>
          <Icon.MdClose
            className='text-3xl dark:text-thdark500'
            onClick={() => navigate(-1)}
          />
          <Icon.MdOutlineFacebook className='text-5xl text-blue-400' />
        </section>
        <hr className='dark:border-bd500 border-black' />
        <section className='p-4 h-full overflow-y-auto flex flex-col gap-4'>
          <article className='w-full text-start'>
            <h5 className='text-3xl text-gray-800 dark:text-thdark500 brightness-105 tracking-wide'>
              <strong>Stories</strong>
            </h5>
            <SoftButton
              title='bg-transparent text-start text-xs mt-1'
              functionCall={() => {}}
            >
              <u className='dark:text-blue-700 text-black text-base mr-1'>
                Archive
              </u>
              <center>
                <strong className='dark:text-white text-black'>.</strong>
              </center>
              <u className='dark:text-blue-700 text-black text-base ml-1'>
                Settings
              </u>
            </SoftButton>
          </article>

          <b className=' dark:text-thdark500 text-black tracking-normal'>
            Your story
          </b>
          <Button
            functionCall={() => {}}
            title='flex flex-row items-center gap-2 px-3'
          >
            <Button functionCall={() => {}} title='p-3 bg-dark300 rounded-full'>
              <Icon.HiPlusSm className='text-blue-400' fontSize={50} />
            </Button>
            <Button functionCall={() => {}} title='flex flex-col '>
              <h5 className='dark:text-white text-black'>
                <b>Create a stroy</b>
              </h5>
              <p className='text-black dark:text-thlight500 text-sm'>
                Share a photo or write something
              </p>
            </Button>
          </Button>
          <b className=' dark:text-thdark500 text-black tracking-normal'>
            All stories
          </b>
          {posts.map(
            (
              {
                creator,
                profile: [{ profileImage, createdAt }],
                isPrivate,
                post,
                postText,
              },
              index
            ) => (
              <button
                key={index}
                type='button '
                className='w-full hover:bg-dark300 p-3 rounded-md'
              >
                <figure className='flex flex-row items-center gap-3'>
                  <img
                    src={profileImage}
                    alt='storie'
                    className='h-16 w-16 rounded-full ring-4 ring-blue-600'
                  />
                  <figcaption className='flex flex-col text-start'>
                    <h5 className='capitalize dark:text-thdark500 text-black brightness-95'>
                      <b>{creator}</b>
                    </h5>
                    <article className='flex flex-row '>
                      <u className='dark:text-blue-700 text-black text-base mr-1'>
                        {post.length} new
                      </u>
                      <center>
                        <strong className='dark:text-white text-black'>
                          .
                        </strong>
                      </center>
                      <u className='dark:text-thlight500 text-black text-base ml-1'>
                        {moment(createdAt).fromNow()}
                      </u>
                    </article>
                  </figcaption>
                </figure>
              </button>
            )
          )}
        </section>
      </aside>
      <section className='w-full bg-black h-full text-white relative flex justify-center'>
        <section className=' hidden tab:flex absolute justify-end items-center top-2 right-4 w-full'>
          <THRDot />
        </section>
        <section className=' max-w-[500px] w-full mx-auto h-full flex flex-col justify-between items-center relative overflow-hidden p-4'>
          <section className='h-[90%] w-full rounded-xl relative'>
            <PSTIMG synced />
          </section>
          <section className='w-full'>
            <Input
              autoFocus
              handleChange={() => {}}
              name='story'
              type='text'
              value={''}
              placeholder='Reply...'
            />
          </section>
        </section>
      </section>
    </section>
  )
}

export default StoryDetails
