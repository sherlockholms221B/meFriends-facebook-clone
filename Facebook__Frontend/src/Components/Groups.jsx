import React from 'react'
import { Link } from 'react-router-dom'

import { Active } from './index'
import { useGlobalContext } from '../Hooks/context/UseContext'
import { Button, Paragraph } from './RDOMC'
import { sideGroup } from '../Functions/actions/internal'
import { Icon } from '../utils/Icon'

//import action type
import { SIDE_GROUP } from '../Functions/type'

const Groups = ({ isMbar, groupsLinks, hiddentab }) => {
  const {
    dynamicLocation,
    internalAction: [controller, dispatchAction],
  } = useGlobalContext()
  return (
    <React.Fragment>
      {groupsLinks.map(({ img, name }) => (
        <Link
          onMouseOver={(e) => {
            const element = e.target.getBoundingClientRect()
            dynamicLocation({
              left: element.right,
              center: (element.top + element.bottom) / 2,
            })
          }}
          to={`/backface/api/profile`}
          key={name}
          className={` ${
            !isMbar
              ? 'pl-1'
              : 'pl-2 lg:hover:bg-light500  lg:dark:hover:bg-dark300 hover:bg-inherit'
          } relative mb-0.5 flex flex-row gap-4 items-center w-full py-2 rounded-md`}
        >
          <img
            onMouseOver={(e) => e.stopPropagation()}
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          {isMbar && (
            <h3
              onMouseOver={(e) => e.stopPropagation()}
              className={`dark:text-white hidden lg:block text-md font-semibold text-gray-900 `}
            >
              {name}
            </h3>
          )}
        </Link>
      ))}
      {!hiddentab && (
        <Button
          title='relative hover:bg-inherit xl:hover:bg-light500 xl:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1'
          functionCall={() => {
            sideGroup(dispatchAction, { name: SIDE_GROUP, value: true })
          }}
        >
          <Paragraph title='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2 '>
            <Icon.MdGroups />
          </Paragraph>
          {isMbar && (
            <li className=' text-black dark:text-thdark500 tracking-wider font-bold text-lg brightness-95 hidden lg:block'>
              See all groups
            </li>
          )}
          <Active page={`menu`} current={null} />
        </Button>
      )}
    </React.Fragment>
  )
}

export default Groups
