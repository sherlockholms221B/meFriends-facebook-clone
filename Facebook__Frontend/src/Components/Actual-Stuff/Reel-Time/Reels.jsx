import React from 'react';

import { storiesbox } from '../../../utils/constants';
import { SoftSwipeLayout } from '../../../examples';

const Reels = () => {
  return (
    <React.Fragment>
      <SoftSwipeLayout data={storiesbox} title='Real' />
    </React.Fragment>
  );
};

export default Reels;
