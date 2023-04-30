import React from 'react'

//import Hoc
import MenuPageUrl from '../MenuPageUrl'

//import components
import SoftButton from '../../examples/SoftButton'
import { Icon } from '../../utils/Icon'
import { Input } from '../../Components'

//
const ShortCutsSl = () => {
  return (
    <section className='dark:bg-dark400 flex flex-col w-[380px] h-full  px-3 items-start pt-3 pb-3 text-start'>
      <article className='pl-3 w-full text-start'>
        <h5 className='text-2xl text-gray-800 dark:text-thdark500 font-semibold brightness-105 tracking-wide'>
          Shortcuts
        </h5>
        <SoftButton
          title='bg-transparent text-start text-xs mt-1'
          functionCall={() => {}}
        >
          <p className='dark:text-white text-black'>
            Shortcuts provide quick access to what you do most on Facebook. Your
            shortcuts are sorted automatically, but you can pin something so
            it's always shown at the top or hide it from the list.
          </p>
        </SoftButton>
      </article>
      <section className='relative rounded-full w-full h-fit my-3'>
        <Input
          type='text'
          name='menusl'
          placeholder='Search your Pages, groups and games'
          autoFocus
        />
        <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </section>
    </section>
  )
}

export default MenuPageUrl(ShortCutsSl)
