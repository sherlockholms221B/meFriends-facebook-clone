import * as React from 'react';

//to be updateded
import { AiOutlineLike } from 'react-icons/ai';
import { likePost } from '../../Functions/actions/external';
import { useGlobalContext } from '../../Hooks/context/UseContext';
import useAuthStore from '../../Store/AuthStore';
import { Icon } from '../../utils/Icon';

//

export const LikeVW = ({ likes }) => {
  return (
    <article className='flex items-center justify-center'>
      <Icon.AiOutlineLike className='mr-1 text-blue-500' />
      {likes?.length !== 0 && (
        <p className='text-sm text-gray-500 '>{likes?.length}</p>
      )}
    </article>
  );
};

export const LikeBTN = ({ like, postId }) => {
  const { userProfile } = useAuthStore();
  const [color, setColor] = React.useState('');
  //
  const {
    externalAction: [state, dispatchCall],
  } = useGlobalContext();
  //

  React.useEffect(() => {
    // Find the specific post in the state by postId
    const post = state.find((post) => post._id === postId);

    // Check if the post exists and if the user has liked it
    if (post?.likes.some((like) => like._ref === userProfile?._id)) {
      setColor('text-blue-500'); // User has liked the post, change color to blue
    } else {
      setColor('dark:text-thlight500 text-gray-500'); // User hasn't liked the post, remove the color
    }
  }, [state, postId, userProfile]);

  return (
    <button
      onClick={() => {
        likePost(dispatchCall, { userId: userProfile?._id, postId });
      }}
      className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className={`text-xl font-bold mr-1  ${color}`} />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Like
      </p>
    </button>
  );
};