import * as React from 'react'

//import react router module
import { Link, useLocation } from 'react-router-dom'

//import context
import { useGlobalContext } from '../Hooks/context/UseContext'

//import data
import { feedLinks, feedLinksOne } from '../utils/links'
// import { posts } from '../utils/constants'

//import component
import { Stories, Post, Reels, Rooms, Profile } from './index.js'

//import react custom icons
import { Icon } from '../utils/Icon'

//import authstore from zustand store
import useAuthStore from '../Store/AuthStore'
import { allPostsQuery } from '../utils/querries'
import { client } from '../utils/client'

//component
const Posts = ({ profile }) => {
  const { userProfile } = useAuthStore()
  const [allPost, setAllPost] = React.useState([])
  const {
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
  } = useGlobalContext()

  React.useEffect(() => {
    const query = allPostsQuery()
    client.fetch(query).then((data) => {
      console.log(data)
      setAllPost(data)
    })
  }, [])

  //custom styles
  const isActiveStyle =
    'py-3  px-2 mdsm:px-11   mt-1 cursor-pointer  border-b-4 border-blue-600 blue_text  place-items-center'
  const isNotActiveStyle =
    'py-3  px-2 mdsm:px-11 rounded-lg  mt-1 mb-1 text-gray-600 cursor-pointer hover:bg-light500 dark:hover:bg-dark300  dark:text-thlight500'
  const vivaIconContainer =
    'flex flex-row flex-nowrap items-center hover:bg-light500 dark:hover:bg-dark300 mdsm:rounded-md rounded-sm cursor-pointer'
  //

  //react-router-dom query parameters
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')

  return (
    <section className='overflow-hidden flex items-center justify-center h-screen mx-auto w-full sm:w-520 xlg:w-[700px] lap:mx-0 px-0.5 pt-0.5 mdsm:pt-2'>
      <section className='flex flex-col w-full h-full overflow-auto scroll-hidden pb-20'>
        <section className='dark:bg-dark400 bg-white border dark:border-bd500 rounded-md shadow-lg md:order-2 '>
          <section className='flex_row gap-2 justify-between px-1 xs:p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c] py-2 mdsm:py-4'>
            <Profile link={'`/backface/api/profile`'} />
            <article
              className='rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 px-3 py-1.5 w-full cursor-pointer  justify-start'
              onClick={() => {
                setMessageState(false)
                setNotificationState(false)
                setProfileState(false)
                setCreatePostState(true)
              }}
            >
              <h1 className='text-sm font-normal dark:text-thlight500 text-gray-500 p-1'>
                Whats on your mind,{' '}
                <span className='text-md brightness-110 tracking-wide font-medium'>
                  {userProfile.userName}
                </span>
              </h1>
            </article>
          </section>
          <section className='flex_row flex-nowrap justify-around px-1 mdsm:px-2 py-1 mdsm:py-2'>
            {feedLinksOne.map(({ icon, title, mtitle }, i) => (
              <article
                key={i}
                className={` ${vivaIconContainer} px-4 mdsm:px-6
               py-0.5 mdsm:py-2 flex flex-row items-center justify-center gap-2`}
              >
                {icon}
                <p className='hidden mdsm:block text-gray-500 font-semibold dark:text-thlight500 tracking-wider'>
                  {title}
                </p>
                <p className='text-md mdsm:hidden text-gray-500 font-semibold dark:text-thlight500'>
                  {mtitle}
                </p>
              </article>
            ))}
          </section>
        </section>
        <div class='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
          <div class='animate-pulse flex space-x-4'>
            <div class='rounded-full bg-slate-700 h-10 w-10'></div>
            <div class='flex-1 space-y-6 py-1'>
              <div class='h-2 bg-slate-700 rounded'></div>
              <div class='space-y-3'>
                <div class='grid grid-cols-3 gap-4'>
                  <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                  <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                </div>
                <div class='h-2 bg-slate-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role='alert'
        >
          <strong class='font-bold'>Holy smokes!</strong>
          <span class='block sm:inline'>Something seriously bad happened.</span>
          <span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
            <svg
              class='fill-current h-6 w-6 text-red-500'
              role='button'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <title>Close</title>
              <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
            </svg>
          </span>
        </div>
        {!profile && (
          <section className='dark:bg-dark400 bg-white rounded-md shadow-lg md:order-2  mt-4'>
            <section className='flex_row justify-between px-4 border-b-2 border-gray-300 dark:border-[#3a3b3c] py-1'>
              <h2 className='text-xl font-bold dark:text-thdark500'>Posts</h2>
              <div className=' flex flex-row items-center justify-end gap-2 py-1.5 cursor-pointer '>
                {[
                  {
                    title: 'Filters',
                    icon: (
                      <Icon.MdOutlineCompareArrows className='text-2xl dark:text-thdark500' />
                    ),
                  },
                  {
                    title: 'Manage posts',
                    icon: (
                      <Icon.MdSettings className='text-2xl dark:text-thdark500' />
                    ),
                  },
                ].map(({ title, icon }, i) => (
                  <article
                    className='flex items-center flex-nowrap gap-2 rounded-md px-3 py-2 dark:bg-dark300'
                    key={i}
                  >
                    {icon}
                    <p className='dark:text-thdark500 text-lg  font-semibold'>
                      {title}
                    </p>
                  </article>
                ))}
              </div>
            </section>
            <div className='flex_row justify-around capitalize px-1  '>
              {[
                {
                  name: 'list view',
                  icon: <Icon.BsList />,
                },
                {
                  name: 'grid view',
                  icon: <Icon.IoGrid />,
                },
              ].map(({ name, icon }, i) => (
                <Link
                  to={`?talling=${name}`}
                  className={`
                ${
                  query === name
                    ? isActiveStyle
                    : `${
                        i === 0 && query === null
                          ? isActiveStyle
                          : isNotActiveStyle
                      }`
                } 
              `}
                  key={i + name}
                >
                  <article className='flex flex-row gap-2 items-center '>
                    <p className='font-bold text-md mdsm:text-2xl '>{icon} </p>
                    <h1 className='font-medium text-sm mdsm:text-lg'>{name}</h1>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
        {profile && (
          <div className='dark:bg-dark400 bg-white rounded-md shadow-lg mt-4 md:order-1 md:mb-4 border dark:border-bd500'>
            <div className='flex_row justify-around  capitalize border-b-2 px-1  dark:border-bd500  border-[#D8D5D5]'>
              {feedLinks.map(({ name, icon }, i) => (
                <Link
                  to={`?talling=${name}`}
                  className={`
                ${
                  query === name
                    ? isActiveStyle
                    : `${
                        i === 0 && query === null
                          ? isActiveStyle
                          : isNotActiveStyle
                      }`
                } 
              `}
                  key={i + name}
                >
                  <article className='flex flex-row gap-2 items-center '>
                    <p className='font-bold text-md mdsm:text-2xl '>{icon} </p>
                    <h1 className='font-medium text-sm mdsm:text-lg'>{name}</h1>
                  </article>
                </Link>
              ))}
            </div>
            <section className='rounded-md flex flex-nowrap p-1 mdsm:p-2 '>
              {(query === 'stories' || query === null) && <Stories />}
              {query === 'reels' && <Reels />}
              {query === 'rooms' && <Rooms />}
            </section>
          </div>
        )}

        {allPost.map((data, index) => (
          <Post {...data} key={index} />
        ))}
      </section>
    </section>
  )
}

export default Posts
