import * as React from 'react';

//import custom icons
import { Icon } from '../../utils/Icon';

//import higer order commponent
import MegWrapper from '../../Components/MegWrapper';

//import re useable components
import { Input } from '../../Components';

//import Errorboudary
import ErrorBoundary from '../../ErrorBundary';

//import spinner loader
import { HashLoader } from 'react-spinners';

//

import useAuthStore from '../../Store/AuthStore';

import { socketIo } from '../../config';

//lazy loading of components
const MessageRoot = React.lazy(() => {
  return import('./MessageRoot');
});
//
const Messages = () => {
  const { userProfile } = useAuthStore();
  const [searchChats, setSearchChats] = React.useState('');

  React.useEffect(() => {
    socketIo.on('connection', () => {
      console.log('finaly concted to sokect');
    });
    // eslint-disable-next-line
  }, []);
  return (
    <ErrorBoundary
      fallback={
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-black dark:text-white'>
            Oops! there have been an error fetching Messages
          </p>
        </div>
      }
    >
      <React.Suspense
        fallback={
          <div className='w-full h-full'>
            <HashLoader color='blue' />
          </div>
        }
      >
        <MessageRoot
          title='Chats'
          actionButton={[
            {
              icon: (
                <Icon.HiDotsHorizontal
                />
              ),
            },
            {
              icon: <Icon.ImEnlarge />,
            },
            { icon: <Icon.MdVideoCall /> },
            {
              icon: <Icon.BiMessageAltEdit />,
            },
          ]}
        >
          <Input
            type={`text`}
            name={`chats`}
            placeholder={`Search Messenger`}
            handleChange={(e) => setSearchChats(e.target.value)}
            value={searchChats}
          />
          <Icon.MdOutlineSearch className='absolute top-2 left-6 text-gray-600 dark:text-thlight500 text-2xl cursor-pointer ' />
        </MessageRoot>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default MegWrapper(Messages);
