import React, { useState, useEffect } from 'react'
import { MdOutlineFacebook } from 'react-icons/md'

import { SideBar, Feeds, Advertisment } from '../Components/index'
import { useGlobalContext } from '../Context/UseContext'
import { themeCheck } from '../functions/darkTheme'

const Home = () => {
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
        <div className=' dark:bg-darkPrimary relative overflow-hidden h-[100vh] w-[100vw] pt-[60px] black bg-primary'>
          <div className='flex items-strech  justify-between w-[100vw] h-[100%] pt-4'>
            <div className='overflow-auto home_scroll content w-min xl:w-[300px] xl:bg-inherit  bg-white'>
              <SideBar />
            </div>
            <div className=' flex items-center justify-center w-[560px] px-.5 '>
              <Feeds />
            </div>
            <div className='overflow-auto home_scroll hidden lg:block w-[315px]'>
              <Advertisment />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
