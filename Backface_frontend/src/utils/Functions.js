import { useGlobalContext } from '../Context/UseContext'

export const refresh = async () => {
  window.location.reload()
}

export const audience = (setcre, setaud) => {
  setaud(true)
  setcre(false)
}

export const previous = (setcre, setaud, goback) => {
  setaud(false)
  setcre(true)
  goback(true)
}

export const iconHandler = (e, iconRef) => {
  e.stopPropagation()
  const _ = iconRef.current.classList
}
