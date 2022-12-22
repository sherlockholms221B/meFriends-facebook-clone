import { AiFillHome, AiOutlineFieldTime } from 'react-icons/ai'
import { FaUserFriends, FaBookmark, FaFacebookMessenger } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import { GiBackwardTime, GiEarthAmerica } from 'react-icons/gi'
import {
  MdSettings,
  MdPerson,
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
  MdVideoCameraBack,
  MdOutlinePhotoLibrary,
  MdNotifications,
  MdHome,
} from 'react-icons/md'
import { BsBookFill, BsEmojiWink, BsLink45Deg } from 'react-icons/bs'

import { feed_eight, feed_nine, feed_ten } from '../Assets/exports'
import { RiVideoAddFill } from 'react-icons/ri'

export const sideLinks = [
  {
    title: 'Friends',
    icon: <FaUserFriends />,
  },
  {
    title: 'Saved',
    icon: <FaBookmark />,
  },
  {
    title: 'Market place',
    icon: <MdMapsHomeWork />,
  },
  {
    title: 'Watch',
    icon: <MdOutlineOndemandVideo />,
  },
  {
    title: 'Memories',
    icon: <AiOutlineFieldTime />,
  },
]

export const groupsLinks = [
  {
    name: 'The house of dragons',
    img: feed_eight,
  },
  {
    name: 'THE LAUGH HOUSE',
    img: feed_nine,
  },
  {
    name: 'JavaScript Mastery',
    img: feed_ten,
  },
]

export const mNavLink = [
  {
    icon: <MdHome />,
    alert: '+10',
    tip: 'home',
  },
  { icon: <FaUserFriends />, tip: 'Friends', alert: '4' },
  { icon: <FaFacebookMessenger />, alarts: '3', tip: 'messenger' },
  {
    icon: <MdNotifications />,
    alarts: '1',
    tip: 'notification',
  },
  {
    icon: <MdGroups />,
    alarts: '1',
    tip: 'groups',
  },
]

export const feedLinks = [
  { name: 'stories', icon: <BsBookFill /> },
  { name: 'reels', icon: <MdOutlineOndemandVideo /> },
  { name: 'rooms', icon: <RiVideoAddFill /> },
]

export const feedLinksOne = [
  { title: 'Live video', mtitle: 'Live', icon: <MdVideoCameraBack /> },
  { title: 'Photo/Video', mtitle: 'Video', icon: <MdOutlinePhotoLibrary /> },
  { title: 'Feelings/activity', mtitle: 'Feeling', icon: <BsEmojiWink /> },
]
