// import  {UseGlobalContext} from '../Context/UseContext'
const Reducer = (state, action) => {
  switch (action.type) {
    case 'come':
      return
    case 'add':
      state = [...state, action.payload]
      return state
    default:
      return state
  }
}

export default Reducer
