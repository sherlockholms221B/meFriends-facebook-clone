import React from 'react'

const Input = ({
  type,
  value,
  name,
  placeholder,
  handleChange,
  min,
  required,
  autoFocus,
}) => {
  return (
    <React.Fragment>
      <input
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        type={type}
        required={required}
        autoFocus={autoFocus}
        aria-required={true}
        min={min}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={` ${
          name === 'search' &&
          ' hidden medium:block medium:w-400 larg:w-520 font-normal pl-10 py-2  placeholder:text-lg md_lg:w-[700px] md_lg:-ml-10'
        } ${
          name === 'friends' &&
          'pl-10 py-1.5 pr-4 mid_small:w-[410px] xtra_small:w-260 w-210 placeholder:text-md'
        } ${name === 'menusl' && 'pl-10 py-1.5 w-full placeholder:text-md'} ${
          name === 'comment' && ' w-10/12 px-2 py-1 placeholder:text-sm'
        }  ${
          name === 'chats' &&
          'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal'
        } 

        ${name === 'searchpage' && 'px-2 w-full h-full p-2'}
        
        ${name === 'login' ? 'w-full rounded-md p-2' : 'rounded-full'}
        outline-none  bg-primary dark:bg-darkComplementry hover:bg-secondaryWhite  placeholder:text-gray-600 dark:placeholder:text-heading_dark_gray dark:text-white`}
      />
    </React.Fragment>
  )
}

export default Input
