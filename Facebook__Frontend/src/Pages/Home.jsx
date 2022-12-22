import React, { useEffect, useReducer } from 'react'
import { MdOutlineFacebook } from 'react-icons/md'

import { SideBar, Feeds, Advertisment, Navbar } from '../Components/index'
import { useGlobalContext } from '../Context/UseContext'
import reducer from '../Reducers/GReducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const { isLoading, setIsLoading, location } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  return (
    <>
      {isLoading ? (
        <div className='dark:bg-darkPrimary bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <p className=' text-8xl blue_text'>
            <MdOutlineFacebook />
          </p>
          <p className='text-md text-gray-500 absolute bottom-12 '>from</p>
          <h3 className='text-xl blue_text absolute bottom-6 font-extrabold '>
            @santus
          </h3>
        </div>
      ) : (
        <>
          <Navbar />
          <div
            style={{ paddingTop: `${location.height}px` }}
            className=' dark:bg-darkPrimary relative overflow-hidden h-[100vh] w-[100vw] black bg-primary'
          >
            <div className='flex items-strech justify-center mid_small:justify-between w-[100vw] h-[100%]'>
              <SideBar />
              <Feeds isNot={true} />
              <Advertisment />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
