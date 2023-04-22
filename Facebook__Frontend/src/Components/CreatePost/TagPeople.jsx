import * as React from 'react'

// import useglobal context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import higher order component
import MegWrapper from '../MegWrapper'

//import component
import { Head, Input, NoPost } from '../index'

//import utilities functions
import { previous } from '../../Functions/utilities/SH'

//import constants
import { posts } from '../../utils/constants'

//import custom icons
import { Icon } from '../../utils/Icon'

const TagPeople = () => {
  const [searchFriends, setSearchFriends] = React.useState('')
  const {
    setCreatePostState,
    tagPeopleState,
    setTagPeopleState,
    setGoBack,
    selectedFriends,
    setSelectedFriends,
  } = useGlobalContext()
  return (
    <section
      className={
        ' z-20  w-full h-full rounded-lg dark:border dark:border-bd500 ' +
        (tagPeopleState && 'translate_x')
      }
    >
      <Head
        title={`Tag people`}
        setFirstState={setCreatePostState}
        setSecondState={setTagPeopleState}
        setThirdState={setGoBack}
      />
      <section className='relative w-full h-fit flex flex-row items-center justify-between sm:justify-around mt-2 mb-2  px-2 sm:px-0'>
        <div className='relative rounded-full'>
          <Input
            type={`text`}
            name={`friends`}
            placeholder={`Search for friends...`}
            handleChange={(e) => setSearchFriends(e.target.value)}
            value={searchFriends}
          />
          <Icon.MdOutlineSearch className='absolute top-3 left-3 text-gray-400 text-2xl cursor-pointer ' />
        </div>
        <button
          className='capitalize font-medium deep_blue'
          type='button'
          onClick={() => {
            previous(setCreatePostState, setTagPeopleState, setGoBack)
          }}
        >
          done
        </button>
      </section>
      <section className='max-h-[350px] overflow-auto home_scroll p-2'>
        {selectedFriends?.length !== 0 && (
          <div className='flex flex-col justify-start items-start w-full '>
            <h4 className='uppercase text-sm ml-2 text-gray-400 font-medium'>
              taged
            </h4>
            <div className='flex flex-row gap-2 flex-wrap home-scroll items-center justify-start p-2 rounded-md  mt-1 mb-1 overflow-auto border-2 border-gray-300 w-full'>
              {selectedFriends?.map((friend, index) => (
                <div
                  key={index + friend}
                  className='flex flex-row items-center gap-0.5 px-2 py-0.5 rounded-md dark:bg-tpBlue500 bg-blue-100'
                >
                  <h3 className='text-md font-semibold text-blue-600 capitalize'>
                    {friend}
                  </h3>
                  <button
                    type='button'
                    onClick={() => {}}
                    className='group/edit rounded-full p-1 hover:bg-slate-300 dark:hover:bg-tpBlue500 cursor-pointer'
                  >
                    <Icon.MdClose className='text-lg text-blue-600' />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {searchFriends && (
          <section className='flex flex-col justify-start items-start w-full cursor-pointer'>
            <h4 className='uppercase text-sm ml-2 text-gray-400 font-medium'>
              search
            </h4>
            {posts.map(({ creator, profile: [{ profileImage }] }, i) => (
              <article
                onClick={(e) => {
                  const friendName = e.target.textContent
                  setSelectedFriends([...selectedFriends, friendName])
                  setSearchFriends('')
                }}
                key={i + creator}
                className='flex flex-row gap-2 items-center px-2 py-0.5 hover:bg-light300 dark:hover:bg-dark300 rounded-md w-full mt-1 mb-1'
              >
                <div className='rounded-full cursor-pointer'>
                  <img
                    src={profileImage}
                    alt='profile'
                    className='object-cover w-11 h-11 rounded-full'
                  />
                </div>
                <h3 className='text-md font-semibold text-black dark:text-light400 capitalize'>
                  {creator}
                </h3>
              </article>
            ))}
          </section>
        )}
        {!searchFriends && <NoPost title={`No people found`} />}
      </section>
    </section>
  )
}

export default MegWrapper(TagPeople)
