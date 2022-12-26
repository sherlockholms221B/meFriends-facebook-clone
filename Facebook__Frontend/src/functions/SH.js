export const refresh = async () => {
  window.location.reload()
}

export const forward = (setFirstState, setSecondState) => {
  setFirstState(false)
  setSecondState(true)
}

export const previous = (setFirstState, setSecondState, setThirdState) => {
  setFirstState(true)
  setSecondState(false)
  setThirdState(true)
}

export const IconHandler = (value) => {
  const {
    e,
    ref,
    setAddPictureState,
    setTagPeopleState,
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
    setSettingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    messageState,
    notificationState,
    setGoBack,
  } = value
  e.stopPropagation()
  const _ = ref.current.classList
  const classNames = Object.values(_)
  if (classNames.includes('text-green-600')) {
    setAddPictureState(true)
  }

  if (classNames.includes('text-blue-600')) {
    console.log('comeing back')
    setTagPeopleState(true)
    setCreatePostState(false)
    setGoBack(false)
  }

  if (classNames.includes('messenger')) {
    setMessageState(!messageState)
    setNotificationState(false)
    setProfileState(false)
  }

  if (classNames.includes('notification')) {
    setMessageState(false)
    setProfileState(false)
    setNotificationState(!notificationState)
  }

  if (classNames.includes('Settings')) {
    setSettingsState(true)
    setProfileState(false)
  }
  if (classNames.includes('support')) {
    setSupportState(true)
    setProfileState(false)
  }
  if (classNames.includes('accessibility')) {
    setDisplayState(true)
    setProfileState(false)
  }
  if (classNames.includes('feedback')) {
    setFeedbackState(true)
    setProfileState(false)
  }
  if (
    classNames.includes('me') ||
    classNames.includes('public') ||
    classNames.includes('friends') ||
    classNames.includes('specific') ||
    classNames.includes('custom')
  ) {
    console.log(ref)
    // console.log(ref.current.innerText.split(' '))
    console.log(ref.current.lastChild)
    _.add('bg-blue-500')
  }
}
export const toggleAudience = () => {}
