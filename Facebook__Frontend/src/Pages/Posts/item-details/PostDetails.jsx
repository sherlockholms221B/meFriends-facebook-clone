import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Custom components
import { COMBTN, Comments, THRDot } from '../../../Components';

// Utils and functions
import { logo } from '../../../Assets/exports';
import { Icon } from '../../../utils/Icon';
import { getSinglePost } from '../../../Functions/actions/external';

// Context hooks
import { useGlobalContext } from '../../../Hooks/context/UseContext';
import { LikeBTN } from '../../../Components/Posts/Like';
import CommentInput from '../../../Components/Comments/CommentInput';

//components
import { ZoomControl, PostImageSlider } from '../index';

const PostDetails = () => {
  // Navigate to other pages
  const navigate = useNavigate();

  // State for managing comment section and input value
  const [isComment, setIsComment] = React.useState(true);
  const [viewMore, setViewMore] = React.useState(true);
  const [value, setValue] = React.useState('');

  // Destructure context values from contexts
  const {
    externalAction: [state, dispatchCall],
  } = useGlobalContext();

  // Get postId from the URL
  const search = useLocation().search;
  const _postId = new URLSearchParams(search).get('fbid');

  // Fetch single post on initial component mount
  React.useLayoutEffect(() => {
    getSinglePost(dispatchCall, _postId);
  }, [_postId, dispatchCall]);

  return (
    <>
      {/* Top navigation section */}
      <section className='flex justify-between items-center py-1 pr-2 border-b-2 dark:border-bd500 dark:bg-dark400 '>
        <div className='flex items-center justify-start w-fit gap-3 ml-4 '>
          {/* Close button */}
          <Icon.MdClose
            className='text-3xl dark:text-thdark500'
            onClick={() => navigate(-1)}
          />
          {/* mefriends logo */}
          <img src={logo} alt='src logo' className='w-10 h-10 object-cover' />
        </div>
        {/* Display a line with three dots */}
        <THRDot />
      </section>

      {/* Main content section */}
      <section className='flex flex-col tab:flex-row items-center w-screen h-screen '>
        {/* Left section with image */}
        <section className='w-full bg-black h-full text-white relative flex justify-center'>
          {/* Zoom control for the image */}
          <ZoomControl />
          {/* Display the image */}
          <PostImageSlider {...state[0]} />
        </section>

        {/* Right section with post details, likes, and comments */}
        <div className='w-full tab:w-550 dark:bg-dark400 h-full overflow-y-auto'>
          {/* Likes and comments count */}
          <div className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c]'>
            {/* Display the number of likes */}
            <div className='flex items-center justify-center'>
              <Icon.AiOutlineLike className='mr-1 text-blue-500' />
              <p className='text-sm text-gray-500 '>
                {state[0]?.likes?.length}
              </p>
            </div>
            {/* Display the number of comments */}
            <div className='flex items-center justify-center'>
              <p className='mr-1 text-sm text-gray-500 '>
                {state[0]?.comments?.length}
              </p>
            </div>
          </div>

          {/* Section with Like and Comment buttons */}
          <section
            className={`flex flex-row flex-nowrap justify-around px-2 py-1 items-center mx-2 border-b-2 border-gray-300 dark:border-bd500`}
          >
            {/* Like button */}
            <LikeBTN postId={state[0]?._id} like={state[0]?.likes} />
            {/* Comment button */}
            <COMBTN isComment={isComment} setIsComment={setIsComment} />
          </section>

          {/* Section for displaying comments */}
          <section className='tab:max-h-[73%] max-h-[53%] overflow-auto home_scroll'>
            <Comments
              isComment={isComment}
              setIsComment={setIsComment}
              viewMore={viewMore}
              setViewMore={setViewMore}
              value={value}
              setValue={setValue}
              comments={state[0]?.comments}
            />
          </section>

          {/* Section for the comment input */}
          <section className='flex flex-row flex-nowrap p-3 border-t-2 dark:border-bd500'>
            <CommentInput
              value={value}
              setValue={setValue}
              postId={state[0]?._id}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
