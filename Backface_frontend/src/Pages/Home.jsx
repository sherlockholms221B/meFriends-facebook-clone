import React from 'react'
import { Navbar, SideBar, Posts } from '../Components/exports'

const Home = () => {
  return (
    <div className='overflow-hidden h-[100vh] w-[100vw] bg-[#E3E3E3]'>
      <Navbar />
      <div className='flex items-strech w-[100vw] h-[100vh] gap-2 px-1 pt-4'>
        <div className='flex items-center justify-center w-1/4'>
          <SideBar />
        </div>
        <div className='flex items-center justify-center w-2/4 px-8'>
          <Posts />
        </div>
        <div className='flex items-center justify-center hidden md:block w-1/4'>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Home
