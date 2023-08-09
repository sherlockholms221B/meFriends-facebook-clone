import React from 'react';
import { useLocation } from 'react-router-dom';

//import context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import components
import { CMPFooter, Feeds, Navbar } from '../../../Components';
import { ProfileHeader, ProfileEditor, FriendList, PhotoGallery } from '..';

//import layout
import MSideBar from '../../../Components/SideBars/MSideBar';
import { getSingleUser } from '../../../Functions/actions/external';

const ProfileOverviewCard = () => {
  const {
    location,
    //eslint-disable-next-line
    externalAction: [state, dispatchCall],
  } = useGlobalContext();

  // const search = useLocation().search;
  // const userId = new URLSearchParams(search).get('fbid');

  // // Fetch single user on initial component mount
  // React.useLayoutEffect(() => {
  //   getSingleUser(dispatchCall, userId);
  // }, [userId, dispatchCall]);

  return (
    <section>
      <Navbar />
      <div
        style={{ paddingTop: `${location.height}px` }}
        className='flex items-center justify-center dark:bg-dark500 relative overflow-auto h-[100vh] w-[100vw] bg-light500'
      >
        <div className=' flex items-strech sm:justify-between w-screen h-full'>
          <MSideBar />
          <div className=' min-w-[260px] w-full  overflow-auto h-full scroll-hidden'>
            <div className='h-fit '>
              <ProfileHeader />
              <section className='relative flex flex-col lap:flex-row lap:gap-4 lap:h-screen overflow-y-auto lap:overflow-hidden justify-center  w-full scroll-hidden'>
                <section className='flex flex-col gap-4 lap:overflow-auto scroll-hidden lap:min-w-[260px] w-full sm:w-520 mx-auto lap:mx-0 px-0.5 pt-0.5 mdsm:pt-4'>
                  <ProfileEditor />
                  <PhotoGallery />
                  <FriendList />
                  <CMPFooter hidden />
                </section>
                <section className='overflow-auto scroll-hidden'>
                  <Feeds isNot={false} />
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverviewCard;
