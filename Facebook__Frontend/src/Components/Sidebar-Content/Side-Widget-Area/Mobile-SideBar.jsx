import React from 'react';

//import component
import { GroupsMenuButton } from '../../Community/module';
import { SideLayout } from '../module';
import {
  Divider,
  ActiveMarker,
  UserProfileImage,
} from '../../Miscellaneous/module';

//import context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import data
import { groupsLinks } from '../../../utils/links';
import { SideLinks } from '../../../utils/LWRef';

//import icons
import { Icon } from '../../../utils/Icon';

//import reducer actions
import { SideMenu, shortCuts } from '../../../Functions/actions/internal';

//import action types
import { SIDE_MENU, SIDE_SHORT_CUT } from '../../../Functions/type';
import Redirect from '../../../examples/SoftRedirect';

const MobileSideBar = () => {
  const {
    location,
    internalAction: [controller, dispatchAction],
  } = useGlobalContext();

  return (
    <SideLayout
      title='bg-white dark:bg-dark400 pr-2.5 border-r dark:border-bd500 bg-light500'
      padding={location.height}
    >
      <Redirect
        link={`/`}
        customstyles='relative hover:bg-light500 dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1 px-1 my-1.5'
      >
        <Icon.MdHome className='text-3xl dark:text-thdark500 text-black' />
        <ActiveMarker page='home' current={null} />
      </Redirect>
      <UserProfileImage link='/profile' size />
      <Divider />
      {SideLinks().map(({ icon, title, url }, index) => (
        <Redirect
          key={index + title}
          link={`/${url}?talling=${title}`}
          customstyles='relative  dark:hover:bg-dark300 hover:bg-light500 mt-0.5 mb-0.5 flex flex-row items-center w-full py-1 px-1  rounded-md '
        >
          {icon}

          <ActiveMarker page={title} current={null} />
        </Redirect>
      ))}
      <button
        className='relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1 '
        onClick={() => {
          SideMenu(dispatchAction, { name: SIDE_MENU, value: true });
        }}
      >
        <i className='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2'>
          <Icon.TbGridDots />
        </i>
        <ActiveMarker page={`menu`} current={null} />
      </button>
      <Divider />
      <GroupsMenuButton isMbar={false} groupsLinks={groupsLinks} />
      <Divider />
      <GroupsMenuButton isMbar={false} groupsLinks={groupsLinks} hiddentab />
      <button
        className='relative lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md py-1'
        onClick={() => {
          shortCuts(dispatchAction, { name: SIDE_SHORT_CUT, value: true });
        }}
      >
        <i className='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2'>
          <Icon.HiLink />
        </i>
        <ActiveMarker page='menu' current={null} />
      </button>
    </SideLayout>
  );
};

export default MobileSideBar;
