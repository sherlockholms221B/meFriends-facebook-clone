import { getAllPostCall } from '../api'
import { GET_ALL_POST } from '../type'

const getAllPost = async (dispatch, { _id }) => {
  try {
    const { data, status, statusText } = await getAllPostCall(_id)

    dispatch({ type: GET_ALL_POST, value: { data, status, statusText } })
    //     console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export { getAllPost }
