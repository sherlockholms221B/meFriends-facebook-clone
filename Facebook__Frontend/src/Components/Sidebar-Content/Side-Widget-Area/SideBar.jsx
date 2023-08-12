import * as React from 'react';

//import components
import { SideLinks } from '../../../utils/LWRef';
import { barHarder, barContainer, roundedIcon } from '../../../utils/useStyles';
import { groupsLinks } from '../../../utils/links';
//
import {
  ActiveMarker,
  UserProfileImage,
  Divider,
} from '../../Miscellaneous/module';
import { ContactFooter } from '../../Footer-Section/module';
import { GroupsMenuButton } from '../../Community/module';
import { SideLayout, SlideLinks } from '../module';
import Redirect from '../../../examples/SoftRedirect';

//import custom icon
import { Icon } from '../../../utils/Icon';

//import global context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import reducer actions
import { SideMenu, shortCuts } from '../../../Functions/actions/internal';
import { SIDE_MENU, SIDE_SHORT_CUT } from '../../../Functions/type';
//
const SideBar = () => {
  const {
    internalAction: [controller, dispatchAction],
  } = useGlobalContext();

  // const { menuSideLink, groupSlideLink, shortCut } = controller
  return (
    <SideLayout title='lg:w-[300px] dark:bg-dark400 dark:lg:bg-dark500'>
      <Redirect
        link='/'
        customstyles=' group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-2.5 items-center w-full rounded-md py-1 pl-1 mt-2'
      >
        <Icon.MdHome className='text-3xl text-blue-700' />
        <li className=' text-black dark:text-thdark500 tracking-wider font-bold text-base brightness-95 hidden lg:block'>
          Home
        </li>
        <ActiveMarker page='home' current={null} />
      </Redirect>
      <Redirect link='/profile' customstyles='w-full'>
        <UserProfileImage
          hidden
          size
          customstyle='py-1 pl-1  group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-2.5 items-center w-full rounded-md '
        />
      </Redirect>
      <Divider />
      {SideLinks().map((page, i) => (
        <SlideLinks page={page} index={i} key={page.title + i} />
      ))}
      <button
        className='group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-2.5 items-center w-full rounded-md py-1 pl-1 '
        onClick={() => {
          SideMenu(dispatchAction, { name: SIDE_MENU, value: true });
        }}
      >
        <i className='group-hover:brightness-150 dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-base p-2'>
          <Icon.TbGridDots />
        </i>
        <li className=' text-black dark:text-thdark500 tracking-wider font-bold text-base brightness-95 hidden lg:block'>
          See all
        </li>
        <ActiveMarker page={`menu`} current={null} />
      </button>
      <Divider />
      <GroupsMenuButton
        barHarder={barHarder}
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={true}
        groupsLinks={groupsLinks}
      />
      <Divider />
      <GroupsMenuButton
        barHarder={barHarder}
        barContainer={barContainer}
        roundedIcon={roundedIcon}
        isMbar={true}
        groupsLinks={groupsLinks}
        hiddentab
      />
      <button
        className='group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-2.5 items-center w-full rounded-md py-1 pl-1 '
        onClick={() => {
          shortCuts(dispatchAction, { name: SIDE_SHORT_CUT, value: true });
        }}
      >
        <i className='group-hover:brightness-150 dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-base p-2'>
          <Icon.HiLink />
        </i>
        <li className=' text-black dark:text-thdark500 tracking-wider font-bold text-base brightness-95 hidden lg:block'>
          Shortcuts
        </li>
        <ActiveMarker page={`menu`} />
      </button>
      <ContactFooter />
    </SideLayout>
  );
};

export default SideBar;
