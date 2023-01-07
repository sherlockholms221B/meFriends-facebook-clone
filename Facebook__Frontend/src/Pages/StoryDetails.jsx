import React, { useState } from 'react'

import { COMBTN, Comments, Input, Like, THRDot } from '../Components'
import { profile } from '../Assets/exports'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../utils/Icon'
import { PSTIMG } from '.'
import MenuPage from '../Controllers/MenuPage'
const StoryDetails = () => {
  const navigate = useNavigate()
  const [isComment, setIsComment] = useState(true)
  const [viewMore, setViewMore] = useState(true)
  const [value, setValue] = useState('')

  return <div className=''>StoryDetails</div>
}

const StoryList = () => {
  return <h2 className=''>StoryList</h2>
}

export default MenuPage(StoryDetails, StoryList, 'storyList')
