import React from 'react'

//import components
import { Active, Footer, Profile } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { barHarder, barContainer, roundedIcon } from '../../utils/useStyles'
import { groupsLinks } from '../../utils/links'
import { Button, Demarcate, Paragraph, To } from '../RDOMC'
import Groups from '../Groups'
import SidelayOut from './components/layout'
import SlideLinks from './components/side actions'
import Redirect from '../../examples/SoftRedirect'

//import custom icon
import { Icon } from '../../utils/Icon'

//import global context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import reducer actions
import { SideMenu, shortCuts } from '../../Functions/actions/internal'
const SideBar = () => {
  const {
    internalAction: [controller, dispatchAction],
  } = useGlobalContext()

  // const { menuSideLink, groupSlideLink, shortCut } = controller
  return (
    <SidelayOut title='lg:w-[300px] dark:bg-dark400 dark:lg:bg-dark500'>
      <Redirect
        link='/'
        customstyles=' group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-4 items-center w-full  rounded-md   py-2 mt-2'
      >
        <Icon.MdHome className='text-3xl text-blue-700' />
        <Paragraph title={barHarder}>Home</Paragraph>
        <Active page='home' current={null} />
      </Redirect>
      <Redirect link='/backface/api/profile' customstyles='w-full'>
        <Profile hidden size customstyle={' py-2 ' + barContainer} />
      </Redirect>
      <Demarcate />
      {SideLinks().map((page, i) => (
        <SlideLinks page={page} index={i} key={page.title + i} />
      ))}
      <Button
        title={` ${barContainer} py-1 `}
        functionCall={() => {
          SideMenu(dispatchAction, { name: 'menuSideLink', value: true })
        }}
      >
        <Paragraph title={`${roundedIcon} text-lg p-2`}>
          <Icon.TbGridDots />
        </Paragraph>
        <Paragraph title={`${barHarder}`}>See all</Paragraph>
        <Active page={`menu`} current={null} />
      </Button>
      <Demarcate />
      <Groups
        barHarder={barHarder}
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={true}
        groupsLinks={groupsLinks}
      />
      <Demarcate />
      <Groups
        barHarder={barHarder}
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={true}
        groupsLinks={groupsLinks}
        hiddentab
      />
      <Button
        title={` ${barContainer} py-1 `}
        functionCall={() => {
          shortCuts(dispatchAction, { name: 'shortCut', value: true })
        }}
      >
        <Paragraph title={`${roundedIcon} text-lg p-2`}>
          <Icon.HiLink />
        </Paragraph>
        <Paragraph title={barHarder}>Shortcuts</Paragraph>
        <Active page={`menu`} />
      </Button>
      <Footer />
    </SidelayOut>
  )
}

export default SideBar
