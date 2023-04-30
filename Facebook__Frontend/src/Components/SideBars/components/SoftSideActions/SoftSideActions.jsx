import React from 'react'
// import custom link
import { Active } from '../../../RDOMC'
import Redirect from '../../../../examples/SoftRedirect'

const SlideLinks = ({ page, index }) => {
  return (
    <Redirect
      key={index + page.title}
      link={`${page.url}?talling=${page.title}`}
      customstyles='group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-4 items-center w-full  rounded-md py-2'
    >
      {page.icon}
      <p className='text-md text-gray-800 font-semibold dark:text-thdark500 hidden lg:block tracking-wider'>
        {page.title}
      </p>
      <Active page={page.title} current={null} />
    </Redirect>
  )
}

export default SlideLinks
