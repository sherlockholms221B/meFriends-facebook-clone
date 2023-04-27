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
//

const _name_arr = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT]

export default function reducer(state, action) {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.value }
    }
    case SIDE_GROUP:
    case SIDE_SHORT_CUT:
    case SIDE_MENU: {
      console.log(state.sidebaraction)
      const name = action.name
      const {
        sidebaraction: { SIDE_MENU, SIDE_GROUP, SIDE_SHORT_CUT },
      } = state

      const _boolean_arr = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT]
        .filter((value) => value.name !== name)
        .findIndex((value, index) => value[name] === Boolean(index + 1))
      const _boolean_arr_ = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT].findIndex(
        (value, index) => value[name] === Boolean(index + 1)
      )

      let _BOO = Boolean(_boolean_arr + 1)
      let _BOO_ = Boolean(_boolean_arr_ + 1)

      const [value] = [SIDE_GROUP, SIDE_MENU, SIDE_SHORT_CUT]
        .filter((value) => value.name !== name)
        .map((value) => {
          const togle = {
            [value.name]: {
              ...state.sidebaraction[value.name],
              [value.name]: !action.value,
            },
          }
          return togle
        })
      console.log(_boolean_arr, [value], 'boolean')
      if (_BOO) {
        return {
          ...state,
          sidebaraction: {
            ...state.sidebaraction,
            ...value,
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
      return {
        ...state,
        postfile: [...state.postfile, action.value],
      }
    case ADD_VIDEO_FILE:
      const filetype = action.mimeType
      const value = { ...action.value, _type: filetype }
      return {
        ...state,
        video: [...state.video, value],
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
