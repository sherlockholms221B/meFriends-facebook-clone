import React from 'react'

//import components
import { Active, Footer, Profile } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { barHarder, barContainer, roundedIcon } from '../../utils/useStyles'
import { groupsLinks } from '../../utils/links'
import { Button, Demaceta, Paragraph, To } from '../RDOMC'
import Groups from '../Groups'
import SidelayOut from './components/layout'
import SlideLinks from './components/side actions'

//import custom icon
import { Icon } from '../../utils/Icon'

//import global context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import reducer actions
import { SideMenu, shortCuts } from '../../Actions'
const SideBar = () => {
  const {
    value: [controller, dispatch],
  } = useGlobalContext()

  // const { menuSideLink, groupSlideLink, shortCut } = controller
  return (
    <SidelayOut title='lg:w-[300px] dark:bg-dark400 dark:lg:bg-dark500'>
      <To
        link='/'
        title=' group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-4 items-center w-full  rounded-md   py-2 mt-2'
      >
        <Icon.MdHome className='text-3xl text-blue-700' />
        <Paragraph title={barHarder}>Home</Paragraph>
        <Active page='home' current={null} />
      </To>
      <Profile
        link='/backface/api/profile'
        hidden
        size
        style={` py-2 ${barContainer}`}
      />
      <Demaceta />
      {SideLinks().map((page, i) => (
        <SlideLinks page={page} index={i} key={page.title + i} />
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
        <Paragraph title={`${barHarder}`}>See all</Paragraph>
        <Active page={`menu`} current={null} />
      </Button>
      <Demaceta />
      <Groups
        barHarder={barHarder}
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={true}
        groupsLinks={groupsLinks}
      />
      <Demaceta />
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
          shortCuts(dispatch, { name: 'shortCut', value: true })
        }}
      >
        <Paragraph title={`${roundedIcon} text-lg p-2`}>
          <Icon.HiLink />
        </Paragraph>
        <Paragraph title={`${barHarder}`}>Shortcuts</Paragraph>
        <Active page={`menu`} />
      </Button>
      <Footer />
    </SidelayOut>
  )
}

export default SideBar
