import React from 'react';

const CustomInput = ({
  type,
  value,
  name,
  placeholder,
  handleChange,
  min,
  required,
  autoFocus,
}) => {
  const getInputStyles = () => {
    if (name === 'search') {
      return 'hidden md:block md:w-400 lg:w-520 font-normal pl-10 py-2 placeholder:text-lg xlg:w-[700px] xlg:-ml-10';
    }
    if (name === 'friends') {
      return 'pl-10 py-3 pr-4 sm:w-[410px] xs:w-260 w-210 placeholder:text-md';
    }
    if (name === 'menusl') {
      return 'pl-10 py-2 w-full placeholder:text-md';
    }
    if (name === 'comment') {
      return 'w-[80%] mdxs:w-[85%] px-2 py-2 placeholder:text-sm';
    }
    if (name === 'chats') {
      return 'w-11/12 pl-10 py-1.5 pr-4 placeholder:text-md placeholder:font-normal';
    }
    if (name === 'searchpage') {
      return 'px-2 w-full h-full p-2';
    }
    if (name === 'login') {
      return 'w-full rounded-md p-2 focus:ring-2 ring-blue-700 focus:shadow-sm focus:shadow-blue-700 transition-all';
    }
    if (name === 'story') {
      return 'w-full p-2 ring-2 ring-white';
    }
    return 'rounded-full';
  };

  return (
    <input
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      autoSave='off'
      autoComplete='off'
      type={type}
      required={required}
      autoFocus={autoFocus}
      aria-required={true}
      min={min}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className={` ${getInputStyles()} outline-none bg-light500 dark:bg-dark300 hover:bg-light300 placeholder:text-gray-600 dark:placeholder:text-thlight500 dark:text-white dark:focus:bg-dark300`}
    />
  );
};

export default CustomInput;
