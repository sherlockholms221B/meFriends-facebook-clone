import React from 'react'

const Input = ({ type, value, name, placeholder, handleChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={` ${
          name === 'search' &&
          'md:w-[560px] w-10 h-10 md:h-fit font-normal md:pl-10 md:py-2.5 md:pr-4 placeholder:text-lg placeholder:hidden placeholder:text-gray-600'
        } ${
          name === 'friends' &&
          'pl-10 py-1.5 pr-4 w-[400px] placeholder:text-md'
        } ${name === 'comment' && ' w-10/12 px-2 py-1 placeholder:text-sm'}  ${
          name === 'chats' &&
          'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal placeholder:text-gray-600'
        } outline-none  bg-primary dark:bg-darkComplementry hover:bg-hover rounded-full`}
      />
    </>
  )
}

export default Input
