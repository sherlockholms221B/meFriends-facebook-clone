import React, { useState, useEffect } from 'react'
import { MdOutlineFacebook } from 'react-icons/md'

import { SideBar, Feeds, Advertisment } from '../Components/index'
import { useGlobalContext } from '../Context/UseContext'

const Home = () => {
  const { isLoading, setIsLoading } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })
  return (
    <>
      {isLoading ? (
        <div className='bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <p className=' text-8xl text-blue-500'>
            <MdOutlineFacebook />
          </p>
          <p className='text-md text-gray-500 absolute bottom-12 '>from</p>
          <h3 className='text-xl text-blue-500 absolute bottom-6 font-extrabold '>
            @santus
          </h3>
        </div>
      ) : (
        <div className='relative overflow-hidden h-[100vh] w-[100vw] pt-[60px] bg-[#E3E3E3]'>
          <div className='flex items-strech w-[100vw] h-[100%] gap-24 px-1'>
            <div className='overflow-auto home_scroll content w-[350px]'>
              <SideBar />
            </div>
            <div className=' flex items-center justify-center w-[500px]  px-1 '>
              <Feeds />
            </div>
            <div className='overflow-auto home_scroll hidden md:block w-[350px]'>
              <Advertisment />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
