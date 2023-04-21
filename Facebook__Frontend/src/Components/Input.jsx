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
          ' hidden md:block md:w-400 lg:w-520 font-normal pl-10 py-2  placeholder:text-lg xlg:w-[700px] xlg:-ml-10'
        } ${
          name === 'friends' &&
          'pl-10 py-1.5 pr-4 sm:w-[410px] xs:w-260 w-210 placeholder:text-md'
        } ${name === 'menusl' && 'pl-10 py-2 w-full placeholder:text-md'} ${
          name === 'comment' &&
          'w-[88%] mdxs:w-[93%] px-2 py-1 placeholder:text-sm'
        }  ${
          name === 'chats' &&
          'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal'
        } 

        ${name === 'searchpage' && 'px-2 w-full h-full p-2'}
        
        ${
          name === 'login'
            ? 'w-full rounded-md p-2 focus:ring-2 ring-blue-700 focus:shadow-sm focus:shadow-blue-700 transition-all'
            : 'rounded-full'
        }

        ${name === 'story' && 'w-full p-2 ring-2 ring-white'}
        outline-none  bg-light500 dark:bg-dark300 hover:bg-light300  placeholder:text-gray-600 dark:placeholder:text-thlight500 dark:text-white dark:focus:bg-dark300`}
      />
    </React.Fragment>
  )
}

export default Input
