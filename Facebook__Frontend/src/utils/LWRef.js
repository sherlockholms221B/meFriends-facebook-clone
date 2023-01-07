import { useRef } from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsEmojiWink } from 'react-icons/bs'
import {
  FaBookmark,
  FaFacebookMessenger,
  FaMoon,
  FaQuestionCircle,
  FaUserFriends,
  FaUserTag,
} from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiLockClosed } from 'react-icons/hi'
import {
  MdFlag,
  MdMapsHomeWork,
  MdNotifications,
  MdOutlineLocationOn,
  MdOutlineOndemandVideo,
  MdOutlinePhotoLibrary,
  MdPerson,
  MdSettings,
  MdSettingsSuggest,
  MdVideoCall,
} from 'react-icons/md'
import { RiFeedbackFill, RiLogoutBoxRFill } from 'react-icons/ri'
import {
  Saved,
  Friends,
  MarketPlace,
  WatchReels,
  MemoriesBtnIcon,
} from '../Components/IWGradients/IWGradients'
export const MakePostLinkOne = () => {
  const picture = useRef(null)
  const tag = useRef(null)
  const feelings = useRef(null)
  const location = useRef(null)
  const flag = useRef(null)

  const link = [
    {
      icon: <MdOutlinePhotoLibrary />,
      ref: picture,
      tip: 'photos/video',
    },
    { icon: <FaUserTag />, ref: tag, tip: 'tag poeple' },
    {
      icon: <BsEmojiWink />,
      ref: feelings,
      tip: 'feelings/activity',
    },
    {
      icon: <MdOutlineLocationOn />,
      ref: location,
      tip: 'check in',
    },
    {
      icon: <MdFlag />,
      ref: flag,
      tip: 'life event',
    },
  ]
  return link
}

export const MakePostLinkTwo = () => {
  const links = [
    { icon: <MdOutlinePhotoLibrary />, title: 'Photo/Video' },
    { icon: <MdPerson />, title: 'Tag people' },
    { icon: <BsEmojiWink />, title: 'Feeelings/activity' },
    {
      icon: <MdOutlineLocationOn />,
      title: 'Check in',
    },
    {
      icon: <MdFlag />,
      title: 'Life event',
    },
    {
      icon: <MdVideoCall />,
      title: 'Live Video',
    },
  ]
  return links
}

export const GoPLink = () => {
  const settings = useRef(null)
  const support = useRef(null)
  const feedback = useRef(null)
  const logOut = useRef(null)
  const display = useRef(null)

  const link = [
    {
      icon: <MdSettingsSuggest />,
      title: 'Settings & privacy',
      isMove: true,
      ref: settings,
    },
    {
      icon: <FaQuestionCircle />,
      title: 'Help & support',
      isMove: true,
      ref: support,
    },
    {
      icon: <FaMoon />,
      title: 'Display & accessibility',
      isMove: true,
      ref: display,
    },
    {
      icon: <RiFeedbackFill />,
      title: 'Give feedback',
      isMove: false,
      ref: feedback,
    },
    {
      icon: <RiLogoutBoxRFill />,
      title: 'Log Out',
      isMove: false,
      ref: logOut,
    },
  ]

  return link
}

export const PostAudienceLinks = () => {
  const pub = useRef(null)
  const friends = useRef(null)
  const me = useRef(null)
  const specific = useRef(null)
  const custom = useRef(null)

  const links = [
    {
      icon: <GiEarthAmerica />,
      title: 'Public',
      id: 'public',
      description: 'Anyone on or off Facebook',
      ref: pub,
    },
    {
      icon: <FaUserFriends />,
      title: 'Friends',
      id: 'friends',
      description: 'Your friends on Facebook',
      ref: friends,
    },
    {
      icon: <HiLockClosed />,
      title: 'Only me',
      id: 'me',
      ref: me,
    },
    {
      icon: <MdPerson />,
      title: 'Specific friends',
      id: 'specific',
      description: 'Only show to some friends',
      ref: specific,
    },
    {
      icon: <MdSettings />,
      title: 'Custom',
      id: 'custom',
      description: 'Include and exclude friends and lists',
      ref: custom,
    },
  ]

  return links
}

export const NavDot1 = () => {
  const messengerRef = useRef(null)
  const notificationRef = useRef(null)
  const links = [
    {
      icon: <FaFacebookMessenger />,
      alarts: '3',
      tip: 'messenger',
      ref: messengerRef,
    },
    {
      icon: <MdNotifications className='-rotate-12' />,
      alarts: '1',
      tip: 'notification',
      ref: notificationRef,
    },
  ]

  return links
}

export const SideLinks = () => {
  const links = [
    {
      title: 'Friends',
      icon: <Friends />,
      url: 'menu/friends/fbid',
    },
    {
      title: 'Saved',
      icon: <Saved />,
      url: 'menu/saved/fbid',
    },
    {
      title: 'Market place',
      icon: <MarketPlace />,
      url: 'menu/marketplace/fbid',
    },
    {
      title: 'Watch',
      icon: <WatchReels />,
      url: 'menu/watch/fbid',
    },
    {
      title: 'Memories',
      icon: <MemoriesBtnIcon />,
      url: 'menu/memories/fbid',
    },
  ]

  return links
}
