// Context module functions
const loadingSet = (dispatch, value) => dispatch({ type: 'LOADING', value })
const SideMenu = (dispatch, { name, value }) =>
  dispatch({ type: 'SIDE_MENU', value, name })
const sideGroup = (dispatch, { value, name }) =>
  dispatch({ type: 'SIDE_GROUP', value, name })
const shortCuts = (dispatch, { name, value }) =>
  dispatch({ type: 'SIDE_SHORT_CUT', value, name })
const addFile = (dispatch, { value }, actionType) =>
  dispatch({ type: actionType, value })

export { loadingSet, sideGroup, SideMenu, shortCuts, addFile }
