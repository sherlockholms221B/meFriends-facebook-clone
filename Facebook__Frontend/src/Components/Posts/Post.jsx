import * as React from 'react'

//import react-router dom module router
import { Link } from 'react-router-dom'

//import moment
import moment from 'moment'

//import react custom icons
import { Icon } from '../../utils/Icon'
import { AiOutlineLike } from 'react-icons/ai'

//import components
import { Comments, PostOptions, Like, Share, COMBTN, PostAIR } from '../index'
import IMG from './IMG'

//import context
import { useGlobalContext } from '../../Context/UseContext'
import { urlFor } from '../../utils/client'
import { To } from '../RDOMC'

const Post = ({ topic, comments, image, postedBy, _createdAt }) => {
  const [value, setValue] = React.useState('')
  const [isComment, setIsComment] = React.useState(false)
  const [viewMore, setViewMore] = React.useState(false)
  const [postOption, setPostOption] = React.useState(false)
  const togleMenu = React.useRef(null)
  const { dynamicLocation } = useGlobalContext()

  React.useEffect(() => {
    setViewMore(false)
  }, [isComment])

  const postLocation = () => {
    setPostOption(!postOption)
    const locationDetails = togleMenu.current.getClientRects()
    const top = locationDetails.top
    const center = (locationDetails.left + locationDetails.right) / 2
    dynamicLocation({ top, center })
  }

  // set up re-useable styles
  const PostBtn1 =
    'flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
  const PostBtnI = 'text-xl font-bold text-gray-500 mr-1  dark:text-thlight500'

  const PostBtnT =
    'hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'
  //

  return (
    <React.Fragment>
      <section className='dark:border dark:border-bd500 dark:bg-dark400 md:order-3 flex flex-col rounded-md bg-white drop-shadow-xl shadow-xl mt-4 '>
        <section className=' relative flex flex-row justify-between items-center px-3 py-2'>
          <section className='flex gap-2 items-center'>
            <To
              link={`/backface/api/profile`}
              title='rounded-full cursor-pointer'
            >
              <img
                src={urlFor(postedBy?.profileImage?.asset).url()}
                alt='profile'
                className='object-cover w-11 h-11 rounded-full'
              />
            </To>
            <div className='flex flex-col'>
              <h2 className='capitalize text-md dark:text-thlight500 text-black-200 tracking-wide mb-1 cursor-pointer'>
                <b>{postedBy?.userName}</b>
              </h2>
              <article className='flex flex-row flex-nowrap items-center gap-2'>
                <p className='text-xs mdsm:text-sm text-gray-500 '>
                  {moment(_createdAt).fromNow()}
                </p>
                <span className='text-gray-500 text-md font-medium'>
                  {/* <PostAIR state={}/> */}
                </span>
              </article>
            </div>
          </section>
          <section className='bg-inherit'>
            <article
              className='text-2xl font-semibold text-gray-500 p-2 rounded-full dark:hover:bg-dark300 hover:bg-light500 '
              ref={togleMenu}
              onClick={postLocation}
            >
              <Icon.HiDotsHorizontal />
            </article>
            {postOption && <PostOptions />}
          </section>
        </section>
        <article className='flex items-start-center justify-start px-3 py-2'>
          <h5 className='text-sm mdsm:text-lg dark:text-white text-gray-700'>
            {topic}
          </h5>
        </article>
        <To
          link={`/post/details/photo?fbid=${`544657569769743763856776056734384697367458468744835`}`}
        >
          <IMG post={image} postlength={image?.length} />
        </To>
        <section className='flex flex-col '>
          <section className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c]'>
            <article className='flex items-center justify-center'>
              <Icon.AiOutlineLike className='mr-1 blue_text' />
              <p className='text-sm text-gray-500 '>234</p>
            </article>
            <article className='flex items-center justify-center'>
              <p className='mr-1 text-sm text-gray-500 '>22 comments</p>
              <p className='text-sm text-gray-500 '>7 share</p>
            </article>
          </section>
          <section
            className={`flex flex-row flex-nowrap justify-around px-2 py-1 items-center ${
              isComment && 'mx-2 border-b-2 border-gray-300 dark:border-bd500'
            }`}
          >
            <Like PostBtn1={PostBtn1} PostBtnI={PostBtnI} PostBtnT={PostBtnT} />
            <COMBTN
              setIsComment={setIsComment}
              isComment={isComment}
              PostBtn1={PostBtn1}
              PostBtnI={PostBtnI}
              PostBtnT={PostBtnT}
            />
            <Share
              PostBtn1={PostBtn1}
              PostBtnI={PostBtnI}
              PostBtnT={PostBtnT}
            />
          </section>

          <Comments
            postDetail={true}
            isComment={isComment}
            setIsComment={setIsComment}
            viewMore={viewMore}
            setViewMore={setViewMore}
            value={value}
            setValue={setValue}
            comments={comments}
          />
        </section>
      </section>
    </React.Fragment>
  )
}

export default Post
