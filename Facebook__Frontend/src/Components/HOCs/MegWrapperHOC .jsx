import React from 'react';
import { useGlobalContext } from '../../Hooks/context/UseContext';

const MegWrapperHOC = (WrappedComponent) => {
  const MegWrapper = () => {
    const {
      createPostState,
      addToYourState,
      postAudienceState,
      tagPeopleState,
      notificationState,
      messageState,
      profileState,
      settingsState,
      displayState,
      feedbackState,
      supportState,
    } = useGlobalContext();

    const shouldRenderOverlay =
      createPostState ||
      addToYourState ||
      postAudienceState ||
      feedbackState ||
      tagPeopleState;

    const shouldRenderSidebar =
      messageState ||
      notificationState ||
      profileState ||
      settingsState ||
      displayState ||
      supportState;

    return (
      <React.Fragment>
        {shouldRenderOverlay && (
          <section className='flex justify-center items-center absolute top-0 backdrop-blur-sm right-0 z-30 h-screen w-screen dark:backdrop-filter dark:backdrop-saturate-100 dark:backdrop-brightness-50 dark:backdrop-opacity-100 dark:backdrop-contrast-100 dark:backdrop-blur-0'>
            <section className='mx-auto w-full sm:w-520 xlg:w-[700px] lap:mx-0 h-max bg-white dark:bg-dark400 rounded-lg shadow-black overflow-hidden'>
              <WrappedComponent />
            </section>
          </section>
        )}
        {shouldRenderSidebar && (
          <section className='absolute bottom-0 sm:bottom-auto sm:top-10 sm:right-10 z-20 sm:rounded-lg rounded-b-lg w-full sm:w-[380px] bg-white dark:bg-dark400 shadow-lg border-2 dark:border-bd500 sm:border-0'>
            <section
              className={`${
                profileState
                  ? 'min-w-210 w-full sm:w-[380px] h-fit rounded-lg p-4 overflow-hidden'
                  : 'min-w-210 w-full sm:w-[380px] h-fit rounded-lg overflow-hidden'
              }`}
            >
              <WrappedComponent />
            </section>
          </section>
        )}
      </React.Fragment>
    );
  };

  return MegWrapper;
};

export default MegWrapperHOC;
