import * as React from 'react'

import { storiesbox } from '../../utils/constants'

import { SoftSwipeLayout } from '../../examples/index.js'

const Stories = () => {
  return (
    <React.Fragment>
      <SoftSwipeLayout data={storiesbox} title='story' />
    </React.Fragment>
  )
}

export default Stories
