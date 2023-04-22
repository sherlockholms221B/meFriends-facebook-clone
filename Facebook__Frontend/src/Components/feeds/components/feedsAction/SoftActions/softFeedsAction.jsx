import React from 'react'
// import PropTypes from 'prop-types'

//import authstore
import useAuthStore from '../../../../../Store/AuthStore'

//import components
import Profile from '../../../../Profile'

//import context
import { useGlobalContext } from '../../../../../Hooks/context/UseContext'

//import static links
import { feedLinksOne } from '../../../../../utils/links'

//import feeds styles
import { actionContainer } from '../../../styles'

const SoftFeedsAction = (props) => {
  const {
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
  } = useGlobalContext()
  const { userProfile } = useAuthStore()
  return (
    <section className='dark:bg-dark400 bg-white border dark:border-bd500 rounded-md shadow-lg transition-shadow md:order-2 pt-4 px-4'>
      <section className='flex flex-row justify-between items-center w-full gap-2 px- xs: py-2 mdsm:py-4'>
        <Profile link='/backface/api/profile' />
        <article
          className='rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors'
          onClick={() => {
            setMessageState(false)
            setNotificationState(false)
            setProfileState(false)
            setCreatePostState(true)
          }}
        >
          <strong className='text-base font-normal dark:text-thlight500 text-zinc-600'>
            Whats on your mind,{' '}
            <span className='capitalize'>{userProfile.userName}</span>
          </strong>
        </article>
      </section>
      <hr className='dark:border-bd500' />
      <section className='flex flex-row flex-nowrap items-center justify-around w-full px-1 mdsm:px-2 py-1 '>
        {feedLinksOne.map(({ icon, title, mtitle }, i) => (
          <figure
            key={i}
            className={
              actionContainer() +
              'px-4 mdsm:px-6 py-1 flex flex-row items-center justify-center gap-2 cursor-pointer transition-colors'
            }
          >
            {icon}
            <figcaption>
              <p className='hidden mdsm:block tracking-wider text-base font-normal dark:text-thlight500 text-zinc-600'>
                {title}
              </p>
              <p className='text-md mdsm:hidden text-base font-normal dark:text-thlight500 text-zinc-600'>
                {mtitle}
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  )
}

SoftFeedsAction.propTypes = {}

export default SoftFeedsAction
