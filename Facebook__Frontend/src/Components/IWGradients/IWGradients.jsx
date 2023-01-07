import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { MdBookmarkAdded, MdRestore } from 'react-icons/md'
import { IoStorefrontSharp } from 'react-icons/io5'
import { BsPlayBtnFill } from 'react-icons/bs'

export const Saved = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient id='saved-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='purple' offset='50%' />
          <stop stopColor='red' offset='100%' />
        </linearGradient>
      </svg>
      <MdBookmarkAdded
        style={{ fill: 'url(#saved-gradient)', fontSize: 20, marginLeft: -2.6 }}
      />
    </div>
  )
}

export const Friends = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient
          id='friends-gradient'
          x1='100%'
          y1='100%'
          x2='0%'
          y2='0%'
        >
          <stop stopColor='rgba(61, 90, 235, 0.885)' offset='10%' />
          <stop stopColor='blue' offset='100%' />
        </linearGradient>
      </svg>
      <FaUserFriends style={{ fill: 'url(#friends-gradient)', fontSize: 18 }} />
    </div>
  )
}

export const MarketPlace = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient
          gradientTransform='rotate(50)'
          id='mark-gradient'
          x1='100%'
          y1='100%'
          x2='0%'
          y2='0%'
          x3='0%'
          y3='0%'
        >
          <stop stopColor='white' offset='10%' />
          <stop stopColor='blue' offset='80%' />
          <stop stopColor='white' offset='10%' />
        </linearGradient>
      </svg>
      <IoStorefrontSharp
        style={{ fill: 'url(#mark-gradient)', fontSize: 16 }}
      />
    </div>
  )
}
export const WatchReels = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient id='watch-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='blue' offset='0%' />
          <stop stopColor='blue' offset='100%' />
        </linearGradient>
      </svg>
      <BsPlayBtnFill
        className='bg-white rounded-sm'
        style={{ fill: 'url(#watch-gradient)', fontSize: 16 }}
      />
    </div>
  )
}
export const MemoriesBtnIcon = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='white' offset='50%' />
          <stop stopColor='rgba(61, 90, 235, 0.885)' offset='100%' />
        </linearGradient>
      </svg>
      <MdRestore
        style={{ fill: 'url(#blue-gradient)', fontSize: 20, marginLeft: -2.6 }}
      />
    </div>
  )
}
