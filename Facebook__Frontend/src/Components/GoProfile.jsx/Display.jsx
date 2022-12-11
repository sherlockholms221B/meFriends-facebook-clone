import React from 'react'

import { useGlobalContext } from '../../Context/UseContext'
import Head from '../CreatePost/Head'
import MegWrapper from '../MegWrapper'
const Display = () => {
  const {
    settingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    setProfileState,
    setGoBack,
    displayState,
    setSettingsState,
  } = useGlobalContext()
  return (
    <div className={` ${displayState ? 'pb-4 translate_x' : 'pb-4'} `}>
      <Head
        title={`Display & accessibility`}
        setFirstState={setProfileState}
        setSecondState={setDisplayState}
        setThirdState={setGoBack}
      />
      <section className=''></section>
    </div>
  )
}

export default MegWrapper(Display)
