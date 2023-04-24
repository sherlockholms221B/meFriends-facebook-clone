import * as React from 'react'

//import icons from react-icons
import { FaEdit } from 'react-icons/fa'

//import main logo from assets
import { logo } from '../Assets/exports'

//import Home component from component
import { SideBar, Feeds, Advertisment, Navbar } from '../Components/index'

//import context
import { useGlobalContext } from '../Hooks/context/UseContext'

// import actions handlers
import { loadingSet } from '../Functions/actions/internal'
import { getAllPost } from '../Functions/actions/external'

export default function Home() {
  //Distructure context valuses from contexts
  const {
    location,
    internalAction: [controller, dispatchAction],
    externalAction: [state, dispatchCall],
  } = useGlobalContext()

  const { loading } = controller

  // useEffect to turn off loading
  React.useEffect(() => {
    const interval = setTimeout(() => {
      loadingSet(dispatchAction, false)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [dispatchAction])

  //get all posts
  // React.useEffect(() => {
  //   getAllPost(dispatchCall, { _id: 'all-post' })
  // }, [dispatchCall])
  // console.log(state)

  function isloading() {
    let template
    if (loading) {
      template = (
        <section className='dark:bg-dark500 bg-white text-center flex flex-col items-center justify-center w-screen h-full'>
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
          className='flex items-strech justify-center sm:justify-between  dark:bg-dark500 relative h-screen w-screen bg-light500'
        >
          <SideBar />
          <Feeds profile />
          <Advertisment />
        </section>
        <section className='absolute bottom-5 dark:bg-dark300 bg-white p-3 right-5 rounded-full flex items-center justify-center cursor-pointer hover:brightness-105 shadow-md border dark:border-bd500'>
          <FaEdit className='dark:text-white text-dark500 text-xl' />
        </section>
      </React.Fragment>
    )

    return template
  }

  return isloading()
}
