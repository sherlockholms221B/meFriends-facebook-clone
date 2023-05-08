import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'

//import component
import Groups from '../Groups'
import { Active, Profile } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { Button, Demarcate } from '../RDOMC'

//import context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import data
import { groupsLinks } from '../../utils/links'

//import icons
import { Icon } from '../../utils/Icon'

//import reducer actions
import { SideMenu, shortCuts } from '../../Functions/actions/internal'

// import { barHarder } from '../../utils/useStyles'
import SidelayOut from './components/layout'

//import action types
import { SIDE_MENU, SIDE_SHORT_CUT } from '../../Functions/type'
import Redirect from '../../examples/SoftRedirect'

const MSideBar = () => {
  const {
    location,
    internalAction: [controller, dispatchAction],
  } = useGlobalContext()

  return (
    <SidelayOut
      title='bg-white dark:bg-dark400 pr-2.5 border-r dark:border-bd500 bg-light500'
      padding={location.height}
    >
      <Redirect
        link={`/`}
        customstyles='relative hover:bg-light500 dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1 px-1 my-1.5'
      >
        <Icon.MdHome className='text-3xl dark:text-thdark500 text-black' />
        <Active page='home' current={null} />
      </Redirect>
      <Profile link='/backface/api/profile' size />
      <Demarcate />
      {SideLinks().map(({ icon, title, url }, index) => (
        <Redirect
          key={index + title}
          link={`/${url}?talling=${title}`}
          customstyles='relative  dark:hover:bg-dark300 hover:bg-light500 mt-0.5 mb-0.5 flex flex-row items-center w-full py-1 px-1  rounded-md '
        >
          {icon}

          <Active page={title} current={null} />
        </Redirect>
      ))}
      <Button
        title='relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1 '
        functionCall={() => {
          SideMenu(dispatchAction, { name: SIDE_MENU, value: true })
        }}
      >
        <i className='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2'>
          <Icon.TbGridDots />
        </i>
        <Active page={`menu`} current={null} />
      </Button>
      <Demarcate />
      <Groups isMbar={false} groupsLinks={groupsLinks} />
      <Demarcate />
      <Groups isMbar={false} groupsLinks={groupsLinks} hiddentab />
      <Button
        title='relative lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1'
        functionCall={() => {
          shortCuts(dispatchAction, { name: SIDE_SHORT_CUT, value: true })
        }}
      >
        <i className='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2'>
          <Icon.HiLink />
        </i>
        <Active page='menu' current={null} />
      </Button>
    </SidelayOut>
  )
}

export default MSideBar
