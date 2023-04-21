import React from 'react'

//import higher order components
import MenuPageUrl from '../MenuPageUrl'
import SoftButton from '../../examples/SoftButton'
import { SoftIconContainer } from '../../examples'
import { Demaceta } from '../../Components/RDOMC'
import { Icon } from '../../utils/Icon'
import { Input } from '../../Components'

const GroupSl = () => {
  return (
    <section className='dark:bg-dark400 flex flex-col w-[400px] h-full vertical_scroll px-3 items-start pt-3 pb-3 text-start'>
      <article className='pl-3 w-full text-start flex justify-between items-center'>
        <h5 className='text-2xl text-gray-800 dark:text-thdark500 font-semibold brightness-105 tracking-wide'>
          Groups
        </h5>
        <SoftButton
          rounded
          title='dark:bg-dark300 bg-gray-200 p-2 rounded-full'
          functionCall={() => {}}
        >
          <Icon.MdSettings className='text-xl dark:text-thdark500' />
        </SoftButton>
      </article>
      <section className='relative rounded-full w-full h-fit my-3'>
        <Input
          type='text'
          name='menusl'
          placeholder='Search group...'
          autoFocus
        />
        <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </section>
      {[
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Your feed',
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Discover',
        },
        {
          icon: <Icon.AiOutlineSwitcher />,
          title: 'Your groups',
        },
      ].map(({ icon, title }, i) => (
        <SoftIconContainer
          icon={icon}
          text={title}
          handleClick={() => {}}
          key={i}
        />
      ))}
      <SoftButton
        title='mt-4 text-lg text-blue-500 bg-[#0c4aad47] py-2 capitalize w-full'
        functionCall={() => {}}
      >
        <Icon.HiPlusSm />
        Create new group
      </SoftButton>
      <Demaceta />
      <h5 className='text-lg text-gray-800 dark:text-thdark500 font-semibold brightness-105 tracking-wide'>
        Groups you manage
      </h5>
    </section>
  )
}

export default MenuPageUrl(GroupSl)
