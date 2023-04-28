// Don't edith this folder if you don't know what you are doing. @santus
//
import {
  ADD_VIDEO_FILE,
  ADD_iMAGE_FILE,
  SIDE_GROUP,
  SIDE_MENU,
  SIDE_SHORT_CUT,
  LOADING,
} from '../../Functions/type'

//reducer function
export default function reducer(state, action) {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.value }
    }
    case SIDE_GROUP:
    case SIDE_SHORT_CUT:
    case SIDE_MENU: {
      //get action name
      const name = action.name

      //distructure action state from reducer state
      const {
        sidebaraction: { SIDE_MENU, SIDE_GROUP, SIDE_SHORT_CUT },
      } = state

      //filter out the current and return a boolean if any action is active or other wise
      const _boolean_arr = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT]
        .filter((value) => value.name !== name)
        .findIndex((value, index) => value[name] === Boolean(index + 1))
      const _boolean_arr_ = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT].findIndex(
        (value, index) => value[name] === Boolean(index + 1)
      )
      let _BOO = Boolean(_boolean_arr + 1)
      let _BOO_ = Boolean(_boolean_arr_ + 1)

      if (_BOO) {
        return {
          ...state,
          sidebaraction: {
            ...state.sidebaraction,
            [name]: { ...state.sidebaraction[name], [name]: action.value },
          },
        }
      } else if (_BOO_) {
        return {
          ...state,
          sidebaraction: {
            ...state.sidebaraction,
            [name]: { ...state.sidebaraction[name], [name]: !action.value },
          },
        }
      }
      return {
        ...state,
        sidebaraction: {
          ...state.sidebaraction,
          [name]: { ...state.sidebaraction[name], [name]: action.value },
        },
      }
    }

    case ADD_iMAGE_FILE:
    case ADD_VIDEO_FILE:
      const filetype = action.value.mimeType
      const value = { ...action.value, filename: filetype }
      return {
        ...state,
        postfile: [...state.postfile, value],
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
