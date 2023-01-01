import React from 'react'
import { useLocation } from 'react-router-dom'

export const Active = ({ queryTerm, homeTerm }) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <>
      {queryTerm === 'home' ? (
        <div
          className={`${
            query === queryTerm
              ? 'animate-pulse transition-all'
              : `${
                  query === homeTerm ? 'animate-pulse transition-all' : 'hidden'
                }`
          }  absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 larg:-left-2 `}
        ></div>
      ) : (
        <div
          className={` ${
            query === queryTerm ? 'animate-pulse transition-all' : 'hidden'
          } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 larg:-left-2 `}
        ></div>
      )}
    </>
  )
}

export const FriendStack = ({ comments }) => {
  return (
    <>
      {comments.map(
        ({ creator, profile: [{ profileImage, createdAt }], comment }, i) => (
          <div className='relative' key={i}>
            <img
              src={profileImage}
              alt='friends'
              className={`absolute rounded-full w-9 h-9 ${
                i === 0 && 'left-0 '
              } ${i === 1 && 'left-8'} ${i === 2 && 'left-16'} ${
                i === 3 && 'left-24'
              } ${i === 4 && 'left-32'} ${i === 5 && 'left-40'} ${
                i === 6 && 'left-48'
              } ${i === 7 && 'left-56'} ${i === 8 && 'left-64'} ${
                i > 8 && 'hidden'
              } ring-2 ring-white
                           `}
            />
          </div>
        )
      )}
    </>
  )
}
