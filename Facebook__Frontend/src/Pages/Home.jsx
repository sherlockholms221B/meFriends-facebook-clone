import * as React from 'react'

//import Home component from component
import { SideBar, Feeds, Advertisment, Navbar } from '../Components/index'

//import context
import { useGlobalContext } from '../Hooks/context/UseContext'

// import actions handlers
import { loadingSet } from '../Functions/actions/internal'

//import custom react icons
import { Icon } from '../utils/Icon'
import SoftAppLoader from '../examples/SoftLoading/components/SoftAppLoader'

//import functions from utils.functions
import { getAllPost } from '../Functions/actions/external'

//import socket.io-client from socket-file
// import {socket} from '../socket'

export default function Home() {
  //Distructure context valuses from contexts
  const {
    location,
    internalAction: [controller, dispatchAction],
    externalAction: [state, dispatchCall],
  } = useGlobalContext();

  const { loading } = controller;

  // useEffect to turn off loading
  React.useEffect(() => {
    const interval = setTimeout(() => {
      loadingSet(dispatchAction, false);
    }, 100);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  // get all posts
  React.useEffect(() => {
    getAllPost(dispatchCall);
  }, [dispatchCall]);

  function isloading() {
    let template
    if (loading) {
      template = <SoftAppLoader />
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
          <Icon.FaEdit className='dark:text-white text-dark500 text-xl' />
        </section>
      </React.Fragment>
    )

    return template
  }

  return isloading()
}

        /* <React.Profiler id='Navigation' onRender={(id,phase,actualduration,baseduration,startTime,commitTime,internalactions) => {
          console.log(id,phase,actualduration,baseduration,startTime,commitTime,internalactions)
        }}> */
        // <Navbar />

        /* </React.Profiler> */