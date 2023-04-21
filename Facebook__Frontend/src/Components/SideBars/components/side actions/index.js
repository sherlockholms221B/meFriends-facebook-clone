import React from 'react'
// import custom link
import { Active, Paragraph, To } from '../../../RDOMC'

const SlideLinks = ({ page, index }) => {
  return (
    <To
      key={index + page.title}
      link={`${page.url}?talling=${page.title}`}
      title={`group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-4 items-center w-full  rounded-md py-2`}
    >
      {page.icon}
      <Paragraph title='text-md text-gray-800 font-semibold dark:text-thdark500 hidden lg:block tracking-wider'>
        {page.title}
      </Paragraph>
      <Active page={page.title} current={null} />
    </To>
  )
}

export default SlideLinks
