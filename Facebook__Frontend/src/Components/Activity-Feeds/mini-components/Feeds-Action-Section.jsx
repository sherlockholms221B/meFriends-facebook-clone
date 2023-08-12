import React from 'react';
// import PropTypes from 'prop-types'

//import authstore
import useAuthStore from '../../../Store/AuthStore';

//import components
import Profile from '../../Miscellaneous/UserProfileImage';

//import context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

//import static links
import { feedLinksOne } from '../../../utils/links';

//import feeds styles
import { actionContainer } from '../styles';

const FeedsActionSection = () => {
  const {
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
  } = useGlobalContext();
  const { userProfile } = useAuthStore();

  const handleCreatePostClick = () => {
    setMessageState(false);
    setNotificationState(false);
    setProfileState(false);
    setCreatePostState(true);
  };

  return (
    <section className='dark:bg-dark400 bg-white border dark:border-bd500 rounded-md shadow-lg transition-shadow md:order-2 pt-1 mdsm:pt-4 px-4'>
      <section className='flex flex-row justify-between items-center w-full gap-2 xs:py-1 mdsm:py-4'>
        <Profile />
        <article
          className='rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors'
          onClick={handleCreatePostClick}
        >
          <strong className='text-xs mdxs:text-sm mdsm:text-base font-normal dark:text-thlight500 text-zinc-600'>
            What's on your mind,{' '}
            <span className='capitalize'>{userProfile.userName}</span>
          </strong>
        </article>
      </section>
      <hr className='dark:border-bd500' />
      <section className='flex flex-row flex-nowrap items-center justify-around w-full px-1 mdsm:px-2 py-0.5 '>
        {feedLinksOne.map(({ icon, title, mtitle }, i) => (
          <figure
            key={i}
            className={
              actionContainer() +
              ' px-2 mdxs:px-4 mdsm:px-6 py-0.5 flex flex-row items-center justify-center gap-2 cursor-pointer transition-colors w-full '
            }
          >
            {icon}
            <figcaption>
              <p className='hidden mdsm:flex tracking-wider text-base font-normal dark:text-thlight500 text-zinc-600 flex-nowrap'>
                {title}
              </p>
              <p className='text-md mdsm:hidden text-base font-normal dark:text-thlight500 text-zinc-600'>
                {mtitle}
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default FeedsActionSection;
