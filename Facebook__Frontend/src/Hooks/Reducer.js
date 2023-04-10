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
          [action.name]: true,
        }
      } else if (name === 'menuSideLink' && (shortCut || groupSlideLink)) {
        return {
          ...state,
          shortCut: false,
          groupSlideLink: false,
          [action.name]: true,
        }
      } else if (name === 'groupSlideLink' && (shortCut || menuSideLink)) {
        return {
          ...state,
          shortCut: false,
          menuSideLink: false,
          [action.name]: true,
        }
      } else if (menuSideLink || shortCut || groupSlideLink) {
        return { ...state, [action.name]: !action.value }
      }
      return { ...state, [action.name]: action.value }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
