import React from 'react'

//import react-router-dom module
// import { Link } from 'react-router-dom'

//import components
import { Input, Comment, Profile } from '../index'

//import data
// import { comments } from '../../utils/constants'

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
    <React.Fragment>
      <div className={`flex flex-col ${isComment && 'p-2'} justify-between  `}>
        {isComment && postDetail && (
          <div className='flex flex-row flex-nowrap justify-between items-center mb-4'>
            <Profile link='/' size />
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
              .slice(0, 1)
              .map(({ comment, postedBy }, index) => (
                <Comment
                  isComment={isComment}
                  {...postedBy}
                  setIsComment={setIsComment}
                  comment={comment}
                  key={index}
                />
              ))
          : comments.map(({ comment, postedBy }, index) => (
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
      </div>
    </React.Fragment>
  )
}

export default Comments
