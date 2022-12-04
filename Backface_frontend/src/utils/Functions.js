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
    setGoBack,
    tagPeopleState,
    createPostState,
  } = value
  e.stopPropagation()
  const classNames = Object.values(ref.current.classList)
  if (classNames.includes('text-green-600')) {
    setAddPictureState(true)
  }

  if (classNames.includes('text-blue-600')) {
    setTagPeopleState(true)
    setGoBack(false)
  }
}
