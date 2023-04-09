import { useRef } from 'react'

import { Icon } from './Icon'
import { DIcons } from '../Assets/3d Icons'
export const MakePostLinkOne = () => {
  const picture = useRef(null)
  const tag = useRef(null)
  const feelings = useRef(null)
  const location = useRef(null)
  const flag = useRef(null)

  const link = [
    {
      icon: <Icon.MdOutlinePhotoLibrary />,
      ref: picture,
      tip: 'photos/video',
    },
    { icon: <Icon.FaUserTag />, ref: tag, tip: 'tag poeple' },
    {
      icon: <Icon.BsEmojiWink />,
      ref: feelings,
      tip: 'feelings/activity',
    },
    {
      icon: <Icon.MdOutlineLocationOn />,
      ref: location,
      tip: 'check in',
    },
    {
      icon: <Icon.MdFlag />,
      ref: flag,
      tip: 'life event',
    },
  ]
  return link
}

export const MakePostLinkTwo = () => {
  const links = [
    { icon: <Icon.MdOutlinePhotoLibrary />, title: 'Photo/Video' },
    { icon: <Icon.MdPerson />, title: 'Tag people' },
    { icon: <Icon.BsEmojiWink />, title: 'Feeelings/activity' },
    {
      icon: <Icon.MdOutlineLocationOn />,
      title: 'Check in',
    },
    {
      icon: <Icon.MdFlag />,
      title: 'Life event',
    },
    {
      icon: <Icon.MdVideoCall />,
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
      icon: <Icon.MdSettingsSuggest />,
      title: 'Settings & privacy',
      next: true,
      ref: settings,
    },
    {
      icon: <Icon.FaQuestionCircle />,
      title: 'Help & support',
      next: true,
      ref: support,
    },
    {
      icon: <Icon.FaMoon />,
      title: 'Display & accessibility',
      next: true,
      ref: display,
    },
    {
      icon: <Icon.RiFeedbackFill />,
      title: 'Give feedback',
      next: false,
      ref: feedback,
    },
    {
      icon: <Icon.RiLogoutBoxRFill />,
      title: 'Log Out',
      next: false,
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
      icon: <Icon.GiEarthAmerica />,
      title: 'Public',
      id: 'public',
      description: 'Anyone on or off Facebook',
      ref: pub,
    },
    {
      icon: <Icon.FaUserFriends />,
      title: 'Friends',
      id: 'friends',
      description: 'Your friends on Facebook',
      ref: friends,
    },
    {
      icon: <Icon.HiLockClosed />,
      title: 'Only me',
      id: 'me',
      ref: me,
    },
    {
      icon: <Icon.MdPerson />,
      title: 'Specific friends',
      id: 'specific',
      description: 'Only show to some friends',
      ref: specific,
    },
    {
      icon: <Icon.MdSettings />,
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
      icon: <Icon.FaFacebookMessenger />,
      alarts: '3',
      tip: 'messenger',
      ref: messengerRef,
    },
    {
      icon: <Icon.MdNotifications className='-rotate-12' />,
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
      icon: <img src={DIcons.friend} alt='' className='w-8 object-cover h-8' />,
      url: 'menu/friends/fbid',
    },
    {
      title: 'Saved',
      icon: (
        <img src={DIcons.bookmark} alt='' className='w-8 object-cover h-8' />
      ),
      url: 'menu/saved/fbid',
    },
    {
      title: 'Marketplace',
      icon: <img src={DIcons.bag} alt='' className='w-8 object-cover h-8' />,
      url: 'menu/marketplace/fbid',
    },
    {
      title: 'Watch',
      icon: <img src={DIcons.video} alt='' className='w-8 object-cover h-8' />,
      url: 'menu/watch/fbid',
    },
    {
      title: 'Memories',
      icon: <img src={DIcons.clock} alt='' className='w-8 object-cover h-8' />,
      url: 'menu/memories/fbid',
    },
  ]

  return links
}
