import * as React from 'react'

//import moment
import moment from 'moment'

//import react custom icons
import { Icon } from '../../utils/Icon'

//import components
import { Comments, PostOptions, Like, Share, COMBTN, IMG } from '../index'

//import sanity url reader
import { urlFor } from '../../utils/client'
import Redirect from '../../examples/SoftRedirect'

const Post = ({
  topic,
  comments,
  postedBy,
  _createdAt,
  creatorId,
  _id,
  postfile,
}) => {
  const [value, setValue] = React.useState('')
  const [isComment, setIsComment] = React.useState(false)
  const [viewMore, setViewMore] = React.useState(false)
  const [postOption, setPostOption] = React.useState(false)
  const togleMenu = React.useRef(null)

  React.useEffect(() => {
    setViewMore(false)
  }, [isComment])

  return (
    <section className='dark:border dark:border-bd500 dark:bg-dark400 md:order-3 flex flex-col rounded-md bg-white drop-shadow-xl shadow-xl mt-4'>
      <section className=' relative flex flex-row justify-between items-center px-3 py-2'>
        <section className='flex gap-2 items-center'>
          <Redirect
            link='backface/api/profile'
            title='rounded-full cursor-pointer'
          >
            <img
              src={urlFor(postedBy?.profileImage?.asset).url()}
              alt='profile'
              className='object-cover w-11 h-11 rounded-full'
            />
          </Redirect>
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
            onClick={() => {
              setPostOption(!postOption)
            }}
          >
            <Icon.HiDotsHorizontal />
          </article>
          {postOption && <PostOptions />}
        </section>
      </section>
      <article className='text-start px-3 py-2 w-full'>
        <h5 className='text-sm mdsm:text-lg dark:text-white text-gray-700'>
          {topic}
        </h5>
      </article>
      <Redirect link={`/post/details/photo?fbid=${_id}`}>
        <IMG post={postfile} postlength={postfile?.length} />
      </Redirect>
      <section className='flex flex-col '>
        <section className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c]'>
          <article className='flex items-center justify-center'>
            <Icon.AiOutlineLike className='mr-1 text-blue-500' />
            <p className='text-sm text-gray-500 '>234</p>
          </article>
          <article className='flex items-center justify-center'>
            <p className='mr-1 text-sm text-gray-500 '>22 comments</p>
            <p className='text-sm text-gray-500 '>7 share</p>
          </article>
        </section>
        <section
          className={
            ' flex flex-row flex-nowrap justify-around px-2 py-1 items-center ' +
            (isComment && 'mx-2 border-b-2 border-gray-300 dark:border-bd500')
          }
        >
          <Like />
          <COMBTN setIsComment={setIsComment} isComment={isComment} />
          <Share />
        </section>
        <Comments
          postDetail
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
  )
}

export default Post
