import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends, FaBookmark } from 'react-icons/fa'
import { HiOutlineKey, HiLockClosed } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import { GiBackwardTime, GiEarthAmerica } from 'react-icons/gi'
import {
  MdSettings,
  MdPerson,
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
} from 'react-icons/md'

import { profile } from '../Assets/exports'

const repeatStyle = 'text-2xl text-gray-800'

export const links = [
  {
    title: 'Home',
    icon: <AiFillHome />,
  },
  {
    title: 'Don christsanctus',
    icon: profile,
  },

  {
    title: 'Menu',
    icon: <TbGridDots />,
  },
  {
    title: 'Friends',
    icon: <FaUserFriends />,
  },
  {
    title: 'Market place',
    icon: <MdMapsHomeWork />,
  },
  {
    title: 'Watched',
    icon: <MdOutlineOndemandVideo />,
  },
  {
    title: 'Memories',
    icon: <GiBackwardTime className='text-2xl font-bold' />,
  },
  {
    title: 'Saved',
    icon: <FaBookmark />,
  },
  { title: 'Groups', icon: <MdGroups /> },
  {
    title: 'Shortcuts',
    icon: <HiOutlineKey />,
  },
]

export const postAudienceLinks = [
  {
    icon: <GiEarthAmerica className={`${repeatStyle}`} />,
    title: 'Public',
    description: 'Anyone on or off Facebook',
  },
  {
    icon: <FaUserFriends className={`${repeatStyle}`} />,
    title: 'Friends',
    description: 'Your friends on Facebook',
  },
  {
    icon: <HiLockClosed className={`${repeatStyle}`} />,
    title: 'Only me',
  },
  {
    icon: <MdPerson className={`${repeatStyle}`} />,
    title: 'Specific friends',
    description: 'Only show to some friends',
  },
  {
    icon: <MdSettings className={`${repeatStyle}`} />,
    title: 'Custom',
    description: 'Include and exclude friends and lists',
  },
]
