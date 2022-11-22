import { useGlobalContext } from '../Context/UseContext'

export const refresh = async () => {
  window.location.reload()
}

export const audience = (setcre, setaud) => {
  setaud(true)
  setcre(false)
}

export const previous = (setcre, setaud) => {
  setaud(false)
  setcre(true)
}
