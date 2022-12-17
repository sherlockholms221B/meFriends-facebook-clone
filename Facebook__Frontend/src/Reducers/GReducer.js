const reducer = (state, action) => {
  switch (action.type) {
    case 'come':
      console.log(action.payload)
      return
    default:
      return state
  }
}

export default reducer
