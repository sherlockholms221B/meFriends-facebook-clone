import React from 'react'
import { useLocation } from 'react-router-dom'

const Active = ({ queryTerm, homeTerm }) => {
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
          }  absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 xl:-left-2 `}
        ></div>
      ) : (
        <div
          className={` ${
            query === queryTerm ? 'animate-pulse transition-all' : 'hidden'
          } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 xl:-left-2 `}
        ></div>
      )}
    </>
  )
}

export default Active
