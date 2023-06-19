import * as React from 'react';

//to be updateded
import { AiOutlineLike } from 'react-icons/ai';
import { likePost } from '../../Functions/actions/external';
import { useGlobalContext } from '../../Hooks/context/UseContext';
import useAuthStore from '../../Store/AuthStore';
import { Icon } from '../../utils/Icon';

//

export const LikeVW = (rtnlikes) => {
  const [likes, setlikes] = React.useState([]);

  // React.useEffect(() => {
  //   console.log(rtnlikes.length);
  // }, [rtnlikes]);

  return (
    <>
      {rtnlikes.length !== 0 && (
        <article className='flex items-center justify-center'>
          <Icon.AiOutlineLike className='mr-1 text-blue-500' />
          <p className='text-sm text-gray-500 '>{rtnlikes.length}</p>
        </article>
      )}
    </>
  );
};

export const LikeBTN = ({ likes, postId }) => {
  const { userProfile } = useAuthStore();
  //
  const {
    internalAction: [controller, dispatchAction],
    externalAction: [state, dispatchCall],
  } = useGlobalContext();
  //
  React.useEffect(() => {}, []);
  //
  return (
    <button
      onClick={(event) => {
        likePost(dispatchCall, { userId: userProfile?._id, postId });
      }}
      className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Like
      </p>
    </button>
  );
};