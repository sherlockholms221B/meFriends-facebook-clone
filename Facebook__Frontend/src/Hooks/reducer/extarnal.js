//external api call

//action types aleady decleared
import { GET_ALL_POST, GET_SINGLE_POST, LIKE_POST } from '../../Functions/type';

export default function externalReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POST:
      return [...state, ...action.payload];
    case GET_SINGLE_POST:
      if (state.length) {
        return [...state.filter((post) => post._id === action.payload[0]._id)];
      }
      return [...state, ...action.payload];
    case LIKE_POST:
      console.log(action.payload, state);

      return [...state, ...action.payload.posts];
    default:
      throw new Error('Unhandled action type');
  }
}
