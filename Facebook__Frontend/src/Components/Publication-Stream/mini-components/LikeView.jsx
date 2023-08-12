import * as React from 'react';
import { Icon } from '../../../utils/Icon';

//

const LikeView = ({ likes }) => {
  return (
    <article className='flex items-center justify-center'>
      <Icon.AiOutlineLike className='mr-1 text-blue-500' />
      {likes?.length !== 0 && (
        <p className='text-sm text-gray-500 '>{likes?.length}</p>
      )}
    </article>
  );
};

export default LikeView;
