// Amda  Dashboard React reducer
export default function reducer(state, action) {
  switch (action.type) {
    case 'LOADING': {
      return { ...state, loading: action.value }
    }
    case 'SIDE_GROUP':
    case 'SIDE_SHORT_CUT':
    case 'SIDE_MENU': {
      const name = action.name
      const { menuSideLink, shortCut, groupSlideLink } = state
      if (name === 'shortCut' && (menuSideLink || groupSlideLink)) {
        return {
          ...state,
          menuSideLink: false,
          groupSlideLink: false,
          [name]: true,
        }
      } else if (name === 'menuSideLink' && (shortCut || groupSlideLink)) {
        return {
          ...state,
          shortCut: false,
          groupSlideLink: false,
          [name]: true,
        }
      } else if (name === 'groupSlideLink' && (shortCut || menuSideLink)) {
        return {
          ...state,
          shortCut: false,
          menuSideLink: false,
          [name]: true,
        }
      } else if (menuSideLink || shortCut || groupSlideLink) {
        return { ...state, [name]: !action.value }
      }
      return { ...state, [name]: action.value }
    }

    case 'ADD_iMAGE_FILE':
      console.log(state)
      return {
        ...state,
        postfile: [...state.postfile, action.value],
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
