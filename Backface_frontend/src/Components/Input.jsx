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
        className=' outline-none shadow-md w-96 pr-4 py-2 pl-10 bg-[#E3E3E3]  hover:bg-[#D8D5D5] rounded-full capitalize text-md placeholder:italic placeholder:text-slate-400 '
      />
    </>
  )
}

export default Input
