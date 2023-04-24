//external api call

//action types aleady decleared
import { GET_ALL_POST } from '../../Functions/type'

export default function externalReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POST:
      return [...action.value.data]

    default:
      return
  }
}
