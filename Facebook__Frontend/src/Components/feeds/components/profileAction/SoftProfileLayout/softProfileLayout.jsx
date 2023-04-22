import React from 'react'
// import PropTypes from 'prop-types'

//import custom icons
import { Icon } from '../../../../../utils/Icon'

//import react module
import { useLocation } from 'react-router-dom'

//impoort styles
import { active, notActive } from '../../../styles'

const SoftProfileLayout = (props) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <section className='dark:bg-dark400 bg-white rounded-md shadow-lg md:order-2  mt-4'>
      <section className='flex_row justify-between px-4 border-b-2 border-gray-300 dark:border-[#3a3b3c] py-1'>
        <h2 className='text-xl font-bold dark:text-thdark500'>Posts</h2>
        <div className=' flex flex-row items-center justify-end gap-2 py-1.5 cursor-pointer '>
          {[
            {
              title: 'Filters',
              icon: (
                <Icon.MdOutlineCompareArrows className='text-2xl dark:text-thdark500' />
              ),
            },
            {
              title: 'Manage posts',
              icon: (
                <Icon.MdSettings className='text-2xl dark:text-thdark500' />
              ),
            },
          ].map(({ title, icon }, index) => (
            <article
              className='flex items-center flex-nowrap gap-2 rounded-md px-3 py-2 dark:bg-dark300'
              key={index}
            >
              {icon}
              <p className='dark:text-thdark500 text-lg  font-semibold'>
                {title}
              </p>
            </article>
          ))}
        </div>
      </section>
      <div className='flex_row justify-around capitalize px-1  '>
        {[
          {
            name: 'list view',
            icon: <Icon.BsList />,
          },
          {
            name: 'grid view',
            icon: <Icon.IoGrid />,
          },
        ].map(({ name, icon }, i) => (
          <button
            to={`?talling=${name}`}
            className={`
                ${
                  query === name
                    ? active()
                    : `${i === 0 && query === null ? active() : notActive()}`
                } 
              `}
            key={i + name}
          >
            <article className='flex flex-row gap-2 items-center '>
              <p className='font-bold text-md mdsm:text-2xl '>{icon} </p>
              <h1 className='font-medium text-sm mdsm:text-lg'>{name}</h1>
            </article>
          </button>
        ))}
      </div>
    </section>
  )
}

SoftProfileLayout.propTypes = {}

export default SoftProfileLayout
