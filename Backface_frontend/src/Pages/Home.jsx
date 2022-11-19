import React, { useState } from 'react'
import { SideBar, Posts, Advertisment } from '../Components/exports'

const Home = () => {
  return (
    <>
      <div className='relative overflow-hidden h-[100vh] w-[100vw] bg-[#E3E3E3]'>
        <div className='flex items-strech w-[100vw] h-[100vh] gap-24 px-1'>
          <div className=' w-[350px]'>
            <SideBar />
          </div>
          <div className=' flex items-center justify-center w-[500px]  px-1 '>
            <Posts />
          </div>
          <div className='flex items-center justify-center hidden md:block w-[400px]'>
            <Advertisment />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
