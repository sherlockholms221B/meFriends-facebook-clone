import React from 'react'

//import icon module from custom icons
import { Icon } from '../../utils/Icon'

const SoftPostBg = ({ toggle }) => {
  return (
    <section
      role='button'
      className='w-full flex flex-row justify-between items-center'
    >
      {!toggle && (
        <React.Fragment>
          <article className='cursor-pointer flex items-center justify-center py-1 px-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'>
            <p className='text-white text-xl '>Aa</p>
          </article>
          <Icon.BsEmojiWink className='cursor-pointer text-xl text-gray-500' />
        </React.Fragment>
      )}
    </section>
  )
}

export default SoftPostBg
