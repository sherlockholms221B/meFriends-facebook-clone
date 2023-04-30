import * as React from 'react'

//import moment module
import moment from 'moment'

//import components
import Input from '../Input'

//import constants
import { comments } from '../../utils/constants'

//import utilitis function
import { randomNumberGenerator } from '../../Functions/utilities/random.'

//import useglobal context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import custom react icons
import SoftMassagePanelview from './components/SoftMassagePanelview/SoftMassagePanelview'

const MessageRoot = ({ children, title, actionButton }) => {
  const { setChatState, setMessageState } = useGlobalContext()
  return (
    <React.Fragment>
      <section className='flex flex-col gap-2 rounded-t-lg'>
        <SoftMassagePanelview title={title} actionButton={actionButton} />
        <>
          <hr className='mdsm:hidden' />
        </>
        <section className='relative w-full flex flex-row justify-center items-center p-3'>
          {children}
        </section>
        {title === 'Chats' && (
          <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
            {[
              {
                title: 'Inbox',
              },
              {
                title: 'Communities',
              },
            ].map(({ title, i }) => (
              <p
                key={i}
                className='text-md dark:text-thdark500 capitalize rounded-full py-1 px-2 font-medium bg-tpBlue500 brightness-125'
              >
                {title}
              </p>
            ))}
          </article>
        )}
      </section>
      <section className='max-h-full md:max-h-[380px] gap-3 w-full overflow-auto home_scroll pr-1 pl-1 pt-2 pb-12 mdsm:pb-0'>
        {comments.map(
          (
            { creator, profile: [{ profileImage, createdAt }], comment },
            index
          ) => (
            <button
              className='w-full flex flex-row gap-3 items-center cursor-pointer dark:hover:bg-dark300 hover:bg-slate-200 px-2 py-1.5 mt-0.5 mb-0.5 rounded-md'
              key={index + creator}
              onClick={() => {
                setMessageState(false)
                setChatState(true)
              }}
            >
              <img
                src={profileImage}
                alt='sender'
                className='w-20 h-20 mdsm:w-10 mdsm:h-10 rounded-full object-cover'
              />
              <article className='flex flex-col justify-center items-start'>
                <h3 className='capitalize text-black dark:text-thdark500  text-lg font-medium'>
                  {creator}
                </h3>
                <article className='flex_row gap-2 dark:text-thlight500'>
                  <h3 className='text-sm'>
                    {`${comment.substring(0, randomNumberGenerator(9, 21))}...`}
                  </h3>
                  <p className='text-sm'>
                    {`${moment(createdAt).fromNow().substring(0, 5)}.`}
                  </p>
                </article>
              </article>
            </button>
          )
        )}
      </section>
      <section className='hidden mdsm:flex justify-center items-center border-t-[1px] dark:border-bd500 border-t-slate-300 p-3 rounded-b-lg '>
        <h4 className='deep_blue cursor-pointer hover:underline'>
          See all in Messenger
        </h4>
      </section>
    </React.Fragment>
  )
}

export default MessageRoot
