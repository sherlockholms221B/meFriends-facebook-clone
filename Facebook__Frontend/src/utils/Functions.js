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

export const iconHandler = (value) => {
  const {
    e,
    ref,
    setAddPictureState,
    setTagPeopleState,
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
    messageState,
    notificationState,
    setGoBack,
  } = value
  e.stopPropagation()
  const classNames = Object.values(ref.current.classList)
  if (classNames.includes('text-green-600')) {
    setAddPictureState(true)
  }

  if (classNames.includes('text-blue-600')) {
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
}