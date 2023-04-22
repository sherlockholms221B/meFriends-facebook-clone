import React from 'react'
import { storiesbox } from '../../utils/constants'
import { SoftSwipeLayout } from '../../examples'

const Rooms = () => {
  return (
    <React.Fragment>
      <SoftSwipeLayout data={storiesbox} title='Rooms' />
    </React.Fragment>
  )
}

export default Rooms
