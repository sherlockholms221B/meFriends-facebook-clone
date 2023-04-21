import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'

//import component
import Groups from '../Groups'
import { Active, Profile } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { Button, Demaceta, Paragraph, To } from '../RDOMC'

//import context
import { useGlobalContext } from '../../Context/UseContext'

//import data
import { groupsLinks } from '../../utils/links'

//import icons
import { Icon } from '../../utils/Icon'

//import reducer actions
import { SideMenu, shortCuts } from '../../Actions'

// import { barHarder } from '../../utils/useStyles'
import SidelayOut from './components/layout'

const MSideBar = () => {
  const {
    location,
    value: [controller, dispatch],
  } = useGlobalContext()
  const barContainer =
    'relative hover:bg-inherit xl:hover:bg-light500 xl:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md '
  const roundedIcon =
    ' dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400'
  return (
    <SidelayOut
      title='dark:bg-dark400 pr-3 border-r dark:border-border-bd500'
      padding={location.height}
    >
      <To link={`/`} title={` ${barContainer} py-2`}>
        <Icon.MdHome className='text-3xl text-thdark500' />
        <Active page={`home`} current={null} />
      </To>
      <Profile link={`/backface/api/profile`} size />
      <Demaceta />
      {SideLinks().map((page, i) => (
        <Link
          key={i + page.title}
          to={`/${page.url}?talling=${page.title}`}
          className='relative  xl:dark:hover:bg-dark300 xl:hover:bg-light500 hover:bg-inherit mt-0.5 mb-0.5 flex flex-row items-center w-full py-2 rounded-md'
        >
          {page.icon}

          <Active page={page.title} current={null} />
        </Link>
      ))}
      <Button
        title={` ${barContainer} py-1 `}
        functionCall={() => {
          SideMenu(dispatch, { name: 'menuSideLink', value: true })
        }}
      >
        <Paragraph title={`${roundedIcon} text-lg p-2`}>
          <Icon.TbGridDots />
        </Paragraph>
        <Active page={`menu`} current={null} />
      </Button>
      <Demaceta />
      <Groups
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={false}
        groupsLinks={groupsLinks}
      />
      <Demaceta />
      <Groups
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={false}
        groupsLinks={groupsLinks}
        hiddentab
      />
      <Button
        title={` ${barContainer} py-1 `}
        functionCall={() => {
          shortCuts(dispatch, { name: 'shortCut', value: true })
        }}
      >
        <Paragraph title={`${roundedIcon} text-lg p-2`}>
          <Icon.HiLink />
        </Paragraph>
        <Active page='menu' current={null} />
      </Button>
    </SidelayOut>
  )
}

export default MSideBar
