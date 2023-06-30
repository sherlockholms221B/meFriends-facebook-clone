import * as React from 'react';

//import custom icons
import { Icon } from '../../utils/Icon';

//import higer order commponent
import MegWrapper from '../../Components/MegWrapper';

//import re useable components
import { Input } from '../../Components';

//import Errorboudary
import ErrorBoundary from '../../ErrorBundary';

//

import useAuthStore from '../../Store/AuthStore';

//lazy loading of components
const MessageRoot = React.lazy(() => {
  return import('./MessageRoot');
});
//
const Messages = () => {
  const { userProfile } = useAuthStore();
  const [searchChats, setSearchChats] = React.useState('');

  // React.useEffect(() => {
  //   socket.on('connection', (sock) => {
  //     socket.emit('setup', { _id: 'rsdhgsldhgp;ej45u3-583u-repryhesdj' });
  //   });
  // }, []);

  // React.useEffect(() => {
  //   socket.on('connection', () => {
  //     console.log('finaly concted to sokect');
  //   });

  //   socket.emit('setup', userProfile);
  //   // socket.on('typing', () => setIsTyping(true));
  //   // socket.on('stop typing', () => setIsTyping(false));

  //   // eslint-disable-next-line
  // }, []);

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
          <div className=''>
            <h4 className=''>loading...</h4>
          </div>
        }
      >
        <MessageRoot
          title='Chats'
          actionButton={[
            {
              icon: (
                <Icon.HiDotsHorizontal
                  onClick={() => {
                    // socket.emit('join chat', 'gsogkhsndlglsdf;sdjg445etefhdk')
                  }}
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
