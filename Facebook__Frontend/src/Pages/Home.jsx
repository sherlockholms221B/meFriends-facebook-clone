import React, { useEffect } from 'react'

//import icons from react-icons
import { FaEdit } from 'react-icons/fa'

//import main logo from assets
import { logo } from '../Assets/exports'

//import Home component from component
import { SideBar, Feeds, Advertisment, Navbar } from '../Components/index'

//import context
import { useGlobalContext } from '../Context/UseContext'

const Home = () => {
  //Distructure context valuses from contexts
  const { isLoading, setIsLoading, location } = useGlobalContext()

  // useEffect to turn off loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  return (
    <React.Fragment>
      {isLoading ? (
        <section className='dark:bg-darkPrimary bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <figure className=' text-center blue_text'>
            <img src={logo} alt='src logo' className='w-16 h-16 object-cover' />
            <figcaption className='text-center'>
              <p className='text-sm text-gray-500 absolute bottom-12 '>from</p>
              <h3 className='text-blue-700 absolute bottom-6 font-extrabold '>
                @santus
              </h3>
            </figcaption>
          </figure>
        </section>
      ) : (
        <React.Fragment>
          <Navbar />
          <section
            style={{ paddingTop: `${location.height}px` }}
            className='flex items-strech justify-center mid_small:justify-between  dark:bg-darkPrimary relative overflow-hidde h-screen w-screen bg-primary'
          >
            <SideBar />
            <Feeds isNot={true} />
            <Advertisment />
          </section>
          <section className='absolute bottom-5 dark:bg-darkComplementry p-3 right-5 rounded-full flex items-center justify-center cursor-pointer hover:brightness-125 border border-slate-800'>
            <FaEdit className='text-white text-xl' />
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Home
