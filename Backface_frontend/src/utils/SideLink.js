import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends, FaBookmark } from 'react-icons/fa'
import { HiOutlineKey } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'
import { GiBackwardTime } from 'react-icons/gi'
import {
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
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

export default links
