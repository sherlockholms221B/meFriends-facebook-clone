import React from 'react'

const Input = ({ type, value, name, placeholder, handleChange }) => {
  return (
    <>
      <input
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={` ${
          name === 'search' &&
          'lg:w-[560px] hidden lg:block md:h-fit font-normal pl-10 py-2.5  placeholder:text-lg '
        } ${
          name === 'friends' &&
          'pl-10 py-1.5 pr-4 w-[400px] placeholder:text-md'
        } ${name === 'comment' && ' w-10/12 px-2 py-1 placeholder:text-sm'}  ${
          name === 'chats' &&
          'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal '
        } outline-none  bg-primary dark:bg-darkComplementry hover:bg-hover rounded-full  placeholder:text-gray-600 dark:placeholder:text-text_heading_dark_gray`}
      />
    </>
  )
}

export default Input
