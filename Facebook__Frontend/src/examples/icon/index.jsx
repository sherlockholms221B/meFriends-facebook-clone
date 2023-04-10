import React from 'react'

//import react custom icons
import { Icon } from '../../utils/Icon'

const SoftIconContainer = ({ icon, text, next, handleClick, ref }) => {
  return (
    <section
      role='button'
      ref={ref && ref}
      onClick={handleClick}
      className={` ${
        next && 'justify-between flex flex-row items-center'
      } group dark:hover:bg-darkComplementry hover:bg-secondaryWhite p-2 w-full rounded-md cursor-pointer`}
    >
      <article className='flex flex-row items-center gap-2 w-fit '>
        <p className='text-xl rounded-full dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          {icon}
        </p>
        <h4 className='text-gray-900 font-medium dark:text-white'>{text}</h4>
      </article>
      {next && (
        <Icon.MdOutlineArrowForwardIos className='font-medium text-2xl dark:text-white' />
      )}
    </section>
  )
}

export default SoftIconContainer
