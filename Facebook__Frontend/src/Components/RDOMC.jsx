import React from 'react'
import { useLocation } from 'react-router-dom'
//Random mini component
export const Active = ({ queryTerm, term }) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <>
      {queryTerm === 'home' ? (
        <div
          className={`${
            query === queryTerm
              ? 'animate-pulse transition-all'
              : `${query === term ? 'animate-pulse transition-all' : 'hidden'}`
          }  absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 larg:-left-3 `}
        ></div>
      ) : (
        <div
          className={` ${
            query === queryTerm ? 'animate-pulse transition-all' : 'hidden'
          } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 larg:-left-4 `}
        ></div>
      )}
    </>
  )
}

export const FriendStack = ({ comments, isDetails }) => {
  return (
    <>
      {comments.map(
        ({ creator, profile: [{ profileImage, createdAt }], comment }, i) => (
          <div className='relative' key={i}>
            <img
              src={profileImage}
              alt='friends'
              className={`${
                !isDetails ? 'absolute w-9 h-9' : 'w-7 h-7'
              } rounded-full  ${i === 0 && 'left-0 '} ${i === 1 && 'left-8'} ${
                i === 2 && 'left-16'
              } ${i === 3 && 'left-24'} ${i === 4 && 'left-32'} ${
                i === 5 && 'left-40'
              } ${i === 6 && 'left-48'} ${i === 7 && 'left-56'} ${
                i === 8 && 'left-64'
              } ${i > 8 && 'hidden'} ring-2 ring-white
                           `}
            />
          </div>
        )
      )}
    </>
  )
}

export const BorderLine = () => {
  return (
    <div className='border-[0.1px] w-full mt-2 mb-2 border-gray-300 dark:border-borderDark' />
  )
}
