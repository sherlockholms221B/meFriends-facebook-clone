import React from 'react'

//import react-router-dom module
// import { Link } from 'react-router-dom'

//import components
import { Input, Comment, Profile } from '../index'


const Comments = ({
  comments,
  postDetail,
  isComment,
  setIsComment,
  setViewMore,
  viewMore,
  value,
  setValue,
}) => {
  return (
    <section
      className={' flex flex-col justify-between ' + (isComment && 'p-2')}
    >
      {isComment && postDetail && (
        <div className='flex flex-row flex-nowrap justify-between items-center mb-4'>
          <Profile link='/backface/api/profile' size />
          <Input
            handleChange={(e) => setValue(e.target.value)}
            value={value}
            type={`text`}
            name={`comment`}
            placeholder={`Write a comment`}
          />
        </div>
      )}
      {/*  configure comments */}
      {!viewMore
        ? comments
            ?.slice(0, 1)
            ?.map(({ comment, postedBy }, index) => (
              <Comment
                isComment={isComment}
                {...postedBy}
                setIsComment={setIsComment}
                comment={comment}
                key={index}
              />
            ))
        : comments?.map(({ comment, postedBy }, index) => (
            <Comment
              isComment={isComment}
              setIsComment={setIsComment}
              comment={comment}
              {...postedBy}
              key={index}
            />
          ))}
      {isComment && !viewMore && (
        <button
          onClick={() => setViewMore(!viewMore)}
          className='text-sm text-gray-500 dark:text-thlight500 font-medium self-start ml-14 mt-2 animate-pulse'
        >
          see more
        </button>
      )}
    </section>
  )
}

export default Comments
