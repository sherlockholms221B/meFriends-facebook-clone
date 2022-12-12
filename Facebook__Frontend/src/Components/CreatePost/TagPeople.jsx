import React, { useState } from 'react'
import { MdClose, MdOutlineSearch } from 'react-icons/md'

import { useGlobalContext } from '../../Context/UseContext'
import MegWrapper from '../MegWrapper'
import { Head, Input, NoPost } from '../index'
import { previous } from '../../functions/stateHandler'
import { posts } from '../../utils/constants'

const TagPeople = () => {
  const [searchFriends, setSearchFriends] = useState('')
  const {
    setCreatePostState,
    tagPeopleState,
    setTagPeopleState,
    setGoBack,
    selectedFriends,
    setSelectedFriends,
  } = useGlobalContext()

  return (
    <div
      className={` ${
        tagPeopleState && 'translate_x'
      }  z-20  w-full h-full rounded-lg dark:border dark:border-borderDark`}
    >
      <Head
        title={`Tag people`}
        setFirstState={setCreatePostState}
        setSecondState={setTagPeopleState}
        setThirdState={setGoBack}
      />
      <div className='relative w-full h-fit flex flex-row items-center justify-around mt-2 mb-2'>
        <div className='relative rounded-full'>
          <Input
            type={`text`}
            name={`friends`}
            placeholder={`Search for friends`}
            handleChange={(e) => setSearchFriends(e.target.value)}
            value={searchFriends}
          />
          <MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
        </div>
        <button
          className='capitalize font-medium text-blue-700'
          type='button'
          onClick={() => {
            previous(setCreatePostState, setTagPeopleState, setGoBack)
          }}
        >
          done
        </button>
      </div>
      <div className='max-h-[350px] overflow-auto home_scroll p-2'>
        {selectedFriends?.length !== 0 && (
          <div className='flex flex-col justify-start items-start w-full '>
            <h4 className='uppercase text-sm ml-2 text-gray-400 font-medium'>
              taged
            </h4>
            <div className='flex flex-row gap-2 flex-wrap home-scroll items-center justify-start p-2 rounded-md  mt-1 mb-1 overflow-auto border-2 border-gray-300 w-full'>
              {selectedFriends?.map((friend, i) => (
                <div
                  key={i + friend}
                  className='flex flex-row items-center gap-0.5 px-2 py-0.5 rounded-md bg-blue-100'
                >
                  <h3 className='text-md font-semibold text-blue-600 capitalize'>
                    {friend}
                  </h3>
                  <i className='rounded-full p-1 hover:bg-slate-300 cursor-pointer'>
                    <MdClose className='text-lg text-blue-600' />
                  </i>
                </div>
              ))}
            </div>
          </div>
        )}
        {searchFriends && (
          <div className='flex flex-col justify-start items-start w-full cursor-pointer'>
            <h4 className='uppercase text-sm ml-2 text-gray-400 font-medium'>
              search
            </h4>
            {posts.map(({ creator, profile: [{ profileImage }] }, i) => (
              <div
                onClick={(e) => {
                  const friendName = e.target.textContent
                  setSelectedFriends([...selectedFriends, friendName])
                  setSearchFriends('')
                  console.log(selectedFriends)
                }}
                key={i + creator}
                className='flex flex-row gap-2 items-center px-2 py-0.5 hover:bg-hover rounded-md w-full mt-1 mb-1'
              >
                <div className='rounded-full cursor-pointer'>
                  <img
                    src={profileImage}
                    alt='profile'
                    className='object-cover w-11 h-11 rounded-full'
                  />
                </div>
                <h3 className='text-md font-semibold text-gray-700 capitalize'>
                  {creator}
                </h3>
              </div>
            ))}
          </div>
        )}

        {!searchFriends && <NoPost title={`No people found`} />}
      </div>
    </div>
  )
}

export default MegWrapper(TagPeople)
