import React, { useState, useEffect, useReducer } from 'react'
import { MdOutlineFacebook } from 'react-icons/md'

import { SideBar, Feeds, Advertisment } from '../Components/index'
import { useGlobalContext } from '../Context/UseContext'
import { themeCheck } from '../functions/darkTheme'
import reducer from '../Reducers/GReducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const { isLoading, setIsLoading } = useGlobalContext()

  useEffect(() => {
    themeCheck()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })
  return (
    <>
      {isLoading ? (
        <div className='dark:bg-darkPrimary bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <p className=' text-8xl text-blue-500'>
            <MdOutlineFacebook />
          </p>
          <p className='text-md text-gray-500 absolute bottom-12 '>from</p>
          <h3 className='text-xl text-blue-500 absolute bottom-6 font-extrabold '>
            @santus
          </h3>
        </div>
      ) : (
        <div
          className=' dark:bg-darkPrimary relative overflow-hidden h-[100vh] w-[100vw] pt-[60px] black bg-primary'
          onClick={() => {
            dispatch({
              type: 'come',
              payload: { name: 'chirstsanctus', level: '100 level' },
            })
          }}
        >
          <div className='flex items-strech justify-between w-[100vw] h-[100%]'>
            <div className='hidden md:flex dark:border-r dark:xl:border-0 dark:border-borderDark overflow-hidden hover:overflow-auto w-max xl:w-[300px] xl:bg-inherit  bg-white dark:bg-darkSecondary dark:xl:bg-darkPrimary  pt-4 pl-2 pr-2 xl:pl-0 xl:pr-0'>
              <SideBar />
            </div>
            <div className=' flex items-center justify-center mx-auto w-[560px] px-.5 pt-4'>
              <Feeds />
            </div>
            <div className='overflow-hidden hover:overflow-auto hidden md:block w-[315px] pt-4'>
              <Advertisment />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
