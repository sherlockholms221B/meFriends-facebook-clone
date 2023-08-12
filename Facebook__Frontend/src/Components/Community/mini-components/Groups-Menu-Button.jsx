import React from 'react';
import { Link } from 'react-router-dom';

import { ActiveMarker } from '../../Miscellaneous/module';
import { useGlobalContext } from '../../../Hooks/context/UseContext';
import { sideGroup } from '../../../Functions/actions/internal';
import { Icon } from '../../../utils/Icon';

import { SIDE_GROUP } from '../../../Functions/type';

const GroupLink = ({ img, name, isMbar }) => {
  const dynamicLocation = (e) => {
    const element = e.target.getBoundingClientRect();
    dynamicLocation({
      left: element.right,
      center: (element.top + element.bottom) / 2,
    });
  };

  return (
    <Link
      onMouseOver={dynamicLocation}
      to={`/profile`}
      className={`${
        !isMbar
          ? 'pl-1'
          : 'pl-2 lg:hover:bg-light500  lg:dark:hover:bg-dark300 hover:bg-inherit'
      } relative mb-0.5 flex flex-row gap-2.5 items-center w-full py-1.5 pl-1 rounded-md`}
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
          className={`dark:text-white hidden lg:block text-base font-semibold text-gray-900 `}
        >
          {name}
        </h3>
      )}
    </Link>
  );
};

const GroupsMenuButton = ({ isMbar, groupsLinks, hiddentab }) => {
  const {
    dynamicLocation,
    internalAction: [controller, dispatchAction],
  } = useGlobalContext();

  const handleGroupClick = () => {
    sideGroup(dispatchAction, { name: SIDE_GROUP, value: true });
  };

  return (
    <React.Fragment>
      {groupsLinks.map(({ img, name }) => (
        <GroupLink key={name} img={img} name={name} isMbar={isMbar} />
      ))}
      {!hiddentab && (
        <button
          className={`relative hover:bg-inherit xl:hover:bg-light500 xl:dark:hover:bg-dark300 flex flex-row items-center w-full rounded-md ${
            !hiddentab && 'pl-1'
          }pl-1 gap-2.5`}
          onClick={handleGroupClick}
        >
          <p className='dark:bg-dark300 dark:text-white text-black rounded-full  bg-light400 text-lg p-2 '>
            <Icon.MdGroups />
          </p>
          {isMbar && (
            <li className='text-black dark:text-thdark500 tracking-wider font-bold text-base brightness-95 hidden lg:block'>
              See all groups
            </li>
          )}
          <ActiveMarker page={`menu`} current={null} />
        </button>
      )}
    </React.Fragment>
  );
};

export default GroupsMenuButton;
