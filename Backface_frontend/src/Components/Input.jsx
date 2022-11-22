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
          name === 'search' && 'pl-10 py-1.5 pr-4 w-[480px] placeholder:text-md'
        } outline-none shadow-md  bg-[#E3E3E3]  hover:bg-[#D8D5D5] rounded-full   placeholder:text-gray-400 ${
          name === 'comment' && ' w-10/12 px-2 py-1 placeholder:text-sm'
        }`}
      />
    </>
  )
}

export default Input
