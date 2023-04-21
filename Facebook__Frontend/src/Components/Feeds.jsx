import * as React from 'react'

//import react router module
import { Link, useLocation } from 'react-router-dom'

//import context
import { useGlobalContext } from '../Context/UseContext'

//import data
import { feedLinks, feedLinksOne } from '../utils/links'
import { posts } from '../utils/constants'

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
