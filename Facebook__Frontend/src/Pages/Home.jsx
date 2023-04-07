import * as React from 'react'

//import icons from react-icons
import { FaEdit } from 'react-icons/fa'

//import main logo from assets
import { logo } from '../Assets/exports'

//import Home component from component
import { SideBar, Feeds, Advertisment, Navbar } from '../Components/index'

//import context
import { useGlobalContext } from '../Context/UseContext'

// import actions handlers
import { loadingSet } from '../Actions'

export default function Home() {
  //Distructure context valuses from contexts
  const {
    location,
    value: [controller, dispatch],
  } = useGlobalContext()

  const { loading } = controller

  // useEffect to turn off loading
  React.useEffect(() => {
    const interval = setTimeout(() => {
      loadingSet(dispatch, false)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  function isloading() {
    let template
    if (loading) {
      template = (
        <section className='dark:bg-darkPrimary bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <figure className=' text-center blue_text'>
            <img src={logo} alt='src logo' className='w-16 h-16 object-cover' />
            <figcaption className='text-center flex flex-col justify-center items-center'>
              <p className='text-sm text-gray-500 absolute bottom-12 tracking-wide'>
                From
              </p>
              <h3 className='text-blue-700 absolute bottom-6 font-extrabold tracking-wider'>
                @Santus
              </h3>
            </figcaption>
          </figure>
        </section>
      )
      return template
    }
    template = (
      <React.Fragment>
        <Navbar />
        <section
          style={{ paddingTop: `${location.height}px` }}
          className='flex items-strech justify-center mid_small:justify-between  dark:bg-darkPrimary relative h-screen w-screen bg-primary'
        >
          <SideBar />
          <Feeds profile />
          <Advertisment />
        </section>
        <section className='absolute bottom-5 dark:bg-darkComplementry p-3 right-5 rounded-full flex items-center justify-center cursor-pointer hover:brightness-125 border border-slate-800'>
          <FaEdit className='text-white text-xl' />
        </section>
      </React.Fragment>
    )

    return template
  }

  return isloading()
}
