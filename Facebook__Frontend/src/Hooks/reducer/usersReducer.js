import { GET_SINGLE_USER } from '../../Functions/type'

export default function userReducer(users = [], action) {
  switch (action._type) {
    case GET_SINGLE_USER:
      return [...action._payload]

    default:
      break
  }
}
