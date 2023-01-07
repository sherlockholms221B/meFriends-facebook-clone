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
          ' hidden medium:block medium:w-400 larg:w-520 font-normal pl-10 py-2  placeholder:text-lg  '
        } ${
          name === 'friends' &&
          'pl-10 py-1.5 pr-4 mid_small:w-[410px] xtra_small:w-260 w-210 placeholder:text-md'
        } ${name === 'comment' && ' w-10/12 px-2 py-1 placeholder:text-sm'}  ${
          name === 'chats' &&
          'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal '
        } outline-none  bg-primary dark:bg-darkComplementry hover:bg-secondaryWhite rounded-full  placeholder:text-gray-600 dark:placeholder:text-heading_dark_gray`}
      />
    </>
  )
}

export default Input
