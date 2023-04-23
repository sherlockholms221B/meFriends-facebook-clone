import React from 'react'
import { Link, useLocation } from 'react-router-dom'
//Random mini component
export const Active = ({ page, current }) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')

  const isactive = () => {
    let template
    if (page === 'home') {
      template = (
        <div
          className={`${
            query === page
              ? 'animate-pulse transition-all'
              : `${
                  query === current ? 'animate-pulse transition-all' : 'hidden'
                }`
          }  absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 lg:-left-3 `}
        />
      )
      return template
    }
    template = (
      <div
        className={` ${
          query === page ? 'animate-pulse transition-all' : 'hidden'
        } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-4 lg:-left-4 `}
      />
    )
    return template
  }
  return isactive()
}

export const FriendStack = ({ comments, isDetails }) => {
  return (
    <React.Fragment>
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
              } ${
                i > 8 && 'hidden'
              } ring-2 ring-white hover:z-10 shadow-md transition-all cursor-pointer`}
            />
          </div>
        )
      )}
    </React.Fragment>
  )
}

export const Demarcate = () => {
  return (
    <section className='border-[0.1px] w-full mt-2 mb-2 border-gray-300 dark:border-bd500' />
  )
}

export const To = ({ children, link, title }) => {
  return (
    <Link to={link} className={`${title && title}`}>
      {children}
    </Link>
  )
}

export const Paragraph = ({ children, link, title }) => {
  return <p className={`${title && title} `}>{children}</p>
}
export const Button = ({ children, functionCall, title }) => {
  return (
    <button className={`${title && title} `} onClick={functionCall}>
      {children}
    </button>
  )
}
