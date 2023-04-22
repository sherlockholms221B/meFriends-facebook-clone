import * as React from 'react'

//import context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import data
import { comments } from '../../utils/constants'

//import components
import { FriendStack } from '../../Components'

//import store from zustand
import useAuthStore from '../../Store/AuthStore'

//import sanity url from client
import { urlFor } from '../../utils/client'

//import react custom icons
import { Icon } from '../../utils/Icon'

const HED = () => {
  const { dynamicLocation } = useGlobalContext()
  const { userProfile } = useAuthStore()
  const HedRef = React.useRef(null)
  React.useLayoutEffect(() => {
    const element = HedRef.current.getBoundingClientRect()
    const elementHeight = element.height
    dynamicLocation({ HEDheight: elementHeight })
  }, [])
  return (
    <section
      ref={HedRef}
      className='w-full border-b-2 border-gray-200 bg-gradient-to-b to-white from-slate-200 dark:from-[#3a3b3c] dark:to-[#242526] dark:border-bd500'
    >
      <figure className='max-w-[1000px] w-full mx-auto rounded-b-lg'>
        <img
          src={urlFor(userProfile?.coverImage?.asset).url()}
          alt='coverPicture'
          className='max-w-[1000px] w-full mx-auto h-458 object-cover rounded-b-lg'
        />
      </figure>
      <section className='max-w-[1000px] w-full mx-auto flex flex-col mdsm:flex-row border-b-2 border-gray-500 m-auto relative  items-center pt-5 pb-2 px-2 lap:px-0'>
        <img
          src={urlFor(userProfile?.profileImage?.asset).url()}
          alt='profile'
          className='absolute -top-11 left-10 mdsm:left-0 w-52 h-52 rounded-full object-cover ring-4 ring-white'
        />
        <div className=' w-60 mdsm:h-10 h-40 rounded-full ' />
        <section className='flex flex-col gap-3 py-3'>
          <h3 className='text-4xl dark:text-thdark500 font-bold'>
            {userProfile?.userName}
          </h3>
          <p className='text-xl light_text_gray dark:text-thlight500 font-semibold'>
            4.1k friends
          </p>
          <section className='full h-9'>
            <FriendStack comments={comments} />
          </section>
        </section>
      </section>
      <section className='max-w-[1000px] w-full mx-auto  m-auto relative flex items-center justify-between py-3 px-2 lap:px-0'>
        <article className='flex items-center gap-4 w-8/12 '>
          {['Post', 'About', 'Friends', 'Photo', 'Vidoe', 'More'].map(
            (item, i) => (
              <p
                className={`${
                  i < 5 && i !== 0 && 'hidden sm:block'
                } light_text_gray dark:text-thlight500 font-semibold text-lg cursor-pointer`}
                key={i}
              >
                {item}
              </p>
            )
          )}
        </article>
        <article className='w-fit rounded-md bg-light300 dark:bg-dark300 dark:text-thdark500 hover:bg-light400 px-4 py-3'>
          <Icon.MdMoreHoriz className='text-2xl cursor-pointer' />
        </article>
      </section>
    </section>
  )
}

export default HED
