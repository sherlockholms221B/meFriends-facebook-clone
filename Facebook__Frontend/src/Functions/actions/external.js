import { client } from '../../utils/client'
import { allPostsQuery } from '../../utils/querries'
// import { getAllPostCall } from '../api'
import { GET_ALL_POST } from '../type'

const getAllPost = async (dispatch, { _id }) => {
  try {
    // const { data, status, statusText } = await getAllPostCall(_id)
    const query = allPostsQuery()
    const data = await client.fetch(query)

    dispatch({ type: GET_ALL_POST, value: data })
  } catch (error) {
    const { isNetworkError } = error
    console.log(isNetworkError)
    console.log(error)
    
  }
}

export { getAllPost }
