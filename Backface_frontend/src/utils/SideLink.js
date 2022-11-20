import { AiFillHome, AiOutlineClockCircle } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { HiOutlineKey } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import {
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
  MdBookmarkBorder,
} from 'react-icons/md'
import { profile } from '../Assets/exports'

const links = [
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
    icon: <AiOutlineClockCircle />,
  },
  {
    title: 'Saved',
    icon: <MdBookmarkBorder />,
  },
  { title: 'Groups', icon: <MdGroups /> },
  {
    title: 'Shortcuts',
    icon: <HiOutlineKey />,
  },
]

export default links
