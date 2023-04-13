import React from 'react'

//import react-router-dom module
// import { Link } from 'react-router-dom'

//import components
import { Input, Comment, Profile } from '../index'

//import data
import { comments } from '../../utils/constants'

const Comments = ({
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
      <div className={`flex flex-col ${isComment && 'p-2'} justify-between `}>
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
              .map(
                (
                  { creator, profile: [{ profileImage, createdAt }], comment },
                  index
                ) => (
                  <Comment
                    isComment={isComment}
                    setIsComment={setIsComment}
                    createdAt={createdAt}
                    creator={creator}
                    profileImage={profileImage}
                    comment={comment}
                    key={`${creator + index}`}
                  />
                )
              )
          : comments.map(
              (
                { creator, profile: [{ profileImage, createdAt }], comment },
                index
              ) => (
                <Comment
                  isComment={isComment}
                  setIsComment={setIsComment}
                  createdAt={createdAt}
                  creator={creator}
                  profileImage={profileImage}
                  comment={comment}
                  key={`${creator + index}`}
                />
              )
            )}
        {isComment && (
          <React.Fragment>
            {!viewMore && (
              <button
                onClick={() => setViewMore(!viewMore)}
                className='text-sm text-gray-500 dark:text-heading_dark_gray font-medium self-start ml-14 mt-2 animate-pulse'
              >
                see more
              </button>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
}

export default Comments
