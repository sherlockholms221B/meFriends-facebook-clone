import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { Active } from './index'
import { useGlobalContext } from '../Hooks/context/UseContext'
import { Button, Paragraph } from './RDOMC'
import { sideGroup } from '../Actions'
import { Icon } from '../utils/Icon'

const Groups = ({
  isMbar,
  barHarder,
  barContainer,
  roundedIcon,
  groupsLinks,
  hiddentab,
}) => {
  const {
    dynamicLocation,
    value: [controller, dispatch],
  } = useGlobalContext()
  return (
    <>
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
          title={` ${barContainer} py-1 `}
          functionCall={() => {
            sideGroup(dispatch, { name: 'groupSlideLink', value: true })
          }}
        >
          <Paragraph title={`${roundedIcon} text-lg p-2 `}>
            <Icon.MdGroups />
          </Paragraph>
          {isMbar && <p className={barHarder}>See all groups</p>}
          <Active page={`menu`} current={null} />
        </Button>
      )}
    </>
  )
}

export default Groups
