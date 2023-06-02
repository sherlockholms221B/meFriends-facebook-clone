import * as React from 'react';

//to be updateded
import { AiOutlineLike } from 'react-icons/ai';
import { like } from '../../Assets/Audio/index';
import { likePost } from '../../Functions/actions/external';
import { useGlobalContext } from '../../Hooks/context/UseContext';

//
const Like = ({ likes }) => {
  const likeRef = React.useRef(null);
  const {
    location,
    internalAction: [controller, dispatchAction],
    externalAction: [state, dispatchCall],
  } = useGlobalContext();
  return (
    <button
      onClick={(event) => {
        // likePost(dispatchAction, { userId, postId, likeRef });
      }}
      className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Like
      </p>
      <audio src={like} ref={likeRef} />
    </button>
  );
};

export default Like;
